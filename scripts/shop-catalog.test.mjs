import assert from 'node:assert/strict';
import test from 'node:test';
import * as catalog from '../src/shopCatalog.js';
import { locales } from '../src/locales.js';
import { validateShopOffer } from './verify-shop-catalog.mjs';

test('merged Office editions link directly to their intended SKU', () => {
  const editions = {
    allFormatSource: '29',
    htmlFormatSource: '30',
    commercialSource: '7',
    enterpriseSource: '8',
    licenseRenewal: '10'
  };
  for (const [key, sku] of Object.entries(editions)) {
    const url = new URL(catalog.SHOP_LINKS[key]);
    assert.equal(url.origin, 'https://dev.flyfish.group');
    assert.equal(url.pathname, '/shop/detail/1004');
    assert.equal(url.searchParams.get('sku'), sku, key);
    assert.equal(url.searchParams.has('skuId'), false);
  }
});

test('catalog prices match the current CNY and USD offerings', () => {
  assert.deepEqual(catalog.OFFICE_PRICING.developer, { cny: '599', usd: '93' });
  assert.deepEqual(catalog.OFFICE_PRICING.commercial, { cny: '1499', usd: '232' });
  assert.deepEqual(catalog.OFFICE_PRICING.enterprise, { cny: '4999', usd: '774' });
  assert.deepEqual(catalog.OFFICE_PRICING.renewal, { cny: '199', usd: '31' });
  assert.deepEqual(catalog.OFFICE_PRICING.canvasResearch, { cny: '139', usd: '22' });
});

test('both languages expose developer engine choices and renewal terms', () => {
  for (const [locale, content] of Object.entries(locales)) {
    const developer = content.pricing.source.tiers.find((tier) => tier.key === 'developer');
    assert.deepEqual(developer.variants?.map((variant) => variant.key), ['allFormatSource', 'htmlFormatSource'], locale);
    assert.ok(content.pricing.source.renewal?.copy, locale);
    assert.equal(content.pricing.source.renewal?.price, catalog.OFFICE_PRICING.renewal[content.pricing.currencyCode.toLowerCase()]);
  }
});

test('unlisted Excel research goes to contact, not a nonexistent shop anchor', () => {
  assert.equal(catalog.SHOP_LINKS.excelSource, '#contact');
  assert.equal(catalog.SHOP_URL, 'https://dev.flyfish.group/shop/detail/1004');
});

test('published release and maintenance terms stay consistent in both languages', () => {
  for (const content of Object.values(locales)) {
    assert.equal(content.showcase.release.date, '2026-10-19');
    assert.ok(content.showcase.release.copy);
  }
  assert.match(locales['zh-CN'].pricing.source.renewal.copy, /永久运行授权不因未续费而失效/);
  assert.match(locales['en-US'].pricing.source.renewal.copy, /perpetual runtime license does not expire/);
  assert.doesNotMatch(locales['en-US'].pricing.source.renewal.copy, /continued licensing/);
});

test('release validation rejects stale, disabled or repriced purchase targets', () => {
  const offer = catalog.SHOP_OFFERS.commercialSource;
  const item = {
    id: '1004', enabled: true,
    skus: [{ id: 7, code: 'COMMERCIAL', enabled: true, price: 1499, effectiveUsdPrice: 232 }]
  };
  assert.doesNotThrow(() => validateShopOffer('commercial', offer, item));
  assert.throws(() => validateShopOffer('commercial', offer, { ...item, enabled: false }), /not on sale/);
  assert.throws(() => validateShopOffer('commercial', offer, { ...item, skus: [] }), /missing/);
  for (const [field, value, error] of [
    ['code', 'ENTERPRISE', /no longer matches/],
    ['enabled', false, /not on sale/],
    ['price', 999, /CNY price changed/],
    ['effectiveUsdPrice', 222, /USD price changed/]
  ]) {
    const changed = { ...item, skus: [{ ...item.skus[0], [field]: value }] };
    assert.throws(() => validateShopOffer('commercial', offer, changed), error);
  }
  assert.throws(() => validateShopOffer('single', { itemId: '1004', price: offer.price }, item), /explicit SKU/);
});

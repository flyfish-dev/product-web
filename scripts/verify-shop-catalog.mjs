import assert from 'node:assert/strict';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { SHOP_OFFERS } from '../src/shopCatalog.js';

export function validateShopOffer(key, offer, item) {
  assert.equal(String(item.id), offer.itemId, `${key}: item ID changed`);
  assert.equal(item.enabled, true, `${key}: item is not on sale`);
  let selected = item;
  if (offer.skuId) {
    selected = item.skus?.find((sku) => String(sku.id) === offer.skuId);
    assert.ok(selected, `${key}: SKU ${offer.skuId} is missing`);
    assert.equal(selected.enabled, true, `${key}: SKU is not on sale`);
    assert.equal(selected.code, offer.skuCode, `${key}: SKU no longer matches the edition`);
  } else {
    assert.ok(!item.skus?.some((sku) => sku.enabled), `${key}: item now needs an explicit SKU`);
  }
  assert.equal(Number(selected.price), Number(offer.price.cny), `${key}: CNY price changed`);
  assert.equal(Number(selected.effectiveUsdPrice), Number(offer.price.usd), `${key}: USD price changed`);
}

async function verifyCatalog() {
  const items = new Map();
  for (const [key, offer] of Object.entries(SHOP_OFFERS)) {
    if (!items.has(offer.itemId)) {
      const response = await fetch(`https://api.flyfish.group/shops/items/${offer.itemId}`, {
        signal: AbortSignal.timeout(20000)
      });
      assert.ok(response.ok, `Shop API returned ${response.status}`);
      const payload = await response.json();
      assert.equal(payload.success, true, 'Shop API did not return a successful result');
      assert.ok(payload.result, 'Shop API did not return product details');
      items.set(offer.itemId, payload.result);
    }
    validateShopOffer(key, offer, items.get(offer.itemId));
    console.log(`OK ${key}: item ${offer.itemId}${offer.skuId ? ` / SKU ${offer.skuId}` : ''}, CNY ${offer.price.cny}, USD ${offer.price.usd}`);
  }
  console.log(`Verified ${Object.keys(SHOP_OFFERS).length} purchase targets against the live public catalog. No orders created.`);
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  await verifyCatalog();
}

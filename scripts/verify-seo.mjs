import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { DEFAULT_LOCALE, LANGUAGE_OPTIONS } from '../src/locales.js';
import { SHOP_LINKS } from '../src/shopCatalog.js';

const origin = 'https://product.flyfish.group';
for (const locale of LANGUAGE_OPTIONS.map((item) => item.code)) {
  const html = await readFile(`dist/${locale}/index.html`, 'utf8');
  assert.ok(html.includes(`rel="canonical" href="${origin}/${locale}/"`));
  assert.ok(html.includes('<h1>'));
  assert.ok(!html.includes('noindex'));
  for (const [key, url] of Object.entries(SHOP_LINKS)) {
    assert.ok(html.includes(`href="${url}"`), `${locale}: missing ${key} purchase/contact link`);
  }
  assert.ok(!/shop\/detail\/100[78](?:[?"#])/.test(html), `${locale}: retired product link`);
  assert.ok(!html.includes('shop/item-list#contact'), `${locale}: invalid contact anchor`);
  assert.ok(!html.includes('undefined'), `${locale}: incomplete static content`);
  assert.ok(html.includes('pricing-renewal'), `${locale}: missing renewal terms`);
}
const root = await readFile('dist/index.html', 'utf8');
assert.ok(root.includes(`rel="canonical" href="${origin}/${DEFAULT_LOCALE}/"`));
const sitemap = await readFile('dist/sitemap.xml', 'utf8');
assert.equal([...sitemap.matchAll(/<loc>/g)].length, LANGUAGE_OPTIONS.length);
assert.ok(!sitemap.includes(`<loc>${origin}/</loc>`));
const notFound = await readFile('dist/404.html', 'utf8');
assert.ok(notFound.includes('noindex'));
assert.ok(!notFound.includes('<style>'));
console.log('Office Preview canonical, sitemap, purchase links, static content and 404 checks passed.');

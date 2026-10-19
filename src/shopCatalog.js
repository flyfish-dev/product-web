// Verified against the public shop catalog on 2026-10-10.
// Keep SKU IDs, stable codes and effective prices together for release validation.
export const SHOP_OFFERS = {
  fullDeployment: { itemId: '1005', price: { cny: '129', usd: '20' } },
  allFormatSource: { itemId: '1004', skuId: '29', skuCode: 'CANVAS_DOCX', price: { cny: '599', usd: '93' } },
  htmlFormatSource: { itemId: '1004', skuId: '30', skuCode: 'HTML_DOCXJS', price: { cny: '599', usd: '93' } },
  commercialSource: { itemId: '1004', skuId: '7', skuCode: 'COMMERCIAL', price: { cny: '1499', usd: '232' } },
  enterpriseSource: { itemId: '1004', skuId: '8', skuCode: 'ENTERPRISE', price: { cny: '4999', usd: '774' } },
  licenseRenewal: { itemId: '1004', skuId: '10', skuCode: 'RENEWAL', price: { cny: '199', usd: '31' } },
  docSource: { itemId: '2', price: { cny: '99', usd: '15' } },
  docxSource: { itemId: '1003', price: { cny: '99', usd: '15' } },
  docxCanvasSource: { itemId: '1010', price: { cny: '139', usd: '22' } },
  pptSource: { itemId: '1002', price: { cny: '99', usd: '15' } },
  pptxSource: { itemId: '1', price: { cny: '99', usd: '15' } }
};

export function shopDetailUrl(id, skuId) {
  const url = new URL(`https://dev.flyfish.group/shop/detail/${encodeURIComponent(id)}`);
  if (skuId != null) url.searchParams.set('sku', skuId);
  return url.href;
}

export const SHOP_URL = shopDetailUrl('1004');

export const SHOP_LINKS = {
  ...Object.fromEntries(Object.entries(SHOP_OFFERS).map(([key, offer]) => [key, shopDetailUrl(offer.itemId, offer.skuId)])),
  // Excel has no standalone public listing; do not imply a purchasable SKU.
  excelSource: '#contact'
};

export const OFFICE_PRICING = {
  deployment: SHOP_OFFERS.fullDeployment.price,
  singleResearch: SHOP_OFFERS.docSource.price,
  canvasResearch: SHOP_OFFERS.docxCanvasSource.price,
  developer: SHOP_OFFERS.allFormatSource.price,
  commercial: SHOP_OFFERS.commercialSource.price,
  enterprise: SHOP_OFFERS.enterpriseSource.price,
  renewal: SHOP_OFFERS.licenseRenewal.price
};

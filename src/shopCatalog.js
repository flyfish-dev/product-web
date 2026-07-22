export const SHOP_URL = 'https://dev.flyfish.group/shop/item-list';

export const SHOP_ITEM_IDS = {
  fullDeployment: '1005',
  allFormatSource: '1004',
  commercialSource: '1007',
  enterpriseSource: '1008',
  docSource: '2',
  docxSource: '1003',
  docxCanvasSource: '1010',
  pptSource: '1002',
  pptxSource: '1'
};

export const shopDetailUrl = (id) => `https://dev.flyfish.group/shop/detail/${id}`;

export const SHOP_LINKS = {
  fullDeployment: shopDetailUrl(SHOP_ITEM_IDS.fullDeployment),
  allFormatSource: shopDetailUrl(SHOP_ITEM_IDS.allFormatSource),
  commercialSource: shopDetailUrl(SHOP_ITEM_IDS.commercialSource),
  enterpriseSource: shopDetailUrl(SHOP_ITEM_IDS.enterpriseSource),
  docSource: shopDetailUrl(SHOP_ITEM_IDS.docSource),
  docxSource: shopDetailUrl(SHOP_ITEM_IDS.docxSource),
  docxCanvasSource: shopDetailUrl(SHOP_ITEM_IDS.docxCanvasSource),
  pptSource: shopDetailUrl(SHOP_ITEM_IDS.pptSource),
  pptxSource: shopDetailUrl(SHOP_ITEM_IDS.pptxSource),
  excelSource: `${SHOP_URL}#contact`
};

// Verified against the live Flyfish Shop catalog on 2026-07-22.
// USD values use the shop's effective USD prices and are the amounts sent to Stripe.
export const OFFICE_PRICING = {
  deployment: { cny: '129', usd: '20' },
  singleResearch: { cny: '99', usd: '15' },
  developer: { cny: '599', usd: '89' },
  commercial: { cny: '1499', usd: '222' },
  enterprise: { cny: '4999', usd: '738' }
};

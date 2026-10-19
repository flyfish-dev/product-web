# Flyfish Office Preview Product Website

This repository contains the public product website for **Flyfish Office Preview**, an Office document preview solution for business systems.

## Purpose

The site is used to present the product value, supported formats, preview experience, licensing options, deployment service, purchase links, and support contact information.

It supports:

- A professional marketing homepage for Flyfish Office Preview
- Chinese and English content managed through a shared locale configuration
- English as the default root experience, with automatic Chinese selection only when the browser's primary language is Chinese
- Direct language URLs for SEO:
  - `/zh-CN/`
  - `/en-US/`
- Static prerendered HTML for search engine crawling
- Cloudflare Pages deployment for `product.flyfish.group` and `office.flyfish.dev`

## Tech Stack

- React
- Vite
- Lucide React icons
- Static SEO prerender script
- Cloudflare Pages hosting

## Development

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

The production build generates normal Vite assets and prerendered SEO pages under `dist/`.

## Deployment

The site is deployed through Cloudflare Pages. Production domains:

- https://product.flyfish.group
- https://office.flyfish.dev

Build and deploy manually:

```bash
npm test
npm run verify:shop
npm run build
npx wrangler pages deploy dist --project-name office-product-site --branch main
```

Cloudflare Pages reads the static routing and security headers from:

- `public/_redirects`
- `public/_headers`

Custom domains should point to the Pages production domain:

```text
product.flyfish.group CNAME office-product-site.pages.dev
office.flyfish.dev    CNAME office-product-site.pages.dev
```

## Shop Catalog

`src/shopCatalog.js` is the shared source of product IDs, SKU codes, deep links and CNY/USD prices for both the React page and prerendered HTML. All Office suite editions use product `1004` with an explicit `?sku=` selection:

| Edition | SKU |
| --- | --- |
| Developer, Canvas DOCX | `29` |
| Developer, HTML DOCXJS | `30` |
| Commercial | `7` |
| Enterprise | `8` |
| Existing-license renewal | `10` |

Deployment and individual-format source purchases retain their standalone product links. Excel research uses the contact section until a standalone listing is available.

Before every release, `npm run verify:shop` checks the public shop API for availability, SKU identity and effective CNY/USD prices. It fails if a listing changes; review the catalog and both locales before publishing. It only reads public product data and never creates an order. No shop API request is needed to render the marketing site.

## Notes

This repository is for the product website only. It does not contain the proprietary Office document parser/viewer implementation.

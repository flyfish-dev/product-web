# Flyfish Office Preview Product Website

This repository contains the public product website for **Flyfish Office Preview**, an Office document preview solution for business systems.

## Purpose

The site is used to present the product value, supported formats, preview experience, licensing options, deployment service, purchase links, and support contact information.

It supports:

- A professional marketing homepage for Flyfish Office Preview
- Chinese and English content managed through a shared locale configuration
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

## Notes

This repository is for the product website only. It does not contain the proprietary Office document parser/viewer implementation.

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
- Vercel deployment for `product.flyfish.group`

## Tech Stack

- React
- Vite
- Lucide React icons
- Static SEO prerender script
- Vercel hosting

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

The site is deployed through Vercel. The production domain is:

https://product.flyfish.group

## Notes

This repository is for the product website only. It does not contain the proprietary Office document parser/viewer implementation.

import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { DEFAULT_LOCALE, LANGUAGE_OPTIONS, locales } from '../src/locales.js';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const distDir = path.join(rootDir, 'dist');
const siteUrl = 'https://product.flyfish.group';
const shopUrl = 'https://dev.flyfish.group/shop/item-list';
const demoUrl = 'https://demo.flyfish.group';
const supportEmail = 'wybaby168@gmail.com';
const supportWechat = 'Yous_Gift';
const shopDetailUrl = (id) => `https://dev.flyfish.group/shop/detail/${id}`;
const shopLinks = {
  fullDeployment: shopDetailUrl('1005'),
  allFormatSource: shopDetailUrl('1004'),
  docSource: shopDetailUrl('2'),
  docxSource: shopDetailUrl('1003'),
  pptSource: shopDetailUrl('1002'),
  pptxSource: shopDetailUrl('1')
};
const deploymentUrls = {
  deployment: shopLinks.fullDeployment,
  local: demoUrl
};
const sourceUrls = {
  developer: shopLinks.allFormatSource,
  DOC: shopLinks.docSource,
  DOCX: shopLinks.docxSource,
  PPT: shopLinks.pptSource,
  PPTX: shopLinks.pptxSource
};
const showcaseImages = [
  '/assets/preview-word.png',
  '/assets/preview-slides.png',
  '/assets/preview-spreadsheet.png'
];

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function renderList(items) {
  return `<ul>${items.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>`;
}

function renderPrice(price) {
  return price === '免费' || price === 'Free' ? escapeHtml(price) : `¥${escapeHtml(price)}`;
}

function renderStaticContent(locale) {
  const content = locales[locale] || locales[DEFAULT_LOCALE];
  const alternateLocale = LANGUAGE_OPTIONS.find((option) => option.code !== locale);

  return `
    <div class="site seo-static" data-locale="${escapeHtml(locale)}">
      <section class="hero" id="top">
        <img class="hero-media" src="/assets/office-hero-banner.png" alt="${escapeHtml(content.hero.imageAlt)}" />
        <div class="hero-overlay"></div>
        <header class="nav">
          <a class="brand" href="#top" aria-label="${escapeHtml(content.nav.homeLabel)}">
            <span class="brand-mark" aria-hidden="true">F</span>
            <span>Flyfish Office Preview</span>
          </a>
          <nav class="nav-links" aria-label="${escapeHtml(content.nav.ariaLabel)}">
            ${content.nav.links.map((item) => `<a href="${escapeHtml(item.href)}">${escapeHtml(item.label)}</a>`).join('')}
          </nav>
          <div class="nav-actions">
            <div class="language-switcher" aria-label="${escapeHtml(content.languageSwitcher.ariaLabel)}">
              ${LANGUAGE_OPTIONS.map((option) => `<a class="${option.code === locale ? 'active' : ''}" href="/${escapeHtml(option.code)}/" aria-label="${escapeHtml(option.label)}">${escapeHtml(option.shortLabel)}</a>`).join('')}
            </div>
            <a class="nav-buy" href="${shopUrl}"><span class="nav-buy-label">${escapeHtml(content.nav.buy)}</span></a>
          </div>
        </header>
        <div class="hero-content">
          <p class="eyebrow">${escapeHtml(content.hero.eyebrow)}</p>
          <h1>${escapeHtml(content.hero.title)}</h1>
          <p class="hero-copy">${escapeHtml(content.hero.copy)}</p>
          <div class="hero-actions">
            <a class="button button-primary" href="${shopUrl}">${escapeHtml(content.hero.primaryCta)}</a>
            <a class="button button-secondary" href="${demoUrl}">${escapeHtml(content.hero.secondaryCta)}</a>
          </div>
          <div class="hero-metrics" aria-label="${escapeHtml(content.hero.metricsAria)}">
            ${content.hero.metrics.map((item) => `<span>${escapeHtml(item)}</span>`).join('')}
          </div>
        </div>
      </section>

      <main>
        <section class="format-strip" id="formats" aria-label="${escapeHtml(content.formats.ariaLabel)}">
          <div class="section-inner">
            <div class="section-heading compact">
              <p class="eyebrow dark">${escapeHtml(content.formats.eyebrow)}</p>
              <h2>${escapeHtml(content.formats.title)}</h2>
            </div>
            <div class="format-grid">
              ${content.formats.items.map((item) => `
                <article class="format-card">
                  <strong>${escapeHtml(item.label)}</strong>
                  <span>${escapeHtml(item.title)}</span>
                </article>
              `).join('')}
            </div>
          </div>
        </section>

        <section class="showcase section" id="showcase">
          <div class="section-inner">
            <div class="section-heading">
              <p class="eyebrow dark">${escapeHtml(content.showcase.eyebrow)}</p>
              <h2>${escapeHtml(content.showcase.title)}</h2>
              <p>${escapeHtml(content.showcase.copy)}</p>
            </div>
            <div class="showcase-grid">
              ${content.showcase.items.map((item, index) => `
                <article class="showcase-card">
                  <div class="showcase-image">
                    <img src="${showcaseImages[index]}" alt="${escapeHtml(`${item.title} ${content.showcase.screenshotSuffix}`)}" />
                  </div>
                  <div class="showcase-copy">
                    <span>${escapeHtml(item.eyebrow)}</span>
                    <h3>${escapeHtml(item.title)}</h3>
                    ${renderList(item.points)}
                  </div>
                </article>
              `).join('')}
            </div>
          </div>
        </section>

        <section class="section strengths">
          <div class="section-inner">
            <div class="section-heading">
              <p class="eyebrow dark">${escapeHtml(content.strengths.eyebrow)}</p>
              <h2>${escapeHtml(content.strengths.title)}</h2>
              <p>${escapeHtml(content.strengths.copy)}</p>
            </div>
            <div class="strength-grid">
              ${content.strengths.items.map((item) => `
                <article class="strength-card">
                  <h3>${escapeHtml(item.title)}</h3>
                  <p>${escapeHtml(item.copy)}</p>
                </article>
              `).join('')}
            </div>
          </div>
        </section>

        <section class="section architecture" id="architecture">
          <div class="section-inner architecture-layout">
            <div class="section-heading left">
              <p class="eyebrow dark">${escapeHtml(content.architecture.eyebrow)}</p>
              <h2>${escapeHtml(content.architecture.title)}</h2>
              <p>${escapeHtml(content.architecture.copy)}</p>
              <div class="architecture-actions">
                <a class="button button-dark" href="${demoUrl}">${escapeHtml(content.architecture.cta)}</a>
              </div>
            </div>
            <div class="pipeline" aria-label="${escapeHtml(content.architecture.flowAria)}">
              ${content.architecture.steps.map((item, index) => `
                <article class="pipeline-step">
                  <div class="step-index">${String(index + 1).padStart(2, '0')}</div>
                  <h3>${escapeHtml(item.label)}</h3>
                  <p>${escapeHtml(item.text)}</p>
                </article>
              `).join('')}
            </div>
          </div>
        </section>

        <section class="scenario-band">
          <div class="section-inner scenario-layout">
            <div>
              <p class="eyebrow">${escapeHtml(content.scenarios.eyebrow)}</p>
              <h2>${escapeHtml(content.scenarios.title)}</h2>
            </div>
            <div class="scenario-list">
              ${content.scenarios.items.map((item) => `<span>${escapeHtml(item)}</span>`).join('')}
            </div>
          </div>
        </section>

        <section class="section pricing" id="pricing">
          <div class="section-inner">
            <div class="section-heading pricing-heading">
              <p class="eyebrow dark">${escapeHtml(content.pricing.eyebrow)}</p>
              <h2>${escapeHtml(content.pricing.title)}</h2>
              <p>${escapeHtml(content.pricing.copy)}</p>
            </div>
            <div class="pricing-groups">
              <section class="pricing-group" aria-labelledby="deployment-pricing-title-static-${escapeHtml(locale)}">
                <div class="pricing-group-head">
                  <span>${escapeHtml(content.pricing.deployment.label)}</span>
                  <h3 id="deployment-pricing-title-static-${escapeHtml(locale)}">${escapeHtml(content.pricing.deployment.title)}</h3>
                  <p>${escapeHtml(content.pricing.deployment.copy)}</p>
                </div>
                <div class="pricing-deployment-grid">
                  ${content.pricing.deployment.plans.map((plan) => `
                    <article class="pricing-card${plan.key === 'deployment' ? ' featured deploy-featured' : ''}">
                      <div class="pricing-card-head">
                        <span class="pricing-kicker">${escapeHtml(plan.badge)}</span>
                        <h4>${escapeHtml(plan.name)}</h4>
                        <div class="price-line"><strong>${renderPrice(plan.price)}</strong></div>
                        <p>${escapeHtml(plan.copy)}</p>
                      </div>
                      ${renderList(plan.points)}
                      <a class="button pricing-button" href="${deploymentUrls[plan.key] || demoUrl}">${escapeHtml(plan.cta)}</a>
                    </article>
                  `).join('')}
                </div>
              </section>
              <section class="pricing-group" aria-labelledby="source-pricing-title-static-${escapeHtml(locale)}">
                <div class="pricing-group-head">
                  <span>${escapeHtml(content.pricing.source.label)}</span>
                  <h3 id="source-pricing-title-static-${escapeHtml(locale)}">${escapeHtml(content.pricing.source.title)}</h3>
                  <p>${escapeHtml(content.pricing.source.copy)}</p>
                </div>
                <div class="pricing-source-grid">
                  ${content.pricing.source.tiers.map((tier) => `
                    <article class="pricing-card${tier.key === 'commercial' ? ' featured source-featured' : ''}">
                      <div class="pricing-card-head">
                        <span class="pricing-kicker">${escapeHtml(tier.badge)}</span>
                        <h4>${escapeHtml(tier.name)}</h4>
                        <div class="price-line"><strong>${renderPrice(tier.price)}</strong></div>
                        <p>${escapeHtml(tier.copy)}</p>
                      </div>
                      ${renderList(tier.points)}
                      ${tier.links ? `
                        <div class="pricing-link-list" aria-label="${escapeHtml(`${tier.name} ${content.pricing.source.singleLinksAriaSuffix}`)}">
                          ${tier.links.map((link) => `<a class="pricing-mini-link" href="${sourceUrls[link.code]}"><strong>${escapeHtml(link.code)}</strong><small>${escapeHtml(link.label)}</small></a>`).join('')}
                        </div>
                      ` : `<a class="button pricing-button" href="${tier.key === 'developer' ? sourceUrls.developer : '#contact'}">${escapeHtml(tier.cta)}</a>`}
                    </article>
                  `).join('')}
                </div>
              </section>
            </div>
            <div class="pricing-policy">
              <span><strong>${escapeHtml(content.pricing.policy.title)}</strong> ${escapeHtml(content.pricing.policy.body)}</span>
            </div>
          </div>
        </section>

        <section class="section commercial" id="contact">
          <div class="section-inner commercial-layout">
            <div class="commercial-copy">
              <p class="eyebrow dark">${escapeHtml(content.contact.eyebrow)}</p>
              <h2>${escapeHtml(content.contact.title)}</h2>
              <p>${escapeHtml(content.contact.copy)}</p>
            </div>
            <div class="contact-panel">
              <a class="contact-row strong" href="${shopUrl}"><span><strong>${escapeHtml(content.contact.rows.shop)}</strong><small>https://dev.flyfish.group/shop/item-list</small></span></a>
              <a class="contact-row" href="mailto:${supportEmail}"><span><strong>${escapeHtml(content.contact.rows.email)}</strong><small>${supportEmail}</small></span></a>
              <div class="contact-row"><span><strong>${escapeHtml(content.contact.rows.wechat)}</strong><small>${supportWechat}</small></span></div>
              <a class="contact-row" href="${demoUrl}"><span><strong>${escapeHtml(content.contact.rows.demo)}</strong><small>demo.flyfish.group</small></span></a>
            </div>
          </div>
        </section>

        <footer class="section-inner seo-footer">
          <a href="/${escapeHtml(alternateLocale.code)}/">${escapeHtml(alternateLocale.label)}</a>
        </footer>
      </main>
    </div>
  `;
}

function injectHead(html, locale, canonicalPath) {
  const content = locales[locale] || locales[DEFAULT_LOCALE];
  const canonicalUrl = `${siteUrl}${canonicalPath}`;
  const seoLinks = `
    <!-- SEO_LOCALE_LINKS_START -->
    <link rel="canonical" href="${canonicalUrl}" />
    ${LANGUAGE_OPTIONS.map((option) => `<link rel="alternate" hreflang="${option.code}" href="${siteUrl}/${option.code}/" />`).join('\n    ')}
    <link rel="alternate" hreflang="x-default" href="${siteUrl}/" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${canonicalUrl}" />
    <meta property="og:title" content="${escapeHtml(content.meta.title)}" />
    <meta property="og:description" content="${escapeHtml(content.meta.description)}" />
    <meta property="og:image" content="${siteUrl}/assets/office-hero-banner.png" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(content.meta.title)}" />
    <meta name="twitter:description" content="${escapeHtml(content.meta.description)}" />
    <meta name="twitter:image" content="${siteUrl}/assets/office-hero-banner.png" />
    <!-- SEO_LOCALE_LINKS_END -->`;

  let output = html
    .replace(/<html lang="[^"]*">/, `<html lang="${locale}">`)
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(content.meta.title)}</title>`)
    .replace(/<meta\s+name="description"[\s\S]*?\/>/, `<meta name="description" content="${escapeHtml(content.meta.description)}" />`)
    .replace(/<!-- SEO_LOCALE_LINKS_START -->[\s\S]*?<!-- SEO_LOCALE_LINKS_END -->\s*/g, '')
    .replace(/\s*<link\s+rel="canonical"[\s\S]*?\/>/g, '')
    .replace(/\s*<link\s+rel="alternate"[\s\S]*?\/>/g, '');

  output = output.replace('</head>', `${seoLinks}\n  </head>`);
  output = output.replace(
    '<div id="root"></div>',
    `<div id="root">${renderStaticContent(locale)}</div>`
  );

  return output;
}

function renderSitemap() {
  const updatedAt = new Date().toISOString().slice(0, 10);
  const paths = ['/', ...LANGUAGE_OPTIONS.map((option) => `/${option.code}/`)];

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${paths.map((urlPath) => `  <url>
    <loc>${siteUrl}${urlPath}</loc>
    <lastmod>${updatedAt}</lastmod>
    ${LANGUAGE_OPTIONS.map((option) => `<xhtml:link rel="alternate" hreflang="${option.code}" href="${siteUrl}/${option.code}/" />`).join('\n    ')}
    <xhtml:link rel="alternate" hreflang="x-default" href="${siteUrl}/" />
  </url>`).join('\n')}
</urlset>
`;
}

async function writeLocalePage(baseHtml, locale, canonicalPath, filePath) {
  await mkdir(path.dirname(filePath), { recursive: true });
  await writeFile(filePath, injectHead(baseHtml, locale, canonicalPath), 'utf8');
}

const baseHtml = await readFile(path.join(distDir, 'index.html'), 'utf8');
await writeLocalePage(baseHtml, DEFAULT_LOCALE, '/', path.join(distDir, 'index.html'));
await Promise.all(
  LANGUAGE_OPTIONS.map((option) => writeLocalePage(
    baseHtml,
    option.code,
    `/${option.code}/`,
    path.join(distDir, option.code, 'index.html')
  ))
);
await writeFile(path.join(distDir, 'sitemap.xml'), renderSitemap(), 'utf8');
await writeFile(path.join(distDir, 'robots.txt'), `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`, 'utf8');

console.log(`Prerendered SEO pages: /, ${LANGUAGE_OPTIONS.map((option) => `/${option.code}/`).join(', ')}`);

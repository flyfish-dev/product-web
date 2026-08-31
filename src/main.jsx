import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight,
  BadgeCheck,
  BookOpenText,
  Braces,
  CheckCircle2,
  FileType2,
  FileSpreadsheet,
  FileText,
  Files,
  GalleryHorizontalEnd,
  Gauge,
  Layers3,
  Languages,
  LockKeyhole,
  Mail,
  MessageCircle,
  MonitorCheck,
  Newspaper,
  Play,
  Presentation,
  RefreshCw,
  Rocket,
  Send,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Sheet,
  TableProperties,
  Workflow,
  Zap
} from 'lucide-react';
import {
  DEFAULT_LOCALE,
  LANGUAGE_OPTIONS,
  LANGUAGE_STORAGE_KEY,
  getLocaleConfig
} from './locales';
import { SHOP_LINKS, SHOP_URL } from './shopCatalog';
import './styles.css';

const shopUrl = SHOP_URL;
const shopLinks = SHOP_LINKS;
const demoUrl = 'https://demo.flyfish.group';
const supportEmail = 'admin@flyfish.dev';
const siteUrl = 'https://product.flyfish.group';
const localeCodes = LANGUAGE_OPTIONS.map((option) => option.code);

const contactChannelMeta = {
  wechat: {
    icon: MessageCircle,
    image: '/assets/customer-wechat.jpg'
  },
  official: {
    icon: Newspaper,
    image: '/assets/wechat-official.png'
  },
  whatsapp: {
    icon: MessageCircle,
    url: 'https://wa.me/qr/DY3NG2HEGJFGL1'
  },
  telegram: {
    icon: Send,
    url: 'https://t.me/wybaby168'
  }
};

const formatMeta = [
  { icon: FileType2, tone: 'word' },
  { icon: Files, tone: 'word' },
  { icon: Presentation, tone: 'powerpoint' },
  { icon: GalleryHorizontalEnd, tone: 'powerpoint' },
  { icon: Sheet, tone: 'excel' },
  { icon: TableProperties, tone: 'excel' }
];

const strengthIcons = [
  Layers3,
  MonitorCheck,
  Zap,
  ShieldCheck,
  Workflow,
  RefreshCw
];

const pipelineIcons = [
  FileText,
  LockKeyhole,
  Braces,
  Sparkles
];

const partnerIcons = [
  ShieldCheck,
  MonitorCheck,
  BadgeCheck
];

const showcaseImages = [
  '/assets/preview-word.png',
  '/assets/preview-slides.png',
  '/assets/preview-spreadsheet.png'
];

const deploymentPlanMeta = {
  deployment: { featured: true, url: shopLinks.fullDeployment },
  local: { url: demoUrl }
};

const sourceTierMeta = {
  single: {},
  developer: { url: shopLinks.allFormatSource },
  commercial: { featured: true, url: shopLinks.commercialSource },
  enterprise: { url: shopLinks.enterpriseSource }
};

const sourceLinkMeta = {
  DOC: { url: shopLinks.docSource, icon: FileText, tone: 'word' },
  DOCX: { url: shopLinks.docxSource, icon: BookOpenText, tone: 'word' },
  'DOCX-CANVAS': { url: shopLinks.docxCanvasSource, icon: Layers3, tone: 'word' },
  PPT: { url: shopLinks.pptSource, icon: Presentation, tone: 'powerpoint' },
  PPTX: { url: shopLinks.pptxSource, icon: Play, tone: 'powerpoint' },
  EXCEL: { url: shopLinks.excelSource, icon: FileSpreadsheet, tone: 'excel' }
};

function getLocaleFromPathname(pathname) {
  const firstSegment = pathname.replace(/^\/+/, '').split('/')[0];
  return localeCodes.includes(firstSegment) ? firstSegment : null;
}

function isRootEntryPath(pathname) {
  return pathname === '/' || pathname === '';
}

function getLocalePath(locale) {
  return `/${locale}/`;
}

function getLocalizedHref(locale) {
  if (typeof window === 'undefined') {
    return getLocalePath(locale);
  }

  return `${getLocalePath(locale)}${window.location.hash || ''}`;
}

function ensureHeadTag(selector, createTag) {
  const existing = document.head.querySelector(selector);

  if (existing) {
    return existing;
  }

  const tag = createTag();
  document.head.appendChild(tag);
  return tag;
}

function updateMetaTag(name, content) {
  const tag = ensureHeadTag(`meta[name="${name}"]`, () => {
    const meta = document.createElement('meta');
    meta.name = name;
    return meta;
  });

  tag.setAttribute('content', content);
}

function updateSeoLinks(locale, content) {
  updateMetaTag('description', content.meta.description);

  const hasExplicitLocalePath = typeof window !== 'undefined'
    ? Boolean(getLocaleFromPathname(window.location.pathname))
    : true;
  const canonicalPath = hasExplicitLocalePath ? getLocalePath(locale) : '/';
  const canonical = ensureHeadTag('link[rel="canonical"]', () => {
    const link = document.createElement('link');
    link.rel = 'canonical';
    return link;
  });
  canonical.href = `${siteUrl}${canonicalPath}`;

  LANGUAGE_OPTIONS.forEach((option) => {
    const alternate = ensureHeadTag(`link[rel="alternate"][hreflang="${option.code}"]`, () => {
      const link = document.createElement('link');
      link.rel = 'alternate';
      link.hreflang = option.code;
      return link;
    });
    alternate.href = `${siteUrl}${getLocalePath(option.code)}`;
  });

  const defaultAlternate = ensureHeadTag('link[rel="alternate"][hreflang="x-default"]', () => {
    const link = document.createElement('link');
    link.rel = 'alternate';
    link.hreflang = 'x-default';
    return link;
  });
  defaultAlternate.href = `${siteUrl}/`;
}

function storeLocalePreference(locale) {
  try {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, locale);
  } catch {
    // Language selection remains URL-driven when browser storage is unavailable.
  }
}

function getBrowserLanguages() {
  const languages = Array.isArray(window.navigator.languages)
    ? window.navigator.languages
    : [];
  const candidates = [...languages, window.navigator.language]
    .filter(Boolean)
    .map((language) => language.toLowerCase());

  return [...new Set(candidates)];
}

function isLikelyCrawler() {
  const userAgent = window.navigator.userAgent.toLowerCase();
  return /bot|crawler|spider|slurp|bingpreview|baiduspider|bytespider|duckduckbot|googlebot|yandexbot|facebookexternalhit|twitterbot|linkedinbot|semrush|ahrefs/.test(userAgent);
}

function detectLocaleFromBrowserFeatures() {
  const languages = getBrowserLanguages();
  const primaryLanguage = languages[0] || '';

  return primaryLanguage.startsWith('zh') ? 'zh-CN' : 'en-US';
}

function resolveInitialLocale() {
  if (typeof window === 'undefined') {
    return DEFAULT_LOCALE;
  }

  const pathLocale = getLocaleFromPathname(window.location.pathname);
  if (pathLocale) {
    return pathLocale;
  }

  if (isRootEntryPath(window.location.pathname) && !isLikelyCrawler()) {
    return detectLocaleFromBrowserFeatures();
  }

  return DEFAULT_LOCALE;
}

function App() {
  const [locale, setLocale] = useState(resolveInitialLocale);
  const content = getLocaleConfig(locale);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.title = content.meta.title;
    updateSeoLinks(locale, content);
    storeLocalePreference(locale);
  }, [content, locale]);

  useEffect(() => {
    const handlePopState = () => {
      const pathLocale = getLocaleFromPathname(window.location.pathname);
      setLocale(pathLocale || DEFAULT_LOCALE);
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  useEffect(() => {
    if (!isRootEntryPath(window.location.pathname) || isLikelyCrawler()) {
      return;
    }

    const detectedLocale = detectLocaleFromBrowserFeatures();

    if (detectedLocale !== DEFAULT_LOCALE) {
      window.history.replaceState({}, '', getLocalizedHref(detectedLocale));
      setLocale(detectedLocale);
      updateSeoLinks(detectedLocale, getLocaleConfig(detectedLocale));
    }
  }, []);

  useEffect(() => {
    const targets = Array.from(document.querySelectorAll([
      '.section-heading',
      '.format-card',
      '.partner-card',
      '.showcase-card',
      '.strength-card',
      '.pipeline-step',
      '.scenario-list span',
      '.pricing-group',
      '.pricing-policy',
      '.commercial-copy',
      '.contact-panel'
    ].join(',')));

    targets.forEach((target) => target.classList.add('reveal-item'));

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      targets.forEach((target) => target.classList.add('is-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -5% 0px', threshold: 0.08 });

    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, [locale]);

  const handleLocaleChange = (nextLocale) => {
    if (!localeCodes.includes(nextLocale)) {
      return;
    }

    const nextHref = getLocalizedHref(nextLocale);
    const currentHref = `${window.location.pathname}${window.location.hash || ''}`;

    setLocale(nextLocale);

    if (nextHref !== currentHref) {
      window.history.pushState({}, '', nextHref);
    }
  };

  return (
    <div className="site">
      <SiteNav content={content} locale={locale} onLocaleChange={handleLocaleChange} />
      <Hero content={content} />
      <main>
        <FormatStrip content={content} />
        <Partners content={content} />
        <Showcase content={content} />
        <Strengths content={content} />
        <Architecture content={content} />
        <ScenarioBand content={content} />
        <Pricing content={content} />
        <Commercial content={content} locale={locale} />
      </main>
      <Footer content={content} locale={locale} onLocaleChange={handleLocaleChange} />
    </div>
  );
}

function SiteNav({ content, locale, onLocaleChange }) {
  const { nav, languageSwitcher } = content;
  const navRef = useRef(null);

  useLayoutEffect(() => {
    const navElement = navRef.current;

    if (!navElement) {
      return undefined;
    }

    const updateNavClearance = () => {
      const navBottom = navElement.getBoundingClientRect().bottom;
      document.documentElement.style.setProperty('--nav-clearance', `${Math.ceil(navBottom + 24)}px`);
    };
    const resizeObserver = typeof ResizeObserver === 'undefined'
      ? null
      : new ResizeObserver(updateNavClearance);

    updateNavClearance();
    resizeObserver?.observe(navElement);
    window.addEventListener('resize', updateNavClearance);
    window.visualViewport?.addEventListener('resize', updateNavClearance);

    return () => {
      resizeObserver?.disconnect();
      window.removeEventListener('resize', updateNavClearance);
      window.visualViewport?.removeEventListener('resize', updateNavClearance);
    };
  }, [locale]);

  return (
    <header className="nav" ref={navRef}>
      <a className="brand" href="#top" aria-label={nav.homeLabel}>
        <img className="brand-logo" src="/assets/office-preview-logo-light.webp" alt="Office Preview" />
      </a>
      <nav className="nav-links" aria-label={nav.ariaLabel}>
        {nav.links.map((item) => (
          <a href={item.href} key={item.href}>{item.label}</a>
        ))}
      </nav>
      <div className="nav-actions">
        <div className="language-switcher" aria-label={languageSwitcher.ariaLabel}>
          <Languages size={16} aria-hidden="true" />
          {LANGUAGE_OPTIONS.map((option) => (
            <button
              className={locale === option.code ? 'active' : ''}
              type="button"
              aria-label={option.label}
              aria-pressed={locale === option.code}
              onClick={() => onLocaleChange(option.code)}
              key={option.code}
            >
              {option.shortLabel}
            </button>
          ))}
        </div>
        <a className="nav-buy" href={shopUrl} target="_blank" rel="noreferrer">
          <ShoppingCart size={17} aria-hidden="true" />
          <span className="nav-buy-label">{nav.buy}</span>
        </a>
      </div>
    </header>
  );
}

function Hero({ content }) {
  const { hero } = content;
  const stageRef = useRef(null);
  const pointerFrameRef = useRef(null);

  useEffect(() => () => {
    if (pointerFrameRef.current) {
      window.cancelAnimationFrame(pointerFrameRef.current);
    }
  }, []);

  const handlePointerMove = (event) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    if (pointerFrameRef.current) {
      window.cancelAnimationFrame(pointerFrameRef.current);
    }

    const { clientX, clientY } = event;

    pointerFrameRef.current = window.requestAnimationFrame(() => {
      const stage = stageRef.current;

      if (!stage) {
        return;
      }

      const rect = stage.getBoundingClientRect();
      const x = ((clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((clientY - rect.top) / rect.height - 0.5) * 2;

      stage.style.setProperty('--pointer-x', x.toFixed(3));
      stage.style.setProperty('--pointer-y', y.toFixed(3));
    });
  };

  const resetPointer = () => {
    const stage = stageRef.current;

    if (stage) {
      stage.style.setProperty('--pointer-x', '0');
      stage.style.setProperty('--pointer-y', '0');
    }
  };

  return (
    <section className="hero" id="top">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-shell">
        <div className="hero-content">
          <p className="eyebrow hero-eyebrow">
            <ShieldCheck size={16} strokeWidth={1.8} aria-hidden="true" />
            {hero.eyebrow}
          </p>
          <h1>{hero.title}</h1>
          <p className="hero-copy">{hero.copy}</p>
          <div className="hero-actions">
            <a className="button button-primary" href={shopUrl} target="_blank" rel="noreferrer">
              <ShoppingCart size={18} aria-hidden="true" />
              {hero.primaryCta}
            </a>
            <a className="button button-secondary" href={demoUrl} target="_blank" rel="noreferrer">
              <Rocket size={18} aria-hidden="true" />
              {hero.secondaryCta}
            </a>
          </div>
          <div className="hero-metrics" aria-label={hero.metricsAria}>
            {hero.metrics.map((item) => (
              <span key={item}>
                <CheckCircle2 size={15} strokeWidth={1.8} aria-hidden="true" />
                {item}
              </span>
            ))}
          </div>
        </div>

        <div
          className="hero-stage"
          ref={stageRef}
          role="img"
          aria-label={hero.imageAlt}
          onPointerMove={handlePointerMove}
          onPointerLeave={resetPointer}
        >
          <div className="hero-stage-plane" aria-hidden="true" />
          <figure className="hero-preview hero-preview-pptx">
            <figcaption><Presentation size={14} aria-hidden="true" /> PPTX</figcaption>
            <img src="/assets/preview-slides.png" alt="" fetchPriority="high" />
          </figure>
          <figure className="hero-preview hero-preview-docx">
            <figcaption><FileText size={14} aria-hidden="true" /> DOCX</figcaption>
            <img src="/assets/preview-word.png" alt="" fetchPriority="high" />
          </figure>
          <figure className="hero-preview hero-preview-xlsx">
            <figcaption><FileSpreadsheet size={14} aria-hidden="true" /> XLSX</figcaption>
            <img src="/assets/preview-spreadsheet.png" alt="" fetchPriority="high" />
          </figure>
          <div className="hero-runtime-status" aria-hidden="true">
            <span />
            <strong>{hero.runtimeLabel}</strong>
            <small>{hero.runtimeDetail}</small>
          </div>
        </div>
      </div>
    </section>
  );
}

function FormatStrip({ content }) {
  const { formats } = content;

  return (
    <section className="format-strip" id="formats" aria-label={formats.ariaLabel}>
      <div className="section-inner">
        <div className="section-heading compact">
          <p className="eyebrow dark">{formats.eyebrow}</p>
          <h2>{formats.title}</h2>
        </div>
        <div className="format-grid">
          {formats.items.map((item, index) => {
            const meta = formatMeta[index];
            const FormatIcon = meta.icon;

            return (
            <article className={`format-card tone-${meta.tone}`} key={item.label}>
              <div className="format-card-head">
                <span className="format-icon">
                  <FormatIcon size={23} strokeWidth={2} aria-hidden="true" />
                </span>
                <strong>{item.label}</strong>
              </div>
              <span>{item.title}</span>
            </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Partners({ content }) {
  const { partners } = content;

  if (!partners?.items?.length) {
    return null;
  }

  return (
    <section className="partners section" id="partners">
      <div className="section-inner partners-layout">
        <div className="section-heading left">
          <p className="eyebrow dark">{partners.eyebrow}</p>
          <h2>{partners.title}</h2>
          <p>{partners.copy}</p>
        </div>
        <div className="partner-grid">
          {partners.items.map((item, index) => {
            const PartnerIcon = partnerIcons[index] || BadgeCheck;

            return (
              <article className={`partner-card${item.featured ? ' featured' : ''}`} key={item.name}>
                <div className="partner-topline">
                  <div className={`partner-logo partner-logo-${item.logoShape || 'wide'}`}>
                    <img src={item.logo} alt={item.logoAlt} loading="lazy" />
                  </div>
                  <span>{item.badge}</span>
                </div>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <div className="partner-proof">
                  <PartnerIcon size={17} aria-hidden="true" />
                  <strong>{item.proof}</strong>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Showcase({ content }) {
  const { showcase } = content;

  return (
    <section className="showcase section" id="showcase">
      <div className="section-inner">
        <div className="section-heading">
          <p className="eyebrow dark">{showcase.eyebrow}</p>
          <h2>{showcase.title}</h2>
          <p>{showcase.copy}</p>
        </div>
        <div className="showcase-grid">
          {showcase.items.map((item, index) => (
            <article className="showcase-card" key={item.title}>
              <div className="showcase-image">
                <img src={showcaseImages[index]} alt={`${item.title} ${showcase.screenshotSuffix}`} />
              </div>
              <div className="showcase-copy">
                <span>{item.eyebrow}</span>
                <h3>{item.title}</h3>
                <ul>
                  {item.points.map((point) => (
                    <li key={point}>
                      <CheckCircle2 size={16} aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Strengths({ content }) {
  const { strengths } = content;

  return (
    <section className="section strengths">
      <div className="section-inner">
        <div className="section-heading">
          <p className="eyebrow dark">{strengths.eyebrow}</p>
          <h2>{strengths.title}</h2>
          <p>{strengths.copy}</p>
        </div>
        <div className="strength-grid">
          {strengths.items.map((item, index) => {
            const StrengthIcon = strengthIcons[index];

            return (
            <article className="strength-card" key={item.title}>
              <div className="icon-box"><StrengthIcon size={22} aria-hidden="true" /></div>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Architecture({ content }) {
  const { architecture } = content;

  return (
    <section className="section architecture" id="architecture">
      <div className="section-inner architecture-layout">
        <div className="section-heading left">
          <p className="eyebrow dark">{architecture.eyebrow}</p>
          <h2>{architecture.title}</h2>
          <p>{architecture.copy}</p>
          <div className="architecture-actions">
            <a className="button button-dark" href={demoUrl} target="_blank" rel="noreferrer">
              <Gauge size={18} aria-hidden="true" />
              {architecture.cta}
            </a>
          </div>
        </div>
        <div className="pipeline" aria-label={architecture.flowAria}>
          {architecture.steps.map((item, index) => {
            const StepIcon = pipelineIcons[index];

            return (
            <article className="pipeline-step" key={item.label}>
              <div className="step-index">{String(index + 1).padStart(2, '0')}</div>
              <StepIcon size={23} aria-hidden="true" />
              <h3>{item.label}</h3>
              <p>{item.text}</p>
            </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ScenarioBand({ content }) {
  const { scenarios } = content;

  return (
    <section className="scenario-band">
      <div className="section-inner scenario-layout">
        <div>
          <p className="eyebrow">{scenarios.eyebrow}</p>
          <h2>{scenarios.title}</h2>
        </div>
        <div className="scenario-list">
          {scenarios.items.map((scenario) => (
            <span key={scenario}>
              <BadgeCheck size={16} aria-hidden="true" />
              {scenario}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing({ content }) {
  const { pricing } = content;
  const deploymentPlans = pricing.deployment.plans.map((plan) => ({
    ...plan,
    ...deploymentPlanMeta[plan.key]
  }));
  const sourceTiers = pricing.source.tiers.map((tier) => ({
    ...tier,
    ...sourceTierMeta[tier.key],
    links: tier.links?.map((link) => ({
      ...link,
      ...sourceLinkMeta[link.code]
    }))
  }));

  return (
    <section className="section pricing" id="pricing">
      <div className="section-inner">
        <div className="section-heading pricing-heading">
          <p className="eyebrow dark">{pricing.eyebrow}</p>
          <h2>{pricing.title}</h2>
          <p>{pricing.copy}</p>
          <div className="pricing-trust">
            <LockKeyhole size={18} strokeWidth={1.8} aria-hidden="true" />
            <span>
              <strong>{pricing.checkout.title}</strong>
              <small>{pricing.checkout.body}</small>
            </span>
          </div>
        </div>

        <div className="pricing-groups">
          <section className="pricing-group" aria-labelledby="deployment-pricing-title">
            <div className="pricing-group-head">
              <span>{pricing.deployment.label}</span>
              <h3 id="deployment-pricing-title">{pricing.deployment.title}</h3>
              <p>{pricing.deployment.copy}</p>
            </div>
            <div className="pricing-deployment-grid">
              {deploymentPlans.map((plan) => (
                <article className={`pricing-card${plan.featured ? ' featured deploy-featured' : ''}`} key={plan.name}>
                  <div className="pricing-card-head">
                    <span className="pricing-kicker">{plan.badge}</span>
                    <h4>{plan.name}</h4>
                    <div className="price-line">
                      {plan.key === 'local' ? (
                        <strong>{plan.price}</strong>
                      ) : (
                        <>
                          {plan.pricePrefix ? <span className="price-qualifier">{plan.pricePrefix}</span> : null}
                          <small aria-hidden="true">{pricing.currencySymbol}</small>
                          <strong>{plan.price}</strong>
                          {plan.priceSuffix ? <span className="price-qualifier suffix">{plan.priceSuffix}</span> : null}
                        </>
                      )}
                    </div>
                    <p>{plan.copy}</p>
                  </div>
                  <ul>
                    {plan.points.map((item) => (
                      <li key={item}>
                        <CheckCircle2 size={16} aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a className="button pricing-button" href={plan.url} target="_blank" rel="noreferrer">
                    <ShoppingCart size={18} aria-hidden="true" />
                    {plan.cta}
                  </a>
                </article>
              ))}
            </div>
          </section>

          <section className="pricing-group" aria-labelledby="source-pricing-title">
            <div className="pricing-group-head">
              <span>{pricing.source.label}</span>
              <h3 id="source-pricing-title">{pricing.source.title}</h3>
              <p>{pricing.source.copy}</p>
            </div>
            <div className="pricing-source-grid">
              {sourceTiers.map((tier) => (
                <article className={`pricing-card${tier.featured ? ' featured source-featured' : ''}${tier.key === 'enterprise' ? ' enterprise-tier' : ''}`} key={tier.name}>
                  <div className="pricing-card-head">
                    <span className="pricing-kicker">{tier.badge}</span>
                    <h4>{tier.name}</h4>
                    <div className="price-line">
                      {tier.pricePrefix ? <span className="price-qualifier">{tier.pricePrefix}</span> : null}
                      <small aria-hidden="true">{pricing.currencySymbol}</small>
                      <strong>{tier.price}</strong>
                      {tier.priceSuffix ? <span className="price-qualifier suffix">{tier.priceSuffix}</span> : null}
                    </div>
                    <p>{tier.copy}</p>
                  </div>
                  <ul>
                    {tier.points.map((item) => (
                      <li key={item}>
                        <CheckCircle2 size={16} aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  {tier.links ? (
                    <div className="pricing-format-grid" aria-label={[tier.name, pricing.source.singleLinksAriaSuffix].join(' ')}>
                      {tier.links.map((link) => {
                        const LinkIcon = link.icon;

                        return (
                          <a className={'pricing-format-link tone-' + link.tone} href={link.url} target="_blank" rel="noreferrer" key={link.code}>
                            <span className="pricing-format-icon">
                              <LinkIcon size={12} aria-hidden="true" />
                            </span>
                            <span className="pricing-format-copy">
                              <strong>{link.displayCode || link.code}</strong>
                              <small>{link.label}</small>
                            </span>
                          </a>
                        );
                      })}
                    </div>
                  ) : (
                    <a className="button pricing-button" href={tier.url} target="_blank" rel="noreferrer">
                      <ShoppingCart size={18} aria-hidden="true" />
                      {tier.cta}
                    </a>
                  )}
                </article>
              ))}
            </div>
          </section>
        </div>

        <div className="pricing-policy">
          <ShieldCheck size={20} aria-hidden="true" />
          <span>
            <strong>{pricing.policy.title}</strong>
            {' '}
            {pricing.policy.body}
          </span>
        </div>
      </div>
    </section>
  );
}

function Commercial({ content, locale }) {
  const { contact } = content;
  const isChinese = locale === 'zh-CN';

  return (
    <section className="section commercial" id="contact">
      <div className="section-inner commercial-layout">
        <div className="commercial-copy">
          <p className="eyebrow dark">{contact.eyebrow}</p>
          <h2>{contact.title}</h2>
          <p>{contact.copy}</p>
        </div>
        <div className="contact-panel">
          <a className="contact-row strong" href={shopUrl} target="_blank" rel="noreferrer">
            <ShoppingCart size={20} aria-hidden="true" />
            <span>
              <strong>{contact.rows.shop}</strong>
              <small>https://dev.flyfish.group/shop/item-list</small>
            </span>
            <ArrowRight size={18} aria-hidden="true" />
          </a>
          <a className="contact-row" href={`mailto:${supportEmail}`}>
            <Mail size={20} aria-hidden="true" />
            <span>
              <strong>{contact.rows.email}</strong>
              <small>{supportEmail} · {contact.emailNote}</small>
            </span>
            <ArrowRight size={18} aria-hidden="true" />
          </a>
          <div className={`contact-channel-grid${isChinese ? ' is-chinese' : ' is-international'}`} aria-label={contact.channelsAriaLabel}>
            {contact.channels.map((channel) => {
              const meta = contactChannelMeta[channel.key];
              const ChannelIcon = meta.icon;
              const contentNode = (
                <>
                  {meta.image ? (
                    <div className="contact-channel-qr">
                      <img src={meta.image} alt={channel.imageAlt} loading="lazy" />
                    </div>
                  ) : (
                    <span className={`contact-channel-icon is-${channel.key}`}>
                      <ChannelIcon size={22} aria-hidden="true" />
                    </span>
                  )}
                  <span className="contact-channel-copy">
                    <span className="contact-channel-title">
                      {meta.image ? <ChannelIcon size={16} aria-hidden="true" /> : null}
                      <strong>{channel.label}</strong>
                    </span>
                    <small>{channel.note}</small>
                    <b>{channel.value}</b>
                  </span>
                  {meta.url ? <ArrowRight size={18} aria-hidden="true" /> : null}
                </>
              );

              return meta.url ? (
                <a className="contact-channel-card" href={meta.url} target="_blank" rel="noreferrer" key={channel.key}>
                  {contentNode}
                </a>
              ) : (
                <article className="contact-channel-card" key={channel.key}>
                  {contentNode}
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer({ content, locale, onLocaleChange }) {
  const { nav, languageSwitcher } = content;

  return (
    <footer className="footer">
      <div className="section-inner footer-layout">
        <a className="footer-brand" href="#top" aria-label={nav.homeLabel}>
          <img src="/assets/office-preview-logo-light.webp" alt="Office Preview" />
          <span>{locale === 'zh-CN' ? '文档渲染与交付' : 'Document rendering and delivery'}</span>
        </a>
        <nav className="footer-links" aria-label={nav.ariaLabel}>
          {nav.links.map((item) => (
            <a href={item.href} key={item.href}>{item.label}</a>
          ))}
        </nav>
        <div className="footer-meta">
          <div className="language-switcher footer-language" aria-label={languageSwitcher.ariaLabel}>
            <Languages size={15} aria-hidden="true" />
            {LANGUAGE_OPTIONS.map((option) => (
              <button
                className={locale === option.code ? 'active' : ''}
                type="button"
                aria-label={option.label}
                aria-pressed={locale === option.code}
                onClick={() => onLocaleChange(option.code)}
                key={option.code}
              >
                {option.shortLabel}
              </button>
            ))}
          </div>
          <span>© 2026 Flyfish Office Preview</span>
        </div>
      </div>
    </footer>
  );
}

createRoot(document.getElementById('root')).render(<App />);

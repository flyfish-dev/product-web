import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight,
  BadgeCheck,
  BookOpenText,
  Braces,
  CheckCircle2,
  FileSpreadsheet,
  FileText,
  Gauge,
  Headphones,
  Layers3,
  Languages,
  LockKeyhole,
  Mail,
  MessageCircle,
  MonitorCheck,
  Play,
  Presentation,
  RefreshCw,
  Rocket,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Table2,
  Workflow,
  X,
  Zap
} from 'lucide-react';
import {
  DEFAULT_LOCALE,
  LANGUAGE_OPTIONS,
  LANGUAGE_STORAGE_KEY,
  getLocaleConfig
} from './locales';
import './styles.css';

const shopUrl = 'https://dev.flyfish.group/shop/item-list';
const shopDetailUrl = (id) => `https://dev.flyfish.group/shop/detail/${id}`;
const shopLinks = {
  fullDeployment: shopDetailUrl('1005'),
  allFormatSource: shopDetailUrl('1004'),
  docSource: shopDetailUrl('2'),
  docxSource: shopDetailUrl('1003'),
  pptSource: shopDetailUrl('1002'),
  pptxSource: shopDetailUrl('1')
};
const demoUrl = 'https://demo.flyfish.group';
const supportEmail = 'wybaby168@gmail.com';
const supportWechat = 'Yous_Gift';
const supportQrUrl = '/assets/customer-wechat.jpg';
const siteUrl = 'https://product.flyfish.group';
const localeCodes = LANGUAGE_OPTIONS.map((option) => option.code);

const formatMeta = [
  { icon: FileText, tone: 'blue' },
  { icon: BookOpenText, tone: 'green' },
  { icon: Presentation, tone: 'amber' },
  { icon: Play, tone: 'red' },
  { icon: Table2, tone: 'emerald' },
  { icon: FileSpreadsheet, tone: 'cyan' }
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
  commercial: { featured: true, contact: true },
  enterprise: { contact: true }
};

const sourceLinkMeta = {
  DOC: { url: shopLinks.docSource, icon: FileText },
  DOCX: { url: shopLinks.docxSource, icon: BookOpenText },
  PPT: { url: shopLinks.pptSource, icon: Presentation },
  PPTX: { url: shopLinks.pptxSource, icon: Play }
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

function getBrowserTimeZone() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone || '';
  } catch {
    return '';
  }
}

function isLikelyCrawler() {
  const userAgent = window.navigator.userAgent.toLowerCase();
  return /bot|crawler|spider|slurp|bingpreview|baiduspider|bytespider|duckduckbot|googlebot|yandexbot|facebookexternalhit|twitterbot|linkedinbot|semrush|ahrefs/.test(userAgent);
}

function detectLocaleFromBrowserFeatures() {
  const languages = getBrowserLanguages();
  const primaryLanguage = languages[0] || '';

  if (primaryLanguage.startsWith('zh')) {
    return 'zh-CN';
  }

  if (primaryLanguage) {
    return 'en-US';
  }

  const chineseTimeZones = new Set([
    'Asia/Shanghai',
    'Asia/Chongqing',
    'Asia/Hong_Kong',
    'Asia/Macau',
    'Asia/Taipei'
  ]);
  const timeZone = getBrowserTimeZone();

  if (timeZone && !chineseTimeZones.has(timeZone)) {
    return 'en-US';
  }

  return DEFAULT_LOCALE;
}

function resolveInitialLocale() {
  if (typeof window === 'undefined') {
    return DEFAULT_LOCALE;
  }

  const pathLocale = getLocaleFromPathname(window.location.pathname);
  if (pathLocale) {
    return pathLocale;
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
    }
  }, []);

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
      <Hero content={content} locale={locale} onLocaleChange={handleLocaleChange} />
      <main>
        <FormatStrip content={content} />
        <Showcase content={content} />
        <Strengths content={content} />
        <Architecture content={content} />
        <ScenarioBand content={content} />
        <Pricing content={content} />
        <Commercial content={content} />
      </main>
    </div>
  );
}

function Hero({ content, locale, onLocaleChange }) {
  const { hero, nav, languageSwitcher } = content;

  return (
    <section className="hero" id="top">
      <img className="hero-media" src="/assets/office-hero-banner.png" alt={hero.imageAlt} />
      <div className="hero-overlay" />
      <header className="nav">
        <a className="brand" href="#top" aria-label={nav.homeLabel}>
          <span className="brand-mark"><FileText size={20} aria-hidden="true" /></span>
          <span>Flyfish Office Preview</span>
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

      <div className="hero-content">
        <p className="eyebrow">{hero.eyebrow}</p>
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
            <span key={item}>{item}</span>
          ))}
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
              <FormatIcon size={22} aria-hidden="true" />
              <strong>{item.label}</strong>
              <span>{item.title}</span>
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
  const [contactPlan, setContactPlan] = useState(null);
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
                          <small>¥</small>
                          <strong>{plan.price}</strong>
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
                <article className={`pricing-card${tier.featured ? ' featured source-featured' : ''}`} key={tier.name}>
                  <div className="pricing-card-head">
                    <span className="pricing-kicker">{tier.badge}</span>
                    <h4>{tier.name}</h4>
                    <div className="price-line">
                      <small>¥</small>
                      <strong>{tier.price}</strong>
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
                    <div className="pricing-link-list" aria-label={`${tier.name} ${pricing.source.singleLinksAriaSuffix}`}>
                      {tier.links.map((link) => {
                        const LinkIcon = link.icon;

                        return (
                          <a className="pricing-mini-link" href={link.url} target="_blank" rel="noreferrer" key={link.code}>
                            <LinkIcon size={18} aria-hidden="true" />
                            <span>
                              <strong>{link.code}</strong>
                              <small>{link.label}</small>
                            </span>
                          </a>
                        );
                      })}
                    </div>
                  ) : tier.contact ? (
                    <button className="button pricing-button" type="button" onClick={() => setContactPlan(tier.name)}>
                      <MessageCircle size={18} aria-hidden="true" />
                      {tier.cta}
                    </button>
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
      {contactPlan ? <ContactModal content={content} planName={contactPlan} onClose={() => setContactPlan(null)} /> : null}
    </section>
  );
}

function ContactModal({ content, planName, onClose }) {
  const { contactModal } = content;

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className="contact-modal-backdrop" role="presentation" onMouseDown={(event) => {
      if (event.target === event.currentTarget) {
        onClose();
      }
    }}>
      <div className="contact-modal" role="dialog" aria-modal="true" aria-labelledby="contact-modal-title">
        <button className="modal-close" type="button" onClick={onClose} aria-label={contactModal.closeLabel}>
          <X size={20} aria-hidden="true" />
        </button>
        <div className="contact-modal-copy">
          <span>{contactModal.eyebrow}</span>
          <h3 id="contact-modal-title">{contactModal.titlePrefix} {planName} {contactModal.titleSuffix}</h3>
          <p>{contactModal.copyPrefix} {supportWechat}{contactModal.copySuffix}</p>
        </div>
        <div className="qr-panel">
          <img src={supportQrUrl} alt={contactModal.qrAlt} />
          <strong>{contactModal.wechatLabel}: {supportWechat}</strong>
          <small>{contactModal.qrHint}</small>
        </div>
        <div className="contact-modal-links">
          <a href={`mailto:${supportEmail}`}>{contactModal.emailLabel}: {supportEmail}</a>
          <span>{contactModal.scope}</span>
        </div>
      </div>
    </div>
  );
}

function Commercial({ content }) {
  const { contact } = content;

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
              <small>{supportEmail}</small>
            </span>
          </a>
          <div className="contact-row">
            <MessageCircle size={20} aria-hidden="true" />
            <span>
              <strong>{contact.rows.wechat}</strong>
              <small>{supportWechat}</small>
            </span>
          </div>
          <a className="contact-row" href={demoUrl} target="_blank" rel="noreferrer">
            <Headphones size={20} aria-hidden="true" />
            <span>
              <strong>{contact.rows.demo}</strong>
              <small>demo.flyfish.group</small>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

createRoot(document.getElementById('root')).render(<App />);

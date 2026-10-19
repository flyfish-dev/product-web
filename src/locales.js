import { OFFICE_PRICING } from './shopCatalog.js';

export const DEFAULT_LOCALE = 'zh-CN';

export const LANGUAGE_STORAGE_KEY = 'flyfish-office-preview-locale';

export const LANGUAGE_OPTIONS = [
  { code: 'en-US', shortLabel: 'EN', label: 'English' },
  { code: 'zh-CN', shortLabel: '中', label: '中文' }
];

export const locales = {
  'zh-CN': {
    meta: {
      title: 'Flyfish Office Preview｜企业级 Office 在线预览方案',
      description: 'Flyfish Office Preview 是面向企业系统的 Office 在线预览解决方案，支持 Word、PowerPoint、Excel 多格式文档即开即览，适合私有化部署、源码授权和业务系统集成。'
    },
    languageSwitcher: {
      ariaLabel: '切换语言'
    },
    nav: {
      homeLabel: 'Flyfish Office Preview 首页',
      ariaLabel: '主导航',
      buy: '购买',
      links: [
        { href: '#formats', label: '格式' },
        { href: '#partners', label: '客户' },
        { href: '#showcase', label: '体验' },
        { href: '#architecture', label: '方案' },
        { href: '#pricing', label: '定价' },
        { href: '#contact', label: '咨询' }
      ]
    },
    hero: {
      imageAlt: 'Word、PowerPoint、Excel 多格式在线预览视觉图',
      eyebrow: '面向业务系统的企业级 Office 预览',
      title: '让每一份 Office 文件，都在网页中准确呈现。',
      copy: '以统一的浏览器体验承接 Word、PowerPoint 与 Excel。无需服务端格式转换，适配公文、报表、演示材料与历史档案等高频业务场景。',
      primaryCta: '立即购买',
      secondaryCta: '查看在线演示',
      metricsAria: '产品能力',
      metrics: ['六类 Office 格式', '私有化部署', '按需加载'],
      runtimeLabel: '浏览器端实时渲染',
      runtimeDetail: 'DOC · DOCX · PPT · PPTX · XLS · XLSX'
    },
    formats: {
      ariaLabel: '支持格式',
      eyebrow: '格式覆盖',
      title: '覆盖主流 Office 格式，承接复杂业务附件。',
      items: [
        { label: 'DOC', title: '传统文档' },
        { label: 'DOCX', title: '标准文档' },
        { label: 'PPT', title: '经典演示' },
        { label: 'PPTX', title: '现代演示' },
        { label: 'XLS', title: '传统表格' },
        { label: 'XLSX', title: '标准表格' }
      ]
    },
    partners: {
      eyebrow: '客户背书',
      title: '真实客户采购与场景验证，证明 Office Preview 可以进入业务现场。',
      copy: '产品能力持续在通信、教育与产业互联网场景中验证。以下代表客户与合作伙伴用于公开展示和采购参考，帮助评估团队更直观看到实际落地基础。',
      items: [
        {
          name: '中国移动通信集团广东有限公司湛江分公司技术科室',
          badge: '企业版已购客户',
          description: '面向通信业务文档、内部系统附件和项目材料预览场景，采用企业版能力并进入交付支持流程。',
          proof: '企业版采购 / 技术科室场景',
          logo: '/assets/partners/china-mobile.svg',
          logoAlt: '中国移动',
          logoShape: 'wide',
          featured: true
        },
        {
          name: '山西大学',
          badge: '教育科研场景',
          description: '面向高校资料流转、文档阅读和系统集成场景，提供稳定的多格式预览能力支撑。',
          proof: '高校客户 / 文档预览场景',
          logo: '/assets/partners/shanxi-university.jpg',
          logoAlt: '山西大学校徽',
          logoShape: 'seal'
        },
        {
          name: '联通（山西）产业互联网有限公司',
          badge: '产业互联网场景',
          description: '面向政企数字化、行业系统集成与内网文档预览需求，提供可交付的 Office 预览方案。',
          proof: '政企集成 / 产业互联网场景',
          logo: '/assets/partners/china-unicom.svg',
          logoAlt: '中国联通',
          logoShape: 'wide'
        }
      ]
    },
    showcase: {
      eyebrow: '预览体验',
      title: '用真实文件，验证预览效果。',
      copy: '在线 Demo 可直接上传自有文件，检查文档分页、演示控制和电子表格工作簿。以下画面展示对应阅读场景。',
      release: {
        date: '2026-10-19',
        title: '十月更新：渐进阅读、旧格式图片与大表交互',
        copy: 'DOCX 优先呈现可读页面，后台完成字体与版式校准；DOC 改进表格与行距；Excel 增加旧版 XLS 图片定位，延续视窗加载与单元格选区。复杂文件请先在 Demo 中验证。',
        cta: '查看更新与集成文档'
      },
      screenshotSuffix: '截图',
      items: [
        {
          title: '结构化 Word 文档',
          eyebrow: 'DOC / DOCX',
          points: ['DOCX Canvas 分页与渐进显示', '表格、图片与多语言内容', 'DOC 连续阅读与分页模式']
        },
        {
          title: '完整演示文稿体验',
          eyebrow: 'PPT / PPTX',
          points: ['缩略图与页码导航', '单页、滚动与放映模式', '母版、图文与比例保持']
        },
        {
          title: '可浏览的电子表格',
          eyebrow: 'XLS / XLSX',
          points: ['多工作表即时切换', '单元格样式与合并区域', '图表、公式与数据扫描']
        }
      ]
    },
    strengths: {
      eyebrow: '核心优势',
      title: '为企业应用打造稳定可靠的文档预览底座。',
      copy: '从接入、展示到交付，围绕真实业务流程设计，让 Office 文件预览成为系统体验的一部分。',
      items: [
        {
          title: '多格式即开即览',
          copy: '统一承接企业常见 Office 附件，从历史文档到新式文件，减少多套预览组件的维护成本。'
        },
        {
          title: '高保真阅读体验',
          copy: '文档、演示、表格按各自阅读场景呈现，让用户快速确认内容、版式与上下文。'
        },
        {
          title: '轻量化访问体验',
          copy: '按使用场景加载所需能力，页面更轻，等待更少，适合嵌入高频业务流程。'
        },
        {
          title: '可控交付边界',
          copy: '面向授权部署与私有化集成设计，兼顾前端接入效率、运行隔离与商业交付要求。'
        },
        {
          title: '灵活嵌入现有系统',
          copy: '适配 OA、档案、知识库、合同、CRM 等业务入口，保持简洁接口与持续扩展空间。'
        },
        {
          title: '长期可维护',
          copy: '以典型业务文件驱动兼容性验证，支撑项目验收、版本升级与持续优化。'
        }
      ]
    },
    architecture: {
      eyebrow: '方案设计',
      title: '清晰分层，轻松融入现有业务系统。',
      copy: '以统一接入、独立解析、结构化呈现为基础，帮助企业快速构建可维护、可扩展的在线预览能力。',
      cta: '打开演示',
      flowAria: '文档预览处理流程',
      steps: [
        { label: '统一接入', text: '承接企业附件、档案与业务文档入口' },
        { label: '安全解析', text: '隔离文档处理过程，提升访问稳定性' },
        { label: '模型沉淀', text: '形成可渲染、可扩展的结构化内容' },
        { label: '精准呈现', text: '按文档类型呈现清晰自然的阅读界面' }
      ]
    },
    scenarios: {
      eyebrow: '应用场景',
      title: '适用于高频文档流转、沉淀与交付场景。',
      items: [
        'OA 公文与流程附件预览',
        '档案管理与历史 Office 文件在线阅读',
        '合同、标书、验收材料快速查看',
        'CRM、工单、知识库附件预览',
        '内网私有化部署与授权交付',
        '多格式文档中台能力建设'
      ]
    },
    pricing: {
      eyebrow: '定价与授权',
      title: '部署服务和源码授权，分开选择。',
      copy: `只想快速上线，选择 ¥${OFFICE_PRICING.deployment.cny} 部署方案；需要在商业项目中使用源码，选择 ¥${OFFICE_PRICING.commercial.cny} 商业版。`,
      currencySymbol: '¥',
      currencyCode: 'CNY',
      checkout: {
        title: '人民币定价',
        body: '按所选版本进入飞鱼小铺，核对授权范围与交付内容后下单。'
      },
      deployment: {
        label: '快速部署',
        title: '不需要先研究源码，也可以快速上线。',
        copy: '适合需要把 Office 预览能力接入现有网站、系统或演示环境的客户。',
        plans: [
          {
            key: 'deployment',
            name: '部署方案',
            price: OFFICE_PRICING.deployment.cny,
            badge: '推荐部署',
            copy: '适合希望快速上线的客户，部署全套预览能力，并定制一次到您的网站。',
            points: ['部署全套 Office 预览能力', '定制一次到您的网站', '域名与访问环境协助', '基础售后与部署陪跑'],
            cta: '购买部署方案'
          },
          {
            key: 'local',
            name: '本地验证',
            price: '免费',
            badge: '研究评估',
            copy: '适合先用自有文件评估预览效果，在本机完成技术验证。',
            points: ['本地研究与技术验证', '自有文件效果评估', '不含上线部署和商用授权'],
            cta: '查看在线演示'
          }
        ]
      },
      source: {
        label: '源码授权',
        title: '需要源码进入项目，按授权范围选择版本。',
        copy: '商业版适合多数 SaaS、OA、知识库和企业系统；更深私有化交付可选择企业源码版。',
        singleLinksAriaSuffix: '商品链接',
        tiers: [
          {
            key: 'single',
            name: '单格式研究版',
            price: OFFICE_PRICING.singleResearch.cny,
            priceSuffix: '起',
            badge: '单格式源码 / 研究',
            copy: '适合聚焦某一种 Office 格式的源码学习、技术验证与专项研究。',
            points: ['按格式选择源码，Excel 请咨询', '用于学习研究', '不含商用授权'],
            cta: '选择源码',
            links: [
              { code: 'DOC', label: `¥${OFFICE_PRICING.singleResearch.cny}` },
              { code: 'DOCX', label: `¥${OFFICE_PRICING.singleResearch.cny}` },
              { code: 'DOCX-CANVAS', displayCode: 'CANVAS', label: `¥${OFFICE_PRICING.canvasResearch.cny}` },
              { code: 'PPT', label: `¥${OFFICE_PRICING.singleResearch.cny}` },
              { code: 'PPTX', label: `¥${OFFICE_PRICING.singleResearch.cny}` },
              { code: 'EXCEL', label: '咨询' }
            ]
          },
          {
            key: 'developer',
            name: '开发版',
            price: OFFICE_PRICING.developer.cny,
            badge: '源码交付 / 非商业',
            copy: '选择一种 DOCX 引擎，搭配其他格式源码与集成示例，完成项目技术验证。',
            points: ['Canvas / HTML 引擎二选一', '集成示例与其他格式源码', '基础集成文档与答疑', '30 天非商用验证，限一个来源域'],
            cta: '购买开发版',
            variantsLabel: '选择开发版 DOCX 引擎',
            variants: [
              { key: 'allFormatSource', label: 'Canvas DOCX', ariaLabel: '购买开发版 · Canvas DOCX' },
              { key: 'htmlFormatSource', label: 'HTML DOCXJS', ariaLabel: '购买开发版 · HTML DOCXJS' }
            ]
          },
          {
            key: 'commercial',
            name: '商业版',
            price: OFFICE_PRICING.commercial.cny,
            priceSuffix: '含首年维护',
            badge: '商用授权',
            copy: '适合 SaaS、OA、知识库、低代码平台和中小企业系统，面向真实项目上线。',
            points: ['交付预览源码', '约定项目的永久商用运行授权', '最多 5 个具体来源或 1 个 SaaS 泛域名', '含首年代码更新与维护'],
            cta: '购买商业版'
          },
          {
            key: 'enterprise',
            name: '企业源码版',
            price: OFFICE_PRICING.enterprise.cny,
            priceSuffix: '含首年维护',
            badge: '企业级源码授权',
            copy: '适合政企、集团、私有化交付商和 ISV，覆盖更深的私有化与交付支持。',
            points: ['交付预览源码与企业授权工具', '按合同约定部署与项目分发范围', '私有化部署联调', '含首年代码更新与优先维护'],
            cta: '购买企业版'
          }
        ],
        renewal: {
          title: '已有商业版或企业版授权？',
          copy: '首购已含一年更新与维护。后续可按年续费服务和代码更新；已取得的永久运行授权不因未续费而失效。续费不扩大原有授权范围，不适用于开发版。',
          price: OFFICE_PRICING.renewal.cny,
          unit: '/ 年',
          cta: '续费服务与代码更新'
        }
      },
      policy: {
        title: '授权说明：',
        body: `免费本地验证、¥${OFFICE_PRICING.singleResearch.cny} 起的单格式研究版和 ¥${OFFICE_PRICING.developer.cny} 开发版均不含商用授权。商业项目请选购商业版或企业版，具体使用范围、交付内容与维护条款以所选商品及签署合同为准。`
      }
    },
    contact: {
      eyebrow: '企业服务',
      title: '从售前评估到交付上线，获得持续可靠的专业支持。',
      copy: '面向企业采购、商业授权、私有化部署与项目交付，提供清晰、稳定、可持续的服务通道。',
      emailNote: '售前咨询与售后支持',
      channelsAriaLabel: '中文联系渠道',
      rows: {
        shop: '购买与授权',
        email: '企业售前与售后邮箱'
      },
      channels: [
        {
          key: 'wechat',
          label: '客服微信',
          value: 'Yous_Gift',
          note: '商务咨询、商业授权与优先技术支持',
          imageAlt: 'Office Preview 客服微信二维码'
        },
        {
          key: 'official',
          label: '微信公众号',
          value: '飞鱼开源工作室',
          note: '获取产品更新、技术实践与交付资讯',
          imageAlt: '飞鱼开源工作室微信公众号二维码'
        }
      ]
    }
  },
  'en-US': {
    meta: {
      title: 'Flyfish Office Preview | Enterprise Office Document Viewer',
      description: 'Flyfish Office Preview is an enterprise Office document viewer for Word, PowerPoint, and Excel files, designed for private deployment, source licensing, and integration into business systems.'
    },
    languageSwitcher: {
      ariaLabel: 'Switch language'
    },
    nav: {
      homeLabel: 'Flyfish Office Preview home',
      ariaLabel: 'Main navigation',
      buy: 'Buy',
      links: [
        { href: '#formats', label: 'Formats' },
        { href: '#partners', label: 'Customers' },
        { href: '#showcase', label: 'Preview' },
        { href: '#architecture', label: 'Solution' },
        { href: '#pricing', label: 'Pricing' },
        { href: '#contact', label: 'Contact' }
      ]
    },
    hero: {
      imageAlt: 'Office preview visual for Word, PowerPoint, and Excel',
      eyebrow: 'Enterprise Office preview for business systems',
      title: 'Render every Office file accurately on the web.',
      copy: 'Bring Word, PowerPoint, and Excel into one browser experience without server-side format conversion. Built for reports, presentations, archives, and document-heavy workflows.',
      primaryCta: 'Buy Now',
      secondaryCta: 'View Demo',
      metricsAria: 'Product capabilities',
      metrics: ['Six Office formats', 'Private deployment', 'On-demand loading'],
      runtimeLabel: 'Live in-browser rendering',
      runtimeDetail: 'DOC · DOCX · PPT · PPTX · XLS · XLSX'
    },
    formats: {
      ariaLabel: 'Supported formats',
      eyebrow: 'Format Coverage',
      title: 'Cover mainstream Office formats and complex business attachments.',
      items: [
        { label: 'DOC', title: 'Legacy documents' },
        { label: 'DOCX', title: 'Modern documents' },
        { label: 'PPT', title: 'Legacy slides' },
        { label: 'PPTX', title: 'Modern slides' },
        { label: 'XLS', title: 'Legacy spreadsheets' },
        { label: 'XLSX', title: 'Modern spreadsheets' }
      ]
    },
    partners: {
      eyebrow: 'Customer Proof',
      title: 'Real customer adoption and field validation for Office Preview.',
      copy: 'Flyfish Office Preview is validated across telecom, education, and industrial internet scenarios. These representative customers and partners are shown publicly for evaluation and procurement reference.',
      items: [
        {
          name: 'China Mobile Guangdong Zhanjiang Branch Technology Office',
          badge: 'Enterprise customer',
          description: 'Enterprise edition adoption for telecom business documents, internal attachments, and project material preview workflows.',
          proof: 'Enterprise purchase / technology office scenario',
          logo: '/assets/partners/china-mobile.svg',
          logoAlt: 'China Mobile',
          logoShape: 'wide',
          featured: true
        },
        {
          name: 'Shanxi University',
          badge: 'Education scenario',
          description: 'Stable multi-format preview support for university document circulation, online reading, and system integration scenarios.',
          proof: 'University customer / document preview scenario',
          logo: '/assets/partners/shanxi-university.jpg',
          logoAlt: 'Shanxi University emblem',
          logoShape: 'seal'
        },
        {
          name: 'China Unicom Shanxi Industrial Internet Co., Ltd.',
          badge: 'Industrial internet',
          description: 'Deliverable Office preview capabilities for government-enterprise digitization, system integration, and intranet document workflows.',
          proof: 'Enterprise integration / industrial internet scenario',
          logo: '/assets/partners/china-unicom.svg',
          logoAlt: 'China Unicom',
          logoShape: 'wide'
        }
      ]
    },
    showcase: {
      eyebrow: 'Preview Experience',
      title: 'Judge rendering quality by real files, not abstract claims.',
      copy: 'Upload your own files to the live demo to assess pagination, presentation controls, and workbook navigation. The images below illustrate these reading workflows.',
      release: {
        date: '2026-10-19',
        title: 'October update: progressive reading, legacy pictures and large sheets',
        copy: 'DOCX shows readable pages before background font and layout calibration completes. DOC improves tables and line spacing. Excel adds legacy XLS picture placement alongside viewport loading and cell-range selection. Evaluate complex files in the demo first.',
        cta: 'Read the release and integration guide'
      },
      screenshotSuffix: 'screenshot',
      items: [
        {
          title: 'Structured Word Documents',
          eyebrow: 'DOC / DOCX',
          points: ['Paged Canvas DOCX with progressive display', 'Tables, images, and multilingual text', 'Continuous and paged DOC reading']
        },
        {
          title: 'Complete Presentation Experience',
          eyebrow: 'PPT / PPTX',
          points: ['Thumbnails and page navigation', 'Single-page, scroll, and slideshow modes', 'Masters, media, and aspect ratios']
        },
        {
          title: 'Navigable Spreadsheets',
          eyebrow: 'XLS / XLSX',
          points: ['Instant worksheet switching', 'Cell styles and merged ranges', 'Charts, formulas, and fast data scanning']
        }
      ]
    },
    strengths: {
      eyebrow: 'Core Strengths',
      title: 'A stable Office preview foundation for enterprise applications.',
      copy: 'Designed around real business workflows, from integration and rendering to delivery and long-term maintenance.',
      items: [
        {
          title: 'Open Multiple Formats Instantly',
          copy: 'Handle common enterprise Office attachments in one viewer and reduce the cost of maintaining multiple preview components.'
        },
        {
          title: 'High-Fidelity Reading',
          copy: 'Render documents, slides, and spreadsheets in experiences tailored to how users actually inspect business files.'
        },
        {
          title: 'Lightweight Access',
          copy: 'Load the capabilities needed for each scenario, keeping pages lean and responsive in high-frequency workflows.'
        },
        {
          title: 'Controlled Delivery Boundary',
          copy: 'Designed for licensed deployment and private integration, balancing frontend efficiency, runtime isolation, and delivery requirements.'
        },
        {
          title: 'Flexible System Embedding',
          copy: 'Fits OA, archive systems, knowledge bases, contracts, CRM, and other attachment-heavy business entry points.'
        },
        {
          title: 'Maintainable Over Time',
          copy: 'Compatibility is driven by representative business files, supporting acceptance testing, upgrades, and continuous improvement.'
        }
      ]
    },
    architecture: {
      eyebrow: 'Solution Design',
      title: 'Layered architecture that fits naturally into existing systems.',
      copy: 'Built around unified access, isolated parsing, and structured rendering so teams can add a maintainable Office preview capability quickly.',
      cta: 'Open Demo',
      flowAria: 'Document preview processing flow',
      steps: [
        { label: 'Unified Access', text: 'Connect business attachments, archives, and document entry points.' },
        { label: 'Isolated Parsing', text: 'Separate document processing to improve stability and runtime boundaries.' },
        { label: 'Document Model', text: 'Produce renderable, extensible structured content for the viewer.' },
        { label: 'Accurate Rendering', text: 'Present each format with a clear and natural reading interface.' }
      ]
    },
    scenarios: {
      eyebrow: 'Use Cases',
      title: 'Built for frequent document circulation, retention, and delivery workflows.',
      items: [
        'OA documents and workflow attachments',
        'Archive management and legacy Office files',
        'Contracts, proposals, and acceptance materials',
        'CRM, ticketing, and knowledge base attachments',
        'Private intranet deployment and license delivery',
        'Multi-format document preview platforms'
      ]
    },
    pricing: {
      eyebrow: 'Pricing & Licensing',
      title: 'Choose deployment service and source license separately.',
      copy: `Launch with the $${OFFICE_PRICING.deployment.usd} deployment service, or choose the $${OFFICE_PRICING.commercial.usd} Commercial license for production source-code use.`,
      currencySymbol: '$',
      currencyCode: 'USD',
      checkout: {
        title: 'USD pricing',
        body: 'Select an edition to review its license and delivery terms in Flyfish Shop. International checkout is available with Stripe.'
      },
      deployment: {
        label: 'Quick Deployment',
        title: 'Launch quickly without studying the source code first.',
        copy: 'For customers who need to add Office preview capability to an existing website, system, or demo environment.',
        plans: [
          {
            key: 'deployment',
            name: 'Deployment Plan',
            price: OFFICE_PRICING.deployment.usd,
            badge: 'Recommended',
            copy: 'A practical package for fast launch, including full Office preview deployment and one customization to your website.',
            points: ['Deploy the complete Office preview suite', 'One customization to your website', 'Domain and environment assistance', 'Basic support and deployment guidance'],
            cta: 'Buy Deployment'
          },
          {
            key: 'local',
            name: 'Local Evaluation',
            price: 'Free',
            badge: 'Research',
            copy: 'Evaluate preview quality locally with your own files before committing to deployment.',
            points: ['Local research and technical validation', 'Preview test with your own files', 'No production deployment or commercial license'],
            cta: 'View Online Demo'
          }
        ]
      },
      source: {
        label: 'Source Licensing',
        title: 'Choose the license that matches your source-code usage.',
        copy: 'Commercial license fits most SaaS, OA, knowledge-base, and enterprise systems; enterprise source license covers deeper private delivery needs.',
        singleLinksAriaSuffix: 'purchase links',
        tiers: [
          {
            key: 'single',
            name: 'Single Format Research',
            price: OFFICE_PRICING.singleResearch.usd,
            pricePrefix: 'From',
            badge: 'Single Format / Research',
            copy: 'For developers who want to study a focused Office format renderer in depth.',
            points: ['Choose a format; contact us for Excel', 'For learning and research', 'No commercial use'],
            cta: 'Choose Source',
            links: [
              { code: 'DOC', label: `$${OFFICE_PRICING.singleResearch.usd}` },
              { code: 'DOCX', label: `$${OFFICE_PRICING.singleResearch.usd}` },
              { code: 'DOCX-CANVAS', displayCode: 'CANVAS', label: `$${OFFICE_PRICING.canvasResearch.usd}` },
              { code: 'PPT', label: `$${OFFICE_PRICING.singleResearch.usd}` },
              { code: 'PPTX', label: `$${OFFICE_PRICING.singleResearch.usd}` },
              { code: 'EXCEL', label: 'Contact' }
            ]
          },
          {
            key: 'developer',
            name: 'Developer',
            price: OFFICE_PRICING.developer.usd,
            badge: 'Source / Non-commercial',
            copy: 'Choose one DOCX engine, with source for the other formats and an integrated demo for technical evaluation.',
            points: ['Choose Canvas or HTML for DOCX', 'Integrated demo and other format source', 'Integration documentation and basic Q&A', '30-day non-commercial license, one origin'],
            cta: 'Buy Developer',
            variantsLabel: 'Choose your Developer DOCX engine',
            variants: [
              { key: 'allFormatSource', label: 'Canvas DOCX', ariaLabel: 'Buy Developer · Canvas DOCX' },
              { key: 'htmlFormatSource', label: 'HTML DOCXJS', ariaLabel: 'Buy Developer · HTML DOCXJS' }
            ]
          },
          {
            key: 'commercial',
            name: 'Commercial',
            price: OFFICE_PRICING.commercial.usd,
            priceSuffix: 'incl. first-year support',
            badge: 'Commercial License',
            copy: 'For SaaS products, OA systems, knowledge bases, low-code platforms, and SMB business systems going live.',
            points: ['Preview source delivery', 'Perpetual runtime rights for the agreed project', 'Up to 5 specific origins or 1 SaaS wildcard', 'First-year code updates and maintenance'],
            cta: 'Buy Commercial'
          },
          {
            key: 'enterprise',
            name: 'Enterprise Source',
            price: OFFICE_PRICING.enterprise.usd,
            priceSuffix: 'incl. first-year support',
            badge: 'Enterprise Source License',
            copy: 'For government, enterprise groups, private-delivery vendors, and ISVs with deeper delivery requirements.',
            points: ['Preview source and enterprise licensing tools', 'Deployment and distribution scope by contract', 'Private deployment integration support', 'First-year updates and priority maintenance'],
            cta: 'Buy Enterprise'
          }
        ],
        renewal: {
          title: 'Already licensed for Commercial or Enterprise?',
          copy: 'The first year of updates and maintenance is included. Renew for continued service and code updates; an existing perpetual runtime license does not expire if you do not renew. Renewal does not extend the original usage scope and excludes Developer.',
          price: OFFICE_PRICING.renewal.usd,
          unit: '/ year',
          cta: 'Renew Support and Updates'
        }
      },
      policy: {
        title: 'License note:',
        body: `Free local evaluation, single-format research from $${OFFICE_PRICING.singleResearch.usd}, and the $${OFFICE_PRICING.developer.usd} Developer edition do not include commercial rights. Commercial projects require a Commercial or Enterprise license. Usage scope, delivery and maintenance are governed by the selected product and signed contract.`
      }
    },
    contact: {
      eyebrow: 'Enterprise Service',
      title: 'Professional support from pre-sales evaluation through production delivery.',
      copy: 'Direct channels for enterprise procurement, commercial licensing, private deployment, integration, and ongoing product support.',
      emailNote: 'Pre-sales and after-sales support',
      channelsAriaLabel: 'International contact channels',
      rows: {
        shop: 'Purchase & Licensing',
        email: 'Enterprise Sales & Support Email'
      },
      channels: [
        {
          key: 'whatsapp',
          label: 'WhatsApp',
          value: 'Open a direct chat',
          note: 'Sales, licensing, and priority support'
        },
        {
          key: 'telegram',
          label: 'Telegram',
          value: '@wybaby168',
          note: 'Product consultation and delivery support'
        }
      ]
    }
  }
};

export function getLocaleConfig(locale) {
  return locales[locale] || locales[DEFAULT_LOCALE];
}

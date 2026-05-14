export const DEFAULT_LOCALE = 'zh-CN';

export const LANGUAGE_STORAGE_KEY = 'flyfish-office-preview-locale';

export const LANGUAGE_OPTIONS = [
  { code: 'zh-CN', shortLabel: '中', label: '中文' },
  { code: 'en-US', shortLabel: 'EN', label: 'English' }
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
        { href: '#showcase', label: '体验' },
        { href: '#architecture', label: '方案' },
        { href: '#pricing', label: '定价' },
        { href: '#contact', label: '咨询' }
      ]
    },
    hero: {
      imageAlt: 'Word、PowerPoint、Excel 多格式在线预览视觉图',
      eyebrow: '企业级 Office 在线预览解决方案',
      title: 'Flyfish Office Preview',
      copy: '让业务系统拥有即开即看的文档预览体验。以稳定版式、轻量访问与可控交付为核心，覆盖公文、报表、演示材料与历史档案等高频场景。',
      primaryCta: '立即购买',
      secondaryCta: '查看在线演示',
      metricsAria: '产品能力',
      metrics: ['全格式预览', '私有化部署', '轻量化集成']
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
    showcase: {
      eyebrow: '预览体验',
      title: '清晰、稳定、自然，让文档阅读回到业务本身。',
      copy: '面向客户侧阅读场景优化展示效果，兼顾文档细节、页面比例与信息扫描效率。',
      screenshotSuffix: '截图',
      items: [
        {
          title: 'Word 文档预览',
          eyebrow: 'DOC / DOCX',
          points: ['固定纸张宽度', '连续文档阅读', '表格与图片展示']
        },
        {
          title: '演示文稿预览',
          eyebrow: 'PPT / PPTX',
          points: ['按页呈现', '版式比例保持', '适配图文混排']
        },
        {
          title: '电子表格预览',
          eyebrow: 'XLS / XLSX',
          points: ['工作表切换', '单元格样式', '表格数据扫描']
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
      copy: '只想快速上线，选择 ¥129 部署方案；需要在商业项目中使用源码，选择 ¥1499 商业版。',
      deployment: {
        label: '快速部署',
        title: '不需要先研究源码，也可以快速上线。',
        copy: '适合需要把 Office 预览能力接入现有网站、系统或演示环境的客户。',
        plans: [
          {
            key: 'deployment',
            name: '部署方案',
            price: '129',
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
            price: '99',
            badge: '单格式源码 / 研究',
            copy: '适合只关注某一种 Office 格式的源码学习与技术研究。',
            points: ['任选一种格式源码', '用于学习研究', '不含商用授权'],
            cta: '选择源码',
            links: [
              { code: 'DOC', label: '传统文档' },
              { code: 'DOCX', label: '标准文档' },
              { code: 'PPT', label: '经典演示' },
              { code: 'PPTX', label: '现代演示' }
            ]
          },
          {
            key: 'developer',
            name: '开发版',
            price: '599',
            badge: '完整源码 / 非商业',
            copy: '适合个人开发者、单项目验证和学习研究，帮助团队先跑通完整预览链路。',
            points: ['交付完整源码', '基础集成文档', '30 天基础答疑', '学习研究与非商业验证'],
            cta: '购买开发版'
          },
          {
            key: 'commercial',
            name: '商业版',
            price: '1499',
            badge: '商用授权',
            copy: '适合 SaaS、OA、知识库、低代码平台和中小企业系统，面向真实项目上线。',
            points: ['交付完整源码', '包含商用授权', '部署指引与集成支持', '1 年版本更新'],
            cta: '联系开通商业版'
          },
          {
            key: 'enterprise',
            name: '企业源码版',
            price: '4999',
            badge: '企业级源码授权',
            copy: '适合政企、集团、私有化交付商和 ISV，覆盖更深的私有化与交付支持。',
            points: ['交付完整源码', '企业级源码授权', '私有化部署联调', '1 年优先维护与适配建议'],
            cta: '联系开通企业版'
          }
        ]
      },
      policy: {
        title: '授权说明：',
        body: '免费本地验证、单格式 ¥99 源码研究和开发版 ¥599 均仅限研究、评估、学习和非商业验证。未购买商业版或企业源码版的，不得将源码以任何形式应用于商业活动；对外部署、客户项目交付、商业系统集成请购买商业版或企业源码版。'
      }
    },
    contactModal: {
      closeLabel: '关闭联系弹窗',
      eyebrow: '微信客服',
      titlePrefix: '添加客服微信，了解',
      titleSuffix: '开通方式',
      copyPrefix: '请使用微信扫描二维码，或搜索微信号',
      copySuffix: '。我们会根据部署环境、授权范围和交付需求，协助确认合适的开通方案。',
      qrAlt: '微信客服二维码',
      wechatLabel: '微信客服',
      qrHint: '扫码添加，沟通授权购买与部署开通',
      emailLabel: '售后邮箱',
      scope: '适用于商业版、企业源码版授权咨询'
    },
    contact: {
      eyebrow: '购买与服务',
      title: '面向企业项目交付，提供授权购买与售后支持。',
      copy: '适用于内部系统、SaaS 产品、项目交付与定制化文档中台建设。欢迎通过以下方式获取产品与服务支持。',
      rows: {
        shop: '购买链接',
        email: '售后邮箱',
        wechat: '微信客服',
        demo: '在线演示'
      }
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
        { href: '#showcase', label: 'Preview' },
        { href: '#architecture', label: 'Solution' },
        { href: '#pricing', label: 'Pricing' },
        { href: '#contact', label: 'Contact' }
      ]
    },
    hero: {
      imageAlt: 'Office preview visual for Word, PowerPoint, and Excel',
      eyebrow: 'Enterprise Office Preview Solution',
      title: 'Flyfish Office Preview',
      copy: 'Give your business system a fast, in-browser Office preview experience. Built for layout fidelity, lightweight access, and controlled delivery across documents, reports, presentations, and archive files.',
      primaryCta: 'Buy Now',
      secondaryCta: 'View Demo',
      metricsAria: 'Product capabilities',
      metrics: ['All-format preview', 'Private deployment', 'Lightweight integration']
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
    showcase: {
      eyebrow: 'Preview Experience',
      title: 'Clear, stable, and natural document viewing for business users.',
      copy: 'Optimized for customer-facing reading scenarios with attention to document detail, page proportion, and fast information scanning.',
      screenshotSuffix: 'screenshot',
      items: [
        {
          title: 'Word Document Preview',
          eyebrow: 'DOC / DOCX',
          points: ['Fixed paper width', 'Continuous reading', 'Tables and images']
        },
        {
          title: 'Presentation Preview',
          eyebrow: 'PPT / PPTX',
          points: ['Slide-by-slide view', 'Preserved proportions', 'Text and image layouts']
        },
        {
          title: 'Spreadsheet Preview',
          eyebrow: 'XLS / XLSX',
          points: ['Worksheet switching', 'Cell styling', 'Data scanning']
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
      copy: 'Choose the ¥129 deployment plan for quick launch, or the ¥1499 commercial license when source code is used in a commercial project.',
      deployment: {
        label: 'Quick Deployment',
        title: 'Launch quickly without studying the source code first.',
        copy: 'For customers who need to add Office preview capability to an existing website, system, or demo environment.',
        plans: [
          {
            key: 'deployment',
            name: 'Deployment Plan',
            price: '129',
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
            price: '99',
            badge: 'Single Format / Research',
            copy: 'For developers who want to study one Office format in depth.',
            points: ['Choose one format source', 'For learning and research', 'No commercial use'],
            cta: 'Choose Source',
            links: [
              { code: 'DOC', label: 'Legacy docs' },
              { code: 'DOCX', label: 'Modern docs' },
              { code: 'PPT', label: 'Legacy slides' },
              { code: 'PPTX', label: 'Modern slides' }
            ]
          },
          {
            key: 'developer',
            name: 'Developer',
            price: '599',
            badge: 'Full Source / Non-commercial',
            copy: 'For individual developers, project validation, and non-commercial research before full product integration.',
            points: ['Full source delivery', 'Basic integration documentation', '30 days of basic Q&A', 'Learning and non-commercial validation'],
            cta: 'Buy Developer'
          },
          {
            key: 'commercial',
            name: 'Commercial',
            price: '1499',
            badge: 'Commercial License',
            copy: 'For SaaS products, OA systems, knowledge bases, low-code platforms, and SMB business systems going live.',
            points: ['Full source delivery', 'Commercial usage rights', 'Deployment and integration guidance', '1 year of version updates'],
            cta: 'Contact for Commercial'
          },
          {
            key: 'enterprise',
            name: 'Enterprise Source',
            price: '4999',
            badge: 'Enterprise Source License',
            copy: 'For government, enterprise groups, private-delivery vendors, and ISVs with deeper delivery requirements.',
            points: ['Full source delivery', 'Enterprise source license', 'Private deployment joint debugging', '1 year of priority maintenance advice'],
            cta: 'Contact for Enterprise'
          }
        ]
      },
      policy: {
        title: 'License note:',
        body: 'Free local evaluation, the ¥99 single-format research source, and the ¥599 developer version are limited to research, evaluation, learning, and non-commercial validation. Source code may not be used in any commercial activity unless the commercial or enterprise source license has been purchased.'
      }
    },
    contactModal: {
      closeLabel: 'Close contact dialog',
      eyebrow: 'WeChat Support',
      titlePrefix: 'Add support on WeChat to discuss',
      titleSuffix: 'activation',
      copyPrefix: 'Scan the QR code with WeChat, or search WeChat ID',
      copySuffix: '. We will help confirm the right plan based on your deployment environment, license scope, and delivery needs.',
      qrAlt: 'WeChat support QR code',
      wechatLabel: 'WeChat',
      qrHint: 'Scan to add support for license purchase and deployment activation',
      emailLabel: 'Support email',
      scope: 'For Commercial and Enterprise Source license inquiries'
    },
    contact: {
      eyebrow: 'Purchase & Service',
      title: 'Licensing and after-sales support for business delivery.',
      copy: 'Designed for internal systems, SaaS products, project delivery, and customized document-platform scenarios. Contact us for product and service support.',
      rows: {
        shop: 'Purchase Link',
        email: 'Support Email',
        wechat: 'WeChat Support',
        demo: 'Online Demo'
      }
    }
  }
};

export function getLocaleConfig(locale) {
  return locales[locale] || locales[DEFAULT_LOCALE];
}

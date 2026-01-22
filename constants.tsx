
import { ProjectItem } from './types';

export const PROJECTS: ProjectItem[] = [
  {
    id: 'campaignflow-pro',
    slug: 'campaignflow-pro',
    name: 'CampaignFlow Pro',
    badge: 'Template For Sale',
    category: 'Marketing Tech',
    oneLiner: 'A centralized command center for multi-channel marketing campaigns with automated attribution tracking.',
    bullets: [
      'Multi-channel tracking (Social, Email, PPC)',
      'Real-time ROI and attribution dashboards',
      'Automated UTM generation and link management'
    ],
    tags: ['Marketing', 'Ads', 'Analytics', 'Automation', 'ROI'],
    detail: {
      heroHeadline: 'Own your marketing data, end-to-end.',
      heroSubhead: 'Stop guessing which channels work. CampaignFlow Pro centralizes your tracking and automates the reporting.',
      pricing: [
        { title: 'Template License', items: ['Next.js Dashboard', 'Tracking Pixel scripts', 'Schema docs'] },
        { title: 'Brand & Integration', items: ['Ads API connections', 'Custom domain setup', 'Onboarding'] },
        { title: 'Enterprise Strategy', items: ['Custom attribution models', 'Data warehouse sync', 'Priority support'] }
      ],
      sections: {
        problem: 'Marketing teams often struggle with fragmented data across 5+ platforms, leading to inaccurate ROI reporting and wasted ad spend.',
        solution: 'A unified tracking infrastructure that captures every touchpoint and visualizes the true customer journey.',
        features: ['First-touch & Last-touch attribution', 'Custom conversion events', 'Automated weekly reports', 'Team collaboration tools'],
        stack: ['Next.js', 'PostgreSQL', 'Segment API', 'Tailwind', 'Chart.js'],
        outcomes: 'Helped a series-A startup identify $15k/mo in wasted ad spend within the first 30 days of deployment.'
      }
    }
  },
  {
    id: 'socialpulse-api',
    slug: 'socialpulse-api',
    name: 'SocialPulse API',
    badge: 'Template For Sale',
    category: 'Marketing Tech',
    oneLiner: 'Real-time social sentiment analysis and trend tracking API with headless dashboard.',
    bullets: [
      'Keyword & hashtag sentiment monitoring',
      'Competitor share-of-voice tracking',
      'Webhooks for instant trend alerting'
    ],
    tags: ['Marketing', 'API', 'Sentiment', 'AI', 'Trends'],
    detail: {
      heroHeadline: 'Listen to the internet in real-time.',
      heroSubhead: 'Scale your social intelligence with a high-throughput API and pre-built monitoring dashboard.',
      pricing: [
        { title: 'API License', items: ['Headless API source', 'Standard documentation', 'Core sentiment models'] },
        { title: 'Full Dashboard', items: ['Next.js monitoring UI', 'Custom trend alerts', 'Database setup'] },
        { title: 'Scale & Tuning', items: ['Custom NLP model training', 'High-volume proxy management', 'Priority SLA'] }
      ],
      sections: {
        problem: 'Brands miss critical cultural moments and customer complaints because standard listening tools are too slow or expensive for custom integration.',
        solution: 'SocialPulse provides a lightweight, high-performance API that can be embedded directly into internal ops tools.',
        features: ['Multilingual sentiment support', 'Historical data export', 'Automated keyword discovery', 'Discord/Slack integrations'],
        stack: ['Python', 'FastAPI', 'Redis', 'HuggingFace', 'PostgreSQL'],
        outcomes: 'Integrated into a global PR agency workflow, reducing trend reaction time from 4 hours to 10 minutes.'
      }
    }
  },
  {
    id: 'localpos-pro',
    slug: 'localpos-pro',
    name: 'LocalPOS Pro',
    badge: 'Template For Sale',
    category: 'POS/Commerce',
    oneLiner: 'A full POS + kiosk + online ordering system built for small restaurants that need to run lean.',
    bullets: [
      'Kiosk ordering → kitchen flow (KDS-ready)',
      'Pickup + delivery ordering (mobile-first)',
      'Payments, menus, modifiers, reporting, integrations'
    ],
    tags: ['POS', 'Kiosk', 'Ordering', 'Restaurant', 'Payments'],
    detail: {
      heroHeadline: 'Run your restaurant with less staff and more control.',
      heroSubhead: 'Kiosk, POS, and mobile ordering—built as a productized template you can brand and deploy fast.',
      pricing: [
        { title: 'Template License', items: ['Source code access', 'Basic documentation', 'Community support'] },
        { title: 'Template + Setup', items: ['Branding integration', 'Menu configuration', 'Hosting deployment', '1 month support'] },
        { title: 'Custom Build', items: ['Custom features', 'API integrations', 'Priority support', 'Training sessions'] }
      ],
      sections: {
        problem: 'Small restaurants often juggle multiple expensive tablets, disparate ordering systems, and high staff turnover, leading to errors and lost revenue.',
        solution: 'LocalPOS Pro consolidates kiosk, online, and in-person ordering into one cohesive system that speaks directly to your kitchen.',
        features: ['Real-time KDS syncing', 'Dynamic menu modifiers', 'Integrated Stripe payments', 'Detailed analytics dashboard'],
        stack: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Tailwind'],
        outcomes: 'Deployed in 5+ local eateries, reducing order errors by 30% and increasing average ticket size by 15% through kiosk upselling.'
      }
    }
  },
  {
    id: 'nexus-saas-core',
    slug: 'nexus-saas-core',
    name: 'Nexus SaaS Core',
    badge: 'Template For Sale',
    category: 'SaaS Infrastructure',
    oneLiner: 'The ultimate high-performance SaaS foundation with multi-tenancy, Stripe billing, and granular RBAC.',
    bullets: [
      'Next.js 15 + Server Components architecture',
      'Advanced multi-tenant structure with subdomains',
      'Stripe SDK integration for complex billing models'
    ],
    tags: ['SaaS', 'Stripe', 'Next.js', 'Auth', 'Multitenancy'],
    detail: {
      heroHeadline: 'Stop building auth and billing from scratch.',
      heroSubhead: 'A battle-tested SaaS infrastructure designed for performance, security, and rapid scaling.',
      pricing: [
        { title: 'Template License', items: ['Next.js project foundation', 'Stripe config guides', 'Auth blueprints'] },
        { title: 'Setup & Brand', items: ['Custom UI integration', 'Database provisioning', 'CI/CD pipeline setup'] },
        { title: 'Enterprise Build', items: ['Custom compliance audit', 'White-labeling support', 'Priority engineering'] }
      ],
      sections: {
        problem: 'SaaS founders waste 40% of their initial engineering time on boilerplate like auth, multi-tenancy, and billing logic.',
        solution: 'Nexus provides the "chassis" for your application so you can focus on building your unique value proposition immediately.',
        features: ['Subdomain routing', 'Granular team permissions', 'Usage-based billing logic', 'Unified audit logs'],
        stack: ['Next.js', 'TypeScript', 'Prisma', 'Stripe', 'PostgreSQL'],
        outcomes: 'Accelerated development for 10+ active SaaS products, reducing time-to-market by an average of 3 months.'
      }
    }
  },
  {
    id: 'agentflow-visual',
    slug: 'agentflow-visual',
    name: 'AgentFlow Visual',
    badge: 'Template-Style (for sale)',
    category: 'AI/Automation',
    oneLiner: 'A visual orchestration layer for LLM agents, enabling complex tool-calling and memory management.',
    bullets: [
      'Visual node builder for prompt chaining',
      'Integrated tool-calling (web search, DB access)',
      'Long-term memory vector store integration'
    ],
    tags: ['AI Agents', 'LLM', 'Python', 'Vector DB', 'Automation'],
    detail: {
      heroHeadline: 'Complex AI workflows, visually engineered.',
      heroSubhead: 'Chain together prompts, tools, and databases to build autonomous agents that actually solve problems.',
      pricing: [
        { title: 'Standard License', items: ['Visual editor source', 'Core node library', 'API documentation'] },
        { title: 'Agent Tuning', items: ['Custom node development', 'LLM model selection help', 'Workflow optimization'] },
        { title: 'Scale & Infra', items: ['High-volume hosting', 'Token usage analytics', 'Redundant vector store'] }
      ],
      sections: {
        problem: 'Coding complex AI agent behavior with branching logic and tool usage is error-prone and difficult to debug.',
        solution: 'AgentFlow provides a visual interface to design and monitor agent logic, making it accessible to non-technical stakeholders while remaining powerful for devs.',
        features: ['Real-time logic monitoring', 'Conditional branching nodes', 'Persistent agent memory', 'Multi-model support (OpenAI/Anthropic)'],
        stack: ['React Flow', 'FastAPI', 'Pinecone', 'LangChain'],
        outcomes: 'Used by agencies to automate 80% of their content research and data extraction workflows.'
      }
    }
  },
  {
    id: 'ledgerlink-global',
    slug: 'ledgerlink-global',
    name: 'LedgerLink Global',
    badge: 'Template For Sale',
    category: 'FinTech',
    oneLiner: 'Clean, multi-currency invoicing and financial tracking for global service teams.',
    bullets: [
      'Smart currency conversion via real-time APIs',
      'Automated reconciliation and tax reporting',
      'Client portal with embedded payment links'
    ],
    tags: ['Finance', 'Invoicing', 'Accounting', 'Global', 'Tax'],
    detail: {
      heroHeadline: 'Global finance tracking for modern teams.',
      heroSubhead: 'Handle multiple currencies, tax jurisdictions, and payment methods in one clean dashboard.',
      pricing: [
        { title: 'Standard Template', items: ['Dashboard UI', 'Database schema', 'Auth logic'] },
        { title: 'Custom Financial Integration', items: ['Bank API syncing', 'Custom tax logic', 'Branded portal'] },
        { title: 'Managed FinOps', items: ['Monthly maintenance', 'Security patching', 'Scalable infrastructure'] }
      ],
      sections: {
        problem: 'Small international firms struggle with manual currency calculations and fragmented invoicing across different regions.',
        solution: 'A unified ledger system that automatically handles conversions and tax calculations based on the region.',
        features: ['Automated PDF generation', 'Payment tracking links', 'Expense categorization', 'Visual cashflow trends'],
        stack: ['Next.js', 'Supabase', 'ExchangeRate API', 'React Query'],
        outcomes: 'Helps teams reduce their monthly closing time from 3 days to 4 hours through automation.'
      }
    }
  },
  {
    id: 'dataorbit-dashboard',
    slug: 'dataorbit-dashboard',
    name: 'DataOrbit',
    badge: 'Portfolio Build',
    category: 'Data/Analytics',
    oneLiner: 'A high-performance analytics dashboard for real-time sensor data and industrial monitoring.',
    bullets: [
      'WebSocket-powered live data streaming',
      'Advanced D3.js time-series visualizations',
      'Threshold alerting and anomaly detection'
    ],
    tags: ['Analytics', 'IoT', 'D3.js', 'Big Data', 'Real-time'],
    detail: {
      heroHeadline: 'Visualize the heartbeat of your operations.',
      heroSubhead: 'Custom real-time monitoring for high-volume data streams, built for precision and reliability.',
      pricing: [
        { title: 'Request Similar Build', items: ['Custom data connector', 'Real-time visualization layer', 'Alerting system'] },
        { title: 'Data Strategy & Ops', items: ['Database architecture', 'ETL pipeline design', 'Cloud optimization'] },
        { title: 'Ongoing Maintenance', items: ['Performance tuning', 'New visualization modules', 'Support'] }
      ],
      sections: {
        problem: 'Industrial firms have massive amounts of sensor data but no way to visualize it in real-time for immediate decision making.',
        solution: 'We built a high-throughput visualization engine that processes 10,000+ data points per second with zero lag.',
        features: ['Interactive time-series charts', 'Heatmap overlay for hardware', 'Predictive failure alerts', 'Mobile supervisor view'],
        stack: ['React', 'D3.js', 'InfluxDB', 'MQTT', 'Go'],
        outcomes: 'Implemented for a factory floor, reducing machine downtime by 22% through predictive alerting.'
      }
    }
  },
  {
    id: 'ai-crm-pro',
    slug: 'ai-crm-pro',
    name: 'AI CRM Pro',
    badge: 'Template For Sale',
    category: 'CRM/Sales',
    oneLiner: 'A modern CRM with pipelines, automations, and AI helpers that actually save time.',
    bullets: [
      'Leads → deals pipeline with tasks + reminders',
      'Automations + webhooks/Zapier-ready integrations',
      'AI assist for notes, follow-ups, and next steps'
    ],
    tags: ['CRM', 'Sales', 'Automations', 'AI', 'Workflows'],
    detail: {
      heroHeadline: 'A CRM that does the follow-up work with you.',
      heroSubhead: 'Pipelines, automations, and AI tools that keep your leads moving without living in spreadsheets.',
      pricing: [
        { title: 'Template License', items: ['Full UI components', 'Next.js project structure', 'Auth ready'] },
        { title: 'Template + Setup', items: ['Database provisioning', 'Custom workflow setup', 'Onboarding call'] },
        { title: 'Custom Build', items: ['Custom AI model tuning', 'Enterprise SSO', 'Managed hosting'] }
      ],
      sections: {
        problem: 'Standard CRMs are either too simple (spreadsheets) or too bloated (Salesforce), leaving small teams buried in admin tasks.',
        solution: 'AI CRM Pro uses intelligent automation and generative AI to handle the "boring" parts of sales, letting you focus on the closing.',
        features: ['Automated follow-up emails', 'AI call summarization', 'Pipeline visualization', 'Zapier integration'],
        stack: ['Next.js', 'Prisma', 'OpenAI API', 'Tailwind', 'tRPC'],
        outcomes: 'Users report saving 5+ hours per week on manual data entry and follow-up scheduling.'
      }
    }
  },
  {
    id: 'vwms',
    slug: 'vwms',
    name: 'VWMS',
    badge: 'Template For Sale',
    category: 'Operations',
    oneLiner: 'An interactive virtual warehouse that turns inventory into a visual system people can actually use.',
    demoUrl: "https://vwms.ascentraintegrationstudios.com",
    bullets: [
      'Visual warehouse layout + asset tracking',
      'Fast lookup, movement history, and status changes',
      'Built for real operations, not spreadsheets'
    ],
    tags: ['Warehouse', 'Inventory', 'Visualization', 'Ops'],
    detail: {
      heroHeadline: 'A warehouse system people actually enjoy using.',
      heroSubhead: 'Visual layout + real tracking—designed to reduce mistakes, speed up picks, and keep inventory accurate.',
      pricing: [
        { title: 'Request Similar Build', items: ['Custom warehouse mapping', 'Mobile scanning integration', 'ERP sync'] },
        { title: 'Customization & Integrations', items: ['RFID integration', 'Automated restock alerts', 'Multi-site support'] },
        { title: 'Ongoing Support', items: ['SLA-based maintenance', 'Feature updates', 'Server management'] }
      ],
      sections: {
        problem: 'Traditional WMS software is text-heavy and disconnected from the physical layout, making training difficult and errors frequent.',
        solution: 'We built a digital twin of the warehouse floor where users can see exactly where items are located in 2D space.',
        features: ['Interactive map interface', 'Barcode scanning app', 'Batch movement history', 'Role-based access'],
        stack: ['React', 'D3.js', 'Express', 'Redis', 'WebSockets'],
        outcomes: 'Implemented for a mid-sized distributor, reducing picking errors by 40% and training time by 60%.'
        demoUrl: "https://vwms.ascentraintegrationstudios.com"
      }
    }
  },
  {
    id: 'memory-care-companion',
    slug: 'memory-care-companion',
    name: 'Memory Care Companion',
    badge: 'Template-Style (for sale)',
    category: 'Wellness',
    oneLiner: 'A supportive daily companion for early memory loss: brain games, routines, education, and community.',
    bullets: [
      'Brain games + adaptive difficulty + progress trends',
      'Routines, reminders, wellness planning (diet/exercise)',
      'Education + caregiver support tools (privacy-first)'
    ],
    tags: ['Wellness', 'Brain Games', 'Routines', 'Caregiver', 'AI Assist'],
    detail: {
      heroHeadline: 'Built to support the early stages—gently, daily, and consistently.',
      heroSubhead: 'Brain stimulation, routines, education, and support tools—made with privacy, clarity, and dignity.',
      pricing: [
        { title: 'Template License', items: ['White-label source code', 'Accessibility audited UI', 'Game logic'] },
        { title: 'Template + Setup', items: ['Deployment on Vercel', 'Basic branding', 'Content upload'] },
        { title: 'Custom Build', items: ['Custom game modules', 'Clinic-wide dashboards', 'HIPAA compliance help'] }
      ],
      sections: {
        problem: 'Early-stage dementia patients often lose independence due to lack of structured routines and engaging cognitive exercises.',
        solution: 'A simple, high-contrast, dignity-first application that guides users through their day while keeping their mind active.',
        features: ['Cognitive assessment games', 'Visual daily schedule', 'Caregiver alert system', 'Family message board'],
        stack: ['React Native', 'Firebase', 'Cognitive Science Logic', 'Native UI'],
        outcomes: 'Piloted with 20 families, showing improved adherence to medication schedules and high engagement with memory games.'
      }
    }
  },
  {
    id: 'polo-park-east',
    slug: 'polo-park-east',
    name: 'Polo Park East',
    badge: 'Portfolio Build',
    category: 'Community',
    oneLiner: 'A modern community hub for a 55+ neighborhood—events, updates, directory, and an AI concierge.',
    bullets: [
      'Board news + events + documents in one place',
      'Resident directory + forum + messaging options',
      'Mobile + website designed for readability and simplicity'
    ],
    tags: ['Community', 'Events', 'Directory', 'Mobile+Web', 'Concierge'],
    detail: {
      heroHeadline: 'A modern community experience that doesn’t overwhelm.',
      heroSubhead: 'Board updates, events, documents, and resident tools—built mobile-first with a clean mirrored website.',
      pricing: [
        { title: 'Request Similar Build', items: ['Custom directory fields', 'Amenity booking system', 'Newsletters'] },
        { title: 'Customization & Integrations', items: ['IoT gate access', 'HOA payment integration', 'Push notifications'] },
        { title: 'Ongoing Support', items: ['Monthly updates', 'Content moderation', 'Priority helpdesk'] }
      ],
      sections: {
        problem: '55+ communities often rely on paper newsletters and outdated websites, making it hard for residents to stay connected.',
        solution: 'A modern, accessible web/mobile platform that centralizes community life without a steep learning curve.',
        features: ['One-click event registration', 'Secure board documents', 'Resident chat', 'AI Community Concierge'],
        stack: ['Next.js', 'Sanity CMS', 'AWS Amplify', 'Tailwind'],
        outcomes: 'Adopted by 300+ residents, becoming the primary source for community news and reducing board admin emails by 50%.'
      }
    }
  }
];

import { projectShots as shots } from '../assets/projects';

export type ProjectCategory = 'FinTech' | 'SaaS & ERP' | 'Web Experience';

export interface Project {
  id: string;
  slug: string;
  /** Product name as shown in the app itself. */
  name: string;
  /** One-line positioning, taken from the project's own description. */
  tagline: string;
  category: ProjectCategory;
  /** Short summary used on cards. */
  summary: string;
  /** Longer overview used on the case-study page. */
  overview: string;
  /** Feature set, as implemented in the published source code. */
  features: string[];
  /** Notable modules / engineering details visible in the codebase. */
  engineering: string[];
  techStack: string[];
  /** Factual at-a-glance facts (no invented metrics). */
  facts: { value: string; label: string }[];
  repoUrl: string;
  liveUrl?: string;
  /** Visual identity used for frames, glows and accents. */
  brand: { accent: string; theme: 'dark' | 'light' };
  /** Real screenshots captured from the running application. */
  shots: { desktop: string; desktopAlt: string; mobile: string };
}

export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  businessValue: string;
  iconName: string;
  idealFor: string;
}

export interface SkillCategory {
  category: string;
  items: {
    name: string;
    level: string;
    description: string;
  }[];
}

export const PERSONAL_INFO = {
  name: 'Suliman Khan',
  headline: 'Chief Operating Officer (COO) at KorvenzaTech',
  shortTitle: 'COO · KorvenzaTech',
  supportingHeadline:
    'I lead operations at KorvenzaTech — turning business strategy into disciplined execution, and technology ideas into products that ship.',
  heroBio:
    'An engineer-turned-operator. My hands-on Flutter background lets me run delivery with technical precision: realistic plans, accountable teams, and software built around clear business goals.',
  aboutBio:
    'I am Suliman Khan, a Flutter Developer and Chief Operating Officer at KorvenzaTech. I work across mobile application development, technology projects, product delivery, and operational coordination. My technical background helps me understand software requirements, while my operations role focuses on organized workflows, effective collaboration, quality standards, and reliable project execution.\n\nI am interested in building useful digital products, solving real business problems, and collaborating with international clients to turn ideas into practical software solutions.',
  companyName: 'KorvenzaTech',
  companyUrl: 'https://korvenzatech.com/',
  companyServicesUrl: 'https://korvenzatech.com/services',
  companyTagline: 'Technology built around business goals.',
  companyDescription:
    'Software engineering, mobile applications, web platforms, and modern digital solutions.',
  experienceYears: '3+ Years',
  education: 'BS Software Engineering',
  primarySkills: ['Flutter', 'Dart', 'Firebase', 'REST APIs', 'Git', 'GitHub'],
  email: 'sulimankhan.engineer@gmail.com',
  github: 'https://github.com/eng-suliman-sys',
  githubHandle: 'eng-suliman-sys',
  linkedin: 'https://www.linkedin.com/in/suliman-khan-929155434/',
  location: 'Remote / Global (International Delivery)',
  availability: 'Open for International Client Engagements',
};

const GH = 'https://github.com/eng-suliman-sys';

export const PROJECTS: Project[] = [
  {
    id: 'paysphere-wallet',
    slug: 'paysphere-wallet',
    name: 'PaySphere',
    tagline: 'FinTech digital wallet platform',
    category: 'FinTech',
    summary:
      'A digital wallet platform with a double-entry ledger, IBFT bank transfers, utility bill payments, payment-gateway adapters and risk controls.',
    overview:
      'PaySphere is a full-stack digital wallet built around a double-entry ledger. Users can add money, send and request funds, pay utility bills, top up mobile credit and pay by QR, while an admin portal covers KYC, gateway configuration and risk oversight. The backend is an Express server with a PostgreSQL schema modelled in Prisma.',
    features: [
      'Wallet balance, savings vault and escrow / hold balances',
      'Send money via IBFT, request money with shareable links',
      'Utility bills, mobile top-ups and Scan & Pay (QR)',
      'Pluggable payment-gateway adapters with a gateway playground',
      'KYC verification flow and admin & risk portal',
      'Full transaction ledger with searchable history and receipts',
    ],
    engineering: [
      'Double-entry ledger: every movement is recorded as balanced debit / credit entries',
      'Prisma schema for users, wallets, ledger entries, gateways, bills, requests and audit logs',
      'Express API layer with repositories, services and gateway adapters',
      'Request validation with Zod and QR code generation for merchant payments',
    ],
    techStack: ['React 19', 'TypeScript', 'Tailwind CSS', 'Express', 'Prisma', 'PostgreSQL', 'Zod', 'Vite'],
    facts: [
      { value: 'Ledger', label: 'Double-entry accounting core' },
      { value: '8', label: 'Core payment services' },
      { value: 'Full-stack', label: 'React + Express + Prisma' },
    ],
    repoUrl: `${GH}/paysphere-wallet`,
    liveUrl: 'https://paysphere-wallet.vercel.app',
    brand: { accent: '#16a34a', theme: 'light' },
    shots: { desktop: shots.paysphereDesk, desktopAlt: shots.paysphereDesk2, mobile: shots.paysphereMob },
  },
  {
    id: 'edusphere-erp',
    slug: 'edusphere-erp',
    name: 'EduSphere ERP',
    tagline: 'Multi-tenant school ERP & smart fee suite',
    category: 'SaaS & ERP',
    summary:
      'A multi-tenant school ERP with eight role-based portals, smart fee automation, attendance, exams, finance and analytics across campuses.',
    overview:
      'EduSphere is a school management platform designed for multi-campus institutions. Eight role-based portals — super admin, school admin, principal, teacher, parent, student, accountant and receptionist — share one data model covering admissions, fees, attendance, academics, transport, hostel, finance and communication.',
    features: [
      'Eight dedicated portals with role-based navigation',
      'Smart fee automation with late-fee engine and collection tracking',
      'Attendance, exams & performance, homework and PTM booking',
      'Finance & expense ledger with approval workflows',
      'Transport, hostel and multi-branch / campus management',
      'Custom form builder, exportable reports and activity audit log',
    ],
    engineering: [
      'Typed domain model shared across all portals (TypeScript)',
      'Central ERP context for state shared between portals',
      'Revenue, attendance and enrolment analytics charts with Recharts',
      'Gemini API integration for AI performance insights',
    ],
    techStack: ['React 19', 'TypeScript', 'Tailwind CSS', 'Recharts', 'Gemini API', 'Vite'],
    facts: [
      { value: '8', label: 'Role-based portals' },
      { value: 'Multi', label: 'Campus / tenant support' },
      { value: 'AI', label: 'Performance analytics' },
    ],
    repoUrl: `${GH}/school-erp`,
    liveUrl: 'https://schoolerp-wine.vercel.app',
    brand: { accent: '#2563eb', theme: 'light' },
    shots: { desktop: shots.edusphereDesk, desktopAlt: shots.edusphereDesk2, mobile: shots.edusphereMob },
  },
  {
    id: 'apexgym-os',
    slug: 'apexgym-os',
    name: 'ApexGym OS',
    tagline: 'Fitness club SaaS & gym ERP',
    category: 'SaaS & ERP',
    summary:
      'An enterprise gym management system with multi-branch operations, QR attendance, billing, workouts, PT bookings, POS and AI fitness insights.',
    overview:
      'ApexGym OS runs the day-to-day operations of a fitness club from one dashboard. It covers memberships and renewals, QR check-in kiosks, class schedules and personal training, workout and diet plans, equipment and inventory, staff, CRM and access control — with dashboards tailored to owners, admins, trainers, receptionists, accountants and members.',
    features: [
      'Multi-branch dashboards with revenue and retention analytics',
      'QR check-in kiosk and biometric access hub',
      'Membership plans, smart renewals, billing and POS',
      'Workout builder, diet plans and body-progress tracking',
      'Group classes, personal-training bookings and leads CRM',
      'Roles & permissions matrix and audit logs',
    ],
    engineering: [
      'Role-specific dashboards for six user types',
      'Express server with a Gemini-powered AI fitness assistant endpoint',
      'Shared gym context for members, plans, bookings and payments',
      'Printable receipts and QR code generation',
    ],
    techStack: ['React 19', 'TypeScript', 'Tailwind CSS', 'Express', 'Gemini API', 'Vite'],
    facts: [
      { value: '6', label: 'Role-based dashboards' },
      { value: 'QR', label: 'Check-in & access' },
      { value: 'AI', label: 'Fitness assistant' },
    ],
    repoUrl: `${GH}/GYM-`,
    liveUrl: 'https://gym-cyan-two.vercel.app',
    brand: { accent: '#10b981', theme: 'dark' },
    shots: { desktop: shots.apexgymDesk, desktopAlt: shots.apexgymDesk2, mobile: shots.apexgymMob },
  },
  {
    id: 'crypto-trading-assistant',
    slug: 'crypto-trading-assistant',
    name: 'Crypto Trading Assistant',
    tagline: 'Demo & paper-trading signal assistant',
    category: 'FinTech',
    summary:
      'A practice-trading assistant that produces demo signals, chart analysis, entry / stop-loss / take-profit levels and futures risk management.',
    overview:
      'Built for paper trading on Binance demo accounts, the assistant combines a candlestick chart, configurable pairs and timeframes, and an analysis engine that returns practice signals with entry, stop-loss and take-profit levels. Users can attach a chart screenshot for multimodal analysis, size positions with a risk calculator and track demo positions.',
    features: [
      'Candlestick chart with entry, SL and TP overlays',
      'Configurable trading pairs and timeframes',
      'Optional chart-screenshot upload for multimodal analysis',
      'Position size and risk calculator with a max-loss rule',
      'Demo position tracking with a paper balance',
      'Algorithmic fallback engine when no AI key is configured',
    ],
    engineering: [
      'Express API combining Gemini analysis with a technical-signal fallback',
      'Custom candlestick chart component',
      'Risk-first defaults: strict stop-loss rule and risk-reward display',
    ],
    techStack: ['React 19', 'TypeScript', 'Tailwind CSS', 'Express', 'Gemini API', 'Vite'],
    facts: [
      { value: 'Demo', label: 'Practice trading only' },
      { value: 'SL / TP', label: 'Risk levels per signal' },
      { value: 'AI', label: 'Chart analysis' },
    ],
    repoUrl: `${GH}/Demo-Trading-Signal`,
    liveUrl: 'https://demo-trading-signal.vercel.app',
    brand: { accent: '#f59e0b', theme: 'dark' },
    shots: { desktop: shots.tradingDesk, desktopAlt: shots.tradingDesk2, mobile: shots.tradingMob },
  },
  {
    id: 'terracotta-sage',
    slug: 'terracotta-sage',
    name: 'Terracotta & Sage',
    tagline: 'Restaurant web experience',
    category: 'Web Experience',
    summary:
      'A modern restaurant website with an interactive 3D dish showcase, animated ingredients, live happy-hour specials, online ordering and table reservations.',
    overview:
      'Terracotta & Sage is a brand-led restaurant website. A Three.js dish showcase lets guests inspect signature plates in 3D, while a live happy-hour banner, order drawer, table-reservation flow and location finder turn visits into bookings and orders.',
    features: [
      'Interactive 3D dish showcase built with Three.js',
      'Animated floating-ingredient hero',
      'Live happy-hour countdown with promo codes',
      'Online order drawer and table-reservation modal',
      'Location finder with map integration',
    ],
    engineering: [
      'Three.js scene embedded in React for the dish showcase',
      'Google Maps integration via @vis.gl/react-google-maps',
      'Skeleton loaders and motion-driven transitions',
    ],
    techStack: ['React 19', 'TypeScript', 'Three.js', 'Tailwind CSS', 'Google Maps', 'Vite'],
    facts: [
      { value: '3D', label: 'Dish showcase' },
      { value: 'Live', label: 'Happy-hour specials' },
      { value: 'Online', label: 'Orders & reservations' },
    ],
    repoUrl: `${GH}/resturant`,
    brand: { accent: '#e2583e', theme: 'light' },
    shots: { desktop: shots.terracottaDesk, desktopAlt: shots.terracottaDesk2, mobile: shots.terracottaMob },
  },
];

export const SERVICES: Service[] = [
  {
    id: 'flutter-dev',
    title: 'Flutter Mobile App Development',
    shortDesc: 'Native-caliber iOS and Android apps built from a single clean Dart codebase.',
    fullDesc:
      'End-to-end mobile development using Google’s Flutter framework. Delivering responsive, 60fps applications with polished animations, custom widgets, and consistent performance across both iOS and Android.',
    deliverables: [
      'Production-ready iOS and Android builds',
      'Clean architecture (BLoC / Riverpod / Provider)',
      'Cross-platform UI/UX implementation from Figma or design specs',
      'Native device integration (Camera, GPS, Biometrics, Bluetooth)'
    ],
    businessValue:
      'Halves development and maintenance costs compared to maintaining separate Swift and Kotlin codebases while accelerating time to market.',
    iconName: 'Smartphone',
    idealFor: 'Startups launching an MVP, businesses expanding to mobile, and companies rebuilding slow hybrid apps.'
  },
  {
    id: 'firebase-integration',
    title: 'Firebase Auth & Database Architecture',
    shortDesc: 'Secure user authentication, Firestore databases, and serverless workflows.',
    fullDesc:
      'Robust backend configuration using Google Cloud Firebase services. Architecting scalable database structures, security rules, phone/email/social login, and real-time state synchronization.',
    deliverables: [
      'Firebase Authentication (Email, Phone OTP, Google, Apple)',
      'Cloud Firestore schema design and indexing strategy',
      'Granular Firestore security rules and validation',
      'Firebase Cloud Storage for secure asset and document uploads'
    ],
    businessValue:
      'Provides a high-availability, auto-scaling backend infrastructure with zero server maintenance overhead, saving engineering months.',
    iconName: 'Flame',
    idealFor: 'Applications requiring real-time updates, collaborative tools, and rapid backend setup.'
  },
  {
    id: 'rest-api-integration',
    title: 'REST API & Backend Integration',
    shortDesc: 'Connecting mobile clients with secure, fault-tolerant external services.',
    fullDesc:
      'Engineered API integration using Dio and Http packages in Dart. Implements robust error handling, token refresh interceptors, retry policies, offline caching, and JSON serializable data parsing.',
    deliverables: [
      'Structured API service layer with Dio/Http',
      'Automatic OAuth / JWT token refresh handling',
      'Network connectivity monitoring and exponential backoff retry',
      'Model serialization with json_serializable / Freezed'
    ],
    businessValue:
      'Guarantees your mobile application reliably communicates with your existing ERP, payment gateways, CRM, or custom backends without data loss.',
    iconName: 'Network',
    idealFor: 'Businesses integrating existing backend systems or third-party enterprise services.'
  },
  {
    id: 'bug-fixing',
    title: 'Flutter Bug Fixing & Refactoring',
    shortDesc: 'Diagnosing complex bugs, resolving state leaks, and modernizing legacy code.',
    fullDesc:
      'Deep diagnostic analysis of unstable Flutter apps. Resolving memory leaks, janky frame drops, layout overflow bugs, state desynchronization, and deprecation warnings.',
    deliverables: [
      'Comprehensive codebase audit and bug diagnosis report',
      'Resolution of visual glitches and layout overflow exceptions',
      'State management cleanup and architecture standardization',
      'Flutter & Dart dependency version updates'
    ],
    businessValue:
      'Restores app stability, decreases crash rates on app stores, and protects customer retention without needing a full rewrite.',
    iconName: 'Wrench',
    idealFor: 'Teams struggling with inherited codebases, buggy production releases, or store rejections.'
  },
  {
    id: 'performance-optimization',
    title: 'Mobile App Performance Optimization',
    shortDesc: 'Achieving consistent 60fps renders, reducing bundle sizes, and speeding up launch times.',
    fullDesc:
      'Detailed profiling using Flutter DevTools to identify render bottlenecks, unnecessary widget rebuilds, and heavy computational tasks. Optimizing memory footprints and network payloads.',
    deliverables: [
      'Flutter DevTools profiling and flame graph evaluation',
      'Widget rebuild minimization using const constructors and keys',
      'Image asset compression and intelligent cache prefetching',
      'App launch time reduction and smaller APK / IPA bundle sizes'
    ],
    businessValue:
      'Directly correlates with higher App Store and Google Play ratings, reduced battery consumption, and improved user engagement.',
    iconName: 'Zap',
    idealFor: 'Apps experiencing sluggish scrolling, slow cold-starts, or high memory consumption.'
  },
  {
    id: 'app-maintenance',
    title: 'App Maintenance & OS Compatibility',
    shortDesc: 'Keeping applications updated with latest iOS and Android guidelines.',
    fullDesc:
      'Continuous maintenance to ensure compliance with Apple App Store and Google Play policy changes, target SDK updates, privacy manifest requirements, and third-party dependency patches.',
    deliverables: [
      'Target SDK and API level upgrades for Android and iOS',
      'Store compliance updates (Privacy manifests, permission notices)',
      'Third-party plugin upgrades and deprecated API migration',
      'Release management and store submission guidance'
    ],
    businessValue:
      'Prevents sudden store de-listings, maintains security compliance, and ensures seamless operation on the latest phone hardware.',
    iconName: 'ShieldCheck',
    idealFor: 'Companies with live apps needing proactive maintenance and peace of mind.'
  },
  {
    id: 'project-coordination',
    title: 'Technical Project Coordination',
    shortDesc: 'Bridging technical mobile development with strategic operational delivery.',
    fullDesc:
      'Leveraging my dual perspective as Flutter Developer and COO at KorvenzaTech to coordinate sprint planning, scope management, requirement translation, and international client communication.',
    deliverables: [
      'Clear technical milestone mapping and sprint roadmaps',
      'Transparent client communication and weekly progress checkpoints',
      'Code review coordination and QA acceptance standards',
      'Seamless alignment between design, mobile, and backend teams'
    ],
    businessValue:
      'Eliminates communication bottlenecks and scope creep, delivering projects on schedule with transparent accountability.',
    iconName: 'Workflow',
    idealFor: 'International founders and startups needing structured execution without managing multiple disparate contractors.'
  }
];

export const LEADERSHIP_INFO = {
  title: 'Operational Leadership, Engineered',
  subtitle:
    'Bridging hands-on Flutter software engineering with strategic operations leadership as Chief Operating Officer at KorvenzaTech.',
  role: 'Chief Operating Officer (COO)',
  company: 'KorvenzaTech',
  overview:
    'At KorvenzaTech, my mission is to ensure that our engineering capability directly serves our clients’ business objectives. Being actively immersed in Flutter development allows me to evaluate technical feasibility with realistic precision, while my operations role ensures that teams collaborate effectively, follow disciplined delivery cycles, and maintain uncompromised standards of software quality.',
  pillars: [
    {
      title: 'Operational Coordination',
      desc: 'Structuring organized development workflows, sprint cadences, and cross-functional team synchronization across mobile, web, and cloud projects.',
      icon: 'GitPullRequest'
    },
    {
      title: 'Delivery & Quality Standards',
      desc: 'Enforcing peer code reviews, continuous integration checks, and user-acceptance testing before any build reaches production.',
      icon: 'CheckCircle2'
    },
    {
      title: 'Client Communication & Transparency',
      desc: 'Acting as a clear technical bridge for international clients, translating complex software architecture into clear business milestones.',
      icon: 'Users'
    },
    {
      title: 'Business-Focused Tech Decisions',
      desc: 'Evaluating tech stacks and architecture through the lens of long-term maintainability, developer velocity, and client budget efficiency.',
      icon: 'Target'
    }
  ],
  companyHighlights: [
    { label: 'Core Competency', val: 'Mobile & Cloud Engineering' },
    { label: 'Client Focus', val: 'International Startups & Enterprises' },
    { label: 'Delivery Model', val: 'Agile Sprints & Clear Milestones' },
    { label: 'Company Portal', val: 'korvenzatech.com' }
  ]
};

export const SKILLS_DATA: SkillCategory[] = [
  {
    category: 'Mobile & Frameworks',
    items: [
      { name: 'Flutter', level: 'Core Expertise', description: 'Cross-platform mobile app development for iOS & Android' },
      { name: 'Dart', level: 'Advanced', description: 'Object-oriented programming, async streams, sound null safety' },
      { name: 'BLoC & Riverpod', level: 'Advanced', description: 'Predictable, testable, decoupled reactive state management' },
      { name: 'Provider', level: 'Proficient', description: 'Dependency injection and state broadcasting' }
    ]
  },
  {
    category: 'Cloud, APIs & Persistence',
    items: [
      { name: 'Firebase Firestore', level: 'Advanced', description: 'NoSQL real-time document stores and indexing' },
      { name: 'Firebase Auth', level: 'Advanced', description: 'Multi-provider authentication and JWT verification' },
      { name: 'REST APIs & Dio', level: 'Advanced', description: 'Custom interceptors, error handling, token refreshes' },
      { name: 'SQLite & Hive', level: 'Proficient', description: 'Offline-first high-speed local data persistence' }
    ]
  },
  {
    category: 'Tools & Leadership',
    items: [
      { name: 'Git & GitHub', level: 'Advanced', description: 'Branching workflows, code reviews, PR audits' },
      { name: 'Project Planning', level: 'COO Practice', description: 'Agile sprints, milestone scoping, backlog refinement' },
      { name: 'Client Communication', level: 'Core Strength', description: 'Structured international communication and reporting' },
      { name: 'DevTools & Profiling', level: 'Proficient', description: 'Memory leak prevention, frame timing, bundle minimization' }
    ]
  }
];

export const WORK_PROCESS = [
  {
    step: '01',
    title: 'Discovery & Architecture',
    desc: 'Deep analysis of technical requirements, user flows, and business milestones to define the optimal Flutter architecture.'
  },
  {
    step: '02',
    title: 'Sprint Planning & Setup',
    desc: 'Structuring milestones with clear deliverables, setting up Git repositories, CI/CD pipelines, and project boards.'
  },
  {
    step: '03',
    title: 'Agile Development',
    desc: 'Iterative sprint development with clean Dart code, responsive Flutter widgets, and integrated backend services.'
  },
  {
    step: '04',
    title: 'Testing & Optimization',
    desc: 'Rigorous cross-device testing, 60fps performance profiling, and error boundary validation.'
  },
  {
    step: '05',
    title: 'Store Deployment & Handover',
    desc: 'Assistance with App Store / Google Play submission, documentation, and operational maintenance handover.'
  }
];

export const FAQS = [
  {
    q: 'How does your role as Flutter Developer work alongside your role as COO at KorvenzaTech?',
    a: 'My hands-on Flutter development expertise ensures I deeply understand software constraints, code quality, and engineering challenges. As COO, I bring organized project governance, reliable communication, and operational discipline so your project is delivered on schedule without gaps between management and code.'
  },
  {
    q: 'Can we hire you for direct Flutter development or full-team KorvenzaTech delivery?',
    a: 'Both options are supported! You can collaborate directly with me for focused Flutter development, architectural reviews, and API integrations, or we can engage KorvenzaTech’s cross-functional engineering team for end-to-end multi-platform platforms.'
  },
  {
    q: 'How do you handle time zone differences with international clients?',
    a: 'For clients in other time zones, we establish structured overlap hours for daily syncs, provide async video demos, and use structured GitHub / task boards to keep communication uninterrupted.'
  },
  {
    q: 'Do you work with fixed-price milestones or hourly engagements?',
    a: 'We offer flexible engagement structures based on your project requirements: fixed-price milestone delivery for well-defined scopes, or monthly sprint retainers for ongoing development and operational support.'
  }
];

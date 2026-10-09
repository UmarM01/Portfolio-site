export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  longDescription?: string;
  techStack: string[];
  status: 'production' | 'completed' | 'in-progress';
  demoUrl?: string;
  repoUrl?: string;
  featured?: boolean;
  category: 'Full-Stack' | 'AI & Systems' | 'E-Commerce' | 'Recommerce' | 'Healthcare' | 'Systems & Desktop';
  keyMetrics?: { label: string; value: string; desc?: string }[];
  architecture?: string[];
  keyFeatures?: string[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  category: 'Engineering' | 'Operations' | 'Freelance';
  badge: string;
  tagline?: string;
  description: string[];
  skills: string[];
  metrics?: { label: string; value: string; desc?: string }[];
  highlights?: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  location: string;
  grade?: string;
}

export const portfolioData = {
  personal: {
    name: 'Umar Munshi',
    title: 'Software Engineer & Full-Stack Developer',
    subtitle: 'Software Engineer & Full-Stack Developer | Distributed Systems, Scalable Web & AI Systems',
    bio: 'Software Engineer and Full-Stack Developer specializing in high-concurrency web platforms, distributed backend services, and intelligent multi-agent AI systems. Proven track record engineering mission-critical e-commerce infrastructure, real-time clinical workflows, computer vision pipelines, and desktop systems. Experienced in architecting production solutions from ground-up design to low-latency cloud deployment.',
    avatar: '/about/umar.jpg',
    location: 'Bengaluru, India',
    email: 'umarmunshi25@gmail.com',
    phone: '+91 90193 49645',
    resumeUrl: '/resume.pdf',
    website: 'https://zoopify.in',
    socialLinks: [
      {
        platform: 'GitHub',
        url: 'https://github.com/UmarM01/',
        username: 'UmarM01',
      },
      {
        platform: 'LinkedIn',
        url: 'https://www.linkedin.com/in/umar-m-338726223/',
        username: 'Umar Munshi',
      },
      {
        platform: 'LeetCode',
        url: 'https://leetcode.com/u/Umar250/',
        username: 'Umar250',
      },
    ],
  },
  projects: [
    {
      id: 'zoopify',
      title: 'Zoopify',
      subtitle: 'Refurbished E-Commerce Platform (zoopify.in)',
      description: 'Direct-to-consumer marketplace for certified refurbished smartphones and electronics with graded condition tiers, powered by a 317-endpoint FastAPI backend, Next.js 16, and an 80-table PostgreSQL architecture.',
      longDescription: 'Zoopify is a direct-to-consumer recommerce marketplace for certified pre-owned and refurbished smartphones and electronics, enabling customers to browse quality-diagnosed devices across condition tiers with warranty protection and open-box doorstep inspection. Under the hood, the platform is built around a 317-endpoint asynchronous FastAPI backend, Next.js 16, and an 80-table PostgreSQL architecture. The system tracks individual physical devices by serial and IMEI, using transaction-level locking to prevent concurrent double-allocation while payment reconciliation, inventory reservations, and background lifecycle processes handle critical transactional workflows.',
      techStack: ['FastAPI', 'Next.js 16', 'PostgreSQL', 'Python', 'AWS EC2', 'Cloudflare R2', 'React 19', 'TypeScript', 'Tailwind CSS v4', 'PayU / Juspay', 'Nginx', 'PM2'],
      status: 'production' as const,
      demoUrl: 'https://zoopify.in/',
      repoUrl: 'https://github.com/UmarM01/',
      featured: true,
      category: 'Full-Stack' as const,
      keyMetrics: [
        { label: 'BACKEND ARCHITECTURE', value: '317 Endpoints', desc: '47 async FastAPI route modules' },
        { label: 'DATABASE ENGINEERING', value: '80 Tables / 143 Indexes', desc: 'Normalized PostgreSQL schema' },
        { label: 'CONCURRENCY CONTROL', value: 'Race-Condition Safe', desc: 'PostgreSQL row-level locking' },
        { label: 'LIGHTHOUSE BENCHMARK', value: '100 SEO / 100 A11y', desc: '96 Best Practices' },
      ],
      architecture: [
        'Modular Backend Architecture: Built 317 REST endpoints across 47 isolated asynchronous FastAPI modules, organized through domain-specific routers and dependency-injected services.',
        'Concurrency Control: Implemented PostgreSQL pessimistic row locking to serialize concurrent checkout attempts against individual physical devices, with automatic reclamation of expired 15-minute reservations.',
        'Payment Reliability: Engineered multi-layer payment verification combining SHA-512 signatures, server-to-server status verification, and idempotent webhook processing.',
        'Database Engineering: Built an 80-table PostgreSQL architecture with 143 strategic indexes, unique hardware constraints, transactional locking, and JSONB-based audit data.',
        'Self-Healing Background Systems: Implemented autonomous async lifecycle supervisors that reclaim expired inventory every 60 seconds and clean up abandoned orders every 300 seconds with fault-tolerant retry handling.',
        'Production Infrastructure: Deployed Nginx + PM2 production infrastructure with PostgreSQL and Cloudflare R2, using stateless media storage and automatic process recovery.'
      ],
      keyFeatures: [
        'Unique Device Inventory: Serial and IMEI-level tracking for individual refurbished physical devices.',
        'Concurrent Checkout: 15-minute inventory reservations with automatic expiry and reclamation.',
        'Multi-Gateway Payments: PayU / Juspay payment workflows with server-side verification and webhook reconciliation.',
        'Tokenized COD: ₹250 upfront reservation token designed to reduce Cash-on-Delivery refusal risk.',
        'Automated Order Lifecycles: Background processes release abandoned inventory and expire incomplete checkout sessions.',
        'Media & Document Pipeline: Device inspection media and generated documentation streamed directly to Cloudflare R2.'
      ]
    },
    {
      id: 'selligo',
      title: 'Selligo',
      subtitle: 'Consumer Electronics Selling Platform (selligo.in)',
      description: 'Consumer electronics buyback and trade-in platform featuring a 164-endpoint Express backend, 20 MongoDB schemas, instant algorithmic valuation, and a 10-zone field logistics network.',
      longDescription: 'Selligo is a consumer electronics recommerce and device buyback platform designed to automate instant smartphone valuation, doorstep pickup scheduling, and field device inspection. Built around a 164-endpoint Express backend, 20 MongoDB schemas, and a Next.js 16 frontend, the system connects consumer trade-ins directly with an internal 10-zone field logistics network. It coordinates multi-factor diagnostic price calculation, courier zone assignment, and on-site hardware verification across dedicated operational workflows for customers, logistics partners, field pickers, and administrators.',
      techStack: ['Node.js', 'Express', 'Next.js 16', 'MongoDB', 'AWS S3', 'React 19', 'TypeScript', 'Tailwind CSS v4', 'MSG91 OTP', 'PM2', 'Nginx'],
      status: 'production' as const,
      demoUrl: 'https://selligo.in/',
      repoUrl: 'https://github.com/UmarM01/',
      featured: true,
      category: 'Full-Stack' as const,
      keyMetrics: [
        { label: 'BACKEND ARCHITECTURE', value: '164 Endpoints', desc: '22 Express route modules' },
        { label: 'DATA ARCHITECTURE', value: '20 Schemas', desc: 'MongoDB / Mongoose' },
        { label: 'LOGISTICS NETWORK', value: '10 Dispatch Zones', desc: 'Pincode-based routing' },
        { label: 'VALUATION ENGINE', value: '<15ms Evaluation', desc: 'Real-time device pricing' },
      ],
      architecture: [
        '01 — Modular Backend: Built 164 REST endpoints across 22 Express route modules, separating customer, partner, picker, and administrative workflows through role-bounded service boundaries.',
        '02 — Time-Aware Logistics Engine: Engineered server-side Asia/Kolkata scheduling logic that dynamically removes expired pickup slots and enforces an automatic 8:00 PM same-day cutoff.',
        '03 — 10-Zone Dispatch Routing: Built pincode-based fulfillment routing across 10 logistics zones, assigning serviceable locations to the appropriate operational network.',
        '04 — Algorithmic Valuation: Implemented a multi-factor device valuation engine that evaluates condition, defects, and diagnostic inputs to generate instant quotes in <15ms.',
        '05 — Bulk Catalog Ingestion: Built an Excel-based ingestion pipeline capable of processing large pricing matrices, validating data and updating thousands of SKU records without individual API writes.',
        '06 — Production Asset Pipeline: Implemented in-memory media streaming to AWS S3 for device inspection photos, identity documents, and bills, avoiding persistent media storage on the application server.'
      ],
      keyFeatures: [
        'Instant Device Valuation: Multi-step diagnostic flow generating dynamic device quotes based on condition and functional inputs.',
        'Smart Pickup Scheduling: Automatically filters available pickup windows based on current time, location, and valuation.',
        '10-Zone Field Dispatch: Routes serviceable pincodes into defined fulfillment zones for partner and picker assignment.',
        'Doorstep Device Verification: Pickup completion requires device condition evidence, customer ID, invoice, and IMEI verification.',
        'Multi-Role Operations: Separate workflows for Admins, Partners, and Pickers, with restricted operational access.',
        'Abandoned Order Capture: Captures incomplete valuation journeys and customer details for automated re-engagement.'
      ]
    },
    {
      id: 'vitalbridge',
      title: 'VitalBridge',
      subtitle: 'Ambulance-to-Hospital Preparation & Doctor Approval Workflow System',
      description: 'Ambulance-to-hospital coordination prototype connecting incoming reports, receiving teams, and doctor-approved preparation tasks.',
      longDescription: 'VitalBridge is an ambulance-to-hospital emergency preparation and clinical coordination prototype built with FastAPI, React, and Supabase. The platform models human-controlled operational workflows around AI assistance: selecting preparation tasks from an 18-template controlled domain catalog across 4 clinical pathways, requiring primary-doctor approval before restricted procedures can proceed, preserving completed tasks across repeated ambulance updates, and running five role-specific agents concurrently with deterministic fallback findings.',
      techStack: ['FastAPI', 'Python', 'React', 'TypeScript', 'Supabase', 'Pydantic', 'Groq / OpenAI', 'Tailwind CSS'],
      status: 'completed' as const,
      repoUrl: 'https://github.com/UmarM01/',
      featured: true,
      category: 'AI & Systems' as const,
      keyMetrics: [
        { label: 'CONTROLLED CATALOG', value: '18 Templates', desc: '4 pathways: trauma, cardiac, respiratory, stable' },
        { label: 'AI COORDINATION', value: '5 Concurrent Agents', desc: 'Role-bounded findings with deterministic fallbacks' },
        { label: 'WORKFLOW AUTHORITY', value: 'Doctor-Gated Approval', desc: 'Primary ER doctor sign-off for restricted tasks' },
        { label: 'API OPERATIONS', value: '60 Workflow Endpoints', desc: 'FastAPI domain engine + Supabase hydration' }
      ],
      architecture: [
        '01 — Deterministic Preparation Catalog: Replaced unconstrained generative actions with an 18-template controlled catalog across 4 pathways (trauma, cardiac, respiratory, stable). AI agents produce supporting clinical findings, but domain code strictly governs task creation and execution.',
        '02 — Primary-Doctor Human-in-the-Loop Gate: Enforced case-specific ownership where medium- and high-risk preparation tasks stay locked in pending status until the assigned primary ER doctor explicitly reviews and authorizes or rejects them.',
        '03 — Work-Preserving Update Deduplication: Engineered template-key deduplication separating incoming ambulance telemetry from persistent hospital preparation. Repeated audio reports append new clinical observations without wiping or recreating already completed tasks.',
        '04 — Operational Staff Allocation Engine: Automated receiving-team composition by filtering role, medical specialty, availability, and active shift state, ranking eligible staff by current case workload and exposing unfilled staffing gaps.',
        '05 — Concurrent Multi-Agent Coordination: Executed 5 role-specific agents concurrently via a background thread pool with stable result ordering. Call exceptions produce structured fallback findings, ensuring external AI failures never crash coordination.',
        '06 — Role-Restricted Case Projections: Segmented data feeds server-side so clinical staff only access assigned cases, ambulances only update linked transports, and blood-bank feeds receive anonymized task metadata without patient identities or raw audio.'
      ],
      keyFeatures: [
        'Controlled Preparation Catalog: 18 deterministic task templates across trauma, cardiac, respiratory, and stable pathways.',
        'Primary-Doctor Approval Gate: Restricted clinical preparation requires explicit authorization from the assigned primary ER doctor.',
        'Persistent Task Deduplication: Continuous ambulance updates enrich observations while preserving completed preparation milestones.',
        'Constraint-Based Staff Allocation: Automated receiving-team assignment factoring in role, shift availability, and active workload.',
        'Concurrent Role-Specific Agents: 5 parallel AI agents providing bedside, blood bank, and surgical summaries with deterministic fallback.',
        'Restricted Multi-Role Portals: Role-tailored workspaces for Doctors, Nurses, Receptionists, and Ambulances with strict boundary filters.'
      ]
    },
    {
      id: 'portfolio-site',
      title: 'Engineering Portfolio',
      subtitle: 'Static-Optimized Engineering Showcase & Architecture Matrix',
      description: 'High-performance personal web platform engineered with Next.js 16, React 19, and TypeScript, featuring static site generation (SSG), GSAP animations, and an in-page Formspree AJAX pipeline.',
      longDescription: 'A high-performance personal engineering platform and technical showcase built with Next.js 16, React 19, and strict TypeScript. The platform combines static pre-rendering (SSG), hardware-accelerated GSAP context animations, custom mathematical radial notch card geometry, and a zero-backend Formspree AJAX contact pipeline, achieving 100/100 Lighthouse SEO and Accessibility with an 87.3 kB shared JavaScript bundle.',
      techStack: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS v4', 'Framer Motion', 'GSAP', 'Formspree AJAX', 'Vercel'],
      status: 'production' as const,
      demoUrl: '/',
      repoUrl: 'https://github.com/UmarM01/Portfolio-site',
      featured: true,
      category: 'Full-Stack' as const,
      keyMetrics: [
        { label: 'FRONTEND ARCHITECTURE', value: 'Next.js 16 / React 19', desc: 'Static Site Generation & TypeScript' },
        { label: 'BUNDLE OPTIMIZATION', value: '87.3 kB Shared JS', desc: 'Zero-bloat optimized runtime' },
        { label: 'LIGHTHOUSE BENCHMARK', value: '100 SEO / 100 A11y', desc: '96 Best Practices standard' },
        { label: 'FORM INTEGRATION', value: '100% In-Page AJAX', desc: 'Zero-redirect Formspree pipeline' }
      ],
      architecture: [
        '01 — Static Site Generation (SSG): Built with Next.js App Router pre-rendering static routes at compile time for sub-100ms edge delivery.',
        '02 — Minimal Bundle Footprint: Optimized component tree-shaking and dynamic imports to achieve a shared First Load JS bundle of just 87.3 kB.',
        '03 — Scoped GSAP & Motion Pipeline: Engineered memory-safe animations using GSAP context (gsap.context) and Framer Motion hardware-accelerated spring physics.',
        '04 — Parametric Notched Geometry: Implemented mathematical concave card cutouts combining parametric radial gradients and absolute SVG disc alignments.',
        '05 — Zero-Redirect AJAX Contact Flow: Integrated background Formspree API submission with real-time error handling, input locking, and in-page confirmation.',
        '06 — Full Lighthouse Optimization: Achieved perfect 100/100 SEO and 100/100 Accessibility scores through semantic HTML5 landmarks and WCAG-compliant color contrast.'
      ],
      keyFeatures: [
        'Instant Static Navigation: Seamless routing across Home, About, Projects, and Contact with zero full-page reloads.',
        'Interactive Project Modals: Deep-dive architectural breakdowns with verified performance metrics and engineering summaries.',
        'Responsive Notched Cards: Custom-engineered card layouts with live demo launch triggers and modal popups.',
        'Silent Contact Submissions: Direct in-page message delivery without opening mail apps or external tabs.',
        'Interactive Career Timeline: Chronological engineering and operations experience visualization with role highlights.',
        'Responsive Command Navigation: Mobile menu drawer with smooth toggle transitions and desktop pills.'
      ]
    },
    /*
    {
      id: 'meraki',
      title: 'Meraki',
      subtitle: 'Digital Inheritance & Statutory Asset Transmission Platform',
      description: 'Encrypted digital inheritance vault using application-layer Fernet encryption across 12 asset categories with multi-tier liveness escalation, Gemini 2.5 Flash legal drafting, and tokenized claim execution.',
      longDescription: 'Meraki is an encrypted digital inheritance and asset vault platform engineered to solve posthumous asset transmission and testamentary intent execution. Built an application-layer cryptographic vault utilizing Fernet symmetric encryption with SHA-256 derived master keys to secure records across 12 statutory asset categories (bank accounts, fixed deposits, demat shares, mutual funds, real estate, crypto wallets, EPF/PPF, vehicles, and business equity). Designed a multi-tier automated liveness escalation state machine dispatching tokenized check-in verification events with vacation-mode suppression windows to eliminate premature triggers. Integrated Google Gemini 2.5 Flash to synthesize testator profile metadata, asset percentage allocations, executor appointments, and witness blocks into legally compliant Indian Last Will and Testament documents. Implemented an unauthenticated public claim verification gateway (/package/{token}) granting single-use 64-character token access to beneficiary distribution dossiers paired with institutional transmission playbooks (CAMS/KFintech, DP forms, Form CMV-29, and property mutation). Implemented custom zero-dependency RFC 6238 TOTP two-factor authentication.',
      techStack: ['FastAPI', 'Supabase (PostgreSQL)', 'Gemini 2.5 Flash', 'Cryptography (Fernet)', 'Python', 'React 19', 'TypeScript', 'Tailwind CSS v4', 'Next.js 16'],
      status: 'completed' as const,
      repoUrl: 'https://github.com/UmarM01/',
      featured: true,
      category: 'AI & Systems' as const,
      keyMetrics: [
        { label: 'Vault Cryptography', value: 'Fernet AES-256', desc: 'SHA-256 derived master encryption' },
        { label: 'Asset Scopes', value: '12 Categories', desc: 'Statutory claims & transmission' },
        { label: 'Liveness Protocol', value: 'Multi-Tier State Machine', desc: 'Tokenized check-in & vacation lock' },
        { label: 'AI Will Engine', value: 'Gemini 2.5 Flash', desc: 'Automated Indian legal will drafting' }
      ],
      architecture: [
        'Engineered an application-layer encrypted vault utilizing Fernet symmetric encryption with SHA-256 derived URL-safe base64 keys to protect confidential asset records across 12 categories.',
        'Built a multi-tier liveness escalation state machine dispatching tokenized check-in events across channels, coupled with date-bounded vacation-mode suppression to prevent false alarms.',
        'Integrated Google Gemini 2.5 Flash legal drafting engine that maps testator profile details, percentage shares, executors, and witnesses into standard Indian Last Will and Testament documents.',
        'Engineered a secure beneficiary claim endpoint (/package/{token}) validating single-use 64-character tokens to generate actionable statutory transmission dossiers (CAMS/KFintech, DP, CMV-29, EPFO).',
        'Implemented a zero-dependency RFC 6238 TOTP two-factor authentication engine using raw byte struct packing and HMAC-SHA1 dynamic truncation.'
      ],
      keyFeatures: [
        'Application-Layer Fernet Encryption for 12 Asset Categories with Zero Plaintext Leakage.',
        'Multi-Tier Automated Liveness Escalation State Machine with Tokenized Verification.',
        'Vacation-Mode Date Window Suppression to Safeguard Against Accidental Triggering.',
        'Google Gemini 2.5 Flash Legal Intent Synthesizer for Indian Testamentary Wills.',
        'Single-Use 64-Character Token Authentication for Beneficiary Claim Execution.',
        'Custom Zero-Dependency RFC 6238 Cryptographic TOTP Engine.'
      ]
    },
    {
      id: 'gym-management',
      title: 'GymFlow',
      subtitle: 'Multi-Tenant Fitness & Membership Management SaaS',
      description: 'Full-stack multi-tenant gym management system featuring member lifecycle tracking, automated recurring billing, QR-code attendance verification, and real-time revenue analytics.',
      longDescription: 'GymFlow is a full-stack gym management platform designed to automate administrative and operational workflows for fitness clubs. Engineered with a modular Express backend and React client, the system provides end-to-end membership lifecycle tracking, attendance logging via QR codes and manual check-ins, automated subscription plan management, expense and equipment tracking, and interactive financial reporting with Recharts. Features comprehensive role-based access control (RBAC), Zod schema validation, and secure authentication to safeguard member and financial records.',
      techStack: ['Node.js', 'Express', 'React', 'PostgreSQL / SQLite', 'Zod', 'JWT', 'Tailwind CSS', 'Recharts', 'Framer Motion'],
      status: 'completed' as const,
      repoUrl: 'https://github.com/UmarM01/',
      featured: true,
      category: 'Full-Stack' as const,
      keyMetrics: [
        { label: 'Role-Based RBAC', value: 'Multi-Tenant', desc: 'Owner, manager, trainer & member scopes' },
        { label: 'Data Validation', value: '100% Zod Validated', desc: 'Strict runtime schema validation' },
        { label: 'Attendance Log', value: 'QR & Digital', desc: 'Instant check-in & attendance auditing' },
        { label: 'Revenue Analytics', value: 'Real-Time MRR', desc: 'Cashflow, churn & plan distributions' }
      ],
      architecture: [
        'Modular Express.js REST API structured across dedicated domain routers (members, plans, attendance, payments, expenses, gyms).',
        'Multi-tier role-based authentication and authorization using JSON Web Tokens (JWT) and bcrypt password hashing.',
        'Strict runtime schema validation via Zod on all incoming mutation payloads, preventing data corruption and injection vectors.',
        'Dynamic financial and membership reporting powered by Recharts visualizing member churn, retention, and monthly revenue trends.'
      ],
      keyFeatures: [
        'Complete Membership Lifecycle & Automated Subscription Renewal Tracking.',
        'Digital QR Code & Manual Attendance Check-in Verification.',
        'Role-Based Staff & Member Access Control with Encrypted Credentials.',
        'Expense, Inventory, and Equipment Maintenance Tracking.',
        'Real-Time Financial Dashboard with Revenue Breakdown and Export Capabilities.'
      ]
    },
    {
      id: 'termizen',
      title: 'Termizen',
      subtitle: 'Cross-Platform Terminal Emulator & SSH Manager',
      description: 'High-performance cross-platform desktop terminal emulator and remote SSH connection manager built with Tauri v2, Rust, and React 19.',
      longDescription: 'Termizen is a native desktop terminal and SSH client built with Tauri v2, Rust, and React 19. It couples native Rust PTY (pseudo-terminal) process execution and asynchronous SSH2 client connectivity with a hardware-accelerated @xterm/xterm canvas renderer and @xterm/addon-fit buffer auto-resizer. Features an independent multi-tab session state machine managing local shell processes and encrypted remote servers concurrently.',
      techStack: ['Tauri v2', 'Rust', 'React 19', 'TypeScript', '@xterm/xterm', '@xterm/addon-fit', 'Vite', 'portable-pty', 'ssh2', 'Tailwind CSS'],
      status: 'completed' as const,
      repoUrl: 'https://github.com/UmarM01/',
      featured: false,
      category: 'Systems & Desktop' as const,
      keyMetrics: [
        { label: 'Native Engine', value: 'Rust & Tauri v2', desc: 'Zero-overhead native system bridge' },
        { label: 'Renderer', value: 'Xterm.js Canvas', desc: 'Hardware-accelerated ANSI terminal buffer' },
        { label: 'Session Support', value: 'Dual Mode', desc: 'Native PTY & remote SSH2 connections' },
        { label: 'Concurrency', value: 'Multi-Tabbed', desc: 'Independent I/O stream multiplexing' }
      ],
      architecture: [
        'Tauri v2 Rust backend bridging native system PTY process execution (pty.rs) and asynchronous SSH2 client connectivity (ssh.rs).',
        'React 19 + TypeScript frontend with @xterm/xterm canvas renderer and @xterm/addon-fit for responsive terminal buffer resizing.',
        'Multi-tab session management state machine maintaining independent process handles, ANSI escape sequences, and stream buffers.',
        'High-throughput bi-directional IPC channels facilitating seamless terminal input/output between Rust processes and webview canvas.'
      ],
      keyFeatures: [
        'Native Local PTY Process Spawning (PowerShell, CMD, Bash).',
        'Asynchronous SSH2 Client for Remote Server Administration.',
        'Multi-Tabbed Terminal Workspace with Independent Buffer State.',
        'Hardware-Accelerated Xterm.js Canvas Terminal Rendering.',
        'Ultra-Lightweight Desktop Package via Tauri v2.'
      ]
    },
    {
      id: 'traffic-surveillance',
      title: 'AI Traffic Surveillance',
      subtitle: 'Deep Learning Vehicle Detection, ANPR & Violation Analytics',
      description: 'Real-time computer vision surveillance system for automated vehicle tracking, license plate recognition (ANPR), and traffic violation detection from camera feeds.',
      longDescription: 'AI-powered traffic surveillance pipeline developed using PyTorch, YOLOv8, ByteTrack, and EasyOCR. Fine-tuned for vehicle localization reaching 91% detection accuracy, multi-object ByteTrack tracking for frame-to-frame trajectory continuity, automated license plate recognition (ANPR) achieving 84% accuracy, and an automated violation classification engine (78% accuracy) detecting helmet-less riding, speed infractions, and lane encroachment. Powered by an asynchronous FastAPI streaming backend and interactive telemetry dashboards.',
      techStack: ['Python', 'FastAPI', 'YOLOv8', 'ByteTrack', 'EasyOCR / PaddleOCR', 'OpenCV', 'PyTorch', 'NumPy', 'HTML5 / CSS3', 'JavaScript'],
      status: 'completed' as const,
      repoUrl: 'https://github.com/UmarM01/',
      featured: false,
      category: 'AI & Systems' as const,
      keyMetrics: [
        { label: 'Vehicle Detection', value: '91% Accuracy', desc: 'Fine-tuned YOLOv8 neural network' },
        { label: 'ANPR Recognition', value: '84% Accuracy', desc: 'EasyOCR license plate extraction' },
        { label: 'Violation Engine', value: '78% Accuracy', desc: 'Automated infraction classification' },
        { label: 'Inference Backend', value: 'FastAPI Stream', desc: 'Real-time OpenCV video processing' }
      ],
      architecture: [
        'Fine-tuned YOLOv8 deep learning model for real-time bounding box detection across multiple vehicle classes.',
        'ByteTrack multi-object tracking algorithm maintaining persistent trajectory identities through occlusions and camera jitter.',
        'Automatic Number Plate Recognition (ANPR) pipeline utilizing image pre-processing (adaptive thresholding, morphology) and EasyOCR.',
        'Algorithmic violation classification engine detecting lane encroachments, helmet-less riding, and speed anomalies.',
        'FastAPI asynchronous inference server streaming annotated OpenCV video frames and telemetry metadata to client dashboards.'
      ],
      keyFeatures: [
        'Real-Time YOLOv8 Vehicle Localization & Classification.',
        'ByteTrack Multi-Object Tracking across Video Camera Feeds.',
        'Automated Number Plate Recognition (ANPR) with OCR Filtering.',
        'Algorithmic Violation Detection Engine for Traffic Enforcement.',
        'FastAPI Inference API with Live Streaming Dashboard.'
      ]
    },
    */
  ],
  experience: [
    {
      id: 'lowes-india',
      company: "Lowe's India",
      role: 'Software Development Intern',
      location: 'Bengaluru, India',
      period: 'May 2025 - Present',
      category: 'Engineering',
      badge: 'Engineering Journey',
      tagline: 'Hands-on MERN stack development, REST API architecture & continuous learning',
      description: [
        'Hands-on immersion in full-stack MERN development (MongoDB, Express.js, React, Node.js), engineering responsive components and modern REST APIs through real-world exercises.',
        'Continuously expanded technical capabilities throughout this engineering journey, learning new software architectures, state management, and scalable database integrations.',
        'Built full-stack applications covering frontend interfaces, REST API implementation, and database architecture using the MERN ecosystem.'
      ],
      skills: ['MERN Stack', 'MongoDB', 'Express.js', 'React', 'Node.js', 'REST APIs', 'Full-Stack Development'],
      metrics: [
        { label: 'Ecosystem', value: 'MERN Stack', desc: 'MongoDB, Express, React, Node.js' },
        { label: 'Growth', value: 'Continuous', desc: 'Learning new engineering paradigms' },
        { label: 'Focus', value: 'Full-Stack', desc: 'REST APIs & backend architecture' }
      ],
      highlights: [
        'Mastered core MERN stack architecture and modern REST API implementation.',
        'Built end-to-end applications connecting frontends to backend databases.'
      ]
    },
    {
      id: 'freelance-development',
      company: '',
      role: 'Freelance Full-Stack Developer',
      location: 'Remote',
      period: '2025 - 2026',
      category: 'Freelance',
      badge: 'Freelancing',
      tagline: 'Web applications, SaaS MVPs & business automation platforms',
      description: [
        'Partnered directly with founders and businesses to engineer production-grade web applications, SaaS MVPs, and business automation platforms from initial system design to cloud launch.',
        'Delivered responsive client interfaces and robust backend APIs with secure database schemas and integrated payment checkout flows.',
        'Handled end-to-end freelancing workflows from concept design and prototyping to rapid cloud deployment and handover.'
      ],
      skills: ['Freelancing', 'Next.js', 'React', 'TypeScript', 'Node.js', 'FastAPI', 'PostgreSQL', 'Tailwind CSS', 'Stripe / Razorpay'],
      metrics: [
        { label: 'Delivery', value: '100% On-Time', desc: 'Client milestones & sprints' },
        { label: 'Scope', value: 'SaaS MVPs', desc: 'Full-stack client platforms' },
        { label: 'Turnaround', value: '1-3 Weeks', desc: 'Rapid freelance delivery' }
      ],
      highlights: [
        'Delivered turnkey full-stack web applications and SaaS MVPs for international clients.',
        'Built high-converting responsive interfaces with secure payment pipelines.'
      ]
    },
    {
      id: 'business-operations',
      company: 'Business Operations & Analytics',
      role: 'Operations & Analytics Lead',
      location: 'Bengaluru, India',
      period: '2024 - 2025',
      category: 'Operations',
      badge: 'Operations & Analytics',
      tagline: 'Automated data pipelines, Power BI dashboards & sprint management',
      description: [
        'Automated inventory tracking workflows using structured Excel data pipelines to reduce manual record reconciliation errors across daily stock operations.',
        'Built interactive analytics dashboards in Power BI to model revenue trends and key operational KPIs for executive decision-making.',
        'Tracked operational deliverables across cross-functional teams, managing task assignments and daily sprint progress tracking.'
      ],
      skills: ['Excel Data Pipelines', 'Power BI', 'Process Automation', 'Operational KPIs', 'Sprint Tracking', 'Cross-Functional Teams', 'Inventory Operations'],
      metrics: [
        { label: 'Workflows', value: 'Automated', desc: 'Excel pipelines reducing record errors' },
        { label: 'Dashboards', value: 'Power BI', desc: 'Revenue trends & operational KPIs' },
        { label: 'Deliverables', value: 'Daily Sprints', desc: 'Cross-functional progress tracking' }
      ],
      highlights: [
        'Eliminated manual reconciliation errors through structured Excel automation.',
        'Modeled real-time business health and revenue performance in Power BI.'
      ]
    }
  ],
  education: [
    {
      institution: 'Cambridge Institute of Technology',
      degree: 'Bachelor of Engineering in Information Science and Engineering',
      period: 'Expected 2027',
      location: 'Bengaluru, India',
      grade: '7.9 / 10 CGPA',
    },
  ],

  skills: {
    frontend: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    backend: ['FastAPI', 'Python', 'Node.js', 'Express.js', 'Rust'],
    databases: ['PostgreSQL', 'MongoDB', 'Supabase'],
    devops: ['AWS', 'Cloudflare R2', 'Docker', 'Linux', 'Git'],
  },
};




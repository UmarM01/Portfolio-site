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
      description: 'Production refurbished electronics quick-commerce platform featuring a 317-endpoint REST backend across 47 FastAPI modules on AWS EC2, PostgreSQL, and Cloudflare R2 infrastructure.',
      longDescription: 'Zoopify is a production refurbished smartphone and electronics platform running a 317-endpoint asynchronous REST backend across 47 FastAPI modules. Engineered a multi-gateway payment architecture integrating PayU (Hosted Checkout Plus with SHA-512 request/response/command signatures), Juspay, and Razorpay with PostgreSQL pessimistic row-level locking (SELECT ... FOR UPDATE) and server-to-server reconciliation to eliminate device double-booking. Built a concurrency-safe automated GST Margin Scheme (Rule 32(5)) invoice engine using PostgreSQL upserts (INSERT ... ON CONFLICT DO NOTHING) and row locks for gap-free sequential document numbering, rendered headlessly via WeasyPrint and stored directly in Cloudflare R2. Orchestrated continuous lifespan background loops with automatic retries to release expired cart holds every 60 seconds and finalize abandoned orders every 300 seconds. Optimized server-rendered metadata, dynamic components, and bundle splitting in Next.js 16 and React 19 to achieve Lighthouse scores of 100 SEO, 100 Accessibility, and 96 Best Practices.',
      techStack: ['FastAPI', 'Next.js 16', 'PostgreSQL', 'Python', 'AWS EC2', 'Cloudflare R2', 'React 19', 'TypeScript', 'Tailwind CSS v4', 'PayU / Razorpay / Juspay', 'Nginx', 'WeasyPrint'],
      status: 'production' as const,
      demoUrl: 'https://zoopify.in/',
      repoUrl: 'https://github.com/UmarM01/',
      featured: true,
      category: 'Full-Stack' as const,
      keyMetrics: [
        { label: 'Backend Architecture', value: '317 Endpoints', desc: '47 FastAPI async route modules' },
        { label: 'Database Engineering', value: '80 Tables / 143 Indexes', desc: 'PostgreSQL schema with composite constraints' },
        { label: 'Concurrency Safe', value: 'SELECT FOR UPDATE', desc: 'Pessimistic row locking on units & invoices' },
        { label: 'Lighthouse Benchmark', value: '100 SEO & A11y', desc: '96 Best Practices standard' },
      ],
      architecture: [
        'Built and deployed a production refurbished electronics platform featuring a 317-endpoint REST backend across 47 FastAPI modules with AWS EC2 and Cloudflare R2 infrastructure.',
        'Engineered a multi-gateway payment layer integrating PayU, Razorpay, and Juspay with PostgreSQL pessimistic locking (SELECT FOR UPDATE) and server-to-server reconciliation to prevent device double-booking.',
        'Implemented concurrency-safe GST Margin Scheme Rule 32(5) invoice generation with gap-free sequential numbering using PostgreSQL upserts and row-level locking.',
        'Orchestrated continuous lifespan background loops running 60s cart reservation expiry sweeps and 300s cancellation fee finalization with automatic retry wrappers.',
        'Deployed production Linux VPS with PM2 process supervision, Nginx reverse proxying, SSL termination, and direct Cloudflare R2 public bucket asset ingestion.',
        'Optimized Next.js 16 SSR and React 19 dynamic components to achieve Lighthouse scores of 100 SEO, 100 Accessibility, and 96 Best Practices.'
      ],
      keyFeatures: [
        '317-Endpoint REST Backend across 47 FastAPI Asynchronous Route Modules.',
        'Pessimistic Concurrency Locking (SELECT FOR UPDATE) to Prevent Refurbished Device Double-Booking.',
        'Multi-Gateway Payment Integration (PayU Hosted Checkout, Razorpay, Juspay) with S2S State Reconciliation.',
        'Automated GST Margin Scheme Rule 32(5) Tax Invoice Generation with Headless WeasyPrint to Cloudflare R2.',
        'Continuous Lifespan Background Workers for Cart Reservation Expiry and Order Reconciliation.',
        'Production Linux VPS Deployment with PM2 Process Supervision, Nginx, and SSL.'
      ]
    },
    {
      id: 'selligo',
      title: 'Selligo',
      subtitle: 'Consumer Electronics Selling Platform (selligo.in)',
      description: 'Production recommerce platform serving 1,000+ daily visitors, enabling dynamic device valuation, doorstep pickup scheduling, and end-to-end used-device sales.',
      longDescription: 'Selligo is a consumer electronics buyback and recommerce platform serving 1,000+ daily visitors. Engineered a 164-endpoint Express REST backend across 22 route modules and 20 MongoDB schemas supporting customers, orders, field operations, promotions, CMS, and administrative workflows. Developed a configurable device valuation engine and 10-zone fulfillment system connecting Admins, Partners, and field Pickers for pincode routing, order assignment, KYC/IMEI verification, and fulfillment. Integrated MSG91 OTP and AWS S3 while deploying Next.js SSR, Express, MongoDB, PM2, Nginx, and SSL on production Linux VPS infrastructure.',
      techStack: ['Node.js', 'Express', 'Next.js 16', 'MongoDB', 'AWS S3', 'React 19', 'TypeScript', 'Tailwind CSS v4', 'MSG91 OTP', 'PM2', 'Nginx'],
      status: 'production' as const,
      demoUrl: 'https://selligo.in/',
      repoUrl: 'https://github.com/UmarM01/',
      featured: true,
      category: 'Full-Stack' as const,
      keyMetrics: [
        { label: 'Audience Scale', value: '1,000+ Daily', desc: 'Active unique recommerce visitors' },
        { label: 'API Endpoints', value: '164 Endpoints', desc: '22 route modules & 20 MongoDB schemas' },
        { label: 'Fulfillment Engine', value: '10-Zone Grid', desc: 'Admin, partner & picker routing' },
        { label: 'Production Server', value: 'Linux VPS', desc: 'PM2, Nginx, SSL & Next.js SSR' }
      ],
      architecture: [
        'Built and maintained a production recommerce platform serving 1,000+ daily visitors, enabling dynamic device valuation, doorstep pickup scheduling, and end-to-end used-device sales.',
        'Engineered a 164-endpoint Express REST backend across 22 route modules and 20 MongoDB schemas, supporting customers, orders, field operations, promotions, CMS, and administrative workflows.',
        'Developed a configurable device valuation engine and 10-zone fulfillment system connecting Admins, Partners, and field Pickers for pincode routing, order assignment, KYC/IMEI verification, and fulfillment.',
        'Integrated MSG91 OTP and AWS S3 while deploying Next.js SSR, Express, MongoDB, PM2, Nginx, and SSL on production Linux VPS infrastructure.'
      ],
      keyFeatures: [
        '164-Endpoint Express REST Backend across 22 Route Modules.',
        'Dynamic Algorithmic Device Valuation Matrix for Used Gadgets.',
        '10-Zone Field Logistics Fulfillment Grid for Pickers & Partners.',
        'Server-Side Slot Scheduling with Asia/Kolkata Cutoff Locking.',
        'MSG91 Phone OTP Verification & AWS S3 Inspection Ingestion.',
        'Production Linux VPS Deployment with PM2 Process Supervision & Nginx.'
      ]
    },
    {
      id: 'vitalbridge',
      title: 'VitalBridge',
      subtitle: 'Multi-Agent AI Hospital Pre-Arrival System',
      description: 'Real-time emergency triage system connecting moving ambulance audio streams to hospital ER preparation dashboards through a 4-node LangGraph StateGraph pipeline.',
      longDescription: 'VitalBridge is a real-time clinical triage infrastructure connecting moving ambulance audio streams to hospital ER preparation dashboards. Designed with a 4-node LangGraph StateGraph pipeline (paramedic_ingestion -> ot_agent -> blood_bank_agent -> bed_logistics_agent). Integrated OpenAI/Groq Whisper for in-memory speech transcription with zero disk persistence to automatically classify emergency trauma information under strict clinical privacy. Orchestrated 5 concurrent role-bounded LLM agents with deterministic fallback handlers to assign ER bays, calculate blood-bank requirements, and dispatch preparation checklists, gated by primary doctor verification and immutable Supabase audit logs.',
      techStack: ['FastAPI', 'LangGraph', 'Groq / OpenAI', 'Whisper AI', 'Supabase (PostgreSQL)', 'React 19', 'TypeScript', 'WebSockets', 'Tailwind CSS v4'],
      status: 'completed' as const,
      repoUrl: 'https://github.com/UmarM01/',
      featured: true,
      category: 'AI & Systems' as const,
      keyMetrics: [
        { label: 'LangGraph Pipeline', value: '4-Node DAG', desc: 'Sequential StateGraph clinical triage' },
        { label: 'Concurrent Agents', value: '5 Parallel', desc: 'ThreadPoolExecutor role-bounded LLMs' },
        { label: 'Speech Persistence', value: '0-Disk Writes', desc: 'In-memory WebM Whisper transcription' },
        { label: 'Clinical Security', value: 'Doctor-Gated', desc: 'Immutable Supabase audit logging' }
      ],
      architecture: [
        'Designed a real-time emergency triage system connecting moving ambulance audio streams to hospital ER preparation dashboards through a 4-node LangGraph StateGraph pipeline.',
        'Integrated OpenAI/Groq Whisper for in-memory speech transcription with zero disk persistence to automatically classify emergency trauma information.',
        'Orchestrated 5 concurrent role-bounded LLM agents with deterministic fallback handlers to assign ER bays, calculate blood-bank requirements, and dispatch preparation checklists.',
        'Doctor-gated clinical approval state machine gating high-risk procedures with immutable Supabase audit logs.'
      ],
      keyFeatures: [
        '4-Node LangGraph StateGraph Autonomous Clinical Triage DAG.',
        'In-Memory Whisper Speech Transcription with Zero Disk Persistence.',
        '5 Concurrent Role-Bounded LLM Agents (ThreadPoolExecutor).',
        'Doctor-Gated Clinical Task State Machine with Audit Trail.',
        'Real-Time WebSocket State Synchronization for Ambulance & ER Teams.'
      ]
    },
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




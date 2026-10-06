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
  category: 'Full-Stack' | 'AI & Automation' | 'E-Commerce' | 'Recommerce' | 'Healthcare';
  keyMetrics?: { label: string; value: string; desc?: string }[];
  architecture?: string[];
  keyFeatures?: string[];
}

export interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  description: string[];
  skills: string[];
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
    subtitle: 'Software Engineer & Full-Stack Developer | Scalable Platforms & Intelligent Systems',
    bio: 'Software Engineer and Full-Stack Developer focused on building production-ready web platforms, scalable backend systems, integrations, and AI-powered applications. Experienced in taking products from idea to deployment and working across frontend, backend, cloud infrastructure, payments, authentication, storage, and third-party APIs.',
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
      subtitle: 'Certified Pre-Owned Phones & 60-Minute Express Delivery',
      description: 'Production platform for certified pre-owned smartphones (iPhones, Samsung, OnePlus) with 60-minute express delivery in Bangalore. Features open-box door verification (₹250 booking), 65+ quality check workflows, 6-month warranty management, and seamless Razorpay checkout.',
      longDescription: 'Zoopify is a mission-critical quick-commerce platform engineering the next generation of pre-owned smartphone retail. It bridges consumer trust deficits by providing 60-minute doorstep delivery, open-box physical verification before full payment, and a multi-point hardware/software inspection pipeline across battery health, display integrity, and biometric sensors.',
      techStack: ['Next.js 14', 'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Razorpay', 'WhatsApp Business API', 'Prisma ORM'],
      status: 'production' as const,
      demoUrl: 'https://zoopify.in/',
      repoUrl: 'https://github.com/UmarM01/',
      featured: true,
      category: 'E-Commerce' as const,
      keyMetrics: [
        { label: 'Express Delivery', value: '60-Min', desc: 'Hyper-local routing across Bangalore' },
        { label: 'Quality Verification', value: '65+ Checks', desc: 'Hardware, battery & sensor diagnostics' },
        { label: 'Warranty SLA', value: '6 Months', desc: 'Comprehensive coverage on every device' },
        { label: 'Doorstep Deposit', value: '₹250 Booking', desc: 'Inspect device before final payment' }
      ],
      architecture: [
        'Hyperlocal inventory caching layer for low-latency product availability lookup.',
        'Asynchronous webhook ingestion for Razorpay and WhatsApp automated order tracking.',
        'PostgreSQL schema optimized for multi-variant device conditions (Pristine, Like New, Good).',
        'Next.js Server Actions with edge rendering for snappy user experience.'
      ],
      keyFeatures: [
        '60-Minute Delivery Dispatch Engine in Bangalore.',
        'Open-Box Doorstep Verification with ₹250 initial deposit.',
        '65-Point Automated & Manual Quality Inspection Certification.',
        '6-Month Warranty & Return Claim Management System.',
        'Automated WhatsApp order confirmation & live courier location updates.'
      ]
    },
    {
      id: 'selligo',
      title: 'Selligo',
      subtitle: 'Instant Smartphone Buyback & Doorstep Recommerce Platform',
      description: 'Production recommerce platform enabling users to sell used smartphones and gadgets with instant algorithmic price quotes, free doorstep pickup scheduling, multi-city/pincode logistics routing, and guaranteed instant bank/cash payouts within 24 hours.',
      longDescription: 'Selligo revolutionizes consumer electronics recommerce by eliminating the friction of selling pre-owned devices. With dynamic algorithmic valuation based on brand, age, physical condition, and real-time market pricing, users receive guaranteed quotes in seconds and doorstep evaluation with instant fund settlement.',
      techStack: ['Next.js', 'React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'Payout Gateways', 'Redis'],
      status: 'production' as const,
      demoUrl: 'https://selligo.in/',
      repoUrl: 'https://github.com/UmarM01/',
      featured: true,
      category: 'Recommerce' as const,
      keyMetrics: [
        { label: 'Valuation Engine', value: 'Instant', desc: 'Algorithmic dynamic pricing model' },
        { label: 'Payout SLA', value: '< 24 Hours', desc: 'Instant doorstep bank / cash transfer' },
        { label: 'Pickup Coverage', value: 'Pan-India', desc: 'Automated pincode logistics routing' },
        { label: 'Pickup Cost', value: '100% Free', desc: 'Zero deduction doorstep evaluation' }
      ],
      architecture: [
        'Dynamic valuation pricing matrix with multi-factor condition assessment algorithms.',
        'Scalable RESTful microservices for pincode serviceability and logistics partner integration.',
        'Automated KYC verification and instantaneous payment webhook triggers.',
        'Redis caching for high-frequency pricing queries across 1,000+ smartphone SKUs.'
      ],
      keyFeatures: [
        'Instant Multi-Question Algorithmic Price Evaluation.',
        'Automated Doorstep Pickup Scheduling & Pincode Validation.',
        'Instant Doorstep Cash & Direct UPI / Bank Account Payouts.',
        'Multi-Vendor Inventory & Agent Pickup Management Portal.',
        'Real-Time Recommerce Market Price Scraping & Adjustment.'
      ]
    },
    {
      id: 'vitalbridge',
      title: 'VitalBridge',
      subtitle: 'Healthcare Tele-consultation & Emergency Grid',
      description: 'Connected health system linking patients with specialists, integrated medical record encryption, and real-time doctor availability routing.',
      longDescription: 'VitalBridge is a privacy-first tele-health infrastructure engineered to provide real-time audio/video consultations, encrypted electronic health records (EHR), and algorithmic emergency triage matching patients to available medical personnel with sub-second latency.',
      techStack: ['TypeScript', 'Next.js', 'WebRTC', 'FastAPI', 'PostgreSQL', 'Redis', 'Tailwind CSS'],
      status: 'completed' as const,
      repoUrl: 'https://github.com/UmarM01/',
      featured: true,
      category: 'Healthcare' as const,
      keyMetrics: [
        { label: 'Video Latency', value: '< 150ms', desc: 'Peer-to-peer WebRTC streaming' },
        { label: 'Security', value: 'E2E AES-256', desc: 'HIPAA-grade EHR data encryption' },
        { label: 'Triage Response', value: 'Instant', desc: 'Doctor availability mesh routing' }
      ],
      architecture: [
        'WebRTC peer-to-peer audio/video connection with STUN/TURN fallback.',
        'FastAPI asynchronous backend handling real-time medical triage queuing.',
        'PostgreSQL with encrypted JSONB fields for secure clinical record storage.'
      ],
      keyFeatures: [
        'Encrypted HD Video & Audio Tele-consultations.',
        'Role-Based Medical Records Vault for Patients & Doctors.',
        'Real-Time Doctor Availability & Schedule Management.',
        'Automated Prescription Generation & Digital Signatures.'
      ]
    },
    {
      id: 'meraki',
      title: 'Meraki',
      subtitle: 'Creative Lifestyle & Design Commerce',
      description: 'Curated bespoke retail experience with dynamic animations, personalized product configuration, and seamless checkout pipelines.',
      longDescription: 'Meraki is an ultra-premium lifestyle e-commerce web platform showcasing artisan goods and custom interior design pieces, built with 60fps micro-animations, customizable 3D product preview stages, and global Stripe multi-currency checkout pipelines.',
      techStack: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Stripe', 'Node.js'],
      status: 'completed' as const,
      demoUrl: 'https://zoopify.in/',
      repoUrl: 'https://github.com/UmarM01/',
      featured: true,
      category: 'E-Commerce' as const,
      keyMetrics: [
        { label: 'Animation FPS', value: '60 FPS', desc: 'Hardware-accelerated Framer Motion' },
        { label: 'Checkout', value: 'Global', desc: 'Stripe multi-currency & card checkout' }
      ],
      architecture: [
        'SSR and Static Site Generation (SSG) for sub-500ms initial load times.',
        'Stripe webhooks handling inventory decrement and tax compliance.'
      ],
      keyFeatures: [
        'Bespoke Product 3D Customizer & Interactive Visualizer.',
        'Seamless One-Click Apple Pay & Stripe Checkout Flow.',
        'Dynamic Fluid Animations & Micro-Interactions.'
      ]
    },
  ],
  experience: [
    {
      company: "Lowe's India",
      role: 'Associate Software Engineer Intern',
      location: 'Bengaluru, India',
      period: '2024 - 2025',
      description: [
        'Built resilient backend services and modern frontend interfaces for retail analytics and customer experience pipelines.',
        'Collaborated with senior engineers on microservices architecture, automated CI/CD pipelines, and high-performance caching strategies.',
        'Improved response latencies across core checkout and inventory lookup endpoints by 35% through query optimization.'
      ],
      skills: ['Java', 'Spring Boot', 'React', 'TypeScript', 'Kafka', 'Docker', 'Kubernetes'],
    },
  ],
  education: [
    {
      institution: 'Cambridge Institute of Technology',
      degree: 'Bachelor of Engineering in Computer Science',
      period: '2022 - 2026',
      location: 'Bengaluru, India',
      grade: '8.8 CGPA',
    },
  ],
  skills: {
    frontend: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Framer Motion', 'HTML5/CSS3', 'Redux / Zustand'],
    backend: ['Node.js', 'Express.js', 'Python', 'FastAPI', 'Java', 'Spring Boot', 'RESTful APIs', 'GraphQL'],
    databases: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Prisma ORM'],
    devops: ['Docker', 'Kubernetes', 'AWS', 'Vercel', 'Git / GitHub', 'CI/CD Pipelines', 'Linux'],
  },
};

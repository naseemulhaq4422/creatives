export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  deliverables: string[];
  category: string;
  iconName: string;
  image: string;
}

export interface CaseStudyItem {
  id: string;
  title: string;
  subtitle: string;
  result: string;
  client: string;
  tags: string[];
  description: string;
  image: string;
  category: 'Commercial & Mobility' | 'Brand & 3D' | 'Local SEO & Retail' | 'Web & Portals';
}

export interface CourseItem {
  id: string;
  number: string;
  title: string;
  category: 'Design & 3D' | 'Marketing & SEO' | 'Web & Coding';
  duration: string;
  format: string;
  level: string;
  summary: string;
  prerequisites: string;
  tools: string[];
  modules: string[];
  highlights: string[];
  careerOutcomes: string[];
  ctaText: string;
  image: string;
  popular?: boolean;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  badge?: string;
  positioning: string;
  features: string[];
  popular?: boolean;
  ctaText: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  companyOrStatus: string;
  type: 'client' | 'student';
  quote: string;
  initials: string;
  highlight: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Agency' | 'Institute';
}

export interface TechItem {
  name: string;
  category: 'Frontend & FullStack' | 'Design & 3D' | 'Cloud & Backend' | 'Marketing & SEO';
  icon: string;
}

export const SITE_CONTACT = {
  phoneDisplay: "03074422378",
  phoneInternational: "+923074422378",
  whatsAppNumber: "923074422378",
  whatsAppUrl: "https://wa.me/923074422378",
  email: "naseemulhaq48@gmail.com",
  emailUrl: "mailto:naseemulhaq48@gmail.com",
  workingHours: "Monday–Saturday, 9:00 AM–10:00 PM PKT",
  speedToLead: "15-Minute Direct Response Guarantee",
  brandName: "CREATIVES DIGITAL AGENCY & INSTITUTE",
  tagline: "Build Your Brand. Start Your Career from Zero.",
};

export const MARQUEE_ITEMS = [
  "CREATIVES DIGITAL AGENCY & INSTITUTE",
  "UI/UX & PRODUCT DESIGN",
  "3D LOGO & BRAND IDENTITY",
  "FULL-STACK WEB & NEXT.JS",
  "HIGH-CTR 4K THUMBNAILS",
  "ZERO TO HERO TECH COURSES",
  "COMMERCIAL VEHICLES & MOBILITY",
  "15-MIN SPEED-TO-LEAD",
  "FREELANCING & EARNING MASTERY",
];

export const TRUST_STATS = [
  {
    value: 150,
    suffix: "+",
    label: "Projects Delivered",
    description: "High-impact web, brand, and digital campaigns executed with measurable ROI.",
  },
  {
    value: 99,
    suffix: "%",
    label: "Client Satisfaction",
    description: "Long-term client partnerships built on transparency, speed, and creative quality.",
  },
  {
    value: 500,
    suffix: "+",
    label: "Students Trained",
    description: "Practical zero-to-hero technical and freelancing graduates launched into tech.",
  },
  {
    value: 15,
    suffix: "+",
    label: "Global Tech Partners",
    description: "Modern production tooling and international hosting infrastructure standards.",
  },
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "digital-marketing-seo",
    number: "01",
    title: "Digital Marketing & SEO",
    shortDescription: "Data-backed growth engines, top-3 local search rankings, and high-CTR paid ad funnels.",
    category: "Growth & Visibility",
    iconName: "TrendingUp",
    image: "/images/service-seo.webp",
    deliverables: [
      "Full-Spectrum Technical & On-Page SEO",
      "YouTube Channel Optimization & 4K CTR Thumbnails",
      "Targeted Meta (Facebook & Instagram) Paid Ads",
      "Local Google Business Profile Top-3 Ranking",
      "Conversion Funnels & Retargeting Setup",
    ],
  },
  {
    id: "web-app-development",
    number: "02",
    title: "Web & App Development",
    shortDescription: "Ultra-fast Next.js portals, custom web applications, and resilient cloud architectures.",
    category: "Engineering",
    iconName: "Code2",
    image: "/images/service-web.webp",
    deliverables: [
      "Custom Next.js & React High-Speed Applications",
      "Full-Stack Web Portals & Custom Headless CMS",
      "Mobile-First Responsive UI with Glassmorphism Accents",
      "Hostinger & Cloud Deployments with 99.9% Uptime",
      "Database Architecture & Robust API Integration",
    ],
  },
  {
    id: "branding-3d-design",
    number: "03",
    title: "Branding & 3D Design",
    shortDescription: "High-end 3D visual identities, vector systems, and luxury corporate brand guidelines.",
    category: "Identity & 3D",
    iconName: "Boxes",
    image: "/images/service-branding.webp",
    deliverables: [
      "Custom 3D & 2D Vector Logo Design",
      "Complete Brand Guidelines & Typography Rules",
      "Commercial 3D Product Mockups & Photorealistic Renders",
      "High-Resolution Marketing Collateral",
      "Complete Social Media Brand Assets Kit",
    ],
  },
  {
    id: "social-video-production",
    number: "04",
    title: "Social Media & Video Production",
    shortDescription: "Viral short-form editing, commercial brand promos, and structured monthly content management.",
    category: "Content & Motion",
    iconName: "Film",
    image: "/images/service-video.webp",
    deliverables: [
      "High-Retention YouTube & TikTok Video Editing",
      "Commercial Video Promos & Product Spotlights",
      "Custom Motion Graphics & Animated Brand Intros",
      "Monthly Social Media Management & Posting Calendar",
      "Audience Engagement Strategies & Viral Scripts",
    ],
  },
  {
    id: "uiux-product-design",
    number: "05",
    title: "UI/UX & Product Design",
    shortDescription: "Human-centric Figma prototypes, conversion-driven SaaS dashboards, and scalable design systems.",
    category: "Product & UX",
    iconName: "Layout",
    image: "/images/service-uiux.webp",
    deliverables: [
      "Interactive Figma Wireframing & Rapid Prototyping",
      "Design Systems & Reusable Component Libraries",
      "Mobile Application UI/UX (iOS & Android)",
      "SaaS Dashboard & Admin Portal Interfaces",
      "Conversion Rate Audit & User Flow Optimization",
    ],
  },
  {
    id: "ecommerce-digital-stores",
    number: "06",
    title: "E-Commerce & Digital Stores",
    shortDescription: "High-converting online storefronts with instant WhatsApp checkout and localized payment gateways.",
    category: "Commerce",
    iconName: "ShoppingBag",
    image: "/images/service-ecommerce.webp",
    deliverables: [
      "Next.js & Shopify High-Speed Online Stores",
      "Direct WhatsApp Quick-Ordering Integration",
      "Automated Inventory & Multi-Currency Checkout",
      "Product Upselling & Cart Abandonment Recovery",
      "Localized Payment Gateways & Cash-on-Delivery Setup",
    ],
  },
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery & Strategy",
    summary: "Deep architectural audit of your business goals, target audience demographics, competitive advantages, and conversion opportunities.",
    deliverables: ["Market & Audience Audit", "Strategy Roadmap", "Conversion Blueprint"],
  },
  {
    step: "02",
    title: "Design & Prototyping",
    summary: "Crafting bespoke visual directions, editorial UX wireframes, interactive high-fidelity prototypes, and cohesive brand systems.",
    deliverables: ["Interactive Figma Prototype", "Visual Styleguide", "UI Component Kit"],
  },
  {
    step: "03",
    title: "Development & Execution",
    summary: "Engineering with clean Next.js/React code, robust API integrations, high-converting ad setups, and precision content assets.",
    deliverables: ["Clean Production Code", "Campaign Setup & Creatives", "Multi-Device QA"],
  },
  {
    step: "04",
    title: "Launch & Scaling",
    summary: "Deploying to high-availability cloud hosting, measuring conversion velocity, optimizing campaign ROI, and scaling ongoing growth.",
    deliverables: ["Cloud Deployment (99.9% Uptime)", "Analytics & Tracking", "Continuous Scaling"],
  },
];

export const CASE_STUDIES: CaseStudyItem[] = [
  {
    id: "sazgar-road-prince",
    title: "Sazgar & Road Prince 200cc Loader Campaign",
    subtitle: "High-Volume Commercial Vehicle Lead Engine",
    result: "250+ Qualified Leads in 30 Days",
    client: "Commercial Vehicles & Mobility",
    category: "Commercial & Mobility",
    tags: ["Commercial Vehicles", "4K Thumbnails", "Video Marketing"],
    description: "Engineered a high-converting video ad funnel with custom 4K CTR thumbnails, targeted Meta ads, and instant WhatsApp lead capture for 200cc heavy loaders.",
    image: "/images/portfolio-sazgar.webp",
  },
  {
    id: "tariq-autos",
    title: "Tariq Autos Electric Mobility Scooters",
    subtitle: "Complete Brand Launch & Social Media Presence",
    result: "Successful Brand Launch",
    client: "Tariq Autos & EV Mobility",
    category: "Commercial & Mobility",
    tags: ["Electric Scooters", "Brand Identity", "Social Assets"],
    description: "Crafted a modern green-tech identity, 3D scooter renders, and high-impact social media assets to launch Tariq Autos' new electric mobility lineup.",
    image: "/images/portfolio-tariq.webp",
  },
  {
    id: "ros-engineering",
    title: "ROS Engineering Works 3D Brand & Web",
    subtitle: "Heavy Industrial Engineering Digital Transformation",
    result: "Corporate Digital Identity",
    client: "ROS Engineering Works",
    category: "Brand & 3D",
    tags: ["Industrial", "3D Logo Design", "Corporate Identity"],
    description: "Developed an authoritative 3D corporate logo, full brand guidelines, and an industrial capability web portal showcasing heavy manufacturing machinery.",
    image: "/images/portfolio-ros.webp",
  },
  {
    id: "frostys-icecream-perfumes",
    title: "Frosty’s Ice Cream & Perfume Retailers",
    subtitle: "Hyper-Local SEO & 4K Visual Content Strategy",
    result: "85% Walk-in Boost",
    client: "Frosty's Retail Brands",
    category: "Local SEO & Retail",
    tags: ["Local SEO", "Google Business", "Product Imagery"],
    description: "Secured Top-3 Google Business ranking for target local search queries combined with 4K product photography and review generation systems.",
    image: "/images/portfolio-frosty.webp",
  },
  {
    id: "mci-consultancy",
    title: "MCI Consultancy & Global Visa Portal",
    subtitle: "Immigration & Student Visa Conversion Funnel",
    result: "High-Converting Portal",
    client: "MCI Consultancy",
    category: "Web & Portals",
    tags: ["Corporate Portal", "UI/UX Design", "Lead Funnel"],
    description: "Architected a streamlined multi-step visa eligibility funnel, responsive portal UI/UX, and automated WhatsApp inquiry routing for international applicants.",
    image: "/images/portfolio-mci.webp",
  },
  {
    id: "hanif-autos",
    title: "Hanif Autos Spares & Industrial Parts",
    subtitle: "Automotive Catalog & Localized Search Dominance",
    result: "Digital Catalog & Local Search",
    client: "Hanif Autos",
    category: "Local SEO & Retail",
    tags: ["Automotive Parts", "Digital Catalog", "Local SEO"],
    description: "Built an interactive digital parts catalog with direct WhatsApp ordering and dominated local search rankings for automotive spares.",
    image: "/images/portfolio-hanif.webp",
  },
];

export const INSTITUTE_PILLARS = [
  {
    number: "01",
    title: "Zero Tech Background",
    description: "No prior technical or coding experience required. Every curriculum starts from foundational basics and builds step-by-step.",
    icon: "Sparkles",
  },
  {
    number: "02",
    title: "1-on-1 Mentorship",
    description: "Direct personal feedback, live screen-sharing reviews, and dedicated instructor office hours to eliminate bottlenecks.",
    icon: "Users",
  },
  {
    number: "03",
    title: "Live Real Projects",
    description: "Students work on genuine agency client assignments, building a verified portfolio rather than generic demo exercises.",
    icon: "Laptop",
  },
  {
    number: "04",
    title: "Freelancing & Earning",
    description: "Comprehensive modules on Upwork, Fiverr, direct client outreach, proposal writing, and international payment receiving.",
    icon: "DollarSign",
  },
];

// =========================================================================
// COURSES REPOSITORY: Add new courses easily by appending to this array!
// =========================================================================
export const COURSES_DATA: CourseItem[] = [
  {
    id: "graphic-design-3d-branding",
    number: "01",
    title: "Graphic Design & 3D Branding Mastery",
    category: "Design & 3D",
    duration: "8 Weeks",
    format: "Live Practical Classes",
    level: "Zero to Hero",
    popular: true,
    summary: "Master commercial visual communication, 3D mockups, high-CTR YouTube thumbnails, and build an international freelance design portfolio.",
    prerequisites: "None (Zero Prior Experience Needed)",
    tools: ["Adobe Photoshop", "Adobe Illustrator", "Figma", "Blender 3D", "Canva Pro"],
    modules: [
      "Design Fundamentals, Typography & Visual Hierarchy",
      "Adobe Photoshop Mastery & Photo Manipulation",
      "Adobe Illustrator & Vector Logo Systems",
      "Commercial 3D Product Mockups & Packaging Renders",
      "High-CTR 4K Social Media & YouTube Thumbnails",
      "Upwork & Fiverr Profile Setup & Client Acquisition",
    ],
    highlights: ["Live Project Portfolio", "Fiverr & Upwork Setup", "1-on-1 Portfolio Review"],
    careerOutcomes: ["Freelance Graphic Designer", "3D Brand Identity Specialist", "Social Media Content Designer"],
    ctaText: "Apply for This Course",
    image: "/images/course-design.webp",
  },
  {
    id: "digital-social-marketing-pro",
    number: "02",
    title: "Digital & Social Media Marketing Professional",
    category: "Marketing & SEO",
    duration: "10 Weeks",
    format: "Live Campaign Execution",
    level: "Beginner to Professional",
    popular: true,
    summary: "Run real Meta and Google ad budgets, master SEO ranking strategies, video retention editing, and client lead generation systems.",
    prerequisites: "Basic computer and smartphone navigation",
    tools: ["Meta Ads Manager", "Google Ads", "Google Analytics 4", "Semrush / Ahrefs", "CapCut / Premiere"],
    modules: [
      "Full-Funnel Digital Marketing Architecture",
      "Targeted Meta Ads Manager (Budgeting, Targeting & ROAS)",
      "Local SEO & Google Business Profile Top-3 Ranking",
      "Viral TikTok & YouTube Short-Form Video Strategy",
      "Speed-to-Lead Systems & WhatsApp Conversion Funnels",
      "International Client Retainer Acquisition & Pitching",
    ],
    highlights: ["Live Budget Testing", "Real Business Case Studies", "Agency Lead Strategies"],
    careerOutcomes: ["Digital Marketing Specialist", "Meta Ads Media Buyer", "SEO & Growth Consultant"],
    ctaText: "Apply for This Course",
    image: "/images/course-marketing.webp",
  },
  {
    id: "web-dev-modern-stacks",
    number: "03",
    title: "Web Development Fundamentals & Modern Stacks",
    category: "Web & Coding",
    duration: "12 Weeks",
    format: "Hands-on Practical Coding",
    level: "Zero to Hero",
    popular: true,
    summary: "Learn modern web engineering from HTML/CSS to React, Next.js, responsive layouts, API integrations, and cloud deployments.",
    prerequisites: "Basic computer usage (no prior coding required)",
    tools: ["VS Code", "HTML5/CSS3", "JavaScript ES6+", "TypeScript", "React.js", "Next.js", "Tailwind CSS", "GitHub"],
    modules: [
      "Web Fundamentals: Semantic HTML5 & Modern CSS3",
      "JavaScript ES6+ & TypeScript Essentials",
      "Tailwind CSS & Responsive Architectural Layouts",
      "React.js Components, State, Props & Hooks",
      "Next.js App Router, SSR, API Routes & Deployment",
      "Hostinger Cloud Launch & Freelance Web Client Pitching",
    ],
    highlights: ["3 Live Web Projects", "GitHub Portfolio Setup", "Direct Freelance Ready"],
    careerOutcomes: ["Frontend Web Developer", "Next.js / React Specialist", "Freelance Web Builder"],
    ctaText: "Apply for This Course",
    image: "/images/course-web.webp",
  },
];

export const AGENCY_PRICING: PricingPlan[] = [
  {
    id: "starter-launchpad",
    name: "Starter Launchpad",
    price: "$350",
    period: "per project",
    positioning: "For businesses starting their digital journey.",
    features: [
      "High-Converting Landing Page / Website",
      "2D/3D Vector Logo & Brand Color System",
      "Google Business Profile Setup & Basic SEO",
      "Direct WhatsApp Quick-Connect Integration",
      "Mobile-First Responsive Layout",
      "Hostinger Cloud Fast Deployment",
    ],
    ctaText: "Get Started",
  },
  {
    id: "growth-mobility",
    name: "Growth & Mobility",
    price: "$850",
    period: "per project / campaign",
    badge: "Most Popular",
    popular: true,
    positioning: "For businesses ready to grow and generate consistent leads & sales.",
    features: [
      "Full Custom Multi-Page Next.js Web App",
      "Targeted Meta (FB & IG) Paid Ads Campaign",
      "4K Video Promos & High-CTR Ad Creatives",
      "Top-3 Local Google Business SEO Ranking",
      "Speed-to-Lead 15-Min Lead Capture System",
      "E-Commerce Store with WhatsApp Ordering",
      "Dedicated Project Manager & Analytics Dashboard",
    ],
    ctaText: "Get Started",
  },
  {
    id: "enterprise-dominance",
    name: "Enterprise Dominance",
    price: "$1,850+",
    period: "custom package",
    positioning: "For businesses requiring comprehensive digital execution & market dominance.",
    features: [
      "Full-Stack Web Portal & Custom Headless CMS",
      "Complete 3D Product Renders & Visual Identity",
      "Full-Spectrum National SEO & Content Strategy",
      "Omnichannel Meta, Google & YouTube Funnels",
      "Custom Database Architecture & Secure APIs",
      "Continuous Conversion Rate Optimization (CRO)",
      "Priority 24/7 Direct Engineering & Marketing Support",
    ],
    ctaText: "Request Custom Proposal",
  },
];

export const WHY_CHOOSE_US = [
  {
    title: "Real Projects",
    description: "Learn and work with practical, real-world projects rather than theoretical toy apps.",
    icon: "CheckCircle2",
  },
  {
    title: "Modern Technology",
    description: "We build and teach with modern, high-performance tech stacks like Next.js, React, Tailwind, and Figma.",
    icon: "Cpu",
  },
  {
    title: "Business-Focused",
    description: "Every digital solution and campaign is strictly engineered around measurable ROI and business growth.",
    icon: "Target",
  },
  {
    title: "Beginner-Friendly",
    description: "Institute programs are carefully structured for absolute beginners starting from scratch with no prior tech skills.",
    icon: "GraduationCap",
  },
  {
    title: "Fast Execution",
    description: "Rapid delivery timelines paired with our signature 15-minute speed-to-lead communication discipline.",
    icon: "Zap",
  },
  {
    title: "Growth-Oriented",
    description: "Relentless focus on qualified leads, organic visibility, brand prestige, and sustainable freelancing careers.",
    icon: "BarChart3",
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "tariq-autos-quote",
    name: "Muhammad Tariq",
    role: "Managing Director",
    companyOrStatus: "Tariq Autos & EV Mobility",
    type: "client",
    initials: "MT",
    highlight: "Exceptional Brand Launch & Video Impact",
    quote: "Creatives Digital Agency executed our electric mobility brand identity and video campaign flawlessly. The visual quality and rapid lead response gave us an immediate edge in the market.",
  },
  {
    id: "hamza-shafiq-quote",
    name: "Hamza Shafiq",
    role: "Student Graduate — Batch 3",
    companyOrStatus: "Freelance Graphic Designer & Marketer",
    type: "student",
    initials: "HS",
    highlight: "From Zero Knowledge to International Clients",
    quote: "I started with zero design background. The 1-on-1 practical mentorship at Creatives Institute helped me master Photoshop, 3D mockups, and launch my freelancing profile with paying clients within 2 months.",
  },
  {
    id: "rashid-usman-quote",
    name: "Engr. Rashid Usman",
    role: "CEO & Founder",
    companyOrStatus: "ROS Engineering Works",
    type: "client",
    initials: "RU",
    highlight: "High-End 3D Industrial Identity",
    quote: "Our heavy machinery business needed a modern corporate identity and web portal. The 3D branding and website developed by Creatives positioned our company as an industry leader.",
  },
  {
    id: "ayesha-malik-quote",
    name: "Ayesha Malik",
    role: "Student Graduate — Batch 4",
    companyOrStatus: "Social Media Manager",
    type: "student",
    initials: "AM",
    highlight: "Real Campaign Budget Experience",
    quote: "The hands-on marketing course gave me real experience running Meta ads and creating 4K video content. The freelancing guidance alone was worth every minute of the program.",
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "faq-1",
    category: "Institute",
    question: "Do I need prior computer or coding knowledge to join the Institute?",
    answer: "No prior technical or coding experience is required. All our programs at Creatives Training Institute are specifically structured to support absolute beginners, starting from computer basics and interface fundamentals to advanced practical execution.",
  },
  {
    id: "faq-2",
    category: "Agency",
    question: "How quickly can an agency project be delivered?",
    answer: "Project delivery timelines depend on scope and requirements. Standard starter projects and landing pages are typically delivered within 5 to 7 business days, while comprehensive full-stack portals and omnichannel campaigns range from 2 to 4 weeks with milestone-based updates.",
  },
  {
    id: "faq-3",
    category: "Institute",
    question: "Will I receive practical freelancing mentorship during the course?",
    answer: "Yes, 100%. Practical freelancing is an integrated core module across all courses. You will receive hands-on guidance on profile optimization (Upwork, Fiverr), international client outreach, pricing strategies, and portfolio building with real client projects.",
  },
  {
    id: "faq-4",
    category: "General",
    question: "What is the Speed-to-Lead 15-minute response rule?",
    answer: "We strictly follow a 15-minute speed-to-lead response standard for all new client inquiries and admission requests during operational hours (Monday–Saturday, 9:00 AM–10:00 PM PKT). Rapid communication ensures faster turnaround and zero lost opportunities.",
  },
  {
    id: "faq-5",
    category: "Agency",
    question: "Do you provide marketing retainers for commercial vehicle/showroom businesses?",
    answer: "Yes. We have specialized domain expertise in commercial vehicles, automotive spare parts, and showroom businesses—providing end-to-end video production, 4K CTR thumbnails, Meta lead generation funnels, and local Google SEO ranking retainers.",
  },
];

export const TECH_STACK: TechItem[] = [
  { name: "Next.js", category: "Frontend & FullStack", icon: "Code" },
  { name: "React", category: "Frontend & FullStack", icon: "Layers" },
  { name: "TypeScript", category: "Frontend & FullStack", icon: "FileCode" },
  { name: "Tailwind CSS", category: "Frontend & FullStack", icon: "Palette" },
  { name: "Supabase & Postgres", category: "Cloud & Backend", icon: "Database" },
  { name: "Figma", category: "Design & 3D", icon: "PenTool" },
  { name: "Adobe Photoshop", category: "Design & 3D", icon: "Image" },
  { name: "Adobe Illustrator", category: "Design & 3D", icon: "Vector" },
  { name: "Hostinger Cloud", category: "Cloud & Backend", icon: "Cloud" },
  { name: "Meta Ads Manager", category: "Marketing & SEO", icon: "Target" },
  { name: "Google SEO", category: "Marketing & SEO", icon: "Search" },
  { name: "YouTube Analytics", category: "Marketing & SEO", icon: "PlaySquare" },
];

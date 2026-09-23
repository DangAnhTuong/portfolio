export const PROFILE = {
  name: "Dang Anh Tuong",
  nickname: "tuongok",
  brandLogo: "TUONG-DEV",
  title: "Full-Stack Software Engineer Intern | React, Node.js & Python FastAPI",
  targetRole: "Seeking Full-Stack Software Engineer Internship",
  availability: "Available for Full-Stack Internships · HCMC / Remote",
  location: "Ho Chi Minh City, Vietnam",
  email: "danganhtuongg@gmail.com",
  phone: "0335847674",
  github: "https://github.com/DangAnhTuong",
  githubUsername: "DangAnhTuong",
  linkedin: "https://www.linkedin.com/in/%C4%91%E1%BA%B7ng-anh-t%C6%B0%E1%BB%9Dng-726574361",
  cvUrl: "/Dang_Anh_Tuong_CV.pdf",
  summary: "Final-year Information Technology student at Thuyloi University (HCMC) seeking a Full-Stack Software Engineer Internship. Experienced in building and deploying production-grade web applications with React, Node.js, and Python FastAPI, augmented by modern AI-assisted engineering workflows (Cursor, Claude Code, Google Antigravity). Genuine passion for software engineering, highly coachable, and eager to learn from senior engineers through rigorous code reviews. Ready to dedicate 100% energy and commitment to write clean, reliable code and create meaningful value for the company.",
  education: {
    university: "Thuyloi University",
    location: "Ho Chi Minh City, Vietnam",
    degree: "Bachelor of Science in Information Technology – 4th Year",
    timeline: "2023 – Present (Expected Graduation: 2027)",
    coursework: "Data Structures & Algorithms, Object-Oriented Programming, Database Systems (DBMS), Web Application Development, Software Engineering, Computer Networks",
    englishCert: "Certified CEFR B1 Standard (University Exit Benchmark)",
    nativeLang: "Vietnamese (Native)"
  },
  stats: [
    { label: "Academic Standing", value: "4th Year · Thuyloi Univ" },
    { label: "Target Opportunity", value: "Internship / Full-Stack" },
    { label: "Core Stack", value: "React · Node.js · FastAPI" },
    { label: "English Proficiency", value: "CEFR B1 Certified" }
  ]
};

export const CATEGORIES = [
  { id: "all", label: "All Projects" },
  { id: "fullstack", label: "Full-Stack & Backend" },
  { id: "creative", label: "3D Web & Interactive" },
  { id: "ai-data", label: "AI & Data Systems" }
];

export const PROJECTS = [
  {
    id: "tuong-tan-toeic",
    title: "Tuong Tan TOEIC – 4-Skill EdTech Platform",
    category: "fullstack",
    featured: true,
    role: "Full-Stack Developer | Production Flagship Project",
    timeline: "Jan. 2026 – Present",
    tagline: "Commercial-grade TOEIC exam ecosystem serving 18,200 ETS practice questions, 11,785 dictation audio sentences, and 83 SM-2 spaced repetition sets",
    description: "Developed an extensive TOEIC preparation platform serving 18,200 ETS practice questions with structured 4-part explanations, 11,785 dictation audio sentences with character-level text diffing, and 83 SM-2 spaced repetition sets. Built a 100vh single-frame ETS exam room featuring 200-question interactive bubble sheets, single-sentence waveform audio streaming, and sub-second auto-advancing input mechanics.",
    image: "/projects/toeic_real.webp",
    metrics: [
      "18,200 ETS Questions",
      "11,785 Dictations",
      "100vh Exam Simulator",
      "100% Self-Hosted Media"
    ],
    techStack: ["React 18", "Node.js (Express)", "MongoDB", "TailwindCSS", "Vite", "Web Audio API", "JWT Auth", "Nginx", "Linux VPS"],
    bullets: [
      "Learning Engine: Developed an extensive TOEIC preparation platform serving 18,200 ETS practice questions with structured 4-part explanations, 11,785 dictation audio sentences with character-level text diffing, and 83 SM-2 spaced repetition sets.",
      "Exam Simulator: Built a 100vh single-frame ETS exam room featuring 200-question interactive bubble sheets, single-sentence waveform audio streaming, and sub-second auto-advancing input mechanics.",
      "Study Notebook & Gamification: Implemented an automated mistake review notebook for targeted practice, paired with daily streak tracking, XP progression, and a real-time 1v1 multiplayer arena.",
      "Security, Payment & CI/CD: Integrated Google 1-Click OAuth 2.0, automated VietQR payment webhooks for instant 120-day VIP provisioning, and deployed automated 5-step CI/CD pipeline on Ubuntu Linux VPS with Nginx and SSL."
    ],
    architectureFlow: [
      { step: "Client Layer", name: "React 18 + Vite 5", desc: "100vh No-Scroll Exam Room, Web Audio API waveform, SM-2 Engine" },
      { step: "Reverse Proxy", name: "Nginx + SSL", desc: "Rate limiting, TLS 1.3, caching headers, local /media CDN proxy" },
      { step: "Application", name: "Node.js Express API", desc: "JWT RBAC Middleware, Google OAuth2 verify, VietQR webhooks" },
      { step: "Data Store", name: "MongoDB + Mongoose", desc: "18.2k ETS indexed items, user streaks, XP & mistake notebooks" },
      { step: "DevOps & VPS", name: "Ubuntu Linux + PM2", desc: "Autonomous 5-step CI/CD pipeline, logrotate, self-hosted media" }
    ],
    architecture: {
      frontend: "React 18, Vite 5, TailwindCSS, Web Audio API, Native Speech API, Lucide React, Custom SM-2 Active Recall Engine",
      backend: "Node.js Express API (v1), JWT RBAC Middleware, Google OAuth2 Token Verification, VietQR Webhook Listener",
      database: "MongoDB & Mongoose (18,000+ indexed questions, full-text search, user progress tracking & mistake notebooks)",
      devops: "Ubuntu Linux VPS, Nginx Reverse Proxy, Let's Encrypt SSL, PM2 Process Manager, Automated 5-Step CI/CD"
    },
    github: "https://github.com/DangAnhTuong/tuong_tan_toeic",
    demo: "https://toeic.danganhtuong.dev",
    isPrivate: true,
    privateNotice: "Mã nguồn đang ở chế độ Private để bảo vệ tài nguyên đề thi ETS. Sẵn sàng mời làm Collaborator/Viewer cho Nhà tuyển dụng quan tâm.",
    badgeColor: "#3b82f6",
    gradient: "linear-gradient(135deg, #1d4ed8 0%, #38bdf8 100%)"
  },

  {
    id: "ai-english",
    title: "AI-Powered English Learning Platform",
    category: "ai-data",
    featured: true,
    role: "Full-Stack Developer | Personal Project",
    timeline: "Jan. 2026 – Present",
    tagline: "Decoupled microservices architecture combining Node.js and Python FastAPI with real-time speech processing and pronunciation scoring",
    description: "Designed a multi-tier backend where Node.js manages user data, authentication, and chat history while Python FastAPI handles compute-heavy real-time speech processing. Integrated Deepgram STT and OpenAI API via WebSockets for low-latency voice evaluation (<1.5s) and automated pronunciation scoring.",
    image: "/projects/english_real.webp",
    metrics: [
      "Decoupled Microservices",
      "<1.5s Voice Streaming",
      "Gemini 3.6 Flash Engine",
      "0ms Mindmap Render"
    ],
    techStack: ["React 19", "Node.js (Express)", "Python (FastAPI)", "MongoDB", "Redis", "WebSockets", "Docker", "Nginx"],
    bullets: [
      "Decoupled Backend: Designed a multi-tier backend where Node.js manages user data, authentication, and chat history while Python FastAPI handles compute-heavy real-time speech processing.",
      "Real-Time Voice Streaming: Integrated Deepgram STT and OpenAI API via WebSockets for low-latency voice evaluation (<1.5s) and automated pronunciation scoring.",
      "Authentication & RBAC: Implemented secure JWT authentication with refresh token flow, Google OAuth2, and granular Role-Based Access Control (RBAC) for learners and admins.",
      "DevOps & Deployment: Containerized application stack using Docker Compose and Nginx Reverse Proxy on Linux VPS; optimized caching headers for static SPA delivery."
    ],
    architectureFlow: [
      { step: "Client Layer", name: "React 19 + Ant Design", desc: "Speak.com UI layout, 0ms Optimistic Mindmap, WebSocket Voice recorder" },
      { step: "API Gateway", name: "Nginx Reverse Proxy", desc: "Routes /api to Node.js (3001) and /py-api to FastAPI (8000)" },
      { step: "Node Service", name: "Express Auth & Data", desc: "JWT tokens, user sessions, chat history, topic catalogs" },
      { step: "Python AI", name: "FastAPI Engine", desc: "Asynchronous Gemini 3.6 Flash mindmap generation, speech evaluation" },
      { step: "Data & Cache", name: "MongoDB + Redis", desc: "User profiles, conversation transcripts, token blacklist caching" }
    ],
    architecture: {
      frontend: "React 19, Vite, Web Audio API, WebSocket client, Ant Design",
      backend: "Node.js Express (Auth & Business API), Python FastAPI (Speech Inference Engine & Mindmap)",
      database: "MongoDB, Redis (Cache & Session state)",
      devops: "Docker Compose, Nginx Reverse Proxy, Linux VPS"
    },
    github: "https://github.com/DangAnhTuong/ai-english-learning-platform",
    demo: "https://english.danganhtuong.dev",
    badgeColor: "#10b981",
    gradient: "linear-gradient(135deg, #059669 0%, #10b981 100%)"
  },

  {
    id: "tuong-hotel",
    title: "Tuong Hotel – 3D Showcase & Reservation System",
    category: "creative",
    featured: true,
    role: "Frontend Developer | Personal Project",
    timeline: "June 2025 – Aug. 2025",
    tagline: "Interactive 3D luxury hotel showcase and reservation system powered by Three.js WebGL with 60 FPS performance",
    description: "Built a luxury hotel showcase featuring interactive 3D WebGL rendering with Three.js, room showcases, dining menus, and tour booking reservation flows. Integrated Ant Design 5 components, custom CSS keyframe animations, and i18next for seamless English/Vietnamese language switching.",
    image: "/projects/hotel_real.webp",
    metrics: [
      "Three.js WebGL Engine",
      "Stable 60 FPS Render",
      "3D Room Explorer",
      "i18next Bilingual UI"
    ],
    techStack: ["React 19", "Three.js (@react-three/fiber)", "Ant Design 5", "HTML5", "CSS3", "i18next", "Netlify"],
    bullets: [
      "3D Interactive Graphics: Built a luxury hotel showcase featuring interactive 3D WebGL rendering with Three.js, room showcases, dining menus, and tour booking reservation flows.",
      "Localization & UI: Integrated Ant Design 5 components, custom CSS keyframe animations, and i18next for seamless English/Vietnamese language switching.",
      "Asset Optimization & CI/CD: Optimized 3D model geometry and asset loading to maintain steady 60 FPS rendering; set up automated continuous deployment via Netlify."
    ],
    architectureFlow: [
      { step: "3D Rendering", name: "Three.js & Fiber", desc: "WebGL canvas, realistic lighting, camera orbit controls, shadow maps" },
      { step: "UI Component", name: "Ant Design 5 + CSS", desc: "Modal reservation flows, responsive drawer menus, custom keyframes" },
      { step: "Localization", name: "i18next Engine", desc: "Instant EN/VI language switching without full page reloads" },
      { step: "Asset Engine", name: "GLTF / Draco Loader", desc: "Optimized 3D geometry compression for instant mobile loading" },
      { step: "Deployment", name: "Netlify Edge CI/CD", desc: "Continuous automated deployment, global CDN asset caching" }
    ],
    architecture: {
      core: "React 19, Three.js, @react-three/fiber, @react-three/drei",
      ui: "Ant Design 5, Lucide Icons, Custom Keyframe CSS",
      i18n: "i18next (English & Vietnamese bilingual routing)",
      deployment: "Netlify Continuous Deployment (CI/CD)"
    },
    github: "https://github.com/DangAnhTuong/tuong-hotel",
    demo: "https://tuong-hotel.vercel.app",
    badgeColor: "#0ea5e9",
    gradient: "linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%)"
  },

  {
    id: "tickethub",
    title: "TicketHub – Enterprise Event Ticketing Platform",
    category: "fullstack",
    featured: false,
    role: "Full-Stack Engineer | Personal Project",
    timeline: "2025",
    tagline: "High-concurrency ticket distribution platform with distributed locking and queue management",
    description: "Engineered a robust event ticketing infrastructure designed to prevent race conditions during high-demand concert ticket sales using Redis Distributed Locks and BullMQ job queues.",
    image: "/projects/tickethub_real.webp",
    metrics: [
      "Redis Distributed Locks",
      "BullMQ Queue Engine",
      "P99 1.82ms Lock Time",
      "Zero Race Conditions"
    ],
    techStack: ["Next.js 19", "NestJS", "TypeScript", "PostgreSQL", "Redis", "BullMQ", "Prisma ORM", "Docker Compose"],
    bullets: [
      "High Concurrency Engine: Solved ticket race conditions using Redis Distributed Lock mechanisms.",
      "Queue Architecture: Built BullMQ job queues to smooth out thousand-request traffic spikes without server crashes.",
      "Enterprise Architecture: Decoupled NestJS backend with Prisma ORM, PostgreSQL, and strict RBAC authorization.",
      "Full Containerization: Shipped complete multi-container Docker Compose setup ready for cloud or VPS."
    ],
    architectureFlow: [
      { step: "Frontend App", name: "Next.js 19 TypeScript", desc: "Server-side rendering, real-time seat reservation map, TailwindCSS" },
      { step: "Backend API", name: "NestJS Modular", desc: "RESTful endpoints, Swagger OpenAPI docs, JWT RBAC security guards" },
      { step: "Distributed Lock", name: "Redis Mutex (Redlock)", desc: "Guarantees single seat acquisition during simultaneous checkouts" },
      { step: "Job Queue", name: "BullMQ Asynchronous", desc: "Buffers ticket payment processing, avoids database lock contention" },
      { step: "Persistence", name: "PostgreSQL + Prisma", desc: "ACID transactional order records, relational event schema" }
    ],
    architecture: {
      frontend: "Next.js 19 (TypeScript), Framer Motion, Lucide Icons",
      backend: "NestJS, Prisma ORM, JWT, RBAC Guards, Swagger Docs",
      database: "PostgreSQL, Redis (Distributed Lock & BullMQ Job Queue)",
      devops: "Docker Compose All-in-One, Nginx Reverse Proxy"
    },
    github: "https://github.com/DangAnhTuong/event_ticketing_platform-",
    demo: "https://event-ticketing-platform-omega.vercel.app",
    badgeColor: "#6366f1",
    gradient: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)"
  }
];

export const SKILLS_COMPETENCIES = [
  {
    category: "Frontend Development",
    icon: "Layout",
    skills: ["React 19 / 18", "Next.js", "TailwindCSS", "Three.js (@react-three/fiber)", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "Ant Design", "Web Audio API"]
  },
  {
    category: "Backend Development",
    icon: "Server",
    skills: ["Node.js (Express)", "Python (FastAPI)", "RESTful APIs", "WebSockets", "Mongoose", "JWT Auth", "OAuth 2.0", "RBAC"]
  },
  {
    category: "Programming Languages",
    icon: "Code",
    skills: ["JavaScript (ES6+)", "TypeScript", "Python", "C++", "Java", "SQL"]
  },
  {
    category: "Database & Storage",
    icon: "Database",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis"]
  },
  {
    category: "AI-Assisted Engineering",
    icon: "Cpu",
    skills: ["Cursor IDE", "Claude Code", "Google Antigravity", "OpenAI Codex", "Prompt Engineering"]
  },
  {
    category: "DevOps & Cloud",
    icon: "Cloud",
    skills: ["Docker", "Docker Compose", "Nginx Reverse Proxy", "Linux VPS (Ubuntu)", "PM2", "Git", "GitHub", "Vercel", "Netlify", "CI/CD"]
  },
  {
    category: "Software Practices",
    icon: "Shield",
    skills: ["Clean Architecture", "Responsive Web Design", "Component-Driven Development", "Agile / Scrum", "Code Review"]
  },
  {
    category: "Languages",
    icon: "Globe",
    skills: ["English (CEFR B1 Certified)", "Vietnamese (Native)"]
  }
];

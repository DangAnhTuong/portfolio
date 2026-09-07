export const PROFILE = {
  name: "Dang Anh Tuong",
  nickname: "tuongok",
  brandLogo: "TUONG-DEV",
  title: "Software Engineer | Frontend & Full-Stack Development",
  targetRole: "Seeking Full-Stack / Frontend Software Engineer Internship",
  location: "Ho Chi Minh City, Vietnam",
  email: "danganhtuongg@gmail.com",
  phone: "0335847674",
  github: "https://github.com/DangAnhTuong",
  githubUsername: "DangAnhTuong",
  linkedin: "https://www.linkedin.com/in/đặng-anh-tường-726574361?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
  cvUrl: "/Dang_Anh_Tuong_CV.pdf",
  summary: "Final-year Information Technology student at Thuyloi University (HCMC) seeking a Full-stack / Frontend Software Engineer Internship. Possesses hands-on experience developing full-stack web applications with React 19, Three.js, Node.js, and Python FastAPI. Proficient in real-time AI streaming, 3D web rendering, database architecture, and cutting-edge AI-assisted engineering workflows (Google Antigravity, Claude Code, OpenAI Codex, Cursor). Certified English proficiency at CEFR B1 level.",
  education: {
    university: "Thuyloi University",
    location: "Ho Chi Minh City, Vietnam",
    degree: "Bachelor of Science in Information Technology – 4th Year",
    timeline: "2023 – Present (Expected Graduation: 2027)",
    englishCert: "Certified CEFR B1 Standard (University Exit Benchmark)",
    nativeLang: "Vietnamese (Native)"
  },
  stats: [
    { label: "Academic Standing", value: "4th Year · Thuyloi Univ" },
    { label: "Target Opportunity", value: "Internship / Full-Stack" },
    { label: "Core Stack", value: "React 19 · Three.js · Node.js" },
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
    id: "ai-english",
    title: "AI-Powered English Learning Platform",
    category: "ai-data",
    featured: true,
    role: "Full-stack Developer | Personal Project",
    timeline: "Jan. 2026 – Present",
    tagline: "Microservices platform with real-time AI voice streaming and automated pronunciation scoring",
    description: "Designed and engineered a decoupled full-stack platform combining Node.js for auth/business logic and Python FastAPI for real-time speech processing. Integrated Deepgram STT and OpenAI via WebSockets for sub-1.5s audio evaluation.",
    techStack: ["React 19", "Node.js (Express)", "Python (FastAPI)", "MongoDB", "Redis", "WebSockets", "Docker", "Nginx"],
    bullets: [
      "Microservices Architecture: Designed a decoupled backend system combining Node.js for business logic/auth and Python FastAPI for real-time AI speech processing.",
      "Real-time Voice Streaming: Integrated Deepgram STT and OpenAI API via WebSockets for instant speech recognition, low-latency audio feedback (<1.5s), and automated pronunciation scoring.",
      "Authentication & Security: Implemented JWT authentication with refresh token flow, Google OAuth2, and Role-Based Access Control (RBAC) across learner and admin portals.",
      "DevOps & Infrastructure: Containerized application stack using Docker Compose and Nginx Reverse Proxy on Linux VPS; configured zero-cache HTTP headers for SPA static bundle delivery."
    ],
    architecture: {
      frontend: "React 19, Vite, Web Audio API, WebSocket client",
      backend: "Node.js Express (Auth & Business API), Python FastAPI (Speech Inference Engine)",
      database: "MongoDB, Redis (Cache & Session state)",
      devops: "Docker Compose, Nginx Reverse Proxy, Linux VPS"
    },
    github: "https://github.com/DangAnhTuong/ai-english-learning-platform",
    demo: "https://github.com/DangAnhTuong/ai-english-learning-platform",
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
    tagline: "Interactive 3D luxury hotel showcase and reservation system powered by Three.js WebGL",
    description: "Built an interactive luxury hotel website featuring real-time 3D graphics rendering with Three.js. Implemented room showcases, dining menus, tour booking flows, and smooth 60 FPS performance optimization.",
    techStack: ["React 19", "Three.js (@react-three/fiber)", "Ant Design 5", "HTML5", "CSS3", "i18next", "Netlify"],
    bullets: [
      "3D Graphics & UI Design: Built an interactive luxury hotel website featuring 3D graphics rendering with Three.js, room showcases, dining menus, and tour booking flows.",
      "Multi-language Integration: Integrated Ant Design 5 UI components, custom keyframe animations, and i18next for seamless bilingual (English/Vietnamese) support for international guests.",
      "Performance & Deployment: Optimized 3D model assets and geometry loading to maintain smooth 60 FPS rendering; deployed production build to Netlify with continuous deployment pipelines."
    ],
    architecture: {
      core: "React 19, Three.js, @react-three/fiber, @react-three/drei",
      ui: "Ant Design 5, Lucide Icons, Custom Keyframe CSS",
      i18n: "i18next (English & Vietnamese bilingual routing)",
      deployment: "Netlify Continuous Deployment (CI/CD)"
    },
    github: "https://github.com/DangAnhTuong/tuong-hotel",
    demo: "https://github.com/DangAnhTuong/tuong-hotel",
    badgeColor: "#0ea5e9",
    gradient: "linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%)"
  },
  {
    id: "tickethub",
    title: "TicketHub – Enterprise Event Ticketing Platform",
    category: "fullstack",
    featured: true,
    role: "Full-stack Engineer | Personal Project",
    timeline: "2025",
    tagline: "High-concurrency ticket distribution platform with distributed locking and queue management",
    description: "Engineered a robust event ticketing infrastructure designed to prevent race conditions during high-demand concert ticket sales using Redis Distributed Locks and BullMQ job queues.",
    techStack: ["Next.js 19", "NestJS", "TypeScript", "PostgreSQL", "Redis", "BullMQ", "Prisma ORM", "Docker Compose"],
    bullets: [
      "High Concurrency Engine: Solved ticket race conditions using Redis Distributed Lock mechanisms.",
      "Queue Architecture: Built BullMQ job queues to smooth out thousand-request traffic spikes without server crashes.",
      "Enterprise Architecture: Decoupled NestJS backend with Prisma ORM, PostgreSQL, and strict RBAC authorization.",
      "Full Containerization: Shipped complete multi-container Docker Compose setup ready for cloud or VPS."
    ],
    architecture: {
      frontend: "Next.js 19 (TypeScript), Framer Motion, Lucide Icons",
      backend: "NestJS, Prisma ORM, JWT, RBAC Guards, Swagger Docs",
      database: "PostgreSQL, Redis (Distributed Lock & BullMQ Job Queue)",
      devops: "Docker Compose All-in-One, Nginx Reverse Proxy"
    },
    github: "https://github.com/DangAnhTuong/event_ticketing_platform-",
    demo: "https://github.com/DangAnhTuong/event_ticketing_platform-",
    badgeColor: "#6366f1",
    gradient: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)"
  },
  {
    id: "olist-analytics",
    title: "Olist E-Commerce Analytics End-to-End",
    category: "ai-data",
    featured: false,
    role: "Data & ML Engineer | Academic Project",
    timeline: "2025",
    tagline: "Customer segmentation & churn prediction pipeline on 100,000+ e-commerce orders",
    description: "End-to-end data science and machine learning project analyzing Brazilian e-commerce transactions. Built RFM customer segmentation and predictive churn classification models.",
    techStack: ["Python", "Pandas", "Scikit-Learn", "NumPy", "Seaborn", "Streamlit", "Matplotlib"],
    bullets: [
      "Large-scale Data Pipeline: Cleaned and normalized complex multi-table relational datasets covering 100,000 orders.",
      "RFM Customer Segmentation: Applied K-Means clustering to identify high-value consumer groups.",
      "Predictive Modeling: Trained classification models (Random Forest, Logistic Regression) to assess delivery delays and satisfaction.",
      "Interactive Dashboard: Deployed an exploratory data visualization application using Streamlit Cloud."
    ],
    architecture: {
      dataProcessing: "Python, Pandas, NumPy, Scipy",
      machineLearning: "Scikit-Learn (K-Means, Random Forest, Logistic Regression)",
      visualization: "Plotly, Seaborn, Matplotlib",
      dashboard: "Streamlit Community Cloud"
    },
    github: "https://github.com/DangAnhTuong/Olist-Ecommerce-Analytics-End-to-End",
    demo: "https://github.com/DangAnhTuong/Olist-Ecommerce-Analytics-End-to-End",
    badgeColor: "#f59e0b",
    gradient: "linear-gradient(135deg, #d97706 0%, #f59e0b 100%)"
  }
];

export const SKILLS_COMPETENCIES = [
  {
    category: "Frontend Development",
    icon: "Layout",
    skills: ["React 19", "Next.js", "Three.js (@react-three/fiber)", "JavaScript (ES6+)", "HTML5", "CSS3", "Ant Design", "Bootstrap 5"]
  },
  {
    category: "Backend Development",
    icon: "Server",
    skills: ["Node.js (Express)", "Python (FastAPI)", "RESTful APIs", "WebSockets", "Mongoose"]
  },
  {
    category: "Programming Languages",
    icon: "Code",
    skills: ["JavaScript", "Python", "C++", "Java"]
  },
  {
    category: "Database & Storage",
    icon: "Database",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis"]
  },
  {
    category: "AI & Agentic Tools",
    icon: "Cpu",
    skills: ["Google Antigravity", "Claude Code", "OpenAI Codex", "Cursor IDE", "Prompt Engineering"]
  },
  {
    category: "DevOps & Cloud",
    icon: "Cloud",
    skills: ["Docker", "Docker Compose", "Nginx Reverse Proxy", "Linux VPS", "Git", "GitHub", "Vercel", "Netlify"]
  },
  {
    category: "Foreign Languages",
    icon: "Globe",
    skills: ["English (CEFR B1 Certified)", "Vietnamese (Native)"]
  }
];

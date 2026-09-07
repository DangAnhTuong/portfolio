export const PROFILE = {
  name: "Đặng Anh Tường",
  nickname: "tuongok",
  title: "Full-Stack Engineer & AI Solutions Developer",
  status: "Sẵn sàng nhận cơ hội mới & Hợp tác dự án",
  email: "danganhtuongg@gmail.com",
  github: "https://github.com/DangAnhTuong",
  githubUsername: "DangAnhTuong",
  location: "Việt Nam",
  bio: "Kỹ sư phần mềm đam mê kiến trúc chịu tải cao (High Concurrency), trải nghiệm tương tác 3D Web sống động và các giải pháp AI ứng dụng thực tiễn. Thành thạo hệ sinh thái TypeScript/React 19/NestJS/Docker cùng các pipeline phân tích dữ liệu & Machine Learning.",
  stats: [
    { label: "Dự án Thực chiến", value: "8+" },
    { label: "Công nghệ Làm chủ", value: "15+" },
    { label: "Kiến trúc Chịu tải", value: "High Concurrency" },
    { label: "Chi phí Hạ tầng", value: "100% Free Tiers" }
  ]
};

export const CATEGORIES = [
  { id: "all", label: "Tất Cả Dự Án" },
  { id: "fullstack", label: "Full-Stack & Backend" },
  { id: "creative", label: "3D Web & Sáng Tạo" },
  { id: "ai-data", label: "AI & Data Science" },
  { id: "mini", label: "Tiện Ích & Showcase" }
];

export const PROJECTS = [
  {
    id: "tickethub",
    title: "TicketHub - Enterprise Event Ticketing Platform",
    category: "fullstack",
    featured: true,
    tagline: "Hệ thống phân phối vé sự kiện & concert chịu tải cao (High Concurrency)",
    description: "Nền tảng quản lý và đặt vé sự kiện chuyên nghiệp với kiến trúc chịu tải lớn, cơ chế đặt chỗ thời gian thực, hàng đợi chống nghẽn vé (BullMQ/Redis) và phân quyền quản trị đa cấp RBAC.",
    architecture: {
      frontend: "Next.js 19 (TypeScript), Tailwind CSS, Framer Motion, Lucide Icons",
      backend: "NestJS, Prisma ORM, JWT, RBAC Guards, Swagger Docs",
      database: "PostgreSQL, Redis (Distributed Lock & BullMQ Job Queue)",
      devops: "Docker Compose All-in-One, Nginx Reverse Proxy, VPS/Cloud Ready"
    },
    highlights: [
      "Xử lý tranh chấp giữ vé (Race Conditions) bằng Redis Distributed Lock",
      "Hàng đợi mua vé BullMQ giải quyết bài toán nghẽn nghìn người cùng mua",
      "Giao diện Rich Aesthetics với sơ đồ chọn ghế trực quan",
      "Kiến trúc Micro-service ready, tích hợp thanh toán VietQR / Sepay"
    ],
    tags: ["Next.js", "NestJS", "TypeScript", "PostgreSQL", "Redis", "Docker", "BullMQ", "Prisma"],
    github: "https://github.com/DangAnhTuong/event_ticketing_platform-",
    demo: "https://github.com/DangAnhTuong/event_ticketing_platform-#-h%C6%B0%E1%BB%9Bng-d%E1%BA%ABn-kh%E1%BB%9Fi-%C4%91%E1%BB%99ng-nhanh-quickstart",
    badgeColor: "#6366f1",
    gradient: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)",
    glowColor: "rgba(99, 102, 241, 0.4)"
  },
  {
    id: "tuong-hotel",
    title: "TuongHotel 3D - Luxury Showcase & Reservation",
    category: "creative",
    featured: true,
    tagline: "Trải nghiệm không gian khách sạn 5 sao tương tác 3D WebGL sống động",
    description: "Nền tảng đặt phòng khách sạn cao cấp ứng dụng đồ họa 3D tương tác theo thời gian thực trên nền web. Cho phép khách hàng xoay ngắm phòng 360 độ, đổi góc nhìn ánh sáng, xem tiện ích nội thất chân thực trước khi bấm đặt phòng.",
    architecture: {
      core: "React 19, Three.js, @react-three/fiber, @react-three/drei",
      ui: "Ant Design, Lucide Icons, Vanilla CSS Glassmorphism",
      i18n: "i18next đa ngôn ngữ (Tiếng Việt / English)",
      performance: "Tối ưu hóa asset 3D nén GLTF/Draco, duy trì 60 FPS mượt mà"
    },
    highlights: [
      "Hiệu ứng camera orbit mượt mà và tương tác vật thể 3D trực tiếp",
      "Luồng đặt phòng thông minh với bộ lọc ngày, loại phòng và giá linh hoạt",
      "Giao diện Glassmorphism sang trọng chuẩn Luxury Boutique",
      "Hỗ trợ đa ngôn ngữ quốc tế và tương thích hoàn toàn trên mobile"
    ],
    tags: ["React 19", "Three.js", "Fiber", "WebGL", "Luxury UI", "i18next", "Ant Design"],
    github: "https://github.com/DangAnhTuong/tuong-hotel",
    demo: "https://github.com/DangAnhTuong/tuong-hotel",
    badgeColor: "#00f2fe",
    gradient: "linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%)",
    glowColor: "rgba(6, 182, 212, 0.4)"
  },
  {
    id: "ai-english",
    title: "AI English Learning Platform",
    category: "ai-data",
    featured: true,
    tagline: "Nền tảng luyện tiếng Anh tích hợp nhận diện giọng nói & Chấm điểm phát âm AI",
    description: "Hệ thống học tiếng Anh toàn diện với Audio Streaming Pipeline, nhận diện phát âm thời gian thực qua Whisper AI, phân tích ngữ điệu và lộ trình học tập cá nhân hóa.",
    architecture: {
      frontend: "React, Vite, Web Audio API, WebSocket",
      backend: "Node.js Express, Python FastAPI (AI Inference Engine)",
      aiModels: "OpenAI Whisper / FastSpeech2, Diff Audio Engine",
      database: "MongoDB Atlas (NoSQL Document Store)"
    },
    highlights: [
      "Audio Streaming hai chiều qua WebSocket không độ trễ",
      "Chấm điểm phát âm chi tiết từng âm vị (Phoneme level scoring)",
      "Thuật toán phát hiện lỗi sai phát âm và gợi ý chỉnh khẩu hình miệng",
      "Kiến trúc song song Node.js API Gateway và Python Microservice"
    ],
    tags: ["React", "FastAPI", "Python", "Whisper AI", "Node.js", "MongoDB", "WebSocket"],
    github: "https://github.com/DangAnhTuong/ai-english-learning-platform",
    demo: "https://github.com/DangAnhTuong/ai-english-learning-platform",
    badgeColor: "#10b981",
    gradient: "linear-gradient(135deg, #059669 0%, #10b981 100%)",
    glowColor: "rgba(16, 185, 129, 0.4)"
  },
  {
    id: "olist-analytics",
    title: "Olist E-Commerce Analytics End-to-End",
    category: "ai-data",
    featured: false,
    tagline: "Hệ thống phân tích dữ liệu thương mại điện tử & Dự đoán hành vi người dùng",
    description: "Dự án phân tích dữ liệu toàn diện trên 100.000 đơn hàng thực tế của sàn thương mại điện tử Olist (Brazil). Xây dựng mô hình phân khúc khách hàng (RFM Clustering) và dự báo nguy cơ rời bỏ khách hàng (Churn Prediction).",
    architecture: {
      dataProcessing: "Python, Pandas, NumPy, Scipy",
      machineLearning: "Scikit-Learn (K-Means, XGBoost, Random Forest)",
      visualization: "Seaborn, Matplotlib, Plotly Interactive",
      dashboard: "Streamlit Cloud Data App"
    },
    highlights: [
      "Pipeline làm sạch và xử lý dữ liệu đa bảng quy mô lớn",
      "Mô hình phân cụm khách hàng RFM giúp tối ưu hóa chiến dịch marketing",
      "Dự đoán thời gian giao hàng và đánh giá mức độ hài lòng khách hàng",
      "Dashboard trực quan hóa các chỉ số tài chính và logistics thời gian thực"
    ],
    tags: ["Python", "Data Science", "Machine Learning", "Streamlit", "Pandas", "Scikit-Learn"],
    github: "https://github.com/DangAnhTuong/Olist-Ecommerce-Analytics-End-to-End",
    demo: "https://github.com/DangAnhTuong/Olist-Ecommerce-Analytics-End-to-End",
    badgeColor: "#f59e0b",
    gradient: "linear-gradient(135deg, #d97706 0%, #f59e0b 100%)",
    glowColor: "rgba(245, 158, 11, 0.4)"
  },
  {
    id: "mental-health",
    title: "Mental Health Intelligence Analysis System",
    category: "ai-data",
    featured: false,
    tagline: "Mô hình học máy phân tích và dự báo các chỉ số sức khỏe tâm lý",
    description: "Nghiên cứu ứng dụng Data Science và Machine Learning trong việc phân tích các yếu tố ảnh hưởng đến sức khỏe tâm thần trong môi trường công sở hiện đại, đưa ra các cảnh báo sớm và can thiệp kịp thời.",
    architecture: {
      analytics: "Statistical Modeling, Exploratory Data Analysis (EDA)",
      algorithms: "Logistic Regression, Gradient Boosting, SVM",
      reporting: "Interactive Statistical Notebooks & Visual Insight Summaries"
    },
    highlights: [
      "Phân tích tương quan đa biến phức tạp giữa áp lực công việc và sức khỏe",
      "Đánh giá độ chính xác mô hình phân loại với F1-Score vượt trội",
      "Đề xuất giải pháp hành vi dựa trên kết quả phân tích số liệu thực chứng"
    ],
    tags: ["Python", "Machine Learning", "Health Tech", "Statistical Analysis", "EDA"],
    github: "https://github.com/DangAnhTuong/NHOM11_Mental-Health-Dataset",
    demo: "https://github.com/DangAnhTuong/NHOM11_Mental-Health-Dataset",
    badgeColor: "#ec4899",
    gradient: "linear-gradient(135deg, #db2777 0%, #ec4899 100%)",
    glowColor: "rgba(236, 72, 153, 0.4)"
  },
  {
    id: "meeting-postcard",
    title: "Meeting Summary Postcard Generator",
    category: "mini",
    featured: false,
    tagline: "Ứng dụng tóm tắt nội dung cuộc họp & xuất bưu thiếp trực quan nhanh chóng",
    description: "Tiện ích web cho phép người dùng nhập nhanh biên bản cuộc họp hoặc ghi chú quan trọng, tự động phân tách ý chính, gán tag người phụ trách và xuất ra dạng Postcard đồ họa đẹp mắt để chia sẻ.",
    architecture: {
      frontend: "HTML5 Canvas, Vanilla JavaScript, CSS3 Glassmorphism",
      exportEngine: "HTML2Canvas, Blob Image Exporter"
    },
    highlights: [
      "Render đồ họa trực tiếp trên trình duyệt không cần backend",
      "Tùy biến theme màu sắc, layout danh thiếp và font chữ linh hoạt",
      "Tải ảnh chất lượng cao 1-click hoặc copy vào bộ nhớ đệm"
    ],
    tags: ["JavaScript", "HTML5 Canvas", "UI/UX", "Productivity Tool"],
    github: "https://github.com/DangAnhTuong",
    demo: "https://github.com/DangAnhTuong",
    badgeColor: "#8b5cf6",
    gradient: "linear-gradient(135deg, #7c3aed 0%, #8b5cf6 100%)",
    glowColor: "rgba(139, 92, 246, 0.4)"
  },
  {
    id: "web-showcase-suite",
    title: "Web Event Hub & Community Marketplace",
    category: "mini",
    featured: false,
    tagline: "Bộ sưu tập các dự án web thương mại điện tử & sự kiện mini",
    description: "Tập hợp các giải pháp giao diện web tương tác gồm: Nền tảng quảng bá sự kiện đa kênh (websukien), Sàn giao dịch tài khoản bảo mật (Web_banacc), và Hệ thống tuyển dụng trực quan (WebTuyen).",
    architecture: {
      frontend: "React, Ant Design, Responsive Mobile Layout",
      features: "Giỏ hàng, bộ lọc thuộc tính đa cấp, xác thực người dùng"
    },
    highlights: [
      "Thiết kế responsive hoàn hảo trên mọi kích thước màn hình",
      "Tối ưu trải nghiệm mua sắm và đăng ký thông tin mượt mà",
      "Tích hợp các thành phần tương tác phong phú"
    ],
    tags: ["React", "Frontend", "E-Commerce", "Responsive Web"],
    github: "https://github.com/DangAnhTuong",
    demo: "https://github.com/DangAnhTuong",
    badgeColor: "#14b8a6",
    gradient: "linear-gradient(135deg, #0d9488 0%, #14b8a6 100%)",
    glowColor: "rgba(20, 184, 166, 0.4)"
  }
];

export const SKILLS_DATA = [
  {
    category: "Frontend Development",
    icon: "Layout",
    skills: [
      { name: "React 19 / Next.js 15", level: "Senior", percent: 95 },
      { name: "Three.js / React-Three-Fiber", level: "Advanced", percent: 88 },
      { name: "TypeScript / JavaScript ES6+", level: "Senior", percent: 95 },
      { name: "CSS Modules / Glassmorphism / Animation", level: "Expert", percent: 92 },
      { name: "State Management (Zustand, Redux)", level: "Advanced", percent: 90 }
    ]
  },
  {
    category: "Backend & Systems",
    icon: "Server",
    skills: [
      { name: "Node.js / Express / NestJS", level: "Senior", percent: 92 },
      { name: "Python / FastAPI", level: "Advanced", percent: 85 },
      { name: "RESTful API & WebSocket Streaming", level: "Senior", percent: 94 },
      { name: "Prisma ORM / Mongoose", level: "Senior", percent: 90 },
      { name: "Redis (BullMQ, Caching, Lock)", level: "Advanced", percent: 86 }
    ]
  },
  {
    category: "Database & Cloud Infrastructure",
    icon: "Database",
    skills: [
      { name: "PostgreSQL / MySQL", level: "Advanced", percent: 88 },
      { name: "MongoDB Atlas (NoSQL)", level: "Senior", percent: 92 },
      { name: "Docker / Docker Compose", level: "Advanced", percent: 85 },
      { name: "Serverless & Free Cloud (Vercel, Render, Neon)", level: "Expert", percent: 96 },
      { name: "CI/CD & Git Version Control", level: "Advanced", percent: 90 }
    ]
  },
  {
    category: "AI, Machine Learning & Analytics",
    icon: "Cpu",
    skills: [
      { name: "Speech AI (Whisper, Audio Pipeline)", level: "Advanced", percent: 86 },
      { name: "Data Science (Pandas, NumPy, EDA)", level: "Advanced", percent: 85 },
      { name: "Scikit-Learn (Classification, RFM)", level: "Proficient", percent: 82 },
      { name: "Interactive Visuals (Streamlit, Canvas)", level: "Advanced", percent: 88 }
    ]
  }
];

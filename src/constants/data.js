export const PROFILE = {
    name: "KAYINAMURA KARIMBA GEOFREY",
    title: "Backend Engineer",
    subtitle: "Building scalable APIs, secure systems & data-driven products",
    summary:
        "Software Engineering student at Rwanda Coding Academy with a focus on backend development and data analysis. I design high-performance REST APIs, secure authentication layers, and full-stack applications using Spring Boot, Node.js, and PostgreSQL.",
    photo: "/profile.png",
    email: "geofreykayin@gmail.com",
    phone: "+250 792 831 659",
    github: "https://github.com/Kayinamura-Karimba-Geofrey",
    linkedin: "https://linkedin.com/in/geofreykayin",
    resumeUrl: "/cv.pdf",
    openToWork: true,
    availability: "Open to internships, freelance & remote roles",
    location: "Rwanda",
    calendlyUrl: import.meta.env.VITE_CALENDLY_URL || "",
    formspreeEndpoint: import.meta.env.VITE_FORMSPREE_ENDPOINT || "",
    siteUrl: "https://geofreykayin.dev",
};

export const TECH_STACK = [
    { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
    { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { name: "Spring Boot", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" },
    { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
    { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
    { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
    { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
    { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
    { name: "Redis", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg" },
    { name: "Next.js", logo: "https://cdn.worldvectorlogo.com/logos/next-js.svg" },
    { name: "Express", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" },
    { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
    { name: "Postman", logo: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
];

/** @type {'expert' | 'proficient' | 'learning'} */
export const PROFICIENCY_LABELS = {
    expert: "Expert",
    proficient: "Proficient",
    learning: "Learning",
};

export const SKILLS = [
    {
        category: "Backend",
        items: [
            { name: "Node.js", proficiency: "expert" },
            { name: "Express / NestJS", proficiency: "expert" },
            { name: "Spring Boot", proficiency: "proficient" },
            { name: "REST APIs", proficiency: "expert" },
            { name: "Clean Architecture", proficiency: "proficient" },
            { name: "Microservices", proficiency: "proficient" },
        ],
    },
    {
        category: "Auth & Security",
        items: [
            { name: "JWT", proficiency: "expert" },
            { name: "OAuth2", proficiency: "proficient" },
            { name: "Sessions", proficiency: "proficient" },
            { name: "RBAC", proficiency: "expert" },
            { name: "Bcrypt", proficiency: "proficient" },
            { name: "OpenSSL", proficiency: "learning" },
        ],
    },
    {
        category: "Frontend",
        items: [
            { name: "React", proficiency: "expert" },
            { name: "Tailwind CSS", proficiency: "expert" },
            { name: "Redux Toolkit", proficiency: "proficient" },
            { name: "Framer Motion", proficiency: "proficient" },
            { name: "TypeScript", proficiency: "proficient" },
            { name: "Vite", proficiency: "expert" },
        ],
    },
    {
        category: "Databases",
        items: [
            { name: "PostgreSQL", proficiency: "expert" },
            { name: "MongoDB", proficiency: "proficient" },
            { name: "Redis", proficiency: "proficient" },
            { name: "SQL Optimization", proficiency: "proficient" },
            { name: "Data Modeling", proficiency: "expert" },
            { name: "Prisma / TypeORM", proficiency: "proficient" },
        ],
    },
    {
        category: "Tools & DevOps",
        items: [
            { name: "Docker", proficiency: "proficient" },
            { name: "Git & GitHub", proficiency: "expert" },
            { name: "Postman", proficiency: "expert" },
            { name: "Swagger", proficiency: "proficient" },
            { name: "Jenkins", proficiency: "learning" },
            { name: "AWS (Basic)", proficiency: "learning" },
        ],
    },
];

export const PROJECT_TAGS = ["All", "Backend", "Full-Stack"];

export const PROJECTS = [
    {
        id: 1,
        name: "Imena NewsBox",
        tag: "Full-Stack",
        problem: "A Rwandan family needed a fast, modern platform for news, stories, and event updates.",
        outcome: "Live production site serving real readers with Sanity CMS and a mobile-first React frontend.",
        features: [
            "Dynamic content management for news categories",
            "Social sharing and community engagement",
            "Mobile-first reading experience",
            "Real-time event updates",
        ],
        tech: ["React", "PostgreSQL", "Sanity CMS", "Tailwind CSS", "Vite"],
        image: "/projects/imenanews.png",
        github: null,
        demo: "https://www.imenanewsbox.rw/",
        featured: true,
    },
    {
        id: 2,
        name: "EduSync: School Management System",
        tag: "Backend",
        problem: "Schools lacked a centralized system for attendance, grading, and parent communication.",
        outcome: "Live backend deployed on Render — reduced API response latency by ~40% after schema and query optimization.",
        features: [
            "RBAC for Admin, Teacher, Student, and Parent roles",
            "Automated attendance tracking and analytics",
            "Real-time gradebook and reporting engine",
            "Secure file upload for assignments",
        ],
        tech: ["Spring Boot", "PostgreSQL", "React", "JWT", "Docker"],
        image: "/projects/edusync.png",
        github: "https://github.com/Kayinamura-Karimba-Geofrey",
        demo: "https://backend-services-g3m2.onrender.com",
        featured: true,
    },
    {
        id: 3,
        name: "Terrafund: Land Management System",
        tag: "Full-Stack",
        problem: "Land records were inconsistent with little transparency in ownership transfers.",
        outcome: "GIS-integrated registry with role-based access and digital audit trails for plot management.",
        features: [
            "GIS-based plot mapping with Leaflet",
            "Secure ownership transfer with audit trails",
            "Automated land valuation and tax calculation",
            "Public registry portal",
        ],
        tech: ["Spring Boot", "PostgreSQL", "React", "JWT", "Leaflet"],
        image: "/projects/terrafund.png",
        github: "https://github.com/TerraFund/TerraFund-Backend",
        demo: null,
        featured: true,
    },
    {
        id: 4,
        name: "SecureGate: Auth Framework",
        tag: "Backend",
        problem: "Repeated auth implementations led to inconsistent security across projects.",
        outcome: "Live payment & auth platform on Render with secure user authentication and session management.",
        features: [
            "Multi-factor Authentication (TOTP)",
            "Refresh token rotation",
            "Redis-backed session expiration",
            "Security audit logging",
        ],
        tech: ["Express", "Redis", "JWT", "Bcrypt", "Node.js"],
        image: "/projects/securegate.png",
        github: "https://github.com/Kayinamura-Karimba-Geofrey",
        demo: "https://vaultpay-djum.onrender.com",
        featured: false,
    },
    {
        id: 5,
        name: "MediFlow: Hospital Management System",
        tag: "Full-Stack",
        problem: "Patient data silos and inefficient appointment scheduling caused long wait times.",
        outcome: "Live hospital management platform on Render with EHR, scheduling, pharmacy inventory, and billing modules.",
        features: [
            "Electronic Health Records with encryption",
            "Appointment scheduling",
            "Pharmacy inventory with low-stock alerts",
            "Billing and insurance processing",
        ],
        tech: ["Node.js/NestJS", "MongoDB", "React", "Redis", "Swagger"],
        image: "/projects/mediflow.png",
        github: "https://github.com/Kayinamura-Karimba-Geofrey",
        demo: "https://mediconnect-pfqf.onrender.com",
        featured: false,
    },
    {
        id: 6,
        name: "Ecommerce",
        tag: "Full-Stack",
        problem: "Businesses needed a secure, scalable online store with reliable checkout and inventory management.",
        outcome: "Live e-commerce platform on Render with product catalog, cart, and order processing.",
        features: [
            "Product catalog and inventory management",
            "Secure checkout and order processing",
            "User authentication and role-based access",
            "Admin dashboard for store management",
        ],
        tech: ["Java", "Spring Boot", "PostgreSQL", "REST APIs", "React"],
        image: "/projects/nexus.png",
        github: "https://github.com/Kayinamura-Karimba-Geofrey",
        demo: "https://ecommerce-ri9u.onrender.com",
        featured: false,
    },
];

export const EXPERIENCE = [
    {
        period: "2024 – Present",
        company: "Portfolio Projects & Freelance",
        role: "FULL-STACK & BACKEND DEVELOPER",
        description:
            "Designing and implementing robust systems including land management, digital news platforms, and educational tools.",
        bullets: [
            "Designed Terrafund, a Spring Boot land management system with GIS integration, RBAC, and secure audit trails.",
            "Built and deployed Imena NewsBox, a production news platform using React, Sanity CMS, and optimized REST APIs.",
            "Optimized EduSync database schemas and API performance, reducing response latency by ~40%.",
            "Developed data-driven dashboards and reporting engines for real-time administrator insights.",
        ],
        tech: ["Java", "Spring Boot", "React", "REST APIs", "PostgreSQL", "GIS", "JWT", "Git"],
    },
    {
        period: "2022 – 2024",
        company: "Rwanda Coding Academy",
        role: "FULL-STACK DEVELOPER STUDENT",
        description:
            "Professional software engineering training with focus on architecture, security, and collaborative development.",
        bullets: [
            "Developed scalable backend services using Clean Architecture and Microservices principles.",
            "Implemented OAuth2 and JWT-based authentication across multiple student-led applications.",
            "Collaborated using Git/GitHub workflows, code reviews, and CI/CD pipelines.",
            "Applied modular design, API documentation, and secure coding standards.",
        ],
        tech: ["Software Engineering", "Cybersecurity", "Embedded Systems"],
    },
];

export const EDUCATION = [
    {
        institution: "Rwanda Coding Academy",
        degree: "A1 Diploma in Software Engineering",
        year: "2022 – Present",
        focus: "Software Engineering, Cybersecurity, and Embedded Systems",
    },
];

export const CERTIFICATIONS = [
    {
        name: "Software Engineering — Rwanda Coding Academy",
        issuer: "Rwanda Coding Academy",
        year: "In Progress",
        credentialUrl: null,
    },
    {
        name: "Cybersecurity Fundamentals",
        issuer: "Rwanda Coding Academy",
        year: "2023",
        credentialUrl: null,
    },
    {
        name: "Git & GitHub Version Control",
        issuer: "Self-paced / Project-based",
        year: "2023",
        credentialUrl: "https://github.com/Kayinamura-Karimba-Geofrey",
    },
];

export const TESTIMONIALS = [
    {
        name: "Uwonkunda Mahinga Rodin",
        role: "Senior Backend Developer at RCA",
        text: "Working with Geofrey was an absolute pleasure. His technical skills and problem-solving abilities are exceptional. He delivered high-quality code and was always willing to go the extra mile.",
        avatar: "UR",
        linkedin: null,
    },
    {
        name: "Nyumbayire Raurent",
        role: "CEO at Tech4Impact",
        text: "Geofrey is a talented developer who brings creativity and technical expertise to every project. His attention to detail and commitment to excellence make him a valuable team member.",
        avatar: "NR",
        linkedin: null,
    },
    {
        name: "Rukundo Furaha Divin",
        role: "Co-Founder at BlinkTechnologiz",
        text: "I highly recommend Geofrey for any development project. He has a deep understanding of both frontend and backend technologies, and his work ethic is outstanding.",
        avatar: "RD",
        linkedin: null,
    },
];

export const GITHUB_STATS = {
    profileUrl: "https://github.com/Kayinamura-Karimba-Geofrey",
    username: "Kayinamura-Karimba-Geofrey",
    contributionGraphUrl:
        "https://github-readme-activity-graph.vercel.app/graph?username=Kayinamura-Karimba-Geofrey&theme=react-dark&hide_border=true&bg_color=000000&color=6366f1&line=6366f1&point=ffffff&area=true",
};

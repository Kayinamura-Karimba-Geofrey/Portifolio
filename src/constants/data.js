export const PROFILE = {
    name: "KAYINAMURA KARIMBA GEOFREY",
    title: "Full-Stack Developer | Backend System Architect",
    summary: "Senior-level Full-Stack Engineer with a deep focus on building scalable backend architectures, high-performance APIs, and secure authentication systems. Expert in Node.js, Spring Boot, and PostgreSQL.",
    photo: "/profile.png",
    email: "geofreykayin@gmail.com",
    github: "https://github.com/alexpierce",
    linkedin: "https://linkedin.com/in/alexpierce",
};

export const SKILLS = [
    {
        category: "Backend",
        items: [
            { name: "Node.js", level: 95 },
            { name: "Express / NestJS", level: 92 },
            { name: "Spring Boot", level: 88 },
            { name: "REST APIs", level: 98 },
            { name: "Clean Architecture", level: 90 },
            { name: "Microservices", level: 85 }
        ]
    },
    {
        category: "Auth & Security",
        items: [
            { name: "JWT", level: 96 },
            { name: "OAuth2", level: 88 },
            { name: "Sessions", level: 90 },
            { name: "RBAC", level: 94 },
            { name: "Bcrypt", level: 92 },
            { name: "OpenSSL", level: 82 }
        ]
    },
    {
        category: "Frontend",
        items: [
            { name: "React", level: 92 },
            { name: "Tailwind CSS", level: 95 },
            { name: "Redux Toolkit", level: 85 },
            { name: "Framer Motion", level: 80 },
            { name: "TypeScript", level: 88 },
            { name: "Vite", level: 90 }
        ]
    },
    {
        category: "Databases",
        items: [
            { name: "PostgreSQL", level: 94 },
            { name: "MongoDB", level: 90 },
            { name: "Redis", level: 85 },
            { name: "SQL Optimization", level: 88 },
            { name: "Data Modeling", level: 92 },
            { name: "Prisma / TypeORM", level: 90 }
        ]
    },
    {
        category: "Tools & DevOps",
        items: [
            { name: "Docker", level: 88 },
            { name: "Git & GitHub", level: 96 },
            { name: "Postman", level: 94 },
            { name: "Swagger", level: 92 },
            { name: "Jenkins", level: 80 },
            { name: "AWS (Basic)", level: 82 }
        ]
    }
];

export const PROJECTS = [
    {
        id: 1,
        name: "EduSync: School Management System",
        problem: "Educational institutions lacked a centralized system for managing attendance, grading, and parent communication securely.",
        features: [
            "Role-Based Access Control (RBAC) (Admin, Teacher, Student, Parent)",
            "Automated attendance tracking and analytics",
            "Real-time gradebook and reporting engine",
            "Secure file upload system for assignments"
        ],
        tech: ["Spring Boot", "PostgreSQL", "React", "JWT", "Docker"],
        image: "/projects/edusync.png",
        github: "https://github.com/alexpierce/edusync",
        demo: "https://edusync-demo.com"
    },
    {
        id: 2,
        name: "MediFlow: Hospital Management System",
        problem: "Patient data silos and inefficient appointment scheduling leading to long wait times and data inconsistency.",
        features: [
            "Electronic Health Records (EHR) with high-level encryption",
            "Intelligent appointment scheduling algorithm",
            "Pharmacy inventory management with low-stock alerts",
            "Billing and insurance claim processing"
        ],
        tech: ["Node.js/NestJS", "MongoDB", "React", "Redis", "Swagger"],
        image: "/projects/mediflow.png",
        github: "https://github.com/alexpierce/mediflow",
        demo: "https://mediflow-demo.com"
    },
    {
        id: 3,
        name: "Nexus: High-Performance Blog/CMS",
        problem: "Generic CMS platforms were too bloated and lacked the performance needed for SEO-driven tech blogs.",
        features: [
            "Custom Markdown-to-HTML engine",
            "Edge-cached content delivery via Redis",
            "Dynamic SEO metadata generation",
            "Multi-author workspace with approval workflows"
        ],
        tech: ["Next.js", "PostgreSQL", "Tailwind CSS", "OAuth2", "Prisma"],
        image: "/projects/nexus.png",
        github: "https://github.com/alexpierce/nexus-cms",
        demo: "https://nexus-cms.com"
    },
    {
        id: 4,
        name: "SecureGate: Auth & Auth Framework",
        problem: "Re-implementing secure auth in every project with inconsistent standards and security vulnerabilities.",
        features: [
            "Multi-factor Authentication (MFA) via TOTP",
            "Refresh Token Rotation strategy",
            "Session management with Redis expiration",
            "Security audit logging for all auth events"
        ],
        tech: ["Express", "Redis", "JWT", "Bcrypt", "Node.js"],
        image: "/projects/securegate.png",
        github: "https://github.com/alexpierce/securegate",
        demo: null
    }
];

export const EXPERIENCE = [
    {
        period: "2023 - Present",
        company: "Freelance / Open Source Contributor",
        role: "Full-Stack Backend Specialist",
        description: "Designed and implemented scalable microservices architectures for several startup projects. Focused on API performance and security.",
        bullets: [
            "Reduced API latency by 40% through intelligent caching and SQL optimization.",
            "Implemented zero-trust security architecture for a fintech prototype.",
            "Mentored junior developers on clean code and design patterns."
        ]
    },
    {
        period: "2021 - 2023",
        company: "Academic Projects & Internships",
        role: "Junior Backend Developer",
        description: "Built the foundation of backend engineering by working on robust enterprise-level university projects.",
        bullets: [
            "Developed a custom ORM wrapper to simplify complex database transactions.",
            "Automated deployment pipelines using GitHub Actions.",
            "Integrated 3rd party payment gateways into e-commerce modules."
        ]
    }
];

export const EDUCATION = [
    {
        institution: "Tech University of Engineering",
        degree: "B.S. in Computer Science",
        year: "2021",
        focus: "Distributed Systems & Data Engineering"
    }
];

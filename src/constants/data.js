export const PROFILE = {
    name: "KAYINAMURA KARIMBA GEOFREY",
    title: "Software Engineer | Backend System Architect | Data Analyst",
    summary: "Student at Rwanda Coding Academy with a deep passion for Backend Development and Data Analysis. Expert in building scalable architectures, high-performance APIs, and secure systems using Spring Boot, Node.js, and PostgreSQL. Focused on turning complex data into actionable insights.",
    photo: "/profile.png",
    email: "geofreykayin@gmail.com",
    github: "https://github.com/geofreykayin",
    linkedin: "https://linkedin.com/in/geofreykayin",
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
        demo: "https://backend-services-g3m2.onrender.com"
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
    },
    {
        id: 5,
        name: "Terrafund: Land Management System",
        problem: "Inconsistent land record management and lack of transparency in land transactions and ownership.",
        features: [
            "GIS-based plot mapping and visualization",
            "Secure ownership transfer with digital audit trails",
            "Automated land valuation and tax calculation",
            "Public registry portal with verifiable credentials"
        ],
        tech: ["Spring Boot", "PostgreSQL", "React", "JWT", "Leaflet"],
        image: "/projects/terrafund.png",
        github: "https://github.com/alexpierce/terrafund",
        demo: null
    },
    {
        id: 6,
        name: "Imena NewsBox: Digital News Experience",
        problem: "Need for a modern, high-performance platform for family news, stories, and event updates in Rwanda.",
        features: [
            "Dynamic content management for various news categories",
            "Social sharing and community engagement features",
            "Optimized mobile-first reading experience",
            "Real-time event updates and storytelling modules"
        ],
        tech: ["React", "PostgreSQL", "Sanity CMS", "Tailwind CSS", "Vite"],
        image: "/projects/imenanews.png",
        github: null,
        demo: "https://www.imenanewsbox.rw/"
    }
];

export const EXPERIENCE = [
    {
        period: "2024 - Present",
        company: "Portfolio Projects & Freelance",
        role: "Full-Stack & Backend Developer",
        description: "Leading the development of complex systems with a focus on land management, media platforms, and educational tools.",
        bullets: [
            "Architected and implemented Terrafund, a Spring Boot-based land management system with GIS integration and secure audit trails.",
            "Developed and launched Imena NewsBox, a high-performance digital news portal using React and Sanity CMS.",
            "Optimized data models and API performance for the EduSync School Management System, reducing latency by 40%.",
            "Leveraging Data Analysis skills to build intelligent dashboard features and reporting engines."
        ]
    },
    {
        period: "2022 - 2024",
        company: "Rwanda Coding Academy",
        role: "Full-Stack Developer Student",
        description: "Engaged in intensive software engineering training focused on core computer science principles and modern full-stack development.",
        bullets: [
            "Developed robust backend systems using Clean Architecture and Microservices patterns.",
            "Integrated secure OAuth2 and JWT authentication frameworks into various student-led projects.",
            "Collaborated on shared codebases using Git/GitHub workflows and automated CI/CD pipelines."
        ]
    }
];

export const EDUCATION = [
    {
        institution: "Rwanda Coding Academy",
        degree: "A1 Diploma in Software Engineering",
        year: "Current",
        focus: "Software Engineering, Cybersecurity, and Embedded Systems"
    }
];

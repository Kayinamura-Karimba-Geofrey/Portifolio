import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Menu, X, Github, Linkedin, Mail, ExternalLink, Code2, Database, ShieldCheck, Terminal, GraduationCap, Briefcase, FileText, ChevronRight, Twitter, Instagram } from 'lucide-react';
import { PROFILE, SKILLS, PROJECTS, EXPERIENCE, EDUCATION } from '../constants/data';

// --- Theme Hook ---
const useTheme = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    useEffect(() => {
        const root = window.document.documentElement;
        if (theme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    return [theme, setTheme];
};

// --- Navbar Component ---
export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [theme, setTheme] = useTheme();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Experience', href: '#experience' },
    ];

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-1000 ${scrolled ? 'py-4' : 'py-10'}`}>
            <div className="container mx-auto px-6 max-w-7xl">
                <div className={`flex justify-between items-center transition-all duration-1000 ${scrolled ? 'premium-glass rounded-2xl px-8 py-4' : 'px-4'}`}>
                    <a href="#" className="flex items-center space-x-4 group">
                        <div className="w-10 h-10 bg-slate-950 dark:bg-indigo-600 rounded-xl flex items-center justify-center text-white font-display font-black text-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-2xl relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent"></div>
                            K
                        </div>
                        <span className="text-xl font-display font-black tracking-[0.1em] text-slate-950 dark:text-white uppercase">
                            Geofrey<span className="text-indigo-600 dark:text-indigo-400">.</span>
                        </span>
                    </a>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-2">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="px-5 py-2 text-[9px] font-black uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white transition-all rounded-lg hover:bg-slate-50 dark:hover:bg-white/5 relative group/link"
                            >
                                {link.name}
                                <span className="absolute bottom-0 left-1/2 w-0 h-px bg-indigo-600 dark:bg-indigo-400 transition-all duration-300 -translate-x-1/2 group-hover/link:w-1/2"></span>
                            </a>
                        ))}

                        <div className="flex items-center ml-6 space-x-6 pl-6 border-l border-slate-200 dark:border-white/10">
                            <button
                                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                                className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-white/5 text-slate-950 dark:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-all flex items-center justify-center border border-slate-200/50 dark:border-white/5"
                            >
                                {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
                            </button>

                            <a
                                href="/cv.pdf"
                                className="px-8 py-3.5 hidden lg:flex items-center space-x-3 bg-slate-950 dark:bg-white dark:text-slate-950 text-white text-[9px] font-black uppercase tracking-[0.3em] rounded-xl hover:bg-indigo-600 dark:hover:bg-indigo-500 hover:text-white transition-all shadow-2xl active:scale-95 border border-white/10"
                            >
                                <span>View Resume</span>
                            </a>
                        </div>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden w-12 h-12 flex items-center justify-center rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-950 dark:text-white"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="md:hidden absolute top-32 left-6 right-6 premium-glass rounded-3xl shadow-3xl overflow-hidden border border-white/20 p-6"
                    >
                        <div className="flex flex-col space-y-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="px-6 py-4 text-sm font-black text-slate-500 hover:text-slate-950 dark:text-slate-400 dark:hover:text-white flex items-center justify-between rounded-2xl hover:bg-slate-50 dark:hover:bg-white/5 transition-all uppercase tracking-[0.2em]"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name} <ChevronRight size={14} className="text-indigo-600" />
                                </a>
                            ))}
                            <div className="pt-4 border-t border-slate-100 dark:border-white/5">
                                <a href="/cv.pdf" className="w-full py-5 bg-slate-950 dark:bg-white dark:text-slate-950 text-white text-center rounded-2xl font-black uppercase tracking-[0.3em] text-[10px] shadow-2xl block">View Resume</a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

// --- Hero Component ---
export const Hero = () => {
    return (
        <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden space-background">
            {/* Animated Stars */}
            <div className="stars"></div>

            {/* Horizontal Light Streaks - Like in reference */}
            <div className="light-streak"></div>
            <div className="light-streak" style={{ top: '65%', animationDelay: '3s', animationDuration: '9s' }}></div>

            {/* Subtle Background Glow - Minimal like reference */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600/15 rounded-full blur-[150px] pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10 flex flex-col items-center justify-center">

                {/* Profile Photo with Single Glowing Ring */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    className="relative mb-12 group"
                >
                    {/* Single Glowing Ring - Matching Reference */}
                    <div
                        className="absolute -inset-[50px] rounded-full border-[3px] border-transparent"
                        style={{
                            background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.8), rgba(59, 130, 246, 0.6), rgba(168, 85, 247, 0.8)) border-box',
                            WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                            WebkitMaskComposite: 'xor',
                            maskComposite: 'exclude',
                            boxShadow: '0 0 30px rgba(139, 92, 246, 0.6), 0 0 60px rgba(139, 92, 246, 0.4), inset 0 0 30px rgba(139, 92, 246, 0.3)',
                            animation: 'neon-glow 3s ease-in-out infinite'
                        }}
                    ></div>

                    {/* Photo Container */}
                    <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-slate-800/60 shadow-2xl z-10 group-hover:border-purple-500/40 transition-all duration-700">
                        <img
                            src={PROFILE.photo}
                            alt={PROFILE.name}
                            className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-110 transition-all duration-700 ease-in-out"
                        />
                        {/* Dark Mode Overlay - Visible by default, hidden on hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/30 to-transparent group-hover:opacity-0 transition-opacity duration-700"></div>
                        {/* Light Mode Overlay - Hidden by default, visible on hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 via-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    </div>
                </motion.div>

                {/* Name */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="text-3xl md:text-5xl lg:text-6xl font-display font-black text-white uppercase tracking-[0.15em] text-center mb-6"
                >
                    {PROFILE.name}
                </motion.h1>

                {/* Title */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="text-sm md:text-base lg:text-lg font-medium text-slate-300 uppercase tracking-[0.25em] text-center max-w-4xl mx-auto"
                >
                    {PROFILE.title}
                </motion.p>

            </div>
        </section>
    );
};

// --- About Component ---
export const About = () => {
    return (
        <section id="about" className="py-16 md:py-24 bg-white dark:bg-slate-950 relative overflow-hidden transition-colors duration-1000">
            <div className="container mx-auto px-6 max-w-7xl">

                {/* Card Grid - Bio content distributed within cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        {
                            title: "Software Engineer",
                            desc: "I am a Software Engineer and Backend System Architect with a passion for building scalable, high-performance applications. My journey involves deep dives into complex algorithms, distributed systems, and secure data structures.",
                            icon: <Code2 size={16} />
                        },
                        {
                            title: "Security First",
                            desc: "I design systems that stand the test of time, prioritizing security, reliability, and maintainability. Zero-trust integration and encryption standards are at the core of every solution I build.",
                            icon: <ShieldCheck size={16} />
                        },
                        {
                            title: "Full-Stack Bridge",
                            desc: "With a strong foundation in both backend and frontend technologies, I bridge the gap between efficient server-side logic and seamless user experiences. I don't just write code; I craft experiences.",
                            icon: <Terminal size={16} />
                        },
                        {
                            title: "Continuous Growth",
                            desc: "Currently focused on mastering advanced backend protocols and data analysis to drive intelligent decision-making within applications. Building automated pipelines that ensure maximum uptime and reliability.",
                            icon: <ExternalLink size={16} />
                        }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 * i }}
                            className="group p-8 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-white/5 hover:border-indigo-500/30 transition-all duration-700 flex flex-col items-start hover:-translate-y-2 shadow-sm hover:shadow-2xl"
                        >
                            <div className="w-12 h-12 bg-white dark:bg-white/5 rounded-xl flex items-center justify-center text-slate-400 dark:text-slate-500 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-all mb-6 border border-slate-200 dark:border-white/5 shadow-inner">
                                {item.icon}
                            </div>
                            <h4 className="font-display font-black text-base text-slate-950 dark:text-white mb-4 uppercase tracking-tight">{item.title}</h4>
                            <p className="text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed tracking-tight">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// --- Skills Component ---
const SkillIcon = ({ category }) => {
    switch (category) {
        case 'Backend': return <Terminal size={20} />;
        case 'Auth & Security': return <ShieldCheck size={20} />;
        case 'Frontend': return <Code2 size={20} />;

        case 'Databases': return <Database size={20} />;
        default: return <Terminal size={20} />;
    }
};

export const Skills = () => {
    return (
        <section id="skills" className="py-16 md:py-20 bg-slate-50 dark:bg-[#020617] relative overflow-hidden transition-colors duration-1000">
            <div className="absolute inset-0 grid-background opacity-30 dark:opacity-10"></div>
            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <div className="max-w-3xl">
                        <div className="inline-block px-5 py-2.5 bg-white dark:bg-white/5 text-indigo-600 dark:text-indigo-400 text-[10px] font-black uppercase tracking-[0.4em] rounded-lg mb-10 border border-slate-200 dark:border-white/10 shadow-sm">
                            Technical Skills
                        </div>
                        <h2 className="text-3xl md:text-4xl font-display font-black text-slate-950 dark:text-white uppercase tracking-[-0.04em] leading-[0.9]">
                            Core Competen<span className="text-indigo-600 dark:text-indigo-500">cies.</span>
                        </h2>
                    </div>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {SKILLS.map((skill, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                            className="group h-full"
                        >
                            <div className="h-full p-5 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-white/10 hover:border-indigo-500/30 transition-all duration-700 relative overflow-hidden flex flex-col">
                                <div className="flex items-center justify-between mb-8 relative z-10">
                                    <div className="w-10 h-10 bg-slate-950 dark:bg-white/5 rounded-xl flex items-center justify-center text-white dark:text-indigo-400 border border-white/10 shadow-2xl group-hover:bg-indigo-600 dark:group-hover:bg-indigo-500 group-hover:text-white transition-all duration-500">
                                        <SkillIcon category={skill.category} />
                                    </div>
                                    <div className="text-[8px] font-mono text-slate-400 dark:text-white/20 tracking-[0.5em] uppercase">Sector: 0{idx + 1}</div>
                                </div>

                                <h3 className="text-lg font-display font-black text-slate-950 dark:text-white mb-6 tracking-[-0.02em] uppercase relative z-10">{skill.category}</h3>

                                <div className="grid grid-cols-2 gap-4 relative z-10">
                                    {skill.items.map((item, i) => (
                                        <div key={i} className="p-3 bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 rounded-lg group-hover:border-indigo-500/10 transition-colors">
                                            <p className="text-[7px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1">{item.name}</p>
                                            <div className="flex items-end justify-between">
                                                <span className="text-xs font-black text-slate-950 dark:text-white leading-none tracking-tight">{item.level}%</span>
                                                <div className="w-1 h-1 rounded-full bg-indigo-500/30"></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// --- Projects Component ---
export const Projects = () => {
    return (
        <section id="projects" className="py-16 md:py-20 bg-white dark:bg-slate-950 transition-colors duration-1000">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <div className="max-w-4xl">
                        <div className="inline-block px-5 py-2.5 bg-slate-50 dark:bg-white/5 text-indigo-600 dark:text-indigo-400 text-[10px] font-black uppercase tracking-[0.4em] rounded-lg mb-10 border border-slate-200 dark:border-white/10 shadow-sm">
                            Portfolio
                        </div>
                        <h2 className="text-3xl md:text-4xl font-display font-black text-slate-950 dark:text-white mb-6 uppercase tracking-[-0.04em] leading-[0.9]">
                            My Projects<span className="text-indigo-600 dark:text-indigo-500">.</span>
                        </h2>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-6">
                    {PROJECTS.map((project, idx) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                            className="group h-full"
                        >
                            <div className="h-full flex flex-col bg-white dark:bg-slate-950 rounded-xl overflow-hidden border border-slate-200 dark:border-white/10 hover:border-indigo-500/30 transition-all duration-700 relative">
                                {/* Project Image Box */}
                                <div className="relative h-64 overflow-hidden group-hover:h-56 transition-all duration-700 ease-in-out">
                                    <div className="absolute inset-0 bg-indigo-600/10 group-hover:bg-transparent transition-colors duration-700 z-10"></div>
                                    <img
                                        src={project.image}
                                        alt={project.name}
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                                    />
                                    {/* Project Logo Overlay */}
                                    <div className="absolute bottom-6 left-6 z-20">
                                        <div className="w-14 h-14 bg-slate-950 dark:bg-white rounded-xl flex items-center justify-center text-white dark:text-slate-950 shadow-3xl group-hover:bg-indigo-600 group-hover:text-white transition-all duration-700 border border-white/5">
                                            {idx === 0 ? <GraduationCap size={28} strokeWidth={1} /> : idx === 1 ? <ShieldCheck size={28} strokeWidth={1} /> : idx === 2 ? <FileText size={28} strokeWidth={1} /> : <Terminal size={28} strokeWidth={1} />}
                                        </div>
                                    </div>

                                    {/* Action Buttons Overlay */}
                                    <div className="absolute top-6 right-6 z-20 flex gap-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700">
                                        <a href={project.github} className="w-12 h-12 bg-white/10 backdrop-blur-md text-white hover:bg-white hover:text-slate-950 rounded-xl transition-all border border-white/10 flex items-center justify-center"><Github size={18} /></a>
                                        {project.demo && <a href={project.demo} className="px-6 h-12 bg-indigo-600 text-white hover:bg-white hover:text-slate-950 text-[9px] font-black uppercase tracking-[0.2em] rounded-xl transition-all shadow-2xl flex items-center justify-center">Live Node</a>}
                                    </div>
                                </div>

                                <div className="p-6 md:p-7 flex-1 flex flex-col relative z-10">
                                    <h3 className="text-xl md:text-2xl font-display font-black text-slate-950 dark:text-white mb-4 tracking-[-0.03em] uppercase leading-none">{project.name}</h3>

                                    <div className="mb-8">
                                        <p className="text-[9px] font-black text-indigo-500 dark:text-indigo-400 uppercase tracking-[0.5em] mb-4">Goal</p>
                                        <p className="text-base text-slate-500 dark:text-slate-400 font-medium leading-relaxed tracking-tight italic border-l-2 border-indigo-500/20 pl-6">{project.problem}</p>
                                    </div>

                                    <div className="mb-8">
                                        <p className="text-[9px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.5em] mb-4">Features</p>
                                        <ul className="space-y-4">
                                            {project.features.map((f, i) => (
                                                <li key={i} className="flex items-center text-slate-600 dark:text-slate-400 font-bold group/item">
                                                    <div className="w-2 h-2 rounded-full border border-indigo-500/30 mr-4 group-hover/item:bg-indigo-500 transition-all"></div>
                                                    <span className="text-sm tracking-tight">{f}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="mt-auto pt-10 border-t border-slate-100 dark:border-white/5 flex flex-wrap gap-2.5">
                                        {project.tech.map((t, i) => (
                                            <span key={i} className="px-4 py-2 bg-slate-50 dark:bg-white/5 text-slate-950 dark:text-slate-400 text-[8px] font-black uppercase tracking-[0.3em] rounded-lg border border-slate-100 dark:border-white/5">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// --- Experience & Education ---
export const ExperienceEducation = () => {
    return (
        <section id="experience" className="py-16 md:py-20 bg-[#020617] relative overflow-hidden transition-colors duration-1000">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-indigo-500/5 translate-x-1/4 blur-[120px]"></div>

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="grid lg:grid-cols-2 gap-20">
                    {/* Experience */}
                    <div>
                        <div className="inline-block px-5 py-2.5 bg-white/5 text-indigo-400 text-[10px] font-black uppercase tracking-[0.4em] rounded-lg mb-10 border border-white/10">
                            My Experience
                        </div>
                        <h2 className="text-3xl md:text-4xl font-display font-black text-white mb-10 uppercase tracking-[-0.04em] leading-none">
                            Experi<span className="text-indigo-500">ence.</span>
                        </h2>

                        <div className="space-y-12">
                            {EXPERIENCE.map((exp, idx) => (
                                <div key={idx} className="group relative pl-12">
                                    <div className="absolute left-0 top-0 h-full w-px bg-white/5 group-hover:bg-indigo-500/30 transition-all duration-700"></div>
                                    <div className="absolute -left-[4px] top-0 w-2 h-2 rounded-full bg-slate-800 border border-white/10 transition-all duration-700 group-hover:scale-150 group-hover:bg-indigo-500 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.5)]"></div>

                                    <div className="mb-3">
                                        <span className="text-[9px] font-black text-indigo-500 uppercase tracking-[0.5em] mb-3 block">{exp.period}</span>
                                        <h3 className="text-xl md:text-2xl font-display font-black text-white mb-2 tracking-tight uppercase leading-none">{exp.role}</h3>
                                        <p className="text-slate-500 font-bold mb-6 uppercase tracking-widest text-[10px]">{exp.company}</p>
                                    </div>

                                    <ul className="space-y-5">
                                        {exp.bullets.map((bullet, i) => (
                                            <li key={i} className="text-sm text-slate-400 flex items-start font-medium leading-relaxed tracking-tight group-hover:text-slate-300 transition-colors">
                                                <div className="w-1.5 h-px bg-indigo-500/40 mt-3 mr-5 flex-shrink-0"></div>
                                                {bullet}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Education */}
                    <div className="space-y-20">
                        <div>
                            <div className="inline-block px-5 py-2.5 bg-white/5 text-indigo-400 text-[10px] font-black uppercase tracking-[0.4em] rounded-lg mb-10 border border-white/10">
                                Academic History
                            </div>
                            <h2 className="text-3xl md:text-4xl font-display font-black text-white mb-10 uppercase tracking-[-0.04em] leading-none">Education<span className="text-indigo-500">.</span></h2>

                            <div className="space-y-6">
                                {EDUCATION.map((edu, idx) => (
                                    <div key={idx} className="bg-white/5 p-8 rounded-2xl border border-white/5 hover:bg-white/[0.07] transition-all duration-700 group relative overflow-hidden">
                                        <div className="flex justify-between items-start mb-10">
                                            <span className="px-5 py-2 bg-indigo-600 text-white text-[9px] font-black uppercase tracking-widest rounded-lg shadow-2xl">{edu.year}</span>
                                            <div className="text-[8px] font-mono text-white/20 tracking-[0.4em] uppercase">Core Node: ACAD</div>
                                        </div>

                                        <h3 className="text-2xl font-display font-black text-white mb-2 tracking-tight uppercase leading-none">{edu.degree}</h3>
                                        <p className="text-slate-500 font-bold mb-8 text-[10px] uppercase tracking-widest">{edu.institution}</p>

                                        <div className="flex items-center text-slate-400 font-black text-[9px] uppercase tracking-[0.4em] bg-slate-950 p-6 rounded-xl border border-white/5">
                                            <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center mr-6 border border-indigo-500/20">
                                                <Terminal size={18} className="text-indigo-500" />
                                            </div>
                                            Focus: <span className="ml-4 text-white">{edu.focus}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="pt-12 border-t border-white/5">
                            <h3 className="text-[9px] font-black text-slate-500 mb-10 uppercase tracking-[0.5em] text-center lg:text-left text-balance">Industry Protocols & Verified Logic</h3>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {["AWS Architecture", "Cloud Engineering"].map((cert, idx) => (
                                    <div key={idx} className="flex items-center p-8 bg-white/5 rounded-2xl border border-white/5 group hover:bg-white/[0.08] transition-all duration-700">
                                        <div className="w-12 h-12 rounded-xl bg-slate-950 flex items-center justify-center text-indigo-500 group-hover:scale-110 transition-all mr-6 border border-white/5 shadow-2xl">
                                            <ShieldCheck size={22} />
                                        </div>
                                        <span className="text-white font-black uppercase tracking-widest text-[10px]">{cert}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// --- Contact Component ---

// --- Footer Component ---
export const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = [
        { name: 'Architecture', href: '#about' },
        { name: 'Arsenal', href: '#skills' },
        { name: 'Systems', href: '#projects' },
        { name: 'History', href: '#experience' },
    ];

    const socialLinks = [
        { name: 'GitHub', icon: <Github size={18} />, href: PROFILE.github, label: 'SOURCE', hoverColor: 'hover:text-white', bgColor: 'group-hover:bg-slate-800' },
        { name: 'LinkedIn', icon: <Linkedin size={18} />, href: PROFILE.linkedin, label: 'NETWORK', hoverColor: 'hover:text-[#0077b5]', bgColor: 'group-hover:bg-[#0077b5]/10' },
        { name: 'Twitter', icon: <Twitter size={18} />, href: '#', label: 'FEED', hoverColor: 'hover:text-[#1DA1F2]', bgColor: 'group-hover:bg-[#1DA1F2]/10' },
        { name: 'Instagram', icon: <Instagram size={18} />, href: '#', label: 'VISUALS', hoverColor: 'hover:text-[#E4405F]', bgColor: 'group-hover:bg-[#E4405F]/10' },
    ];

    return (
        <footer className="relative pt-24 pb-12 bg-[#020617] transition-colors duration-1000 overflow-hidden border-t border-white/5">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full pointer-events-none"></div>

            {/* Top Border Gradient Glow */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
                    {/* Brand Section */}
                    <div className="lg:col-span-5 space-y-10">
                        <div className="flex items-center space-x-6 group">
                            <div className="relative w-16 h-16">
                                <div className="absolute inset-0 bg-indigo-600 blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                                <div className="relative w-full h-full bg-slate-950 rounded-2xl border border-white/10 flex items-center justify-center text-white font-display font-black text-2xl uppercase shadow-2xl overflow-hidden group-hover:border-indigo-500/50 transition-all duration-500">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-transparent"></div>
                                    K
                                </div>
                            </div>
                            <div>
                                <h3 className="text-white font-display font-black text-4xl uppercase tracking-tighter leading-none">
                                    Geofrey<span className="text-indigo-500">.</span>
                                </h3>
                                <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.5em] mt-3 leading-none italic">
                                    Systems Architect & Engineer
                                </p>
                            </div>
                        </div>

                        <p className="text-lg text-slate-400 font-medium leading-relaxed max-w-md tracking-tight">
                            Building resilient digital foundations through precision engineering and architectural clarity. Bridging the gap between complex infrastructure and seamless user experiences.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <div className="flex items-center px-4 py-2 bg-white/5 rounded-full border border-white/10 backdrop-blur-sm">
                                <span className="relative flex h-2 w-2 mr-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                </span>
                                <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Core Engine: Operational</span>
                            </div>
                            <div className="flex items-center px-4 py-2 bg-white/5 rounded-full border border-white/10 backdrop-blur-sm">
                                <span className="text-[9px] font-black text-indigo-500 uppercase tracking-widest mr-2">VER:</span>
                                <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest">v5.4.2-LTS</span>
                            </div>
                        </div>
                    </div>

                    {/* Links Grid */}
                    <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
                        {/* Navigation */}
                        <div className="space-y-8">
                            <h4 className="text-[11px] font-black text-white uppercase tracking-[0.4em] inline-block relative">
                                Sitemap <span className="absolute -bottom-2 left-0 w-8 h-px bg-indigo-500"></span>
                            </h4>
                            <ul className="space-y-4 pt-4">
                                {footerLinks.map((link) => (
                                    <li key={link.name}>
                                        <a href={link.href} className="text-sm font-bold text-slate-400 hover:text-white transition-all flex items-center group">
                                            <span className="w-0 group-hover:w-4 h-px bg-indigo-500 mr-0 group-hover:mr-3 transition-all duration-300"></span>
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Social Protocols */}
                        <div className="space-y-8 md:col-span-2">
                            <h4 className="text-[11px] font-black text-white uppercase tracking-[0.4em] inline-block relative">
                                Uplinks <span className="absolute -bottom-2 left-0 w-8 h-px bg-indigo-500"></span>
                            </h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.name}
                                        href={social.href}
                                        className={`flex items-center justify-between group p-3 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/10 transition-all duration-300`}
                                    >
                                        <div className="flex items-center space-x-3">
                                            <div className={`p-2 rounded-lg bg-slate-900 text-slate-400 group-hover:text-white transition-colors duration-300 ${social.bgColor}`}>
                                                {social.icon}
                                            </div>
                                            <span className="text-sm font-bold text-slate-400 group-hover:text-white transition-colors">
                                                {social.name}
                                            </span>
                                        </div>
                                        <span className="text-[8px] font-mono text-slate-600 group-hover:text-indigo-400 uppercase tracking-widest transition-colors">
                                            {social.label}
                                        </span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
                        <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em]">
                            © {currentYear} Kayinamura Karimba Geofrey
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

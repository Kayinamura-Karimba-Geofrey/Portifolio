import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Menu, X, Github, Linkedin, Mail, ExternalLink, Code2, Database, ShieldCheck, Terminal, GraduationCap, Briefcase, FileText, ChevronRight, Twitter, Instagram } from 'lucide-react';
import { PROFILE, SKILLS, PROJECTS, EXPERIENCE, EDUCATION, TECH_STACK } from '../constants/data';

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
                        <div className="w-10 h-10 bg-black dark:bg-black rounded-xl flex items-center justify-center text-white font-display font-black text-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-2xl relative overflow-hidden ring-1 ring-white/10">
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent"></div>
                            K
                        </div>
                        <span className="text-2xl font-display font-black tracking-[0.1em] text-white uppercase">
                            Geofrey<span className="text-indigo-400">.</span>
                        </span>
                    </a>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-2">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="px-5 py-2 text-[11px] font-black uppercase tracking-[0.3em] text-slate-400 hover:text-white transition-all rounded-lg hover:bg-white/5 relative group/link"
                            >
                                {link.name}
                                <span className="absolute bottom-0 left-1/2 w-0 h-px bg-indigo-600 dark:bg-indigo-400 transition-all duration-300 -translate-x-1/2 group-hover/link:w-1/2"></span>
                            </a>
                        ))}

                        <div className="flex items-center ml-6 space-x-6 pl-6 border-l border-white/10">
                            <button
                                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                                className="w-10 h-10 rounded-xl bg-white/5 text-white hover:bg-white/10 transition-all flex items-center justify-center border border-white/10"
                            >
                                {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
                            </button>

                            <a
                                href="/cv.pdf"
                                className="px-8 py-3.5 hidden lg:flex items-center space-x-3 bg-white text-black text-[11px] font-black uppercase tracking-[0.3em] rounded-xl hover:bg-indigo-500 hover:text-white transition-all shadow-2xl active:scale-95 border border-white/10"
                            >
                                <span>View Resume</span>
                            </a>
                        </div>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white"
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
                                    className="px-6 py-4 text-base font-black text-slate-400 hover:text-white flex items-center justify-between rounded-2xl hover:bg-white/5 transition-all uppercase tracking-[0.2em]"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name} <ChevronRight size={14} className="text-indigo-400" />
                                </a>
                            ))}
                            <div className="pt-4 border-t border-white/5">
                                <a href="/cv.pdf" className="w-full py-5 bg-white text-black text-center rounded-2xl font-black uppercase tracking-[0.3em] text-xs shadow-2xl block">View Resume</a>
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

            {/* Absolute Black Base - No Glows */}
            <div className="absolute inset-0 bg-black pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10 flex flex-col items-center justify-center">

                {/* Premium Profile Photo Section */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    className="relative mb-16 group perspective-1000"
                >
                    {/* Outer Orbital Ring - Close to photo edge */}
                    <div
                        className="absolute -inset-[10px] md:-inset-[12px] rounded-full border-[2px] border-transparent opacity-50"
                        style={{
                            background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.7), rgba(59, 130, 246, 0.5), rgba(168, 85, 247, 0.7)) border-box',
                            WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                            WebkitMaskComposite: 'xor',
                            maskComposite: 'exclude',
                            boxShadow: '0 0 20px rgba(139, 92, 246, 0.1), 0 0 40px rgba(59, 130, 246, 0.05)',
                            animation: 'orbit-slow 20s linear infinite'
                        }}
                    ></div>

                    {/* Middle Glowing Ring - Close to photo edge */}
                    <div
                        className="absolute -inset-[5px] md:-inset-[6px] rounded-full border-[3px] border-transparent"
                        style={{
                            background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.9), rgba(59, 130, 246, 0.7), rgba(168, 85, 247, 0.9)) border-box',
                            WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                            WebkitMaskComposite: 'xor',
                            maskComposite: 'exclude',
                            boxShadow: '0 0 20px rgba(139, 92, 246, 0.2), 0 0 40px rgba(139, 92, 246, 0.1), inset 0 0 10px rgba(139, 92, 246, 0.1)',
                            animation: 'neon-glow 3s ease-in-out infinite, orbit-slow 15s linear infinite reverse'
                        }}
                    ></div>

                    {/* Floating Particles */}
                    <div className="absolute -inset-16 pointer-events-none">
                        {[...Array(8)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-1 h-1 bg-indigo-400 rounded-full blur-[1px]"
                                style={{
                                    top: `${Math.random() * 100}%`,
                                    left: `${Math.random() * 100}%`,
                                }}
                                animate={{
                                    y: [0, -20, 0],
                                    opacity: [0.3, 1, 0.3],
                                    scale: [1, 1.5, 1],
                                }}
                                transition={{
                                    duration: 3 + i * 0.5,
                                    repeat: Infinity,
                                    delay: i * 0.3,
                                    ease: "easeInOut"
                                }}
                            />
                        ))}
                    </div>

                    {/* Main Photo Container with 3D Transform */}
                    <div className="relative w-52 h-52 md:w-64 md:h-64 rounded-full overflow-hidden border-[6px] border-white/10 shadow-2xl z-10 group-hover:border-indigo-500/60 group-hover:shadow-[0_0_60px_rgba(139,92,246,0.6)] transition-all duration-700 group-hover:scale-105">
                        <img
                            src={PROFILE.photo}
                            alt={PROFILE.name}
                            className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-110 group-hover:scale-110 transition-all duration-700 ease-in-out"
                        />
                        {/* Dark Mode Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent group-hover:opacity-0 transition-opacity duration-700"></div>
                        {/* Light Mode Overlay - Hidden by default, visible on hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 via-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                        {/* Inner Glow Effect */}
                        <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    </div>

                    {/* Floating Info Cards - Enhanced Glassmorphic Style */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.2, duration: 0.8 }}
                        className="hidden lg:flex absolute -left-52 top-1/2 -translate-y-1/2 w-48 bg-black/40 backdrop-blur-2xl rounded-2xl p-5 shadow-2xl border-2 border-indigo-500/30 group-hover:scale-105 group-hover:border-indigo-400/50 transition-all duration-500"
                        style={{
                            boxShadow: '0 0 40px rgba(139, 92, 246, 0.2), 0 20px 60px rgba(0, 0, 0, 0.5), inset 0 0 20px rgba(139, 92, 246, 0.05)'
                        }}
                    >
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-indigo-600/30 backdrop-blur-sm rounded-xl flex items-center justify-center border border-indigo-400/30 shadow-lg">
                                <Code2 size={22} className="text-indigo-300" strokeWidth={2} />
                            </div>
                            <div>
                                <p className="text-white font-black text-2xl leading-none mb-1">50+</p>
                                <p className="text-slate-300 text-xs font-bold uppercase tracking-widest">Projects</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.4, duration: 0.8 }}
                        className="hidden lg:flex absolute -right-52 top-1/2 -translate-y-1/2 w-48 bg-black/40 backdrop-blur-2xl rounded-2xl p-5 shadow-2xl border-2 border-purple-500/30 group-hover:scale-105 group-hover:border-purple-400/50 transition-all duration-500"
                        style={{
                            boxShadow: '0 0 40px rgba(168, 85, 247, 0.2), 0 20px 60px rgba(0, 0, 0, 0.5), inset 0 0 20px rgba(168, 85, 247, 0.05)'
                        }}
                    >
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-purple-600/30 backdrop-blur-sm rounded-xl flex items-center justify-center border border-purple-400/30 shadow-lg">
                                <ShieldCheck size={22} className="text-purple-300" strokeWidth={2} />
                            </div>
                            <div>
                                <p className="text-white font-black text-2xl leading-none mb-1">5+</p>
                                <p className="text-slate-300 text-xs font-bold uppercase tracking-widest">Years Exp</p>
                            </div>
                        </div>
                    </motion.div>
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
        <section id="about" className="py-16 md:py-24 bg-black relative overflow-hidden transition-colors duration-1000">
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
                            className="cyber-card group"
                        >
                            <div className="corner-br"></div>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-slate-500 group-hover:text-white transition-all border border-white/5 shadow-inner">
                                    {item.icon}
                                </div>
                                <div className="cyber-header px-4 py-1.5 mb-0">
                                    <span>{item.title}</span>
                                </div>
                            </div>
                            <p className="text-sm text-slate-400 font-medium leading-relaxed tracking-tight group-hover:text-slate-200 transition-colors uppercase">{item.desc}</p>
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
        <section id="skills" className="py-16 md:py-20 bg-black relative overflow-hidden transition-colors duration-1000">
            <div className="absolute inset-0 grid-background opacity-10"></div>
            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <div className="max-w-3xl">
                        <div className="inline-block px-5 py-2.5 bg-white/5 text-indigo-400 text-[10px] font-black uppercase tracking-[0.4em] rounded-lg mb-10 border border-white/10 shadow-sm">
                            Technical Skills
                        </div>
                        <h2 className="text-3xl md:text-4xl font-display font-black text-white uppercase tracking-[-0.04em] leading-[0.9]">
                            Core Competen<span className="text-indigo-500">cies.</span>
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
                            <div className="cyber-card group h-full flex flex-col">
                                <div className="corner-br"></div>
                                <div className="flex items-center justify-between mb-8 relative z-10">
                                    <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-indigo-400 border border-white/10 shadow-2xl group-hover:bg-white group-hover:text-black transition-all duration-500">
                                        <SkillIcon category={skill.category} />
                                    </div>
                                    <div className="text-[8px] font-mono text-white/20 tracking-[0.5em] uppercase">Sector: 0{idx + 1}</div>
                                </div>

                                <div className="cyber-header px-4 py-2 mb-8">
                                    <span>{skill.category}</span>
                                </div>

                                <div className="grid grid-cols-2 gap-4 relative z-10">
                                    {skill.items.map((item, i) => (
                                        <div key={i} className="p-3 bg-white/5 border border-white/5 rounded-lg group-hover:border-white/20 transition-colors">
                                            <p className="text-[7px] font-black text-slate-500 uppercase tracking-widest mb-1">{item.name}</p>
                                            <div className="flex items-end justify-between">
                                                <span className="text-xs font-black text-white leading-none tracking-tight">{item.level}%</span>
                                                <div className="w-1 h-1 rounded-full bg-white/30"></div>
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
    const [showProjects, setShowProjects] = useState(false);

    const toggleProjects = () => {
        if (!showProjects) {
            setShowProjects(true);
            // Small delay to ensure the DOM has updated before scrolling
            setTimeout(() => {
                const element = document.getElementById('project-cards');
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        } else {
            const element = document.getElementById('project-cards');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <section id="projects" className="py-24 md:py-32 bg-black transition-colors duration-1000 relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                {/* Header Section */}
                <div className="flex flex-col items-center text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-5 py-2.5 bg-white/5 text-indigo-400 text-[10px] font-black uppercase tracking-[0.4em] rounded-lg mb-8 border border-white/10 shadow-sm"
                    >
                        Success Track
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-4xl md:text-5xl lg:text-7xl font-display font-black text-white uppercase tracking-[-0.04em] leading-none mb-12"
                    >
                        Tech Stack <span className="text-indigo-500">&</span> Projects<span className="text-indigo-500">.</span>
                    </motion.h2>

                    {/* Tech Stack Grid */}
                    <div className="grid grid-cols-4 md:grid-cols-8 gap-8 mb-16 max-w-5xl mx-auto items-center justify-center">
                        {TECH_STACK.map((tech, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                className="group relative flex flex-col items-center"
                            >
                                <div className="w-16 h-16 md:w-20 md:h-20 bg-white/5 rounded-2xl flex items-center justify-center p-4 border border-white/10 group-hover:border-indigo-500/50 transition-all duration-500 shadow-sm hover:shadow-indigo-500/20 group-hover:-translate-y-2">
                                    <img src={tech.logo} alt={tech.name} className="w-full h-full object-contain filter grayscale invert group-hover:grayscale-0 group-hover:invert-0 transition-all duration-500" />
                                </div>
                                <span className="absolute -bottom-8 text-[10px] font-black uppercase tracking-widest text-slate-500 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                    {tech.name}
                                </span>
                            </motion.div>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <motion.button
                        onClick={toggleProjects}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="group flex items-center space-x-4 bg-white text-slate-950 px-10 py-5 rounded-2xl font-black uppercase tracking-[0.3em] text-[11px] shadow-[0_20px_40px_rgba(255,255,255,0.1)] hover:bg-indigo-600 hover:text-white transition-all active:scale-95"
                    >
                        <span>{showProjects ? "Scroll to Projects" : "View My Projects"}</span>
                        <ChevronRight size={16} className={`group-hover:translate-x-1 transition-transform ${showProjects ? "rotate-90" : ""}`} />
                    </motion.button>
                </div>

                {/* Projects Section */}
                <AnimatePresence>
                    {showProjects && (
                        <motion.div
                            id="project-cards"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            className="grid lg:grid-cols-3 gap-8 scroll-mt-32 overflow-hidden"
                        >
                            {PROJECTS.map((project, idx) => (
                                <motion.div
                                    key={project.id}
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                                    className="group h-full"
                                >
                                    <div className="h-full flex flex-col bg-slate-900/40 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/5 hover:border-indigo-500/30 transition-all duration-700 relative shadow-2xl">
                                        {/* Project Image Box */}
                                        <div className="relative h-64 overflow-hidden">
                                            <div className="absolute inset-0 bg-indigo-600/5 group-hover:bg-transparent transition-colors duration-700 z-10"></div>
                                            <img
                                                src={project.image}
                                                alt={project.name}
                                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                                            />
                                            {/* Project Logo Overlay */}
                                            <div className="absolute bottom-6 left-6 z-20">
                                                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-slate-950 shadow-3xl group-hover:bg-indigo-600 group-hover:text-white transition-all duration-700 border border-white/10">
                                                    {idx === 0 ? <GraduationCap size={28} strokeWidth={1} /> : idx === 1 ? <ShieldCheck size={28} strokeWidth={1} /> : idx === 2 ? <FileText size={28} strokeWidth={1} /> : <Terminal size={28} strokeWidth={1} />}
                                                </div>
                                            </div>

                                            {/* Action Buttons Overlay */}
                                            <div className="absolute top-6 right-6 z-20 flex gap-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700">
                                                {project.github && <a href={project.github} className="w-12 h-12 bg-white/10 backdrop-blur-md text-white hover:bg-white hover:text-slate-950 rounded-xl transition-all border border-white/10 flex items-center justify-center shadow-xl md:bg-white md:text-black"><Github size={18} /></a>}
                                                {project.demo && <a href={project.demo} className="px-6 h-12 bg-indigo-600 text-white hover:bg-white hover:text-slate-950 text-[9px] font-black uppercase tracking-[0.2em] rounded-xl transition-all shadow-2xl flex items-center justify-center">Live Demo</a>}
                                            </div>
                                        </div>

                                        <div className="p-8 flex-1 flex flex-col relative z-10">
                                            <h3 className="text-2xl font-display font-black text-white mb-6 tracking-[-0.03em] uppercase leading-none">{project.name}</h3>

                                            <div className="mb-10">
                                                <p className="text-[9px] font-black text-indigo-400 uppercase tracking-[0.5em] mb-4">Challenge</p>
                                                <p className="text-base text-slate-400 font-medium leading-relaxed tracking-tight italic border-l-2 border-indigo-500/20 pl-6">{project.problem}</p>
                                            </div>

                                            <div className="mb-10">
                                                <p className="text-[9px] font-black text-slate-500 uppercase tracking-[0.5em] mb-4">Key Features</p>
                                                <ul className="space-y-4">
                                                    {project.features.map((f, i) => (
                                                        <li key={i} className="flex items-start text-slate-400 font-bold group/item">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-indigo-500/30 mt-2 mr-4 group-hover/item:bg-indigo-500 transition-all shadow-[0_0_8px_rgba(99,102,241,0.5)]"></div>
                                                            <span className="text-sm tracking-tight">{f}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div className="mt-auto pt-10 border-t border-white/5 flex flex-wrap gap-2.5">
                                                {project.tech.map((t, i) => (
                                                    <span key={i} className="px-4 py-2 bg-white/5 text-slate-400 text-[8px] font-black uppercase tracking-[0.3em] rounded-lg border border-white/5 group-hover:border-indigo-500/30 transition-colors">
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

// --- Experience & Education ---
// --- Professional Experience Component ---
export const ProfessionalExperience = () => {
    return (
        <section id="experience" className="py-24 md:py-32 bg-black relative overflow-hidden transition-colors duration-1000">
            {/* Ambient Background Elements - Minimalized */}
            <div className="absolute inset-0 bg-black"></div>
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/10 to-transparent opacity-20"></div>
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/10 to-transparent opacity-20"></div>

            {/* Atmospheric Glows - Nearly Imperceptible */}
            <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-indigo-600/2 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-purple-600/2 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-6 max-w-5xl relative z-10">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-5 py-2.5 bg-white/5 text-indigo-400 text-[10px] font-black uppercase tracking-[0.4em] rounded-lg mb-6 border border-white/10"
                    >
                        Success Track
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-white uppercase tracking-[-0.04em] leading-none"
                    >
                        Professional<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500">Experience.</span>
                    </motion.h2>
                </div>

                <div className="flex flex-col space-y-12">
                    {EXPERIENCE.map((exp, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: idx * 0.2 }}
                            className="group relative"
                        >
                            <div className="cyber-card group">
                                <div className="corner-br"></div>
                                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-10 relative z-10">
                                    <div className="space-y-4">
                                        <div className="flex items-center space-x-3 text-white">
                                            <Briefcase size={14} />
                                            <span className="text-[10px] font-black uppercase tracking-[0.4em]">{exp.period}</span>
                                        </div>
                                        <div>
                                            <div className="cyber-header px-4 py-2 mb-4">
                                                <span>{exp.role}</span>
                                            </div>
                                            <p className="text-slate-400 font-bold uppercase tracking-widest text-sm flex items-center">
                                                <span className="w-8 h-px bg-white/20 mr-3"></span>
                                                {exp.company}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-2 md:justify-end max-w-sm">
                                        {exp.tech && exp.tech.map((t, i) => (
                                            <div key={i} className="px-3 py-1.5 bg-white/5 border border-white/10 text-white/60 text-[8px] font-black uppercase tracking-widest rounded-md hover:bg-white hover:text-black transition-all">
                                                {t}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-12 gap-10 relative z-10">
                                    <div className="md:col-span-12 space-y-6">
                                        <p className="text-slate-300 font-medium leading-relaxed italic border-l-2 border-white/20 pl-6 mb-8 text-lg uppercase">
                                            {exp.description}
                                        </p>
                                        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
                                            {exp.bullets.map((bullet, i) => (
                                                <div key={i} className="flex items-start group/bullet">
                                                    <div className="w-1.5 h-1.5 border border-white/40 mt-2 mr-4 flex-shrink-0 group-hover/bullet:bg-white transition-all duration-300"></div>
                                                    <p className="text-sm text-slate-400 font-medium leading-relaxed group-hover:text-slate-200 transition-colors uppercase">
                                                        {bullet}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
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

// --- Education Component ---
export const Education = () => {
    return (
        <section id="education" className="py-24 bg-black transition-colors duration-1000 border-t border-white/5">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="mb-20">
                    <div className="inline-block px-5 py-2.5 bg-white/5 text-indigo-400 text-[10px] font-black uppercase tracking-[0.4em] rounded-lg mb-6 border border-white/10">
                        Academic History
                    </div>
                    <h2 className="text-3xl md:text-5xl font-display font-black text-white uppercase tracking-[-0.04em]">
                        Education<span className="text-indigo-500">.</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {EDUCATION.map((edu, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="cyber-card group"
                        >
                            <div className="corner-br"></div>
                            <div className="flex justify-between items-start mb-12 relative z-10">
                                <div className="cyber-header px-4 py-2 mb-0">
                                    <span>{edu.year}</span>
                                </div>
                                <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-white">
                                    <GraduationCap size={20} />
                                </div>
                            </div>

                            <h3 className="text-2xl font-display font-black text-white mb-6 uppercase leading-none tracking-tight relative z-10">
                                {edu.degree}
                            </h3>
                            <p className="text-slate-400 font-bold mb-10 text-sm uppercase tracking-widest bg-white/5 px-4 py-2 border border-white/10 rounded-lg inline-block relative z-10">
                                {edu.institution}
                            </p>

                            <div className="flex items-center text-[9px] font-black uppercase tracking-[0.4em] bg-white/[0.02] p-6 rounded-lg border border-white/5 relative z-10">
                                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mr-6 border border-white/10">
                                    <Terminal size={18} className="text-white" />
                                </div>
                                <div>
                                    <p className="text-slate-500 mb-1">Focus Architecture</p>
                                    <span className="text-white">{edu.focus}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}

                    <div className="space-y-4">
                        <div className="cyber-card group h-full flex flex-col justify-center">
                            <div className="corner-br"></div>
                            <h3 className="text-[10px] font-black text-slate-500 mb-10 uppercase tracking-[0.5em] relative z-10">Verified Logic & Status</h3>
                            <div className="grid gap-4 relative z-10">
                                {["AWS Architecture", "Cloud Engineering"].map((cert, idx) => (
                                    <div key={idx} className="flex items-center p-6 bg-white/5 rounded-lg border border-white/5 group hover:bg-white/10 transition-all duration-500">
                                        <div className="w-10 h-10 rounded-lg bg-black flex items-center justify-center text-white mr-6 border border-white/10 group-hover:scale-110 transition-all">
                                            <ShieldCheck size={20} />
                                        </div>
                                        <span className="text-white font-black uppercase tracking-widest text-[9px]">{cert}</span>
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
        <footer className="relative pt-24 pb-12 bg-black transition-colors duration-1000 overflow-hidden border-t border-white/5">
            {/* Ambient Background Glows - Neutralized */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/2 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/2 blur-[120px] rounded-full pointer-events-none"></div>

            {/* Top Border Gradient Glow */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
                    {/* Brand Section */}
                    <div className="lg:col-span-5 space-y-10">
                        <div className="flex items-center space-x-6 group">
                            <div className="relative w-16 h-16">
                                <div className="absolute inset-0 bg-indigo-600 blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                                <div className="relative w-full h-full bg-black rounded-2xl border border-white/10 flex items-center justify-center text-white font-display font-black text-2xl uppercase shadow-2xl overflow-hidden group-hover:border-indigo-500/50 transition-all duration-500">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-transparent"></div>
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
                                            <div className={`p-2 rounded-lg bg-white/5 text-slate-400 group-hover:text-white transition-colors duration-300 ${social.bgColor}`}>
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

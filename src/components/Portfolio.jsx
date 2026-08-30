import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Moon, Sun, Menu, X, Github, Linkedin, Mail, ExternalLink, Code2, Database, ShieldCheck, Terminal, GraduationCap, Briefcase, ChevronRight, Quote, Award, MapPin, Download, Loader2, ArrowUp } from 'lucide-react';
import { PROFILE, SKILLS, PROJECTS, PROJECT_TAGS, EXPERIENCE, EDUCATION, TECH_STACK, TESTIMONIALS, GITHUB_STATS, CERTIFICATIONS, PROFICIENCY_LABELS } from '../constants/data';

const proficiencyStyles = {
    expert: 'text-indigo-400 border-indigo-500/30 bg-indigo-500/10',
    proficient: 'text-white border-white/20 bg-white/5',
    learning: 'text-slate-500 border-white/10 bg-white/[0.02]',
};

// --- Scroll Progress Bar ---
export const ScrollProgress = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-indigo-500 z-[100] origin-left shadow-[0_0_10px_rgba(99,102,241,0.8)]"
            style={{ scaleX }}
        />
    );
};

// --- Back To Top Floating Button ---
export const BackToTop = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisible = () => {
            if (window.scrollY > 400) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };
        window.addEventListener('scroll', toggleVisible);
        return () => window.removeEventListener('scroll', toggleVisible);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <AnimatePresence>
            {visible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5, y: 20 }}
                    whileHover={{ scale: 1.1, y: -4 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={scrollToTop}
                    aria-label="Scroll to top"
                    className="fixed bottom-8 right-8 z-50 p-4 rounded-2xl bg-indigo-600/90 text-white backdrop-blur-md shadow-2xl border border-indigo-400/30 hover:bg-indigo-500 transition-colors"
                >
                    <ArrowUp size={18} />
                </motion.button>
            )}
        </AnimatePresence>
    );
};

const ProjectImage = ({ src, alt }) => {
    const [imageSrc, setImageSrc] = useState(src);

    useEffect(() => {
        setImageSrc(src);
    }, [src]);

    return (
        <img
            src={imageSrc}
            alt={alt}
            loading="lazy"
            decoding="async"
            onError={() => {
                if (imageSrc.endsWith('.png')) {
                    setImageSrc(imageSrc.replace('.png', '.svg'));
                }
            }}
            className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
        />
    );
};

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
        { name: 'Education', href: '#education' },
        { name: 'Resume', href: '#resume' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className={`fixed top-0 w-full z-50 transition-all duration-700 ${scrolled ? 'py-4' : 'py-10'}`}
        >
            <div className="container mx-auto px-6 max-w-7xl">
                <div className={`flex justify-between items-center transition-all duration-700 ${scrolled ? 'premium-glass rounded-2xl px-8 py-4' : 'px-4'}`}>
                    <motion.a 
                        href="#" 
                        className="flex items-center space-x-4 group"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <div className="w-10 h-10 bg-black dark:bg-black rounded-xl flex items-center justify-center text-white font-display font-black text-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-2xl relative overflow-hidden ring-1 ring-white/10">
                            K
                        </div>
                        <span className="text-2xl font-display font-black tracking-[0.1em] text-white uppercase">
                            Geofrey<span className="text-indigo-400">.</span>
                        </span>
                    </motion.a>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-2">
                        {navLinks.map((link) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                whileHover={{ y: -2 }}
                                whileTap={{ y: 0 }}
                                className="px-5 py-2 text-[11px] font-black uppercase tracking-[0.3em] text-slate-400 hover:text-white transition-all rounded-lg hover:bg-white/5 relative group/link"
                            >
                                {link.name}
                                <span className="absolute bottom-0 left-1/2 w-0 h-px bg-indigo-500 transition-all duration-300 -translate-x-1/2 group-hover/link:w-1/2 shadow-[0_0_8px_rgba(99,102,241,1)]"></span>
                            </motion.a>
                        ))}

                        <div className="flex items-center ml-6 space-x-6 pl-6 border-l border-white/10">
                            <motion.button
                                whileHover={{ scale: 1.1, rotate: 15 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                                className="w-10 h-10 rounded-xl bg-white/5 text-white hover:bg-white/10 transition-all flex items-center justify-center border border-white/10"
                            >
                                {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
                            </motion.button>

                            <motion.a
                                href={PROFILE.resumeUrl}
                                download
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-3.5 hidden lg:flex items-center space-x-3 bg-white text-black text-[11px] font-black uppercase tracking-[0.3em] rounded-xl hover:bg-indigo-500 hover:text-white transition-all shadow-2xl border border-white/10"
                            >
                                <span>View Resume</span>
                            </motion.a>
                        </div>
                    </div>

                    {/* Mobile Toggle */}
                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        className="md:hidden w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={20} /> : <Menu size={20} />}
                    </motion.button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        className="md:hidden absolute top-32 left-6 right-6 premium-glass rounded-3xl shadow-3xl overflow-hidden border border-white/20 p-6"
                    >
                        <div className="flex flex-col space-y-4">
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                    className="px-6 py-4 text-base font-black text-slate-400 hover:text-white flex items-center justify-between rounded-2xl hover:bg-white/5 transition-all uppercase tracking-[0.2em]"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name} <ChevronRight size={14} className="text-indigo-400" />
                                </motion.a>
                            ))}
                            <div className="pt-4 border-t border-white/5">
                                <a href={PROFILE.resumeUrl} download className="w-full py-5 bg-white text-black text-center rounded-2xl font-black uppercase tracking-[0.3em] text-xs shadow-2xl block">View Resume</a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

// --- Hero Component ---
export const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
    };

    return (
        <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden space-background">
            <div className="stars" aria-hidden="true"></div>
            <div className="absolute inset-0 bg-black/40 pointer-events-none" aria-hidden="true"></div>

            <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="container mx-auto px-6 relative z-10 flex flex-col items-center justify-center pt-28 pb-16"
            >
                {PROFILE.openToWork && (
                    <motion.div
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                        className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-[10px] font-black uppercase tracking-[0.3em] shadow-[0_0_15px_rgba(16,185,129,0.2)] cursor-default"
                    >
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true"></span>
                        Open to Work
                    </motion.div>
                )}

                <motion.div
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, rotate: 1 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                    className="relative mb-12 group cursor-pointer"
                >
                    <div className="relative w-52 h-52 md:w-64 md:h-64 overflow-hidden shadow-2xl z-10 rounded-full ring-2 ring-white/10">
                        <img
                            src={PROFILE.photo}
                            alt={`Portrait of ${PROFILE.name}`}
                            width={256}
                            height={256}
                            loading="eager"
                            className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-110 group-hover:scale-110 transition-all duration-700 ease-in-out"
                        />
                    </div>
                </motion.div>

                <motion.h1
                    variants={itemVariants}
                    className="text-3xl md:text-5xl lg:text-6xl font-display font-black text-white uppercase tracking-[0.15em] text-center mb-4 drop-shadow-lg"
                >
                    {PROFILE.name}
                </motion.h1>

                <motion.p
                    variants={itemVariants}
                    className="text-lg md:text-xl font-display font-bold text-indigo-400 uppercase tracking-[0.2em] text-center mb-4"
                >
                    {PROFILE.title}
                </motion.p>

                <motion.p
                    variants={itemVariants}
                    className="text-sm md:text-base text-slate-400 text-center max-w-2xl mx-auto mb-4 leading-relaxed font-light"
                >
                    {PROFILE.subtitle}
                </motion.p>

                <motion.div
                    variants={itemVariants}
                    className="flex flex-wrap items-center justify-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-10"
                >
                    <span className="flex items-center gap-2"><MapPin size={14} className="text-indigo-400 animate-bounce" /> {PROFILE.location}</span>
                    <span className="hidden sm:inline text-white/20">|</span>
                    <span>{PROFILE.availability}</span>
                </motion.div>

                <motion.div
                    variants={itemVariants}
                    className="flex flex-wrap items-center justify-center gap-4"
                >
                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 bg-white text-black text-[11px] font-black uppercase tracking-[0.3em] rounded-xl hover:bg-indigo-500 hover:text-white transition-all shadow-[0_10px_30px_rgba(255,255,255,0.15)]"
                    >
                        Get in Touch
                    </motion.a>
                    <motion.a
                        href={PROFILE.resumeUrl}
                        download
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 flex items-center gap-2 border border-white/20 text-white text-[11px] font-black uppercase tracking-[0.3em] rounded-xl hover:bg-white/10 transition-all"
                    >
                        <Download size={14} />
                        Resume
                    </motion.a>
                    <motion.a
                        href={`mailto:${PROFILE.email}`}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 flex items-center gap-2 border border-white/20 text-white text-[11px] font-black uppercase tracking-[0.3em] rounded-xl hover:bg-white/10 transition-all"
                    >
                        <Mail size={14} />
                        Email
                    </motion.a>
                </motion.div>
            </motion.div>
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
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            whileHover={{ y: -8, scale: 1.02 }}
                            transition={{ duration: 0.5, delay: 0.1 * i, type: "spring", stiffness: 200 }}
                            className="cyber-card group cursor-pointer"
                        >
                            <div className="corner-br"></div>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-slate-500 group-hover:text-indigo-400 group-hover:bg-indigo-500/10 group-hover:border-indigo-500/30 transition-all border border-white/5 shadow-inner">
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
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl"
                    >
                        <div className="inline-block px-5 py-2.5 bg-white/5 text-indigo-400 text-[10px] font-black uppercase tracking-[0.4em] rounded-lg mb-10 border border-white/10 shadow-sm">
                            Technical Skills
                        </div>
                        <h2 className="text-3xl md:text-4xl font-display font-black text-white uppercase tracking-[-0.04em] leading-[0.9]">
                            Core Competen<span className="text-indigo-500">cies.</span>
                        </h2>
                    </motion.div>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {SKILLS.map((skill, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            whileHover={{ y: -8, scale: 1.02 }}
                            transition={{ delay: idx * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            className="group h-full cursor-pointer"
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
                                        <motion.div 
                                            key={i} 
                                            whileHover={{ scale: 1.04 }}
                                            className="p-3 bg-white/5 border border-white/5 rounded-lg group-hover:border-white/20 transition-colors"
                                        >
                                            <p className="text-[7px] font-black text-slate-400 uppercase tracking-widest mb-2 group-hover:text-white transition-colors">{item.name}</p>
                                            <span className={`inline-block px-2 py-0.5 text-[7px] font-black uppercase tracking-widest rounded border ${proficiencyStyles[item.proficiency]}`}>
                                                {PROFICIENCY_LABELS[item.proficiency]}
                                            </span>
                                        </motion.div>
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

// --- Helper Components ---

const GitHubActivity = () => {
    const [stats, setStats] = useState({ repos: null, followers: null, loading: true, error: false });

    useEffect(() => {
        const controller = new AbortController();
        fetch(`https://api.github.com/users/${GITHUB_STATS.username}`, { signal: controller.signal })
            .then((res) => {
                if (!res.ok) throw new Error('GitHub user not found');
                return res.json();
            })
            .then((data) => {
                setStats({
                    repos: data.public_repos,
                    followers: data.followers,
                    loading: false,
                    error: false,
                });
            })
            .catch(() => {
                setStats({ repos: null, followers: null, loading: false, error: true });
            });
        return () => controller.abort();
    }, []);

    return (
        <motion.div 
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="cyber-card p-6 h-full flex flex-col justify-between"
        >
            <div className="corner-br"></div>
            <div className="flex-1">
                <div className="flex items-center space-x-3 mb-4 self-start w-full relative z-10">
                    <Github size={20} className="text-white" />
                    <h3 className="text-sm font-black uppercase tracking-[0.3em] text-white">GitHub Activity</h3>
                </div>

                <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-4 self-start relative z-10">
                    @{GITHUB_STATS.username}
                </p>

                <a
                    href={GITHUB_STATS.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mb-6 rounded-lg overflow-hidden border border-white/10 bg-black/40 hover:border-indigo-500/40 transition-colors relative z-10 group"
                    aria-label="View GitHub contribution graph"
                >
                    <img
                        src={GITHUB_STATS.contributionGraphUrl}
                        alt="GitHub contribution activity graph"
                        loading="lazy"
                        className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
                    />
                </a>

                {stats.loading ? (
                    <div className="flex items-center justify-center py-6 text-slate-500" aria-live="polite">
                        <Loader2 size={20} className="animate-spin" />
                    </div>
                ) : !stats.error && (
                    <div className="grid grid-cols-2 gap-4 w-full mb-4 relative z-10">
                        <div className="bg-white/5 p-4 border border-white/5 flex flex-col items-center justify-center rounded-lg">
                            <span className="text-xl font-black text-white">{stats.repos}</span>
                            <span className="text-[8px] text-slate-500 uppercase tracking-widest mt-1 text-center leading-none">Public Repos</span>
                        </div>
                        <div className="bg-white/5 p-4 border border-white/5 flex flex-col items-center justify-center rounded-lg">
                            <span className="text-xl font-black text-white">{stats.followers}</span>
                            <span className="text-[8px] text-slate-500 uppercase tracking-widest mt-1 text-center leading-none">Followers</span>
                        </div>
                    </div>
                )}
            </div>

            <motion.a
                href={GITHUB_STATS.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-white text-black hover:bg-indigo-600 hover:text-white transition-all flex items-center justify-center rounded-lg group relative z-10 mt-4 shadow-xl"
            >
                <Github size={16} className="mr-3 group-hover:scale-110 transition-transform" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em]">View GitHub Profile</span>
            </motion.a>
        </motion.div>
    );
};

// --- Projects Component ---
export const Projects = () => {
    const [showProjects, setShowProjects] = useState(false);
    const [activeTag, setActiveTag] = useState('All');

    const filteredProjects = activeTag === 'All'
        ? PROJECTS
        : PROJECTS.filter((p) => p.tag === activeTag);

    const toggleProjects = () => {
        if (!showProjects) {
            setShowProjects(true);
            setTimeout(() => {
                const element = document.getElementById('project-cards');
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        } else {
            setShowProjects(false);
        }
    };

    return (
        <section id="projects" className="py-24 md:py-32 bg-black transition-colors duration-1000 relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="flex flex-col items-center text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-5 py-2.5 bg-white/5 text-indigo-400 text-[10px] font-black uppercase tracking-[0.4em] rounded-lg mb-8 border border-white/10 shadow-sm"
                    >
                        Portfolio
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-2xl md:text-3xl lg:text-4xl font-display font-black text-white uppercase tracking-[-0.04em] leading-none mb-12"
                    >
                        Tech Stack <span className="text-indigo-500">&</span> Projects<span className="text-indigo-500">.</span>
                    </motion.h2>

                    <div className="grid grid-cols-4 md:grid-cols-8 gap-8 mb-16 max-w-5xl mx-auto items-center justify-center">
                        {TECH_STACK.map((tech, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.15, y: -6 }}
                                transition={{ delay: idx * 0.05, type: 'spring', stiffness: 300 }}
                                className="group relative flex flex-col items-center cursor-pointer"
                            >
                                <div className="w-16 h-16 md:w-20 md:h-20 bg-white/5 rounded-2xl flex items-center justify-center p-4 border border-white/10 group-hover:border-indigo-500/50 transition-all duration-500 shadow-sm hover:shadow-indigo-500/20">
                                    <img src={tech.logo} alt={`${tech.name} logo`} loading="lazy" className={`w-full h-full object-contain transition-all duration-500 group-hover:scale-110 ${['Next.js', 'Express'].includes(tech.name) ? 'invert opacity-90' : ''}`} />
                                </div>
                                <span className="absolute -bottom-8 text-[10px] font-black uppercase tracking-widest text-slate-400 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                    {tech.name}
                                </span>
                            </motion.div>
                        ))}
                    </div>

                    <motion.button
                        onClick={toggleProjects}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ delay: 0.3 }}
                        className="group flex items-center space-x-4 bg-white text-slate-950 px-10 py-5 rounded-2xl font-black uppercase tracking-[0.3em] text-[11px] shadow-[0_20px_40px_rgba(255,255,255,0.15)] hover:bg-indigo-600 hover:text-white transition-all"
                    >
                        <span>{showProjects ? 'Hide Projects' : 'View My Projects'}</span>
                        <ChevronRight size={16} className={`group-hover:translate-x-1 transition-transform ${showProjects ? 'rotate-90' : ''}`} />
                    </motion.button>
                </div>

                <AnimatePresence>
                    {showProjects && (
                        <motion.div
                            id="project-cards"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            className="scroll-mt-32 overflow-hidden"
                        >
                            <div className="flex flex-wrap justify-center gap-3 mb-12">
                                {PROJECT_TAGS.map((tag) => (
                                    <motion.button
                                        key={tag}
                                        onClick={() => setActiveTag(tag)}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={`px-5 py-2 text-[10px] font-black uppercase tracking-[0.2em] rounded-lg border transition-all ${activeTag === tag
                                            ? 'bg-indigo-600 border-indigo-500 text-white shadow-[0_0_15px_rgba(99,102,241,0.5)]'
                                            : 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:border-white/20'
                                            }`}
                                    >
                                        {tag}
                                    </motion.button>
                                ))}
                            </div>

                            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                <AnimatePresence mode="popLayout">
                                    {filteredProjects.map((project, idx) => (
                                        <motion.div
                                            key={project.id}
                                            layout
                                            initial={{ opacity: 0, scale: 0.9, y: 30 }}
                                            animate={{ opacity: 1, scale: 1, y: 0 }}
                                            exit={{ opacity: 0, scale: 0.9, y: -20 }}
                                            whileHover={{ y: -8 }}
                                            transition={{ delay: idx * 0.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                            className="group h-full"
                                        >
                                            <div className="cyber-card group h-full flex flex-col cursor-pointer">
                                                <div className="corner-br"></div>
                                                <div className="relative h-56 overflow-hidden rounded-lg mb-6 border border-white/10 bg-slate-950">
                                                    <ProjectImage src={project.image} alt={`${project.name} preview`} />
                                                    {project.featured && (
                                                        <span className="absolute top-4 left-4 z-20 px-2 py-1 bg-indigo-600 text-white text-[8px] font-black uppercase tracking-widest rounded shadow-md">
                                                            Featured
                                                        </span>
                                                    )}
                                                    <div className="absolute top-4 right-4 z-20 flex gap-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                                                        {project.github && (
                                                            <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`${project.name} on GitHub`} className="w-10 h-10 bg-white/10 backdrop-blur-md text-white hover:bg-white hover:text-black rounded-lg transition-all border border-white/10 flex items-center justify-center shadow-xl">
                                                                <Github size={16} />
                                                            </a>
                                                        )}
                                                        {project.demo && (
                                                            <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label={`${project.name} live demo`} className="w-10 h-10 bg-indigo-600 text-white hover:bg-white hover:text-black rounded-lg transition-all shadow-2xl flex items-center justify-center">
                                                                <ExternalLink size={16} />
                                                            </a>
                                                        )}
                                                    </div>
                                                </div>
                                                <div className="flex-1 flex flex-col relative z-10">
                                                    <div className="flex items-center gap-2 mb-4">
                                                        <div className="cyber-header px-4 py-2 h-fit w-fit">
                                                            <span className="font-display">{project.name}</span>
                                                        </div>
                                                        <span className="text-[8px] font-black uppercase tracking-widest text-indigo-400 border border-indigo-500/30 px-2 py-1 rounded">
                                                            {project.tag}
                                                        </span>
                                                    </div>
                                                    <div className="mb-4">
                                                        <p className="text-[10px] text-slate-400 font-medium leading-relaxed italic border-l-2 border-white/10 pl-4 uppercase tracking-tight">{project.problem}</p>
                                                    </div>
                                                    <div className="mb-6">
                                                        <p className="text-[10px] text-emerald-400/90 font-bold leading-relaxed border-l-2 border-emerald-500/30 pl-4">{project.outcome}</p>
                                                    </div>
                                                    {project.demo && (
                                                        <a
                                                            href={project.demo}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="mb-4 inline-flex items-center gap-2 px-4 py-2 bg-indigo-600/20 border border-indigo-500/30 text-indigo-300 hover:bg-indigo-600 hover:text-white text-[9px] font-black uppercase tracking-widest rounded-lg transition-all"
                                                        >
                                                            <ExternalLink size={12} />
                                                            Live Demo
                                                        </a>
                                                    )}
                                                    <div className="mt-auto pt-6 border-t border-white/5 flex flex-wrap gap-2">
                                                        {project.tech.map((t, i) => (
                                                            <span key={i} className="px-3 py-1 bg-white/5 text-slate-500 text-[8px] font-black uppercase tracking-widest rounded transition-colors group-hover:text-white">
                                                                {t}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

// --- Experience ---
export const ProfessionalExperience = () => {
    return (
        <section id="experience" className="py-24 md:py-32 bg-black relative overflow-hidden transition-colors duration-1000">
            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="grid lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-8">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-16"
                        >
                            <div className="inline-block px-5 py-2.5 bg-white/5 text-indigo-400 text-[10px] font-black uppercase tracking-[0.4em] rounded-lg mb-6 border border-white/10">
                                Career Timeline
                            </div>
                            <h2 className="text-2xl md:text-4xl font-display font-black text-white uppercase tracking-[-0.04em]">
                                Professional <span className="text-indigo-500">Experience.</span>
                            </h2>
                        </motion.div>
                        <div className="space-y-8">
                            {EXPERIENCE.map((exp, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    whileHover={{ x: 6, y: -4 }}
                                    transition={{ delay: idx * 0.15, type: 'spring', stiffness: 200 }}
                                    className="cyber-card p-8 group cursor-pointer"
                                >
                                    <div className="corner-br"></div>
                                    <div className="relative z-10">
                                        <div className="flex flex-wrap items-center gap-3 mb-4">
                                            <span className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.2em]">{exp.period}</span>
                                            <span className="text-white/20">·</span>
                                            <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">{exp.company}</span>
                                        </div>
                                        <h3 className="text-lg font-display font-black text-white uppercase mb-3 group-hover:text-indigo-400 transition-colors">{exp.role}</h3>
                                        <p className="text-sm text-slate-400 mb-6 leading-relaxed">{exp.description}</p>
                                        <ul className="space-y-3 mb-6">
                                            {exp.bullets.map((bullet, i) => (
                                                <li key={i} className="flex gap-3 text-sm text-slate-300">
                                                    <ChevronRight size={14} className="text-indigo-400 flex-shrink-0 mt-1" />
                                                    {bullet}
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="flex flex-wrap gap-2">
                                            {exp.tech.map((t) => (
                                                <span key={t} className="px-3 py-1 bg-white/5 text-slate-500 group-hover:text-slate-300 text-[8px] font-black uppercase tracking-widest rounded transition-colors">{t}</span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                    <div className="lg:col-span-4 mt-12 lg:mt-0">
                        <GitHubActivity />
                    </div>
                </div>
            </div>
        </section>
    );
};

// --- Education ---
export const Education = () => {
    return (
        <section id="education" className="py-24 bg-black relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <div className="inline-block px-5 py-2.5 bg-white/5 text-indigo-400 text-[10px] font-black uppercase tracking-[0.4em] rounded-lg mb-6 border border-white/10">
                        Academic Background
                    </div>
                    <h2 className="text-2xl md:text-4xl font-display font-black text-white uppercase tracking-[-0.04em]">
                        Educat<span className="text-indigo-500">ion.</span>
                    </h2>
                </motion.div>
                <div className="grid md:grid-cols-2 gap-6">
                    {EDUCATION.map((edu, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -6, scale: 1.01 }}
                            transition={{ delay: idx * 0.15, type: 'spring', stiffness: 200 }}
                            className="cyber-card p-8 group cursor-pointer"
                        >
                            <div className="corner-br"></div>
                            <div className="flex items-start gap-4 relative z-10">
                                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                                    <GraduationCap size={22} />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.2em] mb-1">{edu.year}</p>
                                    <h3 className="text-lg font-display font-black text-white uppercase mb-1">{edu.degree}</h3>
                                    <p className="text-sm text-slate-400 mb-2">{edu.institution}</p>
                                    <p className="text-xs text-slate-500">{edu.focus}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// --- Certifications ---
export const Certifications = () => {
    return (
        <section id="certifications" className="py-24 bg-black relative overflow-hidden border-t border-white/5">
            <div className="container mx-auto px-6 max-w-7xl">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <div className="inline-block px-5 py-2.5 bg-white/5 text-indigo-400 text-[10px] font-black uppercase tracking-[0.4em] rounded-lg mb-6 border border-white/10">
                        Credentials
                    </div>
                    <h2 className="text-2xl md:text-4xl font-display font-black text-white uppercase tracking-[-0.04em]">
                        Certificat<span className="text-indigo-500">ions.</span>
                    </h2>
                </motion.div>
                <div className="grid md:grid-cols-3 gap-6">
                    {CERTIFICATIONS.map((cert, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -6, scale: 1.02 }}
                            transition={{ delay: idx * 0.1, type: 'spring', stiffness: 200 }}
                            className="cyber-card p-6 group cursor-pointer"
                        >
                            <div className="corner-br"></div>
                            <div className="relative z-10">
                                <Award size={20} className="text-indigo-400 mb-4 group-hover:scale-110 transition-transform" />
                                <h3 className="text-sm font-display font-black text-white uppercase mb-2">{cert.name}</h3>
                                <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">{cert.issuer}</p>
                                <p className="text-[10px] text-indigo-400 font-bold">{cert.year}</p>
                                {cert.credentialUrl && (
                                    <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 mt-4 text-[9px] font-black uppercase tracking-widest text-slate-400 hover:text-white transition-colors">
                                        Verify <ExternalLink size={12} />
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// --- Testimonials ---
export const Testimonials = () => {
    return (
        <section id="testimonials" className="py-24 md:py-32 bg-black relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <div className="inline-block px-5 py-2.5 bg-white/5 text-indigo-400 text-[10px] font-black uppercase tracking-[0.4em] rounded-lg mb-6 border border-white/10">
                        Recommendations
                    </div>
                    <h2 className="text-2xl md:text-4xl font-display font-black text-white uppercase tracking-[-0.04em]">
                        What People <span className="text-indigo-500">Say.</span>
                    </h2>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {TESTIMONIALS.map((t, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -8, scale: 1.02 }}
                            transition={{ delay: idx * 0.1, type: 'spring', stiffness: 200 }}
                            className="cyber-card p-8 group cursor-pointer"
                        >
                            <div className="corner-br"></div>
                            <div className="relative z-10">
                                <Quote size={20} className="text-indigo-400 mb-6 group-hover:scale-110 transition-transform" />
                                <p className="text-lg text-slate-300 font-testimonial leading-relaxed mb-8">"{t.text}"</p>
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-black text-xs shadow-lg">{t.avatar}</div>
                                    <div>
                                        <h4 className="text-sm font-display font-black text-white uppercase">{t.name}</h4>
                                        <p className="text-[10px] text-slate-500 uppercase tracking-widest">{t.role}</p>
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

// --- Contact Component ---
export const Contact = () => {
    const [formState, setFormState] = useState({ name: '', email: '', subject: 'Backend Development', message: '' });
    const [status, setStatus] = useState('idle'); // idle | sending | success | error

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!PROFILE.formspreeEndpoint) {
            window.location.href = `mailto:${PROFILE.email}?subject=${encodeURIComponent(formState.subject)}&body=${encodeURIComponent(`From: ${formState.name} (${formState.email})\n\n${formState.message}`)}`;
            return;
        }

        setStatus('sending');
        try {
            const res = await fetch(PROFILE.formspreeEndpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                body: JSON.stringify({
                    name: formState.name,
                    email: formState.email,
                    subject: formState.subject,
                    message: formState.message,
                }),
            });
            if (!res.ok) throw new Error('Failed to send');
            setStatus('success');
            setFormState({ name: '', email: '', subject: 'Backend Development', message: '' });
        } catch {
            setStatus('error');
        }
    };

    const bookCallHref = PROFILE.calendlyUrl || `mailto:${PROFILE.email}?subject=Schedule%20a%20call`;

    return (
        <section id="contact" className="py-32 bg-black relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-24 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-display font-black text-white uppercase tracking-tighter mb-8 italic">
                        Let's Build Something Together<span className="text-indigo-500">.</span>
                    </h2>
                    <p className="text-slate-500 uppercase tracking-[0.3em] text-[11px] font-bold max-w-2xl mx-auto leading-relaxed">
                        Ready to harden your systems or build high-performance backend architecture? Connect with me for a technical consultation.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-4 space-y-8">
                        <motion.div 
                            whileHover={{ y: -6, scale: 1.02 }}
                            transition={{ type: 'spring', stiffness: 200 }}
                            className="cyber-card p-10 group hover:bg-white/[0.02] transition-colors h-[280px] flex flex-col justify-between cursor-pointer"
                        >
                            <div className="corner-br"></div>
                            <div>
                                <div className="w-14 h-14 bg-white/5 border border-white/10 flex items-center justify-center text-white mb-8 group-hover:scale-110 group-hover:bg-indigo-600 transition-all duration-500 rounded-lg">
                                    <Mail size={24} />
                                </div>
                                <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em] mb-4 block">Email</span>
                                <p className="text-[11px] text-white font-bold leading-relaxed mb-6 uppercase tracking-widest">Have questions? I'm here for you</p>
                            </div>
                            <a href={`mailto:${PROFILE.email}`} className="text-xs font-black text-indigo-400 hover:text-white transition-colors tracking-widest border-b border-indigo-400/30 pb-1 w-fit uppercase">{PROFILE.email}</a>
                        </motion.div>

                        <motion.div 
                            whileHover={{ y: -6, scale: 1.02 }}
                            transition={{ type: 'spring', stiffness: 200 }}
                            className="cyber-card p-10 group hover:bg-white/[0.02] transition-colors h-[280px] flex flex-col justify-between cursor-pointer"
                        >
                            <div className="corner-br"></div>
                            <div>
                                <div className="w-14 h-14 bg-white/5 border border-white/10 flex items-center justify-center text-white mb-8 group-hover:scale-110 group-hover:bg-indigo-600 transition-all duration-500 rounded-lg">
                                    <Terminal size={24} />
                                </div>
                                <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em] mb-4 block">Direct Call</span>
                                <p className="text-[11px] text-white font-bold leading-relaxed mb-6 uppercase tracking-widest">Talk to me fast, no hassle.</p>
                            </div>
                            <a href={`tel:${PROFILE.phone.replace(/\s/g, '')}`} className="text-xs font-black text-indigo-400 hover:text-white transition-colors tracking-widest uppercase">{PROFILE.phone}</a>
                        </motion.div>

                        <motion.div 
                            whileHover={{ y: -6, scale: 1.02 }}
                            transition={{ type: 'spring', stiffness: 200 }}
                            className="cyber-card p-10 group hover:bg-white/[0.02] transition-colors h-[280px] flex flex-col justify-between cursor-pointer"
                        >
                            <div className="corner-br"></div>
                            <div>
                                <div className="w-14 h-14 bg-white/5 border border-white/10 flex items-center justify-center text-white mb-8 group-hover:scale-110 group-hover:bg-indigo-600 transition-all duration-500 rounded-lg">
                                    <Briefcase size={24} />
                                </div>
                                <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em] mb-4 block">Consultation</span>
                                <p className="text-[11px] text-white font-bold leading-relaxed mb-6 uppercase tracking-widest">Book a call if that feels more convenient.</p>
                            </div>
                            <a href={bookCallHref} target={PROFILE.calendlyUrl ? '_blank' : undefined} rel={PROFILE.calendlyUrl ? 'noopener noreferrer' : undefined} className="text-xs font-black text-indigo-400 hover:text-white transition-colors tracking-widest border-b border-indigo-400/30 pb-1 w-fit uppercase font-display">Book a call</a>
                        </motion.div>
                    </div>

                    <div className="lg:col-span-8">
                        <div className="cyber-card p-10 h-full">
                            <div className="corner-br"></div>
                            <form className="space-y-10 relative z-10" onSubmit={handleSubmit}>
                                <div className="grid md:grid-cols-2 gap-10">
                                    <div className="space-y-4">
                                        <label htmlFor="contact-name" className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em]">Full Name</label>
                                        <input
                                            id="contact-name"
                                            name="name"
                                            type="text"
                                            required
                                            value={formState.name}
                                            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                            placeholder="Your Name"
                                            className="w-full bg-white/5 border border-white/10 px-6 py-5 rounded-lg text-white text-xs font-bold focus:outline-none focus:border-indigo-500/50 focus:bg-white/[0.07] transition-all placeholder:text-slate-700 placeholder:uppercase placeholder:tracking-widest"
                                        />
                                    </div>
                                    <div className="space-y-4">
                                        <label htmlFor="contact-email" className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em]">Email Address</label>
                                        <input
                                            id="contact-email"
                                            name="email"
                                            type="email"
                                            required
                                            value={formState.email}
                                            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                            placeholder="Email Address"
                                            className="w-full bg-white/5 border border-white/10 px-6 py-5 rounded-lg text-white text-xs font-bold focus:outline-none focus:border-indigo-500/50 focus:bg-white/[0.07] transition-all placeholder:text-slate-700 placeholder:uppercase placeholder:tracking-widest"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <label htmlFor="contact-subject" className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em]">Subject of Interest</label>
                                    <select
                                        id="contact-subject"
                                        name="subject"
                                        value={formState.subject}
                                        onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                                        className="w-full bg-white/5 border border-white/10 px-6 py-5 rounded-lg text-white text-xs font-bold focus:outline-none focus:border-indigo-500/50 focus:bg-white/[0.07] transition-all appearance-none cursor-pointer uppercase tracking-widest"
                                    >
                                        <option className="bg-slate-950" value="Backend Development">Backend Development</option>
                                        <option className="bg-slate-950" value="System Architecture">System Architecture</option>
                                        <option className="bg-slate-950" value="Cloud Infrastructure">Cloud Infrastructure</option>
                                        <option className="bg-slate-950" value="Security Hardening">Security Hardening</option>
                                        <option className="bg-slate-950" value="Freelance Project">Freelance Project</option>
                                    </select>
                                </div>

                                <div className="space-y-4">
                                    <label htmlFor="contact-message" className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em]">How may I assist you?</label>
                                    <textarea
                                        id="contact-message"
                                        name="message"
                                        required
                                        rows="6"
                                        value={formState.message}
                                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                        placeholder="Detailed project requirements..."
                                        className="w-full bg-white/5 border border-white/10 px-6 py-5 rounded-lg text-white text-xs font-bold focus:outline-none focus:border-indigo-500/50 focus:bg-white/[0.07] transition-all resize-none placeholder:text-slate-700 placeholder:uppercase placeholder:tracking-widest"
                                    ></textarea>
                                </div>

                                {status === 'success' && (
                                    <p className="text-sm text-emerald-400 font-bold" role="status">Message sent successfully. I'll get back to you soon.</p>
                                )}
                                {status === 'error' && (
                                    <p className="text-sm text-red-400 font-bold" role="alert">Something went wrong. Please email me directly.</p>
                                )}
                                {!PROFILE.formspreeEndpoint && (
                                    <p className="text-[10px] text-slate-600 uppercase tracking-widest">No Formspree configured — submit opens your email client. Add VITE_FORMSPREE_ENDPOINT to .env for direct delivery.</p>
                                )}

                                <motion.button
                                    type="submit"
                                    disabled={status === 'sending'}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full py-6 bg-white text-black hover:bg-indigo-600 hover:text-white transition-all rounded-xl font-black uppercase tracking-[0.5em] text-xs shadow-2xl group disabled:opacity-60 disabled:cursor-not-allowed"
                                >
                                    <span className="flex items-center justify-center gap-3">
                                        {status === 'sending' ? (
                                            <><Loader2 size={16} className="animate-spin" /> Sending...</>
                                        ) : (
                                            <>Send Request<ChevronRight size={16} className="group-hover:translate-x-2 transition-transform" /></>
                                        )}
                                    </span>
                                </motion.button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// --- Footer Component ---
export const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Experience', href: '#experience' },
        { name: 'Education', href: '#education' },
        { name: 'Contact', href: '#contact' },
    ];

    const socialLinks = [
        { name: 'GitHub', icon: <Github size={18} />, href: PROFILE.github, label: 'SOURCE', bgColor: 'group-hover:bg-slate-800' },
        { name: 'LinkedIn', icon: <Linkedin size={18} />, href: PROFILE.linkedin, label: 'NETWORK', bgColor: 'group-hover:bg-[#0077b5]/10' },
        { name: 'Email', icon: <Mail size={18} />, href: `mailto:${PROFILE.email}`, label: 'INBOX', bgColor: 'group-hover:bg-indigo-600/10' },
    ];

    return (
        <footer className="relative pt-24 pb-12 bg-black transition-colors duration-1000 overflow-hidden border-t border-white/10">
            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
                    {/* Brand Section */}
                    <div className="lg:col-span-5 space-y-10">
                        <div className="flex items-center space-x-6 group">
                            <div className="relative w-16 h-16">
                                <div className="relative w-full h-full bg-black rounded-2xl border border-white/10 flex items-center justify-center text-white font-display font-black text-2xl uppercase shadow-2xl overflow-hidden group-hover:border-indigo-500/50 transition-all duration-500">
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
                            {PROFILE.summary}
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
                                        target={social.name !== 'Email' ? '_blank' : undefined}
                                        rel={social.name !== 'Email' ? 'noopener noreferrer' : undefined}
                                        className="flex items-center justify-between group p-3 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/10 transition-all duration-300"
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

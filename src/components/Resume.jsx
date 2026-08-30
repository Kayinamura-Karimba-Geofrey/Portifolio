import React from 'react';
import { motion } from 'framer-motion';
import {
    Mail, Phone, MapPin, Github, Linkedin, ExternalLink,
    Code2, Database, ShieldCheck, Terminal, GraduationCap,
    Briefcase, Award, ChevronRight, Printer, Globe
} from 'lucide-react';
import {
    PROFILE, SKILLS, EXPERIENCE, EDUCATION,
    CERTIFICATIONS, PROJECTS,
} from '../constants/data';

/* ── helpers ── */
const profColor = {
    expert: 'bg-indigo-500/10 border-indigo-500/40 text-indigo-300',
    proficient: 'bg-sky-500/10 border-sky-500/30 text-sky-400',
    learning: 'bg-white/5 border-white/10 text-slate-500',
};

const SectionHeading = ({ icon: Icon, label }) => (
    <div className="flex items-center gap-3 mb-5">
        <div className="w-7 h-7 rounded-md bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center flex-shrink-0">
            <Icon size={13} className="text-indigo-400" />
        </div>
        <span className="text-[9px] font-black uppercase tracking-[0.4em] text-white font-display">
            {label}
        </span>
        <div className="flex-1 h-px bg-gradient-to-r from-indigo-500/30 to-transparent" />
    </div>
);

const TimelineBullet = ({ text }) => (
    <li className="flex items-start gap-2 mb-1.5 text-slate-400 text-[9px] leading-relaxed">
        <ChevronRight size={10} className="text-indigo-400 mt-0.5 flex-shrink-0" />
        <span>{text}</span>
    </li>
);

/* ── main component ── */
const Resume = () => {
    const featuredProjects = PROJECTS.filter(p => p.featured).slice(0, 4);

    return (
        <section id="resume" className="py-20 md:py-32 bg-black relative overflow-hidden">
            <div className="absolute inset-0 grid-background opacity-10" />

            <div className="container mx-auto px-4 sm:px-6 max-w-5xl relative z-10">

                {/* ── Page header ── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6"
                >
                    <div>
                        <div className="inline-block px-4 py-2 bg-white/5 text-indigo-400 text-[10px] font-black uppercase tracking-[0.4em] rounded-lg mb-5 border border-white/10">
                            Professional Profile
                        </div>
                        <h2 className="text-3xl md:text-4xl font-display font-black text-white uppercase tracking-[-0.04em] leading-none">
                            My Resu<span className="text-indigo-500">me.</span>
                        </h2>
                    </div>
                    <motion.button
                        onClick={() => window.print()}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black text-[10px] font-black uppercase tracking-[0.3em] rounded-xl hover:bg-indigo-500 hover:text-white transition-all shadow-xl self-start sm:self-auto"
                    >
                        <Printer size={13} />
                        Print / Save PDF
                    </motion.button>
                </motion.div>

                {/* ══════════ RESUME CARD ══════════ */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    id="resume-paper"
                    className="bg-[#050508] border border-white/8 overflow-hidden shadow-[0_40px_120px_rgba(0,0,0,0.8),0_0_0_1px_rgba(99,102,241,0.08)]"
                >
                    {/* top accent bar */}
                    <div className="h-[3px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />

                    {/* ══ HEADER ══ */}
                    <div className="flex flex-col sm:flex-row gap-5 sm:gap-8 p-6 sm:p-10 border-b border-white/5 bg-indigo-500/[0.03]">
                        {/* Photo */}
                        <div className="flex-shrink-0 flex sm:block justify-center">
                            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 border-indigo-500/40 overflow-hidden shadow-[0_0_0_4px_rgba(99,102,241,0.1),0_0_30px_rgba(99,102,241,0.2)] bg-black">
                                <img
                                    src={PROFILE.photo}
                                    alt={PROFILE.name}
                                    className="w-full h-full object-cover object-top"
                                />
                            </div>
                        </div>

                        {/* Identity block */}
                        <div className="flex-1 text-center sm:text-left">
                            <div className="text-[8px] font-bold tracking-[0.5em] uppercase text-indigo-400 mb-1">
                                Curriculum Vitae
                            </div>
                            <h1 className="text-xl sm:text-2xl md:text-3xl font-display font-black text-white uppercase tracking-tight leading-tight mb-1">
                                {PROFILE.name}
                            </h1>
                            <div className="text-[10px] sm:text-xs font-bold text-indigo-400 uppercase tracking-[0.2em] mb-4">
                                {PROFILE.title}
                            </div>
                            <p className="text-[9px] sm:text-[10px] text-slate-400 leading-relaxed max-w-md mx-auto sm:mx-0 mb-4">
                                {PROFILE.summary}
                            </p>

                            {/* Contact grid */}
                            <div className="flex flex-wrap justify-center sm:justify-start gap-x-4 gap-y-2">
                                {[
                                    { icon: Mail, text: PROFILE.email, href: `mailto:${PROFILE.email}` },
                                    { icon: Phone, text: PROFILE.phone },
                                    { icon: MapPin, text: PROFILE.location },
                                    { icon: Globe, text: PROFILE.siteUrl?.replace('https://', ''), href: PROFILE.siteUrl },
                                    { icon: Github, text: 'GitHub', href: PROFILE.github },
                                    { icon: Linkedin, text: 'LinkedIn', href: PROFILE.linkedin },
                                ].map(({ icon: Icon, text, href }, i) => (
                                    <span key={i} className="flex items-center gap-1.5">
                                        <Icon size={10} className="text-indigo-400 flex-shrink-0" />
                                        {href ? (
                                            <a href={href} target="_blank" rel="noopener noreferrer"
                                                className="text-[9px] text-slate-400 hover:text-indigo-400 transition-colors">
                                                {text}
                                            </a>
                                        ) : (
                                            <span className="text-[9px] text-slate-400">{text}</span>
                                        )}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Open-to-work badge */}
                        {PROFILE.openToWork && (
                            <div className="flex sm:flex-col items-center sm:items-end justify-center gap-2 sm:gap-0 flex-shrink-0">
                                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/8 text-[8px] font-black uppercase tracking-[0.3em] text-emerald-400">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                    Open to Work
                                </div>
                                <span className="text-[8px] text-slate-500 text-center max-w-[100px] sm:mt-1.5 leading-relaxed hidden sm:block">
                                    {PROFILE.availability}
                                </span>
                            </div>
                        )}
                    </div>

                    {/* ══ BODY — stacks on mobile, 2 cols on md+ ══ */}
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_260px]">

                        {/* ── LEFT / MAIN ── */}
                        <div className="p-6 sm:p-9 md:border-r border-white/5 space-y-10">

                            {/* EXPERIENCE */}
                            <div>
                                <SectionHeading icon={Briefcase} label="Professional Experience" />
                                <div className="space-y-6">
                                    {EXPERIENCE.map((exp, i) => (
                                        <div key={i} className={`pl-4 border-l-2 ${i === 0 ? 'border-indigo-500' : 'border-white/10'}`}>
                                            <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                                                <span className="text-[10px] sm:text-[11px] font-black text-white uppercase tracking-wide font-display">
                                                    {exp.role}
                                                </span>
                                                <span className="text-[8px] font-bold text-indigo-400 bg-indigo-500/10 border border-indigo-500/30 px-2.5 py-0.5 rounded-full tracking-widest flex-shrink-0">
                                                    {exp.period}
                                                </span>
                                            </div>
                                            <div className="text-[9px] font-semibold text-indigo-400 mb-3">{exp.company}</div>
                                            <ul className="m-0 p-0 list-none space-y-1">
                                                {exp.bullets.map((b, j) => <TimelineBullet key={j} text={b} />)}
                                            </ul>
                                            <div className="flex flex-wrap gap-1.5 mt-3">
                                                {exp.tech.map((t, j) => (
                                                    <span key={j} className="text-[7.5px] font-bold uppercase tracking-wider text-slate-500 bg-white/5 border border-white/8 px-2 py-0.5 rounded-sm">
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* PROJECTS */}
                            <div>
                                <SectionHeading icon={Code2} label="Featured Projects" />
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {featuredProjects.map((project, i) => (
                                        <div key={i} className="p-4 bg-white/[0.03] border border-white/8 border-t-2 border-t-indigo-500 rounded-sm">
                                            <div className="flex items-start justify-between gap-2 mb-1.5">
                                                <span className="text-[10px] font-black text-white font-display leading-tight">
                                                    {project.name}
                                                </span>
                                                {project.demo && (
                                                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex-shrink-0 mt-0.5">
                                                        <ExternalLink size={10} className="text-indigo-400 hover:text-white transition-colors" />
                                                    </a>
                                                )}
                                            </div>
                                            <p className="text-[8.5px] text-slate-400 leading-relaxed mb-2.5">{project.outcome}</p>
                                            <div className="flex flex-wrap gap-1">
                                                {project.tech.slice(0, 4).map((t, j) => (
                                                    <span key={j} className="text-[7px] font-bold uppercase tracking-wider text-slate-500 bg-indigo-500/5 border border-indigo-500/20 px-1.5 py-0.5 rounded-sm">
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* EDUCATION */}
                            <div>
                                <SectionHeading icon={GraduationCap} label="Education" />
                                {EDUCATION.map((edu, i) => (
                                    <div key={i} className="pl-4 border-l-2 border-indigo-500">
                                        <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                                            <span className="text-[10px] sm:text-[11px] font-black text-white uppercase tracking-wide font-display">
                                                {edu.degree}
                                            </span>
                                            <span className="text-[8px] font-bold text-indigo-400 bg-indigo-500/10 border border-indigo-500/30 px-2.5 py-0.5 rounded-full tracking-widest flex-shrink-0">
                                                {edu.year}
                                            </span>
                                        </div>
                                        <div className="text-[9px] font-semibold text-indigo-400 mb-1">{edu.institution}</div>
                                        <div className="text-[9px] text-slate-400">{edu.focus}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* ── RIGHT / SIDEBAR ── */}
                        <div className="p-6 sm:p-9 md:p-7 bg-indigo-500/[0.015] space-y-8 border-t md:border-t-0 border-white/5">

                            {/* SKILLS */}
                            <div>
                                <SectionHeading icon={Terminal} label="Technical Skills" />
                                <div className="space-y-4">
                                    {SKILLS.map((skillGroup, i) => (
                                        <div key={i}>
                                            <div className="text-[8px] font-black tracking-[0.3em] uppercase text-indigo-400 mb-2">
                                                {skillGroup.category}
                                            </div>
                                            <div className="flex flex-wrap gap-1.5">
                                                {skillGroup.items.map((item, j) => (
                                                    <span key={j} className={`inline-flex items-center gap-1 text-[8px] px-2 py-0.5 rounded-sm border font-semibold ${profColor[item.proficiency]}`}>
                                                        <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${item.proficiency === 'expert' ? 'bg-indigo-400' : item.proficiency === 'proficient' ? 'bg-sky-400' : 'bg-slate-500'}`} />
                                                        {item.name}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="h-px bg-white/5" />

                            {/* CERTIFICATIONS */}
                            <div>
                                <SectionHeading icon={Award} label="Certifications" />
                                <div className="space-y-3">
                                    {CERTIFICATIONS.map((cert, i) => (
                                        <div key={i} className="p-3 bg-white/[0.03] border border-white/8 border-l-2 border-l-indigo-500 rounded-sm">
                                            <div className="text-[9px] font-bold text-white mb-1 leading-snug">{cert.name}</div>
                                            <div className="flex justify-between items-center">
                                                <span className="text-[8px] text-slate-500">{cert.issuer}</span>
                                                <span className={`text-[7.5px] font-bold tracking-wider ${cert.year === 'In Progress' ? 'text-yellow-400' : 'text-indigo-400'}`}>
                                                    {cert.year}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="h-px bg-white/5" />

                            {/* AT A GLANCE */}
                            <div>
                                <SectionHeading icon={Code2} label="At a Glance" />
                                <div className="space-y-2">
                                    {[
                                        { label: 'Projects Delivered', value: '6+' },
                                        { label: 'Languages & Frameworks', value: '14+' },
                                        { label: 'Years of Study', value: '3+' },
                                        { label: 'API Latency Reduced', value: '~40%' },
                                    ].map(({ label, value }, i) => (
                                        <div key={i} className="flex justify-between items-center px-3 py-2.5 bg-white/[0.03] border border-white/8 rounded-sm">
                                            <span className="text-[9px] text-slate-400">{label}</span>
                                            <span className="text-sm font-black text-white font-display">{value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ══ FOOTER ══ */}
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-2 px-6 sm:px-10 py-4 border-t border-white/5 bg-indigo-500/[0.03]">
                        <span className="text-[7.5px] text-slate-500 uppercase tracking-[0.2em]">
                            Kayinamura Karimba Geofrey · {PROFILE.location}
                        </span>
                        <span className="text-[7.5px] text-slate-500 uppercase tracking-[0.2em] text-center">
                            {PROFILE.email} · {PROFILE.siteUrl}
                        </span>
                    </div>

                    {/* bottom accent bar */}
                    <div className="h-[2px] bg-gradient-to-r from-transparent via-indigo-500/60 to-transparent" />
                </motion.div>

                {/* Hint */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="text-center text-[9px] text-slate-600 mt-5 uppercase tracking-[0.3em]"
                >
                    Print / Save PDF → paper size A4 → margins: none
                </motion.p>
            </div>

            {/* Print styles */}
            <style>{`
                @media print {
                    body > * { display: none !important; }
                    #resume { display: block !important; padding: 0 !important; }
                    #resume > * { display: none !important; }
                    #resume-paper { display: block !important; position: fixed; inset: 0; border: none !important; box-shadow: none !important; border-radius: 0 !important; }
                    #resume-paper * { display: revert !important; }
                    @page { size: A4; margin: 0; }
                }
            `}</style>
        </section>
    );
};

export default Resume;

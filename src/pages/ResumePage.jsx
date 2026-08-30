import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Mail, Phone, MapPin, Github, Linkedin, Globe,
    ArrowLeft, Printer, Code2, Database, ShieldCheck,
    Terminal, GraduationCap, Briefcase, Award, ChevronRight,
    ExternalLink,
} from 'lucide-react';
import { PROFILE, SKILLS, EXPERIENCE, EDUCATION, CERTIFICATIONS, PROJECTS } from '../constants/data';

/* ─────────── helpers ─────────── */

const NavDot = () => (
    <span className="inline-block w-1.5 h-1.5 rounded-full bg-sky-400 mr-2 flex-shrink-0 mt-[5px]" />
);

const SideLabel = ({ children }) => (
    <h3 className="text-[8px] font-black uppercase tracking-[0.35em] text-sky-400 mb-3 pb-1.5 border-b border-white/10">
        {children}
    </h3>
);

const MainLabel = ({ icon: Icon, children }) => (
    <div className="flex items-center gap-2 mb-4">
        <div className="w-7 h-7 rounded bg-[#1a2744] border border-[#2a3f6e] flex items-center justify-center flex-shrink-0">
            <Icon size={13} className="text-sky-400" />
        </div>
        <h3 className="text-[10px] font-black uppercase tracking-[0.35em] text-[#1a2744]">
            {children}
        </h3>
        <div className="flex-1 h-px bg-[#1a2744]/20" />
    </div>
);

const Bullet = ({ text }) => (
    <li className="flex items-start gap-2 mb-1.5 text-[9.5px] text-[#374151] leading-relaxed">
        <ChevronRight size={10} className="text-sky-500 mt-0.5 flex-shrink-0" />
        <span>{text}</span>
    </li>
);

const Tag = ({ children, navy }) => (
    <span className={`inline-block text-[7.5px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-sm border ${navy
        ? 'bg-[#1a2744]/10 border-[#1a2744]/25 text-[#1a2744]'
        : 'bg-sky-50 border-sky-200 text-sky-700'
        }`}>
        {children}
    </span>
);

/* ─────────── main ─────────── */
const ResumePage = () => {
    const navigate = useNavigate();
    const featuredProjects = PROJECTS.filter(p => p.featured).slice(0, 4);

    return (
        <div className="min-h-screen bg-gray-100 py-0 print:py-0 print:bg-white">

            {/* ── Top action bar (hidden on print) ── */}
            <div className="print:hidden bg-[#0f1c3d] border-b border-white/10 px-6 py-3 flex items-center justify-between sticky top-0 z-50">
                <button
                    onClick={() => navigate('/')}
                    className="flex items-center gap-2 text-white/60 hover:text-white text-[11px] font-bold uppercase tracking-widest transition-colors"
                >
                    <ArrowLeft size={14} />
                    Back to Portfolio
                </button>
                <div className="flex items-center gap-3">
                    <span className="text-white/30 text-[10px] uppercase tracking-widest">
                        Kayinamura Karimba Geofrey — Resume
                    </span>
                    <button
                        onClick={() => window.print()}
                        className="flex items-center gap-2 px-4 py-2 bg-sky-500 hover:bg-sky-400 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-lg transition-colors"
                    >
                        <Printer size={12} />
                        Save PDF
                    </button>
                </div>
            </div>

            {/* ── A4 Paper ── */}
            <div
                id="resume-paper"
                className="mx-auto my-8 print:my-0 w-full max-w-[860px] print:max-w-none shadow-2xl print:shadow-none flex overflow-hidden"
                style={{ minHeight: 'calc(297mm)' }}
            >
                {/* ════════════ LEFT SIDEBAR (navy) ════════════ */}
                <aside className="w-64 flex-shrink-0 bg-[#0f1c3d] text-white flex flex-col print:w-[200px]">

                    {/* Photo + name */}
                    <div className="p-7 border-b border-white/10 flex flex-col items-center text-center">
                        <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-sky-400/40 shadow-xl mb-4">
                            <img
                                src={PROFILE.photo}
                                alt={PROFILE.name}
                                className="w-full h-full object-cover object-top"
                            />
                        </div>
                        <h1 className="text-[13px] font-black uppercase tracking-wider leading-snug mb-1 text-white">
                            {PROFILE.name}
                        </h1>
                        <div className="text-[9px] font-bold text-sky-400 uppercase tracking-[0.25em] mb-3">
                            {PROFILE.title}
                        </div>
                        {PROFILE.openToWork && (
                            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-[7.5px] font-black uppercase tracking-widest text-emerald-400">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                Open to Work
                            </div>
                        )}
                    </div>

                    {/* Contact */}
                    <div className="p-6 border-b border-white/10">
                        <SideLabel>Contact</SideLabel>
                        <div className="space-y-2.5">
                            {[
                                { icon: Mail, text: PROFILE.email, href: `mailto:${PROFILE.email}`, truncate: true },
                                { icon: Phone, text: PROFILE.phone },
                                { icon: MapPin, text: PROFILE.location },
                                { icon: Globe, text: PROFILE.siteUrl?.replace('https://', ''), href: PROFILE.siteUrl },
                                { icon: Github, text: 'GitHub', href: PROFILE.github },
                                { icon: Linkedin, text: 'LinkedIn', href: PROFILE.linkedin },
                            ].map(({ icon: Icon, text, href, truncate }, i) => (
                                <div key={i} className="flex items-start gap-2.5">
                                    <Icon size={11} className="text-sky-400 mt-0.5 flex-shrink-0" />
                                    {href ? (
                                        <a href={href} target="_blank" rel="noopener noreferrer"
                                            className={`text-[8.5px] text-white/60 hover:text-sky-400 transition-colors leading-relaxed ${truncate ? 'break-all' : ''}`}>
                                            {text}
                                        </a>
                                    ) : (
                                        <span className="text-[8.5px] text-white/60 leading-relaxed">{text}</span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Skills */}
                    <div className="p-6 border-b border-white/10 flex-1">
                        <SideLabel>Technical Skills</SideLabel>
                        <div className="space-y-4">
                            {SKILLS.map((group, i) => (
                                <div key={i}>
                                    <div className="text-[7.5px] font-bold uppercase tracking-widest text-white/40 mb-1.5">
                                        {group.category}
                                    </div>
                                    <div className="flex flex-wrap gap-1">
                                        {group.items.map((item, j) => (
                                            <span key={j} className={`text-[7.5px] px-2 py-0.5 rounded-sm font-semibold ${item.proficiency === 'expert'
                                                ? 'bg-sky-500/20 text-sky-300 border border-sky-500/30'
                                                : item.proficiency === 'proficient'
                                                    ? 'bg-white/5 text-white/50 border border-white/10'
                                                    : 'bg-white/[0.03] text-white/25 border border-white/5'
                                                }`}>
                                                {item.name}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Education (sidebar) */}
                    <div className="p-6 border-b border-white/10">
                        <SideLabel>Education</SideLabel>
                        {EDUCATION.map((edu, i) => (
                            <div key={i}>
                                <div className="text-[9px] font-bold text-white leading-snug mb-1">{edu.degree}</div>
                                <div className="text-[8.5px] text-sky-400 mb-0.5">{edu.institution}</div>
                                <div className="text-[7.5px] text-white/40">{edu.year}</div>
                            </div>
                        ))}
                    </div>

                    {/* Certs (sidebar) */}
                    <div className="p-6">
                        <SideLabel>Certifications</SideLabel>
                        <div className="space-y-3">
                            {CERTIFICATIONS.map((cert, i) => (
                                <div key={i} className="border-l-2 border-sky-500/40 pl-3">
                                    <div className="text-[8.5px] font-semibold text-white/80 leading-snug mb-0.5">{cert.name}</div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-[7.5px] text-white/35">{cert.issuer}</span>
                                        <span className={`text-[7px] font-bold ${cert.year === 'In Progress' ? 'text-yellow-400' : 'text-sky-400'}`}>
                                            {cert.year}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </aside>

                {/* ════════════ RIGHT MAIN CONTENT (white) ════════════ */}
                <main className="flex-1 bg-white p-8 print:p-7 flex flex-col gap-8">

                    {/* Profile summary */}
                    <section>
                        <div className="h-1.5 w-12 bg-sky-500 rounded mb-4" />
                        <h2 className="text-[11px] font-black uppercase tracking-[0.3em] text-[#0f1c3d] mb-2">
                            Profile
                        </h2>
                        <p className="text-[9.5px] text-[#4b5563] leading-relaxed">
                            {PROFILE.summary}
                        </p>
                        <div className="mt-3 grid grid-cols-2 gap-2">
                            {[
                                { label: 'Projects Delivered', value: '6+' },
                                { label: 'Tech Stack Mastered', value: '14+' },
                                { label: 'API Latency Reduced', value: '~40%' },
                                { label: 'Years of Study', value: '3+' },
                            ].map(({ label, value }, i) => (
                                <div key={i} className="flex items-center gap-2 bg-[#f0f4ff] rounded px-3 py-2 border border-[#dde7ff]">
                                    <span className="text-[13px] font-black text-[#0f1c3d]">{value}</span>
                                    <span className="text-[8px] text-[#6b7280] leading-tight">{label}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Experience */}
                    <section>
                        <MainLabel icon={Briefcase}>Professional Experience</MainLabel>
                        <div className="space-y-5">
                            {EXPERIENCE.map((exp, i) => (
                                <div key={i} className="relative pl-5 border-l-2 border-sky-400">
                                    <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-sky-400" />
                                    <div className="flex flex-wrap items-start justify-between gap-1 mb-0.5">
                                        <h4 className="text-[10px] font-black uppercase tracking-wide text-[#0f1c3d]">
                                            {exp.role}
                                        </h4>
                                        <span className="text-[7.5px] font-bold text-sky-600 bg-sky-50 border border-sky-200 px-2 py-0.5 rounded-full flex-shrink-0">
                                            {exp.period}
                                        </span>
                                    </div>
                                    <div className="text-[8.5px] font-semibold text-sky-500 mb-2">{exp.company}</div>
                                    <ul className="list-none p-0 m-0 mb-2">
                                        {exp.bullets.map((b, j) => <Bullet key={j} text={b} />)}
                                    </ul>
                                    <div className="flex flex-wrap gap-1">
                                        {exp.tech.map((t, j) => <Tag key={j} navy>{t}</Tag>)}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Projects */}
                    <section>
                        <MainLabel icon={Code2}>Featured Projects</MainLabel>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {featuredProjects.map((project, i) => (
                                <div key={i} className="p-4 bg-[#f8faff] border border-[#dde7ff] rounded-sm border-t-2 border-t-sky-500">
                                    <div className="flex items-start justify-between gap-2 mb-1.5">
                                        <h4 className="text-[10px] font-black text-[#0f1c3d] leading-tight">{project.name}</h4>
                                        {project.demo && (
                                            <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                                <ExternalLink size={10} className="text-sky-500 hover:text-sky-700 flex-shrink-0 mt-0.5" />
                                            </a>
                                        )}
                                    </div>
                                    <p className="text-[8.5px] text-[#6b7280] leading-relaxed mb-2">{project.outcome}</p>
                                    <div className="flex flex-wrap gap-1">
                                        {project.tech.slice(0, 4).map((t, j) => <Tag key={j}>{t}</Tag>)}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </main>
            </div>

            {/* Print styles */}
            <style>{`
                @media print {
                    body { margin: 0; padding: 0; }
                    .print\\:hidden { display: none !important; }
                    #resume-paper {
                        margin: 0 !important;
                        width: 100% !important;
                        max-width: 100% !important;
                        box-shadow: none !important;
                        min-height: 100vh !important;
                    }
                    @page { size: A4; margin: 0; }
                }
            `}</style>
        </div>
    );
};

export default ResumePage;

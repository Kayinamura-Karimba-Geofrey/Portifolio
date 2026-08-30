import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import {
    Mail, Phone, MapPin, Github, Linkedin, ExternalLink,
    Code2, Database, ShieldCheck, Terminal, GraduationCap,
    Briefcase, Award, ChevronRight, Download, Globe
} from 'lucide-react';
import { PROFILE, SKILLS, EXPERIENCE, EDUCATION, CERTIFICATIONS, PROJECTS, PROFICIENCY_LABELS } from '../constants/data';

/* ── colour tokens ── */
const C = {
    accent: '#6366f1',
    accentLight: 'rgba(99,102,241,0.12)',
    accentBorder: 'rgba(99,102,241,0.35)',
    white: '#ffffff',
    muted: '#94a3b8',
    dim: '#64748b',
    border: 'rgba(255,255,255,0.08)',
    surface: 'rgba(255,255,255,0.04)',
    bg: '#000000',
};

/* ── section label ── */
const SectionLabel = ({ icon: Icon, children }) => (
    <div style={{
        display: 'flex', alignItems: 'center', gap: 10,
        marginBottom: 20, paddingBottom: 10,
        borderBottom: `1px solid ${C.border}`,
    }}>
        <div style={{
            width: 28, height: 28, borderRadius: 6,
            background: C.accentLight, border: `1px solid ${C.accentBorder}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
            <Icon size={13} color={C.accent} />
        </div>
        <span style={{
            fontSize: 9, fontWeight: 900, letterSpacing: '0.35em',
            textTransform: 'uppercase', color: C.white,
            fontFamily: "'Spectral', serif",
        }}>
            {children}
        </span>
        <div style={{ flex: 1, height: 1, background: `linear-gradient(90deg, ${C.accentBorder}, transparent)` }} />
    </div>
);

/* ── skill proficiency dot ── */
const ProfDot = ({ level }) => {
    const colors = { expert: C.accent, proficient: '#38bdf8', learning: C.dim };
    return (
        <span style={{
            display: 'inline-block', width: 6, height: 6, borderRadius: '50%',
            background: colors[level] || C.dim, marginRight: 5, verticalAlign: 'middle',
        }} />
    );
};

/* ── timeline bullet ── */
const Bullet = ({ text }) => (
    <li style={{
        display: 'flex', alignItems: 'flex-start', gap: 8,
        marginBottom: 5, color: C.muted, fontSize: 9.5, lineHeight: 1.6,
        fontFamily: "'Inter', sans-serif",
    }}>
        <ChevronRight size={10} color={C.accent} style={{ marginTop: 3, flexShrink: 0 }} />
        <span>{text}</span>
    </li>
);

/* ── main Resume component ── */
const Resume = () => {
    const resumeRef = useRef(null);

    const featuredProjects = PROJECTS.filter(p => p.featured).slice(0, 3);

    const skillCategories = SKILLS.slice(0, 4);

    const handlePrint = () => {
        window.print();
    };

    return (
        <section id="resume" className="py-24 md:py-32 bg-black relative overflow-hidden">
            {/* Background grid */}
            <div className="absolute inset-0 grid-background opacity-10" />

            <div className="container mx-auto px-6 max-w-5xl relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
                >
                    <div>
                        <div className="inline-block px-5 py-2.5 bg-white/5 text-indigo-400 text-[10px] font-black uppercase tracking-[0.4em] rounded-lg mb-6 border border-white/10">
                            Professional Profile
                        </div>
                        <h2 className="text-3xl md:text-4xl font-display font-black text-white uppercase tracking-[-0.04em] leading-none">
                            My Resu<span className="text-indigo-500">me.</span>
                        </h2>
                    </div>
                    <div className="flex gap-3">
                        <motion.button
                            onClick={handlePrint}
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-3 flex items-center gap-2 bg-white text-black text-[10px] font-black uppercase tracking-[0.3em] rounded-xl hover:bg-indigo-500 hover:text-white transition-all shadow-xl"
                        >
                            <Download size={13} />
                            Print / Save PDF
                        </motion.button>
                    </div>
                </motion.div>

                {/* Resume Paper */}
                <motion.div
                    ref={resumeRef}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    id="resume-paper"
                    style={{
                        background: '#050508',
                        border: `1px solid ${C.border}`,
                        borderRadius: 4,
                        overflow: 'hidden',
                        boxShadow: '0 40px 120px rgba(0,0,0,0.8), 0 0 0 1px rgba(99,102,241,0.08)',
                        fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                        position: 'relative',
                    }}
                >
                    {/* Top accent bar */}
                    <div style={{
                        height: 3,
                        background: `linear-gradient(90deg, transparent 0%, ${C.accent} 30%, #818cf8 60%, transparent 100%)`,
                    }} />

                    {/* ══════════════════ HEADER ══════════════════ */}
                    <div style={{
                        display: 'flex',
                        gap: 32,
                        padding: '36px 40px 28px',
                        alignItems: 'center',
                        borderBottom: `1px solid ${C.border}`,
                        background: 'rgba(99,102,241,0.04)',
                    }}>
                        {/* Photo */}
                        <div style={{ flexShrink: 0 }}>
                            <div style={{
                                width: 100, height: 100, borderRadius: '50%',
                                border: `2px solid ${C.accentBorder}`,
                                overflow: 'hidden',
                                boxShadow: `0 0 0 4px rgba(99,102,241,0.1), 0 0 30px rgba(99,102,241,0.2)`,
                                background: '#0a0a10',
                            }}>
                                <img
                                    src={PROFILE.photo}
                                    alt={PROFILE.name}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
                                />
                            </div>
                        </div>

                        {/* Identity */}
                        <div style={{ flex: 1 }}>
                            <div style={{
                                fontSize: 9, letterSpacing: '0.5em', textTransform: 'uppercase',
                                color: C.accent, fontWeight: 700, marginBottom: 6,
                            }}>
                                Curriculum Vitae
                            </div>
                            <h1 style={{
                                fontSize: 26, fontWeight: 900, color: C.white, margin: '0 0 4px',
                                letterSpacing: '-0.02em', lineHeight: 1.1,
                                fontFamily: "'Spectral', serif",
                                textTransform: 'uppercase',
                            }}>
                                {PROFILE.name}
                            </h1>
                            <div style={{
                                fontSize: 11, fontWeight: 700, color: C.accent,
                                letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: 14,
                            }}>
                                {PROFILE.title}
                            </div>
                            <p style={{
                                fontSize: 9.5, color: C.muted, lineHeight: 1.7, maxWidth: 480,
                                margin: '0 0 16px',
                            }}>
                                {PROFILE.summary}
                            </p>
                            {/* Contact row */}
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 20px' }}>
                                {[
                                    { icon: Mail, text: PROFILE.email, href: `mailto:${PROFILE.email}` },
                                    { icon: Phone, text: PROFILE.phone },
                                    { icon: MapPin, text: PROFILE.location },
                                    { icon: Globe, text: PROFILE.siteUrl?.replace('https://', ''), href: PROFILE.siteUrl },
                                    { icon: Github, text: 'GitHub', href: PROFILE.github },
                                    { icon: Linkedin, text: 'LinkedIn', href: PROFILE.linkedin },
                                ].map(({ icon: Icon, text, href }, i) => (
                                    <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                                        <Icon size={10} color={C.accent} />
                                        {href ? (
                                            <a href={href} target="_blank" rel="noopener noreferrer"
                                                style={{ fontSize: 9, color: C.muted, textDecoration: 'none' }}>
                                                {text}
                                            </a>
                                        ) : (
                                            <span style={{ fontSize: 9, color: C.muted }}>{text}</span>
                                        )}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Open to work badge */}
                        {PROFILE.openToWork && (
                            <div style={{ flexShrink: 0, textAlign: 'center' }}>
                                <div style={{
                                    padding: '8px 14px', borderRadius: 20,
                                    border: '1px solid rgba(16,185,129,0.35)',
                                    background: 'rgba(16,185,129,0.08)',
                                    fontSize: 8, fontWeight: 900, letterSpacing: '0.3em',
                                    textTransform: 'uppercase', color: '#34d399',
                                    display: 'flex', alignItems: 'center', gap: 6,
                                }}>
                                    <span style={{
                                        width: 6, height: 6, borderRadius: '50%',
                                        background: '#34d399', display: 'inline-block',
                                        animation: 'pulse 2s infinite',
                                    }} />
                                    Open to Work
                                </div>
                                <div style={{
                                    fontSize: 7.5, color: C.dim, marginTop: 6,
                                    maxWidth: 110, textAlign: 'center', lineHeight: 1.5,
                                }}>
                                    {PROFILE.availability}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* ══════════════════ BODY — 2 COLUMNS ══════════════════ */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 280px' }}>

                        {/* ── LEFT COLUMN ── */}
                        <div style={{ padding: '32px 36px', borderRight: `1px solid ${C.border}` }}>

                            {/* EXPERIENCE */}
                            <div style={{ marginBottom: 32 }}>
                                <SectionLabel icon={Briefcase}>Professional Experience</SectionLabel>
                                {EXPERIENCE.map((exp, i) => (
                                    <div key={i} style={{ marginBottom: 22, paddingLeft: 14, borderLeft: `2px solid ${i === 0 ? C.accent : C.border}` }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 2 }}>
                                            <span style={{
                                                fontSize: 10.5, fontWeight: 900, color: C.white,
                                                letterSpacing: '0.05em', textTransform: 'uppercase',
                                                fontFamily: "'Spectral', serif",
                                            }}>
                                                {exp.role}
                                            </span>
                                            <span style={{
                                                fontSize: 8, color: C.accent, fontWeight: 700,
                                                letterSpacing: '0.15em', textTransform: 'uppercase',
                                                background: C.accentLight, padding: '2px 8px',
                                                borderRadius: 20, border: `1px solid ${C.accentBorder}`,
                                                flexShrink: 0, marginLeft: 8,
                                            }}>
                                                {exp.period}
                                            </span>
                                        </div>
                                        <div style={{ fontSize: 9, color: C.accent, fontWeight: 600, marginBottom: 8 }}>
                                            {exp.company}
                                        </div>
                                        <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                                            {exp.bullets.map((b, j) => <Bullet key={j} text={b} />)}
                                        </ul>
                                        {/* Tech tags */}
                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginTop: 8 }}>
                                            {exp.tech.map((t, j) => (
                                                <span key={j} style={{
                                                    fontSize: 7.5, fontWeight: 700, letterSpacing: '0.1em',
                                                    textTransform: 'uppercase', color: C.dim,
                                                    background: C.surface, border: `1px solid ${C.border}`,
                                                    padding: '2px 7px', borderRadius: 3,
                                                }}>
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* PROJECTS */}
                            <div style={{ marginBottom: 32 }}>
                                <SectionLabel icon={Code2}>Featured Projects</SectionLabel>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                                    {featuredProjects.map((project, i) => (
                                        <div key={i} style={{
                                            padding: '12px 14px',
                                            background: C.surface,
                                            border: `1px solid ${C.border}`,
                                            borderRadius: 4,
                                            borderTop: `2px solid ${C.accent}`,
                                        }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
                                                <span style={{
                                                    fontSize: 9.5, fontWeight: 900, color: C.white,
                                                    fontFamily: "'Spectral', serif",
                                                }}>
                                                    {project.name}
                                                </span>
                                                {project.demo && (
                                                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                                        <ExternalLink size={9} color={C.accent} />
                                                    </a>
                                                )}
                                            </div>
                                            <p style={{ fontSize: 8.5, color: C.muted, lineHeight: 1.5, margin: '0 0 6px' }}>
                                                {project.outcome}
                                            </p>
                                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
                                                {project.tech.slice(0, 4).map((t, j) => (
                                                    <span key={j} style={{
                                                        fontSize: 7, fontWeight: 700, color: C.dim,
                                                        background: 'rgba(99,102,241,0.06)',
                                                        border: `1px solid ${C.accentBorder}`,
                                                        padding: '1px 5px', borderRadius: 2,
                                                        letterSpacing: '0.05em', textTransform: 'uppercase',
                                                    }}>
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
                                <SectionLabel icon={GraduationCap}>Education</SectionLabel>
                                {EDUCATION.map((edu, i) => (
                                    <div key={i} style={{ paddingLeft: 14, borderLeft: `2px solid ${C.accent}` }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                            <span style={{
                                                fontSize: 10.5, fontWeight: 900, color: C.white,
                                                textTransform: 'uppercase', letterSpacing: '0.05em',
                                                fontFamily: "'Spectral', serif",
                                            }}>
                                                {edu.degree}
                                            </span>
                                            <span style={{
                                                fontSize: 8, color: C.accent, fontWeight: 700,
                                                background: C.accentLight, padding: '2px 8px',
                                                borderRadius: 20, border: `1px solid ${C.accentBorder}`,
                                                flexShrink: 0, marginLeft: 8,
                                            }}>
                                                {edu.year}
                                            </span>
                                        </div>
                                        <div style={{ fontSize: 9, color: C.accent, fontWeight: 600, margin: '3px 0 4px' }}>
                                            {edu.institution}
                                        </div>
                                        <div style={{ fontSize: 9, color: C.muted }}>{edu.focus}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* ── RIGHT COLUMN ── */}
                        <div style={{ padding: '32px 24px', background: 'rgba(99,102,241,0.02)' }}>

                            {/* SKILLS */}
                            <div style={{ marginBottom: 28 }}>
                                <SectionLabel icon={Terminal}>Technical Skills</SectionLabel>
                                {skillCategories.map((skillGroup, i) => (
                                    <div key={i} style={{ marginBottom: 16 }}>
                                        <div style={{
                                            fontSize: 8, fontWeight: 900, letterSpacing: '0.3em',
                                            textTransform: 'uppercase', color: C.accent,
                                            marginBottom: 6,
                                        }}>
                                            {skillGroup.category}
                                        </div>
                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                                            {skillGroup.items.map((item, j) => (
                                                <span key={j} style={{
                                                    display: 'inline-flex', alignItems: 'center',
                                                    fontSize: 8, color: item.proficiency === 'expert' ? C.white : C.muted,
                                                    background: item.proficiency === 'expert' ? C.accentLight : C.surface,
                                                    border: `1px solid ${item.proficiency === 'expert' ? C.accentBorder : C.border}`,
                                                    padding: '3px 7px', borderRadius: 3,
                                                    fontWeight: item.proficiency === 'expert' ? 700 : 500,
                                                    letterSpacing: '0.05em',
                                                }}>
                                                    <ProfDot level={item.proficiency} />
                                                    {item.name}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                                {/* Tools row */}
                                {SKILLS[4] && (
                                    <div style={{ marginBottom: 16 }}>
                                        <div style={{
                                            fontSize: 8, fontWeight: 900, letterSpacing: '0.3em',
                                            textTransform: 'uppercase', color: C.accent, marginBottom: 6,
                                        }}>
                                            {SKILLS[4].category}
                                        </div>
                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                                            {SKILLS[4].items.map((item, j) => (
                                                <span key={j} style={{
                                                    display: 'inline-flex', alignItems: 'center',
                                                    fontSize: 8, color: item.proficiency === 'expert' ? C.white : C.muted,
                                                    background: item.proficiency === 'expert' ? C.accentLight : C.surface,
                                                    border: `1px solid ${item.proficiency === 'expert' ? C.accentBorder : C.border}`,
                                                    padding: '3px 7px', borderRadius: 3,
                                                    fontWeight: item.proficiency === 'expert' ? 700 : 500,
                                                }}>
                                                    <ProfDot level={item.proficiency} />
                                                    {item.name}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* DIVIDER */}
                            <div style={{ height: 1, background: C.border, margin: '0 0 24px' }} />

                            {/* CERTIFICATIONS */}
                            <div style={{ marginBottom: 28 }}>
                                <SectionLabel icon={Award}>Certifications</SectionLabel>
                                {CERTIFICATIONS.map((cert, i) => (
                                    <div key={i} style={{
                                        marginBottom: 12, padding: '10px 12px',
                                        background: C.surface, border: `1px solid ${C.border}`,
                                        borderRadius: 4, borderLeft: `3px solid ${C.accent}`,
                                    }}>
                                        <div style={{ fontSize: 8.5, fontWeight: 800, color: C.white, marginBottom: 2 }}>
                                            {cert.name}
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <span style={{ fontSize: 7.5, color: C.dim }}>{cert.issuer}</span>
                                            <span style={{
                                                fontSize: 7, color: cert.year === 'In Progress' ? '#fbbf24' : C.accent,
                                                fontWeight: 700, letterSpacing: '0.1em',
                                            }}>
                                                {cert.year}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* DIVIDER */}
                            <div style={{ height: 1, background: C.border, margin: '0 0 24px' }} />

                            {/* PROFILE SUMMARY STATS */}
                            <div>
                                <SectionLabel icon={Code2}>At a Glance</SectionLabel>
                                {[
                                    { label: 'Projects Delivered', value: '6+' },
                                    { label: 'Languages & Frameworks', value: '14+' },
                                    { label: 'Years of Study', value: '3+' },
                                    { label: 'API Latency Reduced', value: '~40%' },
                                ].map(({ label, value }, i) => (
                                    <div key={i} style={{
                                        display: 'flex', justifyContent: 'space-between',
                                        alignItems: 'center', marginBottom: 10, padding: '8px 10px',
                                        background: C.surface, border: `1px solid ${C.border}`, borderRadius: 4,
                                    }}>
                                        <span style={{ fontSize: 8.5, color: C.muted }}>{label}</span>
                                        <span style={{
                                            fontSize: 13, fontWeight: 900, color: C.white,
                                            fontFamily: "'Spectral', serif",
                                        }}>
                                            {value}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* ══════════════════ FOOTER ══════════════════ */}
                    <div style={{
                        padding: '14px 40px',
                        borderTop: `1px solid ${C.border}`,
                        background: 'rgba(99,102,241,0.04)',
                        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    }}>
                        <span style={{ fontSize: 8, color: C.dim, letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                            Kayinamura Karimba Geofrey · {PROFILE.location}
                        </span>
                        <span style={{ fontSize: 8, color: C.dim, letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                            {PROFILE.email} · {PROFILE.siteUrl}
                        </span>
                    </div>

                    {/* Bottom accent bar */}
                    <div style={{
                        height: 2,
                        background: `linear-gradient(90deg, transparent, ${C.accent}, transparent)`,
                    }} />
                </motion.div>

                {/* Print styles hint */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="text-center text-[10px] text-slate-500 mt-6 uppercase tracking-[0.3em]"
                >
                    Click "Print / Save PDF" → set paper to A4 → disable margins for best result
                </motion.p>
            </div>

            {/* Print-only styles */}
            <style>{`
                @media print {
                    body * { visibility: hidden; }
                    #resume-paper, #resume-paper * { visibility: visible; }
                    #resume-paper { position: fixed; top: 0; left: 0; width: 100%; margin: 0; border: none !important; box-shadow: none !important; border-radius: 0 !important; }
                    @page { size: A4; margin: 0; }
                }
            `}</style>
        </section>
    );
};

export default Resume;

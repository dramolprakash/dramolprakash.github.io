'use client';

import { useEffect, useRef } from 'react';
import { skills } from '@/lib/data';

const iconMap: Record<string, React.ReactNode> = {
  code: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  brain: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
  hospital: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  chart: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  database: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
    </svg>
  ),
  stats: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
    </svg>
  ),
  tools: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
};

const categoryColors: Record<string, string> = {
  code: 'from-blue-500/20 to-blue-600/10 border-blue-500/30 text-blue-400',
  brain: 'from-violet-500/20 to-violet-600/10 border-violet-500/30 text-violet-400',
  hospital: 'from-emerald-500/20 to-emerald-600/10 border-emerald-500/30 text-emerald-400',
  chart: 'from-orange-500/20 to-orange-600/10 border-orange-500/30 text-orange-400',
  database: 'from-cyan-500/20 to-cyan-600/10 border-cyan-500/30 text-cyan-400',
  stats: 'from-pink-500/20 to-pink-600/10 border-pink-500/30 text-pink-400',
  tools: 'from-yellow-500/20 to-yellow-600/10 border-yellow-500/30 text-yellow-400',
};

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll<HTMLElement>('.reveal').forEach((el, i) => {
              el.style.transitionDelay = `${i * 80}ms`;
              el.classList.add('visible');
            });
          }
        });
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-24 lg:py-32 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-40" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <p className="section-label mb-3">What I Work With</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-100 mb-4">
            Skills &amp; <span className="gradient-text">Tools</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            A full-stack analytics toolkit spanning data engineering, machine learning,
            clinical informatics, and executive visualization.
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {skills.map((skill, idx) => {
            const colorClass =
              categoryColors[skill.icon] ||
              'from-blue-500/20 to-blue-600/10 border-blue-500/30 text-blue-400';
            return (
              <div
                key={skill.category}
                className={`reveal bg-gradient-to-br ${colorClass} border rounded-2xl p-5 card-hover`}
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-9 h-9 rounded-xl bg-current/10 flex items-center justify-center flex-shrink-0`}
                  >
                    <span className="text-current">{iconMap[skill.icon]}</span>
                  </div>
                  <h3 className="text-slate-100 font-bold text-sm">{skill.category}</h3>
                </div>

                {/* Skill tags */}
                <div className="flex flex-wrap gap-1.5">
                  {skill.items.map((item) => (
                    <span key={item} className="skill-badge text-xs">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom highlight bar */}
        <div className="mt-16 grid sm:grid-cols-3 gap-4 reveal">
          {[
            { label: 'Healthcare Standards', value: 'HL7 FHIR · LOINC · SNOMED · OMOP · CDISC', icon: '🏥' },
            { label: 'Statistical Methods', value: 'Survival · Bayesian · Time Series · Meta-analysis', icon: '📐' },
            { label: 'Cloud & Big Data', value: 'Azure Databricks · Snowflake · Azure DevOps · dbt', icon: '☁️' },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-slate-800/40 border border-slate-700/40 rounded-xl p-4 flex items-start gap-3"
            >
              <span className="text-xl flex-shrink-0">{item.icon}</span>
              <div>
                <p className="text-slate-300 font-semibold text-sm">{item.label}</p>
                <p className="text-slate-500 text-xs mt-0.5 leading-relaxed">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

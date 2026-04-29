'use client';

import { useEffect, useRef } from 'react';
import { experience } from '@/lib/data';

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll<HTMLElement>('.reveal').forEach((el, i) => {
              el.style.transitionDelay = `${i * 120}ms`;
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
    <section id="experience" ref={sectionRef} className="py-24 lg:py-32 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <p className="section-label mb-3">Career Path</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-100 mb-4">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            From emergency medicine to NIH-funded analytics — a journey defined by impact, precision, and purpose.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-6 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-blue-500/30 to-transparent hidden sm:block" />

          <div className="space-y-8">
            {experience.map((exp, idx) => (
              <div key={idx} className="reveal relative flex gap-6">
                {/* Timeline dot */}
                <div className="hidden sm:flex flex-col items-center flex-shrink-0">
                  <div
                    className={`w-12 h-12 rounded-full border-2 flex items-center justify-center flex-shrink-0 z-10 ${
                      idx === 0
                        ? 'bg-blue-600 border-blue-400 shadow-lg shadow-blue-500/30'
                        : 'bg-slate-800 border-slate-600'
                    }`}
                  >
                    {/* Company logo placeholder */}
                    <div
                      className="w-7 h-7 rounded-full bg-slate-700 border border-slate-600 flex items-center justify-center overflow-hidden"
                      title={exp.logoPlaceholder}
                    >
                      <svg
                        className="w-4 h-4 text-slate-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Card */}
                <div
                  className={`flex-1 bg-slate-800/50 border rounded-2xl p-6 card-hover ${
                    idx === 0 ? 'border-blue-500/30' : 'border-slate-700/50'
                  }`}
                >
                  {/* Header row */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-slate-100 font-bold text-lg">{exp.title}</h3>
                        {idx === 0 && (
                          <span className="px-2 py-0.5 rounded-full bg-blue-500/15 border border-blue-500/25 text-blue-400 text-[10px] font-bold uppercase tracking-wider">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-blue-400 font-semibold text-sm">{exp.company}</p>
                      <p className="text-slate-500 text-xs mt-0.5">
                        {exp.location} · {exp.type}
                      </p>
                    </div>
                    <span className="px-3 py-1.5 bg-slate-900/60 border border-slate-700/50 rounded-lg text-slate-400 text-xs font-medium whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-4">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                        <span className="text-slate-300 text-sm leading-relaxed">{h}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tools */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-700/40">
                    {exp.tools.map((tool) => (
                      <span key={tool} className="skill-badge text-[11px]">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

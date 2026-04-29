'use client';

import { useEffect, useRef } from 'react';
import { education, certifications, awards } from '@/lib/data';
import ImagePlaceholder from './ui/ImagePlaceholder';

export default function Education() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll<HTMLElement>('.reveal').forEach((el, i) => {
              el.style.transitionDelay = `${i * 100}ms`;
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
    <section id="education" ref={sectionRef} className="py-24 lg:py-32 bg-slate-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-violet-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <p className="section-label mb-3">Credentials</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-100 mb-4">
            Education &amp; <span className="gradient-text">Certifications</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Degrees */}
          <div>
            <h3 className="text-lg font-bold text-slate-300 mb-6 flex items-center gap-2 reveal">
              <span className="w-8 h-8 rounded-lg bg-blue-500/15 border border-blue-500/25 flex items-center justify-center text-blue-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </span>
              Academic Degrees
            </h3>
            <div className="space-y-5">
              {education.map((edu, i) => (
                <div
                  key={i}
                  className="reveal bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 card-hover"
                >
                  <div className="flex gap-4">
                    {/* Institution logo placeholder */}
                    <div className="flex-shrink-0">
                      <div
                        className="w-14 h-14 rounded-xl overflow-hidden border border-slate-600/50"
                        title={edu.logoPlaceholder}
                      >
                        <ImagePlaceholder
                          label={edu.logoPlaceholder}
                          className="w-full h-full border-0 rounded-xl"
                        />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-slate-100 font-bold text-base leading-snug">{edu.degree}</h4>
                      <p className="text-blue-400 text-sm font-semibold mt-0.5">{edu.institution}</p>
                      <div className="flex flex-wrap items-center gap-3 mt-2">
                        <span className="text-slate-500 text-xs">{edu.location}</span>
                        <span className="text-slate-600 text-xs">·</span>
                        <span className="text-slate-500 text-xs">{edu.period}</span>
                        <span className="text-slate-600 text-xs">·</span>
                        <span className="text-emerald-400 text-xs font-semibold">GPA {edu.gpa}</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {edu.highlights.map((h) => (
                          <span key={h} className="skill-badge text-[10px]">
                            {h}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Awards */}
            <h3 className="text-lg font-bold text-slate-300 mb-6 mt-10 flex items-center gap-2 reveal">
              <span className="w-8 h-8 rounded-lg bg-yellow-500/15 border border-yellow-500/25 flex items-center justify-center text-yellow-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Awards &amp; Activities
            </h3>
            <div className="space-y-3">
              {awards.map((award, i) => (
                <div
                  key={i}
                  className="reveal bg-slate-800/40 border border-yellow-500/15 rounded-xl p-4 flex gap-4 items-start"
                >
                  <div className="w-9 h-9 rounded-lg bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-yellow-400 text-base">🏆</span>
                  </div>
                  <div>
                    <p className="text-slate-100 font-semibold text-sm">{award.title}</p>
                    <p className="text-slate-400 text-xs mt-0.5">
                      {award.org} · {award.year}
                    </p>
                    <p className="text-slate-500 text-xs mt-1 leading-relaxed">{award.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-lg font-bold text-slate-300 mb-6 flex items-center gap-2 reveal">
              <span className="w-8 h-8 rounded-lg bg-violet-500/15 border border-violet-500/25 flex items-center justify-center text-violet-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </span>
              Certifications
            </h3>
            <div className="grid gap-4">
              {certifications.map((cert, i) => (
                <div
                  key={i}
                  className="reveal bg-slate-800/50 border border-violet-500/15 rounded-2xl p-5 flex gap-4 items-start card-hover"
                >
                  {/* Cert badge placeholder */}
                  <div
                    className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 border border-slate-600/50"
                    title={cert.badgePlaceholder}
                  >
                    <ImagePlaceholder
                      label={cert.badgePlaceholder}
                      className="w-full h-full border-0 rounded-xl"
                    />
                  </div>
                  <div>
                    <p className="text-slate-100 font-bold text-sm leading-snug">{cert.name}</p>
                    <p className="text-violet-400 text-xs font-semibold mt-1">{cert.issuer}</p>
                    <p className="text-slate-500 text-xs mt-0.5">{cert.year}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Achievement photo placeholder */}
            <div className="mt-8 reveal">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
                Achievement / Graduation Photo
              </p>
              <ImagePlaceholder
                label="Achievement or Graduation Photo"
                hint="Your graduation ceremony, award presentation, or conference recognition moment."
                shape="wide"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

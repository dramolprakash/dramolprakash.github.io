'use client';

import { useEffect, useRef } from 'react';
import { testimonials } from '@/lib/data';
import ImagePlaceholder from './ui/ImagePlaceholder';

export default function Testimonials() {
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
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="testimonials" ref={sectionRef} className="py-24 lg:py-32 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-30" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-12 reveal">
          <p className="section-label mb-3">What People Say</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-100 mb-4">
            Recommendations &amp; <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-base">
            Add real recommendations from managers, professors, and collaborators. Ask via LinkedIn or directly —
            these carry significant weight with hiring teams.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="reveal bg-slate-800/50 border border-slate-700/40 rounded-2xl p-6 flex flex-col gap-5 card-hover relative overflow-hidden"
            >
              {/* Quote icon */}
              <div className="absolute top-4 right-4 text-blue-500/10">
                <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Quote */}
              <p className="text-slate-300 text-sm leading-relaxed italic flex-1">&ldquo;{t.quote}&rdquo;</p>

              {/* Reviewer */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-700/40">
                <div
                  className="w-11 h-11 rounded-full overflow-hidden flex-shrink-0 border-2 border-slate-600"
                  title={t.avatarPlaceholder}
                >
                  <ImagePlaceholder
                    label={t.avatarPlaceholder}
                    shape="circle"
                    className="w-full h-full border-0"
                  />
                </div>
                <div>
                  <p className="text-slate-100 font-bold text-sm">{t.name}</p>
                  <p className="text-slate-500 text-xs">{t.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* LinkedIn CTA */}
        <div className="text-center mt-10 reveal">
          <p className="text-slate-500 text-sm mb-4">
            You can request recommendations directly from your LinkedIn profile under each position.
          </p>
          <a
            href="https://www.linkedin.com/in/dr-amol-prakash-mbbs-mshi-6120aa11b/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            Visit LinkedIn Profile
          </a>
        </div>
      </div>
    </section>
  );
}

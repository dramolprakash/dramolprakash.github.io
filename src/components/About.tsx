'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { personal } from '@/lib/data';
import ImagePlaceholder from './ui/ImagePlaceholder';

const highlights = [
  {
    icon: '🏥',
    title: 'Clinical Background',
    desc: '5 years as an Emergency Physician — I understand what health data means at the bedside, not just in a spreadsheet.',
  },
  {
    icon: '🧠',
    title: 'Machine Learning',
    desc: 'Building explainable predictive models (XGBoost, BERT, survival analysis) that clinicians and executives can trust and act on.',
  },
  {
    icon: '📊',
    title: 'Data Engineering',
    desc: 'Automated ETL pipelines integrating EHR, claims, REDCap, and lab systems — reducing manual reporting by up to 90%.',
  },
  {
    icon: '🎯',
    title: 'Business Impact',
    desc: 'Translating analytics into measurable outcomes: readmission reduction, cost savings, HEDIS improvement, and faster diagnoses.',
  },
];

export default function About() {
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
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 lg:py-32 bg-slate-900 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 reveal">
          <p className="section-label mb-3">Who I Am</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-100 mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            A rare combination of clinical expertise and data science — built from years at the intersection of
            patient care and technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* LEFT — photo + quick facts */}
          <div className="lg:col-span-2 space-y-6 reveal">
            {/* Main lifestyle/workspace photo placeholder */}
            <div className="relative">
              <ImagePlaceholder
                label="Lifestyle or Workspace Photo"
                hint="Replace with a photo of you at your desk, presenting at a conference, or working with data."
                shape="default"
                className="w-full"
              />
              <div className="absolute -bottom-4 -right-4 bg-slate-800 border border-blue-500/30 rounded-2xl p-4 shadow-xl shadow-black/30">
                <p className="text-slate-500 text-xs font-medium uppercase tracking-wider">Current Role</p>
                <p className="text-slate-100 font-bold text-sm mt-0.5">Clinical Data Analyst II</p>
                <p className="text-blue-400 text-xs">IU School of Medicine</p>
              </div>
            </div>

            {/* Speaking/event photo placeholder */}
            <div className="mt-6 pt-2">
              <ImagePlaceholder
                label="Speaking / Event Photo"
                hint="Conference presentation, AMIA symposium, team meeting, or award ceremony."
                shape="wide"
                className="w-full"
              />
            </div>
          </div>

          {/* RIGHT — story + highlights */}
          <div className="lg:col-span-3 space-y-8">
            {/* Story */}
            <div className="space-y-4 reveal">
              {personal.bio.map((para, i) => (
                <p key={i} className="text-slate-300 leading-relaxed text-base">
                  {para}
                </p>
              ))}
            </div>

            {/* What I bring */}
            <div className="grid sm:grid-cols-2 gap-4 reveal">
              {highlights.map((h) => (
                <div
                  key={h.title}
                  className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 card-hover"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-2xl flex-shrink-0">{h.icon}</span>
                    <div>
                      <h4 className="text-slate-100 font-semibold text-sm mb-1">{h.title}</h4>
                      <p className="text-slate-400 text-xs leading-relaxed">{h.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Personal connection */}
            <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/10 border border-blue-500/20 rounded-2xl p-6 reveal">
              <p className="text-slate-300 text-sm leading-relaxed italic">
                &ldquo;I have sat with patients in the emergency room and seen decisions delayed by fragmented data.
                That experience drives everything I build — tools that give clinicians the right information
                at the right time to save lives.&rdquo;
              </p>
              <div className="flex items-center gap-3 mt-4">
                <div className="w-8 h-8 rounded-full overflow-hidden bg-slate-700 flex-shrink-0">
                  <Image
                    src="/assets/headshot_circle.png"
                    alt="Dr. Amol Prakash"
                    width={32}
                    height={32}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <p className="text-slate-100 text-xs font-bold">Dr. Amol Prakash</p>
                  <p className="text-slate-500 text-xs">MBBS · M.S. Health Informatics</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

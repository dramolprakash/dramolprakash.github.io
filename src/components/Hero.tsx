'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { personal, stats } from '@/lib/data';

const typingPhrases = [
  'Data Scientist',
  'Healthcare Analytics',
  'Machine Learning',
  'Clinical Informatics',
  'AI in Medicine',
];

function useTypingEffect(phrases: string[]) {
  const [displayed, setDisplayed] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIndex];
    const speed = deleting ? 40 : 90;

    const timer = setTimeout(() => {
      if (!deleting) {
        if (charIndex < current.length) {
          setDisplayed(current.slice(0, charIndex + 1));
          setCharIndex((c) => c + 1);
        } else {
          setTimeout(() => setDeleting(true), 1800);
        }
      } else {
        if (charIndex > 0) {
          setDisplayed(current.slice(0, charIndex - 1));
          setCharIndex((c) => c - 1);
        } else {
          setDeleting(false);
          setPhraseIndex((i) => (i + 1) % phrases.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [charIndex, deleting, phraseIndex, phrases]);

  return displayed;
}

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const start = performance.now();
          const animate = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

export default function Hero() {
  const typedText = useTypingEffect(typingPhrases);
  const [headingVisible, setHeadingVisible] = useState(false);
  const [useRealPhoto, setUseRealPhoto] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setHeadingVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-slate-950"
    >
      {/* Animated background */}
      <div className="absolute inset-0 bg-grid opacity-100" />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-violet-900/10" />

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-600/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-violet-600/6 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-8 items-center">

          {/* LEFT — text content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Greeting badge */}
            <div
              className={`transition-all duration-700 ${
                headingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                Open to New Opportunities
              </span>
            </div>

            {/* Name */}
            <div
              className={`transition-all duration-700 delay-100 ${
                headingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <p className="text-slate-400 text-lg mb-2 font-medium">Hello, I&apos;m</p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight">
                <span className="gradient-text">Dr. Amol</span>
                <br />
                <span className="text-slate-100">Prakash</span>
              </h1>
            </div>

            {/* Typing title */}
            <div
              className={`transition-all duration-700 delay-200 ${
                headingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="flex items-center gap-2 text-xl sm:text-2xl font-semibold text-slate-300">
                <span className="text-blue-400 font-mono text-lg select-none">&gt;</span>
                <span>{typedText}</span>
                <span className="typing-cursor" />
              </div>
            </div>

            {/* Tagline */}
            <p
              className={`text-slate-400 text-lg leading-relaxed max-w-2xl transition-all duration-700 delay-300 ${
                headingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              {personal.tagline} Doctor turned informatician with deep clinical expertise,
              delivering predictive models, automated pipelines, and executive-ready dashboards.
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-wrap gap-3 transition-all duration-700 delay-[400ms] ${
                headingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <button
                onClick={() =>
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
                }
                className="btn-primary"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                View Projects
              </button>
              <a href={personal.resumeUrl} className="btn-secondary">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </a>
              <button
                onClick={() =>
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }
                className="btn-ghost"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact Me
              </button>
            </div>

            {/* Social Links */}
            <div
              className={`flex items-center gap-4 transition-all duration-700 delay-500 ${
                headingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <span className="text-slate-600 text-sm">Find me on</span>
              <div className="flex items-center gap-3">
                {[
                  {
                    href: personal.github,
                    label: 'GitHub',
                    icon: (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                      </svg>
                    ),
                  },
                  {
                    href: personal.linkedin,
                    label: 'LinkedIn',
                    icon: (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    ),
                  },
                  {
                    href: `mailto:${personal.email}`,
                    label: 'Email',
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    ),
                  },
                  {
                    href: personal.tableau,
                    label: 'Tableau',
                    icon: (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M11.654 0v3.076H9.692V0h1.962zm4.077 1.538H13.77V0h1.962v1.538zM7.577 1.538H5.615V0h1.962v1.538zm8.154 2.77V1.538h1.961v2.77h-1.961zM5.615 4.307H3.654V1.538h1.961v2.77zm12.231 0v2.77h-1.961v-2.77h1.961zM3.654 7.077H1.692V4.307h1.962v2.77zM18.923 4.307h1.961v2.77h-1.961v-2.77zm2.961 2.77H24v2.769h-2.116V7.077zM1.692 7.077H0v2.769h1.692V7.077zm18.154 2.769v2.769h-1.961V9.846h1.961zm-18.154 0v2.769H1.692V9.846H1.692zm16.192 2.769v2.77h-1.961v-2.77h1.961zm-14.23 2.77H3.654v-2.77h1.961v2.77zm12.269 0v2.769h-1.961v-2.769h1.961zm-10.308 2.769H5.615v-2.769h1.962v2.769zm8.347 0v2.77H13.77v-2.77h1.962zm-6.385 2.77H7.577v-2.77h1.962v2.77zm4.423 0v2.77h-1.961v-2.77h1.961zm-2.461 2.77v3.076H9.692V21.923h1.962zm2.077 0H13.77v3.076h-1.961V21.923z" />
                      </svg>
                    ),
                  },
                ].map(({ href, label, icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-10 h-10 rounded-xl bg-slate-800/60 border border-slate-700/50 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-500/40 hover:bg-blue-500/10 transition-all duration-200"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — headshot + stats */}
          <div className="lg:col-span-2 flex flex-col items-center gap-8">
            {/* Profile photo */}
            <div className="relative flex items-center justify-center animate-float">
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 via-cyan-500 to-violet-500 blur-xl opacity-20 scale-110" />
              {/* Rotating border */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72">
                <div className="profile-ring" />
                <div className="w-full h-full rounded-full overflow-hidden bg-slate-800 border-4 border-slate-900 relative z-10">
                  {useRealPhoto ? (
                    <Image
                      src="/assets/headshot_circle.png"
                      alt="Dr. Amol Prakash"
                      fill
                      className="object-cover"
                      priority
                      onError={() => setUseRealPhoto(false)}
                    />
                  ) : (
                    <div className="w-full h-full img-placeholder rounded-full flex flex-col items-center justify-center gap-2">
                      <svg className="w-16 h-16 text-blue-400/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <p className="text-slate-500 text-xs text-center px-4">Professional headshot placeholder</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Floating badge — top right */}
              <div className="absolute -top-3 -right-3 bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 flex items-center gap-2 shadow-xl">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs font-semibold text-slate-300">Available</span>
              </div>

              {/* Floating badge — bottom left */}
              <div className="absolute -bottom-2 -left-4 bg-slate-800 border border-blue-500/30 rounded-xl px-3 py-2 shadow-xl">
                <p className="text-[10px] text-slate-500 font-medium">MBBS + M.S. Informatics</p>
                <p className="text-xs font-bold text-blue-400">Indiana University</p>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3 w-full max-w-xs">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-slate-800/60 border border-slate-700/50 rounded-xl p-4 text-center card-hover"
                >
                  <p className="text-2xl font-extrabold gradient-text">
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="text-slate-500 text-xs font-medium mt-1 leading-snug">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-16">
          <button
            onClick={() =>
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="flex flex-col items-center gap-2 text-slate-600 hover:text-slate-400 transition-colors group"
            aria-label="Scroll down"
          >
            <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
            <div className="w-6 h-10 border-2 border-slate-700 rounded-full flex items-start justify-center p-1 group-hover:border-slate-500 transition-colors">
              <div className="w-1.5 h-2.5 bg-blue-400 rounded-full animate-bounce" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}

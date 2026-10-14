'use client';

import { useState, useEffect, type CSSProperties } from 'react';
import Image from 'next/image';
import { Terrain, Slow } from '@lucasmarkes/hairline/react';
import { personal, projects, certifications } from '@/lib/data';

const mlProjects     = projects.filter((p) => p.group === 'ml');
const mobileProjects = projects.filter((p) => p.group === 'mobile');
const webProjects    = projects.filter((p) => p.group === 'web');

const terrainVars: CSSProperties = {
  '--hairline-plate': '#EBDBBC',
  '--hairline-hi':    '#94a3b8',
  '--hairline-edge':  '#64748b',
  '--hairline-mid':   '#334155',
  '--hairline-lo':    '#0f172a',
} as CSSProperties;

type Project = (typeof projects)[number];
type Cert    = (typeof certifications)[number];

const CURSOR_COLORS = ['#E63946', '#3A86FF', '#9B5DE5', '#2A9D8F', '#FF6B6B', '#F72585'];

function CertCard({ cert: c }: { cert: Cert }) {
  const inner = (
    <div className="flex items-start gap-4 p-4 border border-black/[0.12] rounded hover:border-[#3D2B1F]/50 hover:bg-black/[0.05] transition-all group">
      <span className="text-[#3D2B1F] mt-0.5 shrink-0">→</span>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-[#3D2B1F] font-medium text-base group-hover:text-[#3D2B1F] transition-colors">
            {c.name}
          </span>
          {c.url && (
            <span className="text-sm px-2 py-0.5 border border-[#3D2B1F]/30 text-[#3D2B1F] rounded hover:bg-[#3D2B1F]/[0.07] transition-colors shrink-0">
              verify ↗
            </span>
          )}
        </div>
        <p className="text-gray-600 text-sm mt-1">{c.issuer}</p>
      </div>
      <span className="text-[#3D2B1F] text-sm whitespace-nowrap shrink-0 hidden sm:block">{c.year}</span>
    </div>
  );

  return c.url ? (
    <a href={c.url} target="_blank" rel="noopener noreferrer" className="block">
      {inner}
    </a>
  ) : (
    <div>{inner}</div>
  );
}

function ProjectCard({ project: p }: { project: Project }) {
  return (
    <div className="flex items-start gap-4 p-4 border border-black/[0.12] rounded hover:border-[#3D2B1F]/50 hover:bg-black/[0.05] transition-all group">
      <span className="text-[#3D2B1F] mt-0.5 shrink-0">→</span>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <a
            href={p.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#3D2B1F] font-medium text-base group-hover:text-[#3D2B1F] transition-colors"
          >
            {p.title}
          </a>
          {p.demo && (
            <a
              href={p.demo}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-sm px-2 py-0.5 border border-[#3D2B1F]/30 text-[#3D2B1F] rounded hover:bg-[#3D2B1F]/[0.07] transition-colors shrink-0"
            >
              live demo ↗
            </a>
          )}
        </div>
        <p className="text-gray-600 text-sm mt-1 leading-snug">{p.problem}</p>
        <div className="flex flex-wrap gap-1 mt-2">
          {p.tools.slice(0, 5).map((t) => (
            <span key={t} className="text-sm px-2 py-0.5 bg-black/[0.07] text-gray-700 border border-black/[0.12] rounded">{t}</span>
          ))}
        </div>
      </div>
      <span className="text-[#3D2B1F] text-sm whitespace-nowrap shrink-0 hidden sm:block">{p.metrics[0]}</span>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 530);
    return () => clearInterval(id);
  }, []);

  const cursorVisible = tick % 2 === 0;
  const cursorColor   = CURSOR_COLORS[Math.floor(tick / 2) % CURSOR_COLORS.length];

  return (
    <div className="min-h-screen bg-[#EBDBBC] text-[#3D2B1F] relative overflow-x-hidden selection:bg-[#3D2B1F]/20 selection:text-[#3D2B1F]">

      {/* Nav */}
      <nav className="px-6 sm:px-8 border-b border-black/[0.12] sticky top-0 bg-[#EBDBBC]/95 backdrop-blur-sm z-40">
        <div className="flex items-center justify-between py-4">
          <a href="#home" className="font-semibold text-xl text-[#3D2B1F] hover:opacity-70 transition-opacity">
            Amol Prakash
          </a>

          {/* Desktop nav links */}
          <div className="hidden sm:flex items-center gap-6 text-sm text-gray-600">
            <a href="#projects"       className="hover:text-[#3D2B1F] transition-colors">Projects</a>
            <a href="#apps"           className="hover:text-[#3D2B1F] transition-colors">Apps</a>
            <a href="#certifications" className="hover:text-[#3D2B1F] transition-colors">Certifications</a>
            <a href={personal.resumeUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#3D2B1F] transition-colors">Resume</a>
            <a href={`mailto:${personal.email}`} className="hover:text-[#3D2B1F] transition-colors">Contact</a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="sm:hidden text-gray-600 hover:text-[#3D2B1F] transition-colors p-1"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6"  y2="18"/>
                <line x1="6"  y1="6" x2="18" y2="18"/>
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="6"  x2="21" y2="6"/>
                <line x1="3" y1="12" x2="21" y2="12"/>
                <line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
            )}
          </button>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div className="sm:hidden flex flex-col border-t border-black/[0.08] text-sm text-gray-600 pb-2">
            <a href="#projects"       onClick={() => setMenuOpen(false)} className="px-2 py-3 hover:text-[#3D2B1F] transition-colors border-b border-black/[0.08]">Projects</a>
            <a href="#apps"           onClick={() => setMenuOpen(false)} className="px-2 py-3 hover:text-[#3D2B1F] transition-colors border-b border-black/[0.08]">Apps</a>
            <a href="#certifications" onClick={() => setMenuOpen(false)} className="px-2 py-3 hover:text-[#3D2B1F] transition-colors border-b border-black/[0.08]">Certifications</a>
            <a href={personal.resumeUrl} target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)} className="px-2 py-3 hover:text-[#3D2B1F] transition-colors border-b border-black/[0.08]">Resume</a>
            <a href={`mailto:${personal.email}`} onClick={() => setMenuOpen(false)} className="px-2 py-3 hover:text-[#3D2B1F] transition-colors">Contact</a>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section id="home" className="px-6 sm:px-8 py-16 sm:py-20">
        <div className="max-w-5xl w-full mx-auto grid md:grid-cols-5 gap-12 items-center">

          {/* Left */}
          <div className="md:col-span-3 space-y-7">
            <div>
              <h1 className="font-bold tracking-tight text-5xl sm:text-6xl text-[#3D2B1F] leading-tight">
                Dr. Amol<br />Prakash
                <span style={{ opacity: cursorVisible ? 1 : 0, color: cursorColor, transition: 'opacity 0.08s' }}>_</span>
              </h1>
              <p className="text-gray-600 text-base mt-3">
                Data Scientist · Healthcare Analytics · AI in Medicine
              </p>
            </div>

            {/* Education */}
            <div>
              <p className="text-gray-600 text-xs font-medium uppercase tracking-wide mb-3">Education</p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-[#3D2B1F]">–</span>
                  <span className="text-gray-700">M.S. Health Informatics</span>
                  <span className="text-[#3D2B1F]/30">—</span>
                  <span className="text-gray-600">Indiana University</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-[#3D2B1F]">–</span>
                  <span className="text-gray-700">M.B.B.S.</span>
                  <span className="text-[#3D2B1F]/30">—</span>
                  <span className="text-gray-600">Uzhhorod National University</span>
                </div>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed max-w-md text-base">{personal.tagline}</p>

            {/* CTAs — exactly 2 */}
            <div className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="px-5 py-2.5 bg-[#3D2B1F] text-[#EBDBBC] text-base font-semibold rounded hover:bg-[#2D1F14] transition-colors"
              >
                View Projects
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="px-5 py-2.5 border border-[#3D2B1F]/40 text-[#3D2B1F] text-base rounded hover:border-[#3D2B1F] transition-colors"
              >
                Get in Touch
              </a>
            </div>

            {/* Social links — small and secondary */}
            <div className="flex items-center gap-4 text-xs text-gray-600 flex-wrap">
              <a href={personal.github}    target="_blank" rel="noopener noreferrer" className="hover:text-[#3D2B1F] transition-colors">github</a>
              <span className="text-[#3D2B1F]/30">·</span>
              <a href={personal.linkedin}  target="_blank" rel="noopener noreferrer" className="hover:text-[#3D2B1F] transition-colors">linkedin</a>
              <span className="text-[#3D2B1F]/30">·</span>
              <a href={personal.twitter}   target="_blank" rel="noopener noreferrer" className="hover:text-[#3D2B1F] transition-colors">twitter</a>
              <span className="text-[#3D2B1F]/30">·</span>
              <a href={personal.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-[#3D2B1F] transition-colors">instagram</a>
              <span className="text-[#3D2B1F]/30">·</span>
              <a href={personal.tableau}   target="_blank" rel="noopener noreferrer" className="hover:text-[#3D2B1F] transition-colors">tableau</a>
            </div>
          </div>

          {/* Right: photo + terrain */}
          <div className="md:col-span-2 flex flex-col items-center gap-5">
            <div className="relative w-80 h-80 sm:w-[360px] sm:h-[360px] overflow-hidden border border-black/[0.12] rounded-lg shadow-sm flex-shrink-0">
              <Image src="/assets/headshot_circle.png" alt="Dr. Amol Prakash" fill className="object-cover" priority />
            </div>
            <div className="w-full bg-[#EBDBBC] rounded overflow-hidden hidden md:block" style={terrainVars}>
              <Terrain intensity={0.6} play theme="light" />
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="px-6 sm:px-8 py-12 border-t border-black/[0.12]">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-bold text-3xl text-[#3D2B1F] mb-10">Projects</h2>

          <div className="mb-10">
            <p className="text-gray-600 text-xs font-medium uppercase tracking-wide mb-4">ML / AI</p>
            <div className="space-y-3">
              {mlProjects.map((p) => <ProjectCard key={p.id} project={p} />)}
            </div>
          </div>

          <div className="mb-10">
            <p className="text-gray-600 text-xs font-medium uppercase tracking-wide mb-4">Mobile Apps</p>
            <div className="space-y-3">
              {mobileProjects.map((p) => <ProjectCard key={p.id} project={p} />)}
            </div>
          </div>

          <div>
            <p className="text-gray-600 text-xs font-medium uppercase tracking-wide mb-4">Web Apps</p>
            <div className="space-y-3">
              {webProjects.map((p) => <ProjectCard key={p.id} project={p} />)}
            </div>
          </div>
        </div>
      </section>

      {/* Published Apps */}
      <section id="apps" className="px-6 sm:px-8 py-12 border-t border-black/[0.12]">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-bold text-3xl text-[#3D2B1F] mb-8">Published Apps</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-4 p-5 border border-black/[0.12] rounded">
              <span className="text-3xl shrink-0">🍎</span>
              <div>
                <p className="text-[#3D2B1F] font-medium text-base">Apple App Store</p>
                <p className="text-gray-600 text-sm mt-1">Coming soon</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-5 border border-black/[0.12] rounded">
              <span className="text-3xl shrink-0">🤖</span>
              <div>
                <p className="text-[#3D2B1F] font-medium text-base">Google Play Store</p>
                <p className="text-gray-600 text-sm mt-1">Coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="px-6 sm:px-8 py-12 border-t border-black/[0.12]">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-bold text-3xl text-[#3D2B1F] mb-8">Certifications</h2>
          <div className="space-y-3">
            {certifications.map((cert) => (
              <CertCard key={cert.name} cert={cert} />
            ))}
          </div>
        </div>
      </section>

      {/* Slow widget */}
      <div className="border-t border-black/[0.12] bg-[#EBDBBC] overflow-hidden" style={terrainVars}>
        <Slow intensity={0.5} play theme="light" />
      </div>

      {/* Footer */}
      <footer className="px-6 sm:px-8 py-6 border-t border-black/[0.12] flex items-center justify-between text-sm text-gray-600">
        <span>© {new Date().getFullYear()} Dr. Amol Prakash</span>
        <div className="flex gap-4 flex-wrap justify-end">
          <a href={personal.github}    target="_blank" rel="noopener noreferrer" className="hover:text-[#3D2B1F] transition-colors">github</a>
          <a href={personal.linkedin}  target="_blank" rel="noopener noreferrer" className="hover:text-[#3D2B1F] transition-colors">linkedin</a>
          <a href={personal.twitter}   target="_blank" rel="noopener noreferrer" className="hover:text-[#3D2B1F] transition-colors">twitter</a>
          <a href={personal.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-[#3D2B1F] transition-colors">instagram</a>
          <a href={personal.leetcode}  target="_blank" rel="noopener noreferrer" className="hover:text-[#3D2B1F] transition-colors">leetcode</a>
        </div>
      </footer>
    </div>
  );
}

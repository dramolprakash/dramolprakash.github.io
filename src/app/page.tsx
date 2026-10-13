'use client';

import { useState, useEffect, type CSSProperties } from 'react';
import Image from 'next/image';
import { Terrain } from '@lucasmarkes/hairline/react';
import { personal, projects, certifications } from '@/lib/data';

const mlProjects     = projects.filter((p) => p.group === 'ml');
const mobileProjects = projects.filter((p) => p.group === 'mobile');
const webProjects    = projects.filter((p) => p.group === 'web');

const terrainVars: CSSProperties = {
  '--hairline-plate': '#000000',
  '--hairline-hi':    '#4ade80',
  '--hairline-edge':  '#166534',
  '--hairline-mid':   '#14532d',
  '--hairline-lo':    '#052e16',
} as CSSProperties;

type Project = (typeof projects)[number];

function ProjectCard({ project: p }: { project: Project }) {
  return (
    <div className="flex items-start gap-4 p-4 border border-white/10 rounded hover:border-green-400/40 hover:bg-white/[0.03] transition-all group">
      <span className="text-green-400 font-mono mt-0.5 shrink-0">→</span>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <a
            href={p.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-medium text-base group-hover:text-green-400 transition-colors"
          >
            {p.title}
          </a>
          {p.demo && (
            <a
              href={p.demo}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-sm px-2 py-0.5 border border-green-400/40 text-green-400 rounded font-mono hover:bg-green-400/10 transition-colors shrink-0"
            >
              live demo ↗
            </a>
          )}
        </div>
        <p className="text-gray-400 text-sm mt-1 leading-snug">{p.problem}</p>
        <div className="flex flex-wrap gap-1 mt-2">
          {p.tools.slice(0, 5).map((t) => (
            <span key={t} className="text-sm px-2 py-0.5 bg-white/5 text-gray-400 border border-white/10 rounded font-mono">{t}</span>
          ))}
        </div>
      </div>
      <span className="text-green-400 text-sm font-mono whitespace-nowrap shrink-0 hidden sm:block">{p.metrics[0]}</span>
    </div>
  );
}

export default function Home() {
  const [mouse, setMouse] = useState({ x: -1000, y: -1000 });
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const onMove = (e: MouseEvent) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  useEffect(() => {
    const id = setInterval(() => setBlink((b) => !b), 530);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden selection:bg-green-400 selection:text-black">

      {/* Cursor glow */}
      <div
        className="pointer-events-none fixed z-50 rounded-full"
        style={{
          width: 400,
          height: 400,
          left: mouse.x - 200,
          top: mouse.y - 200,
          background: 'radial-gradient(circle, rgba(74,222,128,0.07) 0%, transparent 65%)',
          transition: 'left 60ms linear, top 60ms linear',
        }}
      />

      {/* Nav */}
      <nav className="px-8 py-4 flex items-center justify-between border-b border-white/10 sticky top-0 bg-black/90 backdrop-blur-sm z-40">
        <span className="text-green-400 text-base font-mono">~/amolprakash</span>
        <div className="flex items-center gap-5 text-sm font-mono">
          <a href={personal.github}   target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-green-400 transition-colors">github</a>
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-green-400 transition-colors">linkedin</a>
          <a href={personal.tableau}  target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-green-400 transition-colors">tableau</a>
          <a href={`mailto:${personal.email}`}        className="text-gray-500 hover:text-green-400 transition-colors hidden sm:inline">email</a>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="px-8 py-20">
        <div className="max-w-5xl w-full mx-auto grid md:grid-cols-5 gap-12 items-center">

          {/* Left */}
          <div className="md:col-span-3 space-y-7">
            <div>
              <p className="text-green-400/60 text-sm font-mono mb-3">// hello world</p>
              <h1 className="text-5xl sm:text-6xl font-bold text-white tracking-tight leading-tight">
                Dr. Amol<br />Prakash
                <span className="text-green-400" style={{ opacity: blink ? 1 : 0, transition: 'opacity 0.08s' }}>_</span>
              </h1>
              <p className="text-green-400/80 text-base mt-3 font-mono">
                &gt; Data Scientist · Healthcare Analytics · AI in Medicine
              </p>
            </div>

            {/* Education */}
            <div>
              <p className="text-gray-600 text-sm uppercase tracking-widest font-mono mb-3">Education</p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm font-mono">
                  <span className="text-green-400">▸</span>
                  <span className="text-gray-300">M.S. Health Informatics</span>
                  <span className="text-gray-700">—</span>
                  <span className="text-gray-500">Indiana University</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-mono">
                  <span className="text-green-400">▸</span>
                  <span className="text-gray-300">M.B.B.S.</span>
                  <span className="text-gray-700">—</span>
                  <span className="text-gray-500">Uzhhorod National University</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-mono">
                  <span className="text-green-400">▸</span>
                  <span className="text-gray-300">Clinical Data Analyst II</span>
                  <span className="text-gray-700">@</span>
                  <span className="text-gray-500">IU School of Medicine</span>
                </div>
              </div>
            </div>

            <p className="text-gray-400 leading-relaxed max-w-md text-base">{personal.tagline}</p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <a href="#projects" className="px-5 py-2.5 bg-green-400 text-black text-base font-bold font-mono rounded hover:bg-green-300 transition-colors">
                view_projects()
              </a>
              <a href={personal.resumeUrl} className="px-5 py-2.5 border border-white/20 text-gray-400 text-base font-mono rounded hover:border-green-400 hover:text-green-400 transition-colors">
                resume.pdf
              </a>
              <a href={`mailto:${personal.email}`} className="px-5 py-2.5 border border-white/20 text-gray-400 text-base font-mono rounded hover:border-green-400 hover:text-green-400 transition-colors">
                contact()
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4 text-sm font-mono flex-wrap">
              <a href={personal.github}    target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-400 transition-colors">github</a>
              <span className="text-gray-800">·</span>
              <a href={personal.linkedin}  target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-400 transition-colors">linkedin</a>
              <span className="text-gray-800">·</span>
              <a href={personal.twitter}   target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-400 transition-colors">twitter</a>
              <span className="text-gray-800">·</span>
              <a href={personal.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-400 transition-colors">instagram</a>
              <span className="text-gray-800">·</span>
              <a href={personal.tableau}   target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-400 transition-colors">tableau</a>
            </div>
          </div>

          {/* Right: photo + terrain (terrain hidden on mobile) */}
          <div className="md:col-span-2 flex flex-col items-center gap-5">
            <div className="relative w-52 h-52 sm:w-60 sm:h-60 rounded-full overflow-hidden border border-green-400/20 ring-4 ring-green-400/5 flex-shrink-0">
              <Image src="/assets/headshot_circle.png" alt="Dr. Amol Prakash" fill className="object-cover" priority />
            </div>
            <div className="w-full rounded overflow-hidden hidden md:block" style={terrainVars}>
              <Terrain intensity={0.6} play theme="dark" />
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="px-8 py-12 border-t border-white/10">
        <div className="max-w-5xl mx-auto">
          <p className="text-green-400/60 text-sm font-mono mb-2">// work</p>
          <h2 className="text-3xl font-bold text-white mb-10">Projects</h2>

          <div className="mb-10">
            <p className="text-gray-600 text-sm uppercase tracking-widest font-mono mb-4">ML / AI</p>
            <div className="space-y-3">
              {mlProjects.map((p) => <ProjectCard key={p.id} project={p} />)}
            </div>
          </div>

          <div className="mb-10">
            <p className="text-gray-600 text-sm uppercase tracking-widest font-mono mb-4">Mobile Apps</p>
            <div className="space-y-3">
              {mobileProjects.map((p) => <ProjectCard key={p.id} project={p} />)}
            </div>
          </div>

          <div>
            <p className="text-gray-600 text-sm uppercase tracking-widest font-mono mb-4">Web Apps</p>
            <div className="space-y-3">
              {webProjects.map((p) => <ProjectCard key={p.id} project={p} />)}
            </div>
          </div>
        </div>
      </section>

      {/* Published Apps */}
      <section id="apps" className="px-8 py-12 border-t border-white/10">
        <div className="max-w-5xl mx-auto">
          <p className="text-green-400/60 text-sm font-mono mb-2">// deployed</p>
          <h2 className="text-3xl font-bold text-white mb-8">Published Apps</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="flex items-center gap-4 p-5 border border-white/10 rounded hover:border-green-400/40 hover:bg-white/[0.03] transition-all group cursor-pointer"
              title="Coming soon — add your App Store developer link in data.ts"
            >
              <span className="text-3xl shrink-0">🍎</span>
              <div>
                <p className="text-white font-medium text-base group-hover:text-green-400 transition-colors">Apple App Store</p>
                <p className="text-gray-400 text-sm mt-1 font-mono">view published iOS apps →</p>
              </div>
            </a>
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="flex items-center gap-4 p-5 border border-white/10 rounded hover:border-green-400/40 hover:bg-white/[0.03] transition-all group cursor-pointer"
              title="Coming soon — add your Play Store developer link in data.ts"
            >
              <span className="text-3xl shrink-0">🤖</span>
              <div>
                <p className="text-white font-medium text-base group-hover:text-green-400 transition-colors">Google Play Store</p>
                <p className="text-gray-400 text-sm mt-1 font-mono">view published Android apps →</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="px-8 py-12 border-t border-white/10">
        <div className="max-w-5xl mx-auto">
          <p className="text-green-400/60 text-sm font-mono mb-2">// credentials</p>
          <h2 className="text-3xl font-bold text-white mb-8">Certifications</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {certifications.map((cert) => (
              <div key={cert.name} className="p-4 border border-white/10 rounded hover:border-green-400/30 transition-colors">
                <p className="text-white text-base font-medium">{cert.name}</p>
                <p className="text-gray-400 text-sm mt-1 font-mono">{cert.issuer} · {cert.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-6 border-t border-white/10 flex items-center justify-between text-sm text-gray-500 font-mono">
        <span>© {new Date().getFullYear()} Dr. Amol Prakash</span>
        <div className="flex gap-4 flex-wrap justify-end">
          <a href={personal.github}    target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">github</a>
          <a href={personal.linkedin}  target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">linkedin</a>
          <a href={personal.twitter}   target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">twitter</a>
          <a href={personal.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">instagram</a>
          <a href={personal.leetcode}  target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">leetcode</a>
        </div>
      </footer>
    </div>
  );
}

'use client';

import { useEffect, useRef, useState } from 'react';
import { projects } from '@/lib/data';
import ImagePlaceholder from './ui/ImagePlaceholder';

const toolColors: Record<string, string> = {
  Python: 'bg-blue-500/15 text-blue-300 border-blue-500/25',
  SQL: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/25',
  R: 'bg-teal-500/15 text-teal-300 border-teal-500/25',
  'Power BI': 'bg-yellow-500/15 text-yellow-300 border-yellow-500/25',
  Tableau: 'bg-orange-500/15 text-orange-300 border-orange-500/25',
  XGBoost: 'bg-violet-500/15 text-violet-300 border-violet-500/25',
  SHAP: 'bg-pink-500/15 text-pink-300 border-pink-500/25',
  default: 'bg-slate-700/50 text-slate-300 border-slate-600/50',
};

function ToolBadge({ tool }: { tool: string }) {
  const cls = toolColors[tool] || toolColors.default;
  return (
    <span className={`inline-flex px-2 py-0.5 rounded-md text-[11px] font-semibold border ${cls}`}>
      {tool}
    </span>
  );
}

function ProjectCard({ project, featured = false }: { project: (typeof projects)[0]; featured?: boolean }) {
  return (
    <div
      className={`group bg-slate-800/60 border border-slate-700/50 rounded-2xl overflow-hidden card-hover flex flex-col ${
        featured ? 'lg:col-span-2' : ''
      }`}
    >
      {/* Project image */}
      <div className={featured ? 'aspect-video' : 'aspect-[16/9]'}>
        <ImagePlaceholder
          label={project.title}
          hint={project.imagePlaceholder}
          shape="wide"
          className="w-full h-full rounded-none border-0"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6 gap-4">
        {/* Title + problem */}
        <div>
          <h3 className="text-slate-100 font-bold text-lg mb-2 group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>

        {/* Metrics */}
        <div className="flex flex-wrap gap-2">
          {project.metrics.map((m) => (
            <span
              key={m}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold rounded-lg"
            >
              <span className="w-1 h-1 rounded-full bg-emerald-400 flex-shrink-0" />
              {m}
            </span>
          ))}
        </div>

        {/* Tools */}
        <div className="flex flex-wrap gap-1.5">
          {project.tools.map((t) => (
            <ToolBadge key={t} tool={t} />
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-2 mt-auto pt-2">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost flex-1 justify-center text-xs py-2"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex-1 justify-center text-xs py-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'Machine Learning', 'Dashboard', 'NLP', 'Healthcare', 'App'];

  const filtered =
    activeFilter === 'All'
      ? projects
      : projects.filter(
          (p) =>
            p.tools.some((t) =>
              activeFilter === 'Machine Learning'
                ? ['XGBoost', 'Scikit-learn', 'TensorFlow', 'PyTorch', 'BioBERT'].includes(t)
                : activeFilter === 'Dashboard'
                ? ['Power BI', 'Tableau', 'R Shiny', 'D3.js'].includes(t)
                : activeFilter === 'NLP'
                ? ['BioBERT', 'spaCy', 'HuggingFace', 'NLP'].includes(t)
                : activeFilter === 'App'
                ? ['Flutter', 'Dart', 'Firebase'].includes(t)
                : true
            ) ||
            (activeFilter === 'Healthcare' &&
              ['REDCap', 'CDISC SDTM', 'HEDIS', 'OMOP CDM'].some((h) => p.tools.includes(h)))
        );

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
    <section id="projects" ref={sectionRef} className="py-24 lg:py-32 bg-slate-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-12 reveal">
          <p className="section-label mb-3">What I&apos;ve Built</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-100 mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            End-to-end data science projects solving real healthcare challenges — from raw EHR data to
            production-ready models and executive dashboards.
          </p>
        </div>

        {/* Filter pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 reveal">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeFilter === f
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                  : 'bg-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-700 border border-slate-700/60'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <div key={project.id} className={`reveal ${project.featured && filtered.length > 1 ? 'xl:col-span-2' : ''}`}>
              <ProjectCard project={project} featured={project.featured && filtered.length > 1} />
            </div>
          ))}
        </div>

        {/* View more */}
        <div className="text-center mt-12 reveal">
          <a
            href={`https://github.com/dramolprakash`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

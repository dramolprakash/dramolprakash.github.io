'use client';

import { useState } from 'react';
import { projects } from '@/lib/data';

export default function Projects() {
  const [filter, setFilter] = useState<'all' | 'featured'>('all');
  const filtered = filter === 'featured' ? projects.filter((p) => p.featured) : projects;

  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Projects</h2>
          <div className="flex gap-2">
            {(['all', 'featured'] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-3 py-1.5 text-sm font-medium rounded transition-colors ${
                  filter === f
                    ? 'bg-blue-600 text-white'
                    : 'border border-gray-200 text-gray-600 hover:bg-gray-100'
                }`}
              >
                {f.charAt(0).toUpperCase() + f.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project) => (
            <div
              key={project.id}
              className="border border-gray-200 rounded-lg p-5 bg-white flex flex-col gap-3"
            >
              <div>
                <h3 className="font-semibold text-gray-900">{project.title}</h3>
                <p className="text-gray-600 text-sm mt-1 leading-relaxed">{project.description}</p>
              </div>

              <div className="flex flex-wrap gap-1">
                {project.metrics.map((m) => (
                  <span
                    key={m}
                    className="px-2 py-0.5 bg-blue-50 text-blue-700 text-xs rounded"
                  >
                    {m}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-1">
                {project.tools.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 text-sm hover:underline mt-auto"
                >
                  View on GitHub →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

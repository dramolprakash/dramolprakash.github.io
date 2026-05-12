'use client';

import Image from 'next/image';
import { personal, stats } from '@/lib/data';

export default function Hero() {
  return (
    <section id="home" className="pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-5 gap-10 items-center">
          {/* Left: text */}
          <div className="md:col-span-3 space-y-5">
            <div>
              <p className="text-gray-500 text-sm font-medium mb-1">Hello, I&apos;m</p>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">
                Dr. Amol Prakash
              </h1>
              <p className="text-lg text-blue-600 font-medium mt-2">{personal.title}</p>
            </div>

            <p className="text-gray-600 leading-relaxed">
              {personal.tagline} Doctor turned informatician with deep clinical expertise,
              delivering predictive models, automated pipelines, and executive-ready dashboards.
            </p>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={() =>
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
                }
                className="px-5 py-2.5 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700 transition-colors"
              >
                View Projects
              </button>
              <a
                href={personal.resumeUrl}
                className="px-5 py-2.5 border border-gray-300 text-gray-700 text-sm font-medium rounded hover:bg-gray-50 transition-colors"
              >
                Download Resume
              </a>
              <button
                onClick={() =>
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }
                className="px-5 py-2.5 border border-gray-300 text-gray-700 text-sm font-medium rounded hover:bg-gray-50 transition-colors"
              >
                Contact Me
              </button>
            </div>

            <div className="flex items-center gap-3 pt-1 flex-wrap">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-900 transition-colors text-sm"
              >
                GitHub
              </a>
              <span className="text-gray-300">·</span>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-900 transition-colors text-sm"
              >
                LinkedIn
              </a>
              <span className="text-gray-300">·</span>
              <a
                href={personal.tableau}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-900 transition-colors text-sm"
              >
                Tableau
              </a>
              <span className="text-gray-300">·</span>
              <a
                href={`mailto:${personal.email}`}
                className="text-gray-500 hover:text-gray-900 transition-colors text-sm"
              >
                {personal.email}
              </a>
            </div>
          </div>

          {/* Right: photo + stats */}
          <div className="md:col-span-2 flex flex-col items-center gap-6">
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-gray-100 flex-shrink-0">
              <Image
                src="/assets/headshot_circle.png"
                alt="Dr. Amol Prakash"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="grid grid-cols-2 gap-3 w-full">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="border border-gray-200 rounded-lg p-4 text-center"
                >
                  <p className="text-2xl font-bold text-blue-600">
                    {stat.value}{stat.suffix}
                  </p>
                  <p className="text-gray-500 text-xs mt-1 leading-snug">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

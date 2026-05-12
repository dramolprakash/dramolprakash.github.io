import { experience } from '@/lib/data';

export default function Experience() {
  return (
    <section id="experience" className="py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Experience</h2>
        <div className="space-y-8">
          {experience.map((job, i) => (
            <div key={i} className="grid sm:grid-cols-4 gap-4">
              <div className="sm:col-span-1">
                <p className="text-sm text-gray-500">{job.period}</p>
                <p className="text-xs text-gray-400 mt-0.5">{job.location}</p>
                <p className="text-xs text-gray-400">{job.type}</p>
              </div>
              <div className="sm:col-span-3 border-l-2 border-gray-100 pl-6">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="font-semibold text-gray-900">{job.title}</h3>
                  {i === 0 && (
                    <span className="px-2 py-0.5 bg-blue-50 text-blue-600 text-xs font-medium rounded">
                      Current
                    </span>
                  )}
                </div>
                <p className="text-blue-600 text-sm font-medium mt-0.5">{job.company}</p>
                <ul className="mt-3 space-y-1.5">
                  {job.highlights.map((h, j) => (
                    <li key={j} className="text-gray-600 text-sm leading-relaxed flex gap-2">
                      <span className="text-gray-300 flex-shrink-0 mt-0.5">–</span>
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {job.tools.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

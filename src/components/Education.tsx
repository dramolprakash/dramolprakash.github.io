import { education, certifications, awards } from '@/lib/data';

export default function Education() {
  return (
    <section id="education" className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Education</h2>

        <div className="space-y-4 mb-10">
          {education.map((edu, i) => (
            <div key={i} className="border border-gray-200 rounded-lg p-5 bg-white">
              <h3 className="font-semibold text-gray-900">{edu.degree}</h3>
              <p className="text-blue-600 text-sm font-medium mt-0.5">{edu.institution}</p>
              <p className="text-gray-500 text-sm mt-0.5">
                {edu.location} · {edu.period} · GPA {edu.gpa}
              </p>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {edu.highlights.map((h) => (
                  <span key={h} className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded">
                    {h}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-lg font-semibold text-gray-900 mb-4">Certifications</h3>
        <div className="grid sm:grid-cols-2 gap-3 mb-10">
          {certifications.map((cert, i) => (
            <div key={i} className="border border-gray-200 rounded-lg p-4 bg-white">
              <p className="font-medium text-gray-900 text-sm">{cert.name}</p>
              <p className="text-gray-500 text-sm mt-0.5">
                {cert.issuer} · {cert.year}
              </p>
            </div>
          ))}
        </div>

        <h3 className="text-lg font-semibold text-gray-900 mb-4">Awards &amp; Recognition</h3>
        <div className="space-y-3">
          {awards.map((award, i) => (
            <div key={i} className="border border-gray-200 rounded-lg p-4 bg-white">
              <p className="font-medium text-gray-900 text-sm">{award.title}</p>
              <p className="text-gray-500 text-sm">
                {award.org} · {award.year}
              </p>
              <p className="text-gray-600 text-sm mt-1">{award.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

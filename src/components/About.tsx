import { personal } from '@/lib/data';

const highlights = [
  { label: 'Current Role', value: 'Clinical Data Analyst II, IU School of Medicine' },
  { label: 'Education', value: 'MBBS + M.S. Health Informatics (Indiana University)' },
  { label: 'Clinical Background', value: '5 years as Emergency Physician' },
  { label: 'Location', value: 'Indianapolis, IN' },
];

export default function About() {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">About Me</h2>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2 space-y-4">
            {personal.bio.map((para, i) => (
              <p key={i} className="text-gray-600 leading-relaxed">
                {para}
              </p>
            ))}
          </div>
          <div className="space-y-4">
            {highlights.map((h) => (
              <div key={h.label} className="border-l-2 border-blue-600 pl-3">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                  {h.label}
                </p>
                <p className="text-gray-800 text-sm font-medium mt-0.5">{h.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

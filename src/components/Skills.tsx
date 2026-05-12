import { skills } from '@/lib/data';

export default function Skills() {
  return (
    <section id="skills" className="py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Skills</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((cat) => (
            <div key={cat.category} className="border border-gray-200 rounded-lg p-5">
              <h3 className="text-sm font-semibold text-gray-900 mb-3">{cat.category}</h3>
              <div className="flex flex-wrap gap-1.5">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

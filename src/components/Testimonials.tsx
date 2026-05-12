import { testimonials } from '@/lib/data';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Recommendations</h2>
        <p className="text-gray-500 text-sm mb-8">
          Add recommendations from managers, professors, or collaborators. Request them via LinkedIn.
        </p>

        <div className="grid sm:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div key={i} className="border border-gray-200 rounded-lg p-5 flex flex-col gap-4">
              <p className="text-gray-600 text-sm leading-relaxed italic">&ldquo;{t.quote}&rdquo;</p>
              <div className="pt-3 border-t border-gray-100 mt-auto">
                <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                <p className="text-gray-500 text-xs mt-0.5">{t.title}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <a
            href="https://www.linkedin.com/in/dr-amol-prakash-mbbs-mshi-6120aa11b/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 text-sm hover:underline"
          >
            Request a recommendation on LinkedIn →
          </a>
        </div>
      </div>
    </section>
  );
}

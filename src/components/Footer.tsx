import { personal, navLinks } from '@/lib/data';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center">
                <span className="text-white font-bold text-sm">AP</span>
              </div>
              <span className="font-bold text-slate-100">Dr. Amol Prakash</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Healthcare data scientist bridging clinical expertise and advanced analytics to improve patient outcomes.
            </p>
          </div>

          {/* Nav links */}
          <div>
            <p className="text-slate-400 font-semibold text-sm mb-3">Navigation</p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-500 text-sm hover:text-slate-300 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="text-slate-400 font-semibold text-sm mb-3">Connect</p>
            <div className="flex flex-col gap-2">
              {[
                { label: 'LinkedIn', href: personal.linkedin },
                { label: 'GitHub', href: personal.github },
                { label: 'Tableau Public', href: personal.tableau },
                { label: `${personal.email}`, href: `mailto:${personal.email}` },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="text-slate-500 text-sm hover:text-slate-300 transition-colors"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800/60 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-600 text-xs">
            &copy; {year} Dr. Amol Prakash. All rights reserved.
          </p>
          <p className="text-slate-700 text-xs">
            Built with Next.js · Tailwind CSS · Deployed on GitHub Pages
          </p>
        </div>
      </div>
    </footer>
  );
}

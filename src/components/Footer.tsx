import { personal, navLinks } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-start justify-between gap-6">
          <div>
            <p className="font-semibold text-gray-900">Dr. Amol Prakash</p>
            <p className="text-gray-500 text-sm mt-1">
              Healthcare data scientist · Indianapolis, IN
            </p>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-500 hover:text-gray-900 text-sm transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {[
              { label: 'LinkedIn', href: personal.linkedin },
              { label: 'GitHub', href: personal.github },
              { label: 'Tableau', href: personal.tableau },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-900 text-sm transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-100 mt-6 pt-6">
          <p className="text-gray-400 text-xs">
            © {new Date().getFullYear()} Dr. Amol Prakash. Built with Next.js · Deployed on GitHub Pages.
          </p>
        </div>
      </div>
    </footer>
  );
}

'use client';

import { useState } from 'react';
import { personal } from '@/lib/data';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, subject, message } = form;
    const mailtoLink = `mailto:${personal.email}?subject=${encodeURIComponent(subject || `Portfolio contact from ${name}`)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
    window.location.href = mailtoLink;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const inputClass =
    'w-full border border-gray-300 rounded px-4 py-2.5 text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:border-blue-500 transition-colors';

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Get in Touch</h2>
        <p className="text-gray-600 mb-8">
          Open to healthcare data science roles, research collaborations, and consulting opportunities.
        </p>

        <div className="grid md:grid-cols-5 gap-10">
          {/* Left: contact info */}
          <div className="md:col-span-2 space-y-6">
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Email</p>
              <a
                href={`mailto:${personal.email}`}
                className="text-blue-600 text-sm hover:underline"
              >
                {personal.email}
              </a>
            </div>

            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Links</p>
              <ul className="space-y-1.5">
                {[
                  { label: 'LinkedIn', href: personal.linkedin },
                  { label: 'GitHub', href: personal.github },
                  { label: 'Tableau Public', href: personal.tableau },
                  { label: 'LeetCode', href: personal.leetcode },
                ].map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-blue-600 transition-colors text-sm"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <a
                href={personal.resumeUrl}
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700 transition-colors"
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* Right: form */}
          <div className="md:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">Name</label>
                  <input
                    type="text"
                    placeholder="Jane Smith"
                    className={inputClass}
                    required
                    value={form.name}
                    onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">Email</label>
                  <input
                    type="email"
                    placeholder="jane@company.com"
                    className={inputClass}
                    required
                    value={form.email}
                    onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">Subject</label>
                <input
                  type="text"
                  placeholder="Data Scientist opportunity"
                  className={inputClass}
                  value={form.subject}
                  onChange={(e) => setForm((s) => ({ ...s, subject: e.target.value }))}
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">Message</label>
                <textarea
                  rows={5}
                  placeholder="Tell me about the role or project..."
                  className={`${inputClass} resize-none`}
                  required
                  value={form.message}
                  onChange={(e) => setForm((s) => ({ ...s, message: e.target.value }))}
                />
              </div>

              <button
                type="submit"
                className="w-full px-5 py-2.5 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700 transition-colors"
              >
                {submitted ? 'Opening email client...' : 'Send Message'}
              </button>
              <p className="text-gray-400 text-xs">
                This opens your default email client pre-filled with your message.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

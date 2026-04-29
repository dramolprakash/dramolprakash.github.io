import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Dr. Amol Prakash — Data Scientist · Healthcare Analytics · AI',
  description:
    'Healthcare data scientist with clinical expertise in predictive modeling, machine learning, and analytics. M.S. Health Informatics, Indiana University. Available for Data Scientist and Clinical Informatics roles.',
  keywords: [
    'data scientist', 'healthcare analytics', 'clinical informatics',
    'machine learning', 'health informatics', 'Python', 'SQL', 'Tableau',
    'Power BI', 'XGBoost', 'NLP', 'FHIR', 'OMOP', 'Indiana University',
  ],
  authors: [{ name: 'Dr. Amol Prakash' }],
  openGraph: {
    title: 'Dr. Amol Prakash — Healthcare Data Scientist',
    description: 'Transforming clinical complexity into data-driven decisions that improve patient outcomes.',
    url: 'https://dramolprakash.github.io',
    siteName: 'Dr. Amol Prakash Portfolio',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}

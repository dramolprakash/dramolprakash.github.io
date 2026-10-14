export const personal = {
  name: 'Dr. Amol Prakash',
  title: 'Data Scientist · Healthcare Analytics · AI in Medicine',
  tagline: 'Transforming clinical complexity into data-driven decisions that improve patient outcomes.',
  bio: [
    'I am a healthcare data scientist with a unique background that bridges clinical medicine and advanced informatics. After practicing as an emergency physician for five years, I transitioned into health data science to tackle the systemic challenges I witnessed firsthand — fragmented data, delayed diagnoses, and reactive care models.',
    'Holding an M.S. in Health Informatics from Indiana University and an M.B.B.S., I bring domain expertise that most data scientists simply do not have. I do not just analyze health data — I understand what it means at the bedside.',
    'My focus is building predictive models, automated ETL pipelines, and executive dashboards that translate raw clinical data into measurable outcomes: reduced readmissions, faster diagnoses, and smarter resource allocation.',
  ],
  email: 'amolprakash11@gmail.com',
  github: 'https://github.com/dramolprakash',
  linkedin: 'https://www.linkedin.com/in/dramolprakash/',
  tableau: 'https://public.tableau.com/app/profile/amol.prakash8604/vizzes',
  leetcode: 'https://leetcode.com/u/user0929aV/',
  twitter: 'https://x.com/amolkrxk',
  instagram: 'https://www.instagram.com/amol.krxk/',
  resumeUrl: '/assets/resume.pdf',
  calendlyUrl: '#',
};

export const stats = [
  { value: 5, suffix: '+', label: 'Years Clinical Experience' },
  { value: 90, suffix: '%', label: 'ML Model Accuracy' },
  { value: 10, suffix: '+', label: 'Data Projects' },
  { value: 2, suffix: '', label: 'Advanced Degrees' },
];

export const skills = [
  {
    category: 'Programming',
    icon: 'code',
    items: ['Python', 'SQL', 'R', 'Base SAS', 'PROC SQL', 'Dart', 'Kotlin'],
  },
  {
    category: 'Machine Learning',
    icon: 'brain',
    items: ['XGBoost', 'Scikit-learn', 'TensorFlow', 'PyTorch', 'NLP', 'Deep Learning', 'Ensemble Methods', 'Feature Engineering'],
  },
  {
    category: 'Healthcare & Standards',
    icon: 'hospital',
    items: ['HL7 FHIR', 'LOINC', 'SNOMED CT', 'ICD-10-CM', 'CDISC SDTM/ADaM', 'OMOP CDM', 'REDCap', 'HIPAA/HITECH', 'HEDIS'],
  },
  {
    category: 'Visualization',
    icon: 'chart',
    items: ['Tableau', 'Power BI', 'D3.js', 'R Shiny', 'Plotly', 'Excel Macros', 'Matplotlib', 'Seaborn'],
  },
  {
    category: 'Databases & Cloud',
    icon: 'database',
    items: ['MySQL', 'PostgreSQL', 'Snowflake', 'Azure Databricks', 'REDCap', 'Cerner EMR', 'Epic EHR'],
  },
  {
    category: 'Statistics & Methods',
    icon: 'stats',
    items: ['Survival Analysis', 'Bayesian Statistics', 'Time Series', 'ANOVA', 'Meta-analysis', 'Longitudinal Modeling', 'NLP'],
  },
  {
    category: 'Tools & Platforms',
    icon: 'tools',
    items: ['Git / GitHub', 'Jupyter', 'VS Code', 'Docker', 'Azure DevOps', 'RStudio', 'SPSS', 'STATA'],
  },
];

export const projects = [
  // ── ML / AI ────────────────────────────────────────────────────────────────
  {
    id: 1,
    group: 'ml',
    title: 'Hospital Readmission Risk Predictor',
    problem: 'Predict 30-day readmission risk for Medicare patients to reduce $26B+ in annual preventable hospitalisation costs.',
    description: 'Production-ready ML system built on CMS DE-SynPUF synthetic data (50K patients, 5 claims types). Engineered 55 leakage-free features across demographic, clinical, utilisation, and prescription domains. Logistic Regression model deployed as a Streamlit app and a FastAPI + Docker REST API.',
    tools: ['Python', 'Logistic Regression', 'Scikit-learn', 'FastAPI', 'Streamlit', 'Docker'],
    metrics: ['69.6% AUC-ROC', '$661K+ annual savings', '50K patients · 5 data types'],
    github: 'https://github.com/dramolprakash/hospital_readmission_predictor',
    demo: 'https://hospitalreadmissionpredictorbyamol.streamlit.app/',
    featured: true,
  },
  {
    id: 2,
    group: 'ml',
    title: 'Cardiovascular Disease Prediction',
    problem: 'Identify key risk factors for cardiovascular disease onset and build an accurate predictive model across 70,000+ individuals.',
    description: 'Comparative analysis of Logistic Regression, Gaussian Naive Bayes, Random Forest, and Decision Tree classifiers on a 70K+ individual Kaggle CVD dataset. Identified blood pressure, cholesterol, and smoking as top predictors. Includes full EDA and feature importance analysis.',
    tools: ['Python', 'Scikit-learn', 'Random Forest', 'Logistic Regression', 'Pandas', 'Seaborn'],
    metrics: ['71% accuracy', '70K+ individuals', '4 ML models compared'],
    github: 'https://github.com/dramolprakash/Cardiovascular-disease-prediction-ML-project-by-Dr.-Amol-Prakash',
    demo: '',
    featured: false,
  },
  {
    id: 3,
    group: 'ml',
    title: 'Bone Fracture Risk Prediction',
    problem: 'Predict bone fracture likelihood from patient demographics, bone mineral density, BMI, and comorbidities to enable targeted prevention.',
    description: 'ML classification study using the Kaggle bone mineral density dataset. Investigated the impact of age, gender, BMD, diabetes, coronary artery disease, CKD, and COPD on fracture risk. Full pipeline: data cleaning, EDA, visualisation, and predictive modelling.',
    tools: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib', 'Seaborn'],
    metrics: ['BMD + comorbidity analysis', 'Age/gender stratification', 'Risk factor ranking'],
    github: 'https://github.com/dramolprakash/Predicting-Bone-Fractures-through-Machine-Learning-by-Dr.Amol-Prakash',
    demo: '',
    featured: false,
  },
  {
    id: 4,
    group: 'ml',
    title: 'Immune Dysregulation in Perinatal HIV Exposure',
    problem: 'Determine which immune developmental patterns are preserved or disrupted in children under 5 with perinatally acquired HIV.',
    description: 'Cross-sectional immunological study (103 children: HIV-negative, ART-naïve, ART-treated). Applied Kruskal-Wallis tests with BKY FDR correction, Dunn post-hoc pairwise comparisons, and Spearman age-correlation analyses across 125 immune parameters. Complex heatmaps and correlograms produced in R.',
    tools: ['R', 'Python', 'Kruskal-Wallis', 'Spearman Correlation', 'ComplexHeatmap', 'ggplot2'],
    metrics: ['103 participants', '125 immune parameters', '39 significant after BKY FDR'],
    github: 'https://github.com/dramolprakash/Immune-Dysregulation-Patterns-in-Perinatal-HIV-Exposure',
    demo: '',
    featured: false,
  },
  // ── Mobile Apps ────────────────────────────────────────────────────────────
  {
    id: 5,
    group: 'mobile',
    title: 'PillPal – Smart Medication Dispenser',
    problem: 'Chronic disease patients miss medication schedules, leading to poor outcomes and costly hospitalisations.',
    description: 'Flutter app simulating a Bluetooth-connected smart dispenser with WHOOP-style adherence dashboard, 7-day performance strips, dose timeline, refill alerts, and streak tracking. Mock BLE connection, SQLite persistence, and push notifications. Live demo on Appetize.io.',
    tools: ['Flutter', 'Dart', 'Provider', 'SQLite', 'BLE', 'Android SDK 21+'],
    metrics: ['Android API 21+', 'Live Appetize demo', 'Full CRUD + adherence tracking'],
    github: 'https://github.com/dramolprakash/PillPal-App',
    demo: 'https://appetize.io/app/b_sth3r7c7g64ibx2kmkmkxhxqca',
    featured: false,
  },
  // ── Web Apps ───────────────────────────────────────────────────────────────
  {
    id: 6,
    group: 'web',
    title: 'Giveaway Finder',
    problem: 'Manually scanning for legitimate US-resident giveaways is tedious and error-prone — especially distinguishing residency from citizenship requirements.',
    description: 'Automated web app using Brave Search API + Claude AI to continuously scan for sweepstakes. Intelligently distinguishes "US residents eligible" from "US citizens only". Scores each giveaway on eligibility (0–100) and opportunity (0–100), filters scams, and exports colour-coded Excel reports. Auto-scans every 6 hours.',
    tools: ['Python', 'FastAPI', 'Claude AI', 'Brave Search API', 'SQLite', 'Alpine.js'],
    metrics: ['30+ search queries per scan', '34-column Excel export', '6-hour auto-scan interval'],
    github: 'https://github.com/dramolprakash/Give-away-finder',
    demo: '',
    featured: false,
  },
];

export const experience = [
  {
    title: 'Clinical Data Analyst II',
    company: 'Indiana University School of Medicine',
    location: 'Indianapolis, IN',
    period: 'May 2024 – Present',
    type: 'Full-time',
    highlights: [
      'Spearheaded advanced SQL/Python analytics for NIH-funded studies, reducing ETL cycle time by 35% and improving data accuracy by 30%',
      'Engineered automated ETL pipelines integrating REDCap, Cerner EMR, claims, and laboratory datasets using Azure Databricks',
      'Developed interactive Power BI/Tableau dashboards tracking HEDIS and CMS quality metrics adopted by clinical leadership',
      'Collaborated with biostatisticians to apply survival analysis and longitudinal modeling on patient outcome datasets',
    ],
    tools: ['Python', 'SQL', 'Power BI', 'Tableau', 'Azure Databricks', 'REDCap', 'Cerner'],
    logoPlaceholder: 'IU School of Medicine logo',
  },
  {
    title: 'Research Data Analyst',
    company: 'PHLI Lab, Indiana University',
    location: 'Indianapolis, IN',
    period: 'Aug 2024 – Present',
    type: 'Part-time',
    highlights: [
      'Processed and analyzed large-scale EHR datasets using OMOP CDM standards for population health research',
      'Built NLP pipelines to extract structured data from unstructured clinical notes using BioBERT and spaCy',
      'Contributed to IRB protocol development and manuscript preparation for peer-reviewed journal submissions',
    ],
    tools: ['Python', 'NLP', 'OMOP CDM', 'R', 'BioBERT', 'SQL'],
    logoPlaceholder: 'Indiana University logo',
  },
  {
    title: 'Data Analyst',
    company: 'BioHealth Institute Research Center (BHIRC)',
    location: 'Indiana University',
    period: 'Jan 2024 – Aug 2024',
    type: 'Full-time',
    highlights: [
      'Designed and validated CDISC SDTM/ADaM-compliant datasets for two Phase II clinical trials',
      'Automated statistical reporting using SAS and R, reducing QC turnaround by 40%',
      'Created interactive R Shiny applications for real-time trial monitoring by investigators',
    ],
    tools: ['SAS', 'R', 'CDISC SDTM', 'R Shiny', 'REDCap', 'SQL'],
    logoPlaceholder: 'BHIRC logo',
  },
  {
    title: 'Clinical Data Analyst',
    company: 'NCARF',
    location: 'India',
    period: 'Sep 2023 – Jan 2024',
    type: 'Full-time',
    highlights: [
      'Managed clinical data collection and quality assurance for multi-site observational studies',
      'Conducted statistical analysis using SPSS and Excel for outcome reporting',
      'Ensured HIPAA-equivalent data governance standards across study sites',
    ],
    tools: ['SPSS', 'Excel', 'SQL', 'REDCap', 'Python'],
    logoPlaceholder: 'NCARF logo',
  },
  {
    title: 'Emergency Physician',
    company: 'District Hospital',
    location: 'India',
    period: 'Jan 2018 – Feb 2023',
    type: 'Full-time',
    highlights: [
      'Provided emergency care in a high-volume district hospital serving 200+ patients/day',
      'Identified systemic data quality gaps in clinical documentation, motivating transition to health informatics',
      'Trained junior staff on documentation standards and evidence-based clinical protocols',
    ],
    tools: ['Clinical Practice', 'ICD-10', 'EHR Documentation', 'HIPAA'],
    logoPlaceholder: 'Hospital logo',
  },
];

export const education = [
  {
    degree: 'M.S. Health Informatics (CAHIIM-Accredited)',
    institution: 'Indiana University — Luddy School of Informatics',
    location: 'Indianapolis, IN',
    period: 'Aug 2023 – May 2025',
    gpa: '3.8 / 4.0',
    highlights: ['Machine Learning in Healthcare', 'Health Data Analytics', 'Clinical NLP', 'Health IT Systems', 'Biostatistics'],
    logoPlaceholder: 'Indiana University Luddy School logo',
  },
  {
    degree: 'M.B.B.S. (Doctor of Medicine)',
    institution: 'Uzhhorod National University',
    location: 'Uzhhorod, Ukraine',
    period: 'Sep 2011 – Jun 2017',
    gpa: '3.5 / 4.0',
    highlights: ['Clinical Medicine', 'Pathophysiology', 'Pharmacology', 'Emergency Medicine', 'Internal Medicine'],
    logoPlaceholder: 'Uzhhorod National University logo',
  },
];

export const certifications = [
  // ── 2025 ──────────────────────────────────────────────────────────────────
  {
    name: 'Certified Associate in Project Management (CAPM)®',
    issuer: 'Project Management Institute',
    year: 'Nov 2025',
    url: '',
  },
  {
    name: 'Prompt Engineering & Programming with OpenAI',
    issuer: 'Columbia+',
    year: 'Sep 2025',
    url: '',
  },
  {
    name: 'Responsible Conduct of Research — All of Us Research Program',
    issuer: 'The National Institutes of Health',
    year: 'Jul 2025',
    url: '',
  },
  {
    name: 'AI Fundamentals',
    issuer: 'DataCamp',
    year: 'Jun 2025',
    url: '',
  },
  {
    name: 'AI Ethics',
    issuer: 'DataCamp',
    year: 'Jun 2025',
    url: '',
  },
  {
    name: 'Generative AI Concepts',
    issuer: 'DataCamp',
    year: 'Jun 2025',
    url: '',
  },
  {
    name: 'Large Language Models (LLMs) Concepts',
    issuer: 'DataCamp',
    year: 'Jun 2025',
    url: '',
  },
  {
    name: 'Understanding Machine Learning',
    issuer: 'DataCamp',
    year: 'Jun 2025',
    url: '',
  },
  {
    name: 'Understanding ChatGPT',
    issuer: 'DataCamp',
    year: 'May 2025',
    url: '',
  },
  {
    name: 'Understanding Artificial Intelligence',
    issuer: 'DataCamp',
    year: 'May 2025',
    url: '',
  },
  {
    name: 'Data Literacy Certificate',
    issuer: 'DataCamp',
    year: 'Apr 2025',
    url: '',
  },
  {
    name: 'Data Literacy',
    issuer: 'DataCamp',
    year: 'Apr 2025',
    url: '',
  },
  {
    name: 'Data Literacy Case Study: Remote Working Analysis',
    issuer: 'DataCamp',
    year: 'Mar 2025',
    url: '',
  },
  {
    name: 'Data Storytelling Concepts',
    issuer: 'DataCamp',
    year: 'Mar 2025',
    url: '',
  },
  {
    name: 'Forming Analytical Questions',
    issuer: 'DataCamp',
    year: 'Mar 2025',
    url: '',
  },
  {
    name: 'Introduction to Data Culture',
    issuer: 'DataCamp',
    year: 'Mar 2025',
    url: '',
  },
  {
    name: 'Introduction to Data',
    issuer: 'DataCamp',
    year: 'Mar 2025',
    url: '',
  },
  {
    name: 'Communicating Data Insights',
    issuer: 'DataCamp',
    year: 'Mar 2025',
    url: '',
  },
  {
    name: 'Introduction to Data Literacy',
    issuer: 'DataCamp',
    year: 'Mar 2025',
    url: '',
  },
  {
    name: 'Introduction to Statistics',
    issuer: 'DataCamp',
    year: 'Mar 2025',
    url: '',
  },
  {
    name: 'Joining Data in SQL',
    issuer: 'DataCamp',
    year: 'Jan 2025',
    url: '',
  },
  // ── 2024 ──────────────────────────────────────────────────────────────────
  {
    name: 'Microsoft Certified: Azure Data Fundamentals (DP-900)',
    issuer: 'Microsoft',
    year: 'Dec 2024',
    url: '',
  },
  {
    name: 'Tableau Desktop Specialist',
    issuer: 'Tableau / Salesforce',
    year: 'Dec 2024',
    url: '',
  },
  {
    name: 'Intermediate SQL',
    issuer: 'DataCamp',
    year: 'Dec 2024',
    url: '',
  },
  {
    name: 'Introduction to SQL',
    issuer: 'DataCamp',
    year: 'Dec 2024',
    url: '',
  },
  {
    name: 'Biomedical PI',
    issuer: 'CITI Program',
    year: 'Sep 2024',
    url: '',
  },
  {
    name: 'Biomedical Responsible Conduct of Research',
    issuer: 'CITI Program',
    year: 'Sep 2024',
    url: '',
  },
  {
    name: 'GCP — Social and Behavioral Research Best Practices for Clinical Research',
    issuer: 'CITI Program',
    year: 'Sep 2024',
    url: '',
  },
  {
    name: 'Good Clinical Practice (GCP)',
    issuer: 'CITI Program',
    year: 'Sep 2024',
    url: '',
  },
  {
    name: 'IUEHS Biosafety Training',
    issuer: 'CITI Program',
    year: 'Sep 2024',
    url: '',
  },
  {
    name: 'Data Manipulation with pandas',
    issuer: 'DataCamp',
    year: 'Jul 2024',
    url: '',
  },
  {
    name: 'Intermediate Python',
    issuer: 'DataCamp',
    year: 'Jun 2024',
    url: '',
  },
  {
    name: 'MySQL Essential Training',
    issuer: 'LinkedIn Learning',
    year: 'Apr 2024',
    url: '',
  },
  // ── 2023 ──────────────────────────────────────────────────────────────────
  {
    name: 'Google Data Analytics Certificate',
    issuer: 'Google / Coursera',
    year: 'Dec 2023',
    url: '',
  },
  {
    name: 'Machine Learning Specialization',
    issuer: 'Stanford Online / Coursera',
    year: 'Dec 2023',
    url: '',
  },
  {
    name: 'SAS® 9.4 Cert Prep: Part 01 SAS Programming Essentials',
    issuer: 'LinkedIn Learning',
    year: 'Dec 2023',
    url: '',
  },
  {
    name: 'Learning Excel: Data Analysis',
    issuer: 'LinkedIn Learning',
    year: 'Dec 2023',
    url: '',
  },
  {
    name: 'Advanced SQL for Data Scientists',
    issuer: 'LinkedIn Learning',
    year: 'Dec 2023',
    url: '',
  },
  {
    name: 'MySQL Installation and Configuration',
    issuer: 'LinkedIn Learning',
    year: 'Dec 2023',
    url: '',
  },
  {
    name: 'Introduction to Python',
    issuer: 'DataCamp',
    year: 'Nov 2023',
    url: '',
  },
  {
    name: 'Biomedical Researcher',
    issuer: 'CITI Program',
    year: 'Oct 2023',
    url: '',
  },
  {
    name: 'Level 1: NRMN Entering Mentoring Training',
    issuer: 'National Research Mentoring Network',
    year: 'Aug 2023',
    url: '',
  },
];

export const awards = [
  {
    title: 'Student Volunteer',
    org: 'AMIA Annual Symposium',
    year: 'Nov 2024',
    description: 'Selected to volunteer at the premier academic informatics conference in the United States.',
  },
  {
    title: 'Best Group Project Award',
    org: 'Indiana University — INFO B581',
    year: 'Jan 2024',
    description: 'Awarded best project in Health Informatics Standards for a comprehensive FHIR interoperability solution.',
  },
];

export const testimonials = [
  {
    quote: 'Add your first recommendation here. Ask a supervisor, professor, or collaborator for a short quote about your work and impact.',
    name: 'Your Manager / Supervisor',
    title: 'Title, Company',
    avatarPlaceholder: 'Manager headshot',
  },
  {
    quote: 'A recommendation from a research collaborator or professor who has seen your analytical work and can speak to your technical depth.',
    name: 'Research Collaborator',
    title: 'Professor / PI, Institution',
    avatarPlaceholder: 'Professor headshot',
  },
  {
    quote: 'A peer or client testimonial about the impact of a dashboard, model, or analysis you delivered that solved a real business problem.',
    name: 'Clinical Stakeholder',
    title: 'Director / Clinician, Hospital',
    avatarPlaceholder: 'Clinician headshot',
  },
];

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

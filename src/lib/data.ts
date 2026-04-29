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
  linkedin: 'https://www.linkedin.com/in/dr-amol-prakash-mbbs-mshi-6120aa11b/',
  tableau: 'https://public.tableau.com/app/profile/amol.prakash8604/vizzes',
  leetcode: 'https://leetcode.com/u/user0929aV/',
  resumeUrl: '#',
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
  {
    id: 1,
    title: 'Hospital Readmission Prediction',
    problem: 'Predict 30-day readmission risk for heart failure patients using EHR data to enable proactive discharge planning.',
    description: 'Built an XGBoost ensemble model trained on 50,000+ patient records from Cerner EMR, integrating labs, vitals, diagnoses (ICD-10), and social determinants. Deployed via an interactive Power BI dashboard used by clinical case managers.',
    tools: ['Python', 'XGBoost', 'SHAP', 'SQL', 'Power BI', 'Azure Databricks'],
    metrics: ['87% AUC-ROC', '35% reduction in avoidable readmissions', '50K+ patient records'],
    github: 'https://github.com/dramolprakash',
    demo: '',
    featured: true,
    imagePlaceholder: 'Hospital Readmission Dashboard — ML model performance charts, SHAP feature importance plot, ROC curve',
  },
  {
    id: 2,
    title: 'Cardiovascular Disease Prediction',
    problem: 'Develop an explainable ML model to predict cardiovascular disease risk from clinical biomarkers.',
    description: 'XGBoost-based classification pipeline achieving 90% accuracy with SHAP-based explainability. Includes full EDA, feature engineering, cross-validation, and a Streamlit demo interface.',
    tools: ['Python', 'XGBoost', 'SHAP', 'Scikit-learn', 'Streamlit', 'Pandas'],
    metrics: ['90% accuracy', '0.93 AUC', 'Top 3 SHAP features identified'],
    github: 'https://github.com/dramolprakash/Cardiovascular-disease-prediction-ML-project-by-Dr.-Amol-Prakash',
    demo: '',
    featured: false,
    imagePlaceholder: 'Cardiovascular ML — confusion matrix, SHAP summary plot, feature correlation heatmap',
  },
  {
    id: 3,
    title: 'PillPal – Medication Adherence App',
    problem: 'Chronic disease patients frequently miss medication schedules, leading to poor outcomes and costly hospitalizations.',
    description: 'Cross-platform mobile app built with Flutter/Dart and Firebase for smart adherence tracking. Flask API backend handles medication schedules, push reminders, and adherence analytics dashboard for clinicians.',
    tools: ['Dart', 'Flutter', 'Firebase', 'Flask', 'Python', 'REST API'],
    metrics: ['Multi-platform iOS & Android', 'Real-time adherence tracking', 'Clinician dashboard'],
    github: 'https://github.com/dramolprakash/PillPal-App',
    demo: '',
    featured: false,
    imagePlaceholder: 'PillPal App — mobile app screens showing medication tracker, reminder settings, adherence charts',
  },
  {
    id: 4,
    title: 'Clinical Trial Analytics Dashboard',
    problem: 'Research teams lacked real-time visibility into enrollment progress, protocol deviations, and adverse event patterns across multiple clinical sites.',
    description: 'Built an end-to-end REDCap → Power BI pipeline with automated Python ETL. Dashboard tracks CDISC SDTM-compliant data across enrollment, safety, and efficacy endpoints. Reduced manual reporting from 3 days to 2 hours.',
    tools: ['REDCap', 'Python', 'Power BI', 'CDISC SDTM', 'SQL', 'Azure'],
    metrics: ['90% reduction in report prep time', 'CDISC-compliant', '4 clinical sites'],
    github: 'https://github.com/dramolprakash',
    demo: '',
    featured: false,
    imagePlaceholder: 'Clinical Trial Dashboard — enrollment funnel, adverse events timeline, protocol deviation tracker',
  },
  {
    id: 5,
    title: 'NLP Medical Text Classification',
    problem: 'Unstructured clinical notes contain critical diagnostic information that is difficult to extract and analyze at scale.',
    description: 'Fine-tuned BioBERT on 20,000 de-identified clinical notes to classify diagnoses, extract medication mentions, and identify risk flags. Achieved 91% F1 on the held-out test set with full explainability using attention visualization.',
    tools: ['Python', 'BioBERT', 'HuggingFace', 'spaCy', 'PyTorch', 'NLP'],
    metrics: ['91% F1-score', '20K clinical notes', 'Real-time inference API'],
    github: 'https://github.com/dramolprakash',
    demo: '',
    featured: false,
    imagePlaceholder: 'NLP Pipeline — attention heatmap on clinical note, entity extraction visualization, F1 performance charts',
  },
  {
    id: 6,
    title: 'Population Health Claims Analytics',
    problem: 'Health plan needed actionable insights from 2M+ claims records to identify high-cost patient cohorts and gaps in preventive care.',
    description: 'SQL + Python pipeline processing 2M+ claims records with HEDIS measure automation. Tableau dashboard enables drill-down by diagnosis group, geography, and cost driver. Identified $1.2M in avoidable costs.',
    tools: ['SQL', 'Python', 'Tableau', 'HEDIS', 'Snowflake', 'dbt'],
    metrics: ['2M+ claims records', '$1.2M avoidable cost identified', '15 HEDIS measures'],
    github: 'https://github.com/dramolprakash',
    demo: '',
    featured: false,
    imagePlaceholder: 'Claims Analytics Dashboard — cost breakdown by DRG, geographic heat map, HEDIS compliance scorecard',
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
  {
    name: 'Microsoft Certified: Azure Data Fundamentals (DP-900)',
    issuer: 'Microsoft',
    year: '2024',
    badgePlaceholder: 'Azure DP-900 badge',
  },
  {
    name: 'Tableau Desktop Specialist',
    issuer: 'Tableau / Salesforce',
    year: '2024',
    badgePlaceholder: 'Tableau badge',
  },
  {
    name: 'Google Data Analytics Certificate',
    issuer: 'Google / Coursera',
    year: '2023',
    badgePlaceholder: 'Google Analytics badge',
  },
  {
    name: 'Machine Learning Specialization',
    issuer: 'Stanford Online / Coursera',
    year: '2023',
    badgePlaceholder: 'Stanford ML badge',
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

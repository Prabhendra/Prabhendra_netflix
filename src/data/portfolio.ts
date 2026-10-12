/**
 * Central portfolio data — generated from the current resume.
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 * Nothing here should be added unless it appears on the resume.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

const base = import.meta.env.BASE_URL;

export const profile = {
  fullName: 'Prabhendra Singh',
  displayName: 'Prabhendra Singh',
  firstName: 'PRABHENDRA',
  seriesTag: 'Sr. Software Engineer',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'A PRABHENDRA ORIGINAL',
  role: 'Data Scientist | Generative AI Engineer',
  tagline: ['Data Scientist', 'Generative AI','Agentic AI'],
  intro:
    'Data Scientist and Generative AI Engineer with 4.5+ years of experience building LLM-powered, production-ready solutions for healthcare and analytics. I design RAG systems, prompt-driven workflows, and scalable AI products using Python, Databricks, Azure, and FastAPI.',
  location: 'India',
  email: 'prabhendras@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/prabhendra-s-16479121a',
    github: 'https://github.com/prabhendra',
  },
  resumePdf: `${base}assets/Prabhendra.pdf`,
  portrait: {
    src: `${base}assets/portrait-720.webp`,
    srcSet: `${base}assets/portrait-420.webp 420w, ${base}assets/portrait-720.webp 720w, ${base}assets/portrait-1100.webp 1100w`,
    alt: 'Portrait of Prabhendra Singh',
  },
  interests: ['RAG', 'Generative AI', 'Machine Learning', 'Deep Learning', 'Data Science', 'Prompt Engineering', 'Agentic AI'],
};

export const education = [
  {
    school: 'National Institute of Rural Development',
    place: 'India',
    degree: 'Internship — GeoSpatial Data Science',
    period: 'Oct 2021 – May 2022',
    score: 'Internship',
  },
  {
    school: 'Central University of Karnataka',
    place: 'Karnataka',
    degree: 'M.Sc — Geoinformatics',
    period: '2020 – 2022',
    score: 'Master’s degree',
  },
  {
    school: 'Central University of Karnataka',
    place: 'Karnataka',
    degree: 'B.Sc — Applied Geoinformatics & Geography (Hons)',
    period: '2017 – 2020',
    score: 'Bachelor’s degree',
  },
];

export const experience = [
  {
    company: 'Harita Hive Private Limited',
    role: 'Data Scientist & Generative AI Engineer',
    place: 'India',
    period: 'May 2023 – Present',
    points: [
      'Designed and deployed GenAI-powered healthcare applications that let payer teams query FHIR-based systems using natural-language prompts and simplified search experiences.',
      'Built LangChain-based RAG pipelines for contextual clinical responses, secure REST APIs for critical healthcare resources, and Azure deployment workflows using MLflow and App Service.',
      'Delivered scalable, secure AI systems for healthcare analytics using Python, FastAPI, Azure Data Lake, Azure OpenAI, Docker, and prompt engineering best practices.',
    ],
  },
  {
    company: 'Movate Technologies Pvt. Ltd.',
    role: 'Data Scientist',
    place: 'India',
    period: 'Oct 2022 – Apr 2023',
    points: [
      'Developed healthcare marketing analytics automation to extract competitor SEO signals, reviews, ratings, and digital presence metrics using Python, BeautifulSoup, Selenium, and Google Search APIs.',
      'Parsed structured and unstructured data from Google Maps, JustDial, and Practo to benchmark client performance and improve patient review and reputation strategies.',
      'Automated reporting workflows and reduced manual Excel analysis time by 80% while improving CTR, CPL, and keyword trend accuracy.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  /** Omit when the repository isn't public — the GitHub button is hidden instead of linking to a 404. */
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'fhir-genai',
    title: 'Gen AI Assistant using FHIR Data',
    year: '2024 – Present',
    genre: 'AI • Healthcare • RAG',
    logline: 'A GenAI-powered natural-language search engine to help payers query FHIR datasets and extract clinical insights with simplified prompts.',
    stack: ['Python', 'FastAPI', 'LangChain', 'Azure OpenAI'],
    build: [
      'Designed a GenAI-powered natural language query engine for FHIR datasets, enabling non-technical users to extract actionable insights from healthcare data with minimal friction.',
      'Integrated a LangChain-based RAG pipeline to generate contextual, accurate clinical responses from healthcare information stored in Azure Data Lake.',
    ],
    features: [
      'Natural-language query engine for FHIR data',
      'LangChain-based RAG pipeline',
      'Secure REST APIs for payer applications',
      'Experiment tracking with MLflow',
      'Azure App Service deployment',
    ],
    metrics: [
      { value: 'FHIR', label: 'healthcare data access' },
      { value: 'RAG', label: 'clinical context retrieval' },
      { value: 'Azure', label: 'deployment platform' },
      { value: 'Docker', label: 'containerized services' },
    ],
    palette: { from: '#140b1d', via: '#6a3ad8', to: '#09070d', accent: '#9a7cff' },
    motif: 'shield',
  },
  {
    id: 'prior-authorization',
    title: 'Prior Authorization on Azure Databricks',
    year: '2024',
    genre: 'AI • Healthcare • Databricks',
    logline: 'A GenAI-enabled solution to automate and optimize prior authorization workflows in healthcare using Databricks and RAG.',
    stack: ['Python', 'Databricks', 'RAG', 'FastAPI'],
    build: [
      'Built a scalable healthcare AI workflow to automate and optimize prior authorization processes using Databricks for ML pipelines and document understanding.',
      'Integrated RAG-based GenAI for decision support and document intelligence, improving how prior-authorization records are processed, summarized, and interpreted.',
    ],
    features: [
      'Databricks-based processing pipeline',
      'RAG document intelligence',
      'FAISS vector search',
      'Prompt engineering and REST APIs',
    ],
    metrics: [
      { value: 'RAG', label: 'document understanding' },
      { value: 'FAISS', label: 'vector retrieval' },
      { value: 'Azure', label: 'managed deployment' },
      { value: 'Databricks', label: 'scalable ML processing' },
    ],
    palette: { from: '#0f1e22', via: '#1b7a8f', to: '#070d10', accent: '#59d5ff' },
    motif: 'flow',
  },
  {
    id: 'time-series-forecasting',
    title: 'Time Series Analysis and Forecasting',
    year: '2023 – 2024',
    genre: 'ML • Forecasting • Data Science',
    logline: 'A time-series analysis project using Python and statistical models to detect patterns, forecast outcomes, and extract business insights.',
    stack: ['Python', 'Prophet', 'XGBoost', 'Scikit-learn'],
    build: [
      'Built a robust pipeline for collecting and preprocessing timestamped data using Pandas and NumPy, followed by exploratory analysis to uncover trends, anomalies, and structural patterns.',
      'Evaluated and refined forecasting models such as Prophet, XGBoost, and Scikit-learn to improve predictive accuracy and business decision support.',
    ],
    features: [
      'Exploratory data analysis for temporal data',
      'Lag and rolling feature engineering',
      'Statistical + ML forecasting models',
      'Visualization with Matplotlib and Seaborn',
    ],
    metrics: [
      { value: 'Python', label: 'core stack' },
      { value: 'Prophet', label: 'forecasting model' },
      { value: 'XGBoost', label: 'ensemble modeling' },
      { value: 'EDA', label: 'pattern discovery' },
    ],
    palette: { from: '#1d1106', via: '#a35d0c', to: '#090807', accent: '#ffb14d' },
    motif: 'tenants',
  },
  {
    id: 'healthcare-marketing-analytics',
    title: 'Healthcare Marketing Analytics Optimization',
    year: '2022 – 2023',
    genre: 'Analytics • Selenium • Python',
    logline: 'An automated healthcare competitor-research and digital presence analytics platform that monitored clinics, hospitals, and providers online.',
    stack: ['Python', 'BeautifulSoup', 'Selenium', 'Pandas'],
    build: [
      'Developed web-scraping pipelines to extract SEO keywords, Google reviews, ratings, and service offerings from competitor websites and healthcare directories.',
      'Automated weekly refreshes and campaign reporting, reducing manual Excel analysis time by 80% while improving CTR, CPL, and keyword-trend insights.',
    ],
    features: [
      'Web scraping and data extraction',
      'Google Maps and review analysis',
      'Campaign benchmarking and reporting',
      'Performance metric automation',
    ],
    metrics: [
      { value: '80%', label: 'manual time saved' },
      { value: 'CTR', label: 'campaign metric' },
      { value: 'CPL', label: 'benchmarking' },
      { value: 'Python', label: 'automation' },
    ],
    palette: { from: '#190a14', via: '#7a1538', to: '#09070b', accent: '#ff597b' },
    motif: 'shield',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'ai-experience',
    title: '3.8+ Years in AI',
    org: 'Healthcare & Analytics',
    detail: 'Built and deployed LLM-driven, production-grade solutions across payer workflows, healthcare intelligence, and predictive analytics.',
    laurel: 'Production AI',
  },
  {
    id: 'fhir-rag',
    title: 'FHIR + RAG Specialist',
    org: 'Harita Hive',
    detail: 'Developed GenAI search and retrieval workflows to improve healthcare data access and clinical response generation.',
    laurel: 'GenAI in Healthcare',
  },
  {
    id: 'databricks',
    title: 'Databricks Certified',
    org: 'Databricks',
    detail: 'Certified Data Engineer Associate with direct experience in Databricks-powered ML and healthcare pipeline workflows.',
    laurel: 'Certified',
  },
  {
    id: 'ai-automation',
    title: 'Healthcare Workflow Automation',
    org: 'Prior Authorization & Analytics',
    detail: 'Automated manual review and reporting processes through AI, ML, and workflow optimization in clinical and payer environments.',
    laurel: 'Workflow Impact',
  },
  {
    id: 'resilience',
    title: '80% Manual Time Saved',
    org: 'Campaign Analytics',
    detail: 'Reduced repetitive Excel-based analysis effort while improving reporting quality, speed, and decision support.',
    laurel: 'Efficiency Gain',
  },
];

export type Certification = { issuer: string; name: string; link: string };

export const certifications: Certification[] = [
  { issuer: 'Udemy', name: 'Machine Learning A-Z™: Hands-On Python In Data Science', link: '#' },
  { issuer: 'Databricks', name: 'Databricks Certified Data Engineer Associate', link: '#' },
  { issuer: 'Udemy', name: 'NLP: Natural Language Processing with Python', link: '#' },
  { issuer: 'Udemy', name: 'LangChain: Develop LLM Powered applications with LangChain', link: '#' },
  { issuer: 'Udemy', name: 'ChatGPT Masterclass: Build Solutions and Apps with ChatGPT', link: '#' },
  { issuer: 'PW Skills', name: 'Full Stack Data Science', link: '#' },
  { issuer: 'Harita Hive', name: 'GEN AI Expert-L2', link: '#' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    subtitle: 'Core implementation stack',
    skills: [
      { name: 'Python', mono: 'Py', note: 'Primary' },
      { name: 'SQL', mono: 'Sq' },
      { name: 'MySQL', mono: 'My' },
    ],
  },
  {
    id: 'aiml',
    title: 'AI / ML',
    subtitle: 'Models, NLP and LLM systems',
    skills: [
      { name: 'ML', mono: 'Ml' },
      { name: 'NLP', mono: 'Np' },
      { name: 'Gen AI', mono: 'Ga' },
      { name: 'RAG', mono: 'Rg' },
      { name: 'Prompt Engineering', mono: 'Pe' },
      { name: 'Agentic AI', mono: 'Ai' },
      { name: 'BERT', mono: 'Be' },
      { name: 'CNN', mono: 'Cn' },
      { name: 'XGBoost', mono: 'Xg' },
    ],
  },
  {
    id: 'frameworks',
    title: 'Frameworks & Tools',
    subtitle: 'Production AI tooling',
    skills: [
      { name: 'LangChain', mono: 'Lc' },
      { name: 'Autogen', mono: 'Au' },
      { name: 'KnowledgeGraph', mono: 'Kg' },
      { name: 'Scikit-learn', mono: 'Sk' },
      { name: 'FastAPI', mono: 'Fa' },
      { name: 'Streamlit', mono: 'St' },
      { name: 'MLflow', mono: 'Mf' },
      { name: 'Power BI', mono: 'Pb' },
      { name: 'Git', mono: 'Gt' },
      { name: 'OpenAI', mono: 'Op' },
    ],
  },
  {
    id: 'cloud',
    title: 'Cloud & DevOps',
    subtitle: 'Deployment and platform work',
    skills: [
      { name: 'Databricks', mono: 'Db' },
      { name: 'Azure', mono: 'Az' },
      { name: 'Azure App Service', mono: 'As' },
      { name: 'Docker', mono: 'Dk' },
      { name: 'Azure Data Lake', mono: 'Dl' },
    ],
  },
  {
    id: 'data',
    title: 'Data & Analytics',
    subtitle: 'Insights from structured and unstructured data',
    skills: [
      { name: 'Vector Databases', mono: 'Vd' },
      { name: 'SQL Server', mono: 'Ss' },
      { name: 'MySQL', mono: 'My' },
      { name: 'Data Visualization', mono: 'Dv' },
      { name: 'Pandas', mono: 'Pa' },
      { name: 'NumPy', mono: 'Np' },
      { name: 'Prophet', mono: 'Pr' },
    ],
  },
];

/**
 * Factual cross-references shown when a skill card is hovered/tapped:
 * where the skill appears in the projects, certifications or achievements on the resume.
 */
export const skillEvidence: Record<string, string[]> = {
  Python: ['FHIR Gen AI Assistant', 'Prior Authorization on Azure Databricks', 'Time Series Forecasting'],
  SQL: ['Healthcare data extraction workflows', 'Payer data analytics'],
  'Gen AI': ['FHIR Gen AI Assistant', 'Prior Authorization on Azure Databricks'],
  RAG: ['FHIR Gen AI Assistant', 'Prior Authorization on Azure Databricks'],
  'Prompt Engineering': ['FHIR Gen AI Assistant', 'Prior Authorization on Azure Databricks'],
  'LangChain': ['FHIR Gen AI Assistant'],
  'Databricks': ['Prior Authorization on Azure Databricks'],
  Azure: ['FHIR Gen AI Assistant'],
  Docker: ['FHIR Gen AI Assistant'],
  'FastAPI': ['FHIR Gen AI Assistant', 'Prior Authorization on Azure Databricks'],
  'MLflow': ['FHIR Gen AI Assistant'],
  'Power BI': ['Healthcare analytics reporting'],
  'XGBoost': ['Time Series Analysis and Forecasting'],
  'Prophet': ['Time Series Analysis and Forecasting'],
  'Scikit-learn': ['Time Series Analysis and Forecasting'],
  'Pandas': ['Healthcare Marketing Analytics Optimization', 'Time Series Analysis and Forecasting'],
  'NLP': ['Gen AI healthcare applications'],
  'Agentic AI': ['Healthcare AI workflows'],
  'Vector Databases': ['RAG-based retrieval systems'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'Earth + Data',
    period: '2017 – 2022',
    synopsis: 'Academic foundations in geoinformatics, geospatial analysis, and applied data science — the base for a career in AI and intelligence-driven problem solving.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'B.Sc in Applied Geoinformatics & Geography',
        description: 'Completed B.Sc (Hons) at Central University of Karnataka, building foundational spatial and analytical skills.',
        tags: ['Geography', 'Geoinformatics'],
        runtime: '2017 – 2020',
        palette: amber,
      },
      {
        code: 'S01 E02',
        title: 'M.Sc in Geoinformatics',
        description: 'Advanced master’s work with emphasis on geospatial methods and analytical problem solving.',
        tags: ['M.Sc', 'Geoinformatics'],
        runtime: '2020 – 2022',
        palette: violet,
      },
      {
        code: 'S01 E03',
        title: 'GeoSpatial Data Science Internship',
        description: 'Worked on geospatial data science through an internship at the National Institute of Rural Development.',
        tags: ['GIS', 'Data Science'],
        runtime: 'Oct 2021 – May 2022',
        palette: jade,
      },
    ],
  },
  {
    number: 2,
    title: 'Analytics to AI',
    period: '2022 – 2023',
    synopsis: 'Transitioned into data science and analytics, building healthcare automation and campaign intelligence solutions with measurable business impact.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'Movate Technologies',
        description: 'Delivered healthcare marketing analytics optimization using Python, Selenium, BeautifulSoup, and campaign intelligence workflows.',
        tags: ['Python', 'Analytics'],
        runtime: 'Oct 2022 – Apr 2023',
        palette: crimson,
      },
      {
        code: 'S02 E02',
        title: 'Automated Insight Generation',
        description: 'Built scraping and reporting pipelines that reduced manual Excel analysis time by 80% and improved marketing recommendations.',
        tags: ['Web Scraping', 'Reporting'],
        runtime: 'Healthcare analytics',
        palette: ocean,
      },
    ],
  },
  {
    number: 3,
    title: 'Generative AI in Production',
    period: '2023 – Present',
    synopsis: 'Focused on production-grade AI systems for healthcare, combining LLMs, RAG, prompt engineering, and cloud deployment to solve real business problems.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'Harita Hive',
        description: 'Joined Harita Hive as a Data Scientist and Generative AI Engineer working on AI-powered healthcare solutions.',
        tags: ['GenAI', 'Healthcare'],
        runtime: 'May 2023 – Present',
        palette: violet,
      },
      {
        code: 'S03 E02',
        title: 'FHIR Gen AI Assistant',
        description: 'Created a natural-language query engine for FHIR data with LangChain, RAG, and Azure deployment.',
        tags: ['FHIR', 'RAG', 'Azure'],
        runtime: 'Sept 2024 – Present',
        palette: crimson,
      },
      {
        code: 'S03 E03',
        title: 'Prior Authorization AI',
        description: 'Built a medical workflow automation platform on Azure Databricks with RAG and document intelligence.',
        tags: ['Databricks', 'Prompt Engineering'],
        runtime: 'Jan 2024 – Sept 2024',
        palette: jade,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Specialty', title: 'GenAI', detail: 'FHIR, RAG, prompt engineering, Azure AI', palette: amber },
  { label: 'Core stack', title: 'Python', detail: 'Core language across AI and analytics workflows', palette: crimson },
  { label: 'Healthcare AI', title: 'FHIR Assistant', detail: 'Natural-language access to payer data', palette: ocean },
  { label: 'Platform', title: 'Databricks', detail: 'Distributed ML and healthcare pipelines', palette: violet },
  { label: 'Deployment', title: 'Azure', detail: 'App Service, OpenAI, Data Lake', palette: jade },
  { label: 'Applied ML', title: 'RAG', detail: 'Contextual document understanding for healthcare workflows', palette: amber },
  { label: 'Forecasting', title: 'Time Series', detail: 'Prophet, XGBoost, Scikit-learn', palette: crimson },
  { label: 'Experience', title: '3.8+ Years', detail: 'Data Science + Generative AI', palette: ocean },
  { label: 'Academic base', title: 'M.Sc Geoinformatics', detail: 'Central University of Karnataka', palette: jade },
  { label: 'Current focus', title: 'AI in Healthcare', detail: 'Clinical reasoning, retrieval, automation', palette: violet },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Profile',
    title: 'Data Scientist & Generative AI Engineer',
    lines: ['3.8+ years building AI systems in healthcare and analytics', 'Python • RAG • Databricks • Azure'],
    chips: ['GenAI', 'Healthcare AI', 'LLMs'],
  },
  {
    kicker: 'Core skills',
    title: 'LLM systems and data workflows',
    lines: ['Python, SQL, ML, NLP, Gen AI, RAG, Prompt Engineering', 'LangChain, Azure, Databricks, FastAPI, Docker'],
    chips: ['Python', 'RAG', 'LangChain', 'Databricks'],
  },
  {
    kicker: 'Experience',
    title: 'Harita Hive',
    lines: ['May 2023 – Present', 'GenAI-powered healthcare applications and clinical insights'],
    chips: ['FHIR', 'Healthcare AI', 'Azure'],
  },
  {
    kicker: 'Projects',
    title: 'Healthcare AI in production',
    lines: ['FHIR Gen AI Assistant', 'Prior Authorization on Azure Databricks', 'Time Series Forecasting'],
  },
  {
    kicker: 'Education',
    title: 'Geoinformatics foundation',
    lines: ['M.Sc — Geoinformatics, Central University of Karnataka', 'B.Sc — Applied Geoinformatics & Geography (Hons)'],
  },
  {
    kicker: 'Certified',
    title: 'Certifications',
    lines: ['Databricks Certified Data Engineer Associate', 'Machine Learning A-Z', 'NLP with Python', 'LangChain + ChatGPT'],
  },
  {
    kicker: 'Current mission',
    title: 'AI-driven healthcare transformation',
    lines: ['RAG and GenAI systems for payer workflows and clinical insights'],
  },
];

export type ProfileId = 'prabhendra' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'prabhendra',
    name: 'Prabhendra',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, achievements & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & training', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • 2026`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from the resume', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Moments • ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};

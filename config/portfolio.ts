/* ─────────────────────────────────────────────────────────────────────
   PORTFOLIO CONFIG — Grant Ho
   Personal content based on résumé.
   Visual settings → design.ts
   ───────────────────────────────────────────────────────────────────── */

import { SECTIONS, LABELS } from './design';

// ── 1. Personal information ────────────────────────────────────────────
export const ME = {
  firstName: 'Grant',
  lastName: 'Ho',
  role: 'CS Student & ML Researcher',
  email: 'grantho701@gmail.com',
  github: 'hihitherethere',
  linkedin: 'grant-ho-85729b278',
  resumePath: '/resume.pdf',
};

// ─────────────────────────────────────────────────────────────────────
// Everything below is derived automatically.
// ─────────────────────────────────────────────────────────────────────

const GITHUB_URL = `https://github.com/${ME.github}`;
const LINKEDIN_URL = `https://linkedin.com/in/${ME.linkedin}`;
const EMAIL_HREF = `mailto:${ME.email}`;

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:3000');

// ── Who you are ───────────────────────────────────────────────────────
export const PERSON = {
  firstName: ME.firstName,
  lastName: ME.lastName,
  fullName: `${ME.firstName} ${ME.lastName}`,
  role: ME.role,
};

// ── Site metadata ────────────────────────────────────────────────────
export const SITE = {
  url: SITE_URL,
  title: `${PERSON.fullName} | ${PERSON.role}`,
  titleSuffix: `| ${PERSON.fullName}`,
  description:
    'Grant Ho is a UCLA computer science student interested in ' +
    'machine learning, algorithms, and mathematical problem-solving.',
};

// ── Navigation ────────────────────────────────────────────────────────
export const NAV_LINKS = [
  SECTIONS.experience && {
    label: LABELS.experience.nav,
    href: '#experience',
  },
  SECTIONS.projects && {
    label: LABELS.projects.nav,
    href: '#projects',
  },
  SECTIONS.contact && {
    label: LABELS.contact.nav,
    href: '#contact',
  },
].filter(Boolean) as { label: string; href: string }[];

// ── 2. Hero ───────────────────────────────────────────────────────────
export const HERO = {
  greeting: "Hi, I'm",

  taglines: [
    'Computer Science Student at UCLA',
    'Machine Learning Researcher',
    'USACO Platinum & Codeforces Master',
    'Interested in Algorithms and Mathematics',
  ] as string[],

  bio:
    "I'm a UCLA computer science student interested in machine learning, " +
    'algorithms, and mathematical problem-solving. From forecasting chaotic ' +
    'dynamical systems to building full-stack applications, I enjoy turning ' +
    'abstract ideas into working systems and exploring the mathematics behind them.',

  photo: undefined as string | undefined,

  ctas: [
    { label: 'View my projects →', href: '#projects', primary: true },
    { label: 'Get in touch', href: '#contact', primary: false },
  ],
};

// ── 3. Education ──────────────────────────────────────────────────────
export interface EducationEntry {
  school: string;
  degree: string;
  minor?: string;
  gpa?: string;
  graduation: string;
  courses: string[];
}

export const EDUCATION: EducationEntry[] = [
  {
    school: 'University of California, Los Angeles',
    degree: 'B.S. Computer Science',
    graduation: 'June 2029',
    courses: [
      'Linear Algebra',
      'Multivariable Calculus',
      'Differential Equations',
    ],
  },
];

// ── 4. Experience ─────────────────────────────────────────────────────
export interface ExperienceEntry {
  company: string;
  role: string;
  location: string;
  start: string;
  end: string;
  bullets: string[];
  tech: string[];
}

export const EXPERIENCE: ExperienceEntry[] = [
  {
    company: 'Aspiring Scholars Directed Research Program',
    role: 'Machine Learning Research Intern',
    location: 'Fremont, CA',
    start: 'Jun 2025',
    end: 'Sep 2025',
    bullets: [
      'Predicted chaotic dynamical systems over long time horizons with less than 5% error using neural networks.',
      'Developed and evaluated 5+ neural architectures, including LSTM, GRU, and Reservoir Computing.',
      'Evaluated models using divergence time, F-statistics, R², and other statistical measures.',
      'Applied neural forecasting methods to chaotic blood-dynamics models and drafted a research paper presenting the findings.',
    ],
    tech: [
      'Python',
      'PyTorch',
      'TensorFlow',
      'NumPy',
    ],
  },
  {
    company: 'Aspiring Scholars Directed Research Program',
    role: 'Machine Learning Research Intern',
    location: 'Fremont, CA',
    start: 'Jun 2024',
    end: 'Sep 2024',
    bullets: [
      'Developed a custom self-organizing map (SOM) to project high-dimensional data into a two-dimensional topological representation.',
      'Evaluated SOM performance using high-dimensional topological structures generated with parametric equations.',
      'Built the model in Google Colab using scikit-learn, SciPy, and NumPy.',
      'Created visualizations of data and experimental results using Matplotlib.',
    ],
    tech: [
      'Python',
      'scikit-learn',
      'NumPy',
      'SciPy',
      'Matplotlib',
      'Google Colab',
    ],
  },
];

// ── 5. Contact blurb ──────────────────────────────────────────────────
export const CONTACT_BLURB =
  "I'm interested in machine learning, theoretical computer science, " +
  'algorithms, and mathematics. If you are working on an interesting ' +
  'research problem or building something exciting, feel free to reach out.';

// ── 6. Projects ───────────────────────────────────────────────────────
export interface ProjectEntry {
  name: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  featured: boolean;
}

export const PROJECTS: ProjectEntry[] = [
  {
    name: 'Codeforces Difficulty Prediction Model',
    description:
      'Built a full-stack web application that predicts Codeforces problem ' +
      'difficulty with less than 10% error compared with actual ratings. ' +
      'Applied statistical regression to historical contest data, developed ' +
      'a Flask backend with a Supabase SQL database, and automated data ' +
      'collection through the Codeforces API. The application attracted ' +
      'approximately 100 unique users.',
    tech: [
      'Python',
      'Flask',
      'SQL',
      'Supabase',
      'HTML',
      'CSS',
      'JavaScript',
      'REST APIs',
    ],
    featured: true,
  },
  {
    name: 'Logicdle',
    description:
      'Built, tested, and deployed a full-stack application in under 40 hours ' +
      'using Claude Code. Implemented a user submission pipeline, image storage ' +
      'and retrieval, and leaderboard functionality. Reviewed the code to ' +
      'ensure sensitive information, including passwords and database keys, ' +
      'was handled securely.',
    tech: [
      'Python',
      'Claude Code',
      'Full-Stack Development',
      'Database Systems',
      'Web Security',
    ],
    featured: true,
  },
  {
    name: 'AI Coliseum — 5th Place',
    description:
      'Developed an autonomous game-playing agent for the AI Coliseum 2024 ' +
      'competition. Designed a symmetry-based exploration strategy that used ' +
      'bot dispersion to map unknown environments efficiently, implemented ' +
      'inter-agent communication to share discovered regions, and developed ' +
      'a navigation algorithm to avoid walls and environmental hazards.',
    tech: [
      'Java',
      'Artificial Intelligence',
      'Search Algorithms',
      'Multi-Agent Systems',
    ],
    featured: true,
  },
];

// ── 7. Social links ───────────────────────────────────────────────────
export const SOCIAL_LINKS = [
  { label: 'GitHub', href: GITHUB_URL },
  { label: 'LinkedIn', href: LINKEDIN_URL },
  { label: 'Email', href: EMAIL_HREF },
];

// ── 8. Contact ────────────────────────────────────────────────────────
export const CONTACT = {
  email: ME.email,
  blurb: CONTACT_BLURB,
  links: [
    { label: 'Email', href: EMAIL_HREF, display: ME.email },
    {
      label: 'GitHub',
      href: GITHUB_URL,
      display: `github.com/${ME.github}`,
    },
    {
      label: 'LinkedIn',
      href: LINKEDIN_URL,
      display: `linkedin.com/in/${ME.linkedin}`,
    },
    {
      label: 'Resume',
      href: ME.resumePath,
      display: 'Download PDF',
    },
  ],
};

// ── 9. Footer ─────────────────────────────────────────────────────────
export const FOOTER = {
  tagline: 'Exploring algorithms, mathematics, and machine learning.',
  columns: [
    {
      heading: 'Portfolio',
      links: [
        SECTIONS.experience && {
          label: LABELS.experience.nav,
          href: '#experience',
        },
        SECTIONS.projects && {
          label: LABELS.projects.nav,
          href: '#projects',
        },
        SECTIONS.contact && {
          label: LABELS.contact.nav,
          href: '#contact',
        },
      ].filter(Boolean) as { label: string; href: string }[],
    },
    {
      heading: 'Connect',
      links: [
        { label: 'GitHub', href: GITHUB_URL },
        { label: 'LinkedIn', href: LINKEDIN_URL },
        { label: 'Email', href: EMAIL_HREF },
        { label: 'Resume', href: ME.resumePath },
      ],
    },
  ],
};
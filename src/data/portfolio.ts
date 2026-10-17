

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Muhammad Ammar',
  displayName: 'Muhammad Ammar',
  firstName: 'AMMAR',
  seriesTag: 'THE SERIES',
  originalLabel: 'AN AMMAR ORIGINAL',
  role: 'Software Engineer',
  tagline: ['Software Engineer', 'Full-Stack Dev', 'Flutter & AI'],
  intro:
    'A passionate Software Engineer skilled in multiple programming languages and frameworks. I continuously seek opportunities to optimize performance and improve user experience — eager to contribute to innovative projects and make a meaningful impact through technical abilities and problem-solving skills.',
  location: 'Sargodha, Pakistan',
  phone: '+923024033605',
  email: 'malik12542541@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/muhammad-ammar-257059359/',
    github: 'https://github.com/Ammarcodee',
  },
  resumePdf: '/assets/Muhammad_Ammar_CV.pdf',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Muhammad Ammar',
  },
  interests: ['Cloud Computing (AWS)', 'Cybersecurity', 'DevOps & CI/CD'],
};

export const education = [
  {
    school: 'COMSATS University Islamabad',
    place: 'Wah Campus',
    degree: 'Bachelor of Science — Software Engineering',
    period: '2022 – 2026',
    score: 'BS(Software Engineering)',
  },
  {
    school: 'Punjab Group of Colleges',
    place: 'Sargodha',
    degree: 'ICS — Intermediate',
    period: 'Completed',
    score: 'ICS',
  },
  {
    school: 'Dar-e-Arqam Model School',
    place: 'Sargodha',
    degree: 'Matric',
    period: 'Completed',
    score: 'Matric',
  },
];

export const experience = [
  {
    company: 'Saturn Software House',
    role: 'Flutter Developer Intern',
    place: 'Remote',
    period: 'Apr 2025 – June 2025',
    points: [
      'Collaborated on the development of cross-platform mobile apps using Flutter and Dart.',
      'Assisted in UI design, API integration, and bug fixes.',
      'Participated in daily standups and contributed to Agile sprint planning.',
      'Gained hands-on experience with Firebase and Git version control.',
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
  /** Omit when the repository is not public — the GitHub button is hidden. */
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'ai-lms',
    title: 'AI-Powered LMS',
    year: '2025',
    genre: 'AI · Full-Stack · EdTech',
    logline: 'A full-stack enterprise educational platform with AI chat, plagiarism detection, and automated grade tracking.',
    stack: ['Flutter', 'Laravel', 'Python', 'RAG', 'MySQL'],
    build: [
      'Engineered a full-stack enterprise educational platform featuring tailored portals for students and teachers with real-time dynamic timetables, prerequisite-validated course registration, and automated grade tracking.',
      'Integrated an AI Chat assistant using Retrieval-Augmented Generation (RAG) to provide intelligent, context-aware answers from uploaded course materials. Built a Plagiarism and Collusion Detection engine using semantic embeddings to ensure academic integrity.',
    ],
    features: [
      'Student + Teacher portals',
      'AI Chat via RAG (context-aware answers)',
      'Plagiarism + Collusion Detection (semantic embeddings)',
      'Prerequisite-validated course registration',
      'Automated grade tracking',
      'Role-based auth via Laravel Sanctum',
      'Background jobs for ML tasks',
    ],
    metrics: [
      { value: '2', label: 'portals (student + teacher)' },
      { value: 'RAG', label: 'AI-powered Q&A' },
      { value: '100%', label: 'automated grade tracking' },
      { value: 'Sanctum', label: 'role-based authentication' },
    ],
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'tenants',
  },
  {
    id: 'car-rental-app',
    title: 'Car Rental App',
    year: '2025',
    genre: 'Flutter · Firebase · Mobile',
    logline: 'A full-featured Flutter car rental app with real-time booking and dual interfaces for renters and users.',
    stack: ['Flutter', 'Dart', 'Firebase'],
    build: [
      'Developed a full-featured car rental application with separate interfaces for both renters and users. Renters can add, update, or remove car listings including name, model, price, and optional images with automatic default images by brand.',
      'Implemented tracker management where trackers move from available to active upon booking confirmation. Focused on smooth state management, real-time Firebase updates, bottom navigation, and an intuitive user experience.',
    ],
    features: [
      'Renter dashboard (add/update/remove listings)',
      'Real-time booking notifications',
      'User browsing + booking history',
      'Dynamic availability tracking',
      'Bottom navigation (Dashboard, Trackers, Profile)',
      'Firebase real-time state management',
    ],
    metrics: [
      { value: '2', label: 'separate user interfaces' },
      { value: 'Real-time', label: 'booking notifications' },
      { value: 'Firebase', label: 'state management' },
      { value: 'Auto', label: 'status updates on booking' },
    ],
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
    motif: 'flow',
  },
  {
    id: 'devops-pipeline',
    title: 'Automated 3-Tier Deployment',
    year: '2025',
    genre: 'DevOps · CI/CD · Monitoring',
    logline: 'A scalable 3-tier app architecture with Jenkins CI/CD, SonarQube quality gates, and Prometheus/Grafana monitoring.',
    stack: ['Jenkins', 'SonarQube', 'Prometheus', 'Grafana', 'Linux'],
    build: [
      'Designed and configured a scalable 3-tier application architecture ensuring strict separation of concerns among the presentation, application, and database layers. Engineered a continuous integration pipeline using Jenkins to automate software builds and deployment workflows.',
      'Integrated SonarQube into the pipeline to enforce code quality gates, automatically detecting bugs, code smells, and security vulnerabilities prior to deployment. Implemented a robust monitoring stack using Prometheus and Grafana to visualize real-time infrastructure metrics.',
    ],
    features: [
      '3-tier architecture (presentation, application, database)',
      'Jenkins CI/CD automation pipeline',
      'SonarQube code quality + security gates',
      'Prometheus + Grafana monitoring stack',
      'Real-time infrastructure metrics visualization',
    ],
    metrics: [
      { value: '3-Tier', label: 'scalable architecture' },
      { value: 'Auto', label: 'Jenkins CI/CD builds' },
      { value: 'Gates', label: 'SonarQube quality coverage' },
      { value: 'Live', label: 'Grafana dashboards' },
    ],
    palette: { from: '#2a0610', via: '#7a0f24', to: '#0b0710', accent: '#ff3d5a' },
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
    id: 'hackathon',
    title: 'Hackathon Participant',
    org: 'HITEC, Islamabad',
    detail: 'Competed in Problem Breakdown hackathon at HITEC University, Islamabad.',
    laurel: 'Hackathon',
  },
  {
    id: 'flutter-intern',
    title: 'Flutter Intern',
    org: 'Saturn Software House',
    detail: 'Selected as Flutter Developer Intern — built cross-platform apps using Flutter, Dart, and Firebase in an Agile environment.',
    laurel: 'Industry Experience',
  },
  {
    id: 'ai-lms-builder',
    title: 'AI LMS Builder',
    org: 'Academic Project',
    detail: 'Built a full-stack AI-powered Learning Management System with RAG chat assistant and plagiarism detection engine.',
    laurel: 'AI / Full-Stack',
  },
  {
    id: 'devops-engineer',
    title: 'DevOps Pipeline',
    org: 'Personal Project',
    detail: 'Engineered an automated 3-tier CI/CD pipeline with Jenkins, SonarQube code quality gates, Prometheus and Grafana monitoring.',
    laurel: 'DevOps',
  },
  {
    id: 'multi-platform',
    title: '8+ Projects Built',
    org: 'Sep 2022 – Present',
    detail: 'Weather App, Esports Website, Quiz Game, Snake Game, Car Rental App, Smart Life Organizer, Car Rental Website, AI-Powered LMS, DevOps Pipeline.',
    laurel: 'Project Portfolio',
  },
];

export type Certification = { issuer: string; name: string; link: string };

export const certifications: Certification[] = [
  { issuer: 'Self Study', name: 'MERN for Beginners', link: '#' },
  { issuer: 'YouTube/Labs', name: 'Flutter Development Bootcamp with Dart', link: '#' },
  { issuer: 'YouTube/Labs', name: 'Complete Python Developer: Zero to Mastery', link: '#' },
  { issuer: 'YouTube/Labs', name: '100 Days of Code: Python Pro Bootcamp', link: '#' },
  { issuer: 'YouTube/Labs', name: 'HTML, CSS and JavaScript for Web Developers', link: '#' },
  { issuer: 'YouTube/Labs', name: 'C++ Tutorial for Complete Beginners', link: '#' },
  { issuer: 'YouTube/Labs', name: 'CCNA – Cisco Certified Network Associate', link: '#' },
  { issuer: 'YouTube', name: 'MCSE – Microsoft Certified Solutions Expert', link: '#' },
  { issuer: 'Self Study', name: 'Cybersecurity Fundamentals', link: '#' },
  { issuer: 'Practice', name: 'Cyber Risk Management', link: '#' },
  { issuer: 'YouTube/Labs', name: 'OSI Model – Computer Networking Basics', link: '#' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    subtitle: 'Python is primary',
    skills: [
      { name: 'Python', mono: 'Py', note: 'Primary' },
      { name: 'Java', mono: 'Jv' },
      { name: 'C++', mono: 'C+' },
      { name: 'PHP', mono: 'Ph' },
      { name: 'Dart', mono: 'Dt' },
      { name: 'SQL', mono: 'Sq' },
    ],
  },
  {
    id: 'aiml',
    title: 'AI & ML',
    subtitle: 'Intelligent systems',
    skills: [
      { name: 'RAG', mono: 'Rg', note: 'Featured' },
      { name: 'Semantic Embeddings', mono: 'Se' },
      { name: 'NLP', mono: 'Nl' },
      { name: 'Plagiarism Detection', mono: 'Pd' },
    ],
  },
  {
    id: 'frameworks',
    title: 'Frameworks',
    subtitle: 'Build with speed',
    skills: [
      { name: 'Flutter', mono: 'Fl', note: 'Primary' },
      { name: 'Laravel', mono: 'Lv' },
      { name: 'Django', mono: 'Dj' },
      { name: 'MERN Stack', mono: 'Mr' },
    ],
  },
  {
    id: 'web',
    title: 'Web & APIs',
    subtitle: 'Frontend and backend web',
    skills: [
      { name: 'HTML', mono: 'Ht' },
      { name: 'CSS', mono: 'Cs' },
      { name: 'Bootstrap', mono: 'Bs' },
      { name: 'RESTful APIs', mono: 'Ap' },
      { name: 'Sanctum Auth', mono: 'Sa' },
      { name: 'JavaScript', mono: 'Js' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    subtitle: 'Data persistence',
    skills: [
      { name: 'MySQL', mono: 'My' },
      { name: 'Firebase Firestore', mono: 'Fb' },
      { name: 'Vector Databases', mono: 'Vd' },
    ],
  },
  {
    id: 'devops',
    title: 'DevOps',
    subtitle: 'Ship and monitor',
    skills: [
      { name: 'Jenkins', mono: 'Jk' },
      { name: 'SonarQube', mono: 'Sq' },
      { name: 'Prometheus', mono: 'Pm' },
      { name: 'Grafana', mono: 'Gr' },
      { name: 'Git / GitHub', mono: 'Gt' },
      { name: 'Postman', mono: 'Po' },
      { name: 'VS Code', mono: 'Vs' },
      { name: 'Android Studio', mono: 'As' },
    ],
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    subtitle: 'Protect and defend',
    skills: [
      { name: 'CIA Triad', mono: 'Ci' },
      { name: 'OSI Model', mono: 'Os' },
      { name: 'Risk Assessment', mono: 'Ra' },
      { name: 'Vulnerability Mgmt', mono: 'Vm' },
      { name: 'IP / Subnetting', mono: 'Ip' },
      { name: 'CCNA Concepts', mono: 'Cc' },
    ],
  },
];

/**
 * Factual cross-references shown when a skill card is hovered/tapped.
 */
export const skillEvidence: Record<string, string[]> = {
  Python: ['AI-Powered LMS', 'Snake Game (Pygame)', '100 Days of Code Bootcamp'],
  Java: ['Quiz Game', 'BS Software Engineering'],
  'C++': ['C++ Tutorial Certification', 'BS Software Engineering'],
  PHP: ['Car Rental Website (Laravel)'],
  Dart: ['Flutter Internship at Saturn Software House', 'Car Rental App', 'Weather App'],
  SQL: ['MySQL projects', 'Car Rental Website'],
  RAG: ['AI-Powered LMS — AI Chat assistant'],
  'Semantic Embeddings': ['AI-Powered LMS — Plagiarism Detection'],
  NLP: ['AI-Powered LMS'],
  'Plagiarism Detection': ['AI-Powered LMS — academic integrity engine'],
  Flutter: ['Saturn Software House Internship', 'Car Rental App', 'Smart Life Organizer', 'Weather App'],
  Laravel: ['AI-Powered LMS', 'Car Rental Website'],
  Django: ['Esports Website'],
  'MERN Stack': ['MERN for Beginners course'],
  HTML: ['Esports Website', 'Car Rental Website', 'Web Dev course'],
  CSS: ['Esports Website', 'Car Rental Website', 'Web Dev course'],
  Bootstrap: ['Car Rental Website'],
  'RESTful APIs': ['AI-Powered LMS', 'Weather App'],
  JavaScript: ['Esports Website', 'Car Rental Website', 'JavaScript Web Dev course'],
  MySQL: ['Car Rental Website', 'AI-Powered LMS'],
  'Firebase Firestore': ['Car Rental App', 'Smart Life Organizer', 'Saturn Software House Internship'],
  'Vector Databases': ['AI-Powered LMS — RAG system'],
  Jenkins: ['Automated 3-Tier Deployment Pipeline'],
  SonarQube: ['Automated 3-Tier Deployment Pipeline'],
  Prometheus: ['Automated 3-Tier Deployment Pipeline'],
  Grafana: ['Automated 3-Tier Deployment Pipeline'],
  'Git / GitHub': ['Saturn Software House Internship', 'All projects'],
  'CIA Triad': ['Cybersecurity Fundamentals course'],
  'OSI Model': ['OSI Model Networking course'],
  'Risk Assessment': ['Cyber Risk Management course'],
  'CCNA Concepts': ['CCNA Cisco Certified course'],
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
    title: 'The Foundation',
    period: 'School Years',
    synopsis: 'From Dar-e-Arqam Model School to Punjab Group of Colleges — building the academic base in Sargodha.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Student',
        description: 'Matric at Dar-e-Arqam Model School, Sargodha — the beginning of the academic journey.',
        tags: ['Matric', 'Sargodha'],
        runtime: 'Completed',
        palette: amber,
      },
      {
        code: 'S01 E02',
        title: 'The Intermediate',
        description: 'ICS at Punjab Group of Colleges, Sargodha — Mathematics, Physics, and Software Engineering.',
        tags: ['ICS', 'Punjab Group of Colleges'],
        runtime: 'Completed',
        palette: violet,
      },
    ],
  },
  {
    number: 2,
    title: 'Enter: Software Engineering',
    period: 'Present',
    synopsis: 'BS Software Engineering at COMSATS University Islamabad, Wah Campus — deep diving into software engineering.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Engineer',
        description: 'Bachelor of Science in Software Engineering at COMSATS University Islamabad, Wah Campus.',
        tags: ['BS CS', 'COMSATS', 'Wah Campus'],
        runtime: 'In Progress',
        palette: ocean,
      },
      {
        code: 'S02 E02',
        title: 'The Builder',
        description: 'Started building projects from Sep 2022 — Weather App, Esports Website, Quiz Game, Snake Game and more.',
        tags: ['Flutter', 'Django', 'Java', 'Python'],
        runtime: 'Sep 2022 – Present',
        palette: jade,
      },
    ],
  },
  {
    number: 3,
    title: 'Industry Debut',
    period: 'Apr 2025 – Jun 2025',
    synopsis: 'First industry experience as Flutter Developer Intern at Saturn Software House — cross-platform apps, Agile sprints, Firebase.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'The Intern',
        description: 'Flutter Developer Intern at Saturn Software House — cross-platform mobile app development using Flutter and Dart.',
        tags: ['Flutter', 'Dart', 'Mobile Apps'],
        runtime: 'Apr 2025 – Jun 2025',
        palette: crimson,
      },
      {
        code: 'S03 E02',
        title: 'The Agile Developer',
        description: 'Participated in daily standups, Agile sprint planning, UI design, API integration, and Firebase version control.',
        tags: ['Agile', 'Firebase', 'Git', 'API Integration'],
        runtime: 'Saturn Software House',
        palette: amber,
      },
    ],
  },
  {
    number: 4,
    title: 'Building Real Products',
    period: '2025',
    synopsis: 'Three flagship projects — an AI-powered LMS, a Flutter Car Rental App, and an automated DevOps pipeline.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'The AI Architect',
        description: 'AI-Powered LMS — RAG chat assistant, plagiarism detection, student + teacher portals with Laravel Sanctum auth.',
        tags: ['RAG', 'Laravel', 'Flutter', 'Python'],
        runtime: '2025',
        palette: ocean,
      },
      {
        code: 'S04 E02',
        title: 'The App Developer',
        description: 'Car Rental App with real-time Firebase bookings, dual interfaces for renters and users, and dynamic tracking.',
        tags: ['Flutter', 'Firebase', 'Dart'],
        runtime: '2025',
        palette: violet,
      },
      {
        code: 'S04 E03',
        title: 'The DevOps Engineer',
        description: 'Automated 3-Tier Deployment Pipeline with Jenkins CI/CD, SonarQube quality gates, and Prometheus/Grafana monitoring.',
        tags: ['Jenkins', 'SonarQube', 'Prometheus', 'Grafana'],
        runtime: '2025',
        palette: jade,
      },
    ],
  },
  {
    number: 5,
    title: "What's Next",
    period: 'Now streaming',
    synopsis: 'Cloud Computing, Cybersecurity, and enterprise DevOps — the next arc of the story.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'The Next Chapter',
        description: 'Exploring Cloud Computing (AWS), Advanced Cybersecurity, and enterprise-level DevOps practices.',
        tags: ['AWS', 'Cybersecurity', 'DevOps'],
        runtime: 'In production',
        palette: crimson,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Primary language', title: 'Python', detail: 'AI/ML · RAG · Backend · Automation', palette: amber },
  { label: 'Mobile framework', title: 'Flutter', detail: 'Cross-platform · Dart · Firebase', palette: ocean },
  { label: 'AI highlight', title: 'AI-Powered LMS', detail: 'RAG Chat · Plagiarism Detection', palette: violet },
  { label: 'Industry debut', title: 'Saturn Software House', detail: 'Flutter Developer Intern', palette: crimson },
  { label: 'DevOps project', title: 'CI/CD Pipeline', detail: 'Jenkins · SonarQube · Grafana', palette: jade },
  { label: 'Hackathon', title: 'HITEC Islamabad', detail: 'Problem Breakdown Competition', palette: amber },
  { label: 'Backend choice', title: 'Laravel', detail: 'PHP Framework · Sanctum Auth', palette: crimson },
  { label: 'Database stack', title: 'MySQL + Firebase', detail: 'Relational + Real-time NoSQL', palette: ocean },
  { label: 'Projects built', title: '8+ Projects', detail: 'Sep 2022 – Present', palette: jade },
  { label: 'Current focus', title: 'Cloud + Security', detail: 'AWS · Cybersecurity · DevOps', palette: violet },
];

/** Slides for the "Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'BS · Software Engineering',
    lines: ['COMSATS University Islamabad, Wah Campus', 'Currently enrolled'],
    chips: ['BS(SE)'],
  },
  {
    kicker: 'Skills',
    title: 'Python first.',
    lines: ['C++, Java, PHP, Dart, SQL · Flutter, Laravel, Django', 'MySQL, Firebase · Jenkins, SonarQube, Prometheus, Grafana'],
    chips: ['Python', 'Flutter', 'Laravel', 'Django', 'Jenkins', 'RAG'],
  },
  {
    kicker: 'Internship',
    title: 'Industry Experience',
    lines: ['Flutter Developer Intern · Saturn Software House', 'Apr 2025 – June 2025', 'Cross-platform apps · Firebase · Agile sprints'],
  },
  {
    kicker: 'Projects',
    title: 'Three Originals',
    lines: [
      'AI-Powered LMS — RAG Chat, Plagiarism Detection, Student + Teacher portals',
      'Car Rental App — Real-time Firebase bookings, dual interfaces',
      'Automated 3-Tier Pipeline — Jenkins, SonarQube, Prometheus, Grafana',
    ],
  },
  {
    kicker: 'Achievements',
    title: 'Top Moments',
    lines: ['Hackathon — HITEC University, Islamabad', 'Flutter Internship — Saturn Software House', '8+ Projects — Sep 2022 to Present'],
  },
  {
    kicker: 'Learning',
    title: '11 Courses',
    lines: ['MERN · Flutter · Python · CCNA · MCSE', 'Cybersecurity · C++ · HTML/CSS/JS'],
  },
  {
    kicker: 'Current mission',
    title: 'Now exploring',
    lines: ['Cloud Computing (AWS) · Cybersecurity · DevOps at Scale'],
  },
];

export type ProfileId = 'ammar' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
    {
      id: 'ammar',
      name: 'Ammar',
      blurb: 'The full series, in order',
      color: '#e5132b',
      order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
    },
    {
      id: 'recruiter',
      name: 'Recruiter',
      blurb: 'Resume, achievements and skills first',
      color: '#4cc9ff',
      order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
    },
    {
      id: 'developer',
      name: 'Developer',
      blurb: 'Projects, stack and GitHub first',
      color: '#46e3a8',
      order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
    },
    {
      id: 'creative',
      name: 'Creative',
      blurb: 'The story arc and highlights first',
      color: '#ffb547',
      order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
    },
  ];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot · Education and training', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons · ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals · 2025`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from the CV', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Moments · ${certifications.length} Courses`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'CV · View and download', palette: violet },
};

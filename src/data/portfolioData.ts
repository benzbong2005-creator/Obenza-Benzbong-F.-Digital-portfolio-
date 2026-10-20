import {
  TechnicalSkill,
  SoftSkill,
  Project,
  CertificateItem,
  AchievementItem,
  HobbyItem
} from '../types/portfolio';

export const PERSONAL_INFO = {
  name: 'Benzbong F. Obenza',
  title: 'Information Technology Student',
  degree: 'Bachelor of Science in Information Technology (BSIT)',
  school: 'Torres Capitol College',
  age: 20,
  address: 'Katutungan, Wao, Lanao del Sur, Philippines',
  email: 'benzbongobenza77@gmail.com',
  secondaryEmail: 'benzbong2005@gmail.com',
  phone: '09977663910',
  formattedPhone: '+63 997 766 3910',
  availability: 'Available for OJT, Internships & Junior Roles',
  locationBrief: 'Wao, Lanao del Sur, PH',
  about:
    'Hello! My name is Benzbong F. Obenza, and I am an Information Technology student passionate about technology, software development, and continuous learning. I enjoy building projects that improve my technical skills and prepare me for a career in the IT industry.',
  careerObjective:
    'To become a skilled IT professional by continuously learning new technologies, developing practical software solutions, and contributing to meaningful projects.',
  defaultPhotoUrl: '/src/assets/images/profile_benzbong_portrait_1792452991376.jpg',
  educationLabImage: '/src/assets/images/education_campus_lab_1792452992354.jpg',
  socials: {
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
  }
};

export const TECHNICAL_SKILLS: TechnicalSkill[] = [
  {
    name: 'HTML',
    category: 'frontend',
    level: 90,
    experience: 'Core Foundation',
    description: 'Semantic markup, accessibility (a11y), clean document structure, modern HTML5 APIs.'
  },
  {
    name: 'CSS',
    category: 'frontend',
    level: 85,
    experience: 'Layout & Styling',
    description: 'Responsive Flexbox, Grid systems, modern styling workflows, media queries, animations.'
  },
  {
    name: 'JavaScript',
    category: 'frontend',
    level: 80,
    experience: 'Interactive Logic',
    description: 'ES6+ syntax, DOM manipulation, asynchronous programming, APIs, and modern front-end frameworks.'
  },
  {
    name: 'Basic Java',
    category: 'backend',
    level: 70,
    experience: 'OOP & Logic',
    description: 'Object-oriented programming, class design, data structures, algorithms, and console/desktop apps.'
  },
  {
    name: 'Database Fundamentals',
    category: 'backend',
    level: 75,
    experience: 'Data Management',
    description: 'Relational data modeling, SQL queries (SELECT, JOIN, CRUD), schema design, and entity integrity.'
  },
  {
    name: 'UI/UX Design',
    category: 'design',
    level: 80,
    experience: 'User-Centered',
    description: 'Wireframing, prototyping, user journey mapping, responsive layout principles, color theory.'
  },
  {
    name: 'Microsoft Office',
    category: 'productivity',
    level: 88,
    experience: 'Business Productivity',
    description: 'Word documentation, Excel formulas & data analysis, PowerPoint presentations, and reports.'
  },
  {
    name: 'AI Prompt Engineering',
    category: 'ai',
    level: 85,
    experience: 'Modern AI Tools',
    description: 'Structured prompt design, workflow automation, code optimization with LLMs, generative AI testing.'
  }
];

export const SOFT_SKILLS: SoftSkill[] = [
  {
    name: 'Communication',
    description: 'Articulating technical concepts clearly to peers, instructors, and stakeholders with confidence.',
    iconName: 'MessageSquare'
  },
  {
    name: 'Teamwork',
    description: 'Collaborating actively in multidisciplinary team projects, code reviews, and student organizations.',
    iconName: 'Users'
  },
  {
    name: 'Problem Solving',
    description: 'Breaking down complex coding bugs and system constraints into logical, methodical solutions.',
    iconName: 'Lightbulb'
  },
  {
    name: 'Adaptability',
    description: 'Quickly embracing novel programming frameworks, tech stacks, and evolving academic standards.',
    iconName: 'Sparkles'
  },
  {
    name: 'Time Management',
    description: 'Balancing rigorous IT coursework, software development milestones, and self-directed study schedules.',
    iconName: 'Clock'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'ai-scheduling-assistant',
    title: 'AI Scheduling Assistant',
    tagline: 'Smart automated calendar optimization and priority management',
    category: 'Artificial Intelligence & Productivity',
    description:
      'A practical software application designed to help students and busy professionals organize schedules seamlessly. It uses algorithmic prioritization and intelligent time-blocking to prevent meeting conflicts and reserve productive focus intervals.',
    image: '/src/assets/images/project_ai_scheduler_1792452992716.jpg',
    technologies: ['JavaScript', 'AI Prompt Engineering', 'CSS Grid', 'HTML5', 'Local Storage'],
    features: [
      'Intelligent automatic calendar time-blocking',
      'Priority weighting for academic and work deadlines',
      'Conflict-free meeting slot discovery',
      'Daily AI insights summary and schedule balance analysis'
    ],
    status: 'In Active Development',
    highlights: [
      'Reduces planning overhead by up to 60%',
      'Interactive agenda dashboard with color-coded tags',
      'Dynamic focus blocks allocation'
    ]
  },
  {
    id: 'digital-portfolio-website',
    title: 'Digital Portfolio Website',
    tagline: 'Clean, modern, and mobile-friendly personal IT showcase',
    category: 'Web Development & UI/UX',
    description:
      'A bespoke digital portfolio built with clean architectural design, responsive mobile-first layouts, and smooth micro-animations. Serves as a central hub for prospective employers to review academic milestones, technical projects, and certifications.',
    image: '/src/assets/images/project_portfolio_showcase_1792452992511.jpg',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'UI/UX Design', 'Motion'],
    features: [
      'Strict adherence to high-retention design guidelines and typography hierarchy',
      'Interactive skills evaluation matrix with animated indicators',
      'Dynamic resume generator and print-ready summary',
      'Fast responsive mobile navigation with zero layout shift'
    ],
    status: 'Completed',
    highlights: [
      '100% responsive across phones, tablets, and desktop displays',
      'Accessible blue & white color palette with WCAG AA compliance',
      'Modular architecture ready for future accomplishments'
    ]
  }
];

export const CERTIFICATES: CertificateItem[] = [
  {
    id: 'cert-web-fundamentals',
    title: 'Frontend Web Development Certification',
    issuer: 'DICT / FreeCodeCamp / Coursera Candidate',
    date: 'Target Q3 2026',
    status: 'In Progress',
    skillsCovered: ['HTML5', 'CSS3', 'Modern JavaScript', 'Responsive Design'],
    description: 'Comprehensive curriculum covering web standards, responsive styling, accessibility, and interactive web apps.'
  },
  {
    id: 'cert-database-sql',
    title: 'Relational Database & SQL Specialist',
    issuer: 'Oracle Academy / IT Specialist Program',
    date: 'Target Q4 2026',
    status: 'Planned',
    skillsCovered: ['SQL Queries', 'Relational Schemas', 'Database Normalization', 'Data Integrity'],
    description: 'Foundational certification covering database architecture, query optimization, and structured relational management.'
  },
  {
    id: 'cert-ai-prompting',
    title: 'Generative AI & Prompt Engineering Credential',
    issuer: 'Google Cloud / DeepLearning.AI Program',
    date: 'Target 2026',
    status: 'In Progress',
    skillsCovered: ['Prompt Design', 'Workflow Automation', 'LLM Integration', 'AI Ethics'],
    description: 'Applied prompt engineering techniques for software development, structured output parsing, and AI-assisted engineering.'
  }
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: 'achieve-academics',
    title: 'Dean’s Honor Candidate / Academic Excellence',
    organization: 'Torres Capitol College',
    year: '2025 – Present',
    category: 'Academic Honor',
    description: 'Recognized for consistent academic diligence, high grade point averages in core IT subjects, and active class participation.',
    impact: 'Consistently ranks in the top percentile of BSIT cohort.'
  },
  {
    id: 'achieve-capstone',
    title: 'Student IT Software Project Showcase Finalist',
    organization: 'College of Information Technology',
    year: '2026',
    category: 'Software Development',
    description: 'Designed and presented the AI Scheduling Assistant prototype before faculty mentors and IT student peers.',
    impact: 'Commended for clean user interface architecture and real-world applicability.'
  },
  {
    id: 'achieve-org',
    title: 'Active IT Student Organization Contributor',
    organization: 'Torres Capitol College IT Society',
    year: '2024 – Present',
    category: 'Leadership & Community',
    description: 'Assisting fellow students in introductory programming workshops, lab sessions, and digital literacy activities.',
    impact: 'Mentored junior students in HTML/CSS and algorithmic basics.'
  }
];

export const HOBBIES: HobbyItem[] = [
  {
    name: 'Technology',
    tagline: 'Hardware, gadgets & emerging tech',
    description: 'Following the latest hardware architectures, semiconductor breakthroughs, and modern computing trends.',
    icon: 'Cpu'
  },
  {
    name: 'Artificial Intelligence',
    tagline: 'LLMs, automation & neural tools',
    description: 'Experimenting with generative AI models, prompt construction, and integrating automated workflows.',
    icon: 'Bot'
  },
  {
    name: 'Web Development',
    tagline: 'Modern UI, React & frontend craft',
    description: 'Prototyping responsive web pages, experimenting with sleek layouts, and learning new frontend libraries.',
    icon: 'Code2'
  },
  {
    name: 'Mobile Apps',
    tagline: 'Cross-platform mobile experiences',
    description: 'Exploring mobile UI paradigms, Android development essentials, and touchscreen usability patterns.',
    icon: 'Smartphone'
  },
  {
    name: 'Gaming',
    tagline: 'Strategy, teamwork & game systems',
    description: 'Appreciating game design systems, strategic multiplayer cooperation, and competitive esports mechanics.',
    icon: 'Gamepad2'
  }
];

export const EDUCATION_DATA = {
  institution: 'Torres Capitol College',
  degree: 'Bachelor of Science in Information Technology (BSIT)',
  status: 'Undergraduate Student',
  duration: 'Current Enrollment',
  highlights: [
    'Focus on Object-Oriented Programming, Database Systems, and Web Application Architectures',
    'Practical laboratory hands-on training with modern development environments',
    'Active participation in student coding seminars and technical symposiums',
    'Emphasis on ethical computing, software design lifecycle, and industry readiness'
  ],
  keyCourses: [
    'Introduction to Computing & Information Systems',
    'Computer Programming 1 & 2 (Java & Logic Formulation)',
    'Data Structures and Algorithms',
    'Database Management Systems & SQL',
    'Web Systems and Technologies (HTML/CSS/JS)',
    'Human Computer Interaction (UI/UX Design)',
    'System Analysis and Design'
  ]
};

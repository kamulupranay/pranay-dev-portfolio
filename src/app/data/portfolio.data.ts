import { Experience } from "../models/experience.model";
import { Project } from "../models/project.model";
import { SkillGroup } from "../models/skill.model";

export const portfolioConfig = {
  name: "KAMULU PRANAY",
  title: "Senior Frontend Developer",
  subtitle: "Angular | TypeScript | JavaScript | RxJS | NgRx",
  experience: "5.0 Years",
  location: "Pan India | Open to Relocate",
  availability: "Immediate Joiner",
  email: "kamulupranay@gmail.com",
  phone: "+919700981212",
  social: {
    github: "https://github.com/kamulupranay",
    linkedin: "https://www.linkedin.com/in/pranay-kamulu-8176b2240",
    personalWebsite: "https://daily-grocery-mart.netlify.app/login",
  },
  resumePath: "assets/resume/Kamulu-Pranay-Resume.docx",
};
export const stats = [
  ["5.0", "Years Experience"],
  ["3", "Production Angular SPAs"],
  ["10+", "Reusable UI Components"],
  ["100+", "UI Defects Resolved"],
  ["95%+", "First-Pass Resolution"],
  ["6+", "REST APIs Integrated"],
  ["Millions", "Concurrent Sessions Supported"],
];
export const skillGroups: SkillGroup[] = [
  {
    title: "Frameworks",
    items: ["Angular v5–v21", "RxJS", "NgRx", "Angular Signals"],
  },
  {
    title: "Languages",
    items: ["TypeScript", "JavaScript ES6+", "HTML5", "CSS3", "jQuery"],
  },
  {
    title: "Styling",
    items: [
      "SASS",
      "LESS",
      "Bootstrap 3/4/5",
      "Angular Material",
      "PrimeNG",
      "Responsive / Fluid UI",
    ],
  },
  {
    title: "API & Data",
    items: ["RESTful API Integration", "JSON", "Observables", "Promises"],
  },
  {
    title: "Tools",
    items: [
      "Webpack",
      "Gulp",
      "npm",
      "Bower",
      "Git",
      "VS Code",
      "WebStorm",
      "PhpStorm",
    ],
  },
  {
    title: "Standards",
    items: [
      "WCAG 2.1 Accessibility",
      "Cross-Browser Compatibility",
      "Performance Optimization",
    ],
  },
  {
    title: "AI-Assisted Development",
    items: ["Cursor.ai", "Claude.ai", "GitHub Copilot", "ChatGPT Codex"],
  },
  {
    title: "Currently Learning",
    items: ["ReactJS", "Components", "Hooks", "REST API Integration"],
  },
];
export const experiences: Experience[] = [
  {
    role: "Senior Frontend Developer – Frontend",
    company: "Techroid Solutions Pvt. Ltd.",
    period: "Apr 2026 – Present",
    project: "TOOTRiS – Child Care Management & Enrollment Platform",
    highlights: [
      "Developed and maintained responsive Angular applications for a child-care marketplace supporting Family and Provider workflows including provider search, profiles, enrollment, scheduling, communication and payment-related features.",
      "Built reusable Angular components and reactive forms for provider registration, child management, enrollment, profile management and scheduling workflows with custom validations.",
      "Implemented REST API integration using Angular HttpClient, RxJS and NgRx Effects for asynchronous data retrieval, caching and centralized application state management.",
      "Integrated authentication and role-based authorization using HTTP interceptors, route guards and permission-based UI controls for Family, Provider and administrative workflows.",
      "Adopted modern Angular patterns including standalone components, Signals for local reactive state, lazy-loaded feature routes and OnPush change detection to improve maintainability and application performance.",
    ],
  },
  {
    role: "Senior Software Developer – Frontend",
    company: "Experis IT Pvt. Ltd.",
    period: "Mar 2024 – Oct 2025",
    project: "e-Filing Portal (IEC 2.0) — India's National Income Tax Portal",
    highlights: [
      "Designed and built responsive ITR filing modules, dashboards and scheduling workflows using Angular 17, RxJS, NgRx, Signals, Angular Material, Bootstrap, HTML5 and CSS3.",
      "Built a dynamic form validation engine covering PAN, TAN, 80C/80D/HRA deductions and capital gains.",
      "Built 10+ reusable UI components including smart wizards, auto-complete, date pickers and data tables.",
      "Integrated 6+ REST APIs for tax computation, refund status tracking and user profile management.",
      "Optimized Angular lazy loading and bundle sizes, improving Largest Contentful Paint during peak traffic periods.",
      "Enforced WCAG 2.1 accessibility and validated Chrome, Firefox, Safari and Edge compatibility.",
      "Resolved 100+ UI defects with a 95%+ first-pass resolution rate while working with backend and QA teams in Agile sprints.",
    ],
  },
  {
    role: "Software Developer – Frontend",
    company: "Collabera Technologies Pvt. Ltd.",
    period: "Aug 2023 – Oct 2023",
    project: "GSK IMPACT – Benlysta & Dapro",
    highlights: [
      "Created pixel-perfect responsive UI pages from Figma/mockup designs.",
      "Integrated REST APIs using Angular components, services and Observables, with NgRx and RxJS.",
      "Resolved UI/UX defects across patient forms.",
    ],
  },
  {
    role: "Frontend Developer – Angular",
    company: "Empulse Research & Data Analytics Pvt. Ltd.",
    period: "Jun 2022 – May 2023",
    project:
      "Sales & Operations Planning (SOP), Smyrna Crane Configurator, Smyrna Fire Configurator",
    highlights: [
      "Delivered 3 production Angular SPAs using Angular v9, v11 and v14.",
      "Implemented complex routing, authentication and authorization, role-based guards and data-binding flows.",
      "Built real-time delivery tracking dashboards and dynamic filtering.",
      "Used NgRx and RxJS for real-time data synchronization and integrated backend APIs.",
      "Built mobile-responsive UIs using Angular Material and Bootstrap 4/5.",
    ],
  },
  {
    role: "UI Developer",
    company: "Maxis Software Pvt. Ltd.",
    period: "Jan 2020 – May 2022",
    project: "Admire Admin, Core Plus Admin, Josh Admin Template",
    highlights: [
      "Contributed to 3 premium ThemeForest admin templates using HTML5, CSS3, SASS, Bootstrap, JavaScript, jQuery and Angular 8.",
      "Refactored legacy CSS to Material Design standards across 3 templates.",
      "Developed multi-theme dashboards, data tables, charts, forms and widget libraries.",
      "Managed frontend build pipelines using Gulp, Webpack and Bower.",
    ],
  },
];
export const achievements = [
  ["100+ UI Defects Resolved", "95%+ first-pass resolution rate."],
  ["10+ Reusable UI Components", "Adopted across 5+ portal modules."],
  ["30% Faster Feature Delivery", "Through reusable component libraries."],
  [
    "Millions of Concurrent Sessions",
    "Supported enterprise-scale taxpayer sessions.",
  ],
  ["3 Production Angular SPAs", "Delivered across multiple business domains."],
  ["3 Premium Admin Templates", "Built templates used by global clients."],
];
export const projects: Project[] = [
  {
    name: "TOOTRiS – Child Care Management & Enrollment Platform",
    category: "Child Care services",
    description:
      "I worked on TOOTRiS, which is a child-care management and marketplace platform connecting families with child-care providers.",
    technologies: [
      "Angular 18",
      "TypeScript",
      "RxJS",
      "NgRx",
      "Signals",
      "Angular Material",
      "Bootstrap",
      "REST APIs",
    ]
  },
  {
    name: "e-Filing Portal (IEC 2.0)",
    category: "Enterprise / Government / Tax",
    description:
      "Enterprise-scale tax filing platform modules including ITR filing, dashboards, scheduling, dynamic validation, refund tracking and user profile workflows.",
    technologies: [
      "Angular 17",
      "TypeScript",
      "RxJS",
      "NgRx",
      "Signals",
      "Angular Material",
      "Bootstrap",
      "REST APIs",
    ],
    url: "https://eportal.incometax.gov.in/",
  },
  {
    name: "Sales & Operations Planning",
    category: "Operations / Logistics",
    description:
      "Production Angular SPA for operations planning with real-time delivery tracking dashboards, dynamic filtering and complex business workflows.",
    technologies: [
      "Angular",
      "TypeScript",
      "RxJS",
      "NgRx",
      "Angular Material",
      "Bootstrap",
    ],
  },
  {
    name: "Smyrna Crane Configurator",
    category: "Configurator",
    description:
      "Production Angular application delivered as part of the Smyrna configurator work.",
    technologies: ["Angular", "TypeScript", "RxJS", "NgRx"],
  },
  {
    name: "Smyrna Fire Configurator",
    category: "Configurator",
    description:
      "Production Angular application delivered as part of the Smyrna configurator work.",
    technologies: ["Angular", "TypeScript", "RxJS", "NgRx"],
  },
  {
    name: "Admire Admin",
    category: "Admin Template",
    description:
      "Premium admin template work featuring dashboards, forms, tables, widgets and multi-theme UI.",
    technologies: [
      "Angular",
      "HTML5",
      "CSS3",
      "SASS",
      "Bootstrap",
      "JavaScript",
      "jQuery",
    ],
  },
  {
    name: "Core Plus Admin",
    category: "Admin Template",
    description:
      "Premium admin template work focused on responsive UI, dashboards and reusable interface patterns.",
    technologies: [
      "Angular",
      "HTML5",
      "CSS3",
      "SASS",
      "Bootstrap",
      "JavaScript",
      "jQuery",
    ],
  },
  {
    name: "Josh Admin Template",
    category: "Admin Template",
    description:
      "Premium ThemeForest admin template contribution with reusable widgets, dashboards and frontend build tooling.",
    technologies: [
      "Angular",
      "HTML5",
      "CSS3",
      "SASS",
      "Bootstrap",
      "JavaScript",
      "jQuery",
    ],
  },
];
export const services = [
  "Responsive Web Applications",
  "Angular SPA Development",
  "Reusable Component Development",
  "REST API Integration",
  "RxJS & Reactive Programming",
  "NgRx State Management",
  "UI Performance Optimization",
  "WCAG Accessibility",
  "Cross-Browser Compatibility",
  "Enterprise Dashboard Development",
];
export const education = [
  ["M.Tech", "Kshatriya College of Engineering", "2016", "73.69%"],
  ["B.Tech", "Vijay Rural Engineering College", "2014", "72.30%"],
  ["Board of Intermediate", "Shaankary Junior College", "2010", "94%"],
  ["High School (SSC)", "ZPHS Ram Mandir", "2008", "88%"],
];

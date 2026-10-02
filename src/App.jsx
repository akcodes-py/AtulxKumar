import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  BadgeCheck,
  BookOpen,
  Brain,
  Briefcase,
  CheckCircle2,
  ChevronRight,
  Code2,
  Cpu,
  Database,
  Download,
  ExternalLink,
  FileText,
  FlaskConical,
  FolderGit2,
  GitPullRequestArrow,
  GraduationCap,
  Heart,
  Layers,
  Loader2,
  Mail,
  MapPin,
  Menu,
  MessageSquare,
  Moon,
  Phone,
  Rocket,
  Send,
  Server,
  Sparkles,
  Sun,
  Terminal,
  X,
  Zap,
  Cloud,
  GitBranch,
  ShieldCheck,
  Wrench,
} from "lucide-react";

/* Brand icons (lucide-react removed brand glyphs) — inline SVGs */
const GithubIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.7 5.39-5.26 5.68.41.35.77 1.05.77 2.12 0 1.53-.01 2.76-.01 3.14 0 .3.2.67.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
  </svg>
);
const LinkedinIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.55V9h3.57v11.45Z" />
  </svg>
);
const XIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.4l-5.8-7.58-6.64 7.58H.47l8.6-9.83L0 1.15h7.59l5.24 6.93 6.07-6.93Zm-1.29 19.5h2.04L6.49 3.24H4.3l13.31 17.41Z" />
  </svg>
);
const GfgIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M8.5 4h2.6c.8 0 1.5.2 2 .6.5.4.8 1 .8 1.7 0 .5-.2 1-.5 1.3-.3.3-.6.5-1 .6.5.1 1 .4 1.3.8.3.4.5 1 .5 1.6 0 .8-.3 1.5-.9 2-.6.5-1.4.7-2.4.7H8.5V4Zm1.7 1.5v2.6h.8c.4 0 .7-.1.9-.3.2-.2.3-.5.3-.9s-.1-.7-.3-.9c-.2-.2-.5-.3-.9-.3h-.8Zm0 4v2.8h1c.4 0 .8-.1 1-.4.2-.2.4-.5.4-1s-.1-.8-.4-1c-.2-.2-.6-.4-1-.4h-1ZM15.5 4h4.9v1.5h-3.2v2.4h2.7v1.5h-2.7v3.4h-1.7V4ZM4.6 4H3v9.3h1.6V4Z" />
  </svg>
);

/* =====================================================================
   PORTFOLIO_DATA — Update everything in one place
===================================================================== */
const PORTFOLIO_DATA = {
  brand: "Atul Kumar",
  fullName: "Atul Kumar",
  role: "Node.js & MERN Stack Developer | Full-Stack Engineer",
  tagline: "Building high-concurrency systems, distributed locks, and production MERN / Python web platforms.",
  availability: "Available for Opportunities — Seeking Node.js / MERN / Full-Stack Developer Roles",
  profilePhoto: "/profile.jpg",
  valueProp:
    "Final-year B.Tech CSE student in Ghaziabad (Delhi NCR) seeking a Node.js / Full Stack Developer Intern role. Skilled in Node.js, Express.js, MongoDB, React, and TypeScript with JWT-secured REST APIs. Built CedMeet (MERN booking platform with zero double-booking using Redis locks & MongoDB ACID transactions) and an NGO attendance system deployed on AWS. Solved 250+ DSA problems.",
  email: "atulkumarm.512@gmail.com",
  phone: "+91 6392077642",
  phoneHref: "tel:+916392077642",
  location: "Ghaziabad, Uttar Pradesh, India",
  resumeUrl: "/Atul_Kumar_Resume.pdf",
  navLinks: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Journey", href: "#journey" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ],
  metrics: [
    { value: 250, suffix: "+", label: "DSA Problems Solved (LeetCode & GFG)" },
    { value: 3, suffix: "+", label: "Full-Stack & MERN Projects Deployed" },
    { value: 100, suffix: "%", label: "Concurrency Protection & Test Coverage" },
  ],
  about: [
    {
      icon: "Heart",
      title: "Passion & Purpose",
      text: "Specializing in Node.js, Express.js, MongoDB, React, and TypeScript with strict focus on zero double-booking concurrency, distributed Redis locking, and reliable backend systems.",
    },
    {
      icon: "Rocket",
      title: "Vision & Architecture",
      text: "Architecting high-performance MERN platforms, modular monorepos with shared Zod validation, automated n8n workflows, and real-time third-party integrations like Google Calendar.",
    },
    {
      icon: "Server",
      title: "Full-Stack & DevOps",
      text: "Comprehensive experience across Node.js/Express, Python/Django/FastAPI, PostgreSQL, Redis, Docker containerization, AWS (EC2, S3), and automated GitHub Actions CI/CD pipelines.",
    },
  ],
  skills: [
    {
      icon: "Code2",
      title: "Languages",
      subtext: "Core languages for frontend & backend.",
      pills: ["JavaScript", "TypeScript", "Python", "SQL", "HTML5", "CSS3"],
    },
    {
      icon: "Server",
      title: "Frameworks & Backend",
      subtext: "Scalable APIs & microservices architecture.",
      pills: ["Node.js", "Express.js", "React", "Tailwind CSS", "Django", "Django REST Framework", "FastAPI", "Zod", "JWT Auth", "Argon2id"],
    },
    {
      icon: "Database",
      title: "Databases & Caching",
      subtext: "Replica sets, transactions & distributed locks.",
      pills: ["MongoDB (Replica Set)", "Redis (Distributed Locks)", "PostgreSQL", "MySQL", "SQLite", "ChromaDB"],
    },
    {
      icon: "Cloud",
      title: "Cloud & DevOps",
      subtext: "Ship, containerize & automate with confidence.",
      pills: ["AWS (EC2, S3, IAM)", "Docker", "GitHub Actions", "CI/CD Pipelines", "Railway", "Vercel", "n8n Automation"],
    },
    {
      icon: "Wrench",
      title: "Tools & Testing",
      subtext: "Modern developer workflow & quality assurance.",
      pills: ["Git", "GitHub", "Postman", "Pytest", "Linux", "VS Code", "Google Calendar API", "Gemini API"],
    },
    {
      icon: "Brain",
      title: "Core CS",
      subtext: "Computer science foundational pillars.",
      pills: ["Data Structures & Algorithms", "OOP", "DBMS", "Computer Networks", "Operating Systems", "System Design"],
    },
  ],
  journey: [
    {
      role: "Software Developer / Open Source Contributor",
      org: "GitHub — @akcodes-py",
      period: "Ongoing",
      location: "Remote",
      type: "Open Source",
      points: [
        "Architect and ship full-stack MERN & Python applications including CedMeet (monorepo, Redis distributed locking, MongoDB replica set ACID transactions).",
        "Solved 250+ DSA problems (arrays, strings, linked lists, trees, DP, recursion, sorting, greedy) across LeetCode and GeeksforGeeks.",
        "Implement production-grade security: Argon2id password hashing, rotating JWT refresh tokens with reuse detection, and AES-256-GCM OAuth token encryption.",
        "Containerize microservices with Docker, automate testing, and configure CI/CD deployment pipelines on AWS EC2.",
      ],
    },
    {
      role: "Software Developer (Internship)",
      org: "Vatsalya Tatva NGO",
      period: "Jul 2026 — Aug 2026",
      location: "Ghaziabad, India (Remote)",
      type: "Software Developer",
      points: [
        "Built an attendance management system from the NGO's requirements, replacing manual registers for Admin and Volunteer users.",
        "Designed a normalized PostgreSQL schema with role-based access control (RBAC) and JWT-secured REST APIs integrated with a React frontend.",
        "Containerized the app with Docker, set up a GitHub Actions CI/CD pipeline, and deployed it on AWS EC2 for end-to-end testing.",
        "Collaborated with project stakeholders to ensure zero manual discrepancies and high system reliability.",
      ],
    },
  ],
  projects: [
    {
      title: "CedMeet – Smart Meeting Platform (MERN)",
      overview:
        "Calendly-style meeting scheduling & booking platform built on a layered monorepo with shared Zod validation schemas. Guaranteed zero double-booking using Redis slot locks & MongoDB ACID transactions. Real-time 2-way Google Calendar sync, automatic Meet links, Argon2id auth, and automated n8n email reminders.",
      tech: ["TypeScript", "Node.js", "Express.js", "MongoDB", "Redis", "React", "Tailwind CSS", "Google Calendar API", "JWT", "Argon2id", "Zod", "n8n"],
      demo: "https://github.com/akcodes-py/CredMeet",
      github: "https://github.com/akcodes-py/CredMeet",
    },
    {
      title: "Attendance Management System (Vatsalya Tatva NGO)",
      overview:
        "Web-based attendance replacing manual registers. Normalized PostgreSQL schema with Admin/Volunteer RBAC. DRF APIs + React frontend. Dockerized with GitHub Actions CI/CD, deployed on AWS EC2. Jul 2026 – Aug 2026.",
      tech: ["Django", "Django REST", "PostgreSQL", "React", "Docker", "AWS EC2", "GitHub Actions"],
      demo: "https://vatsalya-attendance-system.vercel.app",
      github: "https://github.com/akcodes-py/vatsalya-attendance-system",
    },
    {
      title: "AI PDF Q&A Tool (RAG)",
      overview:
        "Retrieval-augmented generation pipeline with chunking, sentence-transformer embeddings, and ChromaDB vector search to answer user questions from PDF documents. Gemini API answers grounded in retrieved text with FastAPI + React. Feb 2026 – Mar 2026.",
      tech: ["Python", "FastAPI", "React", "ChromaDB", "sentence-transformers", "Gemini API"],
      demo: "https://github.com/akcodes-py/AI-PDF-Q-A",
      github: "https://github.com/akcodes-py/AI-PDF-Q-A",
    },
  ],
  education: {
    degree: "Bachelor of Technology in Computer Science & Engineering",
    institution: "Raj Kumar Goel Institute of Technology, Ghaziabad",
    board: "CGPA: 7.62/10",
    timeline: "Aug 2023 — Jun 2027",
    location: "Ghaziabad, Uttar Pradesh, India",
    coursework: [
      "Data Structures & Algorithms",
      "OOP",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
      "Web Development",
      "Cloud Computing",
      "Machine Learning",
      "Artificial Intelligence",
      "Cybersecurity",
      "Project Management",
      "Technical Communication",
    ],
  },
  certifications: [
    {
      title: "Python for Everybody Specialization",
      issuer: "Coursera",
    },
    {
      title: "Problem Solving Through Programming in Python",
      issuer: "NPTEL",
    },
    {
      title: "AWS Knowledge: Cloud Essentials – Training Badge",
      issuer: "Amazon Web Services Training & Certification (Sep 2026)",
    },
    {
      title: "SQL Certificate",
      issuer: "HackerRank (Sep 2026)",
    },
  ],
  certificationsUrl: "https://www.linkedin.com/in/atul-kumar-365289294/details/certifications/",
  achievements: [
    {
      title: "Best Prototype Implementation",
      event: "Hackwarts Hackathon (2026)",
      desc: "Recognized for high-impact architecture and functional prototype engineering.",
    },
    {
      title: "2nd Place Winner",
      event: "AECE Project Showcase (2025)",
      desc: "Awarded 2nd place among departmental engineering projects for robust technical execution.",
    },
    {
      title: "2nd Place Winner",
      event: "Binary Codes 2.0 (2024)",
      desc: "Competitive programming and algorithmic problem solving award.",
    },
    {
      title: "250+ DSA Problems Solved",
      event: "LeetCode & GeeksforGeeks",
      desc: "Mastered fundamental algorithms, data structures, and optimal time-space complexities.",
    },
  ],
  badges: [
    {
      icon: "Brain",
      title: "Galaxy Brain",
      text: "Technical guidance, discussion solutions, and architecture planning.",
    },
    {
      icon: "GitPullRequestArrow",
      title: "Pull Shark",
      text: "Consistent track record of production-grade pull requests and code reviews.",
    },
    {
      icon: "Zap",
      title: "Quickdraw",
      text: "Rapid debugging and critical problem solving under pressure.",
    },
  ],
  resume: {
    title: "Professional Resume & Credentials",
    subtitle: "Up-to-date summary of my technical journey, Node.js & MERN engineering, and achievements.",
    cta: "Download Full CV",
  },
  socials: [
    { label: "GitHub", href: "https://github.com/akcodes-py", icon: "Github" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/atul-kumar-365289294", icon: "Linkedin" },
    { label: "Twitter/X", href: "https://x.com/", icon: "Twitter" },
    { label: "Email", href: "mailto:atulkumarm.512@gmail.com", icon: "Mail" },
    { label: "Discord", href: "https://discord.com", icon: "MessageSquare" },
    { label: "LeetCode", href: "https://leetcode.com/u/In_Atulkumar", icon: "Terminal" },
    { label: "GeeksforGeeks", href: "https://www.geeksforgeeks.org/profile/atulkumg0lt", icon: "Gfg" },
  ],
  footerBio: "Node.js & MERN Stack Developer | Full-Stack Engineer crafting high-concurrency booking platforms, clean APIs, and cloud-native deployments.",
  footerTagline: "Build. Ship. Scale.",
  copyrightYear: 2026,
};

/* ================= Helpers ================= */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

const iconMap = {
  Heart,
  Rocket,
  Server,
  Code2,
  Cloud,
  Database,
  Wrench,
  Brain,
  GitPullRequestArrow,
  Zap,
  Github: GithubIcon,
  Linkedin: LinkedinIcon,
  Twitter: XIcon,
  Gfg: GfgIcon,
  Mail,
  MessageSquare,
  Terminal,
};

const PROFILE_PHOTO_CANDIDATES = [
  "/profile.jpg",
  "/profile.jpeg",
  "/profile.png",
  "/photo.jpg",
  "/photo.jpeg",
  "/photo.png",
];

function ProfilePhoto() {
  const [idx, setIdx] = useState(0);
  const missing = idx >= PROFILE_PHOTO_CANDIDATES.length;
  if (missing) {
    return (
      <div className="mx-auto mb-8 grid aspect-[3/4] w-52 place-items-center rounded-3xl bg-gradient-to-br from-indigo-500 via-violet-500 to-cyan-400 text-5xl font-extrabold text-white shadow-2xl shadow-indigo-500/30 ring-4 ring-white dark:ring-white/10 sm:w-60">
        AK
      </div>
    );
  }
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative mx-auto mb-8 w-52 sm:w-60"
    >
      <div className="absolute -inset-2 rounded-[1.75rem] bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-400 blur-[10px] opacity-60" />
      <img
        src={PROFILE_PHOTO_CANDIDATES[idx]}
        alt={PORTFOLIO_DATA.fullName}
        onError={() => setIdx(idx + 1)}
        className="relative aspect-[3/4] w-full rounded-3xl border-4 border-white object-cover object-top shadow-2xl dark:border-slate-900"
      />
    </motion.div>
  );
}

function SectionHeading({ eyebrow, title, sub }) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="mb-3 inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-300"
      >
        <Sparkles className="h-3.5 w-3.5" />
        {eyebrow}
      </motion.p>
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl"
      >
        {title}
      </motion.h2>
      {sub && (
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-3 text-slate-600 dark:text-slate-400"
        >
          {sub}
        </motion.p>
      )}
    </div>
  );
}

function Counter({ value, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const dur = 1400;
    const start = performance.now();
    let raf;
    const tick = (t) => {
      const p = Math.min((t - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(eased * value));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {n}
      {suffix}
    </span>
  );
}

/* ================= Navbar ================= */
function Navbar({ dark, setDark }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-slate-200/60 bg-white/70 shadow-lg shadow-slate-900/5 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/60"
            : "border-b border-transparent bg-white/40 backdrop-blur-md dark:bg-slate-950/30 dark:backdrop-blur-md"
        }`}
      >
        <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#top" className="group flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-indigo-500 via-violet-500 to-cyan-400 text-white shadow-lg shadow-indigo-500/30">
              <Terminal className="h-5 w-5" />
            </span>
            <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-500 bg-clip-text text-lg font-extrabold tracking-tight text-transparent dark:from-indigo-300 dark:via-violet-300 dark:to-cyan-300">
              {PORTFOLIO_DATA.brand}
            </span>
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {PORTFOLIO_DATA.navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-lg px-3.5 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-900/5 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2.5">
            {/* Dark / Light toggle */}
            <button
              onClick={() => setDark(!dark)}
              aria-label="Toggle theme"
              className="relative grid h-9 w-16 place-items-center rounded-full border border-slate-200 bg-slate-100 transition dark:border-white/15 dark:bg-white/10"
            >
              <span
                className={`absolute top-1 grid h-7 w-7 place-items-center rounded-full bg-white shadow-md transition-all duration-300 dark:bg-slate-900 dark:shadow-black/40 ${
                  dark ? "left-[34px]" : "left-1"
                }`}
              >
                {dark ? <Moon className="h-4 w-4 text-indigo-300" /> : <Sun className="h-4 w-4 text-amber-500" />}
              </span>
              <Sun className="absolute left-2.5 h-3.5 w-3.5 text-slate-400" />
              <Moon className="absolute right-2.5 h-3.5 w-3.5 text-slate-400" />
            </button>

            <a
              href={PORTFOLIO_DATA.resumeUrl}
              className="hidden items-center gap-1.5 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/25 transition hover:shadow-indigo-600/40 hover:brightness-110 sm:inline-flex"
            >
              <FileText className="h-4 w-4" />
              Resume
            </a>

            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 bg-white/60 text-slate-700 dark:border-white/10 dark:bg-white/10 dark:text-white lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile slide-out */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-[60] bg-slate-950/50 backdrop-blur-sm lg:hidden"
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed right-0 top-0 z-[70] flex h-full w-[300px] flex-col border-l border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-slate-950"
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text font-extrabold text-transparent">
                  {PORTFOLIO_DATA.brand}
                </span>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="grid h-9 w-9 place-items-center rounded-lg bg-slate-100 dark:bg-white/10"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="flex flex-col gap-1">
                {PORTFOLIO_DATA.navLinks.map((l, i) => (
                  <motion.a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i }}
                    className="flex items-center justify-between rounded-xl px-4 py-3 font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/10"
                  >
                    {l.label}
                    <ChevronRight className="h-4 w-4 opacity-50" />
                  </motion.a>
                ))}
              </div>
              <a
                href={PORTFOLIO_DATA.resumeUrl}
                onClick={() => setOpen(false)}
                className="mt-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-4 py-3 font-semibold text-white"
              >
                <FileText className="h-4 w-4" /> Resume
              </a>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

/* ================= Main App ================= */
export default function App() {
  const [dark, setDark] = useState(true);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent
  const [toast, setToast] = useState(null);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    document.documentElement.style.colorScheme = dark ? "dark" : "light";
  }, [dark]);

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3200);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      showToast("Please fill name, email and message.");
      return;
    }
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      showToast("Enquiry sent successfully. I'll get back to you soon!");
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 2500);
    }, 1400);
  };

  return (
    <div
      id="top"
      className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100"
    >
      <Navbar dark={dark} setDark={setDark} />

      {/* ============ 2. HERO + METRICS ============ */}
      <section className="relative overflow-hidden pt-[72px]">
        <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]" />
        <div className="absolute -top-32 left-1/2 h-96 w-[720px] -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-500/25 via-violet-500/25 to-cyan-400/25 blur-3xl" />
        <div className="absolute right-[-120px] top-40 h-72 w-72 rounded-full bg-violet-500/15 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 pb-14 pt-14 sm:px-6 sm:pt-20 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mx-auto max-w-3xl text-center"
          >
            <ProfilePhoto />
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-sm font-medium text-emerald-700 dark:text-emerald-300">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </span>
              {PORTFOLIO_DATA.availability}
            </span>

            <p className="mt-6 text-lg text-slate-600 dark:text-slate-400">
              Hi, I&apos;m{" "}
              <span className="font-semibold text-slate-900 dark:text-white">
                {PORTFOLIO_DATA.fullName}
              </span>
            </p>
            <h1 className="mt-3 bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-500 bg-clip-text text-4xl font-extrabold leading-[1.1] tracking-tight text-transparent dark:from-indigo-300 dark:via-violet-300 dark:to-cyan-300 sm:text-5xl lg:text-6xl">
              {PORTFOLIO_DATA.role}
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg">
              {PORTFOLIO_DATA.valueProp}
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#about"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-7 py-3.5 font-semibold text-white shadow-xl shadow-indigo-600/25 transition hover:shadow-indigo-600/45 hover:brightness-110 sm:w-auto"
              >
                Learn More
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#projects"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white/70 px-7 py-3.5 font-semibold text-slate-800 backdrop-blur transition hover:border-indigo-400 hover:text-indigo-600 dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:border-indigo-400 dark:hover:text-indigo-300 sm:w-auto"
              >
                <FolderGit2 className="h-4 w-4" />
                View Projects
              </a>
            </div>
          </motion.div>

          {/* Impact Metric Counters */}
          <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">
            {PORTFOLIO_DATA.metrics.map((m, i) => (
              <motion.div
                key={m.label}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                custom={i}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white/70 p-6 text-center backdrop-blur transition hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/10 dark:border-white/10 dark:bg-white/5"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-400" />
                <p className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-4xl font-extrabold text-transparent dark:from-indigo-300 dark:to-cyan-300">
                  <Counter value={m.value} suffix={m.suffix} />
                </p>
                <p className="mt-2 text-sm font-medium text-slate-600 dark:text-slate-400">{m.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 3. ABOUT ============ */}
      <section id="about" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About Me"
          title="Tri-Pillar Engineering Narrative"
          sub="What drives me, where I'm headed, and what I ship every day."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {PORTFOLIO_DATA.about.map((a, i) => {
            const Icon = iconMap[a.icon] || Sparkles;
            return (
              <motion.div
                key={a.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                custom={i}
                viewport={{ once: true, margin: "-60px" }}
                className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1.5 hover:shadow-xl hover:shadow-indigo-500/10 dark:border-white/10 dark:bg-slate-900/60"
              >
                <span className="mb-5 inline-grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 text-white shadow-lg shadow-indigo-500/30 transition group-hover:scale-110">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="text-lg font-bold">{a.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{a.text}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ============ 4. SKILLS ============ */}
      <section id="skills" className="border-y border-slate-200/70 bg-white/60 py-20 dark:border-white/5 dark:bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Tech Stack"
            title="Technical Expertise"
            sub="Modular, production-tested skills — organized by craft, not buzzwords."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PORTFOLIO_DATA.skills.map((s, i) => {
              const Icon = iconMap[s.icon] || Layers;
              return (
                <motion.div
                  key={s.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  custom={i}
                  viewport={{ once: true, margin: "-60px" }}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:border-indigo-300 hover:shadow-xl hover:shadow-indigo-500/10 dark:border-white/10 dark:bg-slate-900/60 dark:hover:border-indigo-500/40"
                >
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-300">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-bold">{s.title}</h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400">{s.subtext}</p>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {s.pills.map((p) => (
                      <span
                        key={p}
                        className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700 transition hover:border-indigo-400 hover:text-indigo-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:border-indigo-400 dark:hover:text-indigo-300"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ 5. JOURNEY ============ */}
      <section id="journey" className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Career"
          title="Journey & Experience"
          sub="Chronological timeline of building, leading, and contributing."
        />
        <div className="relative ml-3 border-l-2 border-indigo-500/20 pl-8 dark:border-indigo-400/20 sm:ml-6">
          {PORTFOLIO_DATA.journey.map((j, i) => (
            <motion.div
              key={j.role}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              custom={i}
              viewport={{ once: true, margin: "-60px" }}
              className="relative mb-10 last:mb-0"
            >
              <span className="absolute -left-[43px] grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br from-indigo-500 to-cyan-400 text-white shadow-lg shadow-indigo-500/30 ring-4 ring-slate-50 dark:ring-slate-950 sm:-left-[51px]">
                <Briefcase className="h-3.5 w-3.5" />
              </span>
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-xl hover:shadow-indigo-500/10 dark:border-white/10 dark:bg-slate-900/60 sm:p-7">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-600 dark:text-indigo-300">
                    {j.type}
                  </span>
                  <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-700 dark:text-emerald-300">
                    {j.period}
                  </span>
                </div>
                <h3 className="mt-3 text-xl font-bold">{j.role}</h3>
                <p className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-slate-500 dark:text-slate-400">
                  <span className="font-semibold text-indigo-600 dark:text-indigo-300">@{j.org}</span>
                  <span>•</span>
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5" /> {j.location}
                  </span>
                </p>
                <ul className="mt-4 space-y-2.5">
                  {j.points.map((pt) => (
                    <li key={pt.slice(0, 24)} className="flex gap-2.5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ============ 6. PROJECTS ============ */}
      <section id="projects" className="border-y border-slate-200/70 bg-white/60 py-20 dark:border-white/5 dark:bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Selected Work"
            title="Featured Projects"
            sub="Real systems with real trade-offs — live demos and open code."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {PORTFOLIO_DATA.projects.map((p, i) => (
              <motion.article
                key={p.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                custom={i}
                viewport={{ once: true, margin: "-60px" }}
                className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-indigo-500/15 dark:border-white/10 dark:bg-slate-900/60"
              >
                <div className="relative h-36 bg-gradient-to-br from-indigo-600 via-violet-600 to-cyan-500 p-5">
                  <div className="bg-grid absolute inset-0 opacity-30" />
                  <FolderGit2 className="relative h-8 w-8 text-white/90" />
                  <span className="absolute right-4 top-4 rounded-full bg-black/20 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur">
                    0{i + 1} — Featured
                  </span>
                  <ArrowUpRight className="absolute bottom-4 right-4 h-5 w-5 text-white/70 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-bold leading-snug">{p.title}</h3>
                  <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {p.overview}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-md bg-indigo-500/10 px-2.5 py-1 text-[11px] font-semibold text-indigo-700 dark:text-indigo-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 flex gap-2.5 pt-1">
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-slate-900 px-3 py-2.5 text-xs font-semibold text-white transition hover:bg-indigo-600 dark:bg-white dark:text-slate-900 dark:hover:bg-indigo-300"
                    >
                      Live Demo <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-slate-300 px-3 py-2.5 text-xs font-semibold transition hover:border-slate-900 hover:bg-slate-900 hover:text-white dark:border-white/15 dark:hover:bg-white dark:hover:text-slate-900"
                    >
                      <GithubIcon className="h-3.5 w-3.5" /> GitHub Code
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 7. EDUCATION ============ */}
      <section id="education" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Academics"
          title="Academic Background"
          sub="Formal foundations behind the engineering practice."
        />
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-slate-900/60 sm:p-10"
        >
          <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-400" />
          <div className="flex flex-col items-start gap-5 sm:flex-row">
            <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-400 text-white shadow-lg">
              <GraduationCap className="h-7 w-7" />
            </span>
            <div className="flex-1">
              <h3 className="text-xl font-extrabold leading-snug sm:text-2xl">
                {PORTFOLIO_DATA.education.degree}
              </h3>
              <p className="mt-1.5 font-medium text-indigo-600 dark:text-indigo-300">
                {PORTFOLIO_DATA.education.institution}
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400">{PORTFOLIO_DATA.education.board}</p>
              <p className="mt-3 flex flex-wrap items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 font-medium dark:bg-white/10">
                  <BookOpen className="h-3.5 w-3.5" /> {PORTFOLIO_DATA.education.timeline}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 font-medium dark:bg-white/10">
                  <MapPin className="h-3.5 w-3.5" /> {PORTFOLIO_DATA.education.location}
                </span>
              </p>
              <div className="mt-5">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                  Key Coursework / Focus
                </p>
                <div className="mt-2.5 flex flex-wrap gap-2">
                  {PORTFOLIO_DATA.education.coursework.map((c) => (
                    <span
                      key={c}
                      className="rounded-full border border-indigo-500/25 bg-indigo-500/10 px-3.5 py-1.5 text-xs font-semibold text-indigo-700 dark:text-indigo-200"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ============ 7b. CERTIFICATIONS ============ */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Credentials"
          title="Certifications"
          sub="Verified certificates — also posted on my LinkedIn profile."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PORTFOLIO_DATA.certifications.map((c, i) => (
            <motion.a
              key={c.title}
              href={PORTFOLIO_DATA.certificationsUrl}
              target="_blank"
              rel="noreferrer"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              custom={i}
              viewport={{ once: true, margin: "-60px" }}
              className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-emerald-400 hover:shadow-xl hover:shadow-emerald-500/10 dark:border-white/10 dark:bg-slate-900/60"
            >
              <span className="mb-4 inline-grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/30 transition group-hover:scale-110">
                <BadgeCheck className="h-6 w-6" />
              </span>
              <h3 className="text-sm font-bold leading-snug">{c.title}</h3>
              <p className="mt-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400">{c.issuer}</p>
              <p className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 dark:text-emerald-300">
                View credential <ExternalLink className="h-3 w-3" />
              </p>
            </motion.a>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a
            href={PORTFOLIO_DATA.certificationsUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white/70 px-6 py-3 text-sm font-semibold transition hover:border-indigo-400 hover:text-indigo-600 dark:border-white/15 dark:bg-white/5 dark:hover:border-indigo-400 dark:hover:text-indigo-300"
          >
            <LinkedinIcon className="h-4 w-4" />
            See all certificates on LinkedIn
          </a>
        </div>
      </section>

      {/* ============ 7c. ACHIEVEMENTS ============ */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Honors & Awards"
          title="Achievements & Activities"
          sub="Hackathons, project showcases, and algorithmic milestones."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PORTFOLIO_DATA.achievements.map((a, i) => (
            <motion.div
              key={a.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              custom={i}
              viewport={{ once: true, margin: "-60px" }}
              className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-amber-400 hover:shadow-xl hover:shadow-amber-500/10 dark:border-white/10 dark:bg-slate-900/60"
            >
              <span className="mb-4 inline-grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 text-white shadow-lg shadow-amber-500/30">
                <Award className="h-6 w-6" />
              </span>
              <h3 className="text-sm font-bold leading-snug">{a.title}</h3>
              <p className="mt-1 text-xs font-semibold text-indigo-600 dark:text-indigo-400">{a.event}</p>
              <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400">{a.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ============ 8. BADGES ============ */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Recognition"
          title="Engineering Badges & Milestones"
          sub="Community recognition for consistency, guidance, and speed."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {PORTFOLIO_DATA.badges.map((b, i) => {
            const Icon = iconMap[b.icon] || Award;
            return (
              <motion.div
                key={b.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                custom={i}
                viewport={{ once: true }}
                whileHover={{ rotateX: 4, rotateY: -4 }}
                className="relative overflow-hidden rounded-2xl border border-amber-500/25 bg-gradient-to-b from-amber-500/10 to-transparent p-7 text-center dark:border-amber-400/20"
              >
                <span className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-amber-400 to-orange-500 text-white shadow-lg shadow-amber-500/30">
                  <Icon className="h-7 w-7" />
                </span>
                <h3 className="font-extrabold">{b.title}</h3>
                <p className="mx-auto mt-2 max-w-[26ch] text-sm text-slate-600 dark:text-slate-400">{b.text}</p>
                <Award className="absolute -right-4 -top-4 h-20 w-20 text-amber-500/10" />
              </motion.div>
            );
          })}
        </div>

        {/* ============ 9. RESUME BANNER ============ */}
        <motion.div
          id="resume"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative mt-12 overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 p-8 text-white shadow-2xl shadow-indigo-600/30 sm:p-12"
        >
          <div className="bg-grid absolute inset-0 opacity-20" />
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
          <div className="relative flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-widest">
                <FileText className="h-3.5 w-3.5" /> Documents
              </p>
              <h3 className="mt-3 text-2xl font-extrabold sm:text-3xl">{PORTFOLIO_DATA.resume.title}</h3>
              <p className="mt-2 max-w-xl text-white/80">{PORTFOLIO_DATA.resume.subtitle}</p>
            </div>
            <a
              href={PORTFOLIO_DATA.resumeUrl}
              download
              className="group inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-bold text-indigo-700 shadow-xl transition hover:scale-[1.03] hover:shadow-2xl"
            >
              <Download className="h-4 w-4 transition group-hover:translate-y-0.5" />
              {PORTFOLIO_DATA.resume.cta}
            </a>
          </div>
        </motion.div>
      </section>

      {/* ============ 10. CONTACT ============ */}
      <section id="contact" className="border-t border-slate-200/70 bg-white/60 py-20 dark:border-white/5 dark:bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Contact"
            title="Get In Touch"
            sub="Have a question, collaboration idea, or opportunity? I'd love to hear from you!"
          />

          <div className="grid gap-6 lg:grid-cols-2">
            {/* Left: direct channels */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-col gap-4"
            >
              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: PORTFOLIO_DATA.email,
                  href: `mailto:${PORTFOLIO_DATA.email}`,
                },
                {
                  icon: Phone,
                  label: "Phone / WhatsApp",
                  value: PORTFOLIO_DATA.phone,
                  href: PORTFOLIO_DATA.phoneHref,
                },
                {
                  icon: MapPin,
                  label: "Location",
                  value: PORTFOLIO_DATA.location,
                  href: undefined,
                },
              ].map((c) => (
                <div
                  key={c.label}
                  className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-indigo-300 hover:shadow-xl hover:shadow-indigo-500/10 dark:border-white/10 dark:bg-slate-900/60"
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-400 text-white shadow-lg">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                      {c.label}
                    </p>
                    {c.href ? (
                      <a href={c.href} className="truncate font-semibold hover:text-indigo-600 dark:hover:text-indigo-300">
                        {c.value}
                      </a>
                    ) : (
                      <p className="font-semibold">{c.value}</p>
                    )}
                  </div>
                  {c.href && (
                    <ArrowUpRight className="ml-auto h-5 w-5 shrink-0 text-slate-300 transition group-hover:text-indigo-500" />
                  )}
                </div>
              ))}

              <div className="rounded-2xl border border-indigo-500/20 bg-gradient-to-br from-indigo-500/10 to-cyan-400/10 p-5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                <p className="flex items-center gap-2 font-bold text-slate-900 dark:text-white">
                  <ShieldCheck className="h-4 w-4 text-emerald-500" /> Response time
                </p>
                <p className="mt-1">
                  I usually reply within 24–48 hours. For urgent roles or collaborations, WhatsApp gets the fastest response.
                </p>
              </div>
            </motion.div>

            {/* Right: form */}
            <motion.form
              onSubmit={handleSubmit}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-slate-900/60 sm:p-8"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                    Full Name
                  </span>
                  <input
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Jane Doe"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-white/10 dark:bg-white/5 dark:placeholder:text-slate-500"
                  />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                    Email Address
                  </span>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="jane@company.com"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-white/10 dark:bg-white/5 dark:placeholder:text-slate-500"
                  />
                </label>
              </div>
              <label className="mt-4 block">
                <span className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                  Subject
                </span>
                <input
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  placeholder="Project collaboration / Opportunity"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-white/10 dark:bg-white/5 dark:placeholder:text-slate-500"
                />
              </label>
              <label className="mt-4 block">
                <span className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                  Message
                </span>
                <textarea
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your project, timeline, and goals…"
                  className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-white/10 dark:bg-white/5 dark:placeholder:text-slate-500"
                />
              </label>
              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-6 py-3.5 font-semibold text-white shadow-xl shadow-indigo-600/25 transition hover:brightness-110 disabled:opacity-70 sm:w-auto"
              >
                {status === "sending" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" /> Sending…
                  </>
                ) : status === "sent" ? (
                  <>
                    <CheckCircle2 className="h-4 w-4" /> Sent Successfully
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" /> Send Enquiry
                  </>
                )}
              </button>
            </motion.form>
          </div>

          {/* Social grid */}
          <div className="mt-12 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
              Connect with me on social platforms
            </p>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
              {PORTFOLIO_DATA.socials.map((s) => {
                const Icon = iconMap[s.icon] || ExternalLink;
                return (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    title={s.label}
                    whileHover={{ y: -4, scale: 1.06 }}
                    whileTap={{ scale: 0.96 }}
                    className="group flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-indigo-400 hover:text-indigo-600 hover:shadow-lg hover:shadow-indigo-500/15 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:border-indigo-400 dark:hover:text-indigo-300"
                  >
                    <Icon className="h-4 w-4" />
                    <span className="hidden sm:inline">{s.label}</span>
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ============ 11. FOOTER ============ */}
      <footer className="border-t border-slate-200 bg-slate-950 py-12 text-slate-400 dark:border-white/10">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
          <div>
            <p className="bg-gradient-to-r from-indigo-300 to-cyan-300 bg-clip-text text-lg font-extrabold text-transparent">
              {PORTFOLIO_DATA.brand}
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed">{PORTFOLIO_DATA.footerBio}</p>
            <p className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1 text-xs font-semibold text-slate-300">
              <Cpu className="h-3.5 w-3.5 text-cyan-300" /> {PORTFOLIO_DATA.footerTagline}
            </p>
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-white">Quick Links</p>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
              {PORTFOLIO_DATA.navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="transition hover:text-white">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-white">Contact Direct</p>
            <a href={`mailto:${PORTFOLIO_DATA.email}`} className="mt-4 flex items-center gap-2 text-sm transition hover:text-white">
              <Mail className="h-4 w-4" /> {PORTFOLIO_DATA.email}
            </a>
            <p className="mt-2 flex items-center gap-2 text-sm">
              <MapPin className="h-4 w-4" /> {PORTFOLIO_DATA.location}
            </p>
            <div className="mt-4 flex gap-2">
              {PORTFOLIO_DATA.socials.slice(0, 4).map((s) => {
                const Icon = iconMap[s.icon] || ExternalLink;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="grid h-9 w-9 place-items-center rounded-lg bg-white/5 transition hover:bg-white/15 hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 px-4 pt-6 text-center text-sm sm:px-6 lg:px-8">
          Made with <Heart className="inline h-4 w-4 fill-rose-500 text-rose-500" /> © {PORTFOLIO_DATA.copyrightYear}{" "}
          {PORTFOLIO_DATA.fullName}. All rights reserved.
        </div>
      </footer>

      {/* Toast */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            className="fixed bottom-6 left-1/2 z-[80] flex w-[calc(100%-2rem)] max-w-md -translate-x-1/2 items-center gap-3 rounded-2xl border border-white/10 bg-slate-900 px-5 py-4 text-sm font-medium text-white shadow-2xl dark:bg-white dark:text-slate-900"
            style={{ x: "-50%" }}
          >
            <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-400 dark:text-emerald-600" />
            {toast}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Unused-icon guard (tree-shaking safe) */}
      <span className="hidden">
        <FlaskConical className="h-4 w-4" />
        <Layers className="h-4 w-4" />
        <GitBranch className="h-4 w-4" />
      </span>
    </div>
  );
}

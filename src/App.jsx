import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Brain,
  Calendar,
  Check,
  CheckCircle2,
  ChevronRight,
  Code2,
  Copy,
  Cpu,
  Database,
  Download,
  ExternalLink,
  Eye,
  FileText,
  FolderGit2,
  GraduationCap,
  Heart,
  Loader2,
  Mail,
  MapPin,
  Menu,
  Moon,
  Phone,
  Rocket,
  Send,
  Server,
  Sparkles,
  Sun,
  Terminal,
  Trophy,
  X,
  Cloud,
  ShieldCheck,
  BarChart3,
} from "lucide-react";

/* Brand icons — inline SVGs */
const GithubIcon = ({ className = "h-4 w-4" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.7 5.39-5.26 5.68.41.35.77 1.05.77 2.12 0 1.53-.01 2.76-.01 3.14 0 .3.2.67.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
  </svg>
);

const LinkedinIcon = ({ className = "h-4 w-4" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.55V9h3.57v11.45Z" />
  </svg>
);

/* =====================================================================
   PORTFOLIO DATA — Directly from Atul Kumar's Resume
===================================================================== */
const PORTFOLIO_DATA = {
  brand: "Atul Kumar",
  fullName: "Atul Kumar",
  role: "Generative AI, Python & Backend Developer",
  tagline: "Building multi-format RAG systems with LangGraph, scalable REST APIs, and large-scale data analytics pipelines.",
  availability: "Immediate Joiner • Final-year B.Tech CSE (2023 – 2027)",
  email: "atulkumarm.512@gmail.com",
  phone: "+91 6392077642",
  phoneHref: "tel:+916392077642",
  location: "Ghaziabad, India",
  resumeUrl: "/Atul_Kumar_Resume.pdf",
  githubUrl: "https://github.com/akcodes-py",
  linkedinUrl: "https://linkedin.com/in/atul-kumar-365289294",
  summary:
    "Final-year B.Tech CSE student and immediate joiner skilled in Python, SQL, pandas, REST APIs, and Generative AI (RAG, embeddings, LLM APIs). Built CogniGraph (a LangGraph RAG platform with Google OAuth and async ingestion), a Google Calendar scheduling app that prevents double bookings and generates Meet links, and a 1M+ record Aadhaar data analysis. Deployed with Docker, GitHub Actions, and AWS. Comfortable with data cleaning, EDA, and visualization.",
  navLinks: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Certifications", href: "#certifications" },
    { label: "Activities", href: "#activities" },
    { label: "Contact", href: "#contact" },
  ],
  metrics: [
    { value: 1000000, suffix: "+", label: "UIDAI Aadhaar Records Cleaned & Analyzed", displayVal: "1M+" },
    { value: 3, suffix: "+", label: "Production & Architectural Systems Shipped", displayVal: "3+" },
    { value: 7.2, suffix: "", label: "B.Tech CSE CGPA (till 6th sem)", displayVal: "7.2" },
    { value: 100, suffix: "%", label: "Immediate Joiner Readiness", displayVal: "100%" },
  ],
  pillars: [
    {
      icon: Brain,
      title: "Generative AI & Agentic RAG",
      description:
        "Building multi-format RAG architectures with LangGraph incorporating query rewriting, vector retrieval (ChromaDB), reranking, and generation with Gemini 2.0 Flash.",
      tags: ["LangGraph", "Gemini 2.0 Flash", "ChromaDB", "Embeddings", "RAG Pipeline"],
    },
    {
      icon: Server,
      title: "APIs & High-Concurrency Backend",
      description:
        "Developing robust REST APIs using FastAPI and Django REST Framework with Google OAuth, JWT authentication, async task ingestion, and concurrency control.",
      tags: ["FastAPI", "Django REST", "PostgreSQL", "MySQL", "JWT & OAuth"],
    },
    {
      icon: BarChart3,
      title: "Data Engineering, EDA & DevOps",
      description:
        "Processing large-scale data (1M+ rows) using pandas and SQL, building trend and choropleth visualizations, and deploying containerized apps with Docker and AWS.",
      tags: ["Python / pandas", "SQL", "PySpark (Learning)", "Docker", "AWS (EC2, S3)"],
    },
  ],
  skillCategories: [
    {
      id: "genai",
      title: "Generative AI",
      icon: Brain,
      color: "from-purple-500/20 to-indigo-500/20 text-purple-400 border-purple-500/30",
      skills: [
        { name: "LLM APIs (Gemini 2.0)", level: "Advanced", badge: "Core" },
        { name: "RAG Architecture", level: "Advanced", badge: "Core" },
        { name: "LangGraph (StateGraph)", level: "Advanced", badge: "Agentic" },
        { name: "Embeddings & sentence-transformers", level: "Proficient", badge: "AI" },
        { name: "Vector Search (ChromaDB)", level: "Proficient", badge: "Vector DB" },
        { name: "Prompt Engineering & Reranking", level: "Proficient", badge: "GenAI" },
      ],
    },
    {
      id: "languages-data",
      title: "Languages & Data",
      icon: Database,
      color: "from-blue-500/20 to-cyan-500/20 text-cyan-400 border-cyan-500/30",
      skills: [
        { name: "Python", level: "Advanced", badge: "Primary" },
        { name: "SQL", level: "Advanced", badge: "Certified" },
        { name: "pandas", level: "Advanced", badge: "1M+ rows" },
        { name: "Matplotlib & Visualization", level: "Proficient", badge: "Charts" },
        { name: "PostgreSQL", level: "Proficient", badge: "RDBMS" },
        { name: "MySQL", level: "Proficient", badge: "RDBMS" },
        { name: "Data Cleaning & EDA", level: "Advanced", badge: "Core" },
        { name: "GeoJSON / Spatial", level: "Intermediate", badge: "Maps" },
      ],
    },
    {
      id: "apis-backend",
      title: "APIs & Backend",
      icon: Server,
      color: "from-emerald-500/20 to-teal-500/20 text-emerald-400 border-emerald-500/30",
      skills: [
        { name: "FastAPI", level: "Advanced", badge: "Async" },
        { name: "Django REST Framework", level: "Advanced", badge: "DRF" },
        { name: "REST APIs Architecture", level: "Advanced", badge: "Design" },
        { name: "JWT & Google OAuth", level: "Proficient", badge: "Security" },
        { name: "Google Calendar API", level: "Proficient", badge: "Integration" },
        { name: "Postman & Pytest", level: "Proficient", badge: "Testing" },
        { name: "JavaScript & React", level: "Intermediate", badge: "Frontend" },
        { name: "Next.js", level: "Intermediate", badge: "Full-Stack" },
      ],
    },
    {
      id: "cloud-devops",
      title: "Cloud & DevOps",
      icon: Cloud,
      color: "from-amber-500/20 to-orange-500/20 text-amber-400 border-amber-500/30",
      skills: [
        { name: "AWS (EC2, S3, IAM)", level: "Proficient", badge: "AWS Badge" },
        { name: "Docker & Containerization", level: "Proficient", badge: "DevOps" },
        { name: "GitHub Actions & CI/CD", level: "Proficient", badge: "Pipelines" },
        { name: "Linux & Shell", level: "Proficient", badge: "OS" },
        { name: "Git & GitHub", level: "Advanced", badge: "VCS" },
        { name: "Railway & Vercel", level: "Proficient", badge: "Hosting" },
      ],
    },
    {
      id: "core-cs",
      title: "Core Computer Science",
      icon: Cpu,
      color: "from-rose-500/20 to-pink-500/20 text-rose-400 border-rose-500/30",
      skills: [
        { name: "Data Structures & Algorithms", level: "Advanced", badge: "DSA" },
        { name: "Object-Oriented Programming (OOP)", level: "Advanced", badge: "Design" },
        { name: "DBMS & Schema Normalization", level: "Advanced", badge: "Databases" },
        { name: "Operating Systems", level: "Proficient", badge: "Coursework" },
        { name: "Computer Networks", level: "Proficient", badge: "Coursework" },
      ],
    },
    {
      id: "learning",
      title: "Currently Learning & Exploring",
      icon: Rocket,
      color: "from-teal-500/20 to-emerald-500/20 text-teal-400 border-teal-500/30",
      skills: [
        { name: "Data Engineering", level: "Active Study", badge: "Target" },
        { name: "PySpark & Big Data", level: "Active Study", badge: "Distributed" },
        { name: "Distributed Data Pipelines", level: "Active Study", badge: "ETL" },
        { name: "Agentic Multi-Agent AI", level: "Active Study", badge: "Research" },
      ],
    },
  ],
  projects: [
    {
      id: "cognigraph",
      title: "CogniGraph – AI Learning Workspace",
      category: "Generative AI",
      tagline: "Multi-Format RAG Platform with LangGraph & Gemini 2.0 Flash",
      summary:
        "Built a multi-format RAG platform with LangGraph (rewrite, retrieve, rerank, generate) and Gemini 2.0 Flash. Implemented Google OAuth, JWT, async ingestion, and caching on FastAPI and PostgreSQL; used Docker.",
      bullets: [
        "Architected a multi-format Retrieval-Augmented Generation (RAG) platform using LangGraph's StateGraph to execute query rewrite, dense retrieval, cross-encoder rerank, and synthesis.",
        "Integrated Google Gemini 2.0 Flash with low latency, grounded reasoning, and hallucination reduction.",
        "Implemented secure Google OAuth 2.0 authentication alongside JWT session tokens.",
        "Designed asynchronous document ingestion pipelines with background tasks and caching on FastAPI and PostgreSQL.",
        "Containerized the multi-service architecture using Docker for reliable local development and cloud production deployment.",
      ],
      tech: ["FastAPI", "Next.js", "PostgreSQL", "LangGraph", "Gemini 2.0 Flash", "ChromaDB", "Docker", "Google OAuth", "JWT"],
      architecture: [
        "User Query ➔ LangGraph Query Rewrite Step",
        "Document Ingestion ➔ Sentence-Transformers Embeddings ➔ ChromaDB Vector Indexing",
        "Vector Retrieval ➔ Cross-Encoder Reranking ➔ Filter Top-K Chunks",
        "Context Assembly ➔ Gemini 2.0 Flash Synthesis ➔ Streaming Response",
        "PostgreSQL State Store ➔ Response Caching ➔ Async Ingestion Task Queue",
      ],
      github: "https://github.com/akcodes-py",
      liveDemo: null,
      featured: true,
      accent: "from-purple-500 via-indigo-600 to-blue-600",
    },
    {
      id: "aadhaar",
      title: "Aadhaar Enrolment Analysis (UIDAI Dataset)",
      category: "Data Analysis",
      tagline: "Large-Scale EDA & Demographic Visualization on 1M+ Records",
      summary:
        "Merged 3 CSV files (1M+ rows), cleaned state names and bad entries, and aggregated by month, age group, state. Built trend, donut, and choropleth charts; found UP, Bihar, and MP account for ~39% of new enrolments. Identified a September 2025 surge and a high 0–5 age-group share.",
      bullets: [
        "Ingested and merged 3 large UIDAI CSV dataset files totaling over 1,000,000+ raw enrolment rows.",
        "Performed rigorous data cleaning: normalized disparate state naming conventions, resolved corrupt records, and handled edge-case values.",
        "Aggregated multi-dimensional metrics across monthly timelines, age demographics (0–5, 5–18, 18+), and state jurisdictions.",
        "Engineered visual dashboards featuring temporal trend curves, demographic donut distributions, and choropleth geographic heatmaps using GeoJSON and Matplotlib.",
        "Uncovered that Uttar Pradesh, Bihar, and Madhya Pradesh together represent ~39% of all new enrolments.",
        "Discovered a statistically significant surge in September 2025 enrolments with a disproportionately high 0–5 age group share, correlating with national policy initiatives.",
      ],
      tech: ["Python", "pandas", "Matplotlib", "GeoJSON", "Data Cleaning", "Exploratory Data Analysis (EDA)", "Data Visualization"],
      architecture: [
        "Raw UIDAI Data ➔ 3 CSV Files (1M+ Records)",
        "Pandas Pipeline ➔ State Name Normalization & Anomaly Scrubbing",
        "Multi-Index Aggregations ➔ Groupby State, Age Bracket & Month",
        "Visualization Suite ➔ Matplotlib Trends, Donut Demographics & GeoJSON Choropleth Maps",
        "Policy Research ➔ Demographic Anomaly Identification & Surge Analysis",
      ],
      github: "https://github.com/akcodes-py",
      liveDemo: null,
      featured: true,
      accent: "from-cyan-500 via-blue-600 to-indigo-600",
    },
    {
      id: "meeting-mgmt",
      title: "Meeting Management & Booking System",
      category: "Full-Stack & APIs",
      tagline: "Calendly-Style Scheduling with Zero Double Bookings & Google Meet",
      summary:
        "Built a Calendly-style app that lets anyone book open slots via a shareable link, without an account. Prevented double bookings and generated Meet links via Google Calendar API; added JWT auth and email alerts. Deployed the backend on Railway and the frontend on Vercel.",
      bullets: [
        "Engineered a high-concurrency Calendly-style scheduling application allowing guests to book available time slots through unique shareable links without requiring sign-up.",
        "Implemented strict concurrency checks to completely eliminate double bookings across overlapping reservations.",
        "Integrated the Google Calendar API to automatically generate unique Google Meet links and sync availability in real time.",
        "Developed JWT-based host authentication and automated transactional email alerts for booking confirmation and reminders.",
        "Architected a normalized MySQL relational schema on Django REST Framework, paired with a snappy React frontend built with Vite and Tailwind CSS.",
        "Deployed the DRF backend service on Railway and the responsive React client on Vercel.",
      ],
      tech: ["Django REST Framework", "MySQL", "React (Vite)", "Tailwind CSS", "Google Calendar API", "JWT Auth", "Railway", "Vercel"],
      architecture: [
        "Host Configures Availability ➔ Shareable Public Booking Link",
        "Guest Selects Slot ➔ Concurrency Validation & Lock (Zero Overlaps)",
        "Google Calendar API Integration ➔ Automated Google Meet Link Creation",
        "Django REST Framework Backend ➔ MySQL Relational Storage",
        "Async Mail Service ➔ Instant Confirmation & Calendar Invitation to Both Parties",
        "Cloud Hosting ➔ Backend on Railway + Frontend on Vercel",
      ],
      github: "https://github.com/akcodes-py",
      liveDemo: "https://github.com/akcodes-py",
      featured: true,
      accent: "from-emerald-500 via-teal-600 to-cyan-600",
    },
  ],
  education: {
    institution: "Raj Kumar Goel Institute of Technology",
    location: "Ghaziabad, India",
    degree: "B.Tech in Computer Science and Engineering",
    cgpa: "CGPA: 7.2 (till 6th sem)",
    timeline: "2023 – 2027",
    status: "Final-Year Student • Immediate Joiner",
    coursework: [
      "DBMS",
      "Machine Learning (ML)",
      "Artificial Intelligence (AI)",
      "Cloud Computing",
      "Data Structures & Algorithms (DSA)",
      "Object-Oriented Programming (OOP)",
      "Operating Systems",
      "Computer Networks",
    ],
  },
  certifications: [
    {
      title: "Python for Everybody Specialization",
      issuer: "Coursera",
      date: "Specialization Certificate",
      credentialUrl: "https://linkedin.com/in/atul-kumar-365289294",
      icon: Code2,
      color: "from-blue-500 to-indigo-600",
    },
    {
      title: "AWS Cloud Essentials – Training Badge",
      issuer: "AWS Training and Certification",
      date: "Sep 2026",
      credentialUrl: "https://linkedin.com/in/atul-kumar-365289294",
      icon: Cloud,
      color: "from-amber-500 to-orange-600",
    },
    {
      title: "SQL Certificate",
      issuer: "HackerRank",
      date: "Sep 2026",
      credentialUrl: "https://linkedin.com/in/atul-kumar-365289294",
      icon: Database,
      color: "from-emerald-500 to-teal-600",
    },
  ],
  activities: {
    hackathons: [
      {
        name: "Binary Codes 2.0",
        role: "Participant & Builder",
        description: "Competed in high-intensity problem solving and rapid prototype development.",
        tag: "Hackathon",
      },
      {
        name: "Hackwarts",
        role: "Participant & Builder",
        description: "Engineered innovative tech solutions within strict hackathon deadlines.",
        tag: "Hackathon",
      },
    ],
    interests: [
      {
        title: "Exploring New Technologies",
        description: "Constantly testing next-gen AI models, agentic frameworks, and distributed data systems.",
        icon: Sparkles,
      },
      {
        title: "Reading Books",
        description: "Engaging with technical literature, software architecture books, and personal growth non-fiction.",
        icon: BookOpen,
      },
      {
        title: "Chess",
        description: "Passionate about strategic calculation, tactical planning, and pattern recognition under clock pressure.",
        icon: Trophy,
      },
    ],
  },
  socials: [
    { label: "GitHub", href: "https://github.com/akcodes-py", icon: GithubIcon },
    { label: "LinkedIn", href: "https://linkedin.com/in/atul-kumar-365289294", icon: LinkedinIcon },
    { label: "Email", href: "mailto:atulkumarm.512@gmail.com", icon: Mail },
    { label: "Phone", href: "tel:+916392077642", icon: Phone },
  ],
};

/* ================= Animation Variants ================= */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

function SectionHeading({ eyebrow, title, sub }) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        className="mb-3 inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-300"
      >
        <Sparkles className="h-3.5 w-3.5" />
        {eyebrow}
      </motion.p>
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl"
      >
        {title}
      </motion.h2>
      {sub && (
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-3 text-slate-600 dark:text-slate-400"
        >
          {sub}
        </motion.p>
      )}
    </div>
  );
}

/* ================= Navbar ================= */
function Navbar({ dark, setDark }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-slate-200/80 bg-white/80 shadow-lg shadow-slate-900/5 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/75"
            : "border-b border-transparent bg-white/40 backdrop-blur-md dark:bg-slate-950/40 dark:backdrop-blur-md"
        }`}
      >
        <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#top" className="group flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-400 text-white shadow-lg shadow-indigo-500/30 transition group-hover:scale-105">
              <Terminal className="h-5 w-5" />
            </span>
            <div>
              <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 bg-clip-text text-lg font-black tracking-tight text-transparent dark:from-indigo-300 dark:via-purple-300 dark:to-cyan-300">
                {PORTFOLIO_DATA.brand}
              </span>
              <span className="hidden text-[10px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 sm:block">
                Python & GenAI Engineer
              </span>
            </div>
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {PORTFOLIO_DATA.navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-900/5 hover:text-indigo-600 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-indigo-300"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2.5">
            {/* Theme Toggle */}
            <button
              onClick={() => setDark(!dark)}
              aria-label="Toggle theme"
              className="relative grid h-9 w-16 place-items-center rounded-full border border-slate-200 bg-slate-100 transition hover:border-slate-300 dark:border-white/15 dark:bg-white/10 dark:hover:border-white/25"
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

            {/* Quick Resume Download */}
            <a
              href={PORTFOLIO_DATA.resumeUrl}
              download="Atul_Kumar_Resume.pdf"
              className="hidden items-center gap-1.5 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/25 transition hover:brightness-110 sm:inline-flex"
            >
              <Download className="h-4 w-4" />
              Resume
            </a>

            {/* Mobile Hamburger */}
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

      {/* Mobile Slide-out Menu */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-[60] bg-slate-950/60 backdrop-blur-sm lg:hidden"
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="fixed right-0 top-0 z-[70] flex h-full w-[310px] flex-col border-l border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-slate-950"
            >
              <div className="mb-6 flex items-center justify-between border-b border-slate-100 pb-4 dark:border-white/10">
                <div className="flex items-center gap-2.5">
                  <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 text-white font-bold text-sm">
                    AK
                  </span>
                  <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text font-black text-transparent">
                    {PORTFOLIO_DATA.brand}
                  </span>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="grid h-9 w-9 place-items-center rounded-lg bg-slate-100 dark:bg-white/10"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="flex flex-col gap-1 overflow-y-auto">
                {PORTFOLIO_DATA.navLinks.map((l, i) => (
                  <motion.a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * i }}
                    className="flex items-center justify-between rounded-xl px-4 py-3 font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/10"
                  >
                    {l.label}
                    <ChevronRight className="h-4 w-4 opacity-40" />
                  </motion.a>
                ))}
              </div>

              <div className="mt-auto pt-6 border-t border-slate-100 dark:border-white/10 flex flex-col gap-3">
                <a
                  href={PORTFOLIO_DATA.resumeUrl}
                  download="Atul_Kumar_Resume.pdf"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-3 font-semibold text-white shadow-lg shadow-indigo-600/25"
                >
                  <Download className="h-4 w-4" /> Download Resume
                </a>
                <a
                  href={`mailto:${PORTFOLIO_DATA.email}`}
                  className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-xs font-semibold text-slate-700 dark:border-white/10 dark:text-slate-300"
                >
                  <Mail className="h-3.5 w-3.5" /> {PORTFOLIO_DATA.email}
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

/* ================= Project Modal ================= */
function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-[90] flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-md"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
          className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl dark:border-white/10 dark:bg-slate-900 sm:p-8"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute right-5 top-5 grid h-9 w-9 place-items-center rounded-xl bg-slate-100 text-slate-500 transition hover:bg-slate-200 hover:text-slate-800 dark:bg-white/10 dark:text-slate-400 dark:hover:bg-white/20 dark:hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Badge */}
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-600 dark:text-indigo-400">
              {project.category}
            </span>
            <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
              Featured Case Study
            </span>
          </div>

          <h3 className="mt-3 text-2xl font-black text-slate-900 dark:text-white sm:text-3xl">
            {project.title}
          </h3>
          <p className="mt-1 text-sm font-medium text-slate-500 dark:text-slate-400">
            {project.tagline}
          </p>

          {/* System Architecture Flow */}
          <div className="mt-6 rounded-2xl border border-indigo-500/20 bg-indigo-50/50 p-5 dark:border-indigo-500/20 dark:bg-indigo-950/20">
            <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-indigo-700 dark:text-indigo-300">
              <Cpu className="h-4 w-4" /> System Architecture & Execution Flow
            </p>
            <ol className="mt-3 space-y-2.5">
              {project.architecture.map((step, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs font-medium text-slate-700 dark:text-slate-300">
                  <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-indigo-600 text-[10px] font-bold text-white">
                    {idx + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Detailed Resume Bullets */}
          <div className="mt-6">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
              Key Engineering Achievements & Results
            </h4>
            <ul className="mt-3 space-y-2.5">
              {project.bullets.map((b, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack Tags */}
          <div className="mt-6">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
              Technologies & Tools Used
            </h4>
            <div className="mt-2.5 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Links Footer */}
          <div className="mt-8 flex flex-wrap gap-3 border-t border-slate-100 pt-5 dark:border-white/10">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-600 dark:bg-white dark:text-slate-900 dark:hover:bg-indigo-300"
            >
              <GithubIcon className="h-4 w-4" /> View GitHub Repository
            </a>
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-5 py-2.5 text-sm font-semibold transition hover:border-indigo-400 hover:text-indigo-600 dark:border-white/15 dark:hover:border-indigo-400"
              >
                <ExternalLink className="h-4 w-4" /> Live Demo
              </a>
            )}
            <button
              onClick={onClose}
              className="ml-auto rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
            >
              Close
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

/* ================= Main Portfolio App ================= */
export default function App() {
  const [dark, setDark] = useState(true);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [activeProjectModal, setActiveProjectModal] = useState(null);
  const [projectFilter, setProjectFilter] = useState("all");
  const [activeSkillCategory, setActiveSkillCategory] = useState("all");

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "Full-Time Opportunity / Immediate Joiner",
    message: "",
  });
  const [status, setStatus] = useState("idle");
  const [toast, setToast] = useState(null);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    document.documentElement.style.colorScheme = dark ? "dark" : "light";
  }, [dark]);

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3400);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.email);
    setCopiedEmail(true);
    showToast(`Email copied: ${PORTFOLIO_DATA.email}`);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.phone);
    setCopiedPhone(true);
    showToast(`Phone copied: ${PORTFOLIO_DATA.phone}`);
    setTimeout(() => setCopiedPhone(false), 2200);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      showToast("Please fill in your name, email, and message.");
      return;
    }
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      showToast("Thank you for reaching out! I will respond promptly within 24 hours.");
      setForm({
        name: "",
        email: "",
        subject: "Full-Time Opportunity / Immediate Joiner",
        message: "",
      });
      setTimeout(() => setStatus("idle"), 2800);
    }, 1200);
  };

  const filteredProjects =
    projectFilter === "all"
      ? PORTFOLIO_DATA.projects
      : PORTFOLIO_DATA.projects.filter((p) => p.category === projectFilter);

  const displayedSkillCategories =
    activeSkillCategory === "all"
      ? PORTFOLIO_DATA.skillCategories
      : PORTFOLIO_DATA.skillCategories.filter((c) => c.id === activeSkillCategory);

  return (
    <div
      id="top"
      className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100"
    >
      <Navbar dark={dark} setDark={setDark} />

      {/* =====================================================================
          1. HERO SECTION — Professional, Bold & Resume-Accurate
      ===================================================================== */}
      <section className="relative overflow-hidden pt-[76px]">
        {/* Background grids & dynamic radial lighting */}
        <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)] opacity-60" />
        <div className="absolute -top-40 left-1/2 h-[450px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-cyan-400/20 blur-3xl pointer-events-none" />
        <div className="absolute right-[-100px] top-64 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl pointer-events-none" />
        <div className="absolute left-[-100px] top-80 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-12 sm:px-6 sm:pt-20 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mx-auto max-w-4xl text-center"
          >
            {/* Avatar / Monogram with glowing border */}
            <div className="relative mx-auto mb-7 grid h-24 w-24 place-items-center rounded-3xl bg-gradient-to-br from-indigo-500 via-purple-600 to-cyan-400 text-3xl font-black text-white shadow-2xl shadow-indigo-500/30 ring-4 ring-white dark:ring-slate-900 sm:h-28 sm:w-28 sm:text-4xl">
              <span className="relative z-10">AK</span>
              <div className="absolute -inset-1 rounded-[1.75rem] bg-gradient-to-r from-indigo-500 to-cyan-400 opacity-50 blur-md -z-0" />
            </div>

            {/* Immediate Joiner Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-bold text-emerald-700 dark:text-emerald-300">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </span>
              <span>{PORTFOLIO_DATA.availability}</span>
            </div>

            {/* Candidate Name & Title */}
            <h1 className="mt-5 text-4xl font-black tracking-tight text-slate-900 dark:text-white sm:text-6xl lg:text-7xl">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent dark:from-indigo-300 dark:via-purple-300 dark:to-cyan-300">
                {PORTFOLIO_DATA.fullName}
              </span>
            </h1>

            {/* Role Header */}
            <p className="mt-3 text-xl font-bold text-indigo-600 dark:text-indigo-400 sm:text-2xl">
              {PORTFOLIO_DATA.role}
            </p>

            {/* Professional Summary from Resume */}
            <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg">
              {PORTFOLIO_DATA.summary}
            </p>

            {/* Quick Contact & Location Badges */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5 text-xs font-semibold text-slate-600 dark:text-slate-400">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3.5 py-1.5 dark:bg-white/5">
                <MapPin className="h-3.5 w-3.5 text-rose-500" /> {PORTFOLIO_DATA.location}
              </span>
              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3.5 py-1.5 transition hover:bg-indigo-50 hover:text-indigo-600 dark:bg-white/5 dark:hover:bg-indigo-950/40 dark:hover:text-indigo-300"
                title="Click to copy email"
              >
                {copiedEmail ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Copy className="h-3.5 w-3.5" />}
                {PORTFOLIO_DATA.email}
              </button>
              <button
                onClick={copyPhone}
                className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3.5 py-1.5 transition hover:bg-indigo-50 hover:text-indigo-600 dark:bg-white/5 dark:hover:bg-indigo-950/40 dark:hover:text-indigo-300"
                title="Click to copy phone"
              >
                {copiedPhone ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Phone className="h-3.5 w-3.5" />}
                {PORTFOLIO_DATA.phone}
              </button>
            </div>

            {/* Call to Actions */}
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#projects"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 px-7 py-3.5 font-bold text-white shadow-xl shadow-indigo-600/25 transition hover:shadow-indigo-600/40 hover:brightness-110 sm:w-auto"
              >
                <FolderGit2 className="h-4 w-4" />
                Explore Projects
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href={PORTFOLIO_DATA.resumeUrl}
                download="Atul_Kumar_Resume.pdf"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white/80 px-7 py-3.5 font-bold text-slate-800 shadow-sm backdrop-blur transition hover:border-indigo-400 hover:text-indigo-600 dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:border-indigo-400 dark:hover:text-indigo-300 sm:w-auto"
              >
                <Download className="h-4 w-4" />
                Download CV (PDF)
              </a>
              <a
                href="#contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-transparent bg-indigo-50 px-6 py-3.5 font-bold text-indigo-700 transition hover:bg-indigo-100 dark:bg-indigo-950/40 dark:text-indigo-300 dark:hover:bg-indigo-900/50 sm:w-auto"
              >
                <Send className="h-4 w-4" />
                Hire / Contact
              </a>
            </div>

            {/* Social Links Bar */}
            <div className="mt-7 flex items-center justify-center gap-4">
              {PORTFOLIO_DATA.socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-indigo-400 hover:text-indigo-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:border-indigo-400 dark:hover:text-indigo-300"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Impact Stats Grid */}
          <div className="mx-auto mt-14 grid max-w-5xl grid-cols-2 gap-4 lg:grid-cols-4">
            {PORTFOLIO_DATA.metrics.map((m, i) => (
              <motion.div
                key={m.label}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                custom={i}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white/70 p-5 text-center backdrop-blur transition hover:-translate-y-1 hover:border-indigo-300 hover:shadow-xl hover:shadow-indigo-500/10 dark:border-white/10 dark:bg-slate-900/60 dark:hover:border-indigo-500/40"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400" />
                <p className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-3xl font-black text-transparent dark:from-indigo-300 dark:to-cyan-300 sm:text-4xl">
                  {m.displayVal}
                </p>
                <p className="mt-1 text-xs font-semibold text-slate-600 dark:text-slate-400 sm:text-sm">
                  {m.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          2. ABOUT / TRI-PILLAR SPECIALIZATIONS
      ===================================================================== */}
      <section id="about" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Specialization"
          title="Engineering Focus & Architecture"
          sub="Bridging Generative AI, production-ready backend microservices, and big data intelligence."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {PORTFOLIO_DATA.pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                custom={i}
                viewport={{ once: true, margin: "-60px" }}
                className="group flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1.5 hover:border-indigo-300 hover:shadow-xl hover:shadow-indigo-500/10 dark:border-white/10 dark:bg-slate-900/60 dark:hover:border-indigo-500/40"
              >
                <div>
                  <span className="mb-5 inline-grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/30 transition group-hover:scale-110">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {p.description}
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-1.5 border-t border-slate-100 pt-4 dark:border-white/10">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-indigo-500/10 px-2.5 py-1 text-[11px] font-semibold text-indigo-700 dark:text-indigo-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* =====================================================================
          3. SKILLS SECTION — Structured Exact to Resume
      ===================================================================== */}
      <section id="skills" className="border-y border-slate-200/80 bg-white/50 py-20 dark:border-white/5 dark:bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Technical Stack"
            title="Technical Skills"
            sub="Categorized directly according to my resume and verified in production projects."
          />

          {/* Skill Filter Chips */}
          <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => setActiveSkillCategory("all")}
              className={`rounded-xl px-4 py-2 text-xs font-bold transition ${
                activeSkillCategory === "all"
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/25"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-white/10 dark:text-slate-300 dark:hover:bg-white/15"
              }`}
            >
              All Skills ({PORTFOLIO_DATA.skillCategories.reduce((acc, c) => acc + c.skills.length, 0)})
            </button>
            {PORTFOLIO_DATA.skillCategories.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveSkillCategory(c.id)}
                className={`rounded-xl px-4 py-2 text-xs font-bold transition ${
                  activeSkillCategory === c.id
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/25"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-white/10 dark:text-slate-300 dark:hover:bg-white/15"
                }`}
              >
                {c.title}
              </button>
            ))}
          </div>

          {/* Skill Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {displayedSkillCategories.map((cat, i) => {
              const Icon = cat.icon;
              return (
                <motion.div
                  key={cat.id}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  custom={i}
                  viewport={{ once: true, margin: "-50px" }}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-indigo-300 hover:shadow-xl hover:shadow-indigo-500/10 dark:border-white/10 dark:bg-slate-900/60 dark:hover:border-indigo-500/40"
                >
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-extrabold text-slate-900 dark:text-white">{cat.title}</h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {cat.skills.length} core competencies
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 space-y-2.5">
                    {cat.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50/80 px-3.5 py-2 transition hover:border-slate-300 dark:border-white/5 dark:bg-white/5 dark:hover:border-white/15"
                      >
                        <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                          {skill.name}
                        </span>
                        <span className="rounded-md bg-indigo-500/10 px-2 py-0.5 text-[10px] font-bold text-indigo-600 dark:text-indigo-300">
                          {skill.badge}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Currently Learning Highlight */}
          <div className="mt-10 rounded-2xl border border-teal-500/30 bg-teal-500/10 p-5 text-center dark:border-teal-500/20 dark:bg-teal-950/20">
            <p className="inline-flex items-center gap-2 text-sm font-bold text-teal-800 dark:text-teal-300">
              <Sparkles className="h-4 w-4" />
              <span>Active Deep Dive:</span>
              <span className="underline decoration-teal-500 decoration-2 underline-offset-4">
                Data Engineering, PySpark & Distributed Data Processing
              </span>
            </p>
            <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
              Extending my 1M+ record pandas & SQL foundations into distributed Spark clusters for petabyte-scale ETL.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================================
          4. PROJECTS SECTION — CogniGraph, Aadhaar EDA, Meeting System
      ===================================================================== */}
      <section id="projects" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Portfolio Projects"
          title="Featured Projects"
          sub="Real systems built with LangGraph, Gemini 2.0, FastAPI, Django REST, and Big Data EDA."
        />

        {/* Project Filter Controls */}
        <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
          {["all", "Generative AI", "Data Analysis", "Full-Stack & APIs"].map((cat) => (
            <button
              key={cat}
              onClick={() => setProjectFilter(cat)}
              className={`rounded-xl px-4 py-2 text-xs font-bold capitalize transition ${
                projectFilter === cat
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/25"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-white/10 dark:text-slate-300 dark:hover:bg-white/15"
              }`}
            >
              {cat === "all" ? "All Projects (3)" : cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid gap-7 md:grid-cols-3">
          {filteredProjects.map((p, i) => (
            <motion.article
              key={p.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              custom={i}
              viewport={{ once: true, margin: "-60px" }}
              className="group flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white transition hover:-translate-y-2 hover:border-indigo-300 hover:shadow-2xl hover:shadow-indigo-500/15 dark:border-white/10 dark:bg-slate-900/60 dark:hover:border-indigo-500/40"
            >
              {/* Card Header with dynamic banner */}
              <div className={`relative h-40 bg-gradient-to-br ${p.accent} p-6 text-white`}>
                <div className="bg-grid absolute inset-0 opacity-25" />
                <span className="relative inline-flex items-center gap-1.5 rounded-full bg-black/25 px-3 py-1 text-[11px] font-bold backdrop-blur">
                  <FolderGit2 className="h-3.5 w-3.5" /> {p.category}
                </span>
                <h3 className="relative mt-3 text-xl font-black leading-tight drop-shadow-sm">
                  {p.title}
                </h3>
                <p className="relative mt-1 text-xs font-medium text-white/80 line-clamp-1">
                  {p.tagline}
                </p>
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col p-6">
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300 line-clamp-3">
                  {p.summary}
                </p>

                {/* Tech Pills */}
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {p.tech.slice(0, 5).map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-indigo-500/10 px-2.5 py-1 text-[11px] font-semibold text-indigo-700 dark:text-indigo-300"
                    >
                      {t}
                    </span>
                  ))}
                  {p.tech.length > 5 && (
                    <span className="rounded-md bg-slate-100 px-2 py-1 text-[11px] font-semibold text-slate-600 dark:bg-white/10 dark:text-slate-400">
                      +{p.tech.length - 5} more
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="mt-6 flex flex-col gap-2 pt-2 border-t border-slate-100 dark:border-white/10">
                  <button
                    onClick={() => setActiveProjectModal(p)}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-2.5 text-xs font-bold text-white shadow-md transition hover:brightness-110"
                  >
                    <Eye className="h-4 w-4" /> View Architecture & Details
                  </button>
                  <div className="flex gap-2">
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-700 transition hover:bg-slate-900 hover:text-white dark:border-white/10 dark:text-slate-200 dark:hover:bg-white dark:hover:text-slate-900"
                    >
                      <GithubIcon className="h-3.5 w-3.5" /> GitHub Repo
                    </a>
                    {p.liveDemo && (
                      <a
                        href={p.liveDemo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-indigo-200 bg-indigo-50/50 px-3 py-2 text-xs font-semibold text-indigo-700 transition hover:bg-indigo-600 hover:text-white dark:border-indigo-500/30 dark:bg-indigo-950/30 dark:text-indigo-300 dark:hover:bg-indigo-600 dark:hover:text-white"
                      >
                        <ExternalLink className="h-3.5 w-3.5" /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* =====================================================================
          5. EDUCATION SECTION — Raj Kumar Goel Institute of Technology
      ===================================================================== */}
      <section id="education" className="border-t border-slate-200/80 bg-white/50 py-20 dark:border-white/5 dark:bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Academic Background"
            title="Education"
            sub="Formal foundation in Computer Science and Engineering."
          />

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm dark:border-white/10 dark:bg-slate-900/60 sm:p-10"
          >
            <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400" />
            <div className="flex flex-col items-start gap-5 sm:flex-row">
              <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-600 to-cyan-400 text-white shadow-xl shadow-indigo-500/25">
                <GraduationCap className="h-8 w-8" />
              </span>
              <div className="flex-1">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-xl font-black text-slate-900 dark:text-white sm:text-2xl">
                    {PORTFOLIO_DATA.education.degree}
                  </h3>
                  <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                    {PORTFOLIO_DATA.education.cgpa}
                  </span>
                </div>

                <p className="mt-1.5 text-base font-bold text-indigo-600 dark:text-indigo-400">
                  {PORTFOLIO_DATA.education.institution}
                </p>

                <p className="mt-2 flex flex-wrap items-center gap-3 text-xs font-medium text-slate-600 dark:text-slate-400">
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5 text-indigo-500" /> {PORTFOLIO_DATA.education.timeline}
                  </span>
                  <span>•</span>
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5 text-rose-500" /> {PORTFOLIO_DATA.education.location}
                  </span>
                  <span>•</span>
                  <span className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-semibold">
                    <CheckCircle2 className="h-3.5 w-3.5" /> {PORTFOLIO_DATA.education.status}
                  </span>
                </p>

                {/* Relevant Coursework */}
                <div className="mt-6 border-t border-slate-100 pt-5 dark:border-white/10">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Relevant Coursework:
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {PORTFOLIO_DATA.education.coursework.map((course) => (
                      <span
                        key={course}
                        className="rounded-lg border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-700 dark:text-indigo-300"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================================
          6. CERTIFICATIONS SECTION — Coursera, AWS, HackerRank
      ===================================================================== */}
      <section id="certifications" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Credentials"
          title="Certifications & Badges"
          sub="Verified industry and platform credentials directly from my resume."
        />

        <div className="grid gap-6 sm:grid-cols-3">
          {PORTFOLIO_DATA.certifications.map((cert, i) => {
            const Icon = cert.icon;
            return (
              <motion.a
                key={cert.title}
                href={cert.credentialUrl}
                target="_blank"
                rel="noreferrer"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                custom={i}
                viewport={{ once: true, margin: "-50px" }}
                className="group flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1.5 hover:border-indigo-400 hover:shadow-xl hover:shadow-indigo-500/10 dark:border-white/10 dark:bg-slate-900/60 dark:hover:border-indigo-500/40"
              >
                <div>
                  <span className={`mb-5 inline-grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${cert.color} text-white shadow-lg shadow-indigo-500/20 transition group-hover:scale-110`}>
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {cert.title}
                  </h3>
                  <p className="mt-1 text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                    {cert.issuer}
                  </p>
                  <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                    {cert.date}
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-1.5 text-xs font-bold text-indigo-600 dark:text-indigo-300">
                  <span>View on LinkedIn</span>
                  <ExternalLink className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
                </div>
              </motion.a>
            );
          })}
        </div>
      </section>

      {/* =====================================================================
          7. ACTIVITIES & INTERESTS SECTION — Hackathons & Personal Pursuits
      ===================================================================== */}
      <section id="activities" className="border-t border-slate-200/80 bg-white/50 py-20 dark:border-white/5 dark:bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Community & Passions"
            title="Activities & Interests"
            sub="Competitive hackathons, continuous learning, and strategic hobbies."
          />

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Hackathons Column */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm dark:border-white/10 dark:bg-slate-900/60"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-amber-500/10 text-amber-500">
                  <Trophy className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-lg font-black text-slate-900 dark:text-white">
                    Hackathons & Competitions
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Rapid prototyping under high-intensity engineering environments
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                {PORTFOLIO_DATA.activities.hackathons.map((h) => (
                  <div
                    key={h.name}
                    className="group rounded-2xl border border-slate-100 bg-slate-50 p-4 transition hover:border-amber-400/40 hover:bg-white dark:border-white/5 dark:bg-white/5 dark:hover:border-amber-400/30 dark:hover:bg-white/10"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-slate-900 dark:text-white">{h.name}</h4>
                      <span className="rounded-full bg-amber-500/10 px-2.5 py-0.5 text-[10px] font-bold text-amber-600 dark:text-amber-400">
                        {h.tag}
                      </span>
                    </div>
                    <p className="mt-1 text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                      {h.role}
                    </p>
                    <p className="mt-1.5 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                      {h.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Personal Interests Column */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm dark:border-white/10 dark:bg-slate-900/60"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-purple-500/10 text-purple-500">
                  <Sparkles className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-lg font-black text-slate-900 dark:text-white">
                    Personal Interests & Pursuits
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    What fuels my analytical mind outside the terminal
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                {PORTFOLIO_DATA.activities.interests.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-4 transition hover:border-purple-400/40 hover:bg-white dark:border-white/5 dark:bg-white/5 dark:hover:border-purple-400/30 dark:hover:bg-white/10"
                    >
                      <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400">
                        <Icon className="h-4 w-4" />
                      </span>
                      <div>
                        <h4 className="font-bold text-slate-900 dark:text-white">{item.title}</h4>
                        <p className="mt-1 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          8. RESUME CALLOUT BANNER
      ===================================================================== */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 p-8 text-white shadow-2xl shadow-indigo-600/30 sm:p-12"
        >
          <div className="bg-grid absolute inset-0 opacity-20" />
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl pointer-events-none" />

          <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-wider backdrop-blur">
                <FileText className="h-3.5 w-3.5" /> Official Curriculum Vitae
              </span>
              <h3 className="mt-3 text-2xl font-black sm:text-3xl">
                Ready to review my complete resume?
              </h3>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/85">
                Download the official PDF resume highlighting full technical competencies, projects, coursework, and contact details. Immediate joiner ready for interviews.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={PORTFOLIO_DATA.resumeUrl}
                download="Atul_Kumar_Resume.pdf"
                className="group inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-bold text-indigo-700 shadow-xl transition hover:scale-105 hover:bg-slate-50"
              >
                <Download className="h-4 w-4 transition group-hover:translate-y-0.5" />
                Download Resume (PDF)
              </a>
              <a
                href={PORTFOLIO_DATA.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-5 py-3.5 font-bold text-white backdrop-blur transition hover:bg-white/20"
              >
                <Eye className="h-4 w-4" />
                Preview in Tab
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* =====================================================================
          9. CONTACT SECTION — Form & Direct Channels
      ===================================================================== */}
      <section id="contact" className="border-t border-slate-200/80 bg-white/50 py-20 dark:border-white/5 dark:bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Get In Touch"
            title="Contact & Opportunities"
            sub="Available as an immediate joiner for full-time engineering and generative AI roles."
          />

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Direct Contact Cards */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-col gap-4"
            >
              {/* Email Card */}
              <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-indigo-300 dark:border-white/10 dark:bg-slate-900/60">
                <div className="flex items-center gap-4">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-md">
                    <Mail className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Email Address
                    </p>
                    <a
                      href={`mailto:${PORTFOLIO_DATA.email}`}
                      className="font-bold text-slate-900 hover:text-indigo-600 dark:text-white dark:hover:text-indigo-400"
                    >
                      {PORTFOLIO_DATA.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={copyEmail}
                  className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-indigo-600 dark:hover:bg-white/10 dark:hover:text-indigo-300"
                  title="Copy email"
                >
                  {copiedEmail ? <Check className="h-5 w-5 text-emerald-500" /> : <Copy className="h-5 w-5" />}
                </button>
              </div>

              {/* Phone Card */}
              <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-indigo-300 dark:border-white/10 dark:bg-slate-900/60">
                <div className="flex items-center gap-4">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500 text-white shadow-md">
                    <Phone className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Phone / WhatsApp
                    </p>
                    <a
                      href={PORTFOLIO_DATA.phoneHref}
                      className="font-bold text-slate-900 hover:text-indigo-600 dark:text-white dark:hover:text-indigo-400"
                    >
                      {PORTFOLIO_DATA.phone}
                    </a>
                  </div>
                </div>
                <button
                  onClick={copyPhone}
                  className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-indigo-600 dark:hover:bg-white/10 dark:hover:text-indigo-300"
                  title="Copy phone"
                >
                  {copiedPhone ? <Check className="h-5 w-5 text-emerald-500" /> : <Copy className="h-5 w-5" />}
                </button>
              </div>

              {/* Location Card */}
              <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-slate-900/60">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-rose-500 to-amber-500 text-white shadow-md">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Location & Relocation
                  </p>
                  <p className="font-bold text-slate-900 dark:text-white">
                    {PORTFOLIO_DATA.location} (Open to On-site, Hybrid & Remote Roles)
                  </p>
                </div>
              </div>

              {/* Immediate Joiner Info Banner */}
              <div className="rounded-2xl border border-emerald-500/25 bg-emerald-500/10 p-5 dark:border-emerald-500/20 dark:bg-emerald-950/20">
                <p className="flex items-center gap-2 font-bold text-emerald-800 dark:text-emerald-300">
                  <ShieldCheck className="h-5 w-5 text-emerald-500" /> Immediate Joiner
                </p>
                <p className="mt-1 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                  I can join immediately with zero notice period. Ready for technical interviews, coding challenges, or project walk-throughs.
                </p>
              </div>
            </motion.div>

            {/* Interactive Contact Form */}
            <motion.form
              onSubmit={handleSubmit}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-slate-900/60 sm:p-8"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Your Name
                  </span>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Recruiter or Engineering Lead"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-white/10 dark:bg-white/5 dark:placeholder:text-slate-500"
                  />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Your Email
                  </span>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="hiring@company.com"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-white/10 dark:bg-white/5 dark:placeholder:text-slate-500"
                  />
                </label>
              </div>

              {/* Purpose Selector Chips */}
              <div className="mt-4">
                <span className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Subject / Intent
                </span>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Full-Time Opportunity / Immediate Joiner",
                    "Generative AI / Python Role",
                    "Project Collaboration",
                    "General Enquiry",
                  ].map((preset) => (
                    <button
                      type="button"
                      key={preset}
                      onClick={() => setForm({ ...form, subject: preset })}
                      className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
                        form.subject === preset
                          ? "bg-indigo-600 text-white"
                          : "bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-white/10 dark:text-slate-300 dark:hover:bg-white/15"
                      }`}
                    >
                      {preset}
                    </button>
                  ))}
                </div>
              </div>

              <label className="mt-4 block">
                <span className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Message
                </span>
                <textarea
                  rows={4}
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Share details about the role, technical requirements, or schedule a quick chat..."
                  className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-white/10 dark:bg-white/5 dark:placeholder:text-slate-500"
                />
              </label>

              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 px-6 py-3.5 font-bold text-white shadow-xl shadow-indigo-600/25 transition hover:brightness-110 disabled:opacity-70 sm:w-auto"
              >
                {status === "sending" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" /> Sending Message...
                  </>
                ) : status === "sent" ? (
                  <>
                    <CheckCircle2 className="h-4 w-4" /> Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" /> Send Message
                  </>
                )}
              </button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* =====================================================================
          10. FOOTER
      ===================================================================== */}
      <footer className="border-t border-slate-200 bg-slate-950 py-12 text-slate-400 dark:border-white/10">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
          <div>
            <span className="bg-gradient-to-r from-indigo-300 via-purple-300 to-cyan-300 bg-clip-text text-lg font-black text-transparent">
              {PORTFOLIO_DATA.brand}
            </span>
            <p className="mt-2 text-xs font-semibold text-slate-400">
              {PORTFOLIO_DATA.role}
            </p>
            <p className="mt-3 max-w-xs text-xs leading-relaxed text-slate-500">
              Final-year B.Tech CSE student & immediate joiner building with LangGraph, Gemini 2.0 Flash, FastAPI, Docker, and Big Data EDA.
            </p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-white">Quick Navigation</p>
            <ul className="mt-3 grid grid-cols-2 gap-2 text-xs">
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
            <p className="text-xs font-bold uppercase tracking-widest text-white">Direct Connect</p>
            <a
              href={`mailto:${PORTFOLIO_DATA.email}`}
              className="mt-3 flex items-center gap-2 text-xs transition hover:text-white"
            >
              <Mail className="h-3.5 w-3.5 text-indigo-400" /> {PORTFOLIO_DATA.email}
            </a>
            <a
              href={PORTFOLIO_DATA.phoneHref}
              className="mt-2 flex items-center gap-2 text-xs transition hover:text-white"
            >
              <Phone className="h-3.5 w-3.5 text-purple-400" /> {PORTFOLIO_DATA.phone}
            </a>
            <p className="mt-2 flex items-center gap-2 text-xs text-slate-500">
              <MapPin className="h-3.5 w-3.5 text-rose-400" /> {PORTFOLIO_DATA.location}
            </p>

            <div className="mt-4 flex gap-2">
              {PORTFOLIO_DATA.socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="grid h-8 w-8 place-items-center rounded-lg bg-white/5 transition hover:bg-white/15 hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 px-4 pt-6 text-center text-xs sm:px-6 lg:px-8">
          Crafted with <Heart className="inline h-3.5 w-3.5 fill-rose-500 text-rose-500" /> for {PORTFOLIO_DATA.fullName}. All rights reserved © 2026.
        </div>
      </footer>

      {/* Floating Interactive Toast */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.95 }}
            className="fixed bottom-6 left-1/2 z-[100] flex w-[calc(100%-2rem)] max-w-md -translate-x-1/2 items-center gap-3 rounded-2xl border border-slate-200/20 bg-slate-900/90 px-5 py-3.5 text-xs font-medium text-white shadow-2xl backdrop-blur-xl dark:bg-white dark:text-slate-900"
            style={{ x: "-50%" }}
          >
            <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400 dark:text-emerald-600" />
            <span>{toast}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Interactive Project Deep-Dive Modal */}
      <ProjectModal
        project={activeProjectModal}
        onClose={() => setActiveProjectModal(null)}
      />
    </div>
  );
}

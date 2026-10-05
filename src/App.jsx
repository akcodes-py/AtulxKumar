import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  BarChart3,
  Brain,
  Briefcase,
  Calendar,
  Check,
  CheckCircle2,
  ChevronRight,
  Cloud,
  Code2,
  Copy,
  Cpu,
  Database,
  Download,
  ExternalLink,
  Eye,
  FileText,
  GraduationCap,
  Layers,
  Mail,
  MapPin,
  Menu,
  Phone,
  Send,
  Server,
  ShieldCheck,
  Sparkles,
  Star,
  Terminal,
  X,
  Zap,
} from "lucide-react";

/* ── Inline Brand SVGs ───────────────────────────────────── */
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

const LeetCodeIcon = ({ className = "h-4 w-4" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.874 5.874 0 0 0 .749 1.621 5.922 5.922 0 0 0 1.606 1.68 6.043 6.043 0 0 0 3.26.991 5.952 5.952 0 0 0 3.995-1.52l.008-.008.018-.017 3.65-3.838a1.258 1.258 0 0 0-.041-1.748 1.257 1.257 0 0 0-1.748.041L9.62 16.386a3.484 3.484 0 0 1-2.336.885 3.532 3.532 0 0 1-1.923-.58 3.464 3.464 0 0 1-.94-1.002 3.434 3.434 0 0 1-.44-1.026 3.29 3.29 0 0 1-.039-1.393 3.12 3.12 0 0 1 .715-1.246l3.86-4.135 4.969-5.323c.48-.515.228-1.385-.45-1.63a1.41 1.41 0 0 0-.553-.016ZM15.422 9.07a1.26 1.26 0 0 0-1.258 1.258v4.343a1.26 1.26 0 1 0 2.516 0v-4.343a1.26 1.26 0 0 0-1.258-1.258Z" />
  </svg>
);

/* ── Unified Comprehensive Portfolio Data (Data Engineer Dominant) ── */
const PORTFOLIO_DATA = {
  name: "Atul Kumar",
  role: "Data Engineer & Full-Stack AI Developer",
  subRole: "Python • PySpark • SQL • 1M+ Records EDA • FastAPI • RAG & LangGraph • Node.js / MERN",
  availability: "Available for Opportunities · Immediate Joiner",
  email: "atulkumarm.512@gmail.com",
  phone: "+91 6392077642",
  phoneHref: "tel:+916392077642",
  location: "Ghaziabad, Uttar Pradesh, India (Open to Remote / Relocation)",
  resumeUrl: "/Atul_Kumar_Resume.pdf",
  github: "https://github.com/akcodes-py",
  linkedin: "https://linkedin.com/in/atul-kumar-365289294",
  leetcode: "https://leetcode.com",
  summary:
    "Data Engineer and Full-Stack Developer specializing in big data processing, ETL pipelines, and high-concurrency architectures. Experienced in Python, SQL, pandas, PySpark, and geospatial analysis (cleaned and analyzed 1M+ UIDAI Aadhaar records). Combines data engineering with Generative AI (LangGraph StateGraph, multi-format RAG, ChromaDB, Gemini 2.0 Flash) and robust full-stack platforms (zero double-booking MERN platforms, Django REST, Docker, AWS EC2/S3, GitHub Actions CI/CD). Solved 250+ DSA problems across LeetCode & GFG.",

  stats: [
    { value: "1M+", label: "UIDAI Records\nCleaned & Analyzed" },
    { value: "250+", label: "DSA Problems\nSolved" },
    { value: "100%", label: "ETL & Concurrency\nGuaranteed" },
    { value: "7.62", label: "B.Tech CSE\nCGPA (RKGIT)" },
  ],

  navLinks: [
    { label: "About", href: "#about" },
    { label: "Data & Skills", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Skills Matrix", href: "#skills" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ],

  services: [
    {
      icon: BarChart3,
      title: "Data Engineering & ETL Pipelines",
      dominant: true,
      desc: "Architecting robust data ingestion and transformation pipelines using Python, pandas, and PySpark. Ingesting multi-source CSVs (1M+ rows), cleaning edge-case anomalies, data normalization, and building structured analytical datasets with SQL.",
      color: "cyan",
    },
    {
      icon: Database,
      title: "Big Data Analytics & Geospatial EDA",
      dominant: true,
      desc: "Exploratory Data Analysis (EDA) on national demographic datasets. Generating GeoJSON choropleth heatmaps, regional density correlations, temporal trend curves, and demographic distribution insights using Matplotlib & Seaborn.",
      color: "blue",
    },
    {
      icon: Brain,
      title: "Generative AI & Vector Data Pipelines",
      desc: "Developing multi-format RAG pipelines with LangGraph StateGraph (query rewrite → vector retrieve → cross-encoder rerank → generate), Gemini 2.0 Flash, ChromaDB vector indexing, and grounded hallucination mitigation.",
      color: "purple",
    },
    {
      icon: Server,
      title: "High-Concurrency Backend & APIs",
      desc: "Engineering scalable backend systems and REST APIs with Python (FastAPI, Django REST) and Node.js. Implementing distributed Redis slot locking for zero double-booking, connection pooling, and PostgreSQL/MySQL ACID transactions.",
      color: "violet",
    },
    {
      icon: Layers,
      title: "Full-Stack & MERN Engineering",
      desc: "Building production web applications with React, TypeScript, Node.js, Express, and MongoDB. Layered monorepo architectures with shared Zod schema validation, JWT auth, and third-party API integrations (Google Calendar, Meet).",
      color: "indigo",
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure & CI/CD",
      desc: "Deploying data and application workloads on AWS (EC2, S3 data buckets, IAM), Docker containerization, automated GitHub Actions CI/CD pipelines, Linux CLI scripting, and workflow orchestration via n8n.",
      color: "emerald",
    },
  ],

  projects: [
    {
      id: "aadhaar",
      title: "Aadhaar Enrolment Demographic Analysis (UIDAI)",
      category: "Data Engineering & Big Data",
      dominant: true,
      featured: true,
      badge: "1M+ UIDAI Records",
      accent: "from-cyan-600 via-blue-700 to-indigo-900",
      icon: BarChart3,
      tagline: "Large-Scale Data Cleaning, Ingestion & GeoJSON Choropleth EDA on 1M+ Rows",
      summary:
        "Flagship big data analytics and ETL project analyzing 1M+ official UIDAI Aadhaar enrolment records merged across 3 CSV files. Executed comprehensive data cleansing to resolve state naming discrepancies and corrupted rows. Generated multi-dimensional aggregations by month, age bracket, and geography. Discovered that Uttar Pradesh, Bihar, and Madhya Pradesh account for ~39% of total new enrolments, and identified a surge in September 2025 driven by 0–5 age group enrollments.",
      bullets: [
        "Ingested and merged 3 large UIDAI CSV dataset files totaling 1M+ raw record rows into unified pandas data structures.",
        "Engineered end-to-end data cleansing pipeline: normalized state naming inconsistencies, filtered corrupt entries, and resolved regional boundaries.",
        "Executed multi-dimensional temporal and demographic aggregations (age brackets: 0–5, 5–18, 18+ years across Indian states).",
        "Constructed GeoJSON choropleth heatmaps, temporal trend curves, and demographic distribution donuts visualizing national enrolment density.",
        "Uncovered significant policy-driven surge in September 2025 correlating with national early-childhood registration initiatives.",
      ],
      tech: [
        "Python",
        "pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn",
        "GeoJSON",
        "Data Cleaning",
        "ETL",
        "EDA",
      ],
      github: "https://github.com/akcodes-py",
      demo: "https://github.com/akcodes-py",
    },
    {
      id: "cognigraph",
      title: "CogniGraph – AI Learning Workspace & RAG Pipeline",
      category: "Generative AI & Vector Data",
      featured: true,
      badge: "LangGraph & Gemini 2.0",
      accent: "from-purple-600 via-violet-700 to-indigo-950",
      icon: Brain,
      tagline: "Multi-Format Document Ingestion, ChromaDB Vector Indexing & StateGraph RAG",
      summary:
        "Production Generative AI workspace featuring an automated multi-format data ingestion and retrieval pipeline. Ingests heterogeneous documents (PDFs, Markdown, text), chunks text semantically, generates vector embeddings, and executes a LangGraph StateGraph pipeline (query rewrite → dense vector retrieve → cross-encoder rerank → grounded response generation) powered by Google Gemini 2.0 Flash and ChromaDB.",
      bullets: [
        "Designed LangGraph StateGraph workflow with query expansion, vector similarity retrieval, and reranking nodes.",
        "Integrated Google Gemini 2.0 Flash with grounding prompts to reduce hallucination and guarantee citation accuracy.",
        "Engineered async document processing and chunking pipeline with sentence-transformers and ChromaDB vector indexing.",
        "Implemented Google OAuth 2.0, JWT session management, and PostgreSQL conversational memory caching.",
        "Containerized the multi-service application with Docker Compose for production deployment.",
      ],
      tech: [
        "FastAPI",
        "Python",
        "Next.js",
        "LangGraph",
        "Gemini 2.0 Flash",
        "ChromaDB",
        "sentence-transformers",
        "PostgreSQL",
        "Docker",
        "Google OAuth",
      ],
      github: "https://github.com/akcodes-py/AI-PDF-Q-A",
      demo: "https://github.com/akcodes-py/AI-PDF-Q-A",
    },
    {
      id: "cedmeet",
      title: "CedMeet – Smart Meeting Platform (MERN)",
      category: "Full-Stack & Concurrency",
      featured: true,
      badge: "Redis Distributed Locks",
      accent: "from-violet-600 via-indigo-700 to-blue-900",
      icon: Calendar,
      tagline: "Calendly-Style Scheduling with Zero Double-Booking via Redis Locks",
      summary:
        "Calendly-style meeting scheduling and booking platform built on a layered monorepo. Solved booking concurrency race conditions using distributed Redis slot locking and MongoDB ACID transactions, guaranteeing 100% zero double bookings. Features real-time two-way Google Calendar synchronization, automatic Google Meet link creation, Argon2id auth, and automated n8n reminder notifications.",
      bullets: [
        "Guaranteed 100% zero double bookings via distributed Redis key mutex locks & MongoDB multi-document ACID transactions.",
        "Engineered layered monorepo architecture with shared Zod validation schemas across frontend and backend packages.",
        "Integrated Google Calendar API for automated bi-directional calendar synchronization and Google Meet link generation.",
        "Implemented secure JWT session tokens with Argon2id cryptographic password hashing.",
        "Automated booking notification lifecycle and reminders via custom n8n webhook workflows.",
      ],
      tech: [
        "TypeScript",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Redis",
        "React",
        "Tailwind CSS",
        "Google Calendar API",
        "Argon2id",
        "Zod",
        "n8n",
      ],
      github: "https://github.com/akcodes-py/CredMeet",
      demo: "https://github.com/akcodes-py/CredMeet",
    },
    {
      id: "vatsalya",
      title: "Attendance Management System (Vatsalya NGO)",
      category: "Backend & Cloud Infrastructure",
      featured: true,
      badge: "AWS EC2 & PostgreSQL",
      accent: "from-blue-600 via-indigo-700 to-slate-900",
      icon: Briefcase,
      tagline: "Relational PostgreSQL Portal with RBAC, Docker & AWS EC2 CI/CD",
      summary:
        "Engineered and deployed a web-based attendance management system replacing manual paper registers for the Vatsalya Tatva NGO. Built a normalized 3NF PostgreSQL relational schema with granular Admin vs. Volunteer Role-Based Access Control (RBAC). Packaged inside Docker containers and deployed to AWS EC2 with automated GitHub Actions CI/CD pipelines.",
      bullets: [
        "Digitized organizational operations replacing paper-based tracking with real-time digital attendance logging.",
        "Normalized 3NF PostgreSQL database schema with comprehensive role-based access control (Admin, Coordinator, Volunteer).",
        "Developed RESTful backend APIs with Django REST Framework, token authentication, and data validation.",
        "Containerized using Docker and Docker Compose, automating testing and continuous deployment to AWS EC2 via GitHub Actions.",
        "Maintained 99.9% uptime during active organizational drives with zero record loss.",
      ],
      tech: [
        "Django",
        "Django REST Framework",
        "PostgreSQL",
        "React",
        "Docker",
        "AWS EC2",
        "GitHub Actions",
        "Linux",
      ],
      github: "https://github.com/akcodes-py/vatsalya-attendance-system",
      demo: "https://vatsalya-attendance-system.vercel.app",
    },
  ],

  experience: [
    {
      role: "Software Developer Intern",
      organization: "Vatsalya Tatva NGO",
      period: "Jul 2026 – Aug 2026",
      location: "Ghaziabad, India (Remote)",
      type: "Internship",
      highlights: [
        "Architected normalized PostgreSQL relational database schema for volunteer attendance with multi-role RBAC permissions.",
        "Engineered Django REST backend APIs with comprehensive input validation and token-based security.",
        "Dockerized the complete stack and automated continuous deployment to AWS EC2 with GitHub Actions CI/CD.",
        "Collaborated with organization coordinators to onboard 50+ active volunteers, ensuring zero data discrepancies.",
      ],
    },
    {
      role: "Data Engineering & Open Source Developer",
      organization: "GitHub Community (@akcodes-py)",
      period: "Ongoing",
      location: "Remote",
      type: "Open Source",
      highlights: [
        "Built Aadhaar demographic analytics pipeline processing 1M+ UIDAI records using pandas, NumPy, and GeoJSON choropleth maps.",
        "Developed CogniGraph: Multi-format document RAG pipeline with LangGraph StateGraph, Gemini 2.0 Flash, and ChromaDB vector search.",
        "Engineered CedMeet: High-concurrency MERN booking system with distributed Redis mutex locks preventing duplicate reservations.",
        "Practicing Big Data processing with PySpark and distributed data pipelines while solving 250+ DSA problems.",
      ],
    },
  ],

  skillsMatrix: {
    dataEngineering: {
      title: "Data Engineering & Big Data",
      dominant: true,
      icon: BarChart3,
      skills: [
        "Python 3",
        "SQL (PostgreSQL & MySQL)",
        "pandas",
        "NumPy",
        "PySpark (Big Data)",
        "Data Cleaning & Preprocessing",
        "ETL Pipeline Design",
        "Multi-source CSV Ingestion (1M+)",
        "GeoJSON Choropleth Mapping",
        "Matplotlib & Seaborn",
        "Exploratory Data Analysis (EDA)",
      ],
    },
    databases: {
      title: "Databases, Caching & Vector Stores",
      dominant: true,
      icon: Database,
      skills: [
        "PostgreSQL (Normalized 3NF)",
        "MySQL",
        "ChromaDB (Vector Database)",
        "Redis (Distributed Mutex Locks)",
        "MongoDB (ACID Transactions)",
        "Database Indexing & Query Tuning",
        "Connection Pooling",
      ],
    },
    genai: {
      title: "Generative AI & Vector Pipelines",
      icon: Brain,
      skills: [
        "LangGraph (StateGraph)",
        "RAG Architecture",
        "Gemini 2.0 Flash",
        "Vector Search (ChromaDB)",
        "Vector Embeddings",
        "sentence-transformers",
        "Cross-Encoder Reranking",
        "Prompt Engineering & Guardrails",
      ],
    },
    backend: {
      title: "Backend & Scalable APIs",
      icon: Server,
      skills: [
        "FastAPI",
        "Django & Django REST Framework",
        "Node.js",
        "Express.js",
        "React",
        "TypeScript",
        "Zod Schema Validation",
        "JWT Authentication",
        "Argon2id Hashing",
        "RESTful API Design",
      ],
    },
    cloud: {
      title: "Cloud & DevOps Infrastructure",
      icon: Cloud,
      skills: [
        "AWS (EC2, S3 Data Buckets, IAM)",
        "Docker & Docker Compose",
        "GitHub Actions CI/CD",
        "Linux CLI / Bash Scripting",
        "Railway",
        "Vercel",
        "n8n Workflow Automation",
        "Pytest",
        "Postman",
        "Git & GitHub",
      ],
    },
    cs: {
      title: "Core Computer Science & DSA",
      icon: Cpu,
      skills: [
        "Data Structures & Algorithms (250+ Solved)",
        "Database Management Systems (DBMS)",
        "Object-Oriented Programming (OOP)",
        "Operating Systems",
        "Computer Networks",
        "System Design Principles",
      ],
    },
  },

  achievements: [
    {
      title: "Best Prototype Implementation",
      event: "Hackwarts Hackathon (2026)",
      desc: "Recognized for robust system architecture, concurrency handling, and functional prototype engineering.",
      icon: Award,
    },
    {
      title: "2nd Place Winner",
      event: "AECE Project Showcase (2025)",
      desc: "Awarded 2nd position among departmental engineering submissions for high technical execution.",
      icon: Award,
    },
    {
      title: "2nd Place Winner",
      event: "Binary Codes 2.0 (2024)",
      desc: "Awarded for algorithmic problem solving and competitive coding performance.",
      icon: Zap,
    },
    {
      title: "250+ DSA Problems Solved",
      event: "LeetCode & GeeksforGeeks",
      desc: "Mastered fundamental algorithms, graph theory, dynamic programming, and optimal time-space complexities.",
      icon: Brain,
    },
  ],

  certifications: [
    {
      title: "SQL Certificate",
      issuer: "HackerRank",
      date: "Sep 2026",
      icon: Database,
      dominant: true,
      color: "from-emerald-500 to-teal-600",
    },
    {
      title: "AWS Knowledge: Cloud Essentials – Training Badge",
      issuer: "Amazon Web Services Training & Certification",
      date: "Sep 2026",
      icon: Cloud,
      dominant: true,
      color: "from-amber-500 to-orange-600",
    },
    {
      title: "Python for Everybody Specialization",
      issuer: "Coursera · University of Michigan",
      date: "Certified",
      icon: Code2,
      dominant: true,
      color: "from-blue-500 to-indigo-600",
    },
    {
      title: "Problem Solving Through Programming in Python",
      issuer: "NPTEL · IIT Kharagpur",
      date: "Certified",
      icon: Terminal,
      color: "from-purple-500 to-violet-600",
    },
  ],

  testimonials: [
    {
      quote:
        "Atul transformed our manual volunteer attendance system into a production-grade digital portal on AWS with normalized PostgreSQL schemas. His data integrity mindset and technical execution were exceptional.",
      author: "Vatsalya Tatva NGO Leadership",
      role: "Organizational Mentor",
      badge: "Production Impact",
    },
    {
      quote:
        "Demonstrated exceptional engineering maturity across data pipelines, concurrency control, and LangGraph RAG. Processing 1M+ records while solving distributed booking locks demonstrates rare full-stack and data depth.",
      author: "Hackwarts Hackathon Jury",
      role: "Technical Evaluation Panel",
      badge: "Hackathon Award",
    },
  ],

  education: {
    institution: "Raj Kumar Goel Institute of Technology, Ghaziabad",
    degree: "Bachelor of Technology in Computer Science & Engineering",
    cgpa: "CGPA: 7.62 / 10 (till 6th sem)",
    timeline: "Aug 2023 – Jun 2027",
    location: "Ghaziabad, Uttar Pradesh, India",
    status: "Final-Year · Immediate Joiner",
    coursework: [
      "Database Management Systems (DBMS)",
      "Data Structures & Algorithms",
      "Machine Learning",
      "Artificial Intelligence",
      "Cloud Computing",
      "Object-Oriented Programming (OOP)",
      "Operating Systems",
      "Computer Networks",
    ],
  },
};

/* ── Motion Variants ─────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

const fadeLeft = {
  hidden: { opacity: 0, x: -20 },
  show: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] },
  }),
};

/* ── Section Header Component ────────────────────────────── */
function SectionHeader({ label, title, subtitle }) {
  return (
    <div className="mb-14 text-center">
      <motion.span
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mb-3.5 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-cyan-300"
      >
        <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
        {label}
      </motion.span>
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mx-auto mt-3.5 max-w-2xl text-sm leading-relaxed text-white/50 sm:text-base"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}

/* ── Left Sidebar (Matching Reference with Data Engineer Focus) ── */
function LeftSidebar({ open, onClose, onSelectProject }) {
  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm lg:hidden"
            onClick={onClose}
          />
        )}
      </AnimatePresence>

      <motion.aside
        initial={false}
        animate={{ x: open ? 0 : "-100%" }}
        transition={{ type: "spring", damping: 30, stiffness: 280 }}
        className="fixed left-0 top-0 z-50 flex h-full w-[290px] flex-col border-r border-white/5 bg-[#090b17] lg:relative lg:translate-x-0 lg:z-auto lg:flex"
        style={{ minWidth: 290 }}
      >
        {/* Brand identity header */}
        <div className="flex items-center justify-between border-b border-white/5 p-5">
          <a href="#about" className="flex items-center gap-3 group">
            <div className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-cyan-500 via-purple-600 to-violet-700 text-white font-black text-base shadow-lg shadow-purple-900/50 group-hover:scale-105 transition">
              AK
            </div>
            <div>
              <p className="text-sm font-black text-white group-hover:text-cyan-300 transition">
                {PORTFOLIO_DATA.name}
              </p>
              <p className="text-[11px] font-semibold text-cyan-400">Data Engineer & Full-Stack</p>
            </div>
          </a>
          <button
            onClick={onClose}
            className="grid h-8 w-8 place-items-center rounded-lg text-white/40 hover:bg-white/5 hover:text-white lg:hidden"
            aria-label="Close sidebar"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Navigation list */}
        <nav className="p-3">
          {PORTFOLIO_DATA.navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="flex items-center justify-between rounded-xl px-3.5 py-2.5 text-xs font-semibold text-white/60 transition hover:bg-purple-600/15 hover:text-cyan-300"
            >
              <span>{link.label}</span>
              <ChevronRight className="h-3.5 w-3.5 text-cyan-400/40" />
            </a>
          ))}
        </nav>

        <div className="mx-4 border-t border-white/5 my-2" />

        {/* "My Recent Projects" thumbnail list */}
        <div className="flex-1 overflow-y-auto px-4 py-2 space-y-4">
          <div>
            <div className="mb-3 flex items-center justify-between">
              <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/40">
                Key Projects & Pipelines
              </span>
              <span className="rounded-full bg-cyan-500/10 px-2 py-0.5 text-[10px] font-bold text-cyan-400">
                {PORTFOLIO_DATA.projects.length}
              </span>
            </div>
            <div className="space-y-2.5">
              {PORTFOLIO_DATA.projects.map((p, idx) => {
                const Icon = p.icon;
                return (
                  <motion.div
                    key={p.id}
                    variants={fadeLeft}
                    initial="hidden"
                    animate="show"
                    custom={idx}
                    onClick={() => {
                      onSelectProject(p);
                      onClose();
                    }}
                    className={`group relative cursor-pointer overflow-hidden rounded-2xl border p-3.5 transition hover:scale-[1.02] ${
                      p.dominant
                        ? "border-cyan-500/30 bg-cyan-950/20 hover:border-cyan-400/60"
                        : "border-white/5 bg-white/[0.02] hover:border-purple-500/40 hover:bg-white/[0.04]"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br ${p.accent} text-white shadow-md`}
                      >
                        <Icon className="h-4 w-4" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-1">
                          <p className="truncate text-xs font-bold text-white group-hover:text-cyan-300 transition">
                            {p.title}
                          </p>
                          <ArrowUpRight className="h-3.5 w-3.5 text-white/30 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
                        </div>
                        <p className="mt-0.5 line-clamp-1 text-[10px] text-white/50">{p.tagline}</p>
                        <div className="mt-1.5 flex items-center gap-1.5">
                          <span
                            className={`rounded px-1.5 py-0.5 text-[9px] font-semibold ${
                              p.dominant
                                ? "bg-cyan-500/20 text-cyan-300"
                                : "bg-purple-500/20 text-purple-300"
                            }`}
                          >
                            {p.category}
                          </span>
                          <span className="text-[9px] text-white/30">•</span>
                          <span className="text-[9px] text-white/40">{p.tech[0]}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className="border-t border-white/5 pt-3">
            {/* Recognition Card */}
            <p className="mb-2.5 text-[11px] font-bold uppercase tracking-[0.16em] text-white/40">
              Recognition & Impact
            </p>
            <div className="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-950/30 to-purple-950/20 p-3.5">
              <div className="flex items-center gap-1 text-amber-400 mb-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3 w-3 fill-current" />
                ))}
              </div>
              <p className="text-[11px] italic leading-relaxed text-white/70">
                &ldquo;Processed 1M+ raw records with clean data pipelines, and engineered production portals with
                zero downtime.&rdquo;
              </p>
              <p className="mt-2 text-[10px] font-bold text-cyan-300">
                — Hackathon & Organization Panel
              </p>
            </div>
          </div>

          {/* Core Stack Pills */}
          <div className="border-t border-white/5 pt-3 pb-2">
            <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.16em] text-white/40">
              Core Technologies
            </p>
            <div className="flex flex-wrap gap-1.5">
              {[
                "Python",
                "PySpark",
                "SQL",
                "pandas",
                "FastAPI",
                "LangGraph",
                "ChromaDB",
                "Node.js",
                "React",
                "PostgreSQL",
                "Redis",
                "AWS S3/EC2",
                "Docker",
              ].map((pill) => (
                <span
                  key={pill}
                  className="rounded-md border border-white/5 bg-white/5 px-2 py-0.5 text-[10px] font-semibold text-white/60"
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar Footer */}
        <div className="border-t border-white/5 p-4">
          <a
            href={`mailto:${PORTFOLIO_DATA.email}`}
            className="flex items-center gap-2.5 rounded-xl bg-cyan-500/10 px-3 py-2.5 text-xs font-semibold text-cyan-300 transition hover:bg-cyan-500/20"
          >
            <Mail className="h-3.5 w-3.5 shrink-0" />
            <span className="truncate">{PORTFOLIO_DATA.email}</span>
          </a>
        </div>
      </motion.aside>
    </>
  );
}

/* ── Project Modal Detail ─────────────────────────────────── */
function ProjectModal({ project, onClose }) {
  if (!project) return null;
  const Icon = project.icon;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ type: "spring", damping: 26, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
          className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-white/10 bg-[#0d0f1f] p-6 shadow-2xl shadow-purple-900/40 sm:p-8"
        >
          <button
            onClick={onClose}
            className="absolute right-5 top-5 grid h-9 w-9 place-items-center rounded-xl bg-white/5 text-white/50 hover:bg-white/10 hover:text-white transition"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Modal Header */}
          <div
            className={`-mx-6 -mt-6 rounded-t-3xl bg-gradient-to-br ${project.accent} p-6 sm:-mx-8 sm:-mt-8 sm:p-8`}
          >
            <div className="flex items-start gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white/20 backdrop-blur shadow-inner">
                <Icon className="h-6 w-6 text-white" />
              </span>
              <div>
                <span className="rounded-full bg-black/30 px-3 py-1 text-[11px] font-bold text-white/90 backdrop-blur">
                  {project.category}
                </span>
                <h3 className="mt-2 text-xl font-black text-white sm:text-2xl">{project.title}</h3>
                <p className="mt-1 text-xs text-white/80">{project.tagline}</p>
              </div>
            </div>
          </div>

          {/* Modal Body */}
          <div className="mt-6 space-y-6">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-cyan-400">
                Pipeline & Architecture Overview
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{project.summary}</p>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-cyan-400">
                Key Technical Highlights & Outcomes
              </h4>
              <ul className="mt-3 space-y-2.5">
                {project.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs leading-relaxed text-white/70">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-cyan-400">
                Technologies & Tools Used
              </h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-lg border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex flex-wrap items-center gap-3 border-t border-white/10 pt-5">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-cyan-600 px-5 py-2.5 text-xs font-bold text-white shadow-lg shadow-cyan-900/40 transition hover:bg-cyan-500"
                >
                  <ExternalLink className="h-4 w-4" /> Live Demo / Repo
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-2.5 text-xs font-bold text-white transition hover:bg-white/10"
                >
                  <GithubIcon className="h-4 w-4" /> View GitHub Source
                </a>
              )}
              <button
                onClick={onClose}
                className="ml-auto rounded-xl px-4 py-2.5 text-xs font-semibold text-white/40 hover:text-white transition"
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

/* ── Main Application Component ───────────────────────────── */
export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [copiedKey, setCopiedKey] = useState("");
  const [toastMsg, setToastMsg] = useState("");
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "Data Engineer / Full-Stack / GenAI Role",
    message: "",
  });
  const [sendStatus, setSendStatus] = useState("idle");

  const triggerToast = (msg) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(""), 3000);
  };

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    triggerToast(`Copied: ${text}`);
    setTimeout(() => setCopiedKey(""), 2000);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      triggerToast("Please complete all required fields.");
      return;
    }
    setSendStatus("sending");
    setTimeout(() => {
      setSendStatus("sent");
      triggerToast("Message sent successfully! I will reply within 24 hours.");
      setFormState({
        name: "",
        email: "",
        subject: "Data Engineer / Full-Stack / GenAI Role",
        message: "",
      });
      setTimeout(() => setSendStatus("idle"), 3000);
    }, 1200);
  };

  const filteredProjects =
    activeCategory === "All"
      ? PORTFOLIO_DATA.projects
      : PORTFOLIO_DATA.projects.filter((p) => p.category.includes(activeCategory));

  return (
    <div
      id="top"
      className="flex min-h-screen bg-[#070815] text-white selection:bg-cyan-500/30 selection:text-cyan-200"
      style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}
    >
      {/* ── Left Sidebar (Matching Reference Design) ─────────── */}
      <LeftSidebar
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        onSelectProject={(p) => setSelectedProject(p)}
      />

      {/* ── Main Content Area ───────────────────────────────── */}
      <div className="flex min-h-screen flex-1 flex-col overflow-x-hidden">
        {/* ── Top Bar ───────────────────────────────────────── */}
        <header className="sticky top-0 z-30 flex items-center justify-between border-b border-white/5 bg-[#070815]/85 px-4 py-3.5 backdrop-blur-xl sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-white/5 text-white/70 transition hover:bg-cyan-600/20 hover:text-cyan-300 lg:hidden"
              aria-label="Toggle navigation menu"
            >
              <Menu className="h-4 w-4" />
            </button>
            <div className="hidden lg:flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-xs font-semibold text-white/70">
                Immediate Joiner · Seeking Data Engineer / Full-Stack AI Roles
              </span>
            </div>
          </div>

          {/* Desktop Center Navigation */}
          <nav className="hidden items-center gap-1 lg:flex">
            {PORTFOLIO_DATA.navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-xl px-3.5 py-1.5 text-xs font-semibold text-white/60 transition hover:bg-cyan-500/15 hover:text-cyan-300"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-3">
            <a
              href={PORTFOLIO_DATA.resumeUrl}
              download
              className="hidden sm:inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-3.5 py-2 text-xs font-bold text-white/80 transition hover:border-cyan-500/40 hover:text-white"
            >
              <Download className="h-3.5 w-3.5 text-cyan-400" />
              <span>Resume</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-600 to-purple-600 px-4 py-2 text-xs font-bold text-white shadow-lg shadow-cyan-900/40 transition hover:opacity-90"
            >
              Let&apos;s Talk
            </a>
          </div>
        </header>

        {/* ── Toast Notification ────────────────────────────── */}
        <AnimatePresence>
          {toastMsg && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed top-20 right-6 z-50 flex items-center gap-2 rounded-2xl border border-cyan-500/40 bg-[#0e1629] px-4 py-3 text-xs font-semibold text-white shadow-2xl shadow-cyan-900/50"
            >
              <Check className="h-4 w-4 text-emerald-400" />
              <span>{toastMsg}</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── HERO SECTION (Matching Reference with Data Engineer Dominance) ── */}
        <section
          id="about"
          className="relative flex min-h-[calc(100vh-65px)] flex-col justify-center overflow-hidden px-4 py-12 sm:px-6 lg:px-10"
        >
          {/* Subtle atmospheric glow background */}
          <div className="pointer-events-none absolute -top-32 left-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-600/15 blur-[120px]" />
          <div className="pointer-events-none absolute bottom-0 right-10 h-[350px] w-[350px] rounded-full bg-purple-800/15 blur-[100px]" />

          <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-12 lg:flex-row lg:items-center">
            {/* ── Left: Introduction Content ─────────────────── */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left"
            >
              {/* Highlight Badge */}
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-bold text-cyan-300">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500" />
                </span>
                Data Engineer & Big Data Specialist · Immediate Joiner
              </div>

              <p className="text-sm font-semibold tracking-wide text-white/50">
                Hello, Welcome 👋
              </p>
              <h1 className="mt-2 text-4xl font-black leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
                I&apos;m{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-400 bg-clip-text text-transparent">
                  {PORTFOLIO_DATA.name}
                </span>
              </h1>
              <p className="mt-3 text-lg font-bold text-cyan-300 sm:text-2xl">
                {PORTFOLIO_DATA.role}
              </p>
              <p className="mt-1 text-xs font-medium text-white/50">
                {PORTFOLIO_DATA.subRole}
              </p>

              <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-white/60 lg:mx-0">
                {PORTFOLIO_DATA.summary}
              </p>

              {/* Data & Tech Highlights Badges */}
              <div className="mt-4 flex flex-wrap justify-center gap-2 lg:justify-start">
                <span className="rounded-lg border border-cyan-500/30 bg-cyan-500/10 px-2.5 py-1 text-[11px] font-bold text-cyan-300">
                  📊 1M+ Records Cleaned & Analyzed
                </span>
                <span className="rounded-lg border border-purple-500/30 bg-purple-500/10 px-2.5 py-1 text-[11px] font-bold text-purple-300">
                  ⚡ PySpark & SQL Pipelines
                </span>
                <span className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-[11px] font-bold text-emerald-300">
                  🔒 Distributed Redis Locks
                </span>
              </div>

              {/* Quick Contact Chips */}
              <div className="mt-5 flex flex-wrap justify-center gap-2 lg:justify-start">
                <button
                  onClick={() => handleCopy(PORTFOLIO_DATA.email, "email")}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-semibold text-white/70 transition hover:border-cyan-500/40 hover:bg-cyan-600/20 hover:text-cyan-300"
                >
                  {copiedKey === "email" ? (
                    <Check className="h-3 w-3 text-emerald-400" />
                  ) : (
                    <Copy className="h-3 w-3" />
                  )}
                  {PORTFOLIO_DATA.email}
                </button>
                <button
                  onClick={() => handleCopy(PORTFOLIO_DATA.phone, "phone")}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-semibold text-white/70 transition hover:border-cyan-500/40 hover:bg-cyan-600/20 hover:text-cyan-300"
                >
                  {copiedKey === "phone" ? (
                    <Check className="h-3 w-3 text-emerald-400" />
                  ) : (
                    <Phone className="h-3 w-3" />
                  )}
                  {PORTFOLIO_DATA.phone}
                </button>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-semibold text-white/50">
                  <MapPin className="h-3 w-3 text-rose-400" />
                  Ghaziabad (Delhi NCR), India
                </span>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-600 to-purple-600 px-6 py-3 text-sm font-bold text-white shadow-xl shadow-cyan-900/40 transition hover:opacity-95"
                >
                  Hire Me
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href={PORTFOLIO_DATA.resumeUrl}
                  download
                  className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-bold text-white backdrop-blur transition hover:border-cyan-500/40 hover:bg-white/10"
                >
                  <Download className="h-4 w-4 text-cyan-300" />
                  Download Resume
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 text-sm font-bold text-white/60 transition hover:text-white"
                >
                  Explore Pipelines
                </a>
              </div>

              {/* Social icons */}
              <div className="mt-8 flex items-center gap-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-white/30">
                  Profiles
                </span>
                <div className="h-px w-6 bg-white/15" />
                {[
                  { href: PORTFOLIO_DATA.github, Icon: GithubIcon, label: "GitHub" },
                  { href: PORTFOLIO_DATA.linkedin, Icon: LinkedinIcon, label: "LinkedIn" },
                  { href: PORTFOLIO_DATA.leetcode, Icon: LeetCodeIcon, label: "LeetCode" },
                  { href: `mailto:${PORTFOLIO_DATA.email}`, Icon: Mail, label: "Email" },
                ].map(({ href, Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-white/5 text-white/60 transition hover:border-cyan-500/40 hover:bg-cyan-600/20 hover:text-cyan-300"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* ── Center: Photo Container (Arched Purple Pill Shape from Reference) ── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex flex-shrink-0 items-center justify-center py-4"
            >
              {/* Outer decorative orbital rings */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="h-[360px] w-[360px] rounded-full border border-purple-500/20 sm:h-[400px] sm:w-[400px]" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="h-[300px] w-[300px] rounded-full border border-cyan-500/20 sm:h-[340px] sm:w-[340px]" />
              </div>

              {/* Orbiting glowing dot animation */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
              >
                <div className="relative h-[360px] w-[360px] sm:h-[400px] sm:w-[400px]">
                  <div className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1.5 rounded-full bg-cyan-400 shadow-lg shadow-cyan-500/90" />
                </div>
              </motion.div>

              {/* The Distinctive Arched Pill Container (Matching Reference Design) */}
              <div className="relative z-10 flex flex-col items-center justify-end overflow-hidden rounded-[80px] rounded-b-[40px] bg-gradient-to-b from-[#6d28d9] via-[#5b21b6] to-[#0f172a] p-2 shadow-2xl shadow-purple-900/60 w-[240px] h-[320px] sm:w-[280px] sm:h-[370px]">
                {/* Glow highlight */}
                <div className="pointer-events-none absolute -top-12 inset-x-0 h-32 bg-cyan-400/20 blur-xl" />

                {/* Atul's Exact Photo */}
                <img
                  src="/profile.jpg"
                  alt={PORTFOLIO_DATA.name}
                  className="h-full w-full object-cover object-top transition duration-500 hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />

                {/* Bottom badge */}
                <div className="absolute bottom-3 inset-x-3 rounded-2xl bg-black/50 px-3 py-1.5 backdrop-blur-md border border-white/10 text-center">
                  <p className="text-[11px] font-bold text-white">Atul Kumar</p>
                  <p className="text-[9px] font-semibold text-cyan-300">
                    Data Engineer · Full-Stack AI
                  </p>
                </div>
              </div>
            </motion.div>

            {/* ── Right: Vertical Stats Column (Exact Reference Layout) ── */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-row justify-center gap-6 sm:gap-10 lg:flex-col lg:items-start lg:justify-center lg:gap-7 lg:pl-6"
            >
              {PORTFOLIO_DATA.stats.map((s, idx) => (
                <div key={idx} className="text-center lg:text-left">
                  <p className="text-3xl font-black tracking-tight text-white sm:text-4xl">
                    {s.value}
                  </p>
                  <p className="mt-1 whitespace-pre-line text-[11px] font-semibold uppercase tracking-wider text-cyan-300/60">
                    {s.label}
                  </p>
                  {idx < PORTFOLIO_DATA.stats.length - 1 && (
                    <div className="mx-auto mt-4 hidden h-px w-10 bg-white/10 lg:block" />
                  )}
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── SERVICES / WHAT I BUILD (Dominant Data Engineering Focus) ── */}
        <section id="services" className="border-t border-white/5 px-4 py-20 sm:px-6 lg:px-10">
          <SectionHeader
            label="Core Capabilities"
            title="Data Engineering & Development Capabilities"
            subtitle="Leading with large-scale data pipelines, ETL workflows, and geospatial analytics — reinforced by enterprise Generative AI and production full-stack engineering."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PORTFOLIO_DATA.services.map((srv, idx) => {
              const Icon = srv.icon;
              return (
                <motion.div
                  key={srv.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-40px" }}
                  custom={idx}
                  className={`group relative overflow-hidden rounded-3xl border p-7 transition duration-300 hover:-translate-y-1.5 hover:shadow-2xl ${
                    srv.dominant
                      ? "border-cyan-500/40 bg-gradient-to-b from-cyan-950/30 to-[#0c1022] hover:border-cyan-400 hover:shadow-cyan-900/30"
                      : "border-white/5 bg-white/[0.02] hover:border-purple-500/40 hover:bg-white/[0.04] hover:shadow-purple-900/20"
                  }`}
                >
                  {srv.dominant && (
                    <span className="absolute top-4 right-4 rounded-full bg-cyan-500/20 px-2.5 py-0.5 text-[9px] font-bold text-cyan-300 border border-cyan-500/30">
                      Dominant Focus
                    </span>
                  )}
                  <div
                    className={`mb-5 inline-grid h-12 w-12 place-items-center rounded-2xl transition duration-300 ${
                      srv.dominant
                        ? "bg-cyan-500/20 text-cyan-300 group-hover:bg-cyan-500 group-hover:text-slate-900"
                        : "bg-purple-600/15 text-purple-400 group-hover:bg-purple-600 group-hover:text-white"
                    }`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3
                    className={`text-base font-black transition ${
                      srv.dominant ? "text-cyan-200 group-hover:text-white" : "text-white group-hover:text-purple-300"
                    }`}
                  >
                    {srv.title}
                  </h3>
                  <p className="mt-2.5 text-xs leading-relaxed text-white/50">{srv.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* ── FEATURED PROJECTS & PIPELINES ─────────────────── */}
        <section id="projects" className="border-t border-white/5 px-4 py-20 sm:px-6 lg:px-10">
          <SectionHeader
            label="Portfolio"
            title="Featured Projects & Pipelines"
            subtitle="Explore 1M+ record big data analytics, multi-format RAG data systems, and high-concurrency booking platforms."
          />

          {/* Filter Tabs */}
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {[
              "All",
              "Data Engineering & Big Data",
              "Generative AI & Vector Data",
              "Full-Stack & Concurrency",
              "Backend & Cloud Infrastructure",
            ].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-xl px-4 py-2 text-xs font-bold transition ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-cyan-600 to-purple-600 text-white shadow-lg shadow-cyan-900/40"
                    : "border border-white/10 bg-white/5 text-white/60 hover:border-cyan-500/30 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid gap-7 md:grid-cols-2">
            {filteredProjects.map((p, idx) => {
              const Icon = p.icon;
              return (
                <motion.article
                  key={p.id}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-40px" }}
                  custom={idx}
                  className={`group flex flex-col overflow-hidden rounded-3xl border transition duration-300 hover:-translate-y-1.5 hover:shadow-2xl ${
                    p.dominant
                      ? "border-cyan-500/30 bg-gradient-to-b from-cyan-950/20 to-[#0b0e1e] hover:border-cyan-400 hover:shadow-cyan-900/25"
                      : "border-white/5 bg-white/[0.02] hover:border-purple-500/30 hover:shadow-purple-900/20"
                  }`}
                >
                  {/* Card Banner */}
                  <div className={`relative h-44 bg-gradient-to-br ${p.accent} p-6`}>
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.12),transparent)]" />
                    <Icon className="relative h-8 w-8 text-white/90" />
                    <span className="absolute right-4 top-4 rounded-full bg-black/30 px-3 py-1 text-[10px] font-bold text-white/90 backdrop-blur">
                      {p.category}
                    </span>
                    <span className="absolute left-6 bottom-4 rounded-md bg-white/20 px-2.5 py-0.5 text-[10px] font-semibold text-white backdrop-blur">
                      {p.badge}
                    </span>
                    <button
                      onClick={() => setSelectedProject(p)}
                      className="absolute right-4 bottom-4 grid h-9 w-9 place-items-center rounded-xl bg-white/15 text-white backdrop-blur transition hover:scale-110 hover:bg-white/30"
                      aria-label="Preview details"
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </button>
                  </div>

                  {/* Card Content */}
                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <h3 className="text-lg font-black text-white">{p.title}</h3>
                    <p
                      className={`mt-1 text-xs font-semibold ${
                        p.dominant ? "text-cyan-300" : "text-purple-300"
                      }`}
                    >
                      {p.tagline}
                    </p>
                    <p className="mt-3 text-xs leading-relaxed text-white/50 line-clamp-3">
                      {p.summary}
                    </p>

                    {/* Tech Pills */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {p.tech.slice(0, 5).map((t) => (
                        <span
                          key={t}
                          className={`rounded-md border px-2 py-0.5 text-[10px] font-semibold ${
                            p.dominant
                              ? "border-cyan-500/20 bg-cyan-500/10 text-cyan-300"
                              : "border-purple-500/20 bg-purple-500/10 text-purple-300"
                          }`}
                        >
                          {t}
                        </span>
                      ))}
                      {p.tech.length > 5 && (
                        <span className="rounded-md border border-white/5 bg-white/5 px-2 py-0.5 text-[10px] font-semibold text-white/40">
                          +{p.tech.length - 5}
                        </span>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="mt-6 flex items-center gap-2.5 border-t border-white/5 pt-4">
                      <button
                        onClick={() => setSelectedProject(p)}
                        className={`flex flex-1 items-center justify-center gap-1.5 rounded-xl py-2.5 text-xs font-bold text-white transition ${
                          p.dominant
                            ? "bg-cyan-600 hover:bg-cyan-500 shadow-md shadow-cyan-900/30"
                            : "bg-purple-600 hover:bg-purple-500 shadow-md shadow-purple-900/30"
                        }`}
                      >
                        <Eye className="h-3.5 w-3.5" /> Pipeline Details
                      </button>
                      {p.demo && (
                        <a
                          href={p.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-white/10 py-2.5 text-xs font-bold text-white/70 transition hover:border-white/20 hover:text-white"
                        >
                          <ExternalLink className="h-3.5 w-3.5" /> Repo / Demo
                        </a>
                      )}
                      {p.github && (
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noreferrer"
                          className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 text-white/60 hover:text-white transition"
                          aria-label="GitHub Source"
                        >
                          <GithubIcon className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </section>

        {/* ── WORK EXPERIENCE & JOURNEY ──────────────────────── */}
        <section id="experience" className="border-t border-white/5 px-4 py-20 sm:px-6 lg:px-10">
          <SectionHeader
            label="Career"
            title="Work Experience & Journey"
            subtitle="Hands-on software developer internship and data-focused open source engineering."
          />

          <div className="mx-auto max-w-4xl space-y-6">
            {PORTFOLIO_DATA.experience.map((exp, idx) => (
              <motion.div
                key={exp.role}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={idx}
                className="relative overflow-hidden rounded-3xl border border-white/5 bg-white/[0.02] p-7 transition hover:border-cyan-500/30 sm:p-8"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-[11px] font-bold text-cyan-300">
                      {exp.type}
                    </span>
                    <h3 className="mt-2 text-xl font-black text-white">{exp.role}</h3>
                    <p className="font-bold text-cyan-400">{exp.organization}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-semibold text-white/60">{exp.period}</p>
                    <p className="text-xs text-white/40">{exp.location}</p>
                  </div>
                </div>

                <ul className="mt-5 space-y-2.5 border-t border-white/5 pt-4">
                  {exp.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs leading-relaxed text-white/70">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── SKILLS MATRIX (Data Engineering Front & Center) ── */}
        <section id="skills" className="border-t border-white/5 px-4 py-20 sm:px-6 lg:px-10">
          <SectionHeader
            label="Technical Stack"
            title="Comprehensive Skills Matrix"
            subtitle="Front-loaded with Big Data processing, ETL pipelines, and SQL databases — backed by full-stack and Generative AI competencies."
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {Object.entries(PORTFOLIO_DATA.skillsMatrix).map(([key, group], idx) => {
              const Icon = group.icon;
              return (
                <motion.div
                  key={key}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-30px" }}
                  custom={idx}
                  className={`rounded-3xl border p-6 transition hover:scale-[1.01] ${
                    group.dominant
                      ? "border-cyan-500/40 bg-gradient-to-b from-cyan-950/20 to-transparent hover:border-cyan-400"
                      : "border-white/5 bg-white/[0.02] hover:border-purple-500/30 hover:bg-white/[0.03]"
                  }`}
                >
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span
                        className={`grid h-10 w-10 place-items-center rounded-xl ${
                          group.dominant
                            ? "bg-cyan-500/20 text-cyan-300"
                            : "bg-purple-600/15 text-purple-300"
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                      </span>
                      <h3
                        className={`font-bold text-sm ${
                          group.dominant ? "text-cyan-200" : "text-white"
                        }`}
                      >
                        {group.title}
                      </h3>
                    </div>
                    {group.dominant && (
                      <span className="rounded bg-cyan-500/20 px-1.5 py-0.5 text-[9px] font-bold text-cyan-300">
                        Primary
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {group.skills.map((s) => (
                      <span
                        key={s}
                        className={`rounded-lg border px-2.5 py-1 text-[11px] font-semibold transition ${
                          group.dominant
                            ? "border-cyan-500/20 bg-cyan-500/10 text-cyan-200 hover:border-cyan-400 hover:text-white"
                            : "border-white/10 bg-white/5 text-white/70 hover:border-purple-500/40 hover:text-purple-300"
                        }`}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* ── ACHIEVEMENTS & CERTIFICATIONS ──────────────────── */}
        <section className="border-t border-white/5 px-4 py-20 sm:px-6 lg:px-10">
          <SectionHeader
            label="Milestones"
            title="Achievements & Certifications"
            subtitle="Recognized for algorithmic problem solving, competitive hackathons, and certified SQL & cloud knowledge."
          />

          {/* Achievements */}
          <div className="mb-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PORTFOLIO_DATA.achievements.map((ach) => {
              const Icon = ach.icon;
              return (
                <div
                  key={`${ach.title}-${ach.event}`}
                  className="rounded-3xl border border-white/5 bg-white/[0.02] p-6 transition hover:border-cyan-500/30 hover:bg-white/[0.03]"
                >
                  <span className="mb-4 inline-grid h-11 w-11 place-items-center rounded-2xl bg-cyan-500/20 text-cyan-300">
                    <Icon className="h-5 w-5" />
                  </span>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-cyan-400">
                    {ach.event}
                  </p>
                  <h4 className="mt-1 text-sm font-black text-white">{ach.title}</h4>
                  <p className="mt-2 text-xs leading-relaxed text-white/50">{ach.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Certifications Row */}
          <div className="mx-auto max-w-5xl">
            <h3 className="mb-5 text-center text-xs font-bold uppercase tracking-widest text-white/40">
              Verified Industry Certifications
            </h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {PORTFOLIO_DATA.certifications.map((cert) => {
                const Icon = cert.icon;
                return (
                  <div
                    key={cert.title}
                    className={`flex flex-col justify-between rounded-2xl border p-5 transition hover:scale-[1.02] ${
                      cert.dominant
                        ? "border-cyan-500/30 bg-gradient-to-b from-cyan-950/20 to-transparent"
                        : "border-white/5 bg-white/[0.02]"
                    }`}
                  >
                    <div>
                      <span
                        className={`mb-3 inline-grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br ${cert.color} text-white shadow-md`}
                      >
                        <Icon className="h-4 w-4" />
                      </span>
                      <h4 className="text-xs font-bold text-white leading-snug">{cert.title}</h4>
                    </div>
                    <div className="mt-4 flex items-center justify-between border-t border-white/5 pt-3">
                      <span className="text-[10px] text-cyan-300">{cert.issuer}</span>
                      <span className="text-[10px] text-white/30">{cert.date}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── EDUCATION ──────────────────────────────────────── */}
        <section id="education" className="border-t border-white/5 px-4 py-20 sm:px-6 lg:px-10">
          <SectionHeader
            label="Academics"
            title="Education & Foundations"
            subtitle="Strong computer science, database management, and distributed systems foundation."
          />

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-white/5 bg-white/[0.02] p-7 sm:p-10"
          >
            <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-indigo-600" />

            <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
              <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-cyan-600 via-purple-600 to-violet-800 shadow-xl shadow-cyan-900/40">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <h3 className="text-xl font-black text-white sm:text-2xl">
                    {PORTFOLIO_DATA.education.degree}
                  </h3>
                  <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-bold text-emerald-400">
                    {PORTFOLIO_DATA.education.cgpa}
                  </span>
                </div>
                <p className="mt-1 font-bold text-cyan-400 sm:text-lg">
                  {PORTFOLIO_DATA.education.institution}
                </p>

                <div className="mt-3 flex flex-wrap gap-4 text-xs text-white/50">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5 text-cyan-400" />
                    {PORTFOLIO_DATA.education.timeline}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-rose-400" />
                    {PORTFOLIO_DATA.education.location}
                  </span>
                  <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    {PORTFOLIO_DATA.education.status}
                  </span>
                </div>

                <div className="mt-6 border-t border-white/5 pt-5">
                  <p className="mb-3 text-[11px] font-bold uppercase tracking-widest text-white/30">
                    Core Coursework
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {PORTFOLIO_DATA.education.coursework.map((c) => (
                      <span
                        key={c}
                        className="rounded-lg border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-300"
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

        {/* ── CLIENT & MENTOR ENDORSEMENTS ───────────────────── */}
        <section className="border-t border-white/5 px-4 py-20 sm:px-6 lg:px-10">
          <SectionHeader
            label="Feedback"
            title="Endorsements From Mentors & Reviewers"
            subtitle="Feedback highlighting data pipeline rigor, concurrency protection, and production delivery."
          />

          <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
            {PORTFOLIO_DATA.testimonials.map((t, idx) => (
              <motion.div
                key={t.author}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={idx}
                className="relative flex flex-col justify-between rounded-3xl border border-white/5 bg-white/[0.02] p-7 transition hover:border-cyan-500/30"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 fill-current" />
                      ))}
                    </div>
                    <span className="rounded-full bg-cyan-500/10 px-2.5 py-0.5 text-[10px] font-bold text-cyan-300">
                      {t.badge}
                    </span>
                  </div>
                  <p className="text-xs leading-relaxed italic text-white/70">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>
                <div className="mt-6 border-t border-white/5 pt-4">
                  <p className="text-sm font-bold text-white">{t.author}</p>
                  <p className="text-xs text-cyan-400">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── RESUME DOWNLOAD CTA BANNER ──────────────────────── */}
        <section className="px-4 py-12 sm:px-6 lg:px-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-gradient-to-r from-cyan-900 via-purple-900 to-indigo-950 p-8 text-white shadow-2xl shadow-cyan-950/50 sm:p-12 border border-cyan-500/30"
          >
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-10 -left-10 h-48 w-48 rounded-full bg-purple-700/20 blur-3xl" />

            <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-widest backdrop-blur">
                  <FileText className="h-3.5 w-3.5 text-cyan-300" /> Full Curriculum Vitae
                </p>
                <h3 className="mt-3 text-2xl font-black sm:text-3xl">Looking for my updated CV?</h3>
                <p className="mt-1.5 max-w-lg text-sm text-white/80">
                  Comprehensive PDF featuring 1M+ Aadhaar data analytics, CogniGraph RAG, CedMeet MERN system,
                  verified SQL/AWS certifications, and immediate availability.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={PORTFOLIO_DATA.resumeUrl}
                  download
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-xs font-bold text-slate-900 shadow-xl transition hover:scale-105 hover:bg-cyan-50"
                >
                  <Download className="h-4 w-4 text-cyan-600" /> Download PDF
                </a>
                <a
                  href={PORTFOLIO_DATA.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-5 py-3.5 text-xs font-bold backdrop-blur transition hover:bg-white/20"
                >
                  <Eye className="h-4 w-4" /> Preview
                </a>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ── CONTACT SECTION ────────────────────────────────── */}
        <section id="contact" className="border-t border-white/5 px-4 py-20 sm:px-6 lg:px-10">
          <SectionHeader
            label="Inquiries"
            title="Let&apos;s Build Together"
            subtitle="Open to Data Engineer, Backend Developer, and Full-Stack AI Engineer positions. Immediate Joiner."
          />

          <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-2">
            {/* Direct Contact Cards */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {[
                {
                  key: "email",
                  Icon: Mail,
                  label: "Email Address",
                  value: PORTFOLIO_DATA.email,
                  href: `mailto:${PORTFOLIO_DATA.email}`,
                  copyable: true,
                },
                {
                  key: "phone",
                  Icon: Phone,
                  label: "Phone / WhatsApp",
                  value: PORTFOLIO_DATA.phone,
                  href: PORTFOLIO_DATA.phoneHref,
                  copyable: true,
                },
                {
                  key: "loc",
                  Icon: MapPin,
                  label: "Location",
                  value: PORTFOLIO_DATA.location,
                  href: null,
                  copyable: false,
                },
              ].map(({ key, Icon, label, value, href, copyable }) => (
                <div
                  key={key}
                  className="flex items-center justify-between rounded-2xl border border-white/5 bg-white/[0.02] p-5 transition hover:border-cyan-500/30"
                >
                  <div className="flex items-center gap-4">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-cyan-500/20 text-cyan-300">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-white/30">
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          className="text-xs font-semibold text-white hover:text-cyan-300 transition sm:text-sm"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-xs font-semibold text-white sm:text-sm">{value}</p>
                      )}
                    </div>
                  </div>
                  {copyable && (
                    <button
                      onClick={() => handleCopy(value, key)}
                      className="rounded-lg p-2 text-white/30 hover:bg-white/5 hover:text-cyan-300 transition"
                      aria-label={`Copy ${label}`}
                    >
                      {copiedKey === key ? (
                        <Check className="h-4 w-4 text-emerald-400" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </button>
                  )}
                </div>
              ))}

              <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-5">
                <p className="flex items-center gap-2 text-xs font-bold text-emerald-400">
                  <ShieldCheck className="h-4 w-4" /> Ready for Immediate Onboarding
                </p>
                <p className="mt-1.5 text-xs leading-relaxed text-white/60">
                  Zero notice period. Open to on-site in Delhi NCR / Bangalore / Pune / Hyderabad, hybrid, and
                  remote opportunities.
                </p>
              </div>

              {/* Social Profiles */}
              <div className="flex items-center gap-3 pt-2">
                {[
                  { href: PORTFOLIO_DATA.github, Icon: GithubIcon, label: "GitHub" },
                  { href: PORTFOLIO_DATA.linkedin, Icon: LinkedinIcon, label: "LinkedIn" },
                  { href: PORTFOLIO_DATA.leetcode, Icon: LeetCodeIcon, label: "LeetCode" },
                ].map(({ href, Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 py-3 text-xs font-bold text-white/70 transition hover:border-cyan-500/40 hover:text-cyan-300"
                  >
                    <Icon className="h-4 w-4" /> {label}
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Interactive Contact Form */}
            <motion.form
              onSubmit={handleFormSubmit}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-col gap-4 rounded-3xl border border-white/5 bg-white/[0.02] p-7 sm:p-8"
            >
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-white/40 mb-1.5">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  placeholder="e.g. Hiring Manager"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs text-white placeholder-white/20 outline-none transition focus:border-cyan-500 focus:bg-white/[0.08]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-white/40 mb-1.5">
                  Your Email *
                </label>
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  placeholder="team@company.com"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs text-white placeholder-white/20 outline-none transition focus:border-cyan-500 focus:bg-white/[0.08]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-white/40 mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs text-white placeholder-white/20 outline-none transition focus:border-cyan-500 focus:bg-white/[0.08]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-white/40 mb-1.5">
                  Message *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Discuss a Data Engineer position, project collaboration, or interview schedule..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs text-white placeholder-white/20 outline-none transition focus:border-cyan-500 focus:bg-white/[0.08]"
                />
              </div>

              <button
                type="submit"
                disabled={sendStatus === "sending"}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-600 to-purple-600 py-3 text-xs font-bold text-white shadow-xl shadow-cyan-900/40 transition hover:opacity-90 disabled:opacity-50"
              >
                {sendStatus === "sending" ? (
                  "Sending..."
                ) : sendStatus === "sent" ? (
                  <>
                    <Check className="h-4 w-4 text-emerald-400" /> Message Sent Successfully
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" /> Send Direct Message
                  </>
                )}
              </button>
            </motion.form>
          </div>
        </section>

        {/* ── FOOTER ─────────────────────────────────────────── */}
        <footer className="border-t border-white/5 bg-[#05060f] px-4 py-10 sm:px-6 lg:px-10">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="flex items-center gap-3">
              <div className="grid h-8 w-8 place-items-center rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 text-white font-black text-xs">
                AK
              </div>
              <p className="text-xs font-bold text-white">
                Atul Kumar{" "}
                <span className="text-white/40 font-normal">
                  — Data Engineer & Full-Stack AI Developer
                </span>
              </p>
            </div>

            <p className="text-center text-xs text-white/40">
              Clean Data. Resilient Systems. Scalable Intelligence. © 2026 Atul Kumar.
            </p>

            <a
              href="#top"
              className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition"
            >
              Back to top ↑
            </a>
          </div>
        </footer>
      </div>

      {/* ── Project Detail Modal ─────────────────────────────── */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
}

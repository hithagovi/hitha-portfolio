import { motion } from "framer-motion";
import SectionReveal, { reveal } from "./SectionReveal";

const projects = [
  {
    title: "TEJA - Translation & Transcription Platform (Frontend)",
    category: "Next.js, HTML5, CSS3, Tailwind CSS",
    date: "Feb 2026",
    image: "/projects/teja-project.png",
    link: "https://teja-project-submission.vercel.app/",
    linkLabel: "View Live",
    points: [
      "Developed a responsive frontend interface based on a predefined scalable architecture.",
      "Designed and implemented Career and Authentication pages with structured routing and form validation.",
      "Improved UI/UX with consistent layouts, mobile responsiveness, and deployed the final build on Vercel.",
    ],
  },
  {
    title: "Smart Energy Usage Dashboard",
    category: "Python, XGBoost, LSTM",
    date: "Sep 2025",
    image: "/projects/smart-energy-dashboard.png",
    link: "https://smart-energy-dashboard-yha72skqcgk3qfvtfvj86e.streamlit.app/",
    linkLabel: "View Live App",
    points: [
      "Built a Streamlit dashboard with real-time insights using LSTM and XGBoost on 1,000+ records.",
      "Unified data cleaning, preprocessing, and model outputs into one visualization workflow.",
      "Designed an intuitive interface to understand energy patterns and predictions.",
    ],
  },
  {
    title: "UPI Fraud Detection System",
    category: "Python, XGBoost",
    date: "Jun 2025",
    image: "/projects/upi-fraud-detection.jpeg?v=2",
    link: "https://upi-brown.vercel.app/",
    linkLabel: "View Live",
    points: [
      "Developed a full-stack UPI Fraud Detection dashboard using XGBoost and SMOTE, achieving 93% F1 and ROC-AUC, deployed live on Vercel, Render and MongoDB Atlas.",
      "Built a dual detection pipeline combining instant browser-side heuristics with a backend XGBoost model via FastAPI, processing any transaction CSV with real-time INR fraud analytics.",
      "Implemented an end-to-end ML pipeline with SMOTE, StandardScaler, XGBoost, JWT authentication and persistent fraud alerts using React and MongoDB, fully production deployed.",
    ],
  },
  {
    title: "Fashion Blog",
    category: "HTML5, CSS3, PHP",
    date: "Dec 2024",
    image: "/projects/fashion-blog.png",
    link: "https://github.com/hithagovi/fash.mini",
    linkLabel: "View GitHub",
    points: [
      "Built a responsive fashion blog website with a clean interface.",
      "Implemented secure user input handling and file uploads with size validation.",
      "Added features that improved user engagement and content submission workflow.",
    ],
  },
];

export default function Projects() {
  return (
    <SectionReveal id="projects" className="mx-auto w-full max-w-6xl px-5 pb-6 pt-14 sm:px-8 sm:pb-8 sm:pt-16" stagger>
      <motion.h2
        variants={reveal}
        className="flex items-center gap-3 font-['Playfair_Display'] text-4xl text-[#1A1A1A] sm:text-5xl"
      >
        <svg viewBox="0 0 24 24" className="h-7 w-7 text-[#C9A227]" fill="none" aria-hidden="true">
          <rect x="3.5" y="4.5" width="17" height="15" rx="2.5" stroke="currentColor" strokeWidth="1.7" />
          <path d="M8.5 9.5h7M8.5 13h5" stroke="currentColor" strokeWidth="1.7" />
        </svg>
        Projects
      </motion.h2>
      <div className="mt-8 grid gap-7 md:grid-cols-2">
        {projects.map((project) => (
          <motion.article key={project.title} variants={reveal} className="group">
            <div className="overflow-hidden bg-[#EDEDED]">
              <img
                src={project.image}
                alt={project.title}
                className={`h-64 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] ${
                  project.title === "UPI Fraud Detection System" ? "object-[50%_28%]" : "object-top"
                }`}
                loading="lazy"
              />
            </div>
            <h3 className="mt-4 font-['Playfair_Display'] text-2xl text-[#1A1A1A]">{project.title}</h3>
            <p className="mt-1 text-sm uppercase tracking-[0.15em] text-[#6A6A6A]">{project.category}</p>
            <p className="mt-2 text-xs uppercase tracking-[0.14em] text-[#8A8A8A]">{project.date}</p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-[#3A3A3A]">
              {project.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#1A1A1A] hover:text-[#C9A227]"
            >
              {project.linkLabel}
              <span aria-hidden>-&gt;</span>
            </a>
          </motion.article>
        ))}
      </div>
    </SectionReveal>
  );
}


import { motion } from "framer-motion";
import SectionReveal, { reveal } from "./SectionReveal";

const technicalSkills = [
  "HTML5",
  "CSS3",
  "React",
  "Next.js",
  "Python",
  "Tailwind CSS",
  "PHP",
  "XGBoost",
  "LSTM",
  "Naive Bayes",
  "Tableau",
  "Power BI",
  "Excel",
  "Git",
  "Jupyter",
  "VS Code",
  "Google Colab",
  "Kali Linux",
  "Vulnerability Assessment",
  "Risk Mitigation",
];

const certifications = [
  "GenAI & Data Visualisation - edunet Foundation (Sep 2025)",
  "SQL & Relational Databases - IBM Skills Network (Feb 2025)",
  "Java Training - QSpiders (May 2025 - Aug 2025)",
];

const leadership = [
  "Cyber Craft Hackathon, Coordinator & Volunteer - ACS College of Engineering",
  "Cyber Knight Club, Digital Director - ACS College of Engineering",
];

export default function Skills({ inSplit = false }) {
  const sectionClassName = inSplit
    ? "w-full px-0 pb-6 pt-4"
    : "mx-auto w-full max-w-6xl px-5 pb-6 pt-4 sm:px-8 sm:pb-8 sm:pt-6";

  return (
    <SectionReveal
      id="skills"
      className={sectionClassName}
      stagger
      staggerSpeed={0.06}
      staggerDelay={0.02}
    >
      <motion.h2
        variants={reveal}
        className="flex items-center gap-3 font-['Playfair_Display'] text-4xl text-[#1A1A1A] sm:text-5xl"
      >
        <svg viewBox="0 0 24 24" className="h-7 w-7 text-[#C9A227]" fill="none" aria-hidden="true">
          <path d="M12 3l2.3 3.6 4.2.9-2.8 3 .4 4.2-4.1-1.8-4.1 1.8.4-4.2-2.8-3 4.2-.9L12 3Z" stroke="currentColor" strokeWidth="1.7" />
        </svg>
        Skills
      </motion.h2>
      <div className="mt-8 flex flex-wrap gap-3">
        {technicalSkills.map((skill) => (
          <motion.span
            key={skill}
            variants={reveal}
            className="rounded-full border border-[#D2D2D2] px-4 py-2 text-sm text-[#1A1A1A]"
          >
            {skill}
          </motion.span>
        ))}
      </div>
      <motion.h3 variants={reveal} className="mt-12 font-['Playfair_Display'] text-2xl text-[#1A1A1A] sm:text-3xl">
        Certifications & Training
      </motion.h3>
      <motion.ul variants={reveal} className="mt-4 list-disc space-y-2 pl-5 text-sm text-[#3A3A3A] sm:text-base">
        {certifications.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </motion.ul>
      <motion.h3 variants={reveal} className="mt-12 font-['Playfair_Display'] text-2xl text-[#1A1A1A] sm:text-3xl">
        Leadership & Activities
      </motion.h3>
      <motion.ul variants={reveal} className="mt-4 list-disc space-y-2 pl-5 text-sm text-[#3A3A3A] sm:text-base">
        {leadership.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </motion.ul>
      <motion.p variants={reveal} className="mt-10 text-sm text-[#2F2F2F] sm:text-base">
        Languages: English, Kannada, Hindi
      </motion.p>
    </SectionReveal>
  );
}

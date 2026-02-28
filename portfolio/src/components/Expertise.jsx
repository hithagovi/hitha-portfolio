import { motion } from "framer-motion";
import SectionReveal, { reveal } from "./SectionReveal";

export default function Expertise() {
  return (
    <SectionReveal id="expertise" className="bg-[#111111] py-14 sm:py-16" stagger>
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <motion.h2
          variants={reveal}
          className="flex items-center gap-3 font-['Playfair_Display'] text-4xl text-white sm:text-5xl"
        >
          <svg viewBox="0 0 24 24" className="h-7 w-7 text-[#C9A227]" fill="none" aria-hidden="true">
            <rect x="4" y="7" width="16" height="12" rx="2.5" stroke="currentColor" strokeWidth="1.7" />
            <path d="M9 7V5.5h6V7M4 11h16" stroke="currentColor" strokeWidth="1.7" />
          </svg>
          Experience & Education
        </motion.h2>
        <div className="mt-10 grid items-start gap-5 lg:grid-cols-2">
          <motion.article variants={reveal} className="h-fit border border-white/20 p-6 text-white">
            <p className="text-sm uppercase tracking-[0.18em] text-[#C9A227]">Work Experience</p>
            <h3 className="mt-3 font-['Playfair_Display'] text-2xl">Solvimate, AI & Web Development Intern</h3>
            <p className="mt-2 text-sm text-white/80">Feb 2026 - Present | Remote</p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-white/90">
              <li>Developing an internal web platform to streamline workflows and improve team productivity.</li>
              <li>Building and integrating LLM-based solutions for multilingual translation.</li>
              <li>Working on speech-to-text transcription models to enhance automated content processing.</li>
            </ul>
            <h3 className="mt-3 font-['Playfair_Display'] text-2xl">Elevate Labs, Cyber Security Intern</h3>
            <p className="mt-2 text-sm text-white/80">Aug 2025 - Sep 2025 | Remote</p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-white/90">
              <li>Analysed phishing emails to identify malicious links and social engineering techniques.</li>
              <li>Captured and analysed network traffic using Wireshark to observe anomalies.</li>
              <li>Improved endpoint security through VPN configuration and removal of malicious extensions.</li>
            </ul>
          </motion.article>
          <motion.article variants={reveal} className="border border-white/20 p-6 text-white">
            <p className="text-sm uppercase tracking-[0.18em] text-[#C9A227]">Education</p>
            <h3 className="mt-3 font-['Playfair_Display'] text-2xl">
              B.E. Computer Science - Cyber Security (4th Year)
            </h3>
            <p className="mt-2 text-sm text-white/80">
              ACS College of Engineering (VTU) | Nov 2022 - Apr 2026 | Karnataka, India | CGPA: 8.3/10
            </p>
            <p className="mt-4 text-sm text-white/80">Class 12 (PCMB) | Surana PU College | Jun 2020 - Jul 2022</p>
          </motion.article>
        </div>
      </div>
    </SectionReveal>
  );
}

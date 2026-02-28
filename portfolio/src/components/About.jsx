import { motion } from "framer-motion";
import { useState } from "react";
import SectionReveal, { reveal } from "./SectionReveal";

export default function About() {
  const [isExpanded, setIsExpanded] = useState(false);

  const aboutText =
    "Hi, I'm Hithashree, a Computer Science Engineering student specializing in Cybersecurity, with a strong interest in building secure and scalable applications. I have hands-on experience in frontend development, machine learning, and data analysis, working with technologies like React, Python, and modern web tools. I've developed projects involving real-time data insights, fraud detection, and user-focused web applications. During my internship, I worked on analysing phishing attacks, network traffic monitoring, and improving system security, which strengthened my understanding of real-world cybersecurity practices. I'm passionate about combining development, AI/ML, and security to build efficient, intelligent, and reliable systems, and I'm always eager to learn and take on new challenges.";

  return (
    <SectionReveal id="about" className="mx-auto w-full max-w-6xl px-5 pb-12 pt-6 sm:px-8 sm:pb-14 sm:pt-8">
      <motion.h2
        variants={reveal}
        className="flex items-center gap-3 font-['Playfair_Display'] text-4xl text-[#1A1A1A] sm:text-5xl"
      >
        <svg viewBox="0 0 24 24" className="h-7 w-7 text-[#C9A227]" fill="none" aria-hidden="true">
          <circle cx="12" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.7" />
          <path d="M5 20c1.7-3.1 4-4.7 7-4.7s5.3 1.6 7 4.7" stroke="currentColor" strokeWidth="1.7" />
        </svg>
        About
      </motion.h2>
      <motion.div variants={reveal} className="mt-6 w-full text-base leading-relaxed text-[#2B2B2B] sm:text-lg">
        <p
          className={!isExpanded ? "overflow-hidden" : ""}
          style={
            !isExpanded
              ? {
                  display: "-webkit-box",
                  WebkitLineClamp: 4,
                  WebkitBoxOrient: "vertical",
                }
              : undefined
          }
        >
          {aboutText}
        </p>
        <button
          type="button"
          onClick={() => setIsExpanded((prev) => !prev)}
          className="mt-4 font-medium text-[#1A1A1A] underline underline-offset-4 transition hover:text-[#000000]"
        >
          {isExpanded ? "Read less" : "Read more"}
        </button>
      </motion.div>
    </SectionReveal>
  );
}

import { motion } from "framer-motion";
import SectionReveal, { reveal } from "./SectionReveal";

export default function Contact({ inSplit = false }) {
  const sectionClassName = inSplit
    ? "w-full px-0 pb-10 pt-4 lg:pb-0"
    : "mx-auto w-full max-w-6xl px-5 pb-14 pt-4 sm:px-8 sm:pb-16 sm:pt-6";

  return (
    <SectionReveal id="contact" className={sectionClassName}>
      <div className={inSplit ? "lg:sticky lg:top-28 lg:rounded-3xl lg:border lg:border-[#1A1A1A]/15 lg:bg-[#F8F3E9]/80 lg:p-7" : ""}>
        <motion.h2
          variants={reveal}
          className="flex items-center gap-3 font-['Playfair_Display'] text-4xl text-[#1A1A1A] sm:text-5xl"
        >
          <svg viewBox="0 0 24 24" className="h-7 w-7 text-[#C9A227]" fill="none" aria-hidden="true">
            <rect x="3.5" y="6.5" width="17" height="11" rx="2.2" stroke="currentColor" strokeWidth="1.7" />
            <path d="M4.5 8l7.5 5.5L19.5 8" stroke="currentColor" strokeWidth="1.7" />
          </svg>
          Contact
        </motion.h2>
        <motion.p variants={reveal} className="mt-6 max-w-2xl text-base text-[#2F2F2F] sm:text-lg">
          Reach out for internships, collaborations, and cybersecurity or AI/ML project opportunities.
        </motion.p>
        <motion.div variants={reveal} className="mt-8 grid gap-4 text-sm text-[#1A1A1A] sm:text-base">
          <a className="hover:text-[#C9A227]" href="mailto:hithashree.govi@gmail.com">
            hithashree.govi@gmail.com
          </a>
          <a className="hover:text-[#C9A227]" href="tel:+919880263807">
            +91 9880263807
          </a>
          <div className="inline-flex items-center gap-2 text-[#2F2F2F]">
            <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#C9A227]" fill="none" aria-hidden="true">
              <path
                d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11Z"
                stroke="currentColor"
                strokeWidth="1.7"
              />
              <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.7" />
            </svg>
            Bengaluru, Karnataka
          </div>
          <div className="mt-2 flex items-center gap-3">
            <a
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#1A1A1A] transition-colors hover:border-[#C9A227] hover:text-[#C9A227]"
              href="https://www.linkedin.com/in/hithagovi2405/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 7.03a1.96 1.96 0 1 0 0-3.92 1.96 1.96 0 0 0 0 3.92ZM20.44 13.4c0-3.43-1.83-5.03-4.27-5.03-1.97 0-2.85 1.08-3.34 1.85V8.5H9.45V20h3.38v-5.7c0-1.5.28-2.94 2.13-2.94 1.82 0 1.85 1.7 1.85 3.03V20h3.38v-6.6Z" />
              </svg>
            </a>
            <a
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#1A1A1A] transition-colors hover:border-[#C9A227] hover:text-[#C9A227]"
              href="https://github.com/hithagovi"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              title="GitHub"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.87c-2.78.61-3.37-1.18-3.37-1.18-.46-1.15-1.11-1.45-1.11-1.45-.9-.62.07-.61.07-.61 1 .08 1.52 1.03 1.52 1.03.88 1.52 2.32 1.08 2.89.82.09-.65.35-1.08.63-1.32-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.67-.1-.25-.45-1.29.1-2.68 0 0 .84-.27 2.75 1.02a9.47 9.47 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.39.2 2.43.1 2.68.64.69 1.03 1.58 1.03 2.67 0 3.84-2.34 4.69-4.57 4.94.36.31.67.91.67 1.84v2.73c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </SectionReveal>
  );
}

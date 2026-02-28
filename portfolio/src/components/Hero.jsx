import { motion } from "framer-motion";
import SectionReveal, { reveal } from "./SectionReveal";

export default function Hero() {
  return (
    <SectionReveal className="relative mx-auto w-full max-w-6xl overflow-hidden px-5 pb-8 pt-40 sm:px-8 sm:pb-10 sm:pt-44" id="top">
      <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-12">
        <div>
          <motion.p variants={reveal} className="mb-6 text-sm uppercase tracking-[0.25em] text-[#C9A227]">
            Cyber Security | AI/ML | Data Science
          </motion.p>
          <motion.h1
            variants={reveal}
            className="max-w-5xl font-['Playfair_Display'] text-5xl leading-[1.05] text-[#1A1A1A] sm:text-6xl lg:whitespace-nowrap lg:text-7xl xl:text-8xl"
          >
            Hithashree K
          </motion.h1>
          <motion.p variants={reveal} className="mt-8 max-w-2xl text-base leading-relaxed text-[#3A3A3A] sm:text-lg">
            Developing systems with a strong focus on security and performance.
          </motion.p>
          <motion.div
            variants={reveal}
            className="mt-4 flex max-w-3xl flex-wrap items-center gap-x-2 gap-y-1 text-sm text-[#4A4A4A] sm:text-base"
          >
            <a className="transition-colors hover:text-[#C9A227]" href="mailto:hithashree.govi@gmail.com">
              hithashree.govi@gmail.com
            </a>
            <span className="hidden sm:inline">|</span>
            <a className="transition-colors hover:text-[#C9A227]" href="tel:+919880263807">
              +91 9880263807
            </a>
            <span className="hidden sm:inline">|</span>
            <span>Bengaluru, Karnataka</span>
          </motion.div>
          <motion.div variants={reveal} className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-[#111111] px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-85"
            >
              View Projects
            </a>
            <a
              href="/Hithashree-K-CV.pdf"
              className="rounded-full border border-[#1A1A1A] px-6 py-3 text-sm font-medium text-[#1A1A1A] transition-colors hover:bg-[#1A1A1A] hover:text-white"
              download
            >
              Download CV
            </a>
          </motion.div>
          <motion.div variants={reveal} className="mt-6 flex items-center gap-3">
            <a
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#1A1A1A] text-[#1A1A1A] transition-colors hover:border-[#C9A227] hover:text-[#C9A227]"
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
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#1A1A1A] text-[#1A1A1A] transition-colors hover:border-[#C9A227] hover:text-[#C9A227]"
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
          </motion.div>
        </div>
        <motion.div variants={reveal} className="relative mx-auto w-full max-w-sm lg:mt-2 lg:max-w-md">
          <div className="absolute -left-3 -top-3 h-full w-full rounded-[2rem] border border-[#C9A227]/60" />
          <div className="overflow-hidden rounded-[2rem] border border-[#1A1A1A]/20 bg-[#ECECEC]">
            <img
              src="/profile.jpg"
              alt="Hithashree K portrait"
              className="h-[28rem] w-full object-cover object-top sm:h-[32rem] lg:h-[34rem]"
              loading="eager"
            />
          </div>
        </motion.div>
      </div>
    </SectionReveal>
  );
}

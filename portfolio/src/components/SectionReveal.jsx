import { motion } from "framer-motion";

const reveal = {
  hidden: { opacity: 0, y: 54, scale: 0.985, filter: "blur(5px)" },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.95, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function SectionReveal({
  children,
  className = "",
  as: Tag = "section",
  stagger = false,
  staggerSpeed = 0.14,
  staggerDelay = 0.05,
  id,
}) {
  const MotionTag = motion(Tag);
  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: staggerSpeed, delayChildren: staggerDelay } },
  };
  const sectionClassName = `${id ? "scroll-mt-24 sm:scroll-mt-28" : ""} ${className}`.trim();

  return (
    <MotionTag
      id={id}
      className={sectionClassName}
      variants={stagger ? containerVariants : reveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.32 }}
    >
      {children}
    </MotionTag>
  );
}

export { reveal };

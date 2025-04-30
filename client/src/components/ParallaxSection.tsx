import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxSectionProps {
  children: React.ReactNode;
  className?: string;
}

export default function ParallaxSection({ children, className = "" }: ParallaxSectionProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 1, 0.6]);
  
  return (
    <motion.section
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      style={{ opacity }}
    >
      <motion.div style={{ y }} className="relative z-10">
        {children}
      </motion.div>
    </motion.section>
  );
}

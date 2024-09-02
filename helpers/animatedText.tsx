"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const textVariants = {
  initial: {
    opacity: 0,
    y: 30,
    scale: 0.5,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const AnimatedText: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.8, margin:"10%" });
  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      variants={textVariants}
    >
      {children}
    </motion.div>
  );
};
export default AnimatedText;

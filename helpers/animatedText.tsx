"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

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
  const isMobile = useMediaQuery({ maxWidth: 767.98 });
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.8,
    margin: isMobile ? "30%" : "10%",
  });
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

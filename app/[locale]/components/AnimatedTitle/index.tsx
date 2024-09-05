"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./animatedTitle.module.scss";
import { AnimatedTitleProps } from "@/helpers/interfaces";

const AnimatedTitle: React.FC<AnimatedTitleProps> = ({
  title,
  className = "",
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const titleLetters = title.split("");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.h2
      ref={ref}
      className={`${styles.title} ${className || ""}`}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {titleLetters.map((letter, index) => (
        <motion.span key={index} variants={letterVariants}>
          {letter}
        </motion.span>
      ))}
    </motion.h2>
  );
};

export default AnimatedTitle;

"use client";

import { useEffect } from "react";
import MainButton from "../Buttons/MainButton";
import styles from "./heroTitle.module.scss";
import { motion, useAnimation } from "framer-motion";

interface IHeroTitleProps {
  title: string;
  description: string;
  button: string;
}

const HeroTitle: React.FC<{ t: IHeroTitleProps }> = ({ t }) => {
  const controlsContainer = useAnimation();
  const controlsTitle = useAnimation();
  const controlsDescriptions = useAnimation();

  const containerVariants = {
    hidden: {
      opacity: 0,
      y: "-100%",
      transition: {
        when: "afterChildren",
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3,
        duration: 1,
        when: "beforeChildren",
      },
    },
  };

  const titleVariants = {
    hidden: {
      x: "-200%",
    },
    visible: {
      x: 0,
      transition: {
        delay: 0.3,
        duration: 1,
      },
    },
  };

  const otherVariants = {
    hidden: {
      opacity: 0,
      y: -40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  useEffect(() => {
    const sequence = async () => {
      await controlsContainer.start("visible");
      await controlsTitle.start("visible");
      await controlsDescriptions.start("visible");
    };
    sequence();
  }, [controlsContainer, controlsTitle, controlsDescriptions]);

  return (
    <div className={styles.text_сontainer}>
      <motion.div
        initial="hidden"
        animate={controlsContainer}
        variants={containerVariants}
        className={styles.title_сontainer}
      >
        <motion.h1
          initial="hidden"
          animate={controlsTitle}
          variants={titleVariants}
          className={styles.title}
        >
          {t.title}
        </motion.h1>
      </motion.div>
      <motion.div
        initial="hidden"
        animate={controlsDescriptions}
        variants={otherVariants}
        className={styles.descriptions_wrapper}
      >
        <p className={styles.descriptions}>{t.description}</p>
        <MainButton className="filled">{t.button}</MainButton>
      </motion.div>
    </div>
  );
};
export default HeroTitle;

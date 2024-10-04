"use client";

import { useEffect, useRef } from "react";
import MainButton from "../Buttons/MainButton";
import styles from "./heroTitle.module.scss";
import { motion, useAnimation } from "framer-motion";
import { Link, usePathname } from "@/navigation";

interface IHeroTitleProps {
  title: string;
  description?: string;
  button?: string;
}

const HeroTitle: React.FC<{ t: IHeroTitleProps }> = ({ t }) => {
  const controlsContainer = useAnimation();
  const controlsTitle = useAnimation();
  const controlsDescriptions = useAnimation();
  const isMounted = useRef(true);
  const path = usePathname();

  let currentHref = "";

  switch (path) {
    case "/":
      currentHref = "/projects";
      break;

    default:
      currentHref = "/contacts/#form";
      break;
  }

  const containerVariants = {
    hidden: {
      opacity: 0,
      y: "-200%",
      transition: {
        when: "afterChildren",
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1,
        duration: 0.5,
        when: "beforeChildren",
      },
    },
  };

  const titleVariants = {
    hidden: {
      x: "-100%",
    },
    visible: {
      x: 0,
      transition: {
        duration: 0.5,
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
    isMounted.current = true;

    const sequence = async () => {
      if (isMounted.current) await controlsContainer.start("visible");
      if (isMounted.current) await controlsTitle.start("visible");
      if (isMounted.current) await controlsDescriptions.start("visible");
    };
    sequence();

    return () => {
      isMounted.current = false;
    };
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
        {t.button && (
          <MainButton className="filled">
            <Link href={currentHref}>{t.button}</Link>
          </MainButton>
        )}
      </motion.div>
    </div>
  );
};
export default HeroTitle;

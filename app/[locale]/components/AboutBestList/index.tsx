"use client";

import { ArrowRightAboutIcon } from "@/helpers/imagesImport";
import { AnimatePresence, motion } from "framer-motion";
import { useCarouselAboutStore } from "@/stores/carousel-about-store";
import styles from "./aboutBestList.module.scss";

interface IProps {
  [key: number]: { title: string; description: string };
}

const AboutBestList: React.FC<{ list: IProps }> = ({ list }) => {
  const aboutBest = Object.entries(list);
  const { keyImagesAbout, update } = useCarouselAboutStore();

  const handleClick = (key: number) => {
    const currentKey = {
      id: key,
    };
    update(currentKey);
  };

  return (
    <ul className={styles.list}>
      {aboutBest.map(([key, value], index) => {
        const isActive = index === keyImagesAbout.id - 1;
        return (
          <li
            key={key}
            className={`${styles.item} ${isActive ? styles.active : ""}`}
            onClick={() => handleClick(Number(key))}
          >
            <div className={styles.svg_container}>
              <ArrowRightAboutIcon className={styles.svg} />
            </div>
            <p className={styles.content_container}>
              <span className={styles.title}>{value.title}</span>
              <AnimatePresence initial={false}>
                {isActive && (
                  <motion.span
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: [0, 100],
                      opacity: [0, 0, 1],
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                    }}
                    transition={{ duration: 0.5 }}
                    className={styles.content}
                  >
                    {value.description}
                  </motion.span>
                )}
              </AnimatePresence>
            </p>
          </li>
        );
      })}
    </ul>
  );
};

export default AboutBestList;

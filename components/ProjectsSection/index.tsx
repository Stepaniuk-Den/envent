"use client";

import Link from "next/link";
import styles from "./projectSection.module.scss";
import { projects } from "@/data/Projects";
import { AnimatePresence, motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import MainButton from "../Buttons";
import { useState } from "react";
import LinkIcon from "../../public/icons/link.svg";
import MagnifyingGlass from "../../public/icons/magnifying-glass.svg";
import ArrowLeft from "../../public/icons/arrow-left.svg";
import ArrowRight from "../../public/icons/arrow-right.svg";
import Close from "../../public/icons/close.svg";
import Line from "../Line/index";
import { IPropsProjectItem } from "@/helpers/interfaces";
import BackdropButton from "../Buttons/BackdropButton";

// interface IPropsProjectList {
//   projectList: IPropsProjectItem[];
// }

const ProjectSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [isHovered, setHovered] = useState(false);

  const handleOpenBackdrop = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };
  const handleCloseBackdrop = () => {
    setIsOpen(false);
    setCurrentIndex(null);
  };

  const handleNext = () => {
    if (currentIndex !== null) {
      setCurrentIndex((prevIndex) => (prevIndex! + 1) % projects.length);
    }
  };
  const handlePrev = () => {
    if (currentIndex !== null) {
      setCurrentIndex((prevIndex) =>
        prevIndex! === 0 ? projects.length - 1 : prevIndex! - 1
      );
    }
  };

  return (
    <section className={styles.projectSection}>
      <div className={`${styles.projectContainer} container`}>
        <h2 className={styles.sectionTitle}>Recent projects</h2>
        <Line className="yellow-center" />
        <ul className={styles.projectList}>
          {projects.map((project: IPropsProjectItem, index) => (
            <li className={styles.projectItem} key={project.id}>
              <Image
                className={styles.projectImg}
                src={project.src}
                alt={project.alt}
                style={{ width: "100%", height: "100%" }}
              />

              <div className={styles.overlayContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <div className={styles.projectLinksWrapper}>
                  <Link
                    className={styles.linkProject}
                    href={`/projects/${project.id}`}
                  >
                    <LinkIcon className={styles.linkIcon} />
                  </Link>
                  {/* <motion.button
                    onHoverStart={() => setHovered(true)}
                    onHoverEnd={() => setHovered(false)}
                    initial={{ y: 0 }}
                    whileHover={{
                      y: -10,
                      backgroundColor: "#fff",
                      transition: { duration: 0.3 },
                    }}
                    animate={{
                      y: isHovered ? 0 : 30,
                      opacity: isHovered ? 1 : 0,
                      transition: { duration: 0.3 },
                    }}
                    className={styles.magnifyingGlassBtn}
                    onClick={() => handleOpenBackdrop(index)}
                  >
                    <motion.span
                      whileHover={{
                        color: "#000",
                        transition: { duration: 0.3 },
                      }}
                    > */}
                  <button
                    className={styles.magnifyingGlassBtn}
                    type="button"
                    onClick={() => handleOpenBackdrop(index)}
                  >
                    <MagnifyingGlass className={styles.magnifyingGlassIcon} />
                  </button>
                  {/* </motion.span>
                  </motion.button> */}
                </div>
              </div>
            </li>
          ))}
        </ul>
        <Link className={styles.viewAllBtnLink} href="/projects">
          <MainButton color="black">View all</MainButton>
        </Link>

        {/* ==== BACKDROP ==== */}
        <AnimatePresence mode="wait">
          {isOpen && currentIndex !== null && (
            <motion.div
              className={styles.backdrop}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseBackdrop}
            >
              <motion.div
                className={styles.modalContent}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ delay: isOpen ? 0.2 : 0, duration: 0.3 }}
                onAnimationComplete={() => {
                  if (!isOpen) handleCloseBackdrop();
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <BackdropButton
                  className={styles.closeButton}
                  onClick={handleCloseBackdrop}
                  type="button"
                  aria-label="Close"
                >
                  <Close className={styles.closeSVG} />
                </BackdropButton>
                <BackdropButton
                  className={styles.prevButton}
                  onClick={handlePrev}
                  type="button"
                  aria-label="Swipe to previous"
                >
                  <ArrowLeft className={styles.ArrowLeftSVG} />
                </BackdropButton>

                <Image
                  src={projects[currentIndex].src}
                  alt={projects[currentIndex].alt}
                  style={{ width: "100%", height: "100%" }}
                />

                <BackdropButton
                  className={styles.nextButton}
                  onClick={handleNext}
                  type="button"
                  aria-label="Swipe to next"
                >
                  <ArrowRight className={styles.ArrowRightSVG} />
                </BackdropButton>
                <p className={styles.counter}>
                  {currentIndex + 1} of {projects.length}
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
export default ProjectSection;

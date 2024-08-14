"use client";
import Link from "next/link";
import styles from "./projectSection.module.scss";
import { projects } from "@/data/Projects";
import { AnimatePresence, motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import MainButton from "../Buttons";
import { useState } from "react";
import arrowLeft from "../../public/arrow-left.svg";
import arrowRight from "../../public/arrow-right.svg";
import close from "../../public/close.svg";

interface IPropsProjectItem {
  id: number;
  src: StaticImageData;
  alt: string;
  title: string;
  address: string;
  link: string;
}

interface IPropsProjectList {
  projectList: IPropsProjectItem[];
}

interface IIndex {
  index: number;
}

const ProjectSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

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
        <ul className={styles.projectList}>
          {projects.map((project: IPropsProjectItem, index) => (
            <li className={styles.projectItem} key={project.id}>
              <Image
                className={styles.projectImg}
                src={project.src}
                alt={project.alt}
                // width={260}
                // height={166}
                style={{ width: "100%", height: "100%" }}
              />

              <div className={styles.overlayContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <div className={styles.projectLinksWrapper}>
                  <Link href={`/project/${project.id}`}>icon</Link>
                  <button
                    // href="#"
                    // target="_blank"
                    // rel="noopener noreferrer nofollow"
                    onClick={() => handleOpenBackdrop(index)}
                  >
                    icon search
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <Link className={styles.viewAllBtnLink} href="/projects">
          <MainButton>View all</MainButton>
        </Link>

        {/* === SCALED PROJECT IMAGE ===*/}
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
                <button
                  className={styles.closeButton}
                  onClick={handleCloseBackdrop}
                >
                  <Image src={close} alt="Close" />
                </button>
                <button className={styles.prevButton} onClick={handlePrev}>
                  <Image src={arrowLeft} alt="Swipe to previous" />
                </button>
                <div className="scaledImgWrapper">
                  <Image
                    src={projects[currentIndex].src}
                    alt={projects[currentIndex].alt}
                    // width={800}
                    // height={500}
                    style={{ width: "100%", height: "auto" }}
                    // style={{ objectFit: "cover" }}
                  />
                </div>
                <button className={styles.nextButton} onClick={handleNext}>
                  <Image src={arrowRight} alt="Swipe to next" />
                </button>
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

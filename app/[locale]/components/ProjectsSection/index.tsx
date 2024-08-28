"use client";

import styles from "./projectSection.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import MainButton from "../Buttons/MainButton";
import { useEffect, useState } from "react";
import ArrowLeft from "@/public/icons/arrow-left.svg";
import ArrowRight from "@/public/icons/arrow-right.svg";
import Close from "@/public/icons/close.svg";
import BackdropButton from "../Buttons/BackdropButton";
import { Link, MainPageT } from "@/navigation";
import { useRouter } from "next/navigation";
import { handleNext, handlePrev } from "@/helpers/useClickPrevAndNext";
import ProjectItem from "../ProjectItem";
import AnimatedTitle from "../AnimatedTitle";

// interface IPropsProjectList {
//   projectList: IPropsProjectItem[];
// }

const ProjectSection: React.FC<{
  t: MainPageT["projects"];
}> = ({ t }) => {
  //= ({ t }: IProjectsProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  // const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const projectsList = Object.values(t.list);
  // const [isHovered, setHovered] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (isOpen) {
      // document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      // document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleOpenBackdrop = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };
  const handleCloseBackdrop = () => {
    setIsOpen(false);
    // setCurrentIndex(null);
  };

  // const handleNext = () => {
  //   if (currentIndex !== null) {
  //     setCurrentIndex((prevIndex) => (prevIndex! + 1) % projectsList.length);
  //   }
  // };
  // const handlePrev = () => {
  //   if (currentIndex !== null) {
  //     setCurrentIndex((prevIndex) =>
  //       prevIndex! === 0 ? projectsList.length - 1 : prevIndex! - 1
  //     );
  //   }
  // };

  return (
    <section className={styles.projectSection}>
      <div className={`${styles.projectContainer} container`}>
        <AnimatedTitle title={t.title} className={styles.sectionTitle} />
        {/* <Line className="yellow-center" /> */}
        <div className={styles.line}></div>
        <ul className={styles.projectList}>
          {/* {projectsList.map((project: IPropsProjectItem, index) => ( */}
          {/* {Object.keys(projectsList).map((key) => { */}
          {projectsList.map((projectItem, index) => {
            // const projectItem = projectsList[Number(key)];
            // const imgSrc = projects.find(
            //   (project) => project.title === projectItem.src
            // );
            return (
              <ProjectItem
                key={projectItem.id}
                {...projectItem}
                onClick={() => handleOpenBackdrop(index)}
              />

              // ))}
            );
          })}
        </ul>
        {/* <Link className={styles.viewAllBtnLink} href="/projects"> */}
        <MainButton
          type="button"
          color="black"
          // onClick={() => router.push("/projects")}
          className="btnProjectsLink"
        >
          <Link className={styles.viewAllBtnLink} href="/projects">
            {t.viewAll}
          </Link>
        </MainButton>
        {/* </Link> */}

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
                  // onClick={handlePrev}
                  onClick={() =>
                    handlePrev({
                      currentIndex,
                      setCurrentIndex,
                      array: projectsList,
                    })
                  }
                  type="button"
                  aria-label="Swipe to previous"
                >
                  <ArrowLeft className={styles.ArrowLeftSVG} />
                </BackdropButton>

                <Image
                  src={projectsList[currentIndex].src}
                  alt={projectsList[currentIndex].alt}
                  fill={true}
                  sizes="(max-width: 767.98px) 460px, (max-width: 1023.98px) 660px, 800px"
                />

                <BackdropButton
                  className={styles.nextButton}
                  // onClick={handleNext}
                  onClick={() =>
                    handleNext({
                      currentIndex,
                      setCurrentIndex,
                      array: projectsList,
                    })
                  }
                  type="button"
                  aria-label="Swipe to next"
                >
                  <ArrowRight className={styles.ArrowRightSVG} />
                </BackdropButton>
                <p className={styles.counter}>
                  {currentIndex + 1} of {projectsList.length}
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

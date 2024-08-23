"use client";

import Link from "next/link";
import styles from "./projectSection.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import MainButton from "../Buttons/MainButton";
import { useEffect, useState } from "react";
import LinkIcon from "@/public/icons/link.svg";
import MagnifyingGlass from "@/public/icons/magnifying-glass.svg";
import ArrowLeft from "@/public/icons/arrow-left.svg";
import ArrowRight from "@/public/icons/arrow-right.svg";
import Close from "@/public/icons/close.svg";
import Line from "../Line/index";
import BackdropButton from "../Buttons/BackdropButton";
import { MainPageT } from "@/messages/types/MainPageT";
import { useRouter } from "next/navigation";
import { handleNext, handlePrev } from "@/helpers/useClickPrevAndNext";

// interface IPropsProjectList {
//   projectList: IPropsProjectItem[];
// }

const ProjectSection: React.FC<{
  t: MainPageT["projects"];
}> = ({ t }) => {
  //= ({ t }: IProjectsProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const projectsList = Object.values(t.list);
  // const [isHovered, setHovered] = useState(false);
  const router = useRouter();

  const handleOpenBackdrop = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };
  const handleCloseBackdrop = () => {
    setIsOpen(false);
    setCurrentIndex(null);
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
        <h2 className={styles.sectionTitle}>{t.title}</h2>
        <Line className="yellow-center" />
        <ul className={styles.projectList}>
          {/* {projectsList.map((project: IPropsProjectItem, index) => ( */}
          {/* {Object.keys(projectsList).map((key) => { */}
          {projectsList.map((projectItem, index) => {
            // const projectItem = projectsList[Number(key)];
            // const imgSrc = projects.find(
            //   (project) => project.title === projectItem.src
            // );
            return (
              <li className={styles.projectItem} key={index}>
                {/* {imgSrc && ( */}
                <Image
                  className={styles.projectImg}
                  // src={imgSrc.src}
                  src={projectItem.src}
                  alt={projectItem.alt}
                  fill={true}
                  // width={344}
                  // height={230}
                  // style={{ width: "100%", height: "100%" }}
                />
                {/* )} */}

                <div className={styles.overlayContent}>
                  <h3 className={styles.projectTitle}>{projectItem.title}</h3>
                  <div className={styles.projectLinksWrapper}>
                    <Link
                      className={styles.linkProject}
                      href={`/projects/${projectItem.id}`}
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
                    >  */}

                    <button
                      className={styles.magnifyingGlassBtn}
                      type="button"
                      // onClick={() => handleOpenBackdrop(Number(key))}
                      onClick={() => handleOpenBackdrop(index)}
                    >
                      <MagnifyingGlass className={styles.magnifyingGlassIcon} />
                    </button>
                    {/* </motion.span>
                  </motion.button>  */}
                  </div>
                </div>
              </li>
              // ))}
            );
          })}
        </ul>
        {/* <Link className={styles.viewAllBtnLink} href="/projects"> */}
        <MainButton
          type="button"
          color="black"
          onClick={() => router.push("/projects")}
          className="btnProjectsLink"
        >
          {t.viewAll}
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
                  // width={800}
                  // height={500}
                  // style={{ width: "100%", height: "100%" }}
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

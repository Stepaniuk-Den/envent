"use client";

import styles from "./projectSection.module.scss";
import MainButton from "../Buttons/MainButton";
import { useState } from "react";
import { Link } from "@/navigation";
import AnimatedTitle from "../AnimatedTitle";
import { MainPageT } from "@/messages/types/MainPageT";
import ProjectItem from "../ProjectItem";
import { ProjectsPageT } from "@/messages/types/ProjectsPageT";
import Line from "../Line";
import { ProjectItems } from "@/data/ProjectItems";
import { useModal } from "@/helpers/useModal";
import { handleOpenBackdrop } from "@/helpers/handleOpenAndCloseBackdrop";
import Backdrop from "../Backdrop";

// interface IPropsProjectList {
//   projectList: IPropsProjectItem[];
// }

// type ProjectWithBase64 = IPropsProjectItem & { base64: string };
// type ProjectWithBase64 = ProjectsPageT["projects"] & { base64: string };

const ProjectSection: React.FC<{
  t: MainPageT["projects"];
  t2: ProjectsPageT["projects"];
  className?: string;
  ariaLabel: string;

  // t2: ProjectWithBase64[];
}> = ({ t, t2, className = "", ariaLabel }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const projectsList = t2 ? Object.values(t2) : [];
  // const projectsList = t2 ? t2 : [];
  // const projectsList = t2 || []; ------
  const recentProjectsList = projectsList
    .sort((a, b) => Number(b.id) - Number(a.id))
    .slice(0, 6);

  const recentProjectsListMainImgs = recentProjectsList
    .map((project) => project.mainImg)
    .filter((img): img is string => !!img);

  const recentImgAlt = recentProjectsList
    .map((project) => project.mainAlt)
    .filter((alt) => alt);

  useModal(isOpen, setIsOpen);

  // ===================================================
  // const handleOpenBackdrop = (index: number) => {
  //   setCurrentIndex(index);
  //   setIsOpen(true);
  // };
  // const handleCloseBackdrop = () => {
  //   setIsOpen(false);
  //   // setCurrentIndex(null);
  // };
  // =====================================================

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
    <section className={`${styles.projectSection} ${styles[className]}`}>
      <div className={`${styles.projectContainer} container`}>
        <AnimatedTitle title={t.title} className={styles.sectionTitle} />
        <Line className="yellow-center" />
        <ul className={styles.projectList}>
          {/* {projectsList.map((project: IPropsProjectItem, index) => ( */}
          {/* {Object.keys(projectsList).map((key) => { */}
          {recentProjectsList.map((projectItem, index) => {
            // const projectItem = projectsList[Number(key)];
            // const imgSrc = projects.find(
            //   (project) => project.title === projectItem.src
            // );
            const imgName = projectItem.mainImg.split("/").pop()?.split(".")[0];
            const currentImg = [...ProjectItems].find(
              (item) => item.name === imgName
            );
            if (!currentImg) return;
            return (
              <ProjectItem
                key={projectItem.id}
                // {...projectItem}
                t={projectItem}
                ariaLabel={ariaLabel}
                currentImg={currentImg.srcImg}
                // base64={projectItem.base64}
                onClick={() =>
                  handleOpenBackdrop(index, setCurrentIndex, setIsOpen)
                }
              />
              // ))}
            );
          })}
        </ul>
        <MainButton type="button" color="black" className="btnProjectsLink">
          <Link className={styles.viewAllBtnLink} href="/projects">
            {t.viewAll}
          </Link>
        </MainButton>

        {/* ========BACKDROP======== */}
        <Backdrop
          imgList={recentProjectsListMainImgs}
          imgAlt={recentImgAlt}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          // alt="..."
        />
      </div>
    </section>
  );
};
export default ProjectSection;

// ================
// ==== BACKDROP ====
//  <AnimatePresence mode="wait">
//     {isOpen && currentIndex !== null && (
//       <motion.div
//         className={`${styles.backdrop} overlay`}
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         onClick={() => handleCloseBackdrop(setIsOpen)}
//       >
//         <motion.div
//           className={styles.modalContent}
//           initial={{ scale: 0.8, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           exit={{ scale: 0.8, opacity: 0 }}
//           transition={{ delay: isOpen ? 0.2 : 0, duration: 0.3 }}
//           onAnimationComplete={() => {
//             if (!isOpen) handleCloseBackdrop(setIsOpen);
//           }}
//           onClick={(e) => e.stopPropagation()}
//         >
//           <BackdropButton
//             className={styles.closeButton}
//             onClick={() => handleCloseBackdrop(setIsOpen)}
//             type="button"
//             aria-label="Close"
//           >
//             <Close className={styles.closeSVG} />
//           </BackdropButton>
//           <BackdropButton
//             className={styles.prevButton}
//             // onClick={handlePrev}
//             onClick={() =>
//               handlePrev({
//                 currentIndex,
//                 setCurrentIndex,
//                 array: recentProjectsList,
//               })
//             }
//             type="button"
//             aria-label="Swipe to previous"
//           >
//             <ArrowLeft className={styles.ArrowLeftSVG} />
//           </BackdropButton>

//           <Image
//             className={styles.images}
//             src={recentProjectsList[currentIndex].mainImg}
//             alt={recentProjectsList[currentIndex].mainAlt}
//             fill={true}
//             sizes="(max-width: 767.98px) 460px, (max-width: 1023.98px) 660px, 800px"
//           />

//           <BackdropButton
//             className={styles.nextButton}
//             // onClick={handleNext}
//             onClick={() =>
//               handleNext({
//                 currentIndex,
//                 setCurrentIndex,
//                 array: recentProjectsList,
//               })
//             }
//             type="button"
//             aria-label="Swipe to next"
//           >
//             <ArrowRight className={styles.ArrowRightSVG} />
//           </BackdropButton>
//           <p className={styles.counter}>
//             {currentIndex + 1} of {recentProjectsList.length}
//           </p>
//         </motion.div>
//       </motion.div>
//     )}
//   </AnimatePresence>

// ================================================================

// // "use client";

// import styles from "./projectSection.module.scss";
// // import { AnimatePresence, motion } from "framer-motion";
// // import Image from "next/image";
// import MainButton from "../Buttons/MainButton";
// // import { useEffect, useState } from "react";
// // import ArrowLeft from "@/public/icons/arrow-left.svg";
// // import ArrowRight from "@/public/icons/arrow-right.svg";
// // import Close from "@/public/icons/close.svg";
// // import BackdropButton from "../Buttons/BackdropButton";
// import { Link } from "@/navigation";
// // import { useRouter } from "next/navigation";
// // import { handleNext, handlePrev } from "@/helpers/useClickPrevAndNext";
// import AnimatedTitle from "../AnimatedTitle";
// import { MainPageT } from "@/messages/types/MainPageT";
// import ProjectItem from "../ProjectItem";
// import { ProjectsPageT } from "@/messages/types/ProjectsPageT";
// import Line from "../Line";

// // interface IPropsProjectList {
// //   projectList: IPropsProjectItem[];
// // }

// const ProjectSection: React.FC<{
//   t: MainPageT["projects"];
//   t2: ProjectsPageT["projects"];
// }> = ({ t, t2 }) => {
//   //= ({ t }: IProjectsProps) => {
//   // =======================================
//   // const [isOpen, setIsOpen] = useState(false);
//   // const [currentIndex, setCurrentIndex] = useState<number>(0);
//   // =======================================

//   const projectsList = t2 ? Object.values(t2) : [];
//   const recentProjectsList = projectsList
//     // const [currentIndex, setCurrentIndex] = useState<number | null>(null);
//     // const [isHovered, setHovered] = useState(false);
//     // const router = useRouter();

//     .sort((a, b) => Number(b.id) - Number(a.id))
//     .slice(0, 6);

//   // ===================================================
//   // useEffect(() => {
//   //   if (isOpen) {
//   //     // document.body.style.overflow = "hidden";
//   //     document.documentElement.style.overflow = "hidden";
//   //   } else {
//   //     // document.body.style.overflow = "auto";
//   //     document.documentElement.style.overflow = "auto";
//   //   }

//   //   const handleKeyDown = (e: KeyboardEvent) => {
//   //     if (e.code === "Escape") {
//   //       setIsOpen(false);
//   //     }
//   //   };
//   //   window.addEventListener("keydown", handleKeyDown);
//   //   return () => {
//   //     window.removeEventListener("keydown", handleKeyDown);
//   //     document.body.style.overflow = "auto";
//   //     document.documentElement.style.overflow = "auto";
//   //   };
//   // }, [isOpen]);

//   // const handleOpenBackdrop = (index: number) => {
//   //   setCurrentIndex(index);
//   //   setIsOpen(true);
//   // };
//   // const handleCloseBackdrop = () => {
//   //   setIsOpen(false);
//   // setCurrentIndex(null);
//   // };
//   // =================================================================

//   // const handleNext = () => {
//   //   if (currentIndex !== null) {
//   //     setCurrentIndex((prevIndex) => (prevIndex! + 1) % projectsList.length);
//   //   }
//   // };
//   // const handlePrev = () => {
//   //   if (currentIndex !== null) {
//   //     setCurrentIndex((prevIndex) =>
//   //       prevIndex! === 0 ? projectsList.length - 1 : prevIndex! - 1
//   //     );
//   //   }
//   // };

//   return (
//     <section className={styles.projectSection}>
//       <div className={`${styles.projectContainer} container`}>
//         <AnimatedTitle title={t.title} className={styles.sectionTitle} />
//         {/* ------------------------------------ */}
//         <Line className="yellow-center" />
//         <ul className={styles.projectList}>
//           {/* {projectsList.map((project: IPropsProjectItem, index) => ( */}
//           {/* {Object.keys(projectsList).map((key) => { */}
//           {recentProjectsList.map((projectItem, index) => {
//             // const projectItem = projectsList[Number(key)];
//             // const imgSrc = projects.find(
//             //   (project) => project.title === projectItem.src
//             // );
//             return (
//               <ProjectItem
//                 key={projectItem.id}
//                 // {...projectItem}
//                 t={projectItem}
//                 // onClick={() => handleOpenBackdrop(index)}
//               />

//               // ))}
//             );
//           })}
//         </ul>
//         {/* <Link className={styles.viewAllBtnLink} href="/projects"> */}
//         <MainButton
//           type="button"
//           color="black"
//           // onClick={() => router.push("/projects")}
//           className="btnProjectsLink"
//         >
//           <Link className={styles.viewAllBtnLink} href="/projects">
//             {t.viewAll}
//           </Link>
//         </MainButton>
//         {/* </Link> */}

//         {/* ==== BACKDROP ==== */}
//         {/* <AnimatePresence mode="wait">
//           {isOpen && currentIndex !== null && (
//             <motion.div
//               className={styles.backdrop}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={handleCloseBackdrop}
//             >
//               <motion.div
//                 className={styles.modalContent}
//                 initial={{ scale: 0.8, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 exit={{ scale: 0.8, opacity: 0 }}
//                 transition={{ delay: isOpen ? 0.2 : 0, duration: 0.3 }}
//                 onAnimationComplete={() => {
//                   if (!isOpen) handleCloseBackdrop();
//                 }}
//                 onClick={(e) => e.stopPropagation()}
//               >
//                 <BackdropButton
//                   className={styles.closeButton}
//                   onClick={handleCloseBackdrop}
//                   type="button"
//                   aria-label="Close"
//                 >
//                   <Close className={styles.closeSVG} />
//                 </BackdropButton>
//                 <BackdropButton
//                   className={styles.prevButton}
//                   // onClick={handlePrev}
//                   onClick={() =>
//                     handlePrev({
//                       currentIndex,
//                       setCurrentIndex,
//                       array: recentProjectsList,
//                     })
//                   }
//                   type="button"
//                   aria-label="Swipe to previous"
//                 >
//                   <ArrowLeft className={styles.ArrowLeftSVG} />
//                 </BackdropButton>

//                 <Image
//                   src={recentProjectsList[currentIndex].mainImg}
//                   alt={recentProjectsList[currentIndex].mainAlt}
//                   fill={true}
//                   sizes="(max-width: 767.98px) 460px, (max-width: 1023.98px) 660px, 800px"
//                 />

//                 <BackdropButton
//                   className={styles.nextButton}
//                   // onClick={handleNext}
//                   onClick={() =>
//                     handleNext({
//                       currentIndex,
//                       setCurrentIndex,
//                       array: recentProjectsList,
//                     })
//                   }
//                   type="button"
//                   aria-label="Swipe to next"
//                 >
//                   <ArrowRight className={styles.ArrowRightSVG} />
//                 </BackdropButton>
//                 <p className={styles.counter}>
//                   {currentIndex + 1} of {recentProjectsList.length}
//                 </p>
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence> */}
//       </div>
//     </section>
//   );
// };
// export default ProjectSection;

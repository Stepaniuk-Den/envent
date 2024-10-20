"use client";

import { IAriaLabelProps, IPropsProjectItem } from "@/helpers/interfaces";
import { ProjectItems } from "@/data/ProjectItems";
import ProjectItem from "../ProjectItem";
import styles from "./categoryProjectsList.module.scss";
import Backdrop from "../Backdrop";
import { useState } from "react";
import { useModal } from "@/helpers/useModal";
import { handleOpenBackdrop } from "@/helpers/handleOpenAndCloseBackdrop";

const CaregoryProjectsList: React.FC<{
  //   t: ProjectsPageT;
  filteredProjects: IPropsProjectItem[];
  ariaLabel: string;
}> = ({ filteredProjects, ariaLabel }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const filteredProjectsMainImgs = filteredProjects
    .map((project) => project.mainImg)
    .filter((img): img is string => !!img);

  const filteredProjectsMainAlt = filteredProjects
    .map((project) => project.mainAlt)
    .filter((alt): alt is string => !!alt);

  useModal(isOpen, setIsOpen);

  return (
    <>
      <ul className={styles.projectList}>
        {/* {filteredProjects.map((projectItem) => ( */}
        {/* {projectsWithBase64.map(
        (projectItem) => ( */}
        {filteredProjects.map((projectItem, index) => {
          // const mainImgPath = `${process.cwd()}/public${projectItem.mainImg}`;
          // const base64 = await getBase64FromImage(mainImgPath);
          const imgName = projectItem.mainImg?.split("/").pop()?.split(".")[0];
          const currentImg = [...ProjectItems].find(
            (item) => item.name === imgName
          );

          if (!currentImg) return;
          return (
            <ProjectItem
              key={projectItem.projectSlug}
              // t={{ ...projectItem }}
              // {...projectItem}
              t={projectItem}
              currentImg={currentImg.srcImg}
              ariaLabel={ariaLabel}
              onClick={() =>
                handleOpenBackdrop(index, setCurrentIndex, setIsOpen)
              }
              // base64={projectItem.base64}
              // base64={base64}
              // onClick={() => handleOpenBackdrop(index)}
              // categorySlug={categoryData.categorySlug}
            />
          );
        })}
      </ul>
      <Backdrop
        imgList={filteredProjectsMainImgs}
        alt={filteredProjectsMainAlt}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        // ariaLabel={ariaLabel}
      />
    </>
  );
};

export default CaregoryProjectsList;

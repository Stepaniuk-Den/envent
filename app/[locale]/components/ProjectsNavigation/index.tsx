"use client";

import React from "react";
import styles from "./projectsNavigation.module.scss";
import { ProjectsPageT } from "@/messages/types/ProjectsPageT";
import MainButton from "../Buttons/MainButton";
import { Link } from "@/navigation";
import { useSelectedLayoutSegment } from "next/navigation";
import { IProjectCategory } from "@/helpers/interfaces";

interface ProjectsNavigationProps {
  categoryInfo: IProjectCategory[];
  //   categoryLinks: string[];
}

const ProjectsNavigation: React.FC<ProjectsNavigationProps> = ({
  //   categoryNames,
  //   categoryLinks,
  categoryInfo,
}) => {
  const selectedCategoryLink = useSelectedLayoutSegment();

  //   const basePath = "/projects";
  //   const pathname = selectedCategoryLink
  //     ? `${basePath}/${selectedCategoryLink}`
  //     : basePath;

  const isActiveCategory = (link: string) => {
    return link.split("/").pop() === selectedCategoryLink;
  };

  //   const pathname = selectedcategoryLink ? `/${selectedcategoryLink}` : "/";

  return (
    <ul className={styles.categoriesList}>
      {categoryInfo.map((category, index) => {
        // const isActive = pathname === category.linkCategory;
        // console.log(pathname);
        const isActive = isActiveCategory(category.linkCategory);

        return (
          <li className={styles.categoriesItem} key={category.category}>
            <MainButton
              type="button"
              color="black"
              className="btnPaddingsLR"
              //   className={`btnPaddingsLR  ${isActive ? styles.active : ""}`}
            >
              {/* <Link href={category.categoryLinks */}
              <Link href={category.linkCategory}>{category.category}</Link>
            </MainButton>
          </li>
        );
      })}
    </ul>
  );
};

export default ProjectsNavigation;

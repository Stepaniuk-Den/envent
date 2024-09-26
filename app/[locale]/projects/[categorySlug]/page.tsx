import React from "react";
import { Metadata } from "next";
import { ProjectsPageT } from "@/messages/types/ProjectsPageT";
import { localize } from "@/localize";
import { unstable_setRequestLocale } from "next-intl/server";
import styles from "../projects.module.scss";
import ProjectItem from "../../components/ProjectItem";
import { IPropsProjectItem } from "@/helpers/interfaces";
import getBase64FromImage from "@/helpers/getBase64";
// import { getBase64FromImage } from "@/helpers/getBase64";

type Props = {
  params: {
    categorySlug: string;
    locale: string;
  };
};

export async function generateMetadata({
  params: { categorySlug },
}: Props): Promise<Metadata> {
  return {
    title: `Project ${categorySlug} | Envent`,
    // description: `Project ${categorySlug} details`,
    description: `Browse projects in the ${categorySlug} category`,
  };
}

// : React.FC<Props>
const Categories = async ({ params: { categorySlug, locale } }: Props) => {
  unstable_setRequestLocale(locale);
  const t = await localize(ProjectsPageT);

  const filteredProjects = Object.values(t.projects).filter(
    (project) => project.categorySlug === categorySlug
  ) as IPropsProjectItem[];

  if (!filteredProjects) {
    return <p>Category not found</p>;
    //  return notFound();
  }

  // if (filteredProjects.length === 0) {
  //   return <p>No projects available in this category.</p>;
  // }

  // -------------------------------
  // const projectsWithBase64 = await Promise.all(
  //   filteredProjects.map(async (project) => {
  //     try {
  //       const mainImgPath = `${process.cwd()}/public${project.mainImg}`;
  //       const base64 = await getBase64FromImage(mainImgPath);
  //       return { ...project, base64 };
  //     } catch (error) {
  //       console.error("Error loading image:", error);
  //       return { ...project, base64: "" };
  //     }
  //   })
  // );
  // -----------------------------------

  return (
    <ul className={styles.projectList}>
      {/* {filteredProjects.map((projectItem) => ( */}
      {/* {projectsWithBase64.map(
        (projectItem) => ( */}
      {filteredProjects.map(async (projectItem) => {
        const mainImgPath = `${process.cwd()}/public${projectItem.mainImg}`;
        const base64 = await getBase64FromImage(mainImgPath);
        return (
          <ProjectItem
            key={projectItem.projectSlug}
            // t={{ ...projectItem }}
            t={projectItem}
            // base64={projectItem.base64}
            // base64={base64}

            // onClick={() => handleOpenBackdrop(index)}
            // categorySlug={categoryData.categorySlug}
            // onClick={() => handleOpenBackdrop(index)}
            // ---------
            // mainImg={projectItem.mainImg}
            // mainAlt={projectItem.mainAlt}
            // title={projectItem.title}
            // ---------
          />
        );
      })}
    </ul>
  );
};

export default Categories;

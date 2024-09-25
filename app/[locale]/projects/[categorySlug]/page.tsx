import React from "react";
import { Metadata } from "next";
import { ProjectsPageT } from "@/messages/types/ProjectsPageT";
import { localize } from "@/localize";
import { unstable_setRequestLocale } from "next-intl/server";
import styles from "../projects.module.scss";
import ProjectItem from "../../components/ProjectItem";
import { IPropsProjectItem } from "@/helpers/interfaces";

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

  return (
    <ul className={styles.projectList}>
      {filteredProjects.map((projectItem) => (
        <ProjectItem
          key={projectItem.projectSlug}
          // t={{ ...projectItem }}
          t={projectItem}

          // categorySlug={categoryData.categorySlug}
          // onClick={() => handleOpenBackdrop(index)}
        />
      ))}
    </ul>
  );
};

export default Categories;

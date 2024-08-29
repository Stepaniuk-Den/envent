import React from "react";
import { Metadata } from "next";
import styles from "../projects.module.scss";
import { ProjectsPageT } from "@/messages/types/ProjectsPageT";
import { localize } from "@/localize";
import ProjectItem from "../../components/ProjectItem";
import { unstable_setRequestLocale } from "next-intl/server";

export const metadata: Metadata = {
  title: " Public Facilities | Projects",
  description: "Design and installation of ventilation systems",
};

type Props = {
  params: { locale: string };
};

const PublicFacilities: React.FC<Props> = async ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);
  const t = await localize(ProjectsPageT);

  const selectedCategory = t.projects.publicFacilities;

  const projectsList = Object.values(selectedCategory.projects);

  return (
    <ul className={styles.projectList}>
      {projectsList.map((projectItem) => (
        <ProjectItem
          key={projectItem.id}
          {...projectItem}
          // onClick={() => handleOpenBackdrop(index)}
        />
      ))}
    </ul>
  );
};

export default PublicFacilities;

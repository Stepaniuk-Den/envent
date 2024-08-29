import React from "react";
import { locales } from "@/config";
import { localize } from "@/localize";
import { ProjectsPageT } from "@/messages/types/ProjectsPageT";
import { unstable_setRequestLocale } from "next-intl/server";
import { Link } from "@/navigation";
import Hero from "../components/Hero";
import { heroProjectsPageBG } from "@/helpers/imagesImport";
import styles from "../components/ProjectsNavigation/projectsNavigation.module.scss";
import MainButton from "../components/Buttons/MainButton";
import { useSelectedLayoutSegment } from "next/navigation";
import ProjectsNavigation from "../components/ProjectsNavigation";

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata() {
  const t = await localize(ProjectsPageT);
  const title = t.hero.title;
  const description = t.hero.description;
  return {
    title: title,
    description: description,
  };
}

export default async function ProjectsLayout({
  children,
  params: { locale },
}: Props) {
  unstable_setRequestLocale(locale);
  const t = await localize(ProjectsPageT);

  //   const categoryNames = (
  //     Object.keys(t.projects) as Array<keyof typeof t.projects>
  //   ).map((key) => t.projects[key].category);

  const projectsCategories = Object.keys(t.projects) as Array<
    keyof typeof t.projects
  >;

  const categoryInfo = projectsCategories.map(
    (key) => t.projects[key]
    //   .category
  );

  //   const categoryLinks = projectsCategories.map(
  //       (key) => t.projects[key]
  //         //   .linkCategory
  //   );

  return (
    <div>
      <Hero imageSrc={heroProjectsPageBG} className="" t={t.hero} />
      <section className={styles.projectsSection}>
        <div className={`${styles.projectsContainer} container`}>
          <ProjectsNavigation
            categoryInfo={categoryInfo}
            // categoryNames={categoryNames}
            // categoryLinks={categoryLinks}
          />

          {children}
        </div>
      </section>
    </div>
  );
}

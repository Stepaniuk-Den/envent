import React from "react";
import { locales } from "@/config";
import { localize } from "@/localize";
import { ProjectsPageT } from "@/messages/types/ProjectsPageT";
import { unstable_setRequestLocale } from "next-intl/server";
import { heroProjectsPageBG } from "@/helpers/imagesImport";
import styles from "./projects.module.scss";
import ProjectsNavigation from "../components/ProjectsNavigation";
import Hero from "../components/Hero";

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

  return (
    <section className={styles.projectsSection}>
      <Hero imageSrc={heroProjectsPageBG} className="" t={t.hero} />

      <div className={`${styles.projectsContainer} container`}>
        <ProjectsNavigation t={t} />
        {children}
      </div>
    </section>
  );
}

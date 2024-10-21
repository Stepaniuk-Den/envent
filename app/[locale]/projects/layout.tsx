import React from "react";
import { locales } from "@/config";
import { localize } from "@/localize";
import { ProjectsPageT } from "@/messages/types/ProjectsPageT";
import { unstable_setRequestLocale } from "next-intl/server";
// import { heroProjectsPageBG } from "@/helpers/imagesImport";
import styles from "./projects.module.scss";
import ProjectsNavigation from "../components/ProjectsNavigation";
import Hero from "../components/Hero";
import ContactUsSection from "../components/ContactUsSection";
import { Metadata } from "next";
import { LocaleLayoutT } from "@/messages/types/LocaleLayoutT";

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

// export async function generateMetadata() {
//   const t = await localize(ProjectsPageT);
//   const title = t.hero.title;
//   const description = t.hero.description;
//   return {
//     title: title,
//     description: description,
//   };
// }
// ==============================
// export async function generateMetadata(): Promise<Metadata> {
//   const t = await localize(ProjectsPageT);
//   const t2 = await localize(LocaleLayoutT);

//   return {
//     // title: `${t.projectItem.description} | Envent`,
//     // description: `Project ${categorySlug} details`,
//     // description: `Browse projects in the ${t.projectItem.subDescription} category`,
//     title: t.hero.title || "Envent",
//     description: t.hero.description,
//     openGraph: {
//       title: t.projectItem.description || "Envent",
//       description: t.projectItem.subDescription,
//       // url: 'https://envent.vercel.app/uk',
//       // siteName: t2.title || "Envent",
//       images: [
//         {
//           url: t.hero.heroBG,
//           width: 1200,
//           height: 630,
//         },
//       ],
//     },
//   };
// }

export default async function ProjectsLayout({
  children,
  params: { locale },
}: Props) {
  unstable_setRequestLocale(locale);
  const t = await localize(ProjectsPageT);

  return (
    <section className={styles.projectsSection}>
      <Hero imageSrc={t.hero.heroBG} className="" t={t.hero} />

      <div className={`${styles.projectsContainer} container`}>
        <ProjectsNavigation t={t} language={locale} />
        {children}
      </div>
      <ContactUsSection params={{ locale }} />
    </section>
  );
}

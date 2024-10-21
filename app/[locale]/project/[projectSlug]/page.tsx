import { Metadata } from "next";
import { unstable_setRequestLocale } from "next-intl/server";
import { localize } from "@/localize";
import { ProjectsPageT } from "@/messages/types/ProjectsPageT";
import Hero from "@/app/[locale]/components/Hero";
import styles from "./../project.module.scss";
import Line from "../../components/Line";
import Image from "next/image";
import { IPropsProjectItem } from "@/helpers/interfaces";
import ProjectSection from "../../components/ProjectsSection";
import { MainPageT } from "@/messages/types/MainPageT";
import ContactUsSection from "../../components/ContactUsSection";
import AnimatedTitle from "../../components/AnimatedTitle";
import MainButton from "../../components/Buttons/MainButton";
import ArrowLeft from "@/public/icons/arrow-left.svg";
// import { getBase64FromImage } from "@/helpers/getBase64FromImage";
import Observer from "@/helpers/observer";
import { LocaleLayoutT } from "@/messages/types/LocaleLayoutT";
import React, { cache } from "react";
// import { getBase64FromImage } from "@/helpers/getBase64";

type Props = {
  params: {
    // categorySlug: string;
    projectSlug: string;
    locale: string;
  };
};

// export function generateStaticParams() {
//   return locales.map((locale) => ({ locale }));
// }

// ---------------------------------------------
// const getProjectsWithBase64 = async (projects: ProjectsPageT["projects"]) => {
//   return await Promise.all(
//     Object.entries(projects).map(async ([key, project]) => {
//       const mainImgPath = `${process.cwd()}/public${project.mainImg}`;
//       const base64 = await getBase64FromImage(mainImgPath);
//       return { ...project, base64 };
//     })
//   );
// };
// ---------------------------------------------

const getProject = cache(async (projectSlug: string) => {
  const t = await localize(ProjectsPageT);
  // const t2 = await localize(LocaleLayoutT);
  const project = Object.values(t.projects).find(
    (project) => project.projectSlug === projectSlug
  ) as IPropsProjectItem | undefined;

  return project;
});

export async function generateMetadata({
  params: { projectSlug },
}: Props): Promise<Metadata> {
  const t = await localize(ProjectsPageT);
  const t2 = await localize(LocaleLayoutT);

  const projectData = await getProject(projectSlug);

  return {
    // title: `${projectData?.title} | Envent`,
    // description: `Details about project ${projectData?.heroDescription}`,
    title: t.projectItem.title || "Envent",
    description: t.projectItem.description,
    openGraph: {
      title: projectData?.title || "Envent",
      description: projectData?.heroDescription,
      // url: 'https://envent.vercel.app/uk',
      // siteName: t2.title || "Envent",
      images: [
        {
          url: projectData?.mainImg || "",
          alt: projectData?.mainAlt,
          width: 800,
          height: 600,
        },
        {
          url: projectData?.images?.img1?.src || "",
          alt: projectData?.images?.img1?.alt,
          width: 536,
          height: 324,
        },
        {
          url: projectData?.images?.img3?.src || "",
          alt: projectData?.images?.img3?.alt,
          width: 458,
          height: 282,
        },
      ],
    },
  };
}

const ProjectItemInfo: React.FC<Props> = async ({
  params: { projectSlug, locale },
}) => {
  unstable_setRequestLocale(locale);
  const t = await localize(ProjectsPageT);
  const mainT = await localize(MainPageT);
  const projectsT = await localize(ProjectsPageT);
  const btnBack = t.hero.btnBack;

  // const projectData = Object.values(t.projects).find(
  //   (project) => project.projectSlug === projectSlug
  // ) as IPropsProjectItem | undefined;

  const projectData = await getProject(projectSlug);

  if (!projectData) {
    return <p>Project not found</p>;
  }

  // ---------------------------------------------
  // const projectsWithBase64 = await getProjectsWithBase64(projectsT.projects);
  // ---------------------------------------------

  const addressAr = projectData.address?.split(";");
  const addresses = addressAr?.map((item) => item.trim());

  return (
    <>
      <Hero
        imageSrc={projectData.mainImg || ""}
        className=""
        t={{
          title: projectData.title,
          description: projectData.heroDescription || "",
          button: t.hero.button || "",
        }}
      />
      <section className={styles.projectItemSection}>
        <div className={`${styles.projectItemContainer} container`}>
          <div className={styles.topInfoWrapper}>
            <div className={styles.textWrapper}>
              {/* <AnimatedTitle title={textCategory} /> */}
              <AnimatedTitle
                className={styles.descTitle}
                title={t.projectItem.title}
              />
              <Line className="yellow-left" />
              <Observer y={50} threshold={0.5}>
                <ul className={styles.desc}>
                  {addresses?.map((address, index) => (
                    <li key={index}>{address}</li>
                  ))}
                </ul>
              </Observer>
            </div>
            {projectData.images?.img1?.src && (
              <div className={styles.imgWrapper}>
                <Image
                  src={projectData.images.img1.src}
                  alt={projectData.images.img1.alt}
                  fill={true}
                  sizes="(max-width: 1439.98px) 365px, 405px"
                />
              </div>
            )}
          </div>
          <div className={styles.middleImgWrapper}>
            {projectData.images?.img2?.src && (
              <Image
                src={projectData.images.img2.src}
                alt={projectData.images.img2.alt}
                fill={true}
                sizes="(max-width: 1439.98px) 365px, 405px"
              />
            )}
          </div>
          <div className={styles.bottomInfoWrapper}>
            <div className={styles.imgWrapper}>
              {projectData.images?.img3?.src && (
                <Image
                  src={projectData.images.img3.src}
                  alt={projectData.images.img3.alt}
                  fill={true}
                  sizes="(max-width: 1439.98px) 365px, 405px"
                />
              )}
            </div>
            <div className={styles.textWrapper}>
              <Observer y={50} threshold={0.5}>
                <p>{t.projectItem.description}</p>
              </Observer>
              <Observer y={50} threshold={0.7}>
                <p>{t.projectItem.subDescription}</p>
              </Observer>
              <MainButton
                type="button"
                color="filled"
                className="projects"
                isGoBack={true}
              >
                <ArrowLeft />
                {btnBack}
              </MainButton>
            </div>
          </div>
        </div>
      </section>
      <ProjectSection
        className="withPaddingBottom"
        t={mainT.projects}
        t2={projectsT.projects}
        ariaLabel={mainT}
      />
      <ContactUsSection params={{ locale }} />
    </>
  );
};

export default ProjectItemInfo;

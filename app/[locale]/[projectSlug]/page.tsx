import { Metadata } from "next";
import { unstable_setRequestLocale } from "next-intl/server";
import { localize } from "@/localize";
import { ProjectsPageT } from "@/messages/types/ProjectsPageT";
import Hero from "@/app/[locale]/components/Hero";
import styles from "./project.module.scss";
import Line from "../components/Line";
import Image from "next/image";
import { IPropsProjectItem } from "@/helpers/interfaces";
import ProjectSection from "../components/ProjectsSection";
import { MainPageT } from "@/messages/types/MainPageT";
import ContactUsSection from "../components/ContactUsSection";
import AnimatedTitle from "../components/AnimatedTitle";
import MainButton from "../components/Buttons/MainButton";
import ArrowLeft from "@/public/icons/arrow-left.svg";
import getBase64FromImage from "@/helpers/getBase64";
// import { getBase64FromImage } from "@/helpers/getBase64";

type Props = {
  params: {
    categorySlug: string;
    projectSlug: string;
    locale: string;
  };
};

// ---------------------------------------------
const getProjectsWithBase64 = async (projects: ProjectsPageT["projects"]) => {
  return await Promise.all(
    Object.entries(projects).map(async ([key, project]) => {
      const mainImgPath = `${process.cwd()}/public${project.mainImg}`;
      const base64 = await getBase64FromImage(mainImgPath);
      return { ...project, base64 };
    })
  );
};
// ---------------------------------------------

export async function generateMetadata({
  params: { projectSlug },
}: Props): Promise<Metadata> {
  return {
    title: `Project ${projectSlug} | Envent`,
    description: `Details about project ${projectSlug}`,
  };
}

const ProjectItemInfo = async ({ params: { projectSlug, locale } }: Props) => {
  unstable_setRequestLocale(locale);
  const t = await localize(ProjectsPageT);
  const mainT = await localize(MainPageT);
  const projectsT = await localize(ProjectsPageT);
  const btnBack = t.hero.btnBack;

  const projectData = Object.values(t.projects).find(
    (project) => project.projectSlug === projectSlug
  ) as IPropsProjectItem | undefined;

  if (!projectData) {
    return <p>Project not found</p>;
  }

  // ---------------------------------------------
  const projectsWithBase64 = await getProjectsWithBase64(projectsT.projects);
  // ---------------------------------------------

  return (
    <>
      <section className={styles.projectItemSection}>
        <Hero
          imageSrc={projectData.mainImg || ""}
          className=""
          t={{
            title: projectData.title,
            description: projectData.heroDescription || "",
            button: projectData.heroButton || "",
          }}
        />

        <div className={`${styles.projectItemContainer} container`}>
          <div className={styles.topInfoWrapper}>
            <div className={styles.textWrapper}>
              {/* <AnimatedTitle title={textCategory} /> */}
              <AnimatedTitle
                className={styles.descTitle}
                title={"About this Project"}
              />
              <Line className="yellow-left" />
              <p className={styles.desc}>
                Lectus erat, consectetur eu sapien eget rhoncus consectetur sem.
                Proin cursus, dolor a mollis consectetur, risus dolor fermentum
                massa, a commodo elit dui sit amet risus.
              </p>
              <ul>
                <li>Maecenas ornare nisl</li>
                <li>A tortor ultrices bibendum</li>
                <li>Nulla fermentum</li>
                <li>Metus quis</li>
                <li>Sodales tristique</li>
              </ul>
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
              <p>
                Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus
                erat, consectetur eu sapien eget rhoncus consectetur sem. Proin
                cursus, dolor a mollis consectetur, risus dolor fermentum massa,
                a commodo elit dui sit amet risus. Maecenas ornare nisl a tortor
                ultrices bibendum. Nulla fermentum, metus quis sodales
                tristique, augue mauris molestie augue non feugiat ligula neque
                nec felis.
              </p>
              <p>
                Lectus erat, consectetur eu sapien eget rhoncus consectetur sem.
                Proin cursus, dolor a mollis consectetur, risus dolor fermentum
                massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a
                tortor ultrices bibendum. Nulla fermentum, metus quis sodales
                tristique, augue mauris molestie augue, non feugiat ligula neque
                nec felis.
              </p>
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
        <ProjectSection
          t={mainT.projects}
          // t2={projectsT.projects}
          t2={projectsWithBase64}
        />
      </section>
      <ContactUsSection params={{ locale }} />
    </>
  );
};

export default ProjectItemInfo;

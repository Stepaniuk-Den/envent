import React, { cache } from "react";
import { Metadata } from "next";
import { ProjectsPageT } from "@/messages/types/ProjectsPageT";
import { localize } from "@/localize";
import { unstable_setRequestLocale } from "next-intl/server";
import { IPropsProjectItem } from "@/helpers/interfaces";
import CaregoryProjectsList from "../../components/CaregoryProjectsList";
import { MainPageT } from "@/messages/types/MainPageT";
import { LocaleLayoutT } from "@/messages/types/LocaleLayoutT";

type Props = {
  params: {
    categorySlug: string;
    locale: string;
  };
};

const getProjectsOfCategory = cache(async (categorySlug: string) => {
  const t = await localize(ProjectsPageT);
  const filteredProjectsOfCategory = Object.values(t.projects).filter(
    (project) => project.categorySlug === categorySlug
  ) as IPropsProjectItem[];

  return filteredProjectsOfCategory;
});

const getPropertyList = (
  projects: IPropsProjectItem[],
  property: keyof IPropsProjectItem
) => {
  return projects
    .map((project) => project[property])
    .filter((item): item is string => !!item);
};

export async function generateMetadata({
  params: { categorySlug },
}: Props): Promise<Metadata> {
  const t = await localize(ProjectsPageT);
  const t2 = await localize(LocaleLayoutT);

  // const filteredProjects = Object.values(t.projects).filter(
  //   (project) => project.categorySlug === categorySlug
  // ) as IPropsProjectItem[];

  // const getCategory = filteredProjects
  //   .map((project) => project.category)
  //   .find((category): category is string => !!category);

  // const getMainImg = filteredProjects
  //   .map((project) => project.mainImg)
  //   .filter((mainImg): mainImg is string => !!mainImg);

  const filteredProjects = await getProjectsOfCategory(categorySlug);
  const getCategory = getPropertyList(filteredProjects, "category").find(
    (category): category is string => !!category
  );
  const getMainImg = getPropertyList(filteredProjects, "mainImg");
  const getMainAlt = getPropertyList(filteredProjects, "mainAlt");
  const imageList = getMainImg.map((img, index) => ({
    url: img,
    alt: getMainAlt[index] || "",
    width: 800,
    height: 600,
  }));

  return {
    // title: `${t.projectItem.description} | Envent`,
    // description: `Project ${categorySlug} details`,
    // description: `Browse projects in the ${t.projectItem.subDescription} category`,

    title: t.hero.title || "Envent",
    description: t.hero.description,
    openGraph: {
      // title: t.projectItem.description,
      // description: t.projectItem.subDescription,
      title: getCategory,
      description: t.projectItem.subDescription,
      // url: 'https://envent.vercel.app/uk',
      // siteName: t2.title || "Envent",
      images: [
        {
          url: t.hero.heroBG,
          width: 1200,
          height: 630,
        },
        ...imageList,
      ],
    },
  };
}

// : React.FC<Props>
const Categories = async ({ params: { categorySlug, locale } }: Props) => {
  unstable_setRequestLocale(locale);
  const t = await localize(ProjectsPageT);
  const ariaLabelT = await localize(MainPageT);

  // const filteredProjects = Object.values(t.projects).filter(
  //   (project) => project.categorySlug === categorySlug
  // ) as IPropsProjectItem[];
  const filteredProjects = await getProjectsOfCategory(categorySlug);

  if (!filteredProjects) {
    return <p>Category not found</p>;
    //  return notFound();
  }

  // =====================================================
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
    <>
      <CaregoryProjectsList
        filteredProjects={filteredProjects}
        ariaLabel={ariaLabelT.ariaLabel.text}
      />

      {/* <ul className={styles.projectList}>
        {filteredProjects.map((projectItem, index) => { */}
      {/* =================================== */}
      {/* {filteredProjects.map((projectItem) => ( */}
      {/* {projectsWithBase64.map(
        (projectItem) => ( */}
      {/* ==============================
         const mainImgPath = `${process.cwd()}/public${projectItem.mainImg}`;
         const base64 = await getBase64FromImage(mainImgPath);
          ==============================
          ==============================
Its need
          const imgName = projectItem.mainImg?.split("/").pop()?.split(".")[0];
          const currentImg = [...ProjectItems].find(
            (item) => item.name === imgName
          );
          if (!currentImg) return;
          return (
            <ProjectItem
              key={projectItem.projectSlug}
              t={projectItem}
              currentImg={currentImg.srcImg} */}
      {/* ==============================
               ===============================
               t={{ ...projectItem }}
               {...projectItem}
               onClick={() =>
                 handleOpenBackdrop(index, setCurrentIndex, setIsOpen)
               }
               base64={projectItem.base64}
               base64={base64}

               onClick={() => handleOpenBackdrop(index)}
               categorySlug={categoryData.categorySlug}
               onClick={() => handleOpenBackdrop(index)}
               ---------
               mainImg={projectItem.mainImg}
               mainAlt={projectItem.mainAlt}
               title={projectItem.title}
               ---------
               ===============================
            />
          );
        })}
      </ul> */}

      {/* ==== BACKDROP ====
      <AnimatePresence mode="wait">
        {isOpen && currentIndex !== null && (
          <motion.div
            className={`${styles.backdrop} overlay`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => handleCloseBackdrop(setIsOpen)}
          >
            <motion.div
              className={styles.modalContent}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ delay: isOpen ? 0.2 : 0, duration: 0.3 }}
              onAnimationComplete={() => {
                if (!isOpen) handleCloseBackdrop(setIsOpen);
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <BackdropButton
                className={styles.closeButton}
                onClick={() => handleCloseBackdrop(setIsOpen)}
                type="button"
                aria-label="Close"
              >
                <Close className={styles.closeSVG} />
              </BackdropButton>
              <BackdropButton
                className={styles.prevButton}
                // onClick={handlePrev}
                onClick={() =>
                  handlePrev({
                    currentIndex,
                    setCurrentIndex,
                    array: filteredProjects,
                  })
                }
                type="button"
                aria-label="Swipe to previous"
              >
                <ArrowLeft className={styles.ArrowLeftSVG} />
              </BackdropButton>

              <Image
                className={styles.images}
                src={filteredProjects[currentIndex].mainImg}
                alt={filteredProjects[currentIndex].mainAlt}
                fill={true}
                sizes="(max-width: 767.98px) 460px, (max-width: 1023.98px) 660px, 800px"
              />

              <BackdropButton
                className={styles.nextButton}
                // onClick={handleNext}
                onClick={() =>
                  handleNext({
                    currentIndex,
                    setCurrentIndex,
                    array: filteredProjects,
                  })
                }
                type="button"
                aria-label="Swipe to next"
              >
                <ArrowRight className={styles.ArrowRightSVG} />
              </BackdropButton>
              <p className={styles.counter}>
                {currentIndex + 1} of {filteredProjects.length}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence> */}
    </>
  );
};

export default Categories;

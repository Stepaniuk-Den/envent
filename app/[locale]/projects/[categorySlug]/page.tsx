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
          t={{ ...projectItem }}
          // categorySlug={categoryData.categorySlug}
          // onClick={() => handleOpenBackdrop(index)}
        />
      ))}
    </ul>
  );
};

export default Categories;

// ==============================================================
// ==============================================================

// import React from "react";
// import { Metadata } from "next";
// import { ProjectsPageT } from "@/messages/types/ProjectsPageT";
// import { localize } from "@/localize";
// import { unstable_setRequestLocale } from "next-intl/server";
// import styles from "../projects.module.scss";
// import { IProjectCategory } from "@/helpers/interfaces";
// import ProjectItem from "../../components/ProjectItem";

// type Props = {
//   params: {
//     categorySlug: string;
//     locale: string;
//   };
// };

// export async function generateMetadata({
//   params: { categorySlug },
// }: Props): Promise<Metadata> {
//   return {
//     title: `Project ${categorySlug} | Envent`,
//     description: `Project ${categorySlug} details`,
//   };
// }

// // : React.FC<Props>
// const Categories = async ({ params: { categorySlug, locale } }: Props) => {
//   unstable_setRequestLocale(locale);
//   const t = await localize(ProjectsPageT);

//   // const selectedCategory = t.projects.administrativeBuildings;
//   // const projectsList = Object.values(selectedCategory.projects);

//   // const categoryData = t.projects[category as keyof typeof t.projects];

//   const projectsCategoriesKeys = Object.keys(t.projects) as Array<
//     keyof typeof t.projects
//   >;

//   const categoryList = projectsCategoriesKeys.map((key) => t.projects[key]);

//   const categoryData = categoryList.find(
//     (categoryItem) => categoryItem.categorySlug === categorySlug
//   ) as IProjectCategory | undefined;

//   if (!categoryData) {
//     return <p>Category not found</p>;
//     //  return notFound();
//   }

//   return (
//     <>
//       <ul className={styles.projectList}>
//         {Object.keys(categoryData.projects).map((projectKey) => {
//           const projectItem = categoryData.projects[projectKey];

//           return (
//             <ProjectItem
//               key={projectItem.projectSlug}
//               t={{ ...projectItem }}
//               // categorySlug={categoryData.categorySlug}
//               // onClick={() => handleOpenBackdrop(index)}
//             />
//           );
//         })}
//       </ul>
//     </>
//   );
// };

// export default Categories;

//  {
//    /* <Link
//                 className={styles.linkProject}
//                 // href={`/projects/${id}`}
//                 // href={`/projects/${category.linkCategory}/${project.slug}`}
//                 href={`/projects/${category}/${projectKey}`}
//               >
//                 <LinkIcon className={styles.linkIcon} />
//               </Link> */
//  }

// --------------------------------------
// const AdministrativeBuildings: React.FC<{ t: ProjectsPageT["projects"] }> = ({
//   t,
// }) => {

// ================================================================

// import React from "react";
// import { Metadata } from "next";
// import { ProjectsPageT } from "@/messages/types/ProjectsPageT";
// import { localize } from "@/localize";
// import ProjectItem from "../../components/ProjectItem";
// import { unstable_setRequestLocale } from "next-intl/server";
// import styles from "../projects.module.scss";
// import { useRouter } from "next/router";

// export const metadata: Metadata = {
//   title: " Administrative buildings | Projects",
//   description: "Design and installation of ventilation systems",
// };

// type Props = {
//   params: { locale: string };
// };

// const AdministrativeBuildings: React.FC<Props> = async ({
//   params: { locale },
// }) => {
//   unstable_setRequestLocale(locale);
//   const t = await localize(ProjectsPageT);

//   const selectedCategory = t.projects.administrativeBuildings;

//   const projectsList = Object.values(selectedCategory.projects);

//   // const router = useRouter();
//   // const slug = router.query.slug;
//   // const {params} = router.query

//   return (
//     <>
//       {/* <h1>Project {slug}</h1> */}
//       <ul className={styles.projectList}>
//         {projectsList.map((projectItem) => (
//           <ProjectItem
//             key={projectItem.id}
//             {...projectItem}
//             // onClick={() => handleOpenBackdrop(index)}
//           />
//         ))}
//       </ul>
//     </>
//   );
// };

// export default AdministrativeBuildings;

// // const AdministrativeBuildings: React.FC<{ t: ProjectsPageT["projects"] }> = ({
// //   t,
// // }) => {

import React from "react";
import styles from "./projects.module.scss";
import { ProjectsPageT } from "@/messages/types/ProjectsPageT";
import ProjectItem from "../ProjectItem";

const Projects: React.FC<{ t: ProjectsPageT["projects"] }> = ({ t }) => {
  //   const categories = Object.keys(t);
  const projectsList = Object.values(t).flatMap((category) => {
    return Object.values(category.projects);
  });

  //   const projectItems = Object.values(projectsList);
  //   console.log(projectItems);

  return (
    <section className={styles.projectSection}>
      <div className={`${styles.projectsContainer} container`}>
        {/* <AnimatedTitle title={projectsT.hero.title} /> */}
        {/* <Line className="yellow-center" /> */}
        {/* <ul>
        {projects.map((projectItem: any) => (
          <li key={projectItem.id}>
            <Link href={`/project/${projectItem.id}`}>{projectItem.title}</Link>
          </li>
        ))}
      </ul> */}

        <ul className={styles.projectList}>
          {/* {projectsList.map((project: IPropsProjectItem, index) => ( */}
          {/* {Object.keys(projectsList).map((key) => { */}
          {projectsList.map(
            (projectItem) => (
              //   {
              // const projectItem = projectsList[Number(key)];
              // const imgSrc = projects.find(
              //   (project) => project.title === projectItem.src
              // );
              // return (
              <ProjectItem
                key={projectItem.id}
                {...projectItem}
                // onClick={() => handleOpenBackdrop(index)}
              />
            )

            // ))}
            // );
            //   }
          )}
        </ul>
      </div>
    </section>
  );
};

export default Projects;

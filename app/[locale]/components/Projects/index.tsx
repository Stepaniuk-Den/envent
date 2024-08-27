import React from "react";

import styles from "./projects.module.scss";
import { ProjectsPageT } from "@/messages/types/ProjectsPageT";

const Projects: React.FC<{ t: ProjectsPageT["projects"] }> = ({ t }) => {
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
      </div>
    </section>
  );
};

export default Projects;

import styles from "./projectItem.module.scss";
import Image from "next/image";
import LinkIcon from "@/public/icons/link.svg";
import MagnifyingGlass from "@/public/icons/magnifying-glass.svg";
import { Link } from "@/navigation";
import { IPropsProjectItem } from "@/helpers/interfaces";

const ProjectItem = ({
  t,
}: // categorySlug,
{
  t: IPropsProjectItem;
  // categorySlug: string;
}) => {
  if (!t) {
    return <p>Project data is missing</p>;
  }
  const { projectSlug, mainImg, mainAlt, title, onClick } = t;

  return (
    <li className={styles.projectItem}>
      {mainImg && (
        <Image
          className={styles.projectImg}
          src={mainImg}
          alt={mainAlt || "Project image"}
          fill={true}
          sizes="(max-width: 1439.98px) 365px, 405px"
        />
      )}
      <div className={styles.overlayContent}>
        <h3 className={styles.projectTitle}>{title}</h3>
        <div className={styles.projectLinksWrapper}>
          <Link
            className={styles.linkProject}
            // href={`/projects/${id}`}
            // href={`/projects/${category.linkCategory}/${project.slug}`}
            // -----------------------------------------------------

            // href={`/projects/${categorySlug}/${slug}`}
            href={`/project/${projectSlug}`}
          >
            <LinkIcon className={styles.linkIcon} />
          </Link>
          <button
            className={styles.magnifyingGlassBtn}
            type="button"
            onClick={onClick}
          >
            <MagnifyingGlass className={styles.magnifyingGlassIcon} />
          </button>
        </div>
      </div>
    </li>
  );
};

export default ProjectItem;

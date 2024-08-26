import styles from "./projectItem.module.scss";
import Image from "next/image";
import LinkIcon from "@/public/icons/link.svg";
import MagnifyingGlass from "@/public/icons/magnifying-glass.svg";
import { HtmlHTMLAttributes } from "react";
import Link from "next/link";
import { IPropsProjectItem } from "@/helpers/interfaces";

const ProjectItem = ({ id, src, alt, title, onClick }: IPropsProjectItem) => {
  return (
    <li className={styles.projectItem}>
      <Image
        className={styles.projectImg}
        src={src}
        alt={alt}
        fill={true}
        sizes="(max-width: 1439.98px) 365px, 405px"
      />

      <div className={styles.overlayContent}>
        <h3 className={styles.projectTitle}>{title}</h3>
        <div className={styles.projectLinksWrapper}>
          <Link className={styles.linkProject} href={`/projects/${id}`}>
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

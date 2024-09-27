"use client";

import styles from "./projectItem.module.scss";
import Image from "next/image";
import LinkIcon from "@/public/icons/link.svg";
import MagnifyingGlass from "@/public/icons/magnifying-glass.svg";
import { Link } from "@/navigation";
import { IPropsProjectItem } from "@/helpers/interfaces";
// import { getPlaiceholder } from "plaiceholder";
// import fs from "node:fs/promises";
import { useState } from "react";

const ProjectItem = ({
  t,
}: // base64,
// categorySlug,
{
  t: IPropsProjectItem;
  // base64: string;
  // categorySlug: string;
}) => {
  const [isLoading, setIsLoading] = useState(true);
  // const [blurDataURL, setBlurDataURL] = useState<string | null>(null);

  if (!t) {
    return <p>Project data is missing</p>;
  }
  const { projectSlug, mainImg, mainAlt, title, onClick } = t;

  // const buffer = await fs.readFile(`public${mainImg}`);
  // const { base64 } = await getPlaiceholder(buffer);

  return (
    <li className={styles.projectItem}>
      {mainImg && (
        <Image
          className={`styles.projectImg ${
            isLoading ? styles.loading : styles.notLoading
          }`}
          src={mainImg}
          alt={mainAlt || "Project image"}
          fill={true}
          sizes="(max-width: 767.98px) 355px, (max-width: 1023.98px) 356px,  317px,"
          // placeholder="blur"
          // blurDataURL={base64}
          // blurDataURL={blurDataURL || ""}
          onLoad={() => {
            setIsLoading(false), console.log("setIsLoading");
          }}
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
            // href={`/${projectSlug}`}
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

// ================================================================================================

// ==== above ProjectItem ====
// const getPlaiceholder =
//   typeof window === "undefined"
//     ? require("plaiceholder").getPlaiceholder
//     : null;
// ====                 ====

// ----------------------------------------------------------------
// useEffect(() => {
//   const loadImagePlaceholder = async () => {
//     if (mainImg && getPlaiceholder) {
//       const res = await fetch(mainImg);
//       const buffer = await res.arrayBuffer();
//       const { base64 } = await getPlaiceholder(Buffer.from(buffer));
//       setBlurDataURL(base64);
//     }
//   };

//   loadImagePlaceholder();
// }, [mainImg]);

// useEffect(() => {
//   const loadBlurData = async () => {
//     if (mainImg) {
//       const res = await fetch(
//         `/api/get-blur-image?imageUrl=${encodeURIComponent(mainImg)}`
//       );
//       const { base64 } = await res.json();
//       setBlurDataURL(base64);
//       console.log(base64);
//     }
//   };

//   loadBlurData();
// }, [mainImg]);

// ----------------------------------------------------------------

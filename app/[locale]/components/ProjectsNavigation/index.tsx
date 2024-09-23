"use client";

import React, { useEffect, useMemo, useState } from "react";
import styles from "./projectsNavigation.module.scss";
import { ProjectsPageT } from "@/messages/types/ProjectsPageT";
import MainButton from "../Buttons/MainButton";
import { Link } from "@/navigation";
import { usePathname, useRouter } from "next/navigation";
import { motion, useScroll, useTransform } from "framer-motion";
import { useMenuAnimation } from "@/helpers/animateMenu";
import AnimatedTitle from "../AnimatedTitle";

const ProjectsNavigation: React.FC<{ t: ProjectsPageT; language: string }> = ({
  t,
  language,
}) => {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const scope = useMenuAnimation(isOpen);
  const textCategory = t.hero.textCategory;

  const uniqueCategories = useMemo(() => {
    const projects = Object.values(t.projects);
    return projects.reduce((acc, project) => {
      if (!acc.some((cat) => cat.categorySlug === project.categorySlug)) {
        acc.push({
          category: project.category,
          categorySlug: project.categorySlug,
        });
      }
      return acc;
    }, [] as { category: string; categorySlug: string }[]);
  }, [t.projects]);

  // const [selectedCategory, setSelectedCategory] = useState(
  //   uniqueCategories[0]?.category || ""
  // );

  const [selectedCategory, setSelectedCategory] = useState(() => {
    const foundCategory = uniqueCategories.find((category) =>
      pathname.includes(`/projects/${category.categorySlug}`)
    );
    return foundCategory
      ? foundCategory.category
      : uniqueCategories[0]?.category;
  });

  useEffect(() => {
    // if (uniqueCategories.length > 0) {
    //   setSelectedCategory(uniqueCategories[0].category);
    // }
    if (!pathname.includes("/projects/")) {
      setTimeout(() => {
        router.push(`/projects/${uniqueCategories[0]?.categorySlug}`, {
          scroll: false,
        });
      }, 100);
    } else {
      const foundCategory = uniqueCategories.find((category) =>
        pathname.includes(`/projects/${category.categorySlug}`)
      );
      if (foundCategory) {
        setSelectedCategory(foundCategory.category);
      }
    }
  }, [pathname, router, uniqueCategories]);

  const handleCategoryClick = (categorySlug: string, categoryName: string) => {
    setIsOpen(false);
    setSelectedCategory(categoryName);
    router.push(`/projects/${categorySlug}`, { scroll: false });
  };

  return (
    <div className={styles.categoriesWrapper}>
      <div className={styles.titleWrapper}>
        <AnimatedTitle
          title={textCategory}
          className={`styles.navigationTitle ${
            language === "uk" && styles.navigationTitleUK
          }`}
        />
      </div>
      <nav className={styles.menu} ref={scope}>
        <motion.button
          className={styles.selectButton}
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.97 }}
        >
          {selectedCategory}
          <div className="arrow" style={{ transformOrigin: "50% 55%" }}>
            <svg width="15" height="15" viewBox="0 0 20 20">
              <path d="M0 7 L 20 7 L 10 16" />
            </svg>
          </div>
        </motion.button>

        <ul
          className={styles.categoriesList}
          style={{
            pointerEvents: isOpen ? "auto" : "none",
            clipPath: "inset(10% 50% 90% 50% round 10px)",
          }}
        >
          {uniqueCategories.map((category, index) => {
            const isActive = pathname.includes(
              `/projects/${category.categorySlug}`
            );
            return (
              <li
                className={styles.categoriesItem}
                key={category.categorySlug}
                value={category.categorySlug}
              >
                <Link
                  className={`${styles.categoriesLink} ${
                    isActive ? styles.active : ""
                  }`}
                  href={`/projects/${category.categorySlug}`}
                  onClick={() =>
                    handleCategoryClick(
                      category.categorySlug,
                      category.category
                    )
                  }
                >
                  {category.category}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default ProjectsNavigation;

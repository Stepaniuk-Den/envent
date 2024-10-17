"use client";

import { useState, useTransition } from "react";
import styles from "./catalogReview.module.scss";
import { Catalog } from "@/helpers/imagesImport";
import { useClickOutside } from "@/helpers/useClickOutside";

const CatalogReview = () => {
  const [isBtnVisible, setBtnVisible] = useState(false);
  const ref = useClickOutside(() => setBtnVisible(false));

  return (
    <div className={styles.btnCatalogWrapper}>
      <a
        href="/pdf/catalog.pdf"
        // download="Catalog.pdf"
        // locale={false}
        rel="noopener noreferrer"
        target="_blank"
        aria-label="View Catalog"
        className={`${styles.sideBarViewLink} ${
          isBtnVisible ? styles.visible : ""
        }`}
      >
        Catalog
      </a>

      <button
        ref={ref}
        type="button"
        onClick={() => setBtnVisible(!isBtnVisible)}
        className={`${styles.btnSelected} ${isBtnVisible ? styles.active : ""}`}
      >
        <Catalog />
      </button>
    </div>
  );
};

export default CatalogReview;

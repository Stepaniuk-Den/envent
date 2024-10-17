"use client";

import { useState } from "react";
import styles from "./sideBarCatalogReview.module.scss";
import { Catalog } from "@/helpers/imagesImport";
import { useClickOutside } from "@/helpers/useClickOutside";
import { SideBarT } from "@/messages/types/SideBarT";

const SideBarCatalogReview: React.FC<{ t: SideBarT }> = ({ t }) => {
  const [isBtnVisible, setBtnVisible] = useState(false);
  const ref = useClickOutside(() => setBtnVisible(false));
  const catalogTitle = t.catalog.catalogTitle;

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
        {catalogTitle}
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

export default SideBarCatalogReview;

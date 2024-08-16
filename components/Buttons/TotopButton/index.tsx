"use client";

import { useEffect, useState } from "react";
import styles from "./totopButton.module.scss";
import ArrowTotop from "../../../public/icons/arrow-totop.svg";

const TotopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      window.scrollY > 60 ? setIsVisible(true) : setIsVisible(false);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const handleClickTotop = () => {
    isVisible &&
      window.scrollTo({
        top: -1,
        behavior: "smooth",
      });
  };

  return (
    <>
      <button
        className={`${styles.totopBtn} ${isVisible ? styles.visible : ""}`}
        type="button"
        title="Scroll to top"
        onClick={handleClickTotop}
      >
        <ArrowTotop className={styles.ArrowTotopSVG} />

        {/* <Icon iconId="scroll-to-top" ariaLabel="scroll-to-top" /> */}
      </button>
    </>
  );
};

export default TotopButton;

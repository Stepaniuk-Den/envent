"use client";

import { useState } from "react";
import styles from "./sideBarThemeSwitcher.module.scss";
import { useClickOutside } from "@/helpers/useClickOutside";
import { useTheme } from "next-themes";
import { ThemeMoon, ThemeSun } from "@/helpers/imagesImport";

const SideBarThemeSwitcher = () => {
  const { setTheme, theme, resolvedTheme } = useTheme();

  console.log("resolvedTheme - ", resolvedTheme);
  const handleToggleTheme = (newTheme: string) => {
    const currentTheme = newTheme === "light" ? "dark" : "light";
    setTheme(currentTheme);
    setBtnThemeVisible(false);
    // setSelectedTheme(newTheme);
    // document.body.classList.remove("light-theme", "dark-theme");
    // document.body.classList.add(`${newTheme}-theme`);
  };

  const [isBtnThemeVisible, setBtnThemeVisible] = useState(false);
  const ref = useClickOutside(() => setBtnThemeVisible(false));

  return (
    <div className={styles.btnsThemeWrapper}>
      <button
        className={`${styles.btnTheme} ${
          isBtnThemeVisible ? styles.visible : ""
        }`}
        type="button"
        onClick={() => handleToggleTheme(theme!)}
      >
        {resolvedTheme === "dark" ? <ThemeSun /> : <ThemeMoon />}
      </button>
      <button
        ref={ref}
        className={`${styles.btnSelectedTheme} ${
          isBtnThemeVisible ? styles.active : ""
        }`}
        type="button"
        onClick={() => setBtnThemeVisible(!isBtnThemeVisible)}
      >
        {resolvedTheme === "light" ? <ThemeSun /> : <ThemeMoon />}
      </button>
    </div>
  );
};

export default SideBarThemeSwitcher;

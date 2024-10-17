"use client";

import { useState } from "react";
import styles from "./sideBarThemeSwitcher.module.scss";
import { useClickOutside } from "@/helpers/useClickOutside";
import { useTheme } from "next-themes";
import { ThemeMoon, ThemeSun } from "@/helpers/imagesImport";
import { IAriaLabelProps } from "@/helpers/interfaces";

const SideBarThemeSwitcher: React.FC<{ ariaLabel: IAriaLabelProps }> = ({ ariaLabel }) => {
  const { setTheme, theme, resolvedTheme } = useTheme();

  const handleToggleTheme = (newTheme: string) => {
    const currentTheme = newTheme === "light" ? "dark" : "light";
    setTheme(currentTheme);
    setBtnThemeVisible(false);
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
        aria-label={resolvedTheme === "dark" ? ariaLabel.ariaLabel.btnLightSwitchTheme : ariaLabel.ariaLabel.btnDarkSwitchTheme}
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
        aria-label={resolvedTheme === "light" ? ariaLabel.ariaLabel.btnLightThemeCurrent : ariaLabel.ariaLabel.btnDarkThemeCurrent}
      >
        {resolvedTheme === "light" ? <ThemeSun /> : <ThemeMoon />}
      </button>
    </div>
  );
};

export default SideBarThemeSwitcher;

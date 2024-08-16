"use client";

import { useState } from "react";
import styles from "./sidebar.module.scss";

const SideBar = () => {
  const languages = ["EN", "UA"];
  const [selectedLang, setSelectedLang] = useState("EN");
  const [selectedTheme, setSelectedTheme] = useState("light");

  const handleLangChange = (newLang: string) => {
    setSelectedLang(newLang);
  };

  const handleToggleTheme = (newTheme: string) => {
    setSelectedTheme(newTheme);
    document.body.classList.remove("light-theme", "dark-theme");
    document.body.classList.add(`${newTheme}-theme`);
  };

  return (
    <div className={styles.sideBarContainer}>
      <div className={styles.sideBarLangBtnsWrapper}>
        {languages
          .filter((lang) => lang !== selectedLang)
          .map((lang) => (
            <button
              key={lang}
              className={styles.sideBarLangBtn}
              type="button"
              onClick={() => handleLangChange(lang)}
            >
              {lang}
            </button>
          ))}

        <button className={styles.sideBarBtnSelected} type="button">
          {selectedLang}
        </button>
      </div>
      {/* ------------ */}
      <div className={styles.btnsThemeWrapper}>
        {selectedTheme !== "light" && (
          <button
            className={styles.btnTheme}
            type="button"
            onClick={() => handleToggleTheme("light")}
          >
            ☀️
          </button>
        )}
        {selectedTheme !== "dark" && (
          <button
            className={styles.btnTheme}
            type="button"
            onClick={() => handleToggleTheme("dark")}
          >
            🌙
          </button>
        )}

        <button className={styles.btnSelectedTheme} type="button">
          {selectedTheme === "light" ? "☀️" : "🌙"}
        </button>
      </div>
    </div>
  );
};

export default SideBar;

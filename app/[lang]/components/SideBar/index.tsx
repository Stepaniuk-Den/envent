"use client";

import { useState } from "react";
import styles from "./sidebar.module.scss";
import { usePathname, useRouter } from "next/navigation";
// import Link from "next/link";
import { i18n, type Locale } from "@/i18n-config";

const SideBar = () => {
  const languages = [
    {
      lang: "en",
      label: "EN",
    },
    {
      lang: "uk",
      label: "UA",
    },
  ];
  const [selectedLang, setSelectedLang] = useState<Locale>("en");
  const [selectedTheme, setSelectedTheme] = useState("light");
  const pathName = usePathname();
  const router = useRouter();

  const redirectedPathName = (locale: Locale) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  const handleLangChange = (newLang: { lang: string; label: string }) => {
    setSelectedLang(newLang.lang as Locale);
    const newPath = redirectedPathName(newLang.lang as Locale);
    router.push(newPath);
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
          .filter((lang) => lang.lang !== selectedLang)
          .map((lang) => (
            <button
              key={lang.lang}
              className={styles.sideBarLangBtn}
              type="button"
              onClick={() => handleLangChange(lang)}
            >
              {lang.label}
            </button>
          ))}

        <button className={styles.sideBarBtnSelected} type="button">
          {languages.find((lang) => lang.lang === selectedLang)?.label}
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

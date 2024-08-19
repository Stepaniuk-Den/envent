"use client";

import { useState, useTransition } from "react";
import styles from "./sidebar.module.scss";
import { usePathname, useRouter } from "@/navigation";
import { useLocale } from "next-intl";
import { Locale } from "@/types";
import { useParams } from "next/navigation";
import { useClickOutside } from "@/helpers/useClickOutside";

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
  const [isBtnLangVisible, setBtnLangVisible] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState("light");
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();
  const params = useParams();
  const ref = useClickOutside(() => setBtnLangVisible(false));

  function onSelectChange(lang: string) {
    const nextLocale = lang as Locale;
    startTransition(() => {
      router.replace(
        {
          pathname,
          // @ts-expect-error -- TypeScript will validate that only known `params`
          // are used in combination with a given `pathname`. Since the two will
          // always match for the current route, we can skip runtime checks.
          params,
        },
        { locale: nextLocale }
      );
    });
  }

  const handleToggleTheme = (newTheme: string) => {
    setSelectedTheme(newTheme);
    document.body.classList.remove("light-theme", "dark-theme");
    document.body.classList.add(`${newTheme}-theme`);
  };

  return (
    <div className={styles.sideBarContainer}>
      <div className={styles.sideBarLangBtnsWrapper}>
        {languages
          .filter((lang) => lang.lang !== locale)
          .map((lang) => (
            <button
              key={lang.lang}
              className={`${styles.sideBarLangBtn} ${
                isBtnLangVisible ? styles.visible : ""
              }`}
              type="button"
              onClick={() => onSelectChange(lang.lang)}
              disabled={isPending}
            >
              {lang.label}
            </button>
          ))}

        <button
          ref={ref}
          className={`${styles.sideBarBtnSelected} ${
            isBtnLangVisible ? styles.no_radius : ""
          }`}
          type="button"
          onClick={() => setBtnLangVisible(!isBtnLangVisible)}
        >
          {languages.find((lang) => lang.lang === locale)?.label}
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

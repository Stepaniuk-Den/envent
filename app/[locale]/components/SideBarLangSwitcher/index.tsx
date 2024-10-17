"use client";

import { useState, useTransition } from "react";
import styles from "./sideBarLangSwitcher.module.scss";
import { usePathname, useRouter } from "@/navigation";
import { useLocale } from "next-intl";
import { locales } from "@/config";
import { useParams } from "next/navigation";
import { useClickOutside } from "@/helpers/useClickOutside";
import { IAriaLabelProps } from "@/helpers/interfaces";

type Locale = (typeof locales)[number];

const SideBarLangSwitcher: React.FC<{ ariaLabel: IAriaLabelProps }> = ({ ariaLabel }) => {
  
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
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();
  const params = useParams();
  const ref = useClickOutside(() => setBtnLangVisible(false));

  const {} = ariaLabel

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
  return (
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
            aria-label={ariaLabel.ariaLabel.btnSwitchLang}
            disabled={isPending}
          >
            {lang.label}
          </button>
        ))}

      <button
        ref={ref}
        className={`${styles.sideBarBtnSelected} ${
          isBtnLangVisible ? styles.active : ""
        }`}
        type="button"
        onClick={() => setBtnLangVisible(!isBtnLangVisible)}
        aria-label={ariaLabel.ariaLabel.btnLangCurrent}
      >
        {languages.find((lang) => lang.lang === locale)?.label}
      </button>
    </div>
  );
};

export default SideBarLangSwitcher;

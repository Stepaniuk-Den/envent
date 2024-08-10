"use client";

import { useEffect, useState } from "react";
import Navigation from "../Navigation";
import styles from "./header.module.scss";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contacts", href: "/contacts" },
];

export default function Header() {
  const [header, setHeader] = useState(false);

  const handleScrollHeader = () => {
    const remInPixels = parseFloat(
      getComputedStyle(document.documentElement).fontSize
    );
    const threshold = 7 * remInPixels;
    if (window.scrollY >= threshold) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollHeader);

    return () => {
      window.removeEventListener("scroll", handleScrollHeader);
    };
  }, []);

  return (
    <header
      className={`${styles.header} ${header ? styles.fixed : ""} container`}
    >
      <div className={styles.top}>
        <span className={styles.logo}>Envent</span>
      </div>
      <div className={styles.bottom}>
        <Navigation navLinks={navItems} />
      </div>
    </header>
  );
}

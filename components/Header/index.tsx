"use client";

import { motion, useTransform, useScroll } from "framer-motion";
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
  const { scrollY } = useScroll();
  const offsetY = [0, 200];
  const heightHeaderSizes = [200, 80];
  const heightTopSizes = [120, 0];

  const heightHeader = useTransform(scrollY, offsetY, heightHeaderSizes);
  const opacityTop = useTransform(scrollY, [0, 30], [1, 0]);
  const heightTop = useTransform(scrollY, [0, 120], heightTopSizes);

  return (
    <motion.header
      style={{
        height: heightHeader,
      }}
      className={`${styles.header} container`}
    >
      <motion.div
        style={{
          opacity: opacityTop,
          height: heightTop,
          padding: opacityTop,
        }}
        className={styles.top}
      >
        <span className={styles.logo}>Envent</span>
      </motion.div>
      <div className={styles.bottom}>
        <Navigation navLinks={navItems} />
      </div>
    </motion.header>
  );
}

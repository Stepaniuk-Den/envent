"use client";

import Link from "next/link";
import styles from "./navigation.module.scss";
import { usePathname } from "next/navigation";

type NavLink = {
  label: string;
  href: string;
};
type Props = {
  navLinks: NavLink[];
};

export default function Navigation({ navLinks }: Props) {
  const pathname = usePathname();
  return (
    <ul className={styles.nav}>
      {navLinks.map((link) => {
        const isActive = pathname === link.href;

        return (
          <li
            key={link.label}
            className={`${styles.link} ${isActive ? styles.active : ""}`}
          >
            <Link href={link.href}>{link.label}</Link>
          </li>
        );
      })}
    </ul>
  );
}

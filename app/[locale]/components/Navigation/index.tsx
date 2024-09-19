"use client";

import styles from "./navigation.module.scss";
import { useSelectedLayoutSegment } from "next/navigation";
// import dynamic from "next/dynamic";
import { HeaderT } from "@/messages/types/HeaderT";
import { Link } from "@/navigation";

const Navigation: React.FC<{
  translations: HeaderT["navlink"];
  onClick?: () => void;
}> = ({ translations, onClick }) => {
  const navItems = Object.entries(translations);
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : "/";
  return (
    <ul className={styles.nav}>
      {navItems.map(([key, { label, href }]) => {
        const isActive = pathname === href;

        return (
          <li
            onClick={onClick}
            key={key}
            className={`${styles.link} ${isActive ? styles.active : ""}`}
          >
            <Link href={href}>{label}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Navigation;
// export default dynamic(() => Promise.resolve(Navigation), { ssr: false });

"use client";
import Link from "next/link";
import styles from "./navigation.module.scss";
// import { useState } from "react";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import { navItems } from "../../data/NavItems";

// type NavLink = {
//   label: string;
//   href: string;
// };
// type Props = {
//   navLinks: NavLink[];
// };

const Navigation = () => {
  const pathname = usePathname();

  // const isActive = navItems.findIndex((item) => pathname === item.href);
  // const [activeIndex, setActive] = useState<number>(isActive);

  return (
    <ul className={styles.nav}>
      {/* {navItems.map((link, index) => { */}
      {navItems.map((link) => {
        const isActive = pathname === link.href;
        // const isSelected = activeIndex === index;

        return (
          <li
            key={link.label}
            className={`${styles.link} ${isActive ? styles.active : ""}`}
          >
            <Link href={link.href}>
              {/* <Link href={link.href} onClick={() => setActive(index)}> */}
              {link.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

// export default Navigation;
export default dynamic(() => Promise.resolve(Navigation), { ssr: false });

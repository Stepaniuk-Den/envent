"use client";
import { motion, LayoutGroup } from "framer-motion";
import Link from "next/link";
import styles from "./navigation.module.scss";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";

type NavLink = {
  label: string;
  href: string;
};
type Props = {
  navLinks: NavLink[];
};

const Navigation = ({ navLinks }: Props) => {
  const pathname = usePathname();
  const isActive = navLinks.findIndex((item) => pathname === item.href);
  // console.log("isActive - ", isActive);
  const [activeIndex, setActive] = useState(isActive);
  useEffect(() => {
    setActive(isActive);
  }, [isActive]);
  // const isActive = pathname === link.href;
  console.log("pathname - ", pathname);
  console.log("navLinks - ", navLinks);
  const ActiveLine = () => {
    return (
      <motion.div
        layoutId="activeLine"
        style={{
          width: "100%",
          height: "4px",
          position: "absolute",
          bottom: "4px",
          backgroundColor: "rgba(255, 180, 0, 1)",
          borderRadius: "2px",
        }}
      ></motion.div>
    );
  };
  return (
    <ul className={styles.nav}>
      <LayoutGroup>
        {navLinks.map((link, index) => {
          const isSelected = activeIndex === index;

          return (
            <motion.li
              key={link.label}
              className={styles.link}
              onClick={() => setActive(index)}
              initial={{ color: "rgba(102, 102, 102, 1)" }}
              animate={{
                color: isSelected
                  ? "rgba(255, 180, 0, 1)"
                  : "rgba(102, 102, 102, 1)",
              }}
            >
              {isSelected && <ActiveLine />}
              <Link href={link.href} onClick={() => setActive(index)}>
                {link.label}
              </Link>
            </motion.li>
          );
        })}
      </LayoutGroup>
    </ul>
  );
};

export default dynamic(() => Promise.resolve(Navigation), { ssr: false });

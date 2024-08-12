"use client";

import styles from "./logoList.module.scss";

import Image from "next/image";
import dynamic from "next/dynamic";
import { motion, useTransform, useScroll } from "framer-motion";

// interface IImage {
//   id: number;
//   src: string;
//   alt: string;
// }

// interface Props {
//   logoItems: IImage[];
// }

const LogoList = () => {
  const { scrollY } = useScroll();
  const offsetY = [0, 200];
  const x = [0, 300];
  const y = [0, 200];

  const moveX = useTransform(scrollY, offsetY, x);

  return (
    <ul className={styles.list}>
      {/* {logoItems.map((item) => {
        const { id, src, alt } = item;

        return (
          <motion.li key={id} className={styles.item}>
            <Image src={src} alt={alt} width={97} height={56} />
          </motion.li>
        );
      })} */}
    </ul>
  );
};
export default dynamic(() => Promise.resolve(LogoList), { ssr: false });

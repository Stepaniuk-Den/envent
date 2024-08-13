"use client";

import { ILineProps } from "@/helpers/interfaces";
import styles from "./line.module.scss";

const Line: React.FC<ILineProps> = ({ className }) => {
  return <span className={`${styles.line} ${styles[className]}`}></span>;
};
export default Line;

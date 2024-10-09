"use client"

import Link from "next/link";
import MainButton from "../Buttons/MainButton";
import styles from "./error404.module.scss";
import ArrowLeft from "@/public/icons/arrow-left.svg";
import dynamic from "next/dynamic";

const ImageSlices = dynamic(() => import("../ImageSlices"), { ssr: false });

const Error404 = () => {
  
  return (
    <div className={`${styles.not_found_container}`}>
        <ImageSlices />
        <div className={styles.not_found_wrapper}>
          <p className={styles.not_found_text}>Ой,щось пішло не так</p>
        <MainButton type="button" color="filled" className="services">
          <ArrowLeft />
          <Link href="/">Назад</Link>
        </MainButton></div>

        </div>
  );
};

export default Error404;

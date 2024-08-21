"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { RiverMall } from "@/helpers/imagesImport";
import { IDescriptionProps } from "@/helpers/interfaces";
import styles from "./description.module.scss";
import Image from "next/image";
import ButtonVariableColor from "../Buttons/ButtonVariableColor";
import Line from "../Line";
import MainButton from "../Buttons/MainButton";

const Description = ({ t, language }: IDescriptionProps & { language: string }) => {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 0.2], [-100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  // const imageMotion = {
  //   hidden: { x: -100, opacity: 0 },
  //   visible: {
  //     x: 0,
  //     opacity: 1,
  //     transition: { duration: 2 },
  //   },
  // };

  const languageClass = language === 'uk' ? styles.ua_content : "";

  return (
    <section className={`${styles.description} container`}>
      <div className={styles.description_container}>
        {/* <motion.div
          className={styles.thumb}
          initial="hidden"
          animate="visible"
          variants={imageMotion}
        > */}
        <motion.div className={styles.thumb} style={{ x, opacity }}>
          <Image priority src={RiverMall} alt="riverMall image" />
        </motion.div>
        {/* <div  className={styles.thumb}>
        <Image
            priority
            src={RiverMall}
            alt="riverMall image"
          />
        </div> */}

        <div className={styles.description_wrapper}>
          <div className={`${styles.content} ${languageClass}`}>
            <h2 className={styles.title}>
              {t.title}</h2>
            <Line className="yellow-left" />
            <div className={styles.description_text_container}>
              <div className={styles.left_text_container}>
                <p className={styles.text}>
                 {t.firstDescr}
                </p>
                <p className={styles.text}>
               {t.secondDescr}
                </p>
              </div>
              <div className={styles.right_text_container}>
                <p className={styles.text}>
                {t.thirdDescr}
                </p>
                <MainButton className="description">{t.button}</MainButton>
              </div>
            </div>
          </div>
          <ButtonVariableColor
            className="blue_dark"
            firstChildren={
              <>
                <p className={styles.description_year}>12</p>
                <p className={`${styles.description_text} ${styles.fix_width}`}>
                  {t.years}
                </p>
              </>
            }
            secondChildren={
              <>
                <p className={styles.description_project}>250</p>
                <p className={styles.description_text}>{t.projects}</p>
              </>
            }
          ></ButtonVariableColor>
        </div>
      </div>
    </section>
  );
};
export default Description;

"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { RiverMall } from "@/helpers/imagesImport";
import { IDescriptionProps } from "@/helpers/interfaces";
import { useRef } from "react";
import styles from "./description.module.scss";
import Image from "next/image";
import ButtonVariableColor from "../Buttons/ButtonVariableColor";
import Line from "../Line";
import MainButton from "../Buttons/MainButton";
import AnimatedTitle from "../AnimatedTitle";
import { Link } from "@/navigation";
import { useMediaQuery } from "react-responsive";

const Description = ({
  t,
  language,
}: IDescriptionProps & { language: string }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const x = useTransform(scrollYProgress, [0.2, 0.8], [-200, 0]);
  const opacity = useTransform(scrollYProgress, [0.3, 0.8], [0, 1]);
  // const { scrollY } = useScroll(); // 1 variant (tracking in pixels)
  // const x = useTransform(scrollY, [200, 500], [-200, 0]); // 1 variant
  // const opacity = useTransform(scrollY, [200, 500], [0, 1]); // 1 variant

  const isMobile = useMediaQuery({ maxWidth: 767.98 });

  const languageClass = language === "uk" ? styles.ua_content : "";

  return (
    <section ref={ref} className={`${styles.description} container`}>
      <div className={styles.description_container}>
        <motion.div
          className={styles.thumb}
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          }}
        >
          <Image priority src={RiverMall} alt="riverMall image" />
        </motion.div>

        <div className={styles.description_wrapper}>
          <div className={`${styles.content} ${languageClass}`}>
            <AnimatedTitle title={t.title} className={styles.descr_title} />
            <Line className="yellow-left" />
            <div className={styles.description_text_container}>
              {/* <div className={styles.left_text_container}> */}
                <p className={styles.text}>{t.firstDescr}</p>
                {/* <p className={styles.text}>{t.secondDescr}</p> */}
                <p className={styles.text}>{t.thirdDescr}</p>
              {/* </div> */}
              {/* <div className={styles.right_text_container}> */}
                {/* <p className={styles.text}>{t.thirdDescr}</p> */}
                <p className={styles.text}>{t.secondDescr}</p>

                <MainButton className="description">
                  <Link href="/about">{t.button}</Link>
                </MainButton>
              {/* </div> */}
            </div>
          </div>
          {!isMobile && (
             <ButtonVariableColor
             className="blue_dark"
             firstChildren={
               <>
                 <p className={styles.description_year}>32</p>
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
          )}
         
        </div>
      </div>
    </section>
  );
};
export default Description;

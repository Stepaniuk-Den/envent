"use client";

import { RiverMall } from "@/helpers/imagesImport";
import { IDescriptionProps } from "@/helpers/interfaces";
import { Link } from "@/navigation";
import { useMediaQuery } from "react-responsive";
import { useAfterLoad } from "@/helpers/useAfterLoad";
import styles from "./description.module.scss";
import Image from "next/image";
import ButtonVariableColor from "../Buttons/ButtonVariableColor";
import Line from "../Line";
import MainButton from "../Buttons/MainButton";
import AnimatedTitle from "../AnimatedTitle";
import Observer from "@/helpers/observer";

const Description = ({
  t,
}: IDescriptionProps) => {

  const isMobile = useMediaQuery({ maxWidth: 767.98 });
  const isPageLoaded = useAfterLoad();


  return (
    <section className={`${styles.description} `}>
      <div className={`${styles.description_container} container`}>
        <Observer
          x={-200}
          duration="1500ms"
          threshold={0.3}
          opacity={0}
          scale={1}
          className={styles.thumb}
        >
          <Image priority src={RiverMall} alt="riverMall image" />
        </Observer>
        <div className={styles.description_wrapper}>
          <div className={styles.content}>
            <AnimatedTitle title={t.title} className={styles.descr_title} />
            <Line className="yellow-left" />
            <div className={styles.description_text_container}>
            <Observer y={50} duration="300ms" threshold={0.5}> 
              <p className={styles.text}>{t.firstDescr}</p></Observer>
              <Observer y={50} duration="300ms" threshold={0.5}>
              <p className={styles.text}>{t.thirdDescr}</p></Observer>
              <Observer y={50} duration="300ms" threshold={0.5}>
              <p className={styles.text}>{t.secondDescr}</p></Observer>
              <MainButton className="description">
                <Link href="/about">{t.button}</Link>
              </MainButton>
            </div>
          </div>
          {isPageLoaded && !isMobile && (
            <ButtonVariableColor
              className="blue_dark"
              firstChildren={
                <>
                  <p className={styles.description_year}>32</p>
                  <p
                    className={`${styles.description_text} ${styles.fix_width}`}
                  >
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

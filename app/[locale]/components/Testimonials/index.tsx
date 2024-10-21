"use client";

import { useState} from "react";
import { IAriaLabelProps, ITestimonialsProps } from "@/helpers/interfaces";
import { handleNext, handlePrev } from "@/helpers/useClickPrevAndNext";
import Image from "next/image";
import styles from "./testimonials.module.scss";
import BackdropButton from "../Buttons/BackdropButton";
import ArrowLeft from "@/public/icons/arrow-left.svg";
import ArrowRight from "@/public/icons/arrow-right.svg";
import Line from "../Line";
import Observer from "@/helpers/observer";

const Testimonials:React.FC<{ t: ITestimonialsProps,ariaLabel:IAriaLabelProps }> = ({t,ariaLabel}) => {
  const itemsList = Object.values(t.items);

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const currentTestimonial =
    currentIndex !== null ? itemsList[currentIndex] : null;

  return (
    <section   
      className={`${styles.testimonials} container`}
    >
       <Observer
      y={300}
      duration="1000ms"
      threshold={0.1}
      opacity={0}
      scale={1}
      className={styles.wrapper}
    >
      <ul className={styles.list}>
        <li className={styles.item}>
          <h3 className={styles.title}>
            <span className={styles.top_subtitle}>{t.title}</span>
            <span className={styles.bottom_subtitle}>{t.subtitle}</span>
          </h3>
          <Line className="yellow-center" />

          <div className={styles.testimonialItem}>
            <div className={styles.navigation}>
              <BackdropButton
                className={styles.btn_testimonials}
                onClick={() =>
                  handlePrev({
                    currentIndex,
                    setCurrentIndex,
                    array: itemsList,
                  })
                }
                type="button"
                ariaLabel={ariaLabel.ariaLabel.btnPrev}
              >
                <ArrowLeft />
              </BackdropButton>
              {currentTestimonial && (
                <Image
                  src={currentTestimonial.image}
                  alt={currentTestimonial.fullName}
                  width={160}
                  height={160}
                />
              )}
              <BackdropButton
                className={styles.btn_testimonials}
                onClick={() =>
                  handleNext({
                    currentIndex,
                    setCurrentIndex,
                    array: itemsList,
                  })
                }
                type="button"
                ariaLabel={ariaLabel.ariaLabel.btnNext}
              >
                <ArrowRight />
              </BackdropButton>
            </div>
            {currentTestimonial && (
              <div className={styles.text_container}>
                <p className={styles.text}>{currentTestimonial.text}</p>
                <h4 className={styles.full_name}>
                  {currentTestimonial.fullName}
                </h4>
              </div>
            )}
          </div>
        </li>
      </ul>
      </Observer>
    </section>
  );
};

export default Testimonials;

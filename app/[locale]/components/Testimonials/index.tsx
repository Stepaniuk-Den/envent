"use client";

import { useState, useRef } from "react";
import { ITestimonialsProps } from "@/helpers/interfaces";
import { motion, useScroll, useTransform } from "framer-motion";
import { handleNext, handlePrev } from "@/helpers/useClickPrevAndNext";
import Image from "next/image";
import styles from "./testimonials.module.scss";
import BackdropButton from "../Buttons/BackdropButton";
import ArrowLeft from "@/public/icons/arrow-left.svg";
import ArrowRight from "@/public/icons/arrow-right.svg";
import Line from "../Line";

const Testimonials = ({ t }: ITestimonialsProps) => {
  const itemsList = Object.values(t.items);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const y = useTransform(scrollYProgress, [0.2, 0.5], [200, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  const currentTestimonial =
    currentIndex !== null ? itemsList[currentIndex] : null;

  return (
    <section   
      className={`${styles.testimonials} container`}
    >
      <motion.div className={`${styles.wrapper}`} ref={ref} style={{ y, opacity }}>
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
                aria-label="Swipe to previous"
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
                aria-label="Swipe to next"
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
      </motion.div>
    </section>
  );
};

export default Testimonials;

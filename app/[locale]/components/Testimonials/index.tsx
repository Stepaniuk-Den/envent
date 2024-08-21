"use client";

import { useState } from "react";
import { ITestimonialsProps } from "@/helpers/interfaces";
import Image from "next/image";
import styles from "./testimonials.module.scss";
import BackdropButton from "../Buttons/BackdropButton";
import ArrowLeft from "@/public/icons/arrow-left.svg";
import ArrowRight from "@/public/icons/arrow-right.svg";

const Testimonials = ({ t }: ITestimonialsProps) => {
  const itemsArray = Object.values(t.items);
  const [currentIndex, setCurrentIndex] = useState(0);

const handleNext = () => {
    if (currentIndex !== null) {
      setCurrentIndex((prevIndex) => (prevIndex! + 1) % itemsArray.length);
    }
  };
  const handlePrev = () => {
    if (currentIndex !== null) {
      setCurrentIndex((prevIndex) =>
        prevIndex! === 0 ? itemsArray.length - 1 : prevIndex! - 1
      );
    }
  };

  const currentTestimonial = itemsArray[currentIndex];

  return (
    <section className={`${styles.testimonials} container`}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <h3 className={styles.title}>
            <span className={styles.top_subtitle}>{t.title}</span>
            <span className={styles.bottom_subtitle}>{t.subtitle}</span>
          </h3>
        
        <div className={styles.testimonialItem}>
            <div className={styles.navigation}>
            <BackdropButton
                  className={styles.btn_testimonials}
                  onClick={handlePrev}
                  type="button"
                  aria-label="Swipe to previous"
                >
                  <ArrowLeft />
                </BackdropButton>
                <Image
            src={currentTestimonial.image}
            alt={currentTestimonial.fullName}
            width={160}
            height={160}
          />
          <BackdropButton
                  className={styles.btn_testimonials}
                  onClick={handleNext}
                  type="button"
                  aria-label="Swipe to next"
                >
                  <ArrowRight/>
                </BackdropButton>
            </div>
          <div className={styles.text_container}>
          <p className={styles.text}>{currentTestimonial.text}</p>
          <h4 className={styles.full_name}>{currentTestimonial.fullName}</h4>
          </div>
        </div>
        </li>
      </ul>
    </section>
  );
};

export default Testimonials;

"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { PropsServiceCard } from "@/helpers/interfaces";
import { useCarouselServiceStore } from "@/stores/carousel-service-store";
import Image from "next/image";
import ButtonVariableColor from "../Buttons/ButtonVariableColor";
import MainButton from "../Buttons/MainButton";
import Link from "next/link";
import styles from "./serviceCard.module.scss";
import AnimatedTitle from "../AnimatedTitle";
import Line from "../Line";

const ServiceCard = ({ t, serviceId,language }: { t: PropsServiceCard, serviceId: number,language: string }) => {
  const {
    slug,
    secondBtn,
    alignRight = false,
    hero,
    imgCard,
  } = t;

  const { update } = useCarouselServiceStore();

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start center"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [300, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  const imagesList = Object.entries(imgCard)

  const handleClick = () => {
    update({ id: serviceId });
  };

  return (
    <motion.li
      ref={ref}
      className={`${styles.service_card} ${
        alignRight ? styles.right_aligned : styles.left_aligned
      }`}
      style={{ y, opacity }}
    >
      <div
        className={`${styles.container} ${
          alignRight ? styles.right_padding : styles.left_padding
        }`}
      >
        <div className={styles.wrapper_title}>
          <AnimatedTitle title={hero.title} className={styles.services_title} />
          <Line className="yellow-left" />
        </div>
        <p className={styles.text}>{hero.description}</p>
        <div className={styles.wrapper_img}>
        {imagesList.map(([key, image]) => (
            <div key={`${serviceId}-${image.id}`} className={styles.thumb}>
              <Image src={`${image.src}?v=1`} alt={image.alt} width={220} height={160} />
            </div>
          ))}
        </div>
      </div>
      <ButtonVariableColor
        className="dark_blue"
        firstChildren={
          <MainButton className={language === "uk" ? "services" : ""} color="white">
            <Link href="/about">{hero.button}</Link>
          </MainButton>
        }
        secondChildren={
          <MainButton className={language === "uk" ? "services" : ""} color="white" 
          onClick={handleClick}
          >
            <Link href={`/services/${slug}`}>{secondBtn}</Link>
          </MainButton>
        }
      ></ButtonVariableColor>
    </motion.li>
  );
};

export default ServiceCard;

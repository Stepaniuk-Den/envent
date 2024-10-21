"use client";

import { PropsServiceCard } from "@/helpers/interfaces";
import { useCarouselServiceStore } from "@/stores/carousel-service-store";
import Image from "next/image";
import ButtonVariableColor from "../Buttons/ButtonVariableColor";
import MainButton from "../Buttons/MainButton";
import Link from "next/link";
import styles from "./serviceCard.module.scss";
import AnimatedTitle from "../AnimatedTitle";
import Line from "../Line";
import Observer from "@/helpers/observer";
import { useMediaQuery } from "react-responsive";

const ServiceCard = ({
  t,
  serviceId,
  language,
}: {
  t: PropsServiceCard;
  serviceId: number;
  language: string;
}) => {
  const { slug, secondBtn, alignRight = false, hero, imgCard } = t;
  const isLandscape = useMediaQuery({ orientation: "landscape" });

  const { update } = useCarouselServiceStore();

  const imagesList = Object.entries(imgCard);

  const handleClick = () => {
    update({ id: serviceId });
  };

  return (
    <Observer
      type={true}
      y={300}
      duration="700ms"
      threshold={isLandscape ? 0 : 0.3}
      rootMargin={isLandscape ? "20%" : "0px"}
      opacity={0}
      scale={1}
      className={`${styles.service_card} ${
        alignRight ? styles.right_aligned : styles.left_aligned
      }`}
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
              <Image
                src={`${image.src}?v=1`}
                alt={image.alt}
                width={220}
                height={160}
              />
            </div>
          ))}
        </div>
      </div>
      <ButtonVariableColor
        className="dark_blue"
        firstChildren={
          <MainButton
            className={language === "uk" ? "services" : ""}
            color="white"
          >
            <Link href="/about">{hero.button}</Link>
          </MainButton>
        }
        secondChildren={
          <MainButton
            className={language === "uk" ? "services" : ""}
            color="white_allways"
            onClick={handleClick}
          >
            <Link href={`/services/${slug}`}>{secondBtn}</Link>
          </MainButton>
        }
      ></ButtonVariableColor>
    </Observer>
  );
};

export default ServiceCard;

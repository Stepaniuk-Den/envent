"use client";

import { motion } from "framer-motion";
import styles from "./description.module.scss";
import Image from "next/image";
import ButtonVariableColor from "../ButtonVariableColor";
import Line from "../Line";
import { RiverMall } from "@/helpers/imagesImport";

const Description = () => {
  const imageMotion = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 2 },
    },
  };

  return (
    <section className={`${styles.description} container`}>
      <div className={styles.description_container}>
        <motion.div
          className={styles.thumb}
          initial="hidden"
          animate="visible"
          variants={imageMotion}
        >
          <Image
            priority
            src={RiverMall}
            alt="riverMall image"
            width={440}
            height={730}
          />
        </motion.div>
        <div className={styles.description_wrapper}>
        <div className={styles.content}>
          <h2 className={styles.title}>No Project Too Big Or Too Small</h2>
          <Line className="yellow-left"/>
          <div className={styles.description_text}>
            <p className={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien,
              dignissim tristique tellus sed faucibus nullam. Tincidunt mauris
              ut quam sed mauris proin feugiat. Scelerisque lorem posuere
              iaculis nunc amet phasellus.
              Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Sapien, dignissim tristique tellus
              sed faucibus nullam.{" "}
            </p>
            <p className={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien,
              dignissim tristique tellus sed faucibus nullam. Tincidunt mauris
              ut quam sed mauris proin feugiat. Scelerisque lorem posuere
              iaculis nunc amet phasellus.
            </p>
          </div>
          </div>
          <div className={styles.description_items}>
            <ButtonVariableColor className="blue_dark">
              <p className={styles.description_year}>12</p>
              <p className={`${styles.description_text} ${styles.fix_width}`}>years established</p>
            </ButtonVariableColor>
            <ButtonVariableColor className="dark-white">
              <p className={styles.description_project}>250</p>
              <p className={styles.description_text}>completed projects</p>
            </ButtonVariableColor>
          </div>

        </div>
      </div>
    </section>
  );
};
export default Description;


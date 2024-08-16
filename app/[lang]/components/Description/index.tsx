"use client";

import { motion, useTransform, useViewportScroll } from "framer-motion";
import styles from "./description.module.scss";
import Image from "next/image";
import ButtonVariableColor from "../Buttons/ButtonVariableColor";
import Line from "../Line";
import { RiverMall } from "@/helpers/imagesImport";
import MainButton from "../Buttons/MainButton";

const Description = () => {
  const { scrollYProgress } = useViewportScroll();
  const x = useTransform(scrollYProgress, [0, 1], [-100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  // const imageMotion = {
  //   hidden: { x: -100, opacity: 0 },
  //   visible: {
  //     x: 0,
  //     opacity: 1,
  //     transition: { duration: 2 },
  //   },
  // };

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
          <div className={styles.content}>
            <h2 className={styles.title}>No Project Too Big Or Too Small</h2>
            <Line className="yellow-left" />
            <div className={styles.description_text_container}>
              <div className={styles.left_text_container}>
                <p className={styles.text}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Sapien, dignissim tristique tellus sed faucibus nullam.
                  Tincidunt mauris ut quam sed mauris proin feugiat. Scelerisque
                  lorem posuere iaculis nunc amet phasellus.
                </p>
                <p className={styles.text}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Sapien, dignissim tristique tellus sed faucibus nullam.
                </p>
              </div>
              <div className={styles.right_text_container}>
                <p className={styles.text}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Sapien, dignissim tristique tellus sed faucibus nullam.
                  Tincidunt mauris ut quam sed mauris proin feugiat. Scelerisque
                  lorem posuere iaculis nunc amet phasellus.
                </p>
                <MainButton className="description">Learn More</MainButton>
              </div>
            </div>
          </div>
          <ButtonVariableColor
            className="blue_dark"
            firstChildren={
              <>
                <p className={styles.description_year}>12</p>
                <p className={`${styles.description_text} ${styles.fix_width}`}>
                  years established
                </p>
              </>
            }
            secondChildren={
              <>
                {" "}
                <p className={styles.description_project}>250</p>
                <p className={styles.description_text}>completed projects</p>
              </>
            }
          ></ButtonVariableColor>
        </div>
      </div>
    </section>
  );
};
export default Description;

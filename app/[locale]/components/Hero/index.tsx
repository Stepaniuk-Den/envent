"use client";

// import { motion, useScroll, useTransform } from "framer-motion";
import HeroTitle from "../HeroTitle";
import styles from "./hero.module.scss";
import { IHeroProps } from "@/helpers/interfaces";
// import { useRef } from "react";

const Hero = ({ className, imageSrc, children, t }: IHeroProps) => {
  const backgroundImage =
    typeof imageSrc === "string" ? imageSrc : imageSrc.src;

  // const ref = useRef(null);
  // const { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: ["start start", "end start"],
  // });

  // const y = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  // const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section
      // ref={ref}
      className={`${styles.hero} ${styles[className]}`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={`${styles.wrapper} container`}>
        <HeroTitle t={t} />
        {children}
      </div>
      {/* <motion.div style={{ y }} className={`${styles.wrapper} container`}>
        <HeroTitle t={t} />
        {children}
      </motion.div> */}
    </section>
  );
};
export default Hero;

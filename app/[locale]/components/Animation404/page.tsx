"use client"

import { useEffect, useRef } from "react";
import lottie from "lottie-web";
import styles from "./animation404.module.scss";

const Animation404 = () => {

    const animationContainer = useRef<HTMLDivElement | null>(null);
  const animationInstance = useRef<any>(null);

  useEffect(() => {
    if (animationContainer.current) {
      if (animationInstance.current) {
        animationInstance.current.destroy();
      }

      animationInstance.current = lottie.loadAnimation({
        container: animationContainer.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: "/Error404.json",
      });
    }

    return () => {
      if (animationInstance.current) {
        animationInstance.current.destroy();
      }
    };
  }, []);

    return (
        <div className={styles.animation_container}>
        <p className={styles.text}>4</p>
        <div className={styles.animation} ref={animationContainer}></div>
        <p className={styles.text}>4</p>
      </div>
    );
};

export default Animation404;
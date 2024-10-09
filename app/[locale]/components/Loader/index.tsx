"use client"

import { useEffect, useRef } from "react";
import styles from "./loader.module.scss";
import lottie from 'lottie-web';

const Loader = () => {
  const animationContainer = useRef<HTMLDivElement | null>(null);
  const animationInstance = useRef<any>(null);

  useEffect(() => {
    if (animationContainer.current) {
      if (animationInstance.current) {
        animationInstance.current.destroy();
      }

      animationInstance.current = lottie.loadAnimation({
        container: animationContainer.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '/Loader.json',
        // path: '/Loader_2.json',
      });
    }

    return () => {
      if (animationInstance.current) {
        animationInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className={styles.loader_container}>
      <div className={styles.loader} ref={animationContainer}></div>
    </div>
  );
};

export default Loader;

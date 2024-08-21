"use client";

import { IAboutUsCountedProps } from "@/helpers/interfaces";
import { useEffect, useState } from "react";
import styles from "./aboutUsCounted.module.scss";

const AboutUsCounted = ({ imageSrc, t }: IAboutUsCountedProps) => {
  const [finishedProjects, setFinishedProjects] = useState(0);
  const [ongoingProjects, setOngoingProjects] = useState(0);
  const [employees, setEmployees] = useState(0);

  useEffect(() => {
    startCounting(setFinishedProjects, 455);
    startCounting(setOngoingProjects, 120);
    startCounting(setEmployees, 150);
  }, []);

  const startCounting = (setCount: React.Dispatch<React.SetStateAction<number>>, target: number) => {
    let currentCount = 0;
    const increment = target / 100;

    const interval = setInterval(() => {
      currentCount += increment;
      if (currentCount >= target) {
        currentCount = target;
        clearInterval(interval);
      }
      setCount(Math.ceil(currentCount));
    }, 10);
  };

  return (
    <section
      style={{ backgroundImage: `url(${imageSrc.src})` }}
      className={`${styles.hero}`}
    >
      <div className={`${styles.wrapper} container`}>
        <h2 className={styles.title}>{t.title}</h2>
        <div className={styles.content}>
          <div className={styles.content_wrapper}>
            <p className={styles.count}>{finishedProjects}</p>
            <p className={styles.description}>{t.finishedProjects}</p>
          </div>
          <div className={styles.content_wrapper}>
            <p className={styles.count}>{ongoingProjects}</p>
            <p className={styles.description}>{t.ongoingProjects}</p>
          </div>
          <div  className={styles.content_wrapper}>
            <p className={styles.count}>{employees}</p>
            <p className={styles.description}>{t.employees}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsCounted;

"use client";

import { partners } from "@/data/PartnersItem";
import styles from "./partners.module.scss";

import { animate, motion, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";
import PartnerCard from "../PartnerCard";
import useMeasure from "react-use-measure";
import AnimatedTitle from "../AnimatedTitle";
import Line from "../Line";
import { IPartnersProps } from "@/helpers/interfaces";

const Partners = ({ t }: IPartnersProps) => {
  const FAST_DURATION = 25;
  const SLOW_DURATION = 110;

  const [duration, setDuration] = useState(FAST_DURATION);
  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);

  let [ref, { width }] = useMeasure();

  const xTranslation = useMotionValue(0);

  useEffect(() => {
    let controls;
    // - (move left)
    // width (width ul)
    // / 2 (number copies of ul)
    // - 10 (gap / 2 in ul styles)
    let finalPosition = -width / 2 - 10;

    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: "linear",
        duration: duration * (1 - xTranslation.get() / finalPosition),
        onComplete: () => {
          setMustFinish(false), setRerender(!rerender);
        },
      });
    } else {
      controls = animate(xTranslation, [0, finalPosition], {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      });
    }

    return controls?.stop;
  }, [width, xTranslation, duration, rerender]);
  return (
    <section className={`${styles.partners} container`}>
      <AnimatedTitle title={t.title} />
      <Line className="yellow-center" />
      <div className={styles.list_wrapper}>
        <motion.ul
          className={styles.list}
          ref={ref}
          style={{ x: xTranslation }}
          onHoverStart={() => {
            setDuration(SLOW_DURATION), setMustFinish(true);
          }}
          onHoverEnd={() => {
            setDuration(FAST_DURATION), setMustFinish(true);
          }}
        >
          {[...partners, ...partners].map((partner, index) => {
            return (
              <PartnerCard key={index} partner={partner} linkTitle={t.link} />
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
};

export default Partners;

"use client";

import { partners } from "@/data/PartnersItem";
import styles from "./partnersCarousel.module.scss";

import { animate, motion, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import PartnerCard from "../PartnerCard";
import useMeasure from "react-use-measure";
import AnimatedTitle from "../AnimatedTitle";
import Line from "../Line";
import { IPartnersProps } from "@/helpers/interfaces";
import useIsMobileDevice from "@/helpers/useIsMobileDevice";

const PartnersCarousel = ({ t }: IPartnersProps) => {
  const FAST_DURATION = 25;
  const SLOW_DURATION = 110;

  const [duration, setDuration] = useState(FAST_DURATION);
  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);
  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null);

  let [ref, { width }] = useMeasure();
  const listRef = useRef<HTMLDivElement | null>(null);

  const xTranslation = useMotionValue(0);
  const isMobileDevice = useIsMobileDevice();

  useEffect(() => {
    const handleTouchOutside = (event: TouchEvent) => {
      const target = event.target as HTMLElement;
      if (listRef.current && !listRef.current.contains(target)) {
        setDuration(FAST_DURATION);
        setMustFinish(true);
        setActiveCardIndex(null);
      }
    };

    document.addEventListener("touchstart", handleTouchOutside);

    return () => {
      document.removeEventListener("touchstart", handleTouchOutside);
    };
  }, []);

  useEffect(() => {
    // - (move left)
    // width (width ul)
    // / 2 (number copies of ul)
    // - 10 (gap / 2 in ul styles)
    const finalPosition = -width / 2 - 10;

    const controls = animate(
      xTranslation,
      [mustFinish ? xTranslation.get() : 0, finalPosition],
      {
        ease: "linear",
        duration: mustFinish
          ? duration * (1 - xTranslation.get() / finalPosition)
          : duration,
        repeat: mustFinish ? 0 : Infinity,
        onComplete: mustFinish
          ? () => {
              setMustFinish(false);
              setRerender(!rerender);
            }
          : undefined,
      }
    );

    return controls.stop;
  }, [width, xTranslation, duration, rerender, mustFinish]);

  return (
    <section className={styles.partners_section}>
      <div className={`${styles.partners} container`}>
        <AnimatedTitle title={t.title} />
        <Line className="yellow-center" />
        <div className={styles.list_wrapper} ref={listRef}>
          <motion.ul
            className={styles.list}
            ref={ref}
            style={{ x: xTranslation }}
            onHoverStart={
              !isMobileDevice
                ? () => {
                    setDuration(SLOW_DURATION), setMustFinish(true);
                  }
                : undefined
            }
            onHoverEnd={
              !isMobileDevice
                ? () => {
                    setDuration(FAST_DURATION), setMustFinish(true);
                  }
                : undefined
            }
            onTap={
              isMobileDevice
                ? () => {
                    setDuration(SLOW_DURATION), setMustFinish(true);
                  }
                : undefined
            }
          >
            {[...partners, ...partners].map((partner, index) => {
              return (
                <PartnerCard
                  key={index}
                  partner={partner}
                  linkTitle={t.link}
                  isMobile={isMobileDevice}
                  isActive={activeCardIndex === index}
                  onClick={() =>
                    setActiveCardIndex(activeCardIndex === index ? null : index)
                  }
                  index={index}
                />
              );
            })}
          </motion.ul>
        </div>
      </div>
    </section>
  );
};

export default PartnersCarousel;

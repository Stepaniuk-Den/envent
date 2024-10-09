"use client";

import BackdropButton from "../Buttons/BackdropButton";
import ArrowLeft from "@/public/icons/arrow-left.svg";
import ArrowRight from "@/public/icons/arrow-right.svg";
import styles from "./backdropButtonsPrevNext.module.scss";

interface Props {
  className?: string;
  position?: "fixed" | "absolute" | "";
  paginate: (newDirection: number) => void;
}

const BackdropButtonsPrevNext = ({
  className = "",
  position = "",
  paginate,
}: Props) => {
  return (
    <div className={className}>
      <BackdropButton
        className={`${styles.prevButton} ${styles[position]}`}
        onClick={(e: any) => {
          e.stopPropagation();
          paginate(-1);
        }}
        type="button"
        aria-label="Swipe to previous"
      >
        <ArrowLeft className={styles.ArrowLeftSVG} />
      </BackdropButton>
      <BackdropButton
        className={`${styles.nextButton} ${styles[position]}`}
        onClick={(e: any) => {
          e.stopPropagation();
          paginate(1);
        }}
        type="button"
        aria-label="Swipe to next"
      >
        <ArrowRight className={styles.ArrowRightSVG} />
      </BackdropButton>
    </div>
  );
};

export default BackdropButtonsPrevNext;

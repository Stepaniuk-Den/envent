"use client";

import { handleNext, handlePrev } from "@/helpers/useClickPrevAndNext";
import BackdropButton from "../Buttons/BackdropButton";
import ArrowLeft from "@/public/icons/arrow-left.svg";
import ArrowRight from "@/public/icons/arrow-right.svg";
import styles from "./imagesCarouselPrevNextButtons.module.scss";
import { Dispatch, SetStateAction } from "react";
import { IAriaLabelProps } from "@/helpers/interfaces";

interface IPrevNextButtonsProps {
  className?: string;
  position?: "fixed" | "absolute" | "";
  currentIndex: number;
  setCurrentIndex: Dispatch<SetStateAction<number>>;
  list: string[];
  ariaLabel: IAriaLabelProps;
}

const PrevNextButtons = ({
  className = "",
  position = "",
  currentIndex,
  setCurrentIndex,
  list,
  ariaLabel,
}: IPrevNextButtonsProps) => {
  return (
    <div className={className}>
      <BackdropButton
        className={`${styles.prevButton} ${styles[position]}`}
        onClick={() =>
          handlePrev({
            currentIndex,
            setCurrentIndex,
            array: list,
          })
        }
        type="button"
        ariaLabel={ariaLabel.ariaLabel.btnPrev}
        // ariaLabel="Swipe to previous"
      >
        <ArrowLeft className={styles.ArrowLeftSVG} />
      </BackdropButton>
      <BackdropButton
        className={`${styles.nextButton} ${styles[position]}`}
        onClick={() =>
          handleNext({
            currentIndex,
            setCurrentIndex,
            array: list,
          })
        }
        type="button"
        // ariaLabel="Swipe to next"
        ariaLabel={ariaLabel.ariaLabel.btnNext}
      >
        <ArrowRight className={styles.ArrowRightSVG} />
      </BackdropButton>
    </div>
  );
};

export default PrevNextButtons;

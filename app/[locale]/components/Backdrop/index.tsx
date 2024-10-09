import styles from "./backdrop.module.scss";
import { AnimatePresence, motion, wrap } from "framer-motion";
import ArrowLeft from "@/public/icons/arrow-left.svg";
import ArrowRight from "@/public/icons/arrow-right.svg";
import Close from "@/public/icons/close.svg";
import { useModal } from "@/helpers/useModal";
import Image from "next/image";
import BackdropButton from "../Buttons/BackdropButton";
import ReactPortal from "@/helpers/createPortal";
import { useEffect, useState } from "react";
import { IPropsProjectItem } from "@/helpers/interfaces";
import { handleCloseBackdrop } from "@/helpers/handleOpenAndCloseBackdrop";
import { handleNext, handlePrev } from "@/helpers/useClickPrevAndNext";
import BackdropButtonsPrevNext from "../BackdropButtonsPrevNext";
// import { wrap } from "popmotion";

interface IBackdropProps {
  //   children: React.ReactElement;
  //   imgList: IPropsProjectItem[];
  //   imgAlt: string[];
  imgList: string[];
  alt: string;
  currentIndex: number | null;
  setCurrentIndex: (currentIndex: number) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  //   src: string;
  //   direction: any;
  //   page: number;
  //   paginate: boolean;
  //   setPage: (page: number[]) => void;
}

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

const Backdrop = ({
  imgList,
  currentIndex,
  setCurrentIndex,
  isOpen,
  setIsOpen,
  //   src,
  //   imgAlt,
  alt,
}: //   direction,
//   page,
//   setPage,
IBackdropProps) => {
  const [[page, direction], setPage] = useState<number[]>([
    currentIndex ?? 0,
    0,
  ]);

  useEffect(() => {
    setPage([currentIndex ?? 0, 0]);
  }, [currentIndex]);

  //   const imageIndex = wrap(currentIndex || 0, imgList.length, page);
  const imageIndex = (page + imgList.length) % imgList.length;
  //   const imageAlt = wrap(currentIndex || 0, imgAlt.length, page);

  const paginate = (newDirection: number) => {
    // setPage([page + newDirection, newDirection]);
    const newIndex = (page + newDirection + imgList.length) % imgList.length;
    setPage([newIndex, newDirection]);
    setCurrentIndex(newIndex);
  };

  return (
    <ReactPortal wrapperId="react-portal-modal-container">
      <>
        <AnimatePresence mode="wait" initial={false} custom={direction}>
          {isOpen && currentIndex !== null && (
            <motion.div
              className={`${styles.backdrop} overlay`}
              //   initial={{ opacity: 0 }}
              //   animate={{ opacity: 1 }}
              //   exit={{ opacity: 0 }}
              //   ====
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ delay: isOpen ? 0.2 : 0, duration: 0.3 }}
              onAnimationComplete={() => {
                if (!isOpen) handleCloseBackdrop(setIsOpen);
              }}
              onClick={() => handleCloseBackdrop(setIsOpen)}
            >
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={page}
                  custom={direction}
                  variants={variants}
                  className={styles.modalContent}
                  //   initial={{ scale: 0.8, opacity: 0 }}
                  //   animate={{ scale: 1, opacity: 1 }}
                  //   exit={{ scale: 0.8, opacity: 0 }}
                  //   transition={{ delay: isOpen ? 0.2 : 0, duration: 0.3 }}
                  //   onAnimationComplete={() => {
                  //     if (!isOpen) handleCloseBackdrop(setIsOpen);
                  //   }}
                  //   onClick={(e) => e.stopPropagation()}
                  //   ==============================
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={1}
                  onDragEnd={(e, { offset, velocity }) => {
                    const swipe = swipePower(offset.x, velocity.x);

                    if (swipe < -swipeConfidenceThreshold) {
                      paginate(1);
                    } else if (swipe > swipeConfidenceThreshold) {
                      paginate(-1);
                    }
                  }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <Image
                    className={styles.images}
                    src={imgList[imageIndex]}
                    // alt={imgAlt[imageAlt]}
                    alt={alt}
                    fill={true}
                    sizes="(max-width: 767.98px) 460px, (max-width: 1023.98px) 660px, 800px"
                  />
                </motion.div>
              </AnimatePresence>

              <p className={styles.counter}>
                {imageIndex + 1} of {imgList.length}
              </p>
              <BackdropButton
                className={styles.closeButton}
                onClick={() => handleCloseBackdrop(setIsOpen)}
                type="button"
                aria-label="Close"
              >
                <Close className={styles.closeSVG} />
              </BackdropButton>

              {/* <BackdropButton
                className={styles.prevButton}
                // onClick={() =>
                //   handlePrev({
                //     currentIndex,
                //     setCurrentIndex,
                //     array: imgList,
                //   })
                // }
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
                className={styles.nextButton}
                // onClick={() =>
                //   handleNext({
                //     currentIndex,
                //     setCurrentIndex,
                //     array: imgList,
                //   })
                // }
                onClick={(e: any) => {
                  e.stopPropagation();
                  paginate(1);
                }}
                type="button"
                aria-label="Swipe to next"
              >
                <ArrowRight className={styles.ArrowRightSVG} />
              </BackdropButton> */}
              <BackdropButtonsPrevNext paginate={paginate} />
            </motion.div>
          )}
        </AnimatePresence>
      </>
    </ReactPortal>
  );
};

export default Backdrop;

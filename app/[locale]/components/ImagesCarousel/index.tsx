"use client";

import styles from "./imagesCarousel.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import MagnifyingGlass from "@/public/icons/magnifying-glass.svg";
import Close from "@/public/icons/close.svg";
import BackdropButton from "../Buttons/BackdropButton";
import useMeasure from "react-use-measure";
import PrevNextButtons from "../ImagesCarouselPrevNextButtons";

interface IImagesCarouselProps {
  [key: number]: {
    id: string;
    src: string;
    alt: string;
    title?: string;
    address?: string;
    link?: string;
  };
}

const ImagesCarousel: React.FC<{
  t: IImagesCarouselProps;
}> = ({ t }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const imagesList = Object.values(t);
  let [ref, { width }] = useMeasure();

  const handleOpenBackdrop = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };
  const handleCloseBackdrop = () => {
    setIsOpen(false);
  };

  const x = currentIndex ? width * currentIndex * -1 : 0;

  return (
    <div className={styles.carousel_container} ref={ref}>
      <motion.ul
        className={styles.list}
        style={{ width: imagesList.length * width, x }}
      >
        {imagesList.map((imagesItem, index) => {
          return (
            <li className={styles.item} key={index} style={{ width }}>
              <Image
                className={styles.img}
                src={imagesItem.src}
                alt={imagesItem.alt}
                fill={true}
                sizes="(max-width: 767.98px) 100vw, (max-width: 1279.98px) 50vw, 33vw"
              />
              <div className={styles.overlay_content}>
                <div className={styles.buttons_wrapper}>
                  <button
                    className={styles.magnifyingGlassBtn}
                    type="button"
                    onClick={() => handleOpenBackdrop(index)}
                  >
                    <MagnifyingGlass className={styles.magnifyingGlassIcon} />
                  </button>
                </div>
                <PrevNextButtons
                  list={imagesList}
                  currentIndex={currentIndex}
                  setCurrentIndex={setCurrentIndex}
                  position="absolute"
                />
              </div>
            </li>
          );
        })}
      </motion.ul>

      {/* ==== BACKDROP ==== */}
      <AnimatePresence mode="wait">
        {isOpen && currentIndex !== null && (
          <motion.div
            className={styles.backdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseBackdrop}
          >
            <motion.div
              className={styles.modalContent}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ delay: isOpen ? 0.2 : 0, duration: 0.3 }}
              onAnimationComplete={() => {
                if (!isOpen) handleCloseBackdrop();
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <BackdropButton
                className={styles.closeButton}
                onClick={handleCloseBackdrop}
                type="button"
                aria-label="Close"
              >
                <Close className={styles.closeSVG} />
              </BackdropButton>
              <PrevNextButtons
                list={imagesList}
                currentIndex={currentIndex}
                setCurrentIndex={setCurrentIndex}
              />
              <Image
                src={imagesList[currentIndex].src}
                alt={imagesList[currentIndex].alt}
                fill={true}
                sizes="80vw"
              />
              <p className={styles.counter}>
                {currentIndex + 1} of {imagesList.length}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default ImagesCarousel;

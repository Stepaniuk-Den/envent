"use client";

import styles from "./imagesCarousel.module.scss";
import { motion } from "framer-motion";
import { useCarouselAboutStore } from "@/stores/carousel-about-store";
import { useEffect, useState } from "react";
import Image from "next/image";
import MagnifyingGlass from "@/public/icons/magnifying-glass.svg";
import useMeasure from "react-use-measure";
import PrevNextButtons from "../ImagesCarouselPrevNextButtons";
import { IImageItem } from "@/helpers/interfaces";
import { useModal } from "@/helpers/useModal";
import Backdrop from "../Backdrop";

export interface IListCarouselProps {
  [key: number]: {
    images: Record<number, IImageItem>;
  };
}

const ImagesCarousel: React.FC<{
  t: IListCarouselProps;
  page: "services" | "about" | "";
  id?: number;
}> = ({ t, page, id }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [imagesList, setImagesList] = useState<IImageItem[]>([]);
  const [backdropImagesList, setBackdropImagesList] = useState<string[]>([]);
  let [ref, { width }] = useMeasure();

  const { keyImagesAbout } = useCarouselAboutStore();

  const aboutId = keyImagesAbout.id;

  useEffect(() => {
    const fetchImagesList = () => {
      const currentId =
        page === "about" ? aboutId : page === "services" ? id : 0;
      if (currentId !== undefined) {
        const currentImages = Object.values(t[currentId]?.images);
        const currentImagesList = currentImages
          .map((img) => img.src)
          .filter((item): item is string => !!item);
        setBackdropImagesList(currentImagesList);
        setImagesList(currentImages);
      }
      // if (page === "about") {
      //   if (aboutId !== undefined) {
      //     const currentImagesList = Object.values(t[aboutId]?.images)
      //       .map((img) => img.src)
      //       .filter((item): item is string => !!item);
      //     setBackdropImagesList(currentImagesList);
      //     setImagesList(Object.values(t[aboutId]?.images));
      //   }
      // } else if (page === "services" && id !== undefined) {
      //   const images = Object.values(t[id]?.images);
      //   // const images = t[id]?.images ? Object.values(t[id]?.images) : [];
      //   setImagesList(images);
      //   const currentImagesList = images
      //     .map((img) => img.src)
      //     .filter((item): item is string => !!item);
      //   setBackdropImagesList(currentImagesList);
      // }
    };

    fetchImagesList();
  }, [page, id, keyImagesAbout, t]);

  const handleOpenBackdrop = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const x = currentIndex ? width * currentIndex * -1 : 0;

  useEffect(() => {
    setCurrentIndex(0);
  }, [id, aboutId]);

  useModal(isOpen, setIsOpen);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const swipeThreshold = 50;

    if (distance > swipeThreshold) {
      setCurrentIndex((prevIndex) =>
        prevIndex < backdropImagesList.length - 1 ? prevIndex + 1 : 0
      );
    }

    if (distance < -swipeThreshold) {
      setCurrentIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : backdropImagesList.length - 1
      );
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <div className={styles.carousel_container} ref={ref}>
      <motion.ul
        className={styles.list}
        style={{ width: backdropImagesList.length * width, x }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
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
                  <PrevNextButtons
                    list={backdropImagesList}
                    currentIndex={currentIndex}
                    setCurrentIndex={setCurrentIndex}
                    position="absolute"
                  />
                </div>
              </div>
            </li>
          );
        })}
      </motion.ul>
      <Backdrop
        imgList={backdropImagesList}
        // imgAlt={recentImgAlt}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        alt="..."
      />

      {/* ==== BACKDROP ==== */}
      {/* <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            className={`${styles.backdrop}  overlay`}
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
                className={styles.images}
              />
              <p className={styles.counter}>
                {currentIndex + 1} of {imagesList.length}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence> */}
    </div>
  );
};
export default ImagesCarousel;

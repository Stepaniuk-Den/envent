"use client";

import styles from "./imagesCarousel.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import { useCarouselAboutStore } from "@/stores/carousel-about-store";
import { useCarouselServiceStore } from "@/stores/carousel-service-store";
import { useEffect, useState } from "react";
import Image from "next/image";
import MagnifyingGlass from "@/public/icons/magnifying-glass.svg";
import Close from "@/public/icons/close.svg";
import BackdropButton from "../Buttons/BackdropButton";
import useMeasure from "react-use-measure";
import PrevNextButtons from "../ImagesCarouselPrevNextButtons";
import { IImageItem } from "@/helpers/interfaces";
import { useModal } from "@/helpers/useModal";

export interface IListCarouselProps {
  [key: number]: {
    images: Record<number, IImageItem>;
  };
}

const ImagesCarousel: React.FC<{
  t: IListCarouselProps;
  page: "services" | "about" | "";
  //Додано id як необов'язковий пропс
  id?: number;
}> = ({ t, page, id }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  //Додано додатковий стейт для відстеження стану зображень
  const [imagesList, setImagesList] = useState<IImageItem[]>([]);
  let [ref, { width }] = useMeasure();

  const { keyImagesAbout } = useCarouselAboutStore();
  const { keyImagesService } = useCarouselServiceStore();

  // const id = page === "about" ? keyImagesAbout.id : keyImagesService.id;
  // const imagesList = Object.values(t[id as keyof typeof t].images);

  //Додано useEffect для відстеження зображень на різних сторінках 

  useEffect(() => {
    const fetchImagesList = () => {
      if (page === "about") {
        if (keyImagesAbout.id !== undefined) {
          const id = keyImagesAbout.id;
          setImagesList(Object.values(t[id]?.images || {}));
        }
      } else if (page === "services" && id !== undefined) {
        const images = t[id]?.images ? Object.values(t[id]?.images) : [];
        setImagesList(images);
      }
    };

    fetchImagesList();
  }, [page, id, keyImagesAbout, t]);

  const handleOpenBackdrop = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };
  const handleCloseBackdrop = () => {
    setIsOpen(false);
  };

  const x = currentIndex ? width * currentIndex * -1 : 0;

  useEffect(() => {
    setCurrentIndex(0);
  }, [id]);

  useModal(isOpen, setIsOpen);

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
      </AnimatePresence>
    </div>
  );
};
export default ImagesCarousel;

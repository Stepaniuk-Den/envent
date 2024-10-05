import { IHandleNavigationProps } from "./interfaces";

export const handleNext = <T>({
  // currentIndex,
  setCurrentIndex,
  array,
}: IHandleNavigationProps<T>) => {
  // if (currentIndex !== null) {
  setCurrentIndex((prevIndex) => (prevIndex! + 1) % array.length);
  // }
};
export const handlePrev = <T>({
  // currentIndex,
  setCurrentIndex,
  array,
}: IHandleNavigationProps<T>) => {
  // if (currentIndex !== null) {
  setCurrentIndex((prevIndex) =>
    prevIndex! === 0 ? array.length - 1 : prevIndex! - 1
  );
  // }
};

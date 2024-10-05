export const handleOpenBackdrop = (
  index: number,
  setCurrentIndex: (index: number) => void,
  setIsOpen: (isOpen: boolean) => void
) => {
  setCurrentIndex(index);
  setIsOpen(true);
};

export const handleCloseBackdrop = (setIsOpen: (isOpen: boolean) => void) => {
  setIsOpen(false);
};

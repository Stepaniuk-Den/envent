import { create } from "zustand";

interface CarouselItem {
  id: number;
}

interface CarouselStore {
  keyImagesAbout: CarouselItem;
  update: (keyImagesAbout: CarouselItem) => void;
}

export const useCarouselAboutStore = create<CarouselStore>((set) => ({
  keyImagesAbout: { id: 1 },
  update: (keyImagesAbout) => set(() => ({ keyImagesAbout })),
}));

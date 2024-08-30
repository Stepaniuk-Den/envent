import { create } from "zustand";

interface CarouselItem {
  id: number;
}

interface CarouselServiceStore {
  keyImagesService: CarouselItem;
  update: (keyImagesService: CarouselItem) => void;
}

export const useCarouselServiceStore = create<CarouselServiceStore>((set) => ({
  keyImagesService: { id: 1 },
  update: (keyImagesService) => set(() => ({ keyImagesService })),
}));

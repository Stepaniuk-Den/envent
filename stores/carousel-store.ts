import { create } from "zustand";

interface CarouselItem {
  id: number;
}

interface CarouselStore {
  keyImages: CarouselItem;
  update: (keyImages: CarouselItem) => void;
}

export const useCarouselStore = create<CarouselStore>((set) => ({
  keyImages: { id: 1 },
  update: (keyImages) => set(() => ({ keyImages })),
}));

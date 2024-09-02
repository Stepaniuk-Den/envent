// import { create } from "zustand";

// interface CarouselItem {
//   id: number;
// }

// interface CarouselServiceStore {
//   keyImagesService: CarouselItem;
//   update: (keyImagesService: CarouselItem) => void;
// }

// export const useCarouselServiceStore = create<CarouselServiceStore>((set) => ({
//   keyImagesService: { id: 1 },
//   update: (keyImagesService) => set(() => ({ keyImagesService })),
// }));

import { create } from "zustand";

interface CarouselItem {
  id: number;
}

interface CarouselServiceStore {
  keyImagesService: CarouselItem;
  update: (keyImagesService: CarouselItem) => void;
}

export const useCarouselServiceStore = create<CarouselServiceStore>((set) => ({
  keyImagesService: { id: Number(localStorage.getItem("carouselServiceId")) || 1 },
  update: (keyImagesService: CarouselItem) => {
    localStorage.setItem("carouselServiceId", String(keyImagesService.id));
    set(() => ({ keyImagesService }));
  },
}));

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

import { create, StateCreator } from "zustand";
import { persist, createJSONStorage, PersistOptions } from "zustand/middleware";

interface CarouselItem {
  id: number | null;
}

interface CarouselServiceStore {
  keyImagesService: CarouselItem;
  update: (keyImagesService: CarouselItem) => void;
}

type MyPersist = (
  config: StateCreator<CarouselServiceStore>,
  options: PersistOptions<CarouselServiceStore>
) => StateCreator<CarouselServiceStore>;


export const useCarouselServiceStore = create<CarouselServiceStore>(
  (persist as MyPersist)(
    (set) => ({
      keyImagesService: { id: null }, 
      update: (keyImagesService: CarouselItem) => set(() => ({ keyImagesService })),
    }),
    {
      name: 'carousel-service-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

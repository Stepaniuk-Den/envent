import { Translation } from "./Translation";
import { FullTranslation } from "./FullTranslation";

export class AboutPageT implements Translation {
  // This takes the key value of the namespace in the translation sheet.
  namespace?: keyof FullTranslation = "AboutPage";
  constructor() {}
  hero = {
    title: "",
    description: "",
    button: "",
  };
  about = {
    title: "",
    description: {
      p1: "",
      p2: "",
      p3: "",
      p4: "",
      p5: "",
    },
  };
  best = {
    title: "",
    list: {
      1: {
        images: {
          1: {
            id: "",
            src: "",
            alt: "",
            title: "",
            area_label: "",
          },
          2: {
            id: "",
            src: "",
            alt: "",
            title: "",
            area_label: "",
          },
          3: {
            id: "",
            src: "",
            alt: "",
            title: "",
            area_label: "",
          },
          4: {
            id: "",
            src: "",
            alt: "",
            title: "",
            area_label: "",
          },
          5: {
            id: "",
            src: "",
            alt: "",
            title: "",
            area_label: "",
          },
          6: {
            id: "",
            src: "",
            alt: "",
            title: "",
            area_label: "",
          },
        },
        title: "",
        description: "",
      },
      2: {
        images: {
          1: {
            id: "",
            src: "",
            alt: "",
            title: "",
            area_label: "",
          },
          2: {
            id: "",
            src: "",
            alt: "",
            title: "",
            area_label: "",
          },
          3: {
            id: "",
            src: "",
            alt: "",
            title: "",
            area_label: "",
          },
          4: {
            id: "",
            src: "",
            alt: "",
            title: "",
            area_label: "",
          },
          5: {
            id: "",
            src: "",
            alt: "",
            title: "",
            area_label: "",
          },
          6: {
            id: "",
            src: "",
            alt: "",
            title: "",
            area_label: "",
          },
        },
        title: "",
        description: "",
      },
      3: {
        images: {
          1: {
            id: "",
            src: "",
            alt: "",
            title: "",
            area_label: "",
          },
          2: {
            id: "",
            src: "",
            alt: "",
            title: "",
            area_label: "",
          },
          3: {
            id: "",
            src: "",
            alt: "",
            title: "",
            area_label: "",
          },
          4: {
            id: "",
            src: "",
            alt: "",
            title: "",
            area_label: "",
          },
          5: {
            id: "",
            src: "",
            alt: "",
            title: "",
            area_label: "",
          },
          6: {
            id: "",
            src: "",
            alt: "",
            title: "",
            area_label: "",
          },
        },
        title: "",
        description: "",
      },
    },
    buttons: {
      best: "",
      years: "",
      projects: "",
      workers: "",
      stuff: "",
    },
  };
  ceo = {
    name: "",
    quote: "",
  };
}

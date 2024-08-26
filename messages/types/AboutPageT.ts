import { Translation } from "./Translation";
import { FullTranslation } from "./FullTranslation";
import { ReactNode } from "react";

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
        title: "",
        description: "",
      },
      2: {
        title: "",
        description: "",
      },
      3: {
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

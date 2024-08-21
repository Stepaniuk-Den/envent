import { Translation } from "./Translation";
import { FullTranslation } from "./FullTranslation";

export class MainPageT implements Translation {
  // This takes the key value of the namespace in the translation sheet.
  namespace?: keyof FullTranslation = "MainPage";
  constructor() {}
  hero = {
    title: "",
    description: "",
    button: "",
  };
  descriptions = {};
  projects = {
    title: "",
    viewAll: "",
    // list: [] as IPropsProjectItem[],
    // list: {} as { [key: string]: IPropsProjectItem },
    list: {
      1: {
        id: "",
        src: "",
        alt: "",
        title: "",
        address: "",
        link: "",
      },
      2: {
        id: "",
        src: "",
        alt: "",
        title: "",
        address: "",
        link: "",
      },
      3: {
        id: "",
        src: "",
        alt: "",
        title: "",
        address: "",
        link: "",
      },
      4: {
        id: "",
        src: "",
        alt: "",
        title: "",
        address: "",
        link: "",
      },
      5: {
        id: "",
        src: "",
        alt: "",
        title: "",
        address: "",
        link: "",
      },
      6: {
        id: "",
        src: "",
        alt: "",
        title: "",
        address: "",
        link: "",
      },
    },
  };
}

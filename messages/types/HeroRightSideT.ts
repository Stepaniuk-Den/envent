import { Translation } from "./Translation";
import { FullTranslation } from "./FullTranslation";
export class HeroRightSideT implements Translation {
  // This takes the key value of the namespace in the translation sheet.
  namespace?: keyof FullTranslation = "HeroRightSide";
  constructor() {}
  services = {
    title: "",
    list: {
      designing: {
        svgName: "",
        title: "",
        descriptions: "",
      },
      production: {
        svgName: "",
        title: "",
        descriptions: "",
      },
      assembling: {
        svgName: "",
        title: "",
        descriptions: "",
      },
    },
  };
  todo = {
    title: "",
    list: {
      automation: {
        svgName: "",
        title: "",
        descriptions: "",
      },
      works: {
        svgName: "",
        title: "",
        descriptions: "",
      },
      services: {
        svgName: "",
        title: "",
        descriptions: "",
      },
    },
  };
  contact = {
    title: "",
    list: {
      office: {
        title: "",
        descriptions: "",
      },
      hours: {
        title: "",
        descriptions: "",
      },
      touch: {
        title: "",
        descriptions: "",
        mail: "",
        tel: "",
      },
    },
  };
}

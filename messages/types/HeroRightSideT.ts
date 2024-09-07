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
        href: "",
        svgName: "",
        title: "",
        descriptions: "",
      },
      production: {
        href: "",
        svgName: "",
        title: "",
        descriptions: "",
      },
      assembling: {
        href: "",
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
        href: "",
        svgName: "",
        title: "",
        descriptions: "",
      },
      works: {
        href: "",
        svgName: "",
        title: "",
        descriptions: "",
      },
      services: {
        href: "",
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

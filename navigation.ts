import { createLocalizedPathnamesNavigation } from "next-intl/navigation";
import { locales, pathnames, localePrefix } from "./config";
import { FullTranslation } from "./messages/types/FullTranslation";
import { Translation } from "./messages/types/Translation";

export const { Link, getPathname, redirect, usePathname, useRouter } =
  createLocalizedPathnamesNavigation({
    locales,
    pathnames,
    localePrefix,
  });
export class MainPageT implements Translation {
  // This takes the key value of the namespace in the translation sheet.
  namespace?: keyof FullTranslation = "MainPage";
  constructor() {}
  hero = {
    title: "",
    description: "",
    button: "",
  };
  descriptions = {
    title: "",
    firstDescr: "",
    secondDescr: "",
    thirdDescr: "",
    button: "",
    years: "",
    projects: "",
  };
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

  aboutUsCounted = {
    title: "",
    finishedProjects: "",
    ongoingProjects: "",
    employees: "",
  };

  testimonials = {
    title: "",
    subtitle: "",
    items: {
      1: {
        text: "",
        fullName: "",
        image: "",
      },
      2: {
        text: "",
        fullName: "",
        image: "",
      },
    },
  };
  videoSection = {
    title: "",
    text: "",
    aboutUs: "",
    phone: "",
    btnForm: "",
  };
}

import { Translation } from "./Translation";
import { FullTranslation } from "./FullTranslation";
import { IProjectCategory } from "@/helpers/interfaces";

export class ProjectsPageT implements Translation {
  namespace?: keyof FullTranslation = "ProjectsPage";
  constructor() {}

  hero = {
    title: "",
    description: "",
    button: "",
  };

  //   projects: {
  //     [categoryName: string]: IProjectCategory;
  //   } = {};

  projects = {
    administrativeBuildings: {
      category: "",
      linkCategory: "",
      projects: {
        sbu: {
          id: "",
          src: "",
          alt: "",
          title: "",
          link: "",
          address: "",
        },
        presidentAdministration: {
          id: "",
          src: "",
          alt: "",
          title: "",
          link: "",
          address: "",
        },
      },
    },
    publicFacilities: {
      category: "",
      linkCategory: "",
      projects: {
        dinamo: {
          id: "",
          src: "",
          alt: "",
          title: "",
          link: "",
          address: "",
        },
        hotel: {
          id: "",
          src: "",
          alt: "",
          title: "",
          link: "",
          address: "",
        },
      },
    },
    industry: {
      category: "",
      linkCategory: "",
      projects: {
        kraft: {
          id: "",
          src: "",
          alt: "",
          title: "",
          link: "",
          address: "",
        },
        alcoInvest: {
          id: "",
          src: "",
          alt: "",
          title: "",
          link: "",
          address: "",
        },
      },
    },
    tradeComplexes: {
      category: "",
      linkCategory: "",
      projects: {
        epicenter: {
          id: "",
          src: "",
          alt: "",
          title: "",
          address: "",
          link: "",
        },
        amstor: {
          id: "",
          src: "",
          alt: "",
          title: "",
          address: "",
          link: "",
        },
      },
    },
    hskc: {
      category: "",
      linkCategory: "",
      projects: {
        yalynka: {
          id: "",
          src: "",
          alt: "",
          title: "",
          link: "",
          address: "",
        },
        innovation: {
          id: "",
          src: "",
          alt: "",
          title: "",
          link: "",
          address: "",
        },
      },
    },
  };
}

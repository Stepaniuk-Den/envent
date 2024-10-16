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

  partners = {
    title: "",
    link: "",
  };

  error = {
    message:"",
    btnBack:"",
  }
}

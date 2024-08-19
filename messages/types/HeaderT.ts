import { Translation } from "./Translation";
import { FullTranslation } from "./FullTranslation";
export class HeaderT implements Translation {
  // This takes the key value of the namespace in the translation sheet.
  namespace?: keyof FullTranslation = "Header";
  constructor() {}
  navlink = {
    home: {
      label: "",
      href: "",
    },
    projects: {
      label: "",
      href: "",
    },
    about: {
      label: "",
      href: "",
    },
    services: {
      label: "",
      href: "",
    },
    contacts: {
      label: "",
      href: "",
    },
  };
  topList = {
    call_us: "",
    mail: "",
    working_hours: "",
    hours: "",
  };
}

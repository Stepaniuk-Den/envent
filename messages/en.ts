import { FullTranslation } from "./types/FullTranslation";

const en: FullTranslation = {
  LocaleLayout: {
    title: "Envent",
    description: "Envent site",
  },
  LocaleSwitcher: {
    label: "Change language",
    locale:
      "{locale, select, uk {🇺🇦 Українська} en {🇺🇸 English} other {Unknown}}",
  },
  Manifest: {
    name: "Envent site",
  },
  Header: {
    navlink: {
      home: { label: "Home", href: "/" },
      projects: { label: "Projects", href: "/projects" },
      services: { label: "Services", href: "/services" },
      about: { label: "About", href: "/about" },
      contacts: { label: "Contacts", href: "/contacts" },
    },
    topList: {
      call_us: "call us",
      mail: "e-mail",
      working_hours: "working hours",
      hours: "Mon. - Fri. 9AM - 18PM",
    },
  },
  MainPage: {
    hero: {
      title: "Envent",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis egestas pellentesque libero dolor in diam consequat ut. Mi nibh ame viverra id aliquet neque odio.",
      button: "view our work",
    },
    descriptions: {},
  },
};

export default en;

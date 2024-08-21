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
        "Reliable energy ventilation solutions that ensure comfort and safety in your space since 1992.",
      button: "view our work",
    },
    descriptions: {},
  },
  Footer: {
    formTitle: "Contact Us",
    placeholderName: "Name",
    placeholderEmail: "Email",
    placeholderMessage: "Message",
    button: " send message",
  },
  HeroRightSide: {
    services: {
      title: "Our Services",
      list: {
        designing: {
          svgName: "SideServicesDesigning",
          title: "Designing",
          descriptions:
            "The initial stage of creating a comfortable atmosphere.",
        },
        production: {
          svgName: "SideServicesProduction",
          title: "Production",
          descriptions: "Manufacturing and delivery of finished products.",
        },
        assembling: {
          svgName: "SideServicesAssembling",
          title: "Installation",
          descriptions:
            "Installation of ventilation and air conditioning systems.",
        },
      },
    },
    todo: {
      title: "What We Do",
      list: {
        automation: {
          svgName: "SideTodoAutomation",
          title: "Automation",
          descriptions:
            "Automation of ventilation and air conditioning systems.",
        },
        works: {
          svgName: "SideTodoCommissioning",
          title: "Commissioning",
          descriptions:
            "Initial testing of installed ventilation and air conditioning systems.",
        },
        services: {
          svgName: "SideTodoMaintenance",
          title: "Maintenance",
          descriptions:
            "Technical maintenance of ventilation, air conditioning, cooling, and heating systems.",
        },
      },
    },
    contact: {
      title: "Contact Information",
      list: {
        office: {
          title: "Our Office",
          descriptions: "Darnytskyi Boulevard, 12, Kyiv, 02000",
        },
        hours: {
          title: "Office Hours",
          descriptions: "Mon-Fri: 9:00 AM – 6:00 PM Sat-Sun: Closed",
        },
        touch: {
          title: "Get in Touch",
          descriptions: {
            mail: "info@envent.kiev.ua",
            tel: "+38(044) 503 83 77",
          },
        },
      },
    },
  },
};

export default en;

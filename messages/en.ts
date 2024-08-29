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
    descriptions: {
      title: "No Project Too Big Or Too Small",
      firstDescr:
        "Our team of specialists has extensive experience in creating effective ventilation solutions for residential buildings, office buildings, industrial premises, shopping malls and other facilities.",
      secondDescr:
        "The company is staffed by high-class specialists, which allows us to perform all types of work.",
      thirdDescr:
        "From the first days of its existence, our company has taken one of the leading places in the field of creating modern climate technologies and providing a full range of services and engineering solutions.",
      button: "Learn More",
      years: "years established",
      projects: "completed projects",
    },
    projects: {
      title: "Recent projects",
      viewAll: "View all",
      list: {
        1: {
          id: "1",
          src: "/images/projects/riverMall.jpg",
          alt: "River Mall",
          title: "River Mall",
          address: "...",
          link: "...",
        },
        2: {
          id: "2",
          src: "/images/projects/blockBaster.jpg",
          alt: "BlockBaster",
          title: "BlockBaster",
          address: "...",
          link: "...",
        },
        3: {
          id: "3",
          src: "/images/projects/odeskiyBulvar.jpg",
          alt: "OdeskiyBulvar",
          title: "OdeskiyBulvar",
          address: "...",
          link: "...",
        },
        4: {
          id: "4",
          src: "/images/projects/epicentr.jpg",
          alt: "Epicentr",
          title: "Epicentr",
          address: "...",
          link: "...",
        },
        5: {
          id: "5",
          src: "/images/projects/karavan.jpg",
          alt: "Karavan",
          title: "Karavan",
          address: "...",
          link: "...",
        },
        6: {
          id: "6",
          src: "/images/projects/altaCentr.jpg",
          alt: "AltaCentr",
          title: "AltaCentr",
          address: "...",
          link: "...",
        },
      },
    },
    aboutUsCounted: {
      title: "Premium Ventilation System",
      finishedProjects: "Finished Projects",
      ongoingProjects: "Ongoing Projects",
      employees: "Employees",
    },

    testimonials: {
      title: "Client",
      subtitle: "testimonials",
      items: {
        1: {
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rhoncus elit aliquam facilisis pharetra. Aenean consectetur lacinia diam a tincidunt. Vivamus facilisis lacus non velit suscipit pellentesque. Nam ac mauris nec mi lobortis sollicitudin sed at lacus. Fusce volutpat, dolor in suscipit pharetra, lacus sapien sollicitudin quam, non aliquam ex neque eu lectus",
          fullName: "John Doe",
          image: "/images/john_Doe.jpg",
        },
        2: {
          text: "Tincidunt mauris ut quam sed mauris proin feugiat. Scelerisque lorem posuere iaculis nunc amet phasellus.",
          fullName: "Jane Smith",
          image: "/images/jane_Smith.jpg",
        },
      },
    },
    videoSection: {
      title: "We've been creating ventilation systems for over 30 years",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed faucibus nullam. Tincidunt mauris ut quam sed mauris proin feugiat. Scelerisque lorem posuere iaculis nunc amet phasellus.",
      aboutUs: " About us",
      phone: "Call for a Quote",
      btnForm: "Online estimate form",
    },
    partners: {
      title: "Our Partners",
      link: "Link",
    },
  },
  ProjectsPage: {
    hero: {
      title: "Implemented projects",
      description:
        "Objects in the construction of which Energoventilyatsiya LLC took part.",
      button: "Get a Quote",
    },
    projects: {},
  },
  AboutPage: {
    hero: {
      title: "About Our Company",
      description:
        "We would be happy to become your permanent partners and take on the solution of your problems in the field of microclimate creation.",
      button: "get a free quote",
    },
    about: {
      title: "About us",
      description: {
        p1: "LLC Energoventilatsia is a professional, energetic and dynamically developing company that has been operating on the Ukrainian market since 1992. From the first days of its existence, our company has taken one of the leading places in the field of creating modern climate technologies and providing a full range of services and engineering solutions for the installation of air conditioning, ventilation, heating and heat supply systems of internal engineering networks.",
        p2: "The company is staffed by high-class specialists, which allows to perform all complex works from design to maintenance and delivery of objects to customers on a turnkey basis, using equipment of world-famous and recognized manufacturers, such as CARRIER, LENNOX, VTS Clima, DAIKIN, OSTBERG, FUJITSU, PANASONIC, MITSUBISHI, McQuay, LG and many others.",
        p3: "Having its own production base and workshop, with imported technological equipment for the production of air ducts (about 10,000 m2 per month), pipelines and other elements of ventilation and air conditioning systems, as well as its own freight vehicles, Energoventilatsia LLC has the ability to quickly and qualitatively solve production issues on objects of any complexity.",
        p4: "Energoventilatsia LLC has a license of the Ministry of Construction, Architecture and Housing and Communal Affairs of Ukraine series AB No. 195346 for the right to perform the entire complex of works from design to commissioning and commissioning of internal engineering networks (ventilation and air conditioning, heating), including such related works as heating and cooling supply, electrical installation works, KVP.",
        p5: "Energoventilatsia LLC has a permit from the State Committee of Ukraine for Supervision of Labor Protection No. 853.05.32-45.34.9 to start work related to increased danger, as well as a license of the State Department of Fire Safety of the Ministry of Internal Affairs of Ukraine of the AB series No. 399277 for designing, installation, maintenance of fire protection equipment.",
      },
    },
    best: {
      title: "Only the Best",
      list: {
        1: {
          images: {
            2: {
              id: "2",
              src: "/images/projects/riverMall.jpg",
              alt: "River Mall",
              title: "River Mall",
              area_label: "...",
            },
            1: {
              id: "1",
              src: "/images/projects/blockBaster.jpg",
              alt: "BlockBaster",
              title: "BlockBaster",
              area_label: "...",
            },
            3: {
              id: "3",
              src: "/images/projects/odeskiyBulvar.jpg",
              alt: "OdeskiyBulvar",
              title: "OdeskiyBulvar",
              area_label: "...",
            },
            4: {
              id: "4",
              src: "/images/projects/epicentr.jpg",
              alt: "Epicentr",
              title: "Epicentr",
              area_label: "...",
            },
            5: {
              id: "5",
              src: "/images/projects/karavan.jpg",
              alt: "Karavan",
              title: "Karavan",
              area_label: "...",
            },
            6: {
              id: "6",
              src: "/images/projects/altaCentr.jpg",
              alt: "AltaCentr",
              title: "AltaCentr",
              area_label: "...",
            },
          },
          title: "Eco Friendly Construction",
          description:
            "Donec sollicitudin molestie malesuada. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. ",
        },
        2: {
          images: {
            1: {
              id: "1",
              src: "/images/projects/riverMall.jpg",
              alt: "River Mall",
              title: "River Mall",
              area_label: "...",
            },
            3: {
              id: "3",
              src: "/images/projects/blockBaster.jpg",
              alt: "BlockBaster",
              title: "BlockBaster",
              area_label: "...",
            },
            2: {
              id: "2",
              src: "/images/projects/odeskiyBulvar.jpg",
              alt: "OdeskiyBulvar",
              title: "OdeskiyBulvar",
              area_label: "...",
            },
            4: {
              id: "4",
              src: "/images/projects/epicentr.jpg",
              alt: "Epicentr",
              title: "Epicentr",
              area_label: "...",
            },
            5: {
              id: "5",
              src: "/images/projects/karavan.jpg",
              alt: "Karavan",
              title: "Karavan",
              area_label: "...",
            },
            6: {
              id: "6",
              src: "/images/projects/altaCentr.jpg",
              alt: "AltaCentr",
              title: "AltaCentr",
              area_label: "...",
            },
          },
          title: "The Newest Technology Repairs",
          description:
            "Donec sollicitudin molestie malesuada. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. ",
        },
        3: {
          images: {
            4: {
              id: "4",
              src: "/images/projects/riverMall.jpg",
              alt: "River Mall",
              title: "River Mall",
              area_label: "...",
            },
            2: {
              id: "2",
              src: "/images/projects/blockBaster.jpg",
              alt: "BlockBaster",
              title: "BlockBaster",
              area_label: "...",
            },
            3: {
              id: "3",
              src: "/images/projects/odeskiyBulvar.jpg",
              alt: "OdeskiyBulvar",
              title: "OdeskiyBulvar",
              area_label: "...",
            },
            1: {
              id: "1",
              src: "/images/projects/epicentr.jpg",
              alt: "Epicentr",
              title: "Epicentr",
              area_label: "...",
            },
            5: {
              id: "5",
              src: "/images/projects/karavan.jpg",
              alt: "Karavan",
              title: "Karavan",
              area_label: "...",
            },
            6: {
              id: "6",
              src: "/images/projects/altaCentr.jpg",
              alt: "AltaCentr",
              title: "AltaCentr",
              area_label: "...",
            },
          },
          title: "High Quality Construction Management",
          description:
            "Donec sollicitudin molestie malesuada. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. ",
        },
      },
      buttons: {
        best: "free quote",
        years: "years established",
        projects: "completed projects",
        workers: "workers",
        stuff: "office staff",
      },
    },
    ceo: {
      name: "VYSOVEN MYKOLA - CEO & FOUNDER",
      quote:
        "We would be happy to become your permanent partners and take on the solution of your problems in the field of microclimate creation.",
    },
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
  ServicesPage: {
    hero: {
      title: "Our Services",
      description:
        "We work with any types of buildings: administrative, office and production, public centers, shopping and residential complexes, private houses, restaurants, cafes and shops.",
      button: "get a free quote",
    },
    services: {
      service: {
        1: {
          id: "1",
          hero: {
            title: "Designing",
            description:
              "Designing is the initial stage of creating an atmosphere of comfort.The maximum approach to the final result depends on the quality of the project - a comfortable atmosphere in the room with specified or adjustable air parameters.",
            button: "get a quote",
          },
          firstImg: "/images/services/designing-1.jpg",
          secondImg: "/images/services/designing-3.jpg",
          thirdImg: "/images/services/designing-2.jpg",
          heroBG: "/images/services/designing-3.jpg",
          alt: "",

          secondBtn: "learn more",
          address: "...",
          link: "...",
          p1: "Lectus erat, consectetur eu sapien eget rhoncus consectetur sem. Proin cursus, dolor a mollis consectetur, risus dolor fermentum massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a tortor ultrices bibendum. Nulla fermentum, metus quis sodales tristique, augue mauris molestie augue, non feugiat ligula neque nec felis.",
          p2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed nibh dignissim, cursus tellus sit amet, ultrices mauris. Aliquam blandit est in eros elementum, quis vehicula est suscipit. Proin cursus, dolor a mollis consectetur, risus dolor fermentum massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a tortor ultrices bibendum. ",
          p3: "Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus erat, consectetur eu sapien eget rhoncus consectetur sem.Proin cursus, dolor a mollis consectetur, risus dolor fermentum massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a tortor ultrices bibendum. Nulla fermentum, metus quis sodales tristique, augue mauris molestie augue non feugiat ligula neque nec felis.",
          p4: "Lectus erat, consectetur eu sapien eget rhoncus consectetur sem. Proin cursus, dolor a mollis consectetur, risus dolor fermentum massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a tortor ultrices bibendum. ",
        },
        2: {
          id: "2",
          hero: {
            title: "Production and sale of finished products",
            description:
              "'Energoventilatsia' LLC has its own production base with workshops for the manufacture of air ducts, with warm warehouses of finished products, raw materials and materials, tools and components.",
            button: "get a quote",
          },
          firstImg: "/images/services/prgp3.jpg",
          secondImg: "/images/services/prgp5.jpg",
          thirdImg: "/images/services/prgp12.jpg",
          heroBG: "/images/services/prgp12.jpg",
          alt: "",
          secondBtn: "learn more",
          address: "...",
          link: "...",
          p1: "Lectus erat, consectetur eu sapien eget rhoncus consectetur sem. Proin cursus, dolor a mollis consectetur, risus dolor fermentum massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a tortor ultrices bibendum. Nulla fermentum, metus quis sodales tristique, augue mauris molestie augue, non feugiat ligula neque nec felis.",
          p2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed nibh dignissim, cursus tellus sit amet, ultrices mauris. Aliquam blandit est in eros elementum, quis vehicula est suscipit. Proin cursus, dolor a mollis consectetur, risus dolor fermentum massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a tortor ultrices bibendum. ",
          p3: "Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus erat, consectetur eu sapien eget rhoncus consectetur sem.Proin cursus, dolor a mollis consectetur, risus dolor fermentum massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a tortor ultrices bibendum. Nulla fermentum, metus quis sodales tristique, augue mauris molestie augue non feugiat ligula neque nec felis.",
          p4: "Lectus erat, consectetur eu sapien eget rhoncus consectetur sem. Proin cursus, dolor a mollis consectetur, risus dolor fermentum massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a tortor ultrices bibendum. ",
        },
        3: {
          id: "3",
          hero: {
            title: "Installation of ventilation and air conditioning systems",
            description:
              "One of the priority areas of activity of 'Energoventilatsia' LLC is the installation of ventilation and air conditioning systems , which is one of the most responsible stages of work on creating an artificial climate.",
            button: "get a quote",
          },
          firstImg: "/images/services/montazh_foto1.jpg",
          secondImg: "/images/services/montazh_foto2.jpg",
          thirdImg: "/images/services/montazh_foto3.jpg",
          heroBG: "/images/services/montazh_foto2.jpg",
          alt: "",
          secondBtn: "learn more",
          address: "...",
          link: "...",
          p1: "Lectus erat, consectetur eu sapien eget rhoncus consectetur sem. Proin cursus, dolor a mollis consectetur, risus dolor fermentum massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a tortor ultrices bibendum. Nulla fermentum, metus quis sodales tristique, augue mauris molestie augue, non feugiat ligula neque nec felis.",
          p2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed nibh dignissim, cursus tellus sit amet, ultrices mauris. Aliquam blandit est in eros elementum, quis vehicula est suscipit. Proin cursus, dolor a mollis consectetur, risus dolor fermentum massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a tortor ultrices bibendum. ",
          p3: "Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus erat, consectetur eu sapien eget rhoncus consectetur sem.Proin cursus, dolor a mollis consectetur, risus dolor fermentum massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a tortor ultrices bibendum. Nulla fermentum, metus quis sodales tristique, augue mauris molestie augue non feugiat ligula neque nec felis.",
          p4: "Lectus erat, consectetur eu sapien eget rhoncus consectetur sem. Proin cursus, dolor a mollis consectetur, risus dolor fermentum massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a tortor ultrices bibendum. ",
        },
        4: {
          id: "4",
          hero: {
            title: "Control and measuring devices and automation",
            description:
              "The main area of activity of the site is not only the production of panels and control panels, but also the performance of the entire complex of works related to the development and implementation of automation systems, starting with the inspection of objects and ending with commissioning and debugging of systems.",
            button: "get a quote",
          },
          firstImg: "/images/services/f1_s.jpg",
          secondImg: "/images/services/f5_2.jpg",
          thirdImg: "/images/services/f6_3.jpg",
          heroBG: "/images/services/f1_s.jpg",
          alt: "",
          secondBtn: "learn more",
          address: "...",
          link: "...",
          p1: "Lectus erat, consectetur eu sapien eget rhoncus consectetur sem. Proin cursus, dolor a mollis consectetur, risus dolor fermentum massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a tortor ultrices bibendum. Nulla fermentum, metus quis sodales tristique, augue mauris molestie augue, non feugiat ligula neque nec felis.",
          p2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed nibh dignissim, cursus tellus sit amet, ultrices mauris. Aliquam blandit est in eros elementum, quis vehicula est suscipit. Proin cursus, dolor a mollis consectetur, risus dolor fermentum massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a tortor ultrices bibendum. ",
          p3: "Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus erat, consectetur eu sapien eget rhoncus consectetur sem.Proin cursus, dolor a mollis consectetur, risus dolor fermentum massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a tortor ultrices bibendum. Nulla fermentum, metus quis sodales tristique, augue mauris molestie augue non feugiat ligula neque nec felis.",
          p4: "Lectus erat, consectetur eu sapien eget rhoncus consectetur sem. Proin cursus, dolor a mollis consectetur, risus dolor fermentum massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a tortor ultrices bibendum. ",
        },
        5: {
          id: "5",
          hero: {
            title: "Supply of equipment",
            description:
              "'Energoventilatsia' LLC closely cooperates with world-renowned and recognized companies in the field of ventilation and air conditioning",
            button: "get a quote",
          },
          firstImg: "/images/services/postavka1.jpg",
          secondImg: "/images/services/postavka2.jpg",
          thirdImg: "/images/services/postavka3.jpg",
          heroBG: "/images/services/postavka3.jpg",
          alt: "",
          secondBtn: "learn more",
          address: "...",
          link: "...",
          p1: "Lectus erat, consectetur eu sapien eget rhoncus consectetur sem. Proin cursus, dolor a mollis consectetur, risus dolor fermentum massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a tortor ultrices bibendum. Nulla fermentum, metus quis sodales tristique, augue mauris molestie augue, non feugiat ligula neque nec felis.",
          p2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed nibh dignissim, cursus tellus sit amet, ultrices mauris. Aliquam blandit est in eros elementum, quis vehicula est suscipit. Proin cursus, dolor a mollis consectetur, risus dolor fermentum massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a tortor ultrices bibendum. ",
          p3: "Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus erat, consectetur eu sapien eget rhoncus consectetur sem.Proin cursus, dolor a mollis consectetur, risus dolor fermentum massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a tortor ultrices bibendum. Nulla fermentum, metus quis sodales tristique, augue mauris molestie augue non feugiat ligula neque nec felis.",
          p4: "Lectus erat, consectetur eu sapien eget rhoncus consectetur sem. Proin cursus, dolor a mollis consectetur, risus dolor fermentum massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a tortor ultrices bibendum. ",
        },
        6: {
          id: "6",
          hero: {
            title: "Start-up and debugging works",
            description:
              "Specialists of 'Energoventilatsia' LLC carry out start-up tests and adjustment of ventilation and air conditioning systems.Commissioning tests of installed ventilation and air conditioning systems are carried out in accordance with the requirements of DBN 'Rules for production and acceptance of works' after mechanical testing of ventilation and related power equipment.",
            button: "get a quote",
          },
          firstImg: "/images/services/debugging-works1.jpg",
          secondImg: "/images/services/debugging-works1.jpg",
          thirdImg: "/images/services/debugging-works1.jpg",
          heroBG: "/images/services/debugging-works1.jpg",
          alt: "",
          secondBtn: "learn more",
          address: "...",
          link: "...",
          p1: "Lectus erat, consectetur eu sapien eget rhoncus consectetur sem. Proin cursus, dolor a mollis consectetur, risus dolor fermentum massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a tortor ultrices bibendum. Nulla fermentum, metus quis sodales tristique, augue mauris molestie augue, non feugiat ligula neque nec felis.",
          p2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed nibh dignissim, cursus tellus sit amet, ultrices mauris. Aliquam blandit est in eros elementum, quis vehicula est suscipit. Proin cursus, dolor a mollis consectetur, risus dolor fermentum massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a tortor ultrices bibendum. ",
          p3: "Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus erat, consectetur eu sapien eget rhoncus consectetur sem.Proin cursus, dolor a mollis consectetur, risus dolor fermentum massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a tortor ultrices bibendum. Nulla fermentum, metus quis sodales tristique, augue mauris molestie augue non feugiat ligula neque nec felis.",
          p4: "Lectus erat, consectetur eu sapien eget rhoncus consectetur sem. Proin cursus, dolor a mollis consectetur, risus dolor fermentum massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a tortor ultrices bibendum. ",
        },
        7: {
          id: "7",
          hero: {
            title: "Passporting of ventilation systems",
            description:
              "If you have doubts about the operation of the air heating or ventilation systems , our specialists will determine the causes of the problems and find the optimal solutions to eliminate the shortcomings.If your installed ventilation or air heating systems are not certified, certification specialists will issue the necessary documents with actual measurements as soon as possible.",
            button: "get a quote",
          },
          firstImg: "/images/services/passporting-of-ventilation-systems.jpg",
          secondImg: "/images/services/passporting-of-ventilation-systems.jpg",
          thirdImg: "/images/services/passporting-of-ventilation-systems.jpg",
          heroBG: "/images/services/passporting-of-ventilation-systems.jpg",
          alt: "",
          secondBtn: "learn more",
          address: "...",
          link: "...",
          p1: "Lectus erat, consectetur eu sapien eget rhoncus consectetur sem. Proin cursus, dolor a mollis consectetur, risus dolor fermentum massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a tortor ultrices bibendum. Nulla fermentum, metus quis sodales tristique, augue mauris molestie augue, non feugiat ligula neque nec felis.",
          p2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed nibh dignissim, cursus tellus sit amet, ultrices mauris. Aliquam blandit est in eros elementum, quis vehicula est suscipit. Proin cursus, dolor a mollis consectetur, risus dolor fermentum massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a tortor ultrices bibendum. ",
          p3: "Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus erat, consectetur eu sapien eget rhoncus consectetur sem.Proin cursus, dolor a mollis consectetur, risus dolor fermentum massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a tortor ultrices bibendum. Nulla fermentum, metus quis sodales tristique, augue mauris molestie augue non feugiat ligula neque nec felis.",
          p4: "Lectus erat, consectetur eu sapien eget rhoncus consectetur sem. Proin cursus, dolor a mollis consectetur, risus dolor fermentum massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a tortor ultrices bibendum. ",
        },
        8: {
          id: "8",
          hero: {
            title: "Service maintenance",
            description:
              "The service department of 'Energoventilatsia' LLC takes a comprehensive approach to maintenance: from scheduled preventive inspections to prompt responses in emergency situations. Maintenance and repair services are carried out by qualified engineers who have all the necessary tools and equipment at their disposal.",
            button: "get a quote",
          },
          firstImg: "/images/services/servis_foto4.jpg",
          secondImg: "/images/services/servis_foto3.jpg",
          thirdImg: "/images/services/servis_foto5.jpg",
          heroBG: "/images/services/servis_foto4.jpg",
          alt: "",
          secondBtn: "learn more",
          address: "...",
          link: "...",
          p1: "Lectus erat, consectetur eu sapien eget rhoncus consectetur sem. Proin cursus, dolor a mollis consectetur, risus dolor fermentum massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a tortor ultrices bibendum. Nulla fermentum, metus quis sodales tristique, augue mauris molestie augue, non feugiat ligula neque nec felis.",
          p2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed nibh dignissim, cursus tellus sit amet, ultrices mauris. Aliquam blandit est in eros elementum, quis vehicula est suscipit. Proin cursus, dolor a mollis consectetur, risus dolor fermentum massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a tortor ultrices bibendum. ",
          p3: "Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus erat, consectetur eu sapien eget rhoncus consectetur sem.Proin cursus, dolor a mollis consectetur, risus dolor fermentum massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a tortor ultrices bibendum. Nulla fermentum, metus quis sodales tristique, augue mauris molestie augue non feugiat ligula neque nec felis.",
          p4: "Lectus erat, consectetur eu sapien eget rhoncus consectetur sem. Proin cursus, dolor a mollis consectetur, risus dolor fermentum massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a tortor ultrices bibendum. ",
        },
      },
    },
    about: {
      title: "About Process",
      phone: "Call for a Quote",
      btnForm: "Online estimate form",
    },
  },
};

export default en;

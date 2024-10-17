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
    error: {
      message: "Ooops... something went wrong",
      btnBack: "Back to homepage",
    },
  },

  SideBar: {
    catalog: {
      catalogTitle: "Catalog",
    },
  },

  ProjectsPage: {
    hero: {
      title: "Implemented projects",
      description:
        "Objects in the construction of which Energoventilyatsiya LLC took part.",
      button: "Get a Quote",
      textCategory: "Select a category",
      btnBack: " Go back",
    },
    projectItem: {
      title: "About this Project",
      description:
        "The projects encompass a full cycle of work, including system design, installation, adjustment, and maintenance. The company has completed projects covering areas ranging from several hundred to tens of thousands of square meters.",
      subDescription:
        "Thanks to a professional approach to each project, the installation time for ventilation systems varies depending on the complexity of the site and can take from several weeks to several months.The company guarantees high quality and energy efficiency of the systems, contributing to the creation of comfortable and safe conditions in any type of premises.",
    },

    projects: {
      1: {
        id: "1",
        projectSlug: "sbu",
        title:
          "Administrative and Economic Department of the Security Service of Ukraine",
        mainImg: "/images/projects/administrative_buildings/sbuMain.webp",
        mainAlt:
          "The central facade of the building of the Security Service of Ukraine with columns and the Ukrainian flag on the roof.",
        heroDescription:
          "Object in the construction of which Energoventilyatsiya LLC took part.",
        heroButton: "Get a Quote",
        images: {
          img1: {
            alt: "The central facade of the building of the Security Service of Ukraine with columns and the Ukrainian flag on the roof.",
            src: "/images/projects/administrative_buildings/sbu1.jpg",
          },
          img2: {
            alt: "The central facade of the building of the Security Service of Ukraine with columns and the Ukrainian flag on the roof.",
            src: "/images/projects/administrative_buildings/sbuMain.webp",
          },
          img3: {
            alt: "The central facade of the building of the Security Service of Ukraine with columns and the Ukrainian flag on the roof.",
            src: "/images/projects/administrative_buildings/sbu2.jpeg",
          },
        },
        link: "...",
        address: "Kyiv",
        categorySlug: "administrative_buildings",
        category: "Administrative buildings and banks",
        linkCategory: "/projects/administrative_buildings",
      },
      2: {
        id: "2",
        projectSlug: "president_administration",
        title: "Administration of the President of Ukraine",
        mainImg: "/images/projects/administrative_buildings/presAdmMain.webp",
        mainAlt:
          "A large neoclassical building with tall white columns, decorated with a large Ukrainian flag hanging on the facade",
        heroDescription:
          "Object in the construction of which Energoventilyatsiya LLC took part.",
        heroButton: "Get a Quote",
        images: {
          img1: {
            alt: "A large neoclassical building with tall white columns",
            src: "/images/projects/administrative_buildings/presAdm1.jpg",
          },
          img2: {
            alt: "A large neoclassical building with tall white columns, decorated with a large Ukrainian flag hanging on the facade",
            src: "/images/projects/administrative_buildings/presAdmMain.webp",
          },
          img3: {
            alt: "A large neoclassical building with tall white columns",
            src: "/images/projects/administrative_buildings/presAdm2.png",
          },
        },
        link: "...",
        address: "Kyiv, 11 Bankova Street",
        categorySlug: "administrative_buildings",
        category: "Administrative buildings and banks",
        linkCategory: "/projects/administrative_buildings",
      },
      3: {
        id: "3",
        projectSlug: "verhovna_rada",
        title: "Supreme Council building",
        mainImg:
          "/images/projects/administrative_buildings/verhovna_radaMain.webp",
        mainAlt:
          "The three-story building of the Parliament of Ukraine with a dome-shaped roof and the Ukrainian flag",
        heroDescription:
          "Object in the construction of which Energoventilyatsiya LLC took part.",
        heroButton: "Get a Quote",
        images: {
          img1: {
            alt: "The three-story building of the Parliament of Ukraine with a dome-shaped roof and the Ukrainian flag",
            src: "/images/projects/administrative_buildings/verhovna_rada1.jpeg",
          },
          img2: {
            alt: "The three-story building of the Parliament of Ukraine with a dome-shaped roof and the Ukrainian flag",
            src: "/images/projects/administrative_buildings/verhovna_radaMain.webp",
          },
          img3: {
            alt: "The three-story building of the Parliament of Ukraine with a dome-shaped roof and the Ukrainian flag",
            src: "/images/projects/administrative_buildings/verhovna_rada2.jpg",
          },
        },
        link: "...",
        address: "Kyiv, Hrushevskoho Street",
        categorySlug: "administrative_buildings",
        category: "Administrative buildings and banks",
        linkCategory: "/projects/administrative_buildings",
      },
      4: {
        id: "4",
        projectSlug: "ukreximbank",
        title: "Ukreximbank",
        mainImg:
          "/images/projects/administrative_buildings/ukrexim_bankMain.webp",
        mainAlt:
          "The entrance to the main office of Ukreximbank is made of glass with a modern design",
        heroDescription:
          "Object in the construction of which Energoventilyatsiya LLC took part.",
        heroButton: "Get a Quote",
        images: {
          img1: {
            alt: "The entrance to the main office of Ukreximbank is made of glass with a modern design",
            src: "/images/projects/administrative_buildings/ukrexim_bank1.webp",
          },
          img2: {
            alt: "The entrance to the main office of Ukreximbank is made of glass with a modern design",
            src: "/images/projects/administrative_buildings/ukrexim_bankMain.webp",
          },
          img3: {
            alt: "The entrance to the main office of Ukreximbank is made of glass with a modern design",
            src: "/images/projects/administrative_buildings/ukrexim_bank2.jpg",
          },
        },
        link: "...",
        address: "Kyiv, 127 Horkoho Street",
        categorySlug: "administrative_buildings",
        category: "Administrative buildings and banks",
        linkCategory: "/projects/administrative_buildings",
      },
      5: {
        id: "5",
        projectSlug: "prominvestbank",
        title: "Prominvestbank",
        mainImg:
          "/images/projects/administrative_buildings/prominvest_bankMain.webp",
        mainAlt:
          "Entrance to Prominvestbank with golden elements on a dark glossy building",
        heroDescription:
          "Object in the construction of which Energoventilyatsiya LLC took part.",
        heroButton: "Get a Quote",
        images: {
          img1: {
            alt: "Entrance to Prominvestbank with golden elements on a dark glossy building",
            src: "/images/projects/administrative_buildings/prominvest_bank1.jpg",
          },
          img2: {
            alt: "Entrance to Prominvestbank with golden elements on a dark glossy building",
            src: "/images/projects/administrative_buildings/prominvest_bankMain.webp",
          },
          img3: {
            alt: "Entrance to Prominvestbank with golden elements on a dark glossy building",
            src: "/images/projects/administrative_buildings/prominvest_bank2.png",
          },
        },
        link: "...",
        address: "Kyiv, 9 Sofiivska Street",
        categorySlug: "administrative_buildings",
        category: "Administrative buildings and banks",
        linkCategory: "/projects/administrative_buildings",
      },
      6: {
        id: "6",
        projectSlug: "unicreditbank",
        title: "Unicreditbank",
        mainImg:
          "/images/projects/administrative_buildings/unicredit_bankMain.webp",
        mainAlt:
          "A majestic building with arched windows and the UniCredit Bank logo on top, featuring a white sign with red and black letters",
        heroDescription:
          "Object in the construction of which Energoventilyatsiya LLC took part.",
        heroButton: "Get a Quote",
        images: {
          img1: {
            alt: "A majestic building with arched windows and the UniCredit Bank logo on top, featuring a white sign with red and black letters",
            src: "/images/projects/administrative_buildings/unicredit_bankMain.webp",
          },
          img2: {
            alt: "A majestic building with arched windows and the UniCredit Bank logo on top, featuring a white sign with red and black letters",
            src: "/images/projects/administrative_buildings/unicredit_bankMain.webp",
          },
          img3: {
            alt: "A majestic building with arched windows and the UniCredit Bank logo on top, featuring a white sign with red and black letters",
            src: "/images/projects/administrative_buildings/unicredit_bankMain.webp",
          },
        },
        link: "...",
        address: "Kyiv",
        categorySlug: "administrative_buildings",
        category: "Administrative buildings and banks",
        linkCategory: "/projects/administrative_buildings",
      },
      7: {
        id: "7",
        projectSlug: "ukrsotsbank",
        title: "Ukrsotsbank",
        mainImg:
          "/images/projects/administrative_buildings/ukrsots_bankMain.webp",
        mainAlt:
          "The modernized Ukrsotsbank building with gray facade elements and a green area near the entrance",
        heroDescription:
          "Object in the construction of which Energoventilyatsiya LLC took part.",
        heroButton: "Get a Quote",
        images: {
          img1: {
            alt: "The modernized Ukrsotsbank building with gray facade elements and a green area near the entrance",
            src: "/images/projects/administrative_buildings/ukrsots_bank1.webp",
          },
          img2: {
            alt: "The modernized Ukrsotsbank building with gray facade elements and a green area near the entrance",
            src: "/images/projects/administrative_buildings/ukrsots_bankMain.webp",
          },
          img3: {
            alt: "The modernized Ukrsotsbank building with gray facade elements and a green area near the entrance",
            src: "/images/projects/administrative_buildings/ukrsots_bank1.webp",
          },
        },
        link: "...",
        address: "Kyiv, Kovpaka Street",
        categorySlug: "administrative_buildings",
        category: "Administrative buildings and banks",
        linkCategory: "/projects/administrative_buildings",
      },
      8: {
        id: "8",
        projectSlug: "bank_aval",
        title: "Aval Bank",
        mainImg: "/images/projects/administrative_buildings/bank_avalMain.webp",
        mainAlt:
          "A tall office building with the Raiffeisen Bank Aval logo on top",
        heroDescription:
          "Object in the construction of which Energoventilyatsiya LLC took part.",
        heroButton: "Get a Quote",
        images: {
          img1: {
            alt: "A tall office building with the Raiffeisen Bank Aval logo on top",
            src: "/images/projects/administrative_buildings/bank_aval1.jpg",
          },
          img2: {
            alt: "A tall office building with the Raiffeisen Bank Aval logo on top",
            src: "/images/projects/administrative_buildings/bank_avalMain.webp",
          },
          img3: {
            alt: "A tall office building with the Raiffeisen Bank Aval logo on top",
            src: "/images/projects/administrative_buildings/bank_aval2.jpg",
          },
        },
        link: "...",
        address:
          "Kyiv, 9 Leskova Street; Kyiv, 26 Lesi Ukrainky Street; Kyiv, 7 Pyrohova Street; Odesa; Sumy; Kherson, 53 Ushakova Street",
        categorySlug: "administrative_buildings",
        category: "Administrative buildings and banks",
        linkCategory: "/projects/administrative_buildings",
      },
      9: {
        id: "9",
        projectSlug: "oschadbank",
        title: "State Savings Bank of Ukraine",
        mainImg:
          "/images/projects/administrative_buildings/oschad_bankMain.webp",
        mainAlt: "The facade of the bank building with the logo of Oschadbank",
        heroDescription:
          "Object in the construction of which Energoventilyatsiya LLC took part.",
        heroButton: "Get a Quote",
        images: {
          img1: {
            alt: "The facade of the bank building with the logo of Oschadbank",
            src: "/images/projects/administrative_buildings/oschad_bank1.webp",
          },
          img2: {
            alt: "The facade of the bank building with the logo of Oschadbank",
            src: "/images/projects/administrative_buildings/oschad_bankMain.webp",
          },
          img3: {
            alt: "The facade of the bank building with the logo of Oschadbank",
            src: "/images/projects/administrative_buildings/oschad_bank2.webp",
          },
        },
        link: "...",
        address:
          "Kyiv, Volodymyrska Street; Kyiv, Dniprovska Naberezhna Street; Kyiv, Artema Street; Myronivka village, Kyiv region; Makariv, Kyiv region",
        categorySlug: "administrative_buildings",
        category: "Administrative buildings and banks",
        linkCategory: "/projects/administrative_buildings",
      },

      // =====================================
      10: {
        id: "10",
        projectSlug: "dinamo-stadium",
        title: "Reconstruction of the «Dynamo» stadium named after Lobanovsky",
        mainImg: "/images/projects/public_facilities/dinamoMain.webp",
        mainAlt:
          "The main entrance to the «Dynamo» stadium in Kyiv with arch where the emblem of the «Dynamo» football club is located",
        heroDescription:
          "Object in the construction of which Energoventilyatsiya LLC took part.",
        heroButton: "Get a Quote",
        images: {
          img1: {
            alt: "The main entrance to the «Dynamo» stadium in Kyiv with arch where the emblem of the «Dynamo» football club is located",
            src: "/images/projects/public_facilities/dinamoMain.webp",
          },
          img2: {
            alt: "The main entrance to the «Dynamo» stadium in Kyiv with arch where the emblem of the «Dynamo» football club is located",
            src: "/images/projects/public_facilities/dinamoMain.webp",
          },
          img3: {
            alt: "The main entrance to the «Dynamo» stadium in Kyiv with arch where the emblem of the «Dynamo» football club is located",
            src: "/images/projects/public_facilities/dinamoMain.webp",
          },
        },
        link: "...",
        address: "Kyiv",
        categorySlug: "public_facilities",
        category: "Public facilities and office centers",
        linkCategory: "/projects/public_facilities",
      },
      11: {
        id: "11",
        projectSlug: "hotel",
        title: "Hotel",
        mainImg: "/images/projects/public_facilities/hotelMain.webp",
        mainAlt:
          "A hotel in red brick style with decorative elements and arched windows",
        heroDescription:
          "Object in the construction of which Energoventilyatsiya LLC took part.",
        heroButton: "Get a Quote",
        images: {
          img1: {
            alt: "A hotel in red brick style with decorative elements and arched windows",
            src: "/images/projects/public_facilities/hotelMain.webp",
          },
          img2: {
            alt: "A hotel in red brick style with decorative elements and arched windows",
            src: "/images/projects/public_facilities/hotelMain.webp",
          },
          img3: {
            alt: "A hotel in red brick style with decorative elements and arched windows",
            src: "/images/projects/public_facilities/hotelMain.webp",
          },
        },
        link: "...",
        address: "Synyava village, 1 Shevchenka Street",
        categorySlug: "public_facilities",
        category: "Public facilities and office centers",
        linkCategory: "/projects/public_facilities",
      },

      12: {
        id: "12",
        projectSlug: "hotel_molodizhnyi",
        title: "Hotel Molodizhnyi",
        mainImg: "/images/projects/public_facilities/hotelMolodMain.webp",
        mainAlt: "A hotel with black and white facades",
        heroDescription:
          "Object in the construction of which Energoventilyatsiya LLC took part.",
        heroButton: "Get a Quote",
        images: {
          img1: {
            alt: "A hotel with black and white facades",
            src: "/images/projects/public_facilities/hotelMolodMain.webp",
          },
          img2: {
            alt: "A hotel with black and white facades",
            src: "/images/projects/public_facilities/hotelMolodMain.webp",
          },
          img3: {
            alt: "A hotel with black and white facades",
            src: "/images/projects/public_facilities/hotelMolodMain.webp",
          },
        },
        link: "...",
        address:
          "Kyiv region, Kyiv-Sviatoshynskyi district, Shpytky village, 2 Fizkulturna Street",
        categorySlug: "public_facilities",
        category: "Public facilities and office centers",
        linkCategory: "/projects/public_facilities",
      },

      13: {
        id: "13",
        projectSlug: "cafe_brovar",
        title: "Cafe Brovar",
        mainImg: "/images/projects/public_facilities/cafeBrovarMain.webp",
        mainAlt:
          "The café Brovar, located on the ground floor of a multi-story building",
        heroDescription:
          "Object in the construction of which Energoventilyatsiya LLC took part.",
        heroButton: "Get a Quote",
        images: {
          img1: {
            alt: "The café Brovar, located on the ground floor of a multi-story building",
            src: "/images/projects/public_facilities/cafeBrovarMain.webp",
          },
          img2: {
            alt: "The café Brovar, located on the ground floor of a multi-story building",
            src: "/images/projects/public_facilities/cafeBrovarMain.webp",
          },
          img3: {
            alt: "The café Brovar, located on the ground floor of a multi-story building",
            src: "/images/projects/public_facilities/cafeBrovarMain.webp",
          },
        },
        link: "...",
        address: "Kyiv, Darnytskyi Boulevard",
        categorySlug: "public_facilities",
        category: "Public facilities and office centers",
        linkCategory: "/projects/public_facilities",
      },

      14: {
        id: "14",
        projectSlug: "office_center",
        title: "Office center",
        mainImg: "/images/projects/public_facilities/officeCenterMain.webp",
        mainAlt: "A business center with modern glass and metal finishing",
        heroDescription:
          "Object in the construction of which Energoventilyatsiya LLC took part.",
        heroButton: "Get a Quote",
        images: {
          img1: {
            alt: "A business center with modern glass and metal finishing",
            src: "/images/projects/public_facilities/officeCenterMain.webp",
          },
          img2: {
            alt: "A business center with modern glass and metal finishing",
            src: "/images/projects/public_facilities/officeCenterMain.webp",
          },
          img3: {
            alt: "A business center with modern glass and metal finishing",
            src: "/images/projects/public_facilities/officeCenterMain.webp",
          },
        },
        link: "...",
        address: "Zhytomyr",
        categorySlug: "public_facilities",
        category: "Public facilities and office centers",
        linkCategory: "/projects/public_facilities",
      },

      // ===========================================

      15: {
        id: "15",
        projectSlug: "sanatorium_yalynka",
        title: "Kyiv city children's sanatorium Yalynka",
        mainImg: "/images/projects/hskc/sanatorium_yalynkaMain.webp",
        mainAlt:
          "The main building of the Kyiv City Children's Sanatorium Yalynka, surrounded by trees, with a bright facade and an area for children to relax",
        heroDescription:
          "Object in the construction of which Energoventilyatsiya LLC took part.",
        heroButton: "Get a Quote",
        images: {
          img1: {
            alt: "The main building of the Kyiv City Children's Sanatorium Yalynka, surrounded by trees, with a bright facade and an area for children to relax",
            src: "/images/projects/hskc/sanatorium_yalynkaMain.webp",
          },
          img2: {
            alt: "The main building of the Kyiv City Children's Sanatorium Yalynka, surrounded by trees, with a bright facade and an area for children to relax",
            src: "/images/projects/hskc/sanatorium_yalynkaMain.webp",
          },
          img3: {
            alt: "The main building of the Kyiv City Children's Sanatorium Yalynka, surrounded by trees, with a bright facade and an area for children to relax",
            src: "/images/projects/hskc/sanatorium_yalynkaMain.webp",
          },
        },
        link: "...",
        address: "Kyiv, 20 Hamarnyka Street",
        categorySlug: "hskc",
        category: "Hospitals schools kindergartens churches",
        linkCategory: "/projects/hskc",
      },

      16: {
        id: "16",
        projectSlug: "cancer_dispensary",
        title: "Cancer dispensary of the regional hospital in Kyiv",
        mainImg: "/images/projects/hskc/cancer_dispensaryMain.webp",
        mainAlt:
          "The building of the oncology dispensary of the regional hospital in Kyiv with a modern facade, several floors, surrounded by green territory",
        heroDescription:
          "Object in the construction of which Energoventilyatsiya LLC took part.",
        heroButton: "Get a Quote",
        images: {
          img1: {
            alt: "The building of the oncology dispensary of the regional hospital in Kyiv with a modern facade, several floors, surrounded by green territory",
            src: "/images/projects/hskc/cancer_dispensaryMain.webp",
          },
          img2: {
            alt: "The building of the oncology dispensary of the regional hospital in Kyiv with a modern facade, several floors, surrounded by green territory",
            src: "/images/projects/hskc/cancer_dispensaryMain.webp",
          },
          img3: {
            alt: "The building of the oncology dispensary of the regional hospital in Kyiv with a modern facade, several floors, surrounded by green territory",
            src: "/images/projects/hskc/cancer_dispensaryMain.webp",
          },
        },
        link: "...",
        address: "Kyiv",
        categorySlug: "hskc",
        category: "Hospitals schools kindergartens churches",
        linkCategory: "/projects/hskc",
      },

      17: {
        id: "17",
        projectSlug: "medical_clinic_innovation",
        title: "Medical clinic Innovation",
        mainImg: "/images/projects/hskc/medical_clinic_innovationMain.webp",
        mainAlt:
          "The facade of the three-story medical clinic Innovation with a modern design",
        heroDescription:
          "Object in the construction of which Energoventilyatsiya LLC took part.",
        heroButton: "Get a Quote",
        images: {
          img1: {
            alt: "The facade of the three-story medical clinic Innovation with a modern design",
            src: "/images/projects/hskc/medical_clinic_innovationMain.webp",
          },
          img2: {
            alt: "The facade of the three-story medical clinic Innovation with a modern design",
            src: "/images/projects/hskc/medical_clinic_innovationMain.webp",
          },
          img3: {
            alt: "The facade of the three-story medical clinic Innovation with a modern design",
            src: "/images/projects/hskc/medical_clinic_innovationMain.webp",
          },
        },
        link: "...",
        address: "Liutizh village, Vyshhorod district",
        categorySlug: "hskc",
        category: "Hospitals schools kindergartens churches",
        linkCategory: "/projects/hskc",
      },

      18: {
        id: "18",
        projectSlug: "epiphany_cathedral",
        title: "Epiphany Cathedral",
        mainImg: "/images/projects/hskc/epiphany_cathedralMain.webp",
        mainAlt:
          "Cathedral with high domes and traditional Orthodox architecture",
        heroDescription:
          "Object in the construction of which Energoventilyatsiya LLC took part.",
        heroButton: "Get a Quote",
        images: {
          img1: {
            alt: "Cathedral with high domes and traditional Orthodox architecture",
            src: "/images/projects/hskc/epiphany_cathedralMain.webp",
          },
          img2: {
            alt: "Cathedral with high domes and traditional Orthodox architecture",
            src: "/images/projects/hskc/epiphany_cathedralMain.webp",
          },
          img3: {
            alt: "Cathedral with high domes and traditional Orthodox architecture",
            src: "/images/projects/hskc/epiphany_cathedralMain.webp",
          },
        },
        link: "...",
        address: "Horlivka, Donetsk region",
        categorySlug: "hskc",
        category: "Hospitals schools kindergartens churches",
        linkCategory: "/projects/hskc",
      },

      19: {
        id: "19",
        projectSlug: "residential_buildings",
        title: "Residential buildings",
        mainImg: "/images/projects/hskc/residential_buildingsMain.webp",
        mainAlt:
          "Modern multi-storey residential buildings with balconies located in the urban area",
        heroDescription:
          "Object in the construction of which Energoventilyatsiya LLC took part.",
        heroButton: "Get a Quote",
        images: {
          img1: {
            alt: "Modern multi-storey residential buildings with balconies located in the urban area",
            src: "/images/projects/hskc/residential_buildings1.webp",
          },
          img2: {
            alt: "Modern multi-storey residential buildings with balconies located in the urban area",
            src: "/images/projects/hskc/residential_buildingsMain.webp",
          },
          img3: {
            alt: "Modern multi-storey residential buildings with balconies located in the urban area",
            src: "/images/projects/hskc/residential_buildings2.webp",
          },
        },
        link: "...",
        address:
          "Brovary, Olympiyska Street; Kyiv, Kiltseva Street; Kyiv, residential complex (40-Richchya Zhovtnya Avenue, 60); Kyiv, residential building No. 112 (Metrologichna Street); Brovary, Krasovskoho Street; Brovary, Kirova Street; Brovary, Hrushevskoho Street; Brovary, Chernyakhovskoho Street; Kyiv, Shumskoho Street; Kotsiubynske, residential building",
        categorySlug: "hskc",
        category: "Hospitals schools kindergartens churches",
        linkCategory: "/projects/hskc",
      },

      // ===========================================

      20: {
        id: "20",
        projectSlug: "amstor",
        title: "Network of public and shopping centers Amstor",
        mainImg: "/images/projects/trade_complexes/amstorMain.webp",
        mainAlt:
          "The facade of the shopping and entertainment center Amstor with bright signs and a spacious parking lot in front of the building",
        heroDescription:
          "Object in the construction of which Energoventilyatsiya LLC took part.",
        heroButton: "Get a Quote",
        images: {
          img1: {
            alt: "The facade of the shopping and entertainment center Amstor with bright signs and a spacious parking lot in front of the building",
            src: "/images/projects/trade_complexes/amstorMain.webp",
          },
          img2: {
            alt: "The facade of the shopping and entertainment center Amstor with bright signs and a spacious parking lot in front of the building",
            src: "/images/projects/trade_complexes/amstorMain.webp",
          },
          img3: {
            alt: "The facade of the shopping and entertainment center Amstor with bright signs and a spacious parking lot in front of the building",
            src: "/images/projects/trade_complexes/amstorMain.webp",
          },
        },
        link: "...",
        address:
          "Berdiansk, 75-3 Komunariv Street; Dnipropetrovsk, 31-d Gazeta Pravda Passage; Donetsk, 23-d Illicha Street; Zaporizhzhia (6 objects); Kyiv (3 objects); Kramatorsk, 1-m Mayakovskoho Street; Kremenchuk, 7 Khalameniuka Street; Mariupol (4 objects); Mykolaiv, 9-r Heroiv Stalingrada Avenue; Sviatohirsk, 5-a Ostrovskoho Street; Sievierodonetsk, Cosmonauts Avenue",
        categorySlug: "trade_complexes",
        category: "Public and trade complexes",
        linkCategory: "/projects/trade_complexes",
      },

      21: {
        id: "21",
        projectSlug: "silpo",
        title: "Silpo supermarket chain",
        mainImg: "/images/projects/trade_complexes/silpoMain.webp",
        mainAlt:
          "Entrance to Silpo supermarket with a company sign and product windows",
        heroDescription:
          "Object in the construction of which Energoventilyatsiya LLC took part.",
        heroButton: "Get a Quote",
        images: {
          img1: {
            alt: "Entrance to Silpo supermarket with a company sign and product windows",
            src: "/images/projects/trade_complexes/silpoMain.webp",
          },
          img2: {
            alt: "Entrance to Silpo supermarket with a company sign and product windows",
            src: "/images/projects/trade_complexes/silpoMain.webp",
          },
          img3: {
            alt: "Entrance to Silpo supermarket with a company sign and product windows",
            src: "/images/projects/trade_complexes/silpoMain.webp",
          },
        },
        link: "...",
        address:
          "Kyiv, Darnytskyi Boulevard, 8-a; Kyiv, 8 Draizera Street; Kyiv, 3 Karelskiy Lane; Kyiv, 107 Malevycha Street; Kyiv, 10 Myloslavska Street; Kyiv, 20 Poliarna Street",
        categorySlug: "trade_complexes",
        category: "Public and trade complexes",
        linkCategory: "/projects/trade_complexes",
      },

      22: {
        id: "22",
        projectSlug: "retroville",
        title: "Shopping center Retroville",
        mainImg: "/images/projects/trade_complexes/retrovilleMain.webp",
        mainAlt:
          "The facade of the Retroville shopping center with a modern design and large glass windows",
        heroDescription:
          "Object in the construction of which Energoventilyatsiya LLC took part.",
        heroButton: "Get a Quote",
        images: {
          img1: {
            alt: "The facade of the Retroville shopping center with a modern design and large glass windows",
            src: "/images/projects/trade_complexes/retrovilleMain.webp",
          },
          img2: {
            alt: "The facade of the Retroville shopping center with a modern design and large glass windows",
            src: "/images/projects/trade_complexes/retrovilleMain.webp",
          },
          img3: {
            alt: "The facade of the Retroville shopping center with a modern design and large glass windows",
            src: "/images/projects/trade_complexes/retrovilleMain.webp",
          },
        },
        link: "...",
        address: "Kyiv, 47 Pravdy Avenue",
        categorySlug: "trade_complexes",
        category: "Public and trade complexes",
        linkCategory: "/projects/trade_complexes",
      },

      23: {
        id: "23",
        projectSlug: "darynok",
        title: "Shopping center Darynok",
        mainImg: "/images/projects/trade_complexes/darynokMain.webp",
        mainAlt:
          "The facade of the Darynok shopping center is brown in color with large and bright windows",
        heroDescription:
          "Object in the construction of which Energoventilyatsiya LLC took part.",
        heroButton: "Get a Quote",
        images: {
          img1: {
            alt: "The facade of the Darynok shopping center is brown in color with large and bright windows",
            src: "/images/projects/trade_complexes/darynokMain.webp",
          },
          img2: {
            alt: "The facade of the Darynok shopping center is brown in color with large and bright windows",
            src: "/images/projects/trade_complexes/darynokMain.webp",
          },
          img3: {
            alt: "The facade of the Darynok shopping center is brown in color with large and bright windows",
            src: "/images/projects/trade_complexes/darynokMain.webp",
          },
        },
        link: "...",
        address: "Kyiv, Magnitohorska Street",
        categorySlug: "trade_complexes",
        category: "Public and trade complexes",
        linkCategory: "/projects/trade_complexes",
      },

      24: {
        id: "24",
        projectSlug: "novus",
        title: "Hypermarket Novus",
        mainImg: "/images/projects/trade_complexes/novusMain.webp",
        mainAlt:
          "The entrance to the Novus hypermarket with a bright sign and wide windows displaying a range of products",
        heroDescription:
          "Object in the construction of which Energoventilyatsiya LLC took part.",
        heroButton: "Get a Quote",
        images: {
          img1: {
            alt: "The entrance to the Novus hypermarket with a bright sign and wide windows displaying a range of products",
            src: "/images/projects/trade_complexes/novus1.png",
          },
          img2: {
            alt: "The entrance to the Novus hypermarket with a bright sign and wide windows displaying a range of products",
            src: "/images/projects/trade_complexes/novusMain.webp",
          },
          img3: {
            alt: "The entrance to the Novus hypermarket with a bright sign and wide windows displaying a range of products",
            src: "/images/projects/trade_complexes/novus1.png",
          },
        },
        link: "...",
        address:
          "Brovary, 253 Kyivska Street; Kyiv, 18 Romana Shukhevycha Avenue",
        categorySlug: "trade_complexes",
        category: "Public and trade complexes",
        linkCategory: "/projects/trade_complexes",
      },

      25: {
        id: "25",
        projectSlug: "forum",
        title: "Trade center Forum",
        mainImg: "/images/projects/trade_complexes/forumMain.webp",
        mainAlt:
          "The facade of the shopping and entertainment center Forum with a modern design, large windows and signs advertising shops and entertainment establishments",
        heroDescription:
          "Object in the construction of which Energoventilyatsiya LLC took part.",
        heroButton: "Get a Quote",
        images: {
          img1: {
            alt: "The facade of the shopping and entertainment center Forum with a modern design, large windows and signs advertising shops and entertainment establishments",
            src: "/images/projects/trade_complexes/forum1.png",
          },
          img2: {
            alt: "The facade of the shopping and entertainment center Forum with a modern design, large windows and signs advertising shops and entertainment establishments",
            src: "/images/projects/trade_complexes/forumMain.webp",
          },
          img3: {
            alt: "The facade of the shopping and entertainment center Forum with a modern design, large windows and signs advertising shops and entertainment establishments",
            src: "/images/projects/trade_complexes/forum1.png",
          },
        },
        link: "...",
        address: "Lviv",
        categorySlug: "trade_complexes",
        category: "Public and trade complexes",
        linkCategory: "/projects/trade_complexes",
      },

      // ===========================================

      26: {
        id: "26",
        projectSlug: "kraft_foods_ukraine",
        title: "Confectionery factory Kraft Foods of Ukraine",
        mainImg: "/images/projects/industry/kraft_foods_ukraineMain.webp",
        mainAlt:
          "Exterior view of the blue facade of the Kraft Foods of Ukraine confectionery factory with large windows and brand signs",
        heroDescription:
          "Object in the construction of which Energoventilyatsiya LLC took part.",
        heroButton: "Get a Quote",
        images: {
          img1: {
            alt: "Exterior view of the blue facade of the Kraft Foods of Ukraine confectionery factory with large windows and brand signs",
            src: "/images/projects/industry/kraft_foods_ukraineMain.webp",
          },
          img2: {
            alt: "Exterior view of the blue facade of the Kraft Foods of Ukraine confectionery factory with large windows and brand signs",
            src: "/images/projects/industry/kraft_foods_ukraineMain.webp",
          },
          img3: {
            alt: "Exterior view of the blue facade of the Kraft Foods of Ukraine confectionery factory with large windows and brand signs",
            src: "/images/projects/industry/kraft_foods_ukraineMain.webp",
          },
        },
        link: "...",
        address: "Trostianets",
        categorySlug: "industry",
        category: "Industry",
        linkCategory: "/projects/industry",
      },

      27: {
        id: "27",
        projectSlug: "alko_invest",
        title: "Objects of JSC ALKO INVEST (trademark «Nemiroff»)",
        mainImg: "/images/projects/industry/alko_investMain.webp",
        mainAlt:
          "The facade of the ALKO INVEST CJSC building with a modern design, showing the company's logo on the outer wall",
        heroDescription:
          "Object in the construction of which Energoventilyatsiya LLC took part.",
        heroButton: "Get a Quote",
        images: {
          img1: {
            alt: "The facade of the ALKO INVEST CJSC building with a modern design, showing the company's logo on the outer wall",
            src: "/images/projects/industry/alko_invest1.webp",
          },
          img2: {
            alt: "The facade of the ALKO INVEST CJSC building with a modern design, showing the company's logo on the outer wall",
            src: "/images/projects/industry/alko_investMain.webp",
          },
          img3: {
            alt: "The facade of the ALKO INVEST CJSC building with a modern design, showing the company's logo on the outer wall",
            src: "/images/projects/industry/alko_invest1.webp",
          },
        },
        link: "...",
        address: "Nemyriv",
        categorySlug: "industry",
        category: "Industry",
        linkCategory: "/projects/industry",
      },

      28: {
        id: "28",
        projectSlug: "osmoloda_plant",
        title: "OSMOLODA LLC Building Materials Plant",
        mainImg: "/images/projects/industry/osmoloda_plantMain.webp",
        mainAlt:
          "The exterior of the OSMOLODA LLC building materials plant with production areas",
        heroDescription:
          "Object in the construction of which Energoventilyatsiya LLC took part.",
        heroButton: "Get a Quote",
        images: {
          img1: {
            alt: "The exterior of the OSMOLODA LLC building materials plant with production areas",
            src: "/images/projects/industry/osmoloda_plantMain.webp",
          },
          img2: {
            alt: "The exterior of the OSMOLODA LLC building materials plant with production areas",
            src: "/images/projects/industry/osmoloda_plantMain.webp",
          },
          img3: {
            alt: "The exterior of the OSMOLODA LLC building materials plant with production areas",
            src: "/images/projects/industry/osmoloda_plantMain.webp",
          },
        },
        link: "...",
        address:
          "Broshniv-Osada village, Rozhniativ district, Ivano-Frankivsk region",
        categorySlug: "industry",
        category: "Industry",
        linkCategory: "/projects/industry",
      },

      // +++++++++++++++++++++++++++++++++++

      29: {
        id: "29",
        projectSlug: "altacenter",
        title: "Alta Center in Kyiv",
        mainImg: "/images/projects/trade_complexes/altacenterMain.webp",
        mainAlt:
          "The facade of the Alta Center in Kyiv is green with a modern architectural design",
        heroDescription:
          "Object in the construction of which Energoventilyatsiya LLC took part.",
        heroButton: "Get a Quote",
        images: {
          img1: {
            alt: "The facade of the Alta Center in Kyiv is green with a modern architectural design",
            src: "/images/projects/trade_complexes/altacenter1.png",
          },
          img2: {
            alt: "The facade of the Alta Center in Kyiv is green with a modern architectural design",
            src: "/images/projects/trade_complexes/altacenterMain.webp",
          },
          img3: {
            alt: "The facade of the Alta Center in Kyiv is green with a modern architectural design",
            src: "/images/projects/trade_complexes/altacenter1.png",
          },
        },
        link: "...",
        address: "Kyiv",
        categorySlug: "trade_complexes",
        category: "Public and trade complexes",
        linkCategory: "/projects/trade_complexes",
      },

      30: {
        id: "30",
        projectSlug: "karavan",
        title: "Shopping and entertainment center Karavan",
        mainImg: "/images/projects/trade_complexes/karavanMain.webp",
        mainAlt:
          "Facade of the Karavan shopping and entertainment center with a large logo, entrance doors and parking spaces in the foreground",
        heroDescription:
          "Object in the construction of which Energoventilyatsiya LLC took part.",
        heroButton: "Get a Quote",
        images: {
          img1: {
            alt: "Facade of the Karavan shopping and entertainment center with a large logo, entrance doors and parking spaces in the foreground",
            src: "/images/projects/trade_complexes/karavan1.png",
          },
          img2: {
            alt: "Facade of the Karavan shopping and entertainment center with a large logo, entrance doors and parking spaces in the foreground",
            src: "/images/projects/trade_complexes/karavanMain.webp",
          },
          img3: {
            alt: "Facade of the Karavan shopping and entertainment center with a large logo, entrance doors and parking spaces in the foreground",
            src: "/images/projects/trade_complexes/karavan2.png",
          },
        },
        link: "...",
        address: "Kyiv; Kharkiv; Yuvileine settlement, Dnipropetrovsk region",
        categorySlug: "trade_complexes",
        category: "Public and trade complexes",
        linkCategory: "/projects/trade_complexes",
      },

      31: {
        id: "31",
        projectSlug: "epicenter",
        title: "Hypermarket chain Epicenter",
        mainImg: "/images/projects/trade_complexes/epicenterMain.webp",
        mainAlt:
          "The facade of the Epicenter hypermarket with a large logo, entrance doors and modern design, surrounded by parking spaces",
        heroDescription:
          "Object in the construction of which Energoventilyatsiya LLC took part.",
        heroButton: "Get a Quote",
        images: {
          img1: {
            alt: "The facade of the Epicenter hypermarket with a large logo, entrance doors and modern design, surrounded by parking spaces",
            src: "/images/projects/trade_complexes/epicenter1.png",
          },
          img2: {
            alt: "The facade of the Epicenter hypermarket with a large logo, entrance doors and modern design, surrounded by parking spaces",
            src: "/images/projects/trade_complexes/epicenterMain.webp",
          },
          img3: {
            alt: "The facade of the Epicenter hypermarket with a large logo, entrance doors and modern design, surrounded by parking spaces",
            src: "/images/projects/trade_complexes/epicenter2.png",
          },
        },
        link: "...",
        address:
          "Kyiv (7 facilities, areas ranging from 10,700 m² to 103,400 m²); Kyiv region, Kalynivka settlement, Industrialna St, 5, Kalynivka Logistics Center - 51,500 m²; Vinnytsia, Zarvantsi village, Khmelnytske Highway St, 1-A - 21,200 m²; Horlivka, Zhukova St, 7 - 11,000 m²; Dnipro (2 facilities) - 29,400 m² and 30,100 m²; Makiivka, 250-Richchia Donbasu St, 74 - 30,850 m²; Donetsk, Shutova St, 37 - 28,000 m²; Zaporizhzhia, Zaporizka St, 1-V - 18,700 m²; Ivano-Frankivsk, Ivasiuka St, 17 - 23,500 m²; Kamianets-Podilskyi, Khmelnytske Highway St, 11 - 11,010 m²; Kropyvnytskyi, Popova St, 8 - 16, 700 m²; Kryvyi Rih, Bykova St, 33 - 20,550 m²; Luhansk (2 facilities) - 27,700 m²; Lutsk, Lypyny, Okrushna St, 37 - 21,600 m²; Lviv, Horodotska St, 302 - 25,908 m²; Mariupol, Lenina Ave, 130 - 21,600 m²; Mykolaiv, Zhovtnevy Ave, 234-V - 15,805 m²; Mukachevo, Lavkivska St, 1-D - 11,000 m²; Odesa (2 facilities) - 30,000 m² and 50,000 m²; Sevastopol, Otradna St, 15 - 22,410 m²; Simferopol, Peremohy Ave, 245 - 26,400 m²; Stryi, Olzhycha St, 18 - 9,540 m²; Ternopil, Poliska St, 7 - 15,751 m²; Uzhhorod, Babyaka St, 7/1 - 13,000 m²; Kharkiv, Arkhitektoriv St, 7 - 22,300 m²; Kherson, Beryslavske Highway, 17 - 20,630 m²; Khmelnytskyi, Zarichanska St, 11/4 - 23,300 m²; Cherkasy, 30-Richchia Peremohy St, 29 - 18,000 m²; Chernivtsi, Khotynska St, 10-A - 27,260 m²; Chernihiv, Novoselivka, Shevchenka St, 57 - 21,700 m²; Poltava, Kyivske Highway, 41 - 27,700 m²; Rivne, Makarova St, 17 - 26,000 m²; Lviv, Bohdana Khmelnytskoho St, 188A - 88,455 m²; Zhytomyr, Kyivske Highway, 4/2 - 19,171 m²; Uman, Kyivska St, 27 - 6,336 m²; Hmelnitskyi region, Horodok, Shevchenka St, 39/15, IQ Office - 6,250 m²",
        categorySlug: "trade_complexes",
        category: "Public and trade complexes",
        linkCategory: "/projects/trade_complexes",
      },

      32: {
        id: "32",
        projectSlug: "odeskiy_bulvar",
        title: "Residential complex Odesa Boulevard",
        mainImg: "/images/projects/hskc/odeskiy_bulvarMain.webp",
        mainAlt:
          "Residential complex of bright high-rise buildings Odesa Boulevard",
        heroDescription:
          "Object in the construction of which Energoventilyatsiya LLC took part.",
        heroButton: "Get a Quote",
        images: {
          img1: {
            alt: "Residential complex of bright high-rise buildings Odesa Boulevard",
            src: "/images/projects/hskc/odeskiy_bulvarMain.webp",
          },
          img2: {
            alt: "Residential complex of bright high-rise buildings Odesa Boulevard",
            src: "/images/projects/hskc/odeskiy_bulvarMain.webp",
          },
          img3: {
            alt: "Residential complex of bright high-rise buildings Odesa Boulevard",
            src: "/images/projects/hskc/odeskiy_bulvarMain.webp",
          },
        },
        link: "...",
        address: "Kyiv region, Novosilky village",
        categorySlug: "hskc",
        category: "Hospitals schools kindergartens churches",
        linkCategory: "/projects/hskc",
      },

      33: {
        id: "33",
        projectSlug: "blockbuster",
        title: "Shopping and entertainment complex Blockbuster",
        mainImg: "/images/projects/trade_complexes/blockbusterMain.webp",
        mainAlt:
          "The glass facade of the BlockBuster entertainment center with bright red inserts with a large logo",
        heroDescription:
          "Object in the construction of which Energoventilyatsiya LLC took part.",
        heroButton: "Get a Quote",
        images: {
          img1: {
            alt: "The glass facade of the BlockBuster entertainment center with bright red inserts with a large logo",
            src: "/images/projects/trade_complexes/blockbusterMain.webp",
          },
          img2: {
            alt: "The glass facade of the BlockBuster entertainment center with bright red inserts with a large logo",
            src: "/images/projects/trade_complexes/blockbusterMain.webp",
          },
          img3: {
            alt: "The glass facade of the BlockBuster entertainment center with bright red inserts with a large logo",
            src: "/images/projects/trade_complexes/blockbusterMain.webp",
          },
        },
        link: "...",
        address: "Kyiv, 34-v S. Bandery Avenue",
        categorySlug: "trade_complexes",
        category: "Public and trade complexes",
        linkCategory: "/projects/trade_complexes",
      },

      34: {
        id: "34",
        projectSlug: "river_mall",
        title: "River Mall shopping center",
        mainImg: "/images/projects/trade_complexes/river_mallMain.webp",
        mainAlt:
          "The facade of the River Mall shopping center with modern design and glass windows",
        heroDescription:
          "Object in the construction of which Energoventilyatsiya LLC took part.",
        heroButton: "Get a Quote",
        images: {
          img1: {
            alt: "The facade of the River Mall shopping center with modern design and glass windows",
            src: "/images/projects/trade_complexes/river_mall1.png",
          },
          img2: {
            alt: "The facade of the River Mall shopping center with modern design and glass windows",
            src: "/images/projects/trade_complexes/river_mallMain.webp",
          },
          img3: {
            alt: "The facade of the River Mall shopping center with modern design and glass windows",
            src: "/images/projects/trade_complexes/river_mall1.png",
          },
        },
        link: "...",
        address: "Kyiv, 12 Dniprovska Naberezhna",
        categorySlug: "trade_complexes",
        category: "Public and trade complexes",
        linkCategory: "/projects/trade_complexes",
      },
    },
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
  ContactUs: {
    formTitle: "Contact Us",
    placeholderName: "Name",
    placeholderEmail: "Email",
    placeholderMessage: "Message",
    button: "send message",
    msg_success: "Congratulations!!<br/>Email sent successfully!",
    msg_error: "Oops!!<br/>Error sending email<br/>",
    msg_btn: "Close",
    acceptTerms: "Accept ",
    requiredName: "Minimum 2 symbols",
    requiredEmail: "Enter valid email address",
    requiredMessage: "Minimum 15 symbols",
    required: "Required field",
  },
  HeroRightSide: {
    services: {
      title: "Our Services",
      list: {
        designing: {
          href: "/services/designing",
          svgName: "SideServicesDesigning",
          title: "Designing",
          descriptions:
            "The initial stage of creating a comfortable atmosphere.",
        },
        production: {
          href: "/services/production-and-sale-of-finished-products",
          svgName: "SideServicesProduction",
          title: "Production",
          descriptions: "Manufacturing and delivery of finished products.",
        },
        assembling: {
          href: "/services/installation-of-ventilation-and-air-conditioning-systems",
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
          href: "/services/control-and-measuring-devices-and-automation",
          svgName: "SideTodoAutomation",
          title: "Automation",
          descriptions:
            "Automation of ventilation and air conditioning systems.",
        },
        works: {
          href: "/services/start-up-and-debugging-works",
          svgName: "SideTodoCommissioning",
          title: "Commissioning",
          descriptions:
            "Initial testing of installed ventilation and air conditioning systems.",
        },
        services: {
          href: "/services/service-maintenance",
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
          descriptions: "Darnytskyi Boulevard, 12, <br/> Kyiv, 02192",
        },
        hours: {
          title: "Office Hours",
          descriptions: "Mon-Fri: 9:00 AM – 6:00 PM <br/> Sat-Sun: Closed",
        },
        touch: {
          title: "Get in Touch",
          descriptions: "",
          mail: "info@envent.kiev.ua",
          tel: "+38(044) 503 83 77",
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
          images: {
            1: {
              id: "b839d73e",
              src: "/images/services/designing-1.webp",
              alt: "Employees in the office are engaged in the design of ventilation systems.",
            },
            2: {
              id: "3e3e4b5b",
              src: "/images/services/designing-3.jpg",
              alt: "3D model of the building with detailing of the ventilation system passing through all floors.",
            },
            3: {
              id: "79a9e1b6",
              src: "/images/services/designing-2.jpg",
              alt: "The engineer checks the printed plans of ventilation systems",
            },
          },
          imgCard: {
            1: {
              id: "b839d",
              src: "/images/services/designing-1.webp",
              alt: "Employees in the office are engaged in the design of ventilation systems.",
            },
            2: {
              id: "3e3e4",
              src: "/images/services/designing-3.jpg",
              alt: "3D model of the building with detailing of the ventilation system passing through all floors.",
            },
            3: {
              id: "79a9e",
              src: "/images/services/designing-2.jpg",
              alt: "The engineer checks the printed plans of ventilation systems",
            },
          },
          slug: "designing",
          heroBG: "/images/services/designing-1.webp",
          secondBtn: "learn more",
          p1: "It is the right design solutions that make it possible to avoid 'building disease' in the form of high humidity, fungal growth and an unhealthy microclimate in the premises, which are the costs of using new construction technologies, thermal insulation materials and hermetic glass units.",
          p2: "Highly qualified specialists of the design department of Energoventilatsiya LLC are equipped with modern computer equipment with the necessary software, which allows you to design heating, ventilation, air conditioning systems, including 'clean rooms'.",
          p3: "All project documentation is carried out strictly in compliance with the regulatory documents in force in Ukraine. Our designers always offer several options for technical solutions taking into account the features of the object, work out ways to reduce the total cost of the project without losing the functionality of the system.",
          p4: "The main advantage of our company in the field of design is not only mastery of theory, but also extensive practice, close interaction of all departments of the company, thanks to which we will offer you the most successful design solution from the point of view of saving your resources and ease of maintenance. At the request of the customer, our specialists can carry out examination of finished projects, technical inspection and certification of installed climate systems.",
          process: {
            text: "Design is a key stage that ensures a comfortable atmosphere in the room thanks to the correct approach to the selection of air parameters, avoiding 'building disease' and the work of qualified specialists.",
            list: {
              l1: "Designing is a key stage.",
              l2: "Provides a comfortable atmosphere.",
              l3: "Takes air parameters into account.",
              l4: "Avoids 'building disease'.",
              l5: "It is performed by qualified specialists.",
            },
          },
        },
        2: {
          id: "2",
          hero: {
            title: "Production and sale of finished products",
            description:
              "'Energoventilatsia' LLC has its own production base with workshops for the manufacture of air ducts, with warm warehouses of finished products, raw materials and materials, tools and components.",
            button: "get a quote",
          },
          images: {
            1: {
              id: "1754",
              src: "/images/services/3baza_n.jpg",
              alt: "A production shop with metal sheets on a cutting machine.",
            },
            2: {
              id: "29567",
              src: "/images/services/4baza_n.jpg",
              alt: "A warehouse area with large rolls of metal suspended from a crane",
            },
            3: {
              id: "3234",
              src: "/images/services/5baza_n.jpg",
              alt: "Workers on a production line working with metal parts in a workshop",
            },
          },
          imgCard: {
            1: {
              id: "4b16",
              src: "/images/services/prgp3.jpg",
              alt: "Workers in a production shop work with metal sheets on a machine",
            },
            2: {
              id: "4f90",
              src: "/images/services/prgp5.jpg",
              alt: "Metal sheets passing through a machine in a production shop",
            },
            3: {
              id: "4f99",
              src: "/images/services/prgp12.jpg",
              alt: "A machine for processing metal pipes in a production workshop.",
            },
          },
          slug: "production-and-sale-of-finished-products",
          heroBG:
            "/images/services/production-and-sale-of-finished-products.webp",
          secondBtn: "learn more",
          p1: "Air ducts are one of the most important elements of ventilation and air conditioning systems. Together with other devices, they ensure air transportation in the ventilation system.",
          p2: "Classification of  air ducts.<br /> According to the configuration, there are air ducts of rectangular, square and round sections. They are made of straight and shaped component parts. The dimensions and types of air ducts are established in BSN 353-86 'Design and application of air ducts from unified parts', TU 36-736-93 'Metal ventilation ducts', SNiP 2.04.05-91 'Heating, ventilation, air conditioning systems'. without flange and welded.",
          p3: "Metal air ducts.<br />Normal air ducts of round and rectangular section are made of sheet galvanized or stainless steel. Air ducts of round section can be made of tape with a width of 125 to 135 mm (spiral-wound) or, in the same way as rectangular, - from a sheet (straight-seam). Round air ducts are more economical in terms of metal consumption and labor costs in comparison with rectangular ones.",
          p4: "Manufacturing air ducts.<br /> The company's products are round straight-seam, spirally wound and rectangular metal air ducts that comply with GOST 24 751-81 and SNiP 2.04.05-91 (the entire size range), shaped parts for air ducts and non-standard ventilation products. The material is galvanized or stainless steel with a thickness of up to 0.9 mm. The production of air ducts is substantially automated. a bending machine, a profiling machine and much more - ensures high labor productivity and high quality of air ducts and other ventilation products.",
          process: {
            text: "'Energoventilatsia' LLC automated the production of air ducts using:",
            list: {
              l1: "Machines for making taps.",
              l2: "A line for the production of air ducts.",
              l3: "The machine for spiral-wound air ducts.",
              l4: "System of plasma metal cutting.",
              l5: "Profiling machine for details.",
            },
          },
        },
        3: {
          id: "3",
          hero: {
            title: "Installation of ventilation and air conditioning systems",
            description:
              "One of the priority areas of activity of 'Energoventilatsia' LLC is the installation of ventilation and air conditioning systems , which is one of the most responsible stages of work on creating an artificial climate.",
            button: "get a quote",
          },
          images: {
            1: {
              id: "12148",
              src: "/images/services/montazh_foto4.webp",
              alt: "Office space with installed ventilation system",
            },
            2: {
              id: "20000",
              src: "/images/services/montazh_foto5.jpg",
              alt: "A warehouse area with large rolls of metal suspended from a crane",
            },
            3: {
              id: "311111",
              src: "/images/services/montazh_foto6.jpg",
              alt: "Ceiling with large ventilation pipes and lighting structures in an industrial location",
            },
          },
          imgCard: {
            1: {
              id: "132",
              src: "/images/services/montazh_foto1.jpg",
              alt: "Installed ventilation ducts in a large industrial premises",
            },
            2: {
              id: "222",
              src: "/images/services/montazh_foto2.jpg",
              alt: "Large metal ventilation pipes",
            },
            3: {
              id: "3321",
              src: "/images/services/montazh_foto3.jpg",
              alt: "Ventilation ducts above the electrical cabinets in the technical room",
            },
          },
          slug: "installation-of-ventilation-and-air-conditioning-systems",
          heroBG: "/images/services/montazh_foto4.webp",
          secondBtn: "learn more",
          p1: "The results of installation of ventilation systems are practically not amenable to low-cost adjustment. Often, many elements of ventilation and air conditioning systems become unavailable after their installation and subsequent finishing works. Therefore, these works must be carried out with the greatest care.",
          p2: "Ventilation - air exchange in premises to remove excess heat, moisture, harmful and other substances in order to ensure acceptable meteorological conditions and air cleanliness.",
          p3: "Air conditioning - automatic maintenance in closed rooms of all or individual air parameters (temperature, relative humidity, cleanliness, speed of movement) at a certain level with the aim of ensuring, mainly, optimal meteorological conditions, the most favorable for the well-being of people, conducting technological and production processes.",
          p4: "The use of modern installation technologies ensures the reliability of ventilation systems. The company's highly qualified specialists have extensive experience in working at both industrial and civil facilities. Strict adherence to the principles of accurate performance of contractual obligations, responsibility for the final result, honesty and decency in relation to customers, as well as the performance of high-tech works by our own forces, allows us to successfully implement modern, large, installation projects of any complexity. The presence of our own production, transport and many years of work experience allows us to ensure the timely supply of equipment, components and air ducts to objects.",
          process: {
            text: "Energoventilatsia LLC provides installation of systems:",
            list: {
              l1: "Ventilation",
              l2: "Air conditioning",
              l3: "Industrial purpose",
              l4: "Civil purpose",
              l5: "Any difficulty",
            },
          },
        },
        4: {
          id: "4",
          hero: {
            title: "Control and measuring devices and automation",
            description:
              "The main area of activity of the site is not only the production of panels and control panels, but also the performance of the entire complex of works related to the development and implementation of automation systems, starting with the inspection of objects and ending with commissioning and debugging of systems.",
            button: "get a quote",
          },
          images: {
            1: {
              id: "19456",
              src: "/images/services/kvpia.jpg",
              alt: "The open control panel is ready for use",
            },
            2: {
              id: "2025436",
              src: "/images/services/kvpia1.webp",
              alt: "Wall installation of six electrical control panels",
            },
            3: {
              id: "30236",
              src: "/images/services/kvpia2.jpg",
              alt: "Two VLT Micro Drive inverters installed in the control panel ",
            },
          },
          imgCard: {
            1: {
              id: "109",
              src: "/images/services/f1_s.jpg",
              alt: "Ventilation control panel showing the internal structure of the automation system",
            },
            2: {
              id: "21145",
              src: "/images/services/f5_2.jpg",
              alt: "Enterprise engineer checks operation of ventilation system control panel",
            },
            3: {
              id: "3",
              src: "/images/services/f6_3.jpg",
              alt: "Ventilation equipment in the technical room",
            },
          },
          slug: "control-and-measuring-devices-and-automation",
          heroBG: "/images/services/kvpia1.webp",
          secondBtn: "learn more",
          p1: "The KVP department is engaged in the automation of supply ventilation systems and air conditioning systems.",
          p2: "The main area of ​​activity of the site is not only the production of panels and control panels, but also the performance of the entire complex of works related to the development and implementation of automation systems, starting with the inspection of objects and ending with commissioning and debugging of systems.",
          p3: "To solve the tasks of automation and dispatching of ventilation and air conditioning systems, Energoventilatsia LLC uses equipment, including controllers produced by various manufacturers, such as REGIN - Sweden, Rout-avtomatik LLC - Ukraine, and many others.",
          p4: "Modern ventilation is a complex system, the automatic control system is responsible for its safe, trouble-free and economical operation.",
          process: {
            text: "The KVP branch automates ventilation systems and air conditioning, performing a full cycle of work, such as:",
            list: {
              l1: "Automation of systems",
              l2: "Making shields",
              l3: "Comprehensive approach",
              l4: "Miscellaneous Equipment ",
              l5: "Dispatch",
            },
          },
        },
        5: {
          id: "5",
          hero: {
            title: "Supply of equipment",
            description:
              "'Energoventilatsia' LLC closely cooperates with world-renowned and recognized companies in the field of ventilation and air conditioning",
            button: "get a quote",
          },
          images: {
            1: {
              id: "10191",
              src: "/images/services/postavka4.jpg",
              alt: "Technical room with VTS ventilation equipment,",
            },
            2: {
              id: "20606",
              src: "/images/services/postavka5.jpg",
              alt: "Lenox cooling unit located on the roof of the building",
            },
            3: {
              id: "304040",
              src: "/images/services/postavka3.jpg",
              alt: "A cooling device mounted on the roof of a building.",
            },
          },
          imgCard: {
            1: {
              id: "1",
              src: "/images/services/postavka1.jpg",
              alt: "Industrial ventilation systems installed on the roof of a building",
            },
            2: {
              id: "2",
              src: "/images/services/postavka2.jpg",
              alt: "VTS ventilation equipment located in the technical room",
            },
            3: {
              id: "3",
              src: "/images/services/postavka3.jpg",
              alt: "A cooling device mounted on the roof of a building.",
            },
          },
          slug: "supply-of-equipment",
          heroBG: "/images/services/postavka5.webp",
          secondBtn: "learn more",
          p1: "Energoventilatsia LLC closely cooperates with world-renowned and recognized companies in the field of ventilation and air conditioning:",
          p3: "Thanks to long-term partnerships with leading manufacturers, Energoventilatsia LLC has access to the latest developments and innovations in the field of ventilation and air conditioning equipment. This allows us to implement advanced technologies in our projects, ensuring high efficiency and reliability of systems.",
          p4: "We strive to maintain high quality standards at all stages of project implementation, from the selection of equipment to its installation and maintenance. Our cooperation with leading companies in the industry guarantees customers the best solutions for creating comfortable and safe conditions in any room.",
          list: {
            l1: "REMAK <br /> SYSTEMAIR <br /> OSTBERG <br /> SALDA <br /> DAIKIN <br /> MITSUBISHI <br />MITSUSHITO <br /> LENNOX <br /> FUJITSU <br />",
            l2: " ROSENBERG <br /> BAHCIVAN <br /> FRICO <br /> VENTS <br /> VTS <br /> ACM <br /> ІНТЕРКОНДИЦІОНЕР <br /> ПРОМВЕНТИЛЯТОР <br /> MAIKO",
          },
          process: {
            text: "Energoventilatsia LLC cooperates with leading global brands to ensure timely supply of equipment.",
            list: {
              l1: "REMAK, ROSENBERG - Well-known European manufacturers.",
              l2: "SYSTEMAIR, BAHCIVAN - Reliable solutions for ventilation.",
              l3: "DAIKIN, MITSUBISHI - Leaders in air conditioning.",
              l4: "VENTS, SALDA - A wide selection of ventilation systems.",
              l5: "FUJITSU, LENNOX - High quality and reliability.",
            },
          },
        },
        6: {
          id: "6",
          hero: {
            title: "Start-up and debugging works",
            description:
              "Specialists of 'Energoventilatsia' LLC carry out start-up tests and adjustment of ventilation and air conditioning systems.",
            button: "get a quote",
          },
          images: {
            1: {
              id: "1656565",
              src: "/images/services/debugging-works1.jpg",
              alt: "The air duct is suspended under the ceiling of the industrial premises.",
            },
            2: {
              id: "2879876",
              src: "/images/services/debugging-works1.jpg",
              alt: "The air duct is suspended under the ceiling of the industrial premises.",
            },
            3: {
              id: "301245",
              src: "/images/services/debugging-works1.jpg",
              alt: "The air duct is suspended under the ceiling of the industrial premises.",
            },
          },
          imgCard: {
            1: {
              id: "10123",
              src: "/images/services/debugging-works1.jpg",
              alt: "The air duct is suspended under the ceiling of the industrial premises.",
            },
            2: {
              id: "21121212",
              src: "/images/services/debugging-works1.jpg",
              alt: "The air duct is suspended under the ceiling of the industrial premises.",
            },
            3: {
              id: "35324",
              src: "/images/services/debugging-works1.jpg",
              alt: "The air duct is suspended under the ceiling of the industrial premises.",
            },
          },
          slug: "start-up-and-debugging-works",
          heroBG: "/images/services/debugging-works1.jpg",
          secondBtn: "learn more",
          p1: "Start-up tests of installed ventilation and air conditioning systems are carried out in accordance with the requirements of the DBN 'Rules for production and acceptance of work' after mechanical testing of ventilation and related energy equipment.<br /> The purpose of start-up tests and regulation of ventilation and air conditioning systems is bringing the parameters of their work into line with the design and regulatory indicators.<br /> Before the tests, the ventilation and air conditioning units must work continuously and properly for 7 hours.",
          p2: "During start-up tests:",
          p3: "Air conditioning installations can be tested under manual control. Discovered during the design deviation check, which are not agreed with the design organization, as well as manufacturing and installation defects of the elements of ventilation devices must be eliminated before the start of instrumental measurements of the characteristics of these elements.",
          p4: "The operation of natural ventilation exhaust devices in residential and public buildings is checked for the presence of drafts in the ventilation device grills. They also establish the conformity of structural solutions with the design, and the quality of execution - with the requirements of DBN. <br />According to the results of the commissioning tests, an act and a passport are drawn up for each installation.Test reports and passports of ventilation devices are appendices to the acts of putting ventilation systems into operation.",
          list: {
            l1: "Checking the conformity of the parameters of the installed equipment and elements of ventilation devices adopted in the project, as well as the conformity of the quality of their manufacture and installation with the requirements of TU and DBN;",
            l2: "Detection of leaks in air ducts and other elements of systems; regulation of compliance with design data of volume flow of air passing through air intake and air distribution devices of general exchange ventilation and air conditioning units;",
            l3: "Checking the uniformity of heating of radiators. (in the presence of a heat carrier). Ventilation units directly connected to the technological equipment (local exhaust fans, etc.) are tested and adjusted after the installation of this equipment.",
          },
          process: {
            text: "Specialists conduct start-up tests, including:",
            list: {
              l1: "Checking equipment for compliance.",
              l2: "Adjusting system parameters.",
              l3: "Detecting installation defects.",
              l4: "Control of heater heating.",
              l5: "Compilation of acts and passports.",
            },
          },
        },
        7: {
          id: "7",
          hero: {
            title: "Passporting of ventilation systems",
            description:
              "If you have doubts about the operation of the air heating or ventilation systems , our specialists will determine the causes of the problems and find the optimal solutions to eliminate the shortcomings.If your installed ventilation or air heating systems are not certified, certification specialists will issue the necessary documents with actual measurements as soon as possible.",
            button: "get a quote",
          },
          images: {
            1: {
              id: "182222",
              src: "/images/services/passporting-of-ventilation-systems.jpg",
              alt: "Modern ventilation system on the outer wall of the building.",
            },
            2: {
              id: "2077777",
              src: "/images/services/passporting-of-ventilation-systems.jpg",
              alt: "Modern ventilation system on the outer wall of the building.",
            },
            3: {
              id: "3887878",
              src: "/images/services/passporting-of-ventilation-systems.jpg",
              alt: "Modern ventilation system on the outer wall of the building.",
            },
          },
          imgCard: {
            1: {
              id: "112120",
              src: "/images/services/passporting-of-ventilation-systems.jpg",
              alt: "Modern ventilation system on the outer wall of the building.",
            },
            2: {
              id: "2000001",
              src: "/images/services/passporting-of-ventilation-systems.jpg",
              alt: "Modern ventilation system on the outer wall of the building.",
            },
            3: {
              id: "3000007",
              src: "/images/services/passporting-of-ventilation-systems.jpg",
              alt: "Modern ventilation system on the outer wall of the building.",
            },
          },
          slug: "passporting-of-ventilation-systems",
          heroBG: "/images/services/passporting-of-ventilation-systems.jpg",
          secondBtn: "learn more",
          p1: "According to current regulations, all engineering systems must be certified after completion of work. The certification procedure is intended to check the compliance of the installed equipment with the design data.",
          p2: "If your installed ventilation or air heating systems are not certified, the certification specialists will issue the necessary documents with actual measurements as soon as possible.",
          p3: "In addition, measurement of the actual performance of the ventilation system, the frequency of air exchange in the ventilation rooms and its individual parts, determination of the condition and efficiency of the air filters can be carried out.",
          p4: "Specialists of Energy Ventilation LLC carry out work using modern measuring equipment: micromanometers, anemometers, noise meters, tachometers. All devices have state verification.<br />The methodology of the work carried out is based on strict compliance with the regulatory documents in force in Ukraine. ",
          process: {
            text: "Company specialists carry out work with:",
            list: {
              l1: "Ventilation system performance checks.",
              l2: "Determining the air exchange rate.",
              l3: "Measuring the effectiveness of air filters.",
              l4: "Use of modern measuring equipment.",
              l5: "Issue of necessary system documents.",
            },
          },
        },
        8: {
          id: "8",
          hero: {
            title: "Service maintenance",
            description:
              "The service department of 'Energoventilatsia' LLC takes a comprehensive approach to maintenance: from scheduled preventive inspections to prompt responses in emergency situations.",
            button: "get a quote",
          },
          images: {
            1: {
              id: "170002",
              src: "/images/services/servis_foto1.jpg",
              alt: "Hitachi cooling equipment on the roof of a building",
            },
            2: {
              id: "2055553",
              src: "/images/services/servis_foto2.webp",
              alt: "LG and Multi V.5 cooling systems on the roof of the building.",
            },
            3: {
              id: "3182019",
              src: "/images/services/servis_foto6.jpg",
              alt: "",
            },
          },
          imgCard: {
            1: {
              id: "1",
              src: "/images/services/servis_foto4.jpg",
              alt: "External units of the cooling system on the roof of an industrial building",
            },
            2: {
              id: "2",
              src: "/images/services/servis_foto3.jpg",
              alt: "Large unit of ventilation equipment",
            },
            3: {
              id: "3",
              src: "/images/services/servis_foto5.jpg",
              alt: "An engineer is servicing the ventilation system in the ceiling",
            },
          },
          slug: "service-maintenance",
          heroBG: "/images/services/servis_foto2.webp",
          secondBtn: "learn more",
          p1: "Maintenance and repairs are performed by qualified engineers who have all the necessary tools and equipment at their disposal.",
          p2: "Service specialists carry out:",
          p3: "The air-conditioning equipment will work for a long time and without failure, if you periodically carry out routine maintenance work that keeps the equipment in good technical condition. When these conditions are met, all potential malfunctions are detected and eliminated at the initial stage of their occurrence, which allows you to prevent equipment failure .",
          p4: "For each Client, a list of performed works, a service maintenance schedule is developed. For each Client, a separate service log is kept, which displays all the accumulated information about air conditioning and ventilation systems, and this log also displays all emergency cases and performed work. Thanks to the maintenance work log, the Client can always monitor the fulfillment of the agreed obligations.<br/>Conclusion of the maintenance contract for the equipment installed by a third-party organization is carried out after its diagnosis.",
          list: {
            l1: "Complex maintenance of ventilation, air conditioning, cooling and heating systems;",
            l2: "Maintenance of individual systems and equipment (chillers, central air conditioners, refrigeration units, VRV and VRF systems, supply units, fan coils, split systems, dryers, humidifiers, etc.);",
            l3: "Electronic testing and control of parameters of air conditioning and ventilation systems using modern devices;",
            l4: "Diagnostics and full integrated testing of climate technology and engineering systems;",
            l5: "Conducting commissioning work on newly installed and/or temporarily preserved equipment;",
            l6: "Warranty and ongoing repair of equipment of any complexity;",
            l7: "Emergency departures related to the repair of air conditioning, ventilation, refrigeration and automation systems;",
            l8: "Free consultations of highly qualified service engineers.",
          },
          process: {
            text: "Energoventilatsia LLC service today is:",
            list: {
              l1: "guaranteed reliability of equipment operation",
              l2: "warranty for all types of work performed",
              l3: "departure according to a request for a malfunction within a maximum of 24 hours from the moment of receipt of the request (0.5-2 hours in case of an accident)",
              l4: "training of personnel in the peculiarities of working with climate equipment",
              l5: "operational help in hotline mode using existing means of communication",
            },
          },
        },
      },
    },
    about: {
      title: "About Process",
      phone: "Call for a Quote",
      btnForm: "Online estimate form",
      btnBack: " Go back",
      description: "Description",
    },
  },
  ContactsPage: {
    hero: {
      title: "Our Contacts",
      description: "We are always ready to help — feel free to reach out.",
      button: "send message",
    },
    locationBtn: {
      description: "Make a route",
    },
  },
  Questions: {
    list: {
      1: {
        title: "What services does the company offer?",
        description:
          "The company provides a full range of services, including design, installation, and maintenance of air conditioning, ventilation, heating, and heat supply systems.",
      },
      2: {
        title: "Which brands do you work with?",
        description:
          "We collaborate with renowned manufacturers such as CARRIER, LENNOX, DAIKIN, MITSUBISHI, LG, and others.",
      },
      3: {
        title: "Do you have your own production?",
        description:
          "Yes, we have our own production facilities and workshop for manufacturing air ducts, pipelines, and other ventilation system components.",
      },
      4: {
        title: "Does the company have licenses?",
        description:
          "The company holds a license for the full range of works, including permission to perform high-risk jobs.",
      },
      5: {
        title: "Why choose your company?",
        description:
          "We provide professional services using equipment from well-known brands, have our own production, and employ highly skilled specialists.",
      },
    },
  },
  QuestionCard: {
    slogan: {
      title: "Let’s Build Something Together",
      description:
        "Partner with us for expert air conditioning, ventilation, and heating solutions. Our team guarantees top-quality service with trusted brands and in-house production.",
      textBtn: "get in touch",
    },
    faq: {
      title: "F.A.Q.",
      description:
        "Here are the answers to the most common questions to help you understand how we work and the services we offer.",
      textBtn: "ask a question",
    },
  },
};

export default en;

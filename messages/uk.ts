import { FullTranslation } from "./types/FullTranslation";

const uk: FullTranslation = {
  LocaleLayout: {
    title: "Енерговентиляція",
    description: "Сайт Енерговентиляція",
  },
  LocaleSwitcher: {
    label: "Зміна мови",
    locale:
      "{locale, select, uk {🇺🇦 Українська} en {🇺🇸 English} other {Unknown}}",
  },
  Manifest: {
    name: "Сайт Енерговентиляція",
  },
  Header: {
    navlink: {
      home: { label: "Головна", href: "/" },
      projects: { label: "Проєкти", href: "/projects" },
      services: { label: "Сервіси", href: "/services" },
      about: { label: "Про нас", href: "/about" },
      contacts: { label: "Контакти", href: "/contacts" },
    },
    topList: {
      call_us: "зателефонуйте нам",
      mail: "електронна пошта",
      working_hours: "робочі години",
      hours: "Пн. - Пт. 9:00 - 18:00",
    },
  },
  MainPage: {
    hero: {
      title: "Енерговентиляція",
      description:
        "Надійні рішення для енерговентиляції, що забезпечують комфорт та безпеку вашого простору з 1992 року.",
      button: "наші проєкти",
    },
    descriptions: {
      title: "Немає проектів занадто великих або  занадто маленьких",
      firstDescr:
        "Наша команда фахівців має багатий досвід у створенні ефективних вентиляційних рішень для житлових будинків, офісних будівель, виробничих приміщень, торгових центрів та інших об’єктів.",
      secondDescr:
        "Компанія укомплектована висококласними фахівцями, що дозволяє виконувати всі комплекси робіт.",
      thirdDescr:
        "З перших днів існування наше підприємство зайняло одне з провідних місць у галузі створення сучасних кліматичних технологій та надання повного комплексу послуг та інженерних рішень.",
      button: "Дізнатись більше",
      years: "років досвіду",
      projects: "виконаних проєктів",
    },
    projects: {
      title: "Останні проєкти",
      viewAll: "Переглянути всі",
    },
    aboutUsCounted: {
      title: "Система вентиляції преміум-класу",
      finishedProjects: "Завершених проектів",
      ongoingProjects: "Поточних проектів",
      employees: "Співробітників",
    },

    testimonials: {
      title: "Клієнтські",
      subtitle: "відгуки",
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
      title: "Ми створюємо системи вентиляції більше 30 років",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, dignissim tristique tellus sed faucibus nullam. Tincidunt mauris ut quam sed mauris proin feugiat. Scelerisque lorem posuere iaculis nunc amet phasellus.",
      aboutUs: "Про нас",
      phone: "Залишити заявку",
      btnForm: "зробити розрахунок",
    },

    partners: {
      title: "Наші партнери",
      link: "Посилання",
    },
  },

  ProjectsPage: {
    hero: {
      title: "Реалізовані проєкти",
      description:
        "Об'єкти, у будівництві яких брало участь ТОВ Енерговентиляція.",
      button: "зробити розрахунок",
      textCategory: "Вибрати категорію",
    },

    projects: {
      1: {
        id: "1",
        projectSlug: "sbu",
        title: "Адміністративно-господарське управління СБУ",
        mainImg: "/images/projects/administrative_buildings/sbu2.jpeg",
        mainAlt: "Адміністративна пʼятиповерхова будівля",
        heroDescription:
          "Об'єкт, у будівництві якого брало участь ТОВ Енерговентиляція.",
        heroButton: "Get a Quote",
        images: {
          img1: {
            alt: "Адміністративна пʼятиповерхова будівля",
            src: "/images/projects/administrative_buildings/sbu1.jpg",
          },
          img2: {
            alt: "Адміністративна пʼятиповерхова будівля",
            src: "/images/projects/administrative_buildings/sbu2.jpeg",
          },
          img3: {
            alt: "Адміністративна пʼятиповерхова будівля",
            src: "/images/projects/administrative_buildings/sbu3.jpeg",
          },
        },
        link: "...",
        address: "...",
        categorySlug: "administrative_buildings",
        category: "Адміністративні будівлі та банки",
        linkCategory: "/projects/administrative_buildings",
      },

      2: {
        id: "2",
        projectSlug: "president_administration",
        title: "Адміністрація президента України",
        mainImg: "/images/projects/administrative_buildings/presAdm2.png",
        mainAlt: "Адміністрація президента України",
        heroDescription:
          "Об'єкт, у будівництві якого брало участь ТОВ Енерговентиляція.",
        heroButton: "Get a Quote",
        images: {
          img1: {
            alt: "Шестиповерхова адміністративна будівля",
            src: "/images/projects/administrative_buildings/presAdm1.jpg",
          },
          img2: {
            alt: "Шестиповерхова адміністративна будівля",
            src: "/images/projects/administrative_buildings/presAdm2.png",
          },
          img3: {
            alt: "Шестиповерхова адміністративна будівля",
            src: "/images/projects/administrative_buildings/presAdm3.png",
          },
        },
        link: "...",
        address: "...",
        categorySlug: "administrative_buildings",
        category: "Адміністративні будівлі та банки",
        linkCategory: "/projects/administrative_buildings",
      },

      3: {
        id: "3",
        projectSlug: "verhovna_rada",
        title: "Будівля верховної ради",
        mainImg:
          "/images/projects/administrative_buildings/verhovna_rada2.jpeg",
        mainAlt: "Адміністративна триповерхова будівля",
        heroDescription:
          "Об'єкт, у будівництві якого брало участь ТОВ Енерговентиляція.",
        heroButton: "Get a Quote",
        images: {
          img1: {
            alt: "Адміністративна трьоповерхова будівля",
            src: "/images/projects/administrative_buildings/verhovna_rada1.jpg",
          },
          img2: {
            alt: "Адміністративна трьоповерхова будівля",
            src: "/images/projects/administrative_buildings/verhovna_rada2.jpeg",
          },
          img3: {
            alt: "Адміністративна трьоповерхова будівля",
            src: "/images/projects/administrative_buildings/verhovna_rada3.jpg",
          },
        },

        link: "...",
        address: "...",
        categorySlug: "administrative_buildings",
        category: "Адміністративні будівлі та банки",
        linkCategory: "/projects/administrative_buildings",
      },

      4: {
        id: "4",
        projectSlug: "ukreximbank",
        title: "Укрексімбанк",
        mainImg: "/images/projects/administrative_buildings/ukrexim_bank2.jpg",
        mainAlt: "...",
        heroDescription:
          "Об'єкт, у будівництві якого брало участь ТОВ Енерговентиляція.",
        heroButton: "Get a Quote",
        images: {
          img1: {
            alt: "...",
            src: "/images/projects/administrative_buildings/ukrexim_bank1.webp",
          },
          img2: {
            alt: "...",
            src: "/images/projects/administrative_buildings/ukrexim_bank2.jpg",
          },
          img3: {
            alt: "...",
            src: "/images/projects/administrative_buildings/ukrexim_bank3.jpg",
          },
        },

        link: "...",
        address: "...",
        categorySlug: "administrative_buildings",
        category: "Адміністративні будівлі та банки",
        linkCategory: "/projects/administrative_buildings",
      },

      5: {
        id: "5",
        projectSlug: "prominvestbank",
        title: "Промінвестбанк",
        mainImg:
          "/images/projects/administrative_buildings/prominvest_bank2.png",
        mainAlt: "...",
        heroDescription:
          "Об'єкт, у будівництві якого брало участь ТОВ Енерговентиляція.",
        heroButton: "Get a Quote",
        images: {
          img1: {
            alt: "...",
            src: "/images/projects/administrative_buildings/prominvest_bank1.jpg",
          },
          img2: {
            alt: "...",
            src: "/images/projects/administrative_buildings/prominvest_bank2.png",
          },
          img3: {
            alt: "...",
            src: "/images/projects/administrative_buildings/prominvest_bank3.png",
          },
        },

        link: "...",
        address: "...",
        categorySlug: "administrative_buildings",
        category: "Адміністративні будівлі та банки",
        linkCategory: "/projects/administrative_buildings",
      },

      6: {
        id: "6",
        projectSlug: "unicreditbank",
        title: "Юнікредітбанк",
        mainImg:
          "/images/projects/administrative_buildings/unicredit_bank1.png",
        mainAlt: "...",
        heroDescription:
          "Об'єкт, у будівництві якого брало участь ТОВ Енерговентиляція.",
        heroButton: "Get a Quote",
        images: {
          img1: {
            alt: "...",
            src: "/images/projects/administrative_buildings/unicredit_bank1.png",
          },
          img2: {
            alt: "...",
            src: "/images/projects/administrative_buildings/unicredit_bank1.png",
          },
          img3: {
            alt: "...",
            src: "/images/projects/administrative_buildings/unicredit_bank1.png",
          },
        },

        link: "...",
        address: "...",
        categorySlug: "administrative_buildings",
        category: "Адміністративні будівлі та банки",
        linkCategory: "/projects/administrative_buildings",
      },

      7: {
        id: "7",
        projectSlug: "ukrsotsbank",
        title: "Укрсоцбанк",
        mainImg: "/images/projects/administrative_buildings/ukrsots_bank2.png",
        mainAlt: "...",
        heroDescription:
          "Об'єкт, у будівництві якого брало участь ТОВ Енерговентиляція.",
        heroButton: "Get a Quote",
        images: {
          img1: {
            alt: "...",
            src: "/images/projects/administrative_buildings/ukrsots_bank1.webp",
          },
          img2: {
            alt: "...",
            src: "/images/projects/administrative_buildings/ukrsots_bank2.png",
          },
          img3: {
            alt: "...",
            src: "/images/projects/administrative_buildings/ukrsots_bank1.webp",
          },
        },

        link: "...",
        address: "...",
        categorySlug: "administrative_buildings",
        category: "Адміністративні будівлі та банки",
        linkCategory: "/projects/administrative_buildings",
      },

      8: {
        id: "8",
        projectSlug: "bank_aval",
        title: "Банк «АВАЛЬ»",
        mainImg: "/images/projects/administrative_buildings/bank_aval2.png",
        mainAlt: "",
        heroDescription:
          "Об'єкт, у будівництві якого брало участь ТОВ Енерговентиляція.",
        heroButton: "Get a Quote",
        images: {
          img1: {
            alt: "...",
            src: "/images/projects/administrative_buildings/bank_aval1.jpg",
          },
          img2: {
            alt: "...",
            src: "/images/projects/administrative_buildings/bank_aval2.png",
          },
          img3: {
            alt: "...",
            src: "/images/projects/administrative_buildings/bank_aval3.jpg",
          },
        },

        link: "...",
        address: "...",
        categorySlug: "administrative_buildings",
        category: "Адміністративні будівлі та банки",
        linkCategory: "/projects/administrative_buildings",
      },

      9: {
        id: "9",
        projectSlug: "oschadbank",
        title: "Державний Ощадний Банк України",
        mainImg: "/images/projects/administrative_buildings/oschad_bank2.png",
        mainAlt: "...",
        heroDescription:
          "Об'єкт, у будівництві якого брало участь ТОВ Енерговентиляція.",
        heroButton: "Get a Quote",
        images: {
          img1: {
            alt: "...",
            src: "/images/projects/administrative_buildings/oschad_bank1.webp",
          },
          img2: {
            alt: "...",
            src: "/images/projects/administrative_buildings/oschad_bank2.png",
          },
          img3: {
            alt: "...",
            src: "/images/projects/administrative_buildings/oschad_bank3.webp",
          },
        },

        link: "...",
        address: "...",
        categorySlug: "administrative_buildings",
        category: "Адміністративні будівлі та банки",
        linkCategory: "/projects/administrative_buildings",
      },

      // ===========================================
      10: {
        id: "10",
        projectSlug: "dinamo-stadium",
        title: "Реконструкція стадіону «Динамо» ім. В.Лобановського",
        mainImg: "/images/projects/public_facilities/dinamo1.webp",
        mainAlt: "Реконструкція стадіону «Динамо» ім. В.Лобановського",
        heroDescription:
          "Object in the construction of which Energoventilyatsiya LLC took part.",
        heroButton: "Get a Quote",
        images: {
          img1: {
            alt: "...",
            src: "/images/projects/public_facilities/dinamo1.webp",
          },
          img2: {
            alt: "...",
            src: "/images/projects/public_facilities/dinamo1.webp",
          },
          img3: {
            alt: "...",
            src: "/images/projects/public_facilities/dinamo1.webp",
          },
        },
        link: "...",
        address: "...",
        categorySlug: "public_facilities",
        category: "Громадські споруди та офісні центри",
        linkCategory: "/projects/public_facilities",
      },

      11: {
        id: "11",
        projectSlug: "hotel",
        title: "Готель",
        mainImg: "/images/projects/public_facilities/hotel1.webp",
        mainAlt: "...",
        heroDescription:
          "Object in the construction of which Energoventilyatsiya LLC took part.",
        heroButton: "Get a Quote",
        images: {
          img1: {
            alt: "...",
            src: "/images/projects/public_facilities/hotel1.webp",
          },
          img2: {
            alt: "...",
            src: "/images/projects/public_facilities/hotel1.webp",
          },
          img3: {
            alt: "...",
            src: "/images/projects/public_facilities/hotel1.webp",
          },
        },
        link: "...",
        address: "...",
        categorySlug: "public_facilities",
        category: "Громадські споруди та офісні центри",
        linkCategory: "/projects/public_facilities",
      },

      12: {
        id: "12",
        projectSlug: "hotel_molodizhnyi",
        title: "Готель Молодіжний",
        mainImg: "/images/projects/public_facilities/hotelMolod1.webp",
        mainAlt: "...",
        heroDescription:
          "Object in the construction of which Energoventilyatsiya LLC took part.",
        heroButton: "Get a Quote",
        images: {
          img1: {
            alt: "...",
            src: "/images/projects/public_facilities/hotelMolod1.webp",
          },
          img2: {
            alt: "...",
            src: "/images/projects/public_facilities/hotelMolod1.webp",
          },
          img3: {
            alt: "...",
            src: "/images/projects/public_facilities/hotelMolod1.webp",
          },
        },
        link: "...",
        address: "...",
        categorySlug: "public_facilities",
        category: "Громадські споруди та офісні центри",
        linkCategory: "/projects/public_facilities",
      },

      13: {
        id: "13",
        projectSlug: "cafe_brovar",
        title: "Кафе Бровар",
        mainImg: "/images/projects/public_facilities/cafeBrovar1.webp",
        mainAlt: "...",
        heroDescription:
          "Object in the construction of which Energoventilyatsiya LLC took part.",
        heroButton: "Get a Quote",
        images: {
          img1: {
            alt: "...",
            src: "/images/projects/public_facilities/cafeBrovar1.webp",
          },
          img2: {
            alt: "...",
            src: "/images/projects/public_facilities/cafeBrovar1.webp",
          },
          img3: {
            alt: "...",
            src: "/images/projects/public_facilities/cafeBrovar1.webp",
          },
        },
        link: "...",
        address: "...",
        categorySlug: "public_facilities",
        category: "Громадські споруди та офісні центри",
        linkCategory: "/projects/public_facilities",
      },

      14: {
        id: "14",
        projectSlug: "office_center",
        title: "Офісний центр",
        mainImg: "/images/projects/public_facilities/officeCenter1.webp",
        mainAlt: "Реконструкція стадіону «Динамо» ім. В.Лобановського",
        heroDescription:
          "Object in the construction of which Energoventilyatsiya LLC took part.",
        heroButton: "Get a Quote",
        images: {
          img1: {
            alt: "...",
            src: "/images/projects/public_facilities/officeCenter1.webp",
          },
          img2: {
            alt: "...",
            src: "/images/projects/public_facilities/officeCenter1.webp",
          },
          img3: {
            alt: "...",
            src: "/images/projects/public_facilities/officeCenter1.webp",
          },
        },
        link: "...",
        address: "...",
        categorySlug: "public_facilities",
        category: "Громадські споруди та офісні центри",
        linkCategory: "/projects/public_facilities",
      },

      // ===========================================
      15: {
        id: "15",
        projectSlug: "sanatorium_yalynka",
        title: "Київський міський дитячий санаторій Ялинка",
        mainImg: "/images/projects/hskc/sanatorium_yalynka1.webp",
        mainAlt: "...",
        heroDescription:
          "Object in the construction of which Energoventilyatsiya LLC took part.",
        heroButton: "Get a Quote",
        images: {
          img1: {
            alt: "...",
            src: "/images/projects/hskc/sanatorium_yalynka1.webp",
          },
          img2: {
            alt: "...",
            src: "/images/projects/hskc/sanatorium_yalynka1.webp",
          },
          img3: {
            alt: "...",
            src: "/images/projects/hskc/sanatorium_yalynka1.webp",
          },
        },
        link: "...",
        address: "...",
        categorySlug: "hskc",
        category: "Лікарні, школи, дитсадки, церкви",
        linkCategory: "/projects/hskc",
      },

      16: {
        id: "16",
        projectSlug: "cancer_dispensary",
        title: "Онкодиспансер обласної лікарні в м.Києві",
        mainImg: "/images/projects/hskc/cancer_dispensary1.webp",
        mainAlt: "...",
        heroDescription:
          "Object in the construction of which Energoventilyatsiya LLC took part.",
        heroButton: "Get a Quote",
        images: {
          img1: {
            alt: "...",
            src: "/images/projects/hskc/cancer_dispensary1.webp",
          },
          img2: {
            alt: "...",
            src: "/images/projects/hskc/cancer_dispensary1.webp",
          },
          img3: {
            alt: "...",
            src: "/images/projects/hskc/cancer_dispensary1.webp",
          },
        },
        link: "...",
        address: "...",
        categorySlug: "hskc",
        category: "Лікарні, школи, дитсадки, церкви",
        linkCategory: "/projects/hskc",
      },

      17: {
        id: "17",
        projectSlug: "medical_clinic_innovation",
        title: "Мeдична клініка Інновація",
        mainImg: "/images/projects/hskc/medical_clinic_innovation1.webp",
        mainAlt: "...",
        heroDescription:
          "Object in the construction of which Energoventilyatsiya LLC took part.",
        heroButton: "Get a Quote",
        images: {
          img1: {
            alt: "...",
            src: "/images/projects/hskc/medical_clinic_innovation1.webp",
          },
          img2: {
            alt: "...",
            src: "/images/projects/hskc/medical_clinic_innovation1.webp",
          },
          img3: {
            alt: "...",
            src: "/images/projects/hskc/medical_clinic_innovation1.webp",
          },
        },
        link: "...",
        address: "...",
        categorySlug: "hskc",
        category: "Лікарні, школи, дитсадки, церкви",
        linkCategory: "/projects/hskc",
      },

      18: {
        id: "18",
        projectSlug: "epiphany_cathedral",
        title: "Свято-богоявленський кафедральний Собор",
        mainImg: "/images/projects/hskc/epiphany_cathedral1.webp",
        mainAlt: "...",
        heroDescription:
          "Object in the construction of which Energoventilyatsiya LLC took part.",
        heroButton: "Get a Quote",
        images: {
          img1: {
            alt: "...",
            src: "/images/projects/hskc/epiphany_cathedral1.webp",
          },
          img2: {
            alt: "...",
            src: "/images/projects/hskc/epiphany_cathedral1.webp",
          },
          img3: {
            alt: "...",
            src: "/images/projects/hskc/epiphany_cathedral1.webp",
          },
        },
        link: "...",
        address: "...",
        categorySlug: "hskc",
        category: "Лікарні, школи, дитсадки, церкви",
        linkCategory: "/projects/hskc",
      },

      19: {
        id: "19",
        projectSlug: "residential_buildings",
        title: "Житлові будинки",
        mainImg: "/images/projects/hskc/residential_buildings2.webp",
        mainAlt: "...",
        heroDescription:
          "Object in the construction of which Energoventilyatsiya LLC took part.",
        heroButton: "Get a Quote",
        images: {
          img1: {
            alt: "...",
            src: "/images/projects/hskc/residential_buildings1.webp",
          },
          img2: {
            alt: "...",
            src: "/images/projects/hskc/residential_buildings2.webp",
          },
          img3: {
            alt: "...",
            src: "/images/projects/hskc/residential_buildings3.webp",
          },
        },
        link: "...",
        address: "...",
        categorySlug: "hskc",
        category: "Лікарні, школи, дитсадки, церкви",
        linkCategory: "/projects/hskc",
      },

      // ===========================================
      20: {
        id: "20",
        projectSlug: "amstor",
        title: "Мережа громадсько-торгівельних центрів Амстор",
        mainImg: "/images/projects/trade_complexes/amstorMain.webp",
        mainAlt: "...",
        heroDescription:
          "Object in the construction of which Energoventilyatsiya LLC took part.",
        heroButton: "Get a Quote",
        images: {
          img1: {
            alt: "...",
            src: "/images/projects/trade_complexes/amstorMain.webp",
          },
          img2: {
            alt: "...",
            src: "/images/projects/trade_complexes/amstorMain.webp",
          },
          img3: {
            alt: "...",
            src: "/images/projects/trade_complexes/amstorMain.webp",
          },
        },
        link: "...",
        address: "...",
        categorySlug: "trade_complexes",
        category: "Мережі громадсько-торгових комплексів",
        linkCategory: "/projects/trade_complexes",
      },

      21: {
        id: "21",
        projectSlug: "silpo",
        title: "Мережа супермаркетів Сільпо",
        mainImg: "/images/projects/trade_complexes/silpoMain.webp",
        mainAlt: "...",
        heroDescription:
          "Object in the construction of which Energoventilyatsiya LLC took part.",
        heroButton: "Get a Quote",
        images: {
          img1: {
            alt: "...",
            src: "/images/projects/trade_complexes/silpoMain.webp",
          },
          img2: {
            alt: "...",
            src: "/images/projects/trade_complexes/silpoMain.webp",
          },
          img3: {
            alt: "...",
            src: "/images/projects/trade_complexes/silpoMain.webp",
          },
        },
        link: "...",
        address: "...",
        categorySlug: "trade_complexes",
        category: "Мережі громадсько-торгових комплексів",
        linkCategory: "/projects/trade_complexes",
      },

      22: {
        id: "22",
        projectSlug: "retroville",
        title: "Торгівельний центр Ретровіль",
        mainImg: "/images/projects/trade_complexes/retrovilleMain.webp",
        mainAlt: "...",
        heroDescription:
          "Object in the construction of which Energoventilyatsiya LLC took part.",
        heroButton: "Get a Quote",
        images: {
          img1: {
            alt: "...",
            src: "/images/projects/trade_complexes/retrovilleMain.webp",
          },
          img2: {
            alt: "...",
            src: "/images/projects/trade_complexes/retrovilleMain.webp",
          },
          img3: {
            alt: "...",
            src: "/images/projects/trade_complexes/retrovilleMain.webp",
          },
        },
        link: "...",
        address: "...",
        categorySlug: "trade_complexes",
        category: "Мережі громадсько-торгових комплексів",
        linkCategory: "/projects/trade_complexes",
      },

      23: {
        id: "23",
        projectSlug: "darynok",
        title: "Торгівельний центр Даринок",
        mainImg: "/images/projects/trade_complexes/darynokMain.webp",
        mainAlt: "...",
        heroDescription:
          "Object in the construction of which Energoventilyatsiya LLC took part.",
        heroButton: "Get a Quote",
        images: {
          img1: {
            alt: "...",
            src: "/images/projects/trade_complexes/darynokMain.webp",
          },
          img2: {
            alt: "...",
            src: "/images/projects/trade_complexes/darynokMain.webp",
          },
          img3: {
            alt: "...",
            src: "/images/projects/trade_complexes/darynokMain.webp",
          },
        },
        link: "...",
        address: "...",
        categorySlug: "trade_complexes",
        category: "Мережі громадсько-торгових комплексів",
        linkCategory: "/projects/trade_complexes",
      },

      24: {
        id: "24",
        projectSlug: "novus",
        title: "Гіпермаркет Novus",
        mainImg: "/images/projects/trade_complexes/novusMain.webp",
        mainAlt: "...",
        heroDescription:
          "Object in the construction of which Energoventilyatsiya LLC took part.",
        heroButton: "Get a Quote",
        images: {
          img1: {
            alt: "...",
            src: "/images/projects/trade_complexes/novus1.png",
          },
          img2: {
            alt: "...",
            src: "/images/projects/trade_complexes/novusMain.webp",
          },
          img3: {
            alt: "...",
            src: "/images/projects/trade_complexes/novus1.png",
          },
        },
        link: "...",
        address: "...",
        categorySlug: "trade_complexes",
        category: "Мережі громадсько-торгових комплексів",
        linkCategory: "/projects/trade_complexes",
      },

      25: {
        id: "25",
        projectSlug: "forum",
        title: "Торгівельно-розважальний центр Forum",
        mainImg: "/images/projects/trade_complexes/forumMain.webp",
        mainAlt: "...",
        heroDescription:
          "Object in the construction of which Energoventilyatsiya LLC took part.",
        heroButton: "Get a Quote",
        images: {
          img1: {
            alt: "...",
            src: "/images/projects/trade_complexes/forum1.png",
          },
          img2: {
            alt: "...",
            src: "/images/projects/trade_complexes/forumMain.webp",
          },
          img3: {
            alt: "...",
            src: "/images/projects/trade_complexes/forum1.png",
          },
        },
        link: "...",
        address: "...",
        categorySlug: "trade_complexes",
        category: "Мережі громадсько-торгових комплексів",
        linkCategory: "/projects/trade_complexes",
      },

      // ===========================================

      26: {
        id: "26",
        projectSlug: "kraft_foods_ukraine",
        title: "Кондитерська фабрика Крафт Фудз України",
        mainImg: "/images/projects/industry/kraft_foods_ukraineMain.webp",
        mainAlt: "Кондитерська фабрика Крафт Фудз України",
        heroDescription:
          "Object in the construction of which Energoventilyatsiya LLC took part.",
        heroButton: "Get a Quote",
        images: {
          img1: {
            alt: "...",
            src: "/images/projects/industry/kraft_foods_ukraineMain.webp",
          },
          img2: {
            alt: "...",
            src: "/images/projects/industry/kraft_foods_ukraineMain.webp",
          },
          img3: {
            alt: "...",
            src: "/images/projects/industry/kraft_foods_ukraineMain.webp",
          },
        },
        link: "...",
        address: "...",
        categorySlug: "industry",
        category: "Промислові споруди",
        linkCategory: "/projects/industry",
      },

      27: {
        id: "27",
        projectSlug: "alko_invest",
        title: "Обʼєкти ЗАТ АЛКО ІНВЕСТ",
        mainImg: "/images/projects/industry/alko_investMain.webp",
        mainAlt: "...",
        heroDescription:
          "Object in the construction of which Energoventilyatsiya LLC took part.",
        heroButton: "Get a Quote",
        images: {
          img1: {
            alt: "...",
            src: "/images/projects/industry/alko_invest1.webp",
          },
          img2: {
            alt: "...",
            src: "/images/projects/industry/alko_investMain.webp",
          },
          img3: {
            alt: "...",
            src: "/images/projects/industry/alko_invest1.webp",
          },
        },
        link: "...",
        address: "...",
        categorySlug: "industry",
        category: "Промислові споруди",
        linkCategory: "/projects/industry",
      },

      28: {
        id: "28",
        projectSlug: "osmoloda_plant",
        title: "Завод будматеріалів ТОВ ОСМОЛОДА",
        mainImg: "/images/projects/industry/osmoloda_plantMain.webp",
        mainAlt: "...",
        heroDescription:
          "Object in the construction of which Energoventilyatsiya LLC took part.",
        heroButton: "Get a Quote",
        images: {
          img1: {
            alt: "...",
            src: "/images/projects/industry/osmoloda_plantMain.webp",
          },
          img2: {
            alt: "...",
            src: "/images/projects/industry/osmoloda_plantMain.webp",
          },
          img3: {
            alt: "...",
            src: "/images/projects/industry/osmoloda_plantMain.webp",
          },
        },
        link: "...",
        address: "...",
        categorySlug: "industry",
        category: "Промислові споруди",
        linkCategory: "/projects/industry",
      },

      // ++++++++++++++++++++++++++++++++++++++++
      29: {
        id: "29",
        projectSlug: "altacenter",
        title: "Альта-центр в Києві",
        mainImg: "/images/projects/trade_complexes/altacenterMain.webp",
        mainAlt: "...",
        heroDescription:
          "Object in the construction of which Energoventilyatsiya LLC took part.",
        heroButton: "Get a Quote",
        images: {
          img1: {
            alt: "...",
            src: "/images/projects/trade_complexes/altacenter1.png",
          },
          img2: {
            alt: "...",
            src: "/images/projects/trade_complexes/altacenterMain.webp",
          },
          img3: {
            alt: "...",
            src: "/images/projects/trade_complexes/altacenter1.png",
          },
        },
        link: "...",
        address: "...",
        categorySlug: "trade_complexes",
        category: "Мережі громадсько-торгових комплексів",
        linkCategory: "/projects/trade_complexes",
      },

      30: {
        id: "30",
        projectSlug: "karavan",
        title: "Торгово-розважальний центр Karavan",
        mainImg: "/images/projects/trade_complexes/karavanMain.webp",
        mainAlt: "...",
        heroDescription:
          "Object in the construction of which Energoventilyatsiya LLC took part.",
        heroButton: "Get a Quote",
        images: {
          img1: {
            alt: "...",
            src: "/images/projects/trade_complexes/karavan1.png",
          },
          img2: {
            alt: "...",
            src: "/images/projects/trade_complexes/karavanMain.webp",
          },
          img3: {
            alt: "...",
            src: "/images/projects/trade_complexes/karavan2.png",
          },
        },
        link: "...",
        address: "...",
        categorySlug: "trade_complexes",
        category: "Мережі громадсько-торгових комплексів",
        linkCategory: "/projects/trade_complexes",
      },

      31: {
        id: "31",
        projectSlug: "epicenter",
        title: "Мережа гіпермаркетів Епіцентр",
        mainImg: "/images/projects/trade_complexes/epicenterMain.webp",
        mainAlt: "...",
        heroDescription:
          "Object in the construction of which Energoventilyatsiya LLC took part.",
        heroButton: "Get a Quote",
        images: {
          img1: {
            alt: "...",
            src: "/images/projects/trade_complexes/epicenter1.png",
          },
          img2: {
            alt: "...",
            src: "/images/projects/trade_complexes/epicenterMain.webp",
          },
          img3: {
            alt: "...",
            src: "/images/projects/trade_complexes/epicenter2.png",
          },
        },
        link: "...",
        address: "...",
        categorySlug: "trade_complexes",
        category: "Мережі громадсько-торгових комплексів",
        linkCategory: "/projects/trade_complexes",
      },

      32: {
        id: "32",
        projectSlug: "odeskiy_bulvar",
        title: "Одеський бульвар",
        mainImg: "/images/projects/hskc/odeskiy_bulvarMain.webp",
        mainAlt: "...",
        heroDescription:
          "Object in the construction of which Energoventilyatsiya LLC took part.",
        heroButton: "Get a Quote",
        images: {
          img1: {
            alt: "...",
            src: "/images/projects/hskc/odeskiy_bulvarMain.webp",
          },
          img2: {
            alt: "...",
            src: "/images/projects/hskc/odeskiy_bulvarMain.webp",
          },
          img3: {
            alt: "...",
            src: "/images/projects/hskc/odeskiy_bulvarMain.webp",
          },
        },
        link: "...",
        address: "...",
        categorySlug: "hskc",
        category: "Лікарні, школи, дитсадки, церкви",
        linkCategory: "/projects/hskc",
      },

      33: {
        id: "33",
        projectSlug: "blockbuster",
        title: "Розважальний центр BlockБастер",
        mainImg: "/images/projects/trade_complexes/blockbusterMain.webp",
        mainAlt: "...",
        heroDescription:
          "Object in the construction of which Energoventilyatsiya LLC took part.",
        heroButton: "Get a Quote",
        images: {
          img1: {
            alt: "...",
            src: "/images/projects/trade_complexes/blockbusterMain.webp",
          },
          img2: {
            alt: "...",
            src: "/images/projects/trade_complexes/blockbusterMain.webp",
          },
          img3: {
            alt: "...",
            src: "/images/projects/trade_complexes/blockbusterMain.webp",
          },
        },
        link: "...",
        address: "...",
        categorySlug: "trade_complexes",
        category: "Мережі громадсько-торгових комплексів",
        linkCategory: "/projects/trade_complexes",
      },

      34: {
        id: "34",
        projectSlug: "river_mall",
        title: "Торговий центр River Mall",
        mainImg: "/images/projects/trade_complexes/river_mallMain.webp",
        mainAlt: "...",
        heroDescription:
          "Object in the construction of which Energoventilyatsiya LLC took part.",
        heroButton: "Get a Quote",
        images: {
          img1: {
            alt: "...",
            src: "/images/projects/trade_complexes/river_mall1.png",
          },
          img2: {
            alt: "...",
            src: "/images/projects/trade_complexes/river_mallMain.webp",
          },
          img3: {
            alt: "...",
            src: "/images/projects/trade_complexes/river_mall1.webp",
          },
        },
        link: "...",
        address: "...",
        categorySlug: "trade_complexes",
        category: "Мережі громадсько-торгових комплексів",
        linkCategory: "/projects/trade_complexes",
      },
    },
  },

  AboutPage: {
    hero: {
      title: "Про нашу компанію",
      description:
        "Ми будемо раді стати вашими постійними партнерами та взяти на себе вирішення ваших завдань у сфері створення мікроклімату.",
      button: "отримати безкоштовну консультацію",
    },
    about: {
      title: "Про нас",
      description: {
        p1: "ТОВ «Енерговентиляція» — це професійна, енергійна та динамічно розвиваюча компанія, яка працює на українському ринку з 1992 року. З перших днів свого існування наша компанія зайняла одне з провідних місць у сфері створення сучасних кліматичних технологій і надання повного спектру послуг і інженерних рішень для монтажу систем кондиціонування, вентиляції, опалення та теплопостачання внутрішніх інженерних мереж.",
        p2: "Компанія укомплектована висококласними фахівцями, що дозволяє виконувати всі комплексні роботи від проектування до обслуговування та здачі об'єктів замовникам під ключ, використовуючи обладнання всесвітньо відомих та визнаних виробників, таких як CARRIER, LENNOX, VTS Clima, DAIKIN, OSTBERG, FUJITSU, PANASONIC, MITSUBISHI, McQuay, LG та багато інших.",
        p3: "Маючи власну виробничу базу та майстерню, з імпортним технологічним обладнанням для виробництва повітроводів (близько 10 000 м2 на місяць), трубопроводів та інших елементів вентиляційних та кондиціонерних систем, а також власний вантажний транспорт, ТОВ «Енерговентиляція» має можливість швидко та якісно вирішувати виробничі питання на об'єктах будь-якої складності.",
        p4: "ТОВ «Енерговентиляція» має ліцензію Міністерства будівництва, архітектури та житлово-комунального господарства України серії АВ № 195346 на право виконання повного комплексу робіт від проектування до введення в експлуатацію внутрішніх інженерних мереж (вентиляція та кондиціонування, опалення), включаючи такі супутні роботи, як постачання тепла та холоду, електромонтажні роботи, КВП.",
        p5: "ТОВ «Енерговентиляція» має дозвіл Державного комітету України з нагляду за охороною праці № 853.05.32-45.34.9 на початок робіт, пов'язаних із підвищеною небезпекою, а також ліцензію Державного департаменту пожежної безпеки МВС України серії АВ № 399277 на проектування, монтаж, обслуговування обладнання протипожежного захисту.",
      },
    },
    best: {
      title: "Тільки найкраще",
      list: {
        1: {
          title: "Екологічне будівництво",
          description:
            "Завершіть, будь ласка, заповнення. Презентуйся маса, конваліс пелентескве нек, еґестас нон нісі.",
        },
        2: {
          title: "Найновіші технології ремонту",
          description:
            "Завершіть, будь ласка, заповнення. Презентуйся маса, конваліс пелентескве нек, еґестас нон нісі.",
        },
        3: {
          title: "Високоякісне управління будівництвом",
          description:
            "Завершіть, будь ласка, заповнення. Презентуйся маса, конваліс пелентескве нек, еґестас нон нісі.",
        },
      },
      buttons: {
        best: "безкоштовна консультація",
        years: "років заснування",
        projects: "завершені проекти",
        workers: "працівники",
        stuff: "офісний персонал",
      },
    },
    ceo: {
      name: "Генеральний директор - Висовень М. А.",
      quote:
        "Ми будемо раді стати вашими постійними партнерами та взяти на себе вирішення ваших завдань у сфері створення мікроклімату.",
    },
  },
  Footer: {
    formTitle: "Зв'яжіться з нами",
    placeholderName: "Ім'я",
    placeholderEmail: "Електронна пошта",
    placeholderMessage: "Повідомлення",
    button: "надіслати повідомлення",
  },
  HeroRightSide: {
    services: {
      title: "Наші послуги",
      list: {
        designing: {
          svgName: "SideServicesDesigning",
          title: "Проектування",
          descriptions: "Початкова стадія створення атмосфери комфорту.",
        },
        production: {
          svgName: "SideServicesProduction",
          title: "Виробництво",
          descriptions: "Виробництво та реалізація готової продукції.",
        },
        assembling: {
          svgName: "SideServicesAssembling",
          title: "Монтаж",
          descriptions: "Монтаж систем вентиляції та кондиціювання повітря.",
        },
      },
    },
    todo: {
      title: "Що ми робимо",
      list: {
        automation: {
          svgName: "SideTodoAutomation",
          title: "Автоматизація",
          descriptions:
            "Автоматизація вентиляційних систем і систем кондиціювання повітря.",
        },
        works: {
          svgName: "SideTodoCommissioning",
          title: "Пуско-налагоджувальні работи",
          descriptions:
            "Пускові випробування змонтованих систем вентиляції та кондиціювання.",
        },
        services: {
          svgName: "SideTodoMaintenance",
          title: "Сервісне обслуговування",
          descriptions:
            "Технічне обслуговування систем вентиляції, кондиціювання, холодопостачання та теплопостачання.",
        },
      },
    },
    contact: {
      title: "Контактна інформація",
      list: {
        office: {
          title: "Наш офіс",
          descriptions: "Дарницький бульвар, 12, Київ, 02000",
        },
        hours: {
          title: "Години роботи офісу",
          descriptions: "Пн-Пт: 9:00 – 18:00 Сб-Нд: Вихідний",
        },
        touch: {
          title: "Зв'яжіться з нами",
          descriptions: {
            mail: "info@envent.kiev.ua ",
            tel: "+ 38(044) 503 83 77",
          },
        },
      },
    },
  },
  ServicesPage: {
    hero: {
      title: "Наші послуги",
      description:
        "Ми працюємо з будь якими типами будівель:адміністративними, офісними та виробничими,громадськими центрами, торговими та житловими комплексами, приватними будинками, ресторанами, кафе та магазинами.",
      button: "get a free quote",
    },
    services: {
      service: {
        1: {
          id: "1",
          hero: {
            title: "Проектування",
            description:
              "Проектування - початкова стадія створення атмосфери комфорту.Саме від якості проекту залежить максимальне наближення до кінцевого результату - комфортної атмосфери приміщення із заданими або регульованими параметрами повітря.",
            button: "отримати ціну",
          },
          firstImg: "/images/services/prgp3.jpg",
          secondImg: "/images/services/prgp5.jpg",
          thirdImg: "/images/services/prgp12.jpg",
          heroBG: "/images/services/designing-1.jpg",
          alt: "",
          secondBtn: "дізнатись більше",
          address: "...",
          link: "...",
          p1: "...",
          p2: "...",
          p3: "...",
          p4: "...",
        },
        2: {
          id: "2",
          hero: {
            title: "Виробництво та реалізація готової продукції",
            description:
              "Компанія ТОВ «Енерговентиляція» має власну виробничу базу з цехами для виготовлення повітроводів, з теплими складами готової продукції, сировини та матеріалів, інструменту та комплектуючих.",
            button: "отримати ціну",
          },
          firstImg: "/images/services/prgp3.jpg",
          secondImg: "/images/services/prgp5.jpg",
          thirdImg: "/images/services/prgp12.jpg",
          heroBG: "/images/services/prgp12.jpg",
          alt: "",
          secondBtn: "дізнатись більше",
          address: "...",
          link: "...",
          p1: "...",
          p2: "...",
          p3: "...",
          p4: "...",
        },
        3: {
          id: "3",
          hero: {
            title: "Монтаж систем вентиляції та кондиціювання повітря",
            description:
              "Одним із пріоритетних напрямків діяльності компанії ТОВ «Енерговентиляція» є монтаж систем вентиляції та кондиціонування повітря, що є одним із найвідповідальніших етапів робіт із створення штучного клімату.",
            button: "отримати ціну",
          },
          firstImg: "/images/services/montazh_foto1.jpg",
          secondImg: "/images/services/montazh_foto2.jpg",
          thirdImg: "/images/services/montazh_foto3.jpg",
          heroBG: "/images/services/montazh_foto2.jpg",
          alt: "",
          secondBtn: "дізнатись більше",
          address: "...",
          link: "...",
          p1: "...",
          p2: "...",
          p3: "...",
          p4: "...",
        },
        4: {
          id: "4",
          hero: {
            title: "КВПіА",
            description:
              "Основний напрямок діяльності ділянки - це не тільки виготовлення щитів і пультів управління, але і виконання всього комплексу робіт, пов'язаного з розробкою та впровадженням систем автоматизації, починаючи з обстеження об'єктів і закінчуючи пуско- налагодження систем.",
            button: "отримати ціну",
          },
          firstImg: "/images/services/f1_s.jpg",
          secondImg: "/images/services/f5_2.jpg",
          thirdImg: "/images/services/f6_3.jpg",
          heroBG: "/images/services/f1_s.jpg",
          alt: "",
          secondBtn: "дізнатись більше",
          address: "...",
          link: "...",
          p1: "...",
          p2: "...",
          p3: "...",
          p4: "...",
        },
        5: {
          id: "5",
          hero: {
            title: "Поставка обладнання",
            description:
              "Фірма ТОВ «Енерговентиляція» тісно співпрацює з всесвітньо відомими та визнаними в галузі вентиляції та кондиціювання компаніями",
            button: "отримати ціну",
          },
          firstImg: "/images/services/postavka1.jpg",
          secondImg: "/images/services/postavka2.jpg",
          thirdImg: "/images/services/postavka3.jpg",
          heroBG: "/images/services/postavka3.jpg",
          alt: "",
          secondBtn: "дізнатись більше",
          address: "...",
          link: "...",
          p1: "...",
          p2: "...",
          p3: "...",
          p4: "...",
        },
        6: {
          id: "6",
          hero: {
            title: "Пуско-налагоджувальні работи",
            description:
              "Фахівцями ТОВ «Енерговентиляція» проводяться пускові випробування та регулювання систем вентиляції та кондиціювання.Пускові випробування змонтованих систем вентиляції та кондиціювання проводяться відповідно до вимог ДБН «Правила виробництва та приймання робіт» після механічного випробування вентиляційного та пов'язаного з ним енергетичного обладнання..",
            button: "отримати ціну",
          },
          firstImg: "/images/services/debugging-works1.jpg",
          secondImg: "/images/services/debugging-works1.jpg",
          thirdImg: "/images/services/debugging-works1.jpg",
          heroBG: "/images/services/debugging-works1.jpg",
          alt: "",
          secondBtn: "дізнатись більше",
          address: "...",
          link: "...",
          p1: "...",
          p2: "...",
          p3: "...",
          p4: "...",
        },
        7: {
          id: "7",
          hero: {
            title: "Паспортизація вентсистем",
            description:
              "Якщо у Вас з'явилися сумніви в роботі систем повітряного опалення опалення або вентиляції, наші фахівці визначать причини неполадок і знайдуть оптимальні рішення щодо усунення недоліків.Якщо встановлені у Вас системи вентиляції або повітряного опалення не паспортизовані, фахівці з паспортизації в найкоротші терміни оформлять необхідні документи з фактичними вимірами.",
            button: "отримати ціну",
          },
          firstImg: "/images/services/passporting-of-ventilation-systems.jpg",
          secondImg: "/images/services/passporting-of-ventilation-systems.jpg",
          thirdImg: "/images/services/passporting-of-ventilation-systems.jpg",
          heroBG: "/images/services/passporting-of-ventilation-systems.jpg",
          alt: "",
          secondBtn: "дізнатись більше",
          address: "...",
          link: "...",
          p1: "...",
          p2: "...",
          p3: "...",
          p4: "...",
        },
        8: {
          id: "8",
          hero: {
            title: "Сервісне обслуговування",
            description:
              "Сервісна служба ТОВ «Енерговентиляція» здійснює комплексний підхід до технічного обслуговування: від планового профілактичного огляду до оперативного реагування в екстрених ситуаціях. Обслуговування та ремонт виконують кваліфіковані інженери, які мають у своєму розпорядженні всі необхідні інструменти та засоби.",
            button: "отримати ціну",
          },
          firstImg: "/images/services/servis_foto4.jpg",
          secondImg: "/images/services/servis_foto3.jpg",
          thirdImg: "/images/services/servis_foto5.jpg",
          heroBG: "/images/services/servis_foto4.jpg",
          alt: "",
          secondBtn: "дізнатись більше",
          address: "...",
          link: "...",
          p1: "...",
          p2: "...",
          p3: "...",
          p4: "...",
        },
      },
    },
    about: {
      title: "Про процесс",
      phone: "Залишити заявку",
      btnForm: "зробити розрахунок",
    },
  },
};

export default uk;

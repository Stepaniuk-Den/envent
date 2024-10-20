import { FullTranslation } from "./types/FullTranslation";

const uk: FullTranslation = {
  LocaleLayout: {
    title: "Енерговентиляція",
    description:
      "Підприємство з проектування, монтажу, налаштування та технічного обслуговування вентиляційних систем у м. Києві та по всій Україні",
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
      years: "роки досвіду",
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
    error: {
      message: "Ой, щось пішло не так",
      btnBack: "На головну",
    },
    ariaLabel: {
      text: "Посилання на",
      btnSwitchLang: "Змінити мову на англійську",
      btnLangCurrent: "Поточна мова українська",
      btnDarkSwitchTheme: "Змінити тему на темну",
      btnLightSwitchTheme: "Змінити тему на світлу",
      btnDarkThemeCurrent: "Поточна тема темна",
      btnLightThemeCurrent: "Поточна тема світла",
      btnTop: "Наверх",
    },
  },

  SideBar: {
    catalog: {
      catalogTitle: "Каталог",
    },
  },

  ProjectsPage: {
    hero: {
      title: "Реалізовані проєкти",
      description:
        "Об'єкти, у будівництві яких брало участь ТОВ Енерговентиляція.",
      button: "Зробити розрахунок",
      textCategory: "Вибрати категорію",
      btnBack: "Повернутись назад",
    },
    projectItem: {
      title: "Про цей проєкт",
      description:
        "Проєкти охоплюють повний спектр послуг, включаючи проектування, монтаж, налаштування та технічне обслуговування систем. Компанія реалізувала проєкти, охоплюючи площі від декількох сотень до десятків тисяч квадратних метрів.",
      subDescription:
        "Завдяки професійному підходу до кожного проєкту, термін встановлення вентиляційних систем варіюється в залежності від складності об'єкта і може займати від кількох тижнів до декількох місяців. Компанія гарантує високу якість та енергоефективність систем, що сприяє створенню комфортних та безпечних умов у будь-яких приміщеннях.",
    },

    projects: {
      1: {
        id: "1",
        projectSlug: "sbu",
        title: "Адміністративно-господарське управління СБУ",
        mainImg: "/images/projects/administrative_buildings/sbuMain.webp",
        mainAlt:
          "Центральний фасад будівлі Служби безпеки України з колонами і українським прапором на даху",
        heroDescription:
          "Об'єкт, у будівництві якого брало участь ТОВ Енерговентиляція.",
        heroButton: "Get a Quote",
        images: {
          img1: {
            alt: "Центральний фасад будівлі Служби безпеки України з колонами і українським прапором на даху",
            src: "/images/projects/administrative_buildings/sbu1.jpg",
          },
          img2: {
            alt: "Центральний фасад будівлі Служби безпеки України з колонами і українським прапором на даху",
            src: "/images/projects/administrative_buildings/sbuMain.webp",
          },
          img3: {
            alt: "Центральний фасад будівлі Служби безпеки України з колонами і українським прапором на даху",
            src: "/images/projects/administrative_buildings/sbu2.jpeg",
          },
        },
        link: "...",
        address: "м.Київ",
        categorySlug: "administrative_buildings",
        category: "Адміністративні будівлі та банки",
        linkCategory: "/projects/administrative_buildings",
      },

      2: {
        id: "2",
        projectSlug: "president_administration",
        title: "Адміністрація президента України",
        mainImg: "/images/projects/administrative_buildings/presAdmMain.webp",
        mainAlt:
          "Велика неокласична будівля з високими білими колонами, прикрашена великим українським прапором, що висить на фасаді",
        heroDescription:
          "Об'єкт, у будівництві якого брало участь ТОВ Енерговентиляція.",
        heroButton: "Get a Quote",
        images: {
          img1: {
            alt: "Велика неокласична будівля з високими білими колонами",
            src: "/images/projects/administrative_buildings/presAdm1.jpg",
          },
          img2: {
            alt: "Велика неокласична будівля з високими білими колонами, прикрашена великим українським прапором, що висить на фасаді",
            src: "/images/projects/administrative_buildings/presAdmMain.webp",
          },
          img3: {
            alt: "Велика неокласична будівля з високими білими колонами",
            src: "/images/projects/administrative_buildings/presAdm2.png",
          },
        },
        link: "...",
        address: "м.Київ, вул. Банкова, 11",
        categorySlug: "administrative_buildings",
        category: "Адміністративні будівлі та банки",
        linkCategory: "/projects/administrative_buildings",
      },

      3: {
        id: "3",
        projectSlug: "verhovna_rada",
        title: "Будівля верховної ради",
        mainImg:
          "/images/projects/administrative_buildings/verhovna_radaMain.webp",
        mainAlt:
          "Триповерхова будівля парламенту України з куполоподібним дахом та українським прапором",
        heroDescription:
          "Об'єкт, у будівництві якого брало участь ТОВ Енерговентиляція.",
        heroButton: "Get a Quote",
        images: {
          img1: {
            alt: "Триповерхова будівля парламенту України з куполоподібним дахом та українським прапором",
            src: "/images/projects/administrative_buildings/verhovna_rada1.jpg",
          },
          img2: {
            alt: "Триповерхова будівля парламенту України з куполоподібним дахом та українським прапором",
            src: "/images/projects/administrative_buildings/verhovna_radaMain.webp",
          },
          img3: {
            alt: "Триповерхова будівля парламенту України з куполоподібним дахом та українським прапором",
            src: "/images/projects/administrative_buildings/verhovna_rada2.jpg",
          },
        },

        link: "...",
        address: "м.Київ, вул. Грушевського",
        categorySlug: "administrative_buildings",
        category: "Адміністративні будівлі та банки",
        linkCategory: "/projects/administrative_buildings",
      },

      4: {
        id: "4",
        projectSlug: "ukreximbank",
        title: "Укрексімбанк",
        mainImg:
          "/images/projects/administrative_buildings/ukrexim_bankMain.webp",
        mainAlt:
          "Вхід до головного офісу Укрексімбанку, виконаний зі скла з сучасним дизайном",
        heroDescription:
          "Об'єкт, у будівництві якого брало участь ТОВ Енерговентиляція.",
        heroButton: "Get a Quote",
        images: {
          img1: {
            alt: "Вхід до головного офісу Укрексімбанку, виконаний зі скла з сучасним дизайном",
            src: "/images/projects/administrative_buildings/ukrexim_bank1.webp",
          },
          img2: {
            alt: "Вхід до головного офісу Укрексімбанку, виконаний зі скла з сучасним дизайном",
            src: "/images/projects/administrative_buildings/ukrexim_bankMain.webp",
          },
          img3: {
            alt: "Вхід до головного офісу Укрексімбанку, виконаний зі скла з сучасним дизайном",
            src: "/images/projects/administrative_buildings/ukrexim_bank2.jpg",
          },
        },

        link: "...",
        address: "м.Київ, вул. Горького, 127",
        categorySlug: "administrative_buildings",
        category: "Адміністративні будівлі та банки",
        linkCategory: "/projects/administrative_buildings",
      },

      5: {
        id: "5",
        projectSlug: "prominvestbank",
        title: "Промінвестбанк",
        mainImg:
          "/images/projects/administrative_buildings/prominvest_bankMain.webp",
        mainAlt:
          "Вхід до Промінвестбанку з золотистими елементами на темній глянцевій будівлі",
        heroDescription:
          "Об'єкт, у будівництві якого брало участь ТОВ Енерговентиляція.",
        heroButton: "Get a Quote",
        images: {
          img1: {
            alt: "Вхід до Промінвестбанку з золотистими елементами на темній глянцевій будівлі",
            src: "/images/projects/administrative_buildings/prominvest_bank1.jpg",
          },
          img2: {
            alt: "Вхід до Промінвестбанку з золотистими елементами на темній глянцевій будівлі",
            src: "/images/projects/administrative_buildings/prominvest_bankMain.webp",
          },
          img3: {
            alt: "Вхід до Промінвестбанку з золотистими елементами на темній глянцевій будівлі",
            src: "/images/projects/administrative_buildings/prominvest_bank2.png",
          },
        },

        link: "...",
        address: "м.Київ, вул. Софіївська, 9",
        categorySlug: "administrative_buildings",
        category: "Адміністративні будівлі та банки",
        linkCategory: "/projects/administrative_buildings",
      },

      6: {
        id: "6",
        projectSlug: "unicreditbank",
        title: "Юнікредітбанк",
        mainImg:
          "/images/projects/administrative_buildings/unicredit_bankMain.webp",
        mainAlt:
          "Велична будівля з арочними вікнами та логотипом UniCredit Bank на вершині, де зображена біла вивіска з червоно-чорними літерами",
        heroDescription:
          "Об'єкт, у будівництві якого брало участь ТОВ Енерговентиляція.",
        heroButton: "Get a Quote",
        images: {
          img1: {
            alt: "Велична будівля з арочними вікнами та логотипом UniCredit Bank на вершині, де зображена біла вивіска з червоно-чорними літерами",
            src: "/images/projects/administrative_buildings/unicredit_bankMain.webp",
          },
          img2: {
            alt: "Велична будівля з арочними вікнами та логотипом UniCredit Bank на вершині, де зображена біла вивіска з червоно-чорними літерами",
            src: "/images/projects/administrative_buildings/unicredit_bankMain.webp",
          },
          img3: {
            alt: "Велична будівля з арочними вікнами та логотипом UniCredit Bank на вершині, де зображена біла вивіска з червоно-чорними літерами",
            src: "/images/projects/administrative_buildings/unicredit_bankMain.webp",
          },
        },

        link: "...",
        address: "м.Київ",
        categorySlug: "administrative_buildings",
        category: "Адміністративні будівлі та банки",
        linkCategory: "/projects/administrative_buildings",
      },

      7: {
        id: "7",
        projectSlug: "ukrsotsbank",
        title: "Укрсоцбанк",
        mainImg:
          "/images/projects/administrative_buildings/ukrsots_bankMain.webp",
        mainAlt:
          "Модернізована будівля Укрсоцбанку з сірими фасадними елементами та зеленою зоною біля входу",
        heroDescription:
          "Об'єкт, у будівництві якого брало участь ТОВ Енерговентиляція.",
        heroButton: "Get a Quote",
        images: {
          img1: {
            alt: "Модернізована будівля Укрсоцбанку з сірими фасадними елементами та зеленою зоною біля входу",
            src: "/images/projects/administrative_buildings/ukrsots_bank1.webp",
          },
          img2: {
            alt: "Модернізована будівля Укрсоцбанку з сірими фасадними елементами та зеленою зоною біля входу",
            src: "/images/projects/administrative_buildings/ukrsots_bankMain.webp",
          },
          img3: {
            alt: "Модернізована будівля Укрсоцбанку з сірими фасадними елементами та зеленою зоною біля входу",
            src: "/images/projects/administrative_buildings/ukrsots_bank1.webp",
          },
        },

        link: "...",
        address: "м.Київ, вул. Ковпака",
        categorySlug: "administrative_buildings",
        category: "Адміністративні будівлі та банки",
        linkCategory: "/projects/administrative_buildings",
      },

      8: {
        id: "8",
        projectSlug: "bank_aval",
        title: "Банк «АВАЛЬ»",
        mainImg: "/images/projects/administrative_buildings/bank_avalMain.webp",
        mainAlt:
          "Висока офісна будівля з логотипом Райффайзен Банку Аваль на вершині",
        heroDescription:
          "Об'єкт, у будівництві якого брало участь ТОВ Енерговентиляція.",
        heroButton: "Get a Quote",
        images: {
          img1: {
            alt: "Висока офісна будівля з логотипом Райффайзен Банку Аваль на вершині",
            src: "/images/projects/administrative_buildings/bank_aval1.jpg",
          },
          img2: {
            alt: "Висока офісна будівля з логотипом Райффайзен Банку Аваль на вершині",
            src: "/images/projects/administrative_buildings/bank_avalMain.webp",
          },
          img3: {
            alt: "Висока офісна будівля з логотипом Райффайзен Банку Аваль на вершині",
            src: "/images/projects/administrative_buildings/bank_aval2.jpg",
          },
        },
        link: "...",
        address:
          "м. Київ, вул. Лєскова, 9; м. Київ, вул. Лесі Українки, 26; м. Київ, вул. Пирогова, 7; м. Одеса; м. Суми; м. Херсон, вул. Ушакова, 53",
        categorySlug: "administrative_buildings",
        category: "Адміністративні будівлі та банки",
        linkCategory: "/projects/administrative_buildings",
      },

      9: {
        id: "9",
        projectSlug: "oschadbank",
        title: "Державний Ощадний Банк України",
        mainImg:
          "/images/projects/administrative_buildings/oschad_bankMain.webp",
        mainAlt: "Фасад банківської будівлі з логотипом Ощадбанку",
        heroDescription:
          "Об'єкт, у будівництві якого брало участь ТОВ Енерговентиляція.",
        heroButton: "Get a Quote",
        images: {
          img1: {
            alt: "Фасад банківської будівлі з логотипом Ощадбанку",
            src: "/images/projects/administrative_buildings/oschad_bank1.webp",
          },
          img2: {
            alt: "Фасад банківської будівлі з логотипом Ощадбанку",
            src: "/images/projects/administrative_buildings/oschad_bankMain.webp",
          },
          img3: {
            alt: "Фасад банківської будівлі з логотипом Ощадбанку",
            src: "/images/projects/administrative_buildings/oschad_bank2.webp",
          },
        },

        link: "...",
        address:
          "м. Київ, вул. Володимирська; м. Київ, вул. Дніпровська набережна; м. Київ, вул. Артема; с. Миронівка, Київської обл.; м. Макарів, Київської обл.",
        categorySlug: "administrative_buildings",
        category: "Адміністративні будівлі та банки",
        linkCategory: "/projects/administrative_buildings",
      },

      // ===========================================
      10: {
        id: "10",
        projectSlug: "dinamo-stadium",
        title: "Реконструкція стадіону «Динамо» ім. В.Лобановського",
        mainImg: "/images/projects/public_facilities/dinamoMain.webp",
        mainAlt:
          "Головний вхід до стадіону «Динамо» в Києві з арки, де розміщена емблема футбольного клубу «Динамо»",
        heroDescription:
          "Об'єкт, у будівництві якого брало участь ТОВ Енерговентиляція.",
        heroButton: "Get a Quote",
        images: {
          img1: {
            alt: "Головний вхід до стадіону «Динамо» в Києві з арки, де розміщена емблема футбольного клубу «Динамо»",
            src: "/images/projects/public_facilities/dinamoMain.webp",
          },
          img2: {
            alt: "Головний вхід до стадіону «Динамо» в Києві з арки, де розміщена емблема футбольного клубу «Динамо»",
            src: "/images/projects/public_facilities/dinamoMain.webp",
          },
          img3: {
            alt: "Головний вхід до стадіону «Динамо» в Києві з арки, де розміщена емблема футбольного клубу «Динамо»",
            src: "/images/projects/public_facilities/dinamoMain.webp",
          },
        },
        link: "...",
        address: "м.Київ",
        categorySlug: "public_facilities",
        category: "Громадські споруди та офісні центри",
        linkCategory: "/projects/public_facilities",
      },

      11: {
        id: "11",
        projectSlug: "hotel",
        title: "Готель",
        mainImg: "/images/projects/public_facilities/hotelMain.webp",
        mainAlt: "Готель у стилі червоної цегли з декором та арочними вікнами",
        heroDescription:
          "Об'єкт, у будівництві якого брало участь ТОВ Енерговентиляція.",
        heroButton: "Get a Quote",
        images: {
          img1: {
            alt: "Готель у стилі червоної цегли з декором та арочними вікнами",
            src: "/images/projects/public_facilities/hotelMain.webp",
          },
          img2: {
            alt: "Готель у стилі червоної цегли з декором та арочними вікнами",
            src: "/images/projects/public_facilities/hotelMain.webp",
          },
          img3: {
            alt: "Готель у стилі червоної цегли з декором та арочними вікнами",
            src: "/images/projects/public_facilities/hotelMain.webp",
          },
        },
        link: "...",
        address: "с. Синява, вул. Шевченка, 1",
        categorySlug: "public_facilities",
        category: "Громадські споруди та офісні центри",
        linkCategory: "/projects/public_facilities",
      },

      12: {
        id: "12",
        projectSlug: "hotel_molodizhnyi",
        title: "Готель Молодіжний",
        mainImg: "/images/projects/public_facilities/hotelMolodMain.webp",
        mainAlt: "Готель з чорними та білими фасадами",
        heroDescription:
          "Об'єкт, у будівництві якого брало участь ТОВ Енерговентиляція.",
        heroButton: "Get a Quote",
        images: {
          img1: {
            alt: "Готель з чорними та білими фасадами",
            src: "/images/projects/public_facilities/hotelMolodMain.webp",
          },
          img2: {
            alt: "Готель з чорними та білими фасадами",
            src: "/images/projects/public_facilities/hotelMolodMain.webp",
          },
          img3: {
            alt: "Готель з чорними та білими фасадами",
            src: "/images/projects/public_facilities/hotelMolodMain.webp",
          },
        },
        link: "...",
        address:
          "Київська обл., Києво-Святошинський р-н., с.Шпитьки, вул. Фізкультурна, 27",
        categorySlug: "public_facilities",
        category: "Громадські споруди та офісні центри",
        linkCategory: "/projects/public_facilities",
      },

      13: {
        id: "13",
        projectSlug: "cafe_brovar",
        title: "Кафе Бровар",
        mainImg: "/images/projects/public_facilities/cafeBrovarMain.webp",
        mainAlt:
          "Кафе Бровар, розташоване на нижньому поверсі багатоповерхової будівлі",
        heroDescription:
          "Об'єкт, у будівництві якого брало участь ТОВ Енерговентиляція.",
        heroButton: "Get a Quote",
        images: {
          img1: {
            alt: "Кафе Бровар, розташоване на нижньому поверсі багатоповерхової будівлі",
            src: "/images/projects/public_facilities/cafeBrovarMain.webp",
          },
          img2: {
            alt: "Кафе Бровар, розташоване на нижньому поверсі багатоповерхової будівлі",
            src: "/images/projects/public_facilities/cafeBrovarMain.webp",
          },
          img3: {
            alt: "Кафе Бровар, розташоване на нижньому поверсі багатоповерхової будівлі",
            src: "/images/projects/public_facilities/cafeBrovarMain.webp",
          },
        },
        link: "...",
        address: "м. Київ, Дарницький б-р",
        categorySlug: "public_facilities",
        category: "Громадські споруди та офісні центри",
        linkCategory: "/projects/public_facilities",
      },

      14: {
        id: "14",
        projectSlug: "office_center",
        title: "Офісний центр",
        mainImg: "/images/projects/public_facilities/officeCenterMain.webp",
        mainAlt: "Бізнес-центр з сучасною скляною та металевою обробкою",
        heroDescription:
          "Об'єкт, у будівництві якого брало участь ТОВ Енерговентиляція.",
        heroButton: "Get a Quote",
        images: {
          img1: {
            alt: "Бізнес-центр з сучасною скляною та металевою обробкою",
            src: "/images/projects/public_facilities/officeCenterMain.webp",
          },
          img2: {
            alt: "Бізнес-центр з сучасною скляною та металевою обробкою",
            src: "/images/projects/public_facilities/officeCenterMain.webp",
          },
          img3: {
            alt: "Бізнес-центр з сучасною скляною та металевою обробкою",
            src: "/images/projects/public_facilities/officeCenterMain.webp",
          },
        },
        link: "...",
        address: "м. Житомир",
        categorySlug: "public_facilities",
        category: "Громадські споруди та офісні центри",
        linkCategory: "/projects/public_facilities",
      },

      // ===========================================
      15: {
        id: "15",
        projectSlug: "sanatorium_yalynka",
        title: "Київський міський дитячий санаторій Ялинка",
        mainImg: "/images/projects/hskc/sanatorium_yalynkaMain.webp",
        mainAlt:
          "Головний корпус Київського міського дитячого санаторію «Ялинка», оточений деревами, з яскравим фасадом та територією для відпочинку дітей",
        heroDescription:
          "Об'єкт, у будівництві якого брало участь ТОВ Енерговентиляція.",
        heroButton: "Get a Quote",
        images: {
          img1: {
            alt: "Головний корпус Київського міського дитячого санаторію «Ялинка», оточений деревами, з яскравим фасадом та територією для відпочинку дітей",
            src: "/images/projects/hskc/sanatorium_yalynkaMain.webp",
          },
          img2: {
            alt: "Головний корпус Київського міського дитячого санаторію «Ялинка», оточений деревами, з яскравим фасадом та територією для відпочинку дітей",
            src: "/images/projects/hskc/sanatorium_yalynkaMain.webp",
          },
          img3: {
            alt: "Головний корпус Київського міського дитячого санаторію «Ялинка», оточений деревами, з яскравим фасадом та територією для відпочинку дітей",
            src: "/images/projects/hskc/sanatorium_yalynkaMain.webp",
          },
        },
        link: "...",
        address: "м. Київ, вул. Гамарника, 20",
        categorySlug: "hskc",
        category: "Лікарні, школи, дитсадки, церкви",
        linkCategory: "/projects/hskc",
      },

      16: {
        id: "16",
        projectSlug: "cancer_dispensary",
        title: "Онкодиспансер обласної лікарні в м.Києві",
        mainImg: "/images/projects/hskc/cancer_dispensaryMain.webp",
        mainAlt:
          "Будівля онкодиспансеру обласної лікарні в Києві з сучасним фасадом, кілька поверхів, оточена зеленою територією",
        heroDescription:
          "Об'єкт, у будівництві якого брало участь ТОВ Енерговентиляція.",
        heroButton: "Get a Quote",
        images: {
          img1: {
            alt: "Будівля онкодиспансеру обласної лікарні в Києві з сучасним фасадом, кілька поверхів, оточена зеленою територією",
            src: "/images/projects/hskc/cancer_dispensaryMain.webp",
          },
          img2: {
            alt: "Будівля онкодиспансеру обласної лікарні в Києві з сучасним фасадом, кілька поверхів, оточена зеленою територією",
            src: "/images/projects/hskc/cancer_dispensaryMain.webp",
          },
          img3: {
            alt: "Будівля онкодиспансеру обласної лікарні в Києві з сучасним фасадом, кілька поверхів, оточена зеленою територією",
            src: "/images/projects/hskc/cancer_dispensaryMain.webp",
          },
        },
        link: "...",
        address: "м. Київ",
        categorySlug: "hskc",
        category: "Лікарні, школи, дитсадки, церкви",
        linkCategory: "/projects/hskc",
      },

      17: {
        id: "17",
        projectSlug: "medical_clinic_innovation",
        title: "Мeдична клініка «Інновація»",
        mainImg: "/images/projects/hskc/medical_clinic_innovationMain.webp",
        mainAlt:
          "Фасад трьоповерхової медичної клініки Інновація з сучасним дизайном",
        heroDescription:
          "Об'єкт, у будівництві якого брало участь ТОВ Енерговентиляція.",
        heroButton: "Get a Quote",
        images: {
          img1: {
            alt: "Фасад трьоповерхової медичної клініки Інновація з сучасним дизайном",
            src: "/images/projects/hskc/medical_clinic_innovationMain.webp",
          },
          img2: {
            alt: "Фасад трьоповерхової медичної клініки Інновація з сучасним дизайном",
            src: "/images/projects/hskc/medical_clinic_innovationMain.webp",
          },
          img3: {
            alt: "Фасад трьоповерхової медичної клініки Інновація з сучасним дизайном",
            src: "/images/projects/hskc/medical_clinic_innovationMain.webp",
          },
        },
        link: "...",
        address: "с. Лютіж, Вишгородського р-ну",
        categorySlug: "hskc",
        category: "Лікарні, школи, дитсадки, церкви",
        linkCategory: "/projects/hskc",
      },

      18: {
        id: "18",
        projectSlug: "epiphany_cathedral",
        title: "Свято-богоявленський кафедральний Собор",
        mainImg: "/images/projects/hskc/epiphany_cathedralMain.webp",
        mainAlt:
          "Кафедральний собор з високими куполами та традиційною православною архітектурою",
        heroDescription:
          "Об'єкт, у будівництві якого брало участь ТОВ Енерговентиляція.",
        heroButton: "Get a Quote",
        images: {
          img1: {
            alt: "Кафедральний собор з високими куполами та традиційною православною архітектурою",
            src: "/images/projects/hskc/epiphany_cathedralMain.webp",
          },
          img2: {
            alt: "Кафедральний собор з високими куполами та традиційною православною архітектурою",
            src: "/images/projects/hskc/epiphany_cathedralMain.webp",
          },
          img3: {
            alt: "Кафедральний собор з високими куполами та традиційною православною архітектурою",
            src: "/images/projects/hskc/epiphany_cathedralMain.webp",
          },
        },
        link: "...",
        address: "м. Горлівка, Донецької обл.",
        categorySlug: "hskc",
        category: "Лікарні, школи, дитсадки, церкви",
        linkCategory: "/projects/hskc",
      },

      19: {
        id: "19",
        projectSlug: "residential_buildings",
        title: "Житлові будинки",
        mainImg: "/images/projects/hskc/residential_buildingsMain.webp",
        mainAlt:
          "Сучасні багатоповерхові житлові будинки з балконами, розташовані у міському районі",
        heroDescription:
          "Об'єкт, у будівництві якого брало участь ТОВ Енерговентиляція.",
        heroButton: "Get a Quote",
        images: {
          img1: {
            alt: "Сучасні багатоповерхові житлові будинки з балконами, розташовані у міському районі",
            src: "/images/projects/hskc/residential_buildings1.webp",
          },
          img2: {
            alt: "Сучасні багатоповерхові житлові будинки з балконами, розташовані у міському районі",
            src: "/images/projects/hskc/residential_buildingsMain.webp",
          },
          img3: {
            alt: "Сучасні багатоповерхові житлові будинки з балконами, розташовані у міському районі",
            src: "/images/projects/hskc/residential_buildings2.webp",
          },
        },
        link: "...",
        address:
          "м. Бровари, вул. Олімпійська; м. Київ, вул. Кільцева; м. Київ, житловий комплекс (просп. 40-річчя Жовтня, 60); м. Київ, житловий дім No 112 (вул. Метрологічна); м. Бровари, вул. Красовського; м. Бровари, вул. Кірова; м. Бровари, вул. Грушевского; м. Бровари, вул. Черняховського; м. Київ, вул. Шумського; м. Коцюбинське, житловий будинок",
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
        mainAlt:
          "Фасад торгово-розважального центру «Амстор» із яскравими вивісками та просторою парковкою перед будівлею",
        heroDescription:
          "Об'єкт, у будівництві якого брало участь ТОВ Енерговентиляція.",
        heroButton: "Get a Quote",
        images: {
          img1: {
            alt: "Фасад торгово-розважального центру «Амстор» із яскравими вивісками та просторою парковкою перед будівлею",
            src: "/images/projects/trade_complexes/amstorMain.webp",
          },
          img2: {
            alt: "Фасад торгово-розважального центру «Амстор» із яскравими вивісками та просторою парковкою перед будівлею",
            src: "/images/projects/trade_complexes/amstorMain.webp",
          },
          img3: {
            alt: "Фасад торгово-розважального центру «Амстор» із яскравими вивісками та просторою парковкою перед будівлею",
            src: "/images/projects/trade_complexes/amstorMain.webp",
          },
        },
        link: "...",
        address:
          "м. Бердянськ, вул. Комунарів, 75-3; м. Дніпропетровськ, проїзд Газети Правда, 31-д; м. Донецьк вул. Ілліча, 23-д; м. Запоріжжя (6 обʼєктів); м. Kиїв (3 обʼєкта);  м. Краматорськ, вул. Маяковського, 1-м; м. Кременчук, вул. Халаменюка, 7; м. Маріуполь (4 обʼєкта); м. Миколаїв, просп. Героїв Сталінграда, 9-р; м. Святогірськ, вул. Островського 5-а;  м. Сєверодонецьк, проспект Космонавтів",
        categorySlug: "trade_complexes",
        category: "Мережі громадсько-торгових комплексів",
        linkCategory: "/projects/trade_complexes",
      },

      21: {
        id: "21",
        projectSlug: "silpo",
        title: "Мережа супермаркетів Сільпо",
        mainImg: "/images/projects/trade_complexes/silpoMain.webp",
        mainAlt:
          "Вхід до супермаркету Сільпо з фірмовою вивіскою та продуктовими вітринами",
        heroDescription:
          "Об'єкт, у будівництві якого брало участь ТОВ Енерговентиляція.",
        heroButton: "Get a Quote",
        images: {
          img1: {
            alt: "Вхід до супермаркету Сільпо з фірмовою вивіскою та продуктовими вітринами",
            src: "/images/projects/trade_complexes/silpoMain.webp",
          },
          img2: {
            alt: "Вхід до супермаркету Сільпо з фірмовою вивіскою та продуктовими вітринами",
            src: "/images/projects/trade_complexes/silpoMain.webp",
          },
          img3: {
            alt: "Вхід до супермаркету Сільпо з фірмовою вивіскою та продуктовими вітринами",
            src: "/images/projects/trade_complexes/silpoMain.webp",
          },
        },
        link: "...",
        address:
          "м. Kиїв, б-р Дарницький, 8 а; м. Kиїв, вул. Драйзера, 8; м. Kиїв, пров. Карельський, 3; м. Kиїв, вул. Малевича, 107; м. Kиїв, вул. Милославська 10; м. Kиїв, вул. Полярна, 20",
        categorySlug: "trade_complexes",
        category: "Мережі громадсько-торгових комплексів",
        linkCategory: "/projects/trade_complexes",
      },

      22: {
        id: "22",
        projectSlug: "retroville",
        title: "Торгівельний центр Ретровіль",
        mainImg: "/images/projects/trade_complexes/retrovilleMain.webp",
        mainAlt:
          "Фасад торгового центру Ретровіль з сучасним дизайном та великими скляними вітринами",
        heroDescription:
          "Об'єкт, у будівництві якого брало участь ТОВ Енерговентиляція.",
        heroButton: "Get a Quote",
        images: {
          img1: {
            alt: "Фасад торгового центру Ретровіль з сучасним дизайном та великими скляними вітринами",
            src: "/images/projects/trade_complexes/retrovilleMain.webp",
          },
          img2: {
            alt: "Фасад торгового центру Ретровіль з сучасним дизайном та великими скляними вітринами",
            src: "/images/projects/trade_complexes/retrovilleMain.webp",
          },
          img3: {
            alt: "Фасад торгового центру Ретровіль з сучасним дизайном та великими скляними вітринами",
            src: "/images/projects/trade_complexes/retrovilleMain.webp",
          },
        },
        link: "...",
        address: "м. Київ, просп. Правди, 47",
        categorySlug: "trade_complexes",
        category: "Мережі громадсько-торгових комплексів",
        linkCategory: "/projects/trade_complexes",
      },

      23: {
        id: "23",
        projectSlug: "darynok",
        title: "Торгівельний центр Даринок",
        mainImg: "/images/projects/trade_complexes/darynokMain.webp",
        mainAlt:
          "Фасад торгового центру Даринок коричневого кольору з великими вітринами та яскравими вивісками",
        heroDescription:
          "Об'єкт, у будівництві якого брало участь ТОВ Енерговентиляція.",
        heroButton: "Get a Quote",
        images: {
          img1: {
            alt: "Фасад торгового центру Даринок коричневого кольору з великими вітринами та яскравими вивісками",
            src: "/images/projects/trade_complexes/darynokMain.webp",
          },
          img2: {
            alt: "Фасад торгового центру Даринок коричневого кольору з великими вітринами та яскравими вивісками",
            src: "/images/projects/trade_complexes/darynokMain.webp",
          },
          img3: {
            alt: "Фасад торгового центру Даринок коричневого кольору з великими вітринами та яскравими вивісками",
            src: "/images/projects/trade_complexes/darynokMain.webp",
          },
        },
        link: "...",
        address: "м. Київ, вул. Магнітогорська",
        categorySlug: "trade_complexes",
        category: "Мережі громадсько-торгових комплексів",
        linkCategory: "/projects/trade_complexes",
      },

      24: {
        id: "24",
        projectSlug: "novus",
        title: "Гіпермаркет Novus",
        mainImg: "/images/projects/trade_complexes/novusMain.webp",
        mainAlt:
          "Вхід до гіпермаркету Novus з яскравою вивіскою та широкими вітринами, що демонструють асортимент товарів",
        heroDescription:
          "Об'єкт, у будівництві якого брало участь ТОВ Енерговентиляція.",
        heroButton: "Get a Quote",
        images: {
          img1: {
            alt: "Вхід до гіпермаркету Novus з яскравою вивіскою та широкими вітринами, що демонструють асортимент товарів",
            src: "/images/projects/trade_complexes/novus1.png",
          },
          img2: {
            alt: "Вхід до гіпермаркету Novus з яскравою вивіскою та широкими вітринами, що демонструють асортимент товарів",
            src: "/images/projects/trade_complexes/novusMain.webp",
          },
          img3: {
            alt: "Вхід до гіпермаркету Novus з яскравою вивіскою та широкими вітринами, що демонструють асортимент товарів",
            src: "/images/projects/trade_complexes/novus1.png",
          },
        },
        link: "...",
        address:
          "м. Бровари, вул. Київська, 253; м. Київ, пр-т. Романа Шухевича, 18",
        categorySlug: "trade_complexes",
        category: "Мережі громадсько-торгових комплексів",
        linkCategory: "/projects/trade_complexes",
      },

      25: {
        id: "25",
        projectSlug: "forum",
        title: "Торгівельно-розважальний центр Forum",
        mainImg: "/images/projects/trade_complexes/forumMain.webp",
        mainAlt:
          "Фасад торгівельно-розважального центру Forum з сучасним дизайном, великими вікнами та вивісками, що рекламують магазини та розважальні заклади",
        heroDescription:
          "Об'єкт, у будівництві якого брало участь ТОВ Енерговентиляція.",
        heroButton: "Get a Quote",
        images: {
          img1: {
            alt: "Фасад торгівельно-розважального центру Forum з сучасним дизайном, великими вікнами та вивісками, що рекламують магазини та розважальні заклади",
            src: "/images/projects/trade_complexes/forum1.png",
          },
          img2: {
            alt: "Фасад торгівельно-розважального центру Forum з сучасним дизайном, великими вікнами та вивісками, що рекламують магазини та розважальні заклади",
            src: "/images/projects/trade_complexes/forumMain.webp",
          },
          img3: {
            alt: "Фасад торгівельно-розважального центру Forum з сучасним дизайном, великими вікнами та вивісками, що рекламують магазини та розважальні заклади",
            src: "/images/projects/trade_complexes/forum1.png",
          },
        },
        link: "...",
        address: "м. Львів",
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
        mainAlt:
          "Зовнішній вигляд фасаду синього кольору кондитерської фабрики з великими вікнами та брендовими вивісками",
        heroDescription:
          "Об'єкт, у будівництві якого брало участь ТОВ Енерговентиляція.",
        heroButton: "Get a Quote",
        images: {
          img1: {
            alt: "Зовнішній вигляд фасаду синього кольору кондитерської фабрики з великими вікнами та брендовими вивісками",
            src: "/images/projects/industry/kraft_foods_ukraineMain.webp",
          },
          img2: {
            alt: "Зовнішній вигляд фасаду синього кольору кондитерської фабрики з великими вікнами та брендовими вивісками",
            src: "/images/projects/industry/kraft_foods_ukraineMain.webp",
          },
          img3: {
            alt: "Зовнішній вигляд фасаду синього кольору кондитерської фабрики з великими вікнами та брендовими вивісками",
            src: "/images/projects/industry/kraft_foods_ukraineMain.webp",
          },
        },
        link: "...",
        address: "м. Тростянець",
        categorySlug: "industry",
        category: "Промислові споруди",
        linkCategory: "/projects/industry",
      },

      27: {
        id: "27",
        projectSlug: "alko_invest",
        title: "Обʼєкти ЗАТ АЛКО ІНВЕСТ (торгова марка «Nemiroff»)",
        mainImg: "/images/projects/industry/alko_investMain.webp",
        mainAlt:
          "Фасад будівлі ЗАТ АЛКО ІНВЕСТ із сучасним дизайном, що демонструє логотип компанії на зовнішній стіні",
        heroDescription:
          "Об'єкт, у будівництві якого брало участь ТОВ Енерговентиляція.",
        heroButton: "Get a Quote",
        images: {
          img1: {
            alt: "Фасад будівлі ЗАТ АЛКО ІНВЕСТ із сучасним дизайном, що демонструє логотип компанії на зовнішній стіні",
            src: "/images/projects/industry/alko_invest1.webp",
          },
          img2: {
            alt: "Фасад будівлі ЗАТ АЛКО ІНВЕСТ із сучасним дизайном, що демонструє логотип компанії на зовнішній стіні",
            src: "/images/projects/industry/alko_investMain.webp",
          },
          img3: {
            alt: "Фасад будівлі ЗАТ АЛКО ІНВЕСТ із сучасним дизайном, що демонструє логотип компанії на зовнішній стіні",
            src: "/images/projects/industry/alko_invest1.webp",
          },
        },
        link: "...",
        address: "м. Немирів",
        categorySlug: "industry",
        category: "Промислові споруди",
        linkCategory: "/projects/industry",
      },

      28: {
        id: "28",
        projectSlug: "osmoloda_plant",
        title: "Завод будматеріалів ТОВ ОСМОЛОДА",
        mainImg: "/images/projects/industry/osmoloda_plantMain.webp",
        mainAlt:
          "Зовнішній вигляд заводу будматеріалів ТОВ ОСМОЛОДА з виробничими зонами",
        heroDescription:
          "Об'єкт, у будівництві якого брало участь ТОВ Енерговентиляція.",
        heroButton: "Get a Quote",
        images: {
          img1: {
            alt: "Зовнішній вигляд заводу будматеріалів ТОВ ОСМОЛОДА з виробничими зонами",
            src: "/images/projects/industry/osmoloda_plantMain.webp",
          },
          img2: {
            alt: "Зовнішній вигляд заводу будматеріалів ТОВ ОСМОЛОДА з виробничими зонами",
            src: "/images/projects/industry/osmoloda_plantMain.webp",
          },
          img3: {
            alt: "Зовнішній вигляд заводу будматеріалів ТОВ ОСМОЛОДА з виробничими зонами",
            src: "/images/projects/industry/osmoloda_plantMain.webp",
          },
        },
        link: "...",
        address:
          "смт. Брошнів-Осада, Рожнятинського р-ну, Івано-Франківської обл.",
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
        mainAlt:
          "Фасад Альта-центру в Києві зеленого кольору з сучасним архітектурним дизайном",
        heroDescription:
          "Об'єкт, у будівництві якого брало участь ТОВ Енерговентиляція.",
        heroButton: "Get a Quote",
        images: {
          img1: {
            alt: "Фасад Альта-центру в Києві зеленого кольору з сучасним архітектурним дизайном",
            src: "/images/projects/trade_complexes/altacenter1.png",
          },
          img2: {
            alt: "Фасад Альта-центру в Києві зеленого кольору з сучасним архітектурним дизайном",
            src: "/images/projects/trade_complexes/altacenterMain.webp",
          },
          img3: {
            alt: "Фасад Альта-центру в Києві зеленого кольору з сучасним архітектурним дизайном",
            src: "/images/projects/trade_complexes/altacenter1.png",
          },
        },
        link: "...",
        address: "м. Київ",
        categorySlug: "trade_complexes",
        category: "Мережі громадсько-торгових комплексів",
        linkCategory: "/projects/trade_complexes",
      },

      30: {
        id: "30",
        projectSlug: "karavan",
        title: "Торгово-розважальний центр Karavan",
        mainImg: "/images/projects/trade_complexes/karavanMain.webp",
        mainAlt:
          "Фасад торгово-розважального центру Karavan з великим логотипом, вхідними дверима та паркувальними місцями на передньому плані",
        heroDescription:
          "Об'єкт, у будівництві якого брало участь ТОВ Енерговентиляція.",
        heroButton: "Get a Quote",
        images: {
          img1: {
            alt: "Фасад торгово-розважального центру Karavan з великим логотипом, вхідними дверима та паркувальними місцями на передньому плані",
            src: "/images/projects/trade_complexes/karavan1.png",
          },
          img2: {
            alt: "Фасад торгово-розважального центру Karavan з великим логотипом, вхідними дверима та паркувальними місцями на передньому плані",
            src: "/images/projects/trade_complexes/karavanMain.webp",
          },
          img3: {
            alt: "Фасад торгово-розважального центру Karavan з великим логотипом, вхідними дверима та паркувальними місцями на передньому плані",
            src: "/images/projects/trade_complexes/karavan2.png",
          },
        },
        link: "...",
        address: "м. Київ; м. Харків; смт. Ювілейне, Дніпропетровської обл.",
        categorySlug: "trade_complexes",
        category: "Мережі громадсько-торгових комплексів",
        linkCategory: "/projects/trade_complexes",
      },

      31: {
        id: "31",
        projectSlug: "epicenter",
        title: "Мережа гіпермаркетів Епіцентр",
        mainImg: "/images/projects/trade_complexes/epicenterMain.webp",
        mainAlt:
          "Фасад гіпермаркету Епіцентр з великим логотипом, вхідними дверима та сучасним дизайном, оточений паркувальними місцями",
        heroDescription:
          "Об'єкт, у будівництві якого брало участь ТОВ Енерговентиляція.",
        heroButton: "Get a Quote",
        images: {
          img1: {
            alt: "Фасад гіпермаркету Епіцентр з великим логотипом, вхідними дверима та сучасним дизайном, оточений паркувальними місцями",
            src: "/images/projects/trade_complexes/epicenter1.png",
          },
          img2: {
            alt: "Фасад гіпермаркету Епіцентр з великим логотипом, вхідними дверима та сучасним дизайном, оточений паркувальними місцями",
            src: "/images/projects/trade_complexes/epicenterMain.webp",
          },
          img3: {
            alt: "Фасад гіпермаркету Епіцентр з великим логотипом, вхідними дверима та сучасним дизайном, оточений паркувальними місцями",
            src: "/images/projects/trade_complexes/epicenter2.png",
          },
        },
        link: "...",
        address:
          "м. Київ (7 обʼєктів площею від 10700 м2 до 103400 м2); Київська обл., смт Калинівка, вул.Індустріальна, 5, Логістичний центр Калинівка- пл. 51500м2; м. Вінниця, с. Зарванці, вул. Хмельницьке шосе, 1-А - пл. 21200 м2; м. Горлівка, вул. Жукова, 7 - пл. 11000м2; м. Дніпро (2 обʼєкта) пл. 29400 та 30100 м2; м. Маківка, вул. 250-річчя Донбасу, 74 - пл. 30850 м2; м. Донецьк, вул. Шутова, 37 - пл. 28000 м2; м. Запоріжжя, вул. Запорізька, 1-в - пл. 18700 м2; м. Івано-Франківськ вул. Івасюка, 17 - пл. 23500 м2; м. Кам'янець-Подільський, вул. Хмельницьке шосе, 11 - пл. 11010 м2; м. Кропивницький, вул. Попова, 8 - пл. 16700 м2; м. Кривий Ріг, вул. Бикова, 33 - пл. 20550 м2; м. Луганськ (2 обʼєкта) пл. 27700 м2; м. Луцьк, с. Липини, вул. Окружна, 37 - пл. 21600 м2; м. Львів, вул. Городоцька, 302 - пл. 25908 м2; м. Маріуполь, просп. Леніна, 130 - пл. 21600 м2; м. Миколаїв, просп. Жовтневий, 234-в - пл. 15805 м2; м. Мукачево, вул. Лавківська, 1-Д - пл. 11000 м2; м. Одеса (2 обʼєкта) пл. 30000 та 50000 м2;  м. Севастополь, вул. Отрадна, 15 - пл. 22410 м2; м. Сімферополь, просп. Перемоги, 245 - пл. 26400 м2; м. Стрий, вул. Ольжича, 18 - пл. 9540 м2; м. Тернопіль, вул. Поліська, 7 - пл. 15751м2; м. Ужгород, вул. Баб’яка, 7/1 - пл. 13000 м2; м. Харків, вул. Архітекторів, 7 - пл. 22300 м2; м. Херсон, Бериславське шосе, 17 - пл. 20630 м2; м. Хмельницький, вул. Зарічанська, 11/4 - пл. 23300 м2; м. Черкаси, вул. 30-річчя Перемоги, 29 - пл. 18000 м2; м. Чернівці, вул. Хотинська, 10-а - пл. 27260 м2; м. Чернігів, с. Новоселівка, вул. Шевченка, 57  -пл. 21700 м2; м. Полтава, вул. Київське шосе, 41 - пл. 27700 м2; м. Рівне, вул. Макарова, 17 - пл. 26000 м2; м. Львів, вул. Богдана Хмельницького, 188a - пл. 88 455 м2; м. Житомир, Київське шосе, 4/2 - пл.19171 м2; м. Умань, вул. Київська, 27 - пл. 6336 м2; Хмельницька обл. м.Городок, вул. Шевченка, 39/15, IQ OFFICE - пл. 6250м2",
        categorySlug: "trade_complexes",
        category: "Мережі громадсько-торгових комплексів",
        linkCategory: "/projects/trade_complexes",
      },

      32: {
        id: "32",
        projectSlug: "odeskiy_bulvar",
        title: "ЖК Одеський бульвар",
        mainImg: "/images/projects/hskc/odeskiy_bulvarMain.webp",
        mainAlt: "Житловий комплекс яскравих багатоповерхівок Одеський бульвар",
        heroDescription:
          "Об'єкт, у будівництві якого брало участь ТОВ Енерговентиляція.",
        heroButton: "Get a Quote",
        images: {
          img1: {
            alt: "Житловий комплекс яскравих багатоповерхівок Одеський бульвар",
            src: "/images/projects/hskc/odeskiy_bulvarMain.webp",
          },
          img2: {
            alt: "Житловий комплекс яскравих багатоповерхівок Одеський бульвар",
            src: "/images/projects/hskc/odeskiy_bulvarMain.webp",
          },
          img3: {
            alt: "Житловий комплекс яскравих багатоповерхівок Одеський бульвар",
            src: "/images/projects/hskc/odeskiy_bulvarMain.webp",
          },
        },
        link: "...",
        address: "Київська обл., с. Новосілки",
        categorySlug: "hskc",
        category: "Лікарні, школи, дитсадки, церкви",
        linkCategory: "/projects/hskc",
      },

      33: {
        id: "33",
        projectSlug: "blockbuster",
        title: "Торгово-розважальний комплекс BlockБастер",
        mainImg: "/images/projects/trade_complexes/blockbusterMain.webp",
        mainAlt:
          "Скляний фасад розважального центру BlockBuster з яскраво-червоними вставками з великим логотипом",
        heroDescription:
          "Об'єкт, у будівництві якого брало участь ТОВ Енерговентиляція.",
        heroButton: "Get a Quote",
        images: {
          img1: {
            alt: "Скляний фасад розважального центру BlockBuster з яскраво-червоними вставками з великим логотипом",
            src: "/images/projects/trade_complexes/blockbusterMain.webp",
          },
          img2: {
            alt: "Скляний фасад розважального центру BlockBuster з яскраво-червоними вставками з великим логотипом",
            src: "/images/projects/trade_complexes/blockbusterMain.webp",
          },
          img3: {
            alt: "Скляний фасад розважального центру BlockBuster з яскраво-червоними вставками з великим логотипом",
            src: "/images/projects/trade_complexes/blockbusterMain.webp",
          },
        },
        link: "...",
        address: "м. Київ, просп. С. Бандери 34-в",
        categorySlug: "trade_complexes",
        category: "Мережі громадсько-торгових комплексів",
        linkCategory: "/projects/trade_complexes",
      },

      34: {
        id: "34",
        projectSlug: "river_mall",
        title: "Торговий центр River Mall",
        mainImg: "/images/projects/trade_complexes/river_mallMain.webp",
        mainAlt:
          "Фасад торгового центру River Mall з сучасним дизайном і скляними вітринами",
        heroDescription:
          "Об'єкт, у будівництві якого брало участь ТОВ Енерговентиляція.",
        heroButton: "Get a Quote",
        images: {
          img1: {
            alt: "Фасад торгового центру River Mall з сучасним дизайном і скляними вітринами",
            src: "/images/projects/trade_complexes/river_mall1.png",
          },
          img2: {
            alt: "Фасад торгового центру River Mall з сучасним дизайном і скляними вітринами",
            src: "/images/projects/trade_complexes/river_mallMain.webp",
          },
          img3: {
            alt: "Фасад торгового центру River Mall з сучасним дизайном і скляними вітринами",
            src: "/images/projects/trade_complexes/river_mall1.png",
          },
        },
        link: "...",
        address: "м. Київ, Дніпровська набережна, 12",
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
          images: {
            1: {
              id: "1",
              src: "/images/projects/blockBaster.jpg",
              alt: "BlockBaster",
              title: "BlockБастер",
              area_label: "...",
            },
            2: {
              id: "2",
              src: "/images/projects/riverMall.jpg",
              alt: "River Mall",
              title: "River Mall",
              area_label: "...",
            },
            3: {
              id: "3",
              src: "/images/projects/odeskiyBulvar.jpg",
              alt: "Одеський бульвар",
              title: "Одеський бульвар",
              area_label: "...",
            },
            4: {
              id: "4",
              src: "/images/projects/epicentr.jpg",
              alt: "Епіцентр",
              title: "Епіцентр",
              area_label: "...",
            },
            5: {
              id: "5",
              src: "/images/projects/karavan.jpg",
              alt: "Караван",
              title: "Караван",
              area_label: "...",
            },
            6: {
              id: "6",
              src: "/images/projects/altaCentr.jpg",
              alt: "Альта центр",
              title: "Альта центр",
              area_label: "...",
            },
          },
          title: "Екологічне будівництво",
          description:
            "Завершіть, будь ласка, заповнення. Презентуйся маса, конваліс пелентескве нек, еґестас нон нісі.",
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
            2: {
              id: "2",
              src: "/images/projects/odeskiyBulvar.jpg",
              alt: "Одеський бульвар",
              title: "Одеський бульвар",
              area_label: "...",
            },
            3: {
              id: "3",
              src: "/images/projects/blockBaster.jpg",
              alt: "BlockBaster",
              title: "BlockБастер",
              area_label: "...",
            },
            4: {
              id: "4",
              src: "/images/projects/epicentr.jpg",
              alt: "Епіцентр",
              title: "Епіцентр",
              area_label: "...",
            },
            5: {
              id: "5",
              src: "/images/projects/karavan.jpg",
              alt: "Караван",
              title: "Караван",
              area_label: "...",
            },
            6: {
              id: "6",
              src: "/images/projects/altaCentr.jpg",
              alt: "Альта центр",
              title: "Альта центр",
              area_label: "...",
            },
          },
          title: "Найновіші технології ремонту",
          description:
            "Завершіть, будь ласка, заповнення. Презентуйся маса, конваліс пелентескве нек, еґестас нон нісі.",
        },
        3: {
          images: {
            1: {
              id: "1",
              src: "/images/projects/epicentr.jpg",
              alt: "Епіцентр",
              title: "Епіцентр",
              area_label: "...",
            },

            2: {
              id: "2",
              src: "/images/projects/blockBaster.jpg",
              alt: "BlockBaster",
              title: "BlockБастер",
              area_label: "...",
            },
            3: {
              id: "3",
              src: "/images/projects/odeskiyBulvar.jpg",
              alt: "Одеський бульвар",
              title: "Одеський бульвар",
              area_label: "...",
            },
            4: {
              id: "4",
              src: "/images/projects/riverMall.jpg",
              alt: "River Mall",
              title: "River Mall",
              area_label: "...",
            },
            5: {
              id: "5",
              src: "/images/projects/karavan.jpg",
              alt: "Караван",
              title: "Караван",
              area_label: "...",
            },
            6: {
              id: "6",
              src: "/images/projects/altaCentr.jpg",
              alt: "Альта центр",
              title: "Альта центр",
              area_label: "...",
            },
          },
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
  ContactUs: {
    formTitle: "Зв'яжіться з нами",
    placeholderName: "Ім'я",
    placeholderEmail: "Електронна пошта",
    placeholderMessage: "Повідомлення",
    button: "надіслати повідомлення",
    msg_success: "Вітаємо!!<br/>Електронний лист успішно надіслано!",
    msg_error: "Вибачте!!<br/>Виникла помилка при відправці листа<br/>",
    msg_btn: "закрити",
    acceptTerms: "Я приймаю ",
    requiredName: "Мінімум 2 символи",
    requiredEmail: "Введіть коректну електронну адресу",
    requiredMessage: "Мінімум 15 символів",
    required: "Обов'язкове поле",
  },
  HeroRightSide: {
    services: {
      title: "Наші послуги",
      list: {
        designing: {
          href: "/services/designing",
          svgName: "SideServicesDesigning",
          title: "Проектування",
          descriptions: "Початкова стадія створення атмосфери комфорту.",
        },
        production: {
          href: "/services/production-and-sale-of-finished-products",
          svgName: "SideServicesProduction",
          title: "Виробництво",
          descriptions: "Виробництво та реалізація готової продукції.",
        },
        assembling: {
          href: "/services/installation-of-ventilation-and-air-conditioning-systems",
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
          href: "/services/control-and-measuring-devices-and-automation",
          svgName: "SideTodoAutomation",
          title: "Автоматизація",
          descriptions:
            "Автоматизація вентиляційних систем і систем кондиціювання повітря.",
        },
        works: {
          href: "/services/start-up-and-debugging-works",
          svgName: "SideTodoCommissioning",
          title: "Пуско-налагоджувальні работи",
          descriptions:
            "Пускові випробування змонтованих систем вентиляції та кондиціювання.",
        },
        services: {
          href: "/services/service-maintenance",
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
          descriptions: "Дарницький бульвар, 12, <br/> Київ, 02192",
        },
        hours: {
          title: "Години роботи офісу",
          descriptions: "Пн-Пт: 9:00 – 18:00 <br/> Сб-Нд: Вихідний",
        },
        touch: {
          title: "Зв'яжіться з нами",
          descriptions: "",
          mail: "info@envent.kiev.ua ",
          tel: "+ 38(044) 503 83 77",
        },
      },
    },
  },
  ServicesPage: {
    hero: {
      title: "Наші послуги",
      description:
        "Ми працюємо з будь якими типами будівель: адміністративними, офісними та виробничими, громадськими центрами, торговими та житловими комплексами, приватними будинками, ресторанами, кафе та магазинами.",
      button: "безкоштовна консультація",
    },
    services: {
      service: {
        1: {
          id: "1",
          hero: {
            title: "Проектування",
            description:
              "Проектування - початкова стадія створення атмосфери комфорту. Саме від якості проекту залежить максимальне наближення до кінцевого результату - комфортної атмосфери приміщення із заданими або регульованими параметрами повітря.",
            button: "безкоштовна консультація",
          },
          images: {
            1: {
              id: "b839d73e",
              src: "/images/services/designing-1.webp",
              alt: "Працівники в офісі займаються проектуванням систем вентиляції.",
            },
            2: {
              id: "3e3e4b5b",
              src: "/images/services/designing-3.jpg",
              alt: "Тривимірна модель будівлі з деталізацією системи вентиляції, що проходить через усі поверхи.",
            },
            3: {
              id: "79a9e1b6",
              src: "/images/services/designing-2.jpg",
              alt: "Інженер перевіряє роздруковані плани систем вентиляції",
            },
          },
          imgCard: {
            1: {
              id: "b839d",
              src: "/images/services/designing-1.webp",
              alt: "Працівники в офісі займаються проектуванням систем вентиляції.",
            },
            2: {
              id: "3e3e4",
              src: "/images/services/designing-3.jpg",
              alt: "Тривимірна модель будівлі з деталізацією системи вентиляції, що проходить через усі поверхи.",
            },
            3: {
              id: "79a9e",
              src: "/images/services/designing-2.jpg",
              alt: "Інженер перевіряє роздруковані плани систем вентиляції",
            },
          },
          slug: "designing",
          heroBG: "/images/services/designing-1.webp",
          secondBtn: "дізнатись більше",
          p1: "Саме правильні проектні рішення дають можливість уникнути «хвороби будівлі» у вигляді підвищеної вологості, грибкових утворень та нездорового мікроклімату в приміщеннях, що є витратами застосування нових будівельних технологій, теплоізоляційних матеріалів та герметичних склопакетів.",
          p2: "Висококваліфіковані фахівці проектного відділу компанії ТОВ «Енерговентиляція» оснащені сучасною комп'ютерною технікою з необхідним програмним забезпеченням, що дозволяє виконувати проектування систем опалення, вентиляції, кондиціювання повітря, в тому числі «чистих приміщень», а також систем фільтрації та аспірації на промислових підприємствах, систем холодопостачання, включаючи системи автоматизації, у максимально короткий термін, з відмінною якістю та з урахуванням побажань замовника на об'єктах будь-якого рівня складності.",
          p3: "Вся проектна документація виконується суворо з дотриманням нормативних документів, що діють в Україні.<br/>Наші проектувальники завжди пропонують кілька варіантів технічних рішень з урахуванням особливостей об'єкта, опрацьовують шляхи зниження загальної вартості проекту без втрат функціональних можливостей системи.",
          p4: "Основна перевага нашої компанії в галузі проектування - це не тільки володіння теорією, але і велика практика, тісна взаємодія всіх відділів компанії, завдяки чому ми запропонуємо вам найбільш вдале проектне рішення з точки зору економії ваших засобів та зручності обслуговування.<br/> За бажанням замовника наші фахівці можуть провести експертизу готових проектів, технічне обстеження та паспортизацію встановлених кліматичних систем.",
          process: {
            text: "Проектування є ключовим етапом, який забезпечує комфортну атмосферу в приміщенні завдяки правильному підходу до вибору параметрів повітря, уникненню «хвороби будівлі», та роботі кваліфікованих фахівців.",
            list: {
              l1: "Проектування - ключовий етап.",
              l2: "Забезпечує комфортну атмосферу.",
              l3: "Враховує параметри повітря.",
              l4: "Уникає «хвороби будівлі».",
              l5: "Виконується кваліфікованими фахівцями.",
            },
          },
        },
        2: {
          id: "2",
          hero: {
            title: "Виробництво та реалізація готової продукції",
            description:
              "Компанія ТОВ «Енерговентиляція» має власну виробничу базу з цехами для виготовлення повітроводів, з теплими складами готової продукції, сировини та матеріалів, інструменту та комплектуючих.",
            button: "безкоштовна консультація",
          },
          images: {
            1: {
              id: "1754",
              src: "/images/services/3baza_n.jpg",
              alt: "Виробничий цех з металевими листами на станку для різання",
            },
            2: {
              id: "29567",
              src: "/images/services/4baza_n.jpg",
              alt: "Складська зона з великими рулонами металу, підвішеними на кран",
            },
            3: {
              id: "3234",
              src: "/images/services/5baza_n.jpg",
              alt: "Робітники на виробничій лінії, що працюють з металевими деталями в цеху",
            },
          },
          imgCard: {
            1: {
              id: "1",
              src: "/images/services/prgp3.jpg",
              alt: "Робітники у виробничому цеху працюють з металевими листами на станку",
            },
            2: {
              id: "2",
              src: "/images/services/prgp5.jpg",
              alt: "Металеві листи, що проходять через верстат у виробничому цеху",
            },
            3: {
              id: "4cb1-91b4",
              src: "/images/services/prgp12.jpg",
              alt: "Станок для обробки металевих труб у виробничому цеху",
            },
          },
          slug: "production-and-sale-of-finished-products",
          heroBG:
            "/images/services/production-and-sale-of-finished-products.webp",
          secondBtn: "дізнатись більше",
          p1: "Повітроводи  є одним з найважливіших елементів систем вентиляції і кондиціювання. Спільно з іншими пристроями вони забезпечують транспортування повітря у системі вентиляції.",
          p2: "Класифікація повітроводів.<br />За конфігурацією існують повітроводи прямокутного, квадратного і круглого перерізів. Їх виготовляють з прямих і фасонних складових частин. Розміри та види повітроводів встановлені у ВСН 353-86 «Проектування та застосування повітроводів з уніфікованих деталей», ТУ 36-736-93 «Повітроводи вентиляційні металеві», СНиП 2.04.05-91 «Опалення, системи вентиляції, кондиціювання».<br />За конструкцією повітропроводи діляться на прямошовні та спіральні , а за способом з'єднання – на фланцеві, без фланцеві та зварні.",
          p3: "Металеві повітроводи.<br />Звичайні повітроводи круглого і прямокутного перерізу виготовляються з листової оцинкованої або нержавіючої сталі. Повітропроводи круглого перерізу можуть бути виконані зі стрічки шириною від 125 до 135 мм (спірально-навивні) або, так само, як і прямокутні, - з листа (прямошовні). Круглі повітроводи з витрат металу і трудовим витратам при рівних аеродинамічних показниках більш економічні в порівнянні з прямокутними. ",
          p4: "Виготовлення повітроводів.<br /> Продукцією виробництва компанії є круглі прямошовні, спірально – навивні та прямокутні металеві повітроводи, що відповідають ГОСТ 24 751-81 і СНиП 2.04 .05-91 (весь типорозмірний ряд), фасонні частини до повітроводів і нестандартні вентиляційні вироби. Матеріал – листова оцинкована або нержавіюча сталь товщиною до 0,9мм.<br /> Виробництво повітроводів істотно автоматизоване. Верстати для виготовлення відводів, лінія для виготовлення прямокутних повітроводів, верстат для виготовлення спірально-навивних повітроводів, система плазмового розкрою металу, пуклювальний верстат, профільуючий верстат та багато іншого – забезпечує високу продуктивність праці та високу якість повітроводів та інших вентиляційних виробів.",
          process: {
            text: "ТОВ «Енерговентиляція» автоматизувала виробництво повітроводів, використовуючи:",
            list: {
              l1: "Верстати для виготовлення відводів.",
              l2: "Лінію для виготовлення повітроводів.",
              l3: "Верстат для спірально-навивних повітроводів.",
              l4: "Систему плазмового розкрою металу.",
              l5: "Профілюючий верстат для деталей.",
            },
          },
        },
        3: {
          id: "3",
          hero: {
            title: "Монтаж систем вентиляції та кондиціювання повітря",
            description:
              "Одним із пріоритетних напрямків діяльності компанії ТОВ «Енерговентиляція» є монтаж систем вентиляції та кондиціонування повітря, що є одним із найвідповідальніших етапів робіт із створення штучного клімату.",
            button: "безкоштовна консультація",
          },
          images: {
            1: {
              id: "12148",
              src: "/images/services/montazh_foto4.webp",
              alt: "Офісний простір з встановленою системою вентиляції",
            },
            2: {
              id: "20000",
              src: "/images/services/montazh_foto5.jpg",
              alt: "Складська зона з великими рулонами металу, підвішеними до крана",
            },
            3: {
              id: "311111",
              src: "/images/services/montazh_foto6.jpg",
              alt: "Стеля з великими вентиляційними трубами і освітлювальними конструкціями в індустріальному місці.",
            },
          },
          imgCard: {
            1: {
              id: "1",
              src: "/images/services/montazh_foto1.jpg",
              alt: "Встановлені вентиляційні канали у великому промисловому приміщенні",
            },
            2: {
              id: "2",
              src: "/images/services/montazh_foto2.jpg",
              alt: "Великі металеві вентиляційні труби",
            },
            3: {
              id: "3",
              src: "/images/services/montazh_foto3.jpg",
              alt: "Вентиляційні канали над електричними шафами у технічному приміщенні",
            },
          },
          slug: "installation-of-ventilation-and-air-conditioning-systems",
          heroBG: "/images/services/montazh_foto4.webp",
          secondBtn: "дізнатись більше",
          p1: "Результати роботи з монтажу систем вентиляції практично не піддаються маловитратному коригуванню.Часто багато елементів систем вентиляції та кондиціювання після їх монтажу та проведення подальших оздоблювальних робіт стають недоступними. Тому ці роботи необхідно проводити з найбільшою ретельністю.",
          p2: "Вентиляція - обмін повітря в приміщеннях для видалення надлишків теплоти, вологи, шкідливих та інших речовин з метою забезпечення допустимих метеорологічних умов та чистоти повітря.",
          p3: "Кондиціювання повітря - автоматична підтримка в закритих приміщеннях усіх або окремих параметрів повітря (температури, відносної вологості, чистоти, швидкості руху) на певному рівні з метою забезпечення, головним чином оптимальних метеорологічних умов, найбільш сприятливих для самопочуття людей, ведення технологічних та виробничих процесів.",
          p4: "Використання сучасних технологій монтажу забезпечує надійність роботи систем вентиляції. Висококваліфіковані спеціалісти підприємства мають великий досвід роботи як на об'єктах промислового, так і цивільного призначення. Неухильне дотримання принципів точного виконання договірних зобов'язань, відповідальності за кінцевий результат, чесності та порядності стосовно замовників, а також виконання високотехнологічних робіт власними силами дозволяє успішно реалізовувати сучасні, великі, будь-якої складності монтажні проекти.Наявність власного виробництва, транспорту та багаторічного досвіду роботи дозволяє забезпечити своєчасне постачання обладнання, комплектуючих та повітроводів на об'єкти.",
          process: {
            text: "ТОВ «Енерговентиляція» забезпечує монтаж систем:",
            list: {
              l1: "Вентиляції.",
              l2: "Кондиціювання повітря.",
              l3: "Промислового призначення.",
              l4: "Цивільного призначення.",
              l5: "Будь-якої складності.",
            },
          },
        },
        4: {
          id: "4",
          hero: {
            title: "КВПіА",
            description:
              "Основний напрямок діяльності ділянки - це не тільки виготовлення щитів і пультів управління, але і виконання всього комплексу робіт, пов'язаного з розробкою та впровадженням систем автоматизації, починаючи з обстеження об'єктів і закінчуючи пуско- налагодження систем.",
            button: "безкоштовна консультація",
          },
          images: {
            1: {
              id: "19456",
              src: "/images/services/kvpia.jpg",
              alt: "Відкрита панель керування готова до експлуатації",
            },
            2: {
              id: "2025436",
              src: "/images/services/kvpia1.webp",
              alt: " Стінна інсталяція з шести електричних панелей керування",
            },
            3: {
              id: "30236",
              src: "/images/services/kvpia2.jpg",
              alt: "Дві VLT Micro Drive інвертори, встановлені в панелі керування ",
            },
          },
          imgCard: {
            1: {
              id: "1",
              src: "/images/services/f1_s.jpg",
              alt: "Панель керування вентиляції, що демонструє внутрішню структуру системи автоматизації",
            },
            2: {
              id: "2",
              src: "/images/services/f5_2.jpg",
              alt: "Інженер підприємства перевіряє роботу панелі керування системою вентиляції",
            },
            3: {
              id: "3",
              src: "/images/services/f6_3.jpg",
              alt: "Вентиляційне обладнання у технічному приміщенні",
            },
          },
          slug: "control-and-measuring-devices-and-automation",
          heroBG: "/images/services/kvpia1.webp",
          secondBtn: "дізнатись більше",
          p1: "Дільниця КВП займається автоматизацією припливних вентиляційних систем і систем кондиціювання повітря.",
          p2: "Основний напрямок діяльності ділянки - це не тільки виготовлення щитів і пультів управління, але і виконання всього комплексу робіт, пов'язаного з розробкою та впровадженням систем автоматизації, починаючи з обстеження об'єктів і закінчуючи пуско- налагодження систем.",
          p3: "Для вирішення завдань автоматизації та диспетчеризації систем вентиляції та кондиціювання повітря, компанією ТОВ «Енерговентиляція» використовується обладнання, в тому числі і контролери, що випускаються різними виробниками, такими, як REGIN – Швеція, ТОВ «Раут-автоматик» - Україна та багатьма іншими.",
          p4: "Сучасна вентиляція - складна система, за безпечну безаварійну та економну роботу якої відповідає система автоматичного управління.",
          process: {
            text: "Дільниця КВП автоматизує вентиляційні системи та кондиціювання, виконуючи повний цикл робіт, таких як:",
            list: {
              l1: "Автоматизація систем",
              l2: "Виготовлення щитів",
              l3: "Комплексний підхід",
              l4: "Різноманітне обладнання ",
              l5: "Диспетчеризація",
            },
          },
        },
        5: {
          id: "5",
          hero: {
            title: "Поставка обладнання",
            description:
              "Фірма ТОВ «Енерговентиляція» тісно співпрацює з всесвітньо відомими та визнаними в галузі вентиляції та кондиціювання компаніями",
            button: "безкоштовна консультація",
          },
          images: {
            1: {
              id: "10191",
              src: "/images/services/postavka4.jpg",
              alt: "Технічне приміщення з вентиляційним обладнанням VTS,",
            },
            2: {
              id: "20606",
              src: "/images/services/postavka5.jpg",
              alt: "Охолоджувальний пристрій Lennox, розташований на даху будівлі",
            },
            3: {
              id: "304040",
              src: "/images/services/postavka3.jpg",
              alt: "Охолоджувальний пристрій, встановлений на даху будівлі.",
            },
          },
          imgCard: {
            1: {
              id: "1",
              src: "/images/services/postavka1.jpg",
              alt: "Промислові вентиляційні системи, встановлені на даху будівлі",
            },
            2: {
              id: "2",
              src: "/images/services/postavka2.jpg",
              alt: "Вентиляційне обладнання VTS, розташоване в технічному приміщенні",
            },
            3: {
              id: "3",
              src: "/images/services/postavka3.jpg",
              alt: "Охолоджувальний пристрій, встановлений на даху будівлі.",
            },
          },
          slug: "supply-of-equipment",
          heroBG: "/images/services/postavka5.webp",
          secondBtn: "дізнатись більше",
          p1: "Фірма ТОВ «Енерговентиляція» тісно співпрацює з всесвітньо відомими та визнаними в галузі вентиляції та кондиціювання компаніями:",
          p3: "Завдяки довготривалим партнерським відносинам з провідними виробниками, ТОВ «Енерговентиляція» має доступ до найновіших розробок та інновацій у сфері вентиляційного та кондиціонерного обладнання. Це дозволяє нам впроваджувати передові технології у наших проектах, забезпечуючи високу ефективність і надійність систем.",
          p4: "Ми прагнемо підтримувати високі стандарти якості на всіх етапах реалізації проектів, починаючи від вибору обладнання до його встановлення та обслуговування. Наша співпраця з провідними компаніями у галузі гарантує клієнтам найкращі рішення для створення комфортних і безпечних умов у будь-якому приміщенні.",
          list: {
            l1: "REMAK <br /> SYSTEMAIR <br /> OSTBERG <br /> SALDA <br /> DAIKIN <br /> MITSUBISHI <br />MITSUSHITO <br /> LENNOX <br /> FUJITSU <br />",
            l2: " ROSENBERG <br /> BAHCIVAN <br /> FRICO <br /> VENTS <br /> VTS <br /> ACM <br /> ІНТЕРКОНДИЦІОНЕР <br /> ПРОМВЕНТИЛЯТОР <br /> MAIKO",
          },
          process: {
            text: "ТОВ «Енерговентиляція» співпрацює з провідними світовими брендами для забезпечення своєчасного постачання обладнання.",
            list: {
              l1: "REMAK, ROSENBERG - Відомі європейські виробники.",
              l2: "SYSTEMAIR, BAHCIVAN - Надійні рішення для вентиляції.",
              l3: "DAIKIN, MITSUBISHI - Лідери в кондиціонуванні.",
              l4: "VENTS, SALDA - Широкий вибір вентиляційних систем.",
              l5: "FUJITSU, LENNOX - Висока якість та надійність.",
            },
          },
        },
        6: {
          id: "6",
          hero: {
            title: "Пуско-налагоджувальні роботи",
            description:
              "Фахівцями ТОВ «Енерговентиляція» проводяться пускові випробування та регулювання систем вентиляції та кондиціювання.",
            button: "безкоштовна консультація",
          },
          images: {
            1: {
              id: "1656565",
              src: "/images/services/debugging-works1.jpg",
              alt: "Повітропровід підвішений під стелею промислового приміщення.",
            },
            2: {
              id: "2879876",
              src: "/images/services/debugging-works1.jpg",
              alt: "Повітропровід підвішений під стелею промислового приміщення.",
            },
            3: {
              id: "301245",
              src: "/images/services/debugging-works1.jpg",
              alt: "Повітропровід підвішений під стелею промислового приміщення.",
            },
          },
          imgCard: {
            1: {
              id: "1",
              src: "/images/services/debugging-works1.jpg",
              alt: "Повітропровід підвішений під стелею промислового приміщення.",
            },
            2: {
              id: "2",
              src: "/images/services/debugging-works1.jpg",
              alt: "Повітропровід підвішений під стелею промислового приміщення.",
            },
            3: {
              id: "3",
              src: "/images/services/debugging-works1.jpg",
              alt: "Повітропровід підвішений під стелею промислового приміщення.",
            },
          },
          slug: "start-up-and-debugging-works",
          heroBG: "/images/services/debugging-works1.jpg",
          secondBtn: "дізнатись більше",
          p1: "Пускові випробування змонтованих систем вентиляції та кондиціювання проводяться відповідно до вимог ДБН «Правила виробництва та приймання робіт» після механічного випробування вентиляційного та пов'язаного з ним енергетичного обладнання.Метою пускових випробувань та регулювання систем вентиляції та кондиціювання повітря є приведення в відповідність параметрів їх роботи з проектними та нормативними показниками.До початку випробувань установки вентиляції та кондиціювання повітря повинні безперервно та справно пропрацювати протягом 7 годин.",
          p2: "При пускових випробуваннях проводиться:",
          p3: "Установки кондиціювання повітря можуть бути випробувані при ручному керуванні. Виявлені під час перевірки відступу від проекту, які не узгоджені з проектною організацією, а також дефекти виготовлення та монтажу елементів вентиляційних пристроїв повинні бути усунені до початку інструментальних вимірювань характеристик цих елементів.",
          p4: "Дію витяжних пристроїв природної вентиляції у житлових та громадських будівлях перевіряють за наявності тяги у ґратах вентиляційних пристроїв. Встановлюють також відповідність конструктивних рішень проектним, а якість виконання – вимогам ДБН.<br /> За результатами пускових випробувань на кожну установку складають акт та паспорт. Акти випробувань та паспорти вентиляційних пристроїв є додатками до актів здачі систем вентиляції в експлуатацію.",
          list: {
            l1: "Перевірка відповідності параметрів встановленого обладнання та елементів вентиляційних пристроїв, прийнятих у проекті, а також відповідності якості їх виготовлення та монтажу вимогам ТУ та ДБН;",
            l2: "Виявлення нещільностей у повітроводах та інших елементах систем;регулювання відповідності проектним даним об'ємних витрат повітря, що проходить через повітроприймальні та повітророзподільні пристрої загальнообмінних установок вентиляції та кондиціювання повітря;",
            l3: "Перевірка рівномірності прогрівання калориферів. (за наявності теплоносія). Вентиляційні установки, безпосередньо пов'язані з технологічним обладнанням (місцеві відсмоктувачі тощо), випробовують та регулюють після закінчення монтажу цього обладнання.",
          },
          process: {
            text: "Фахівці проводять пускові випробування, включаючи:",
            list: {
              l1: "Перевірку обладнання на відповідність.",
              l2: "Регулювання параметрів роботи системи.",
              l3: "Виявлення дефектів у монтажі.",
              l4: "Контроль прогрівання калориферів.",
              l5: "Складання актів і паспортів.",
            },
          },
        },
        7: {
          id: "7",
          hero: {
            title: "Паспортизація вентсистем",
            description:
              "Якщо у Вас з'явилися сумніви в роботі систем повітряного опалення опалення або вентиляції, наші фахівці визначать причини неполадок і знайдуть оптимальні рішення щодо усунення недоліків.",
            button: "безкоштовна консультація",
          },
          images: {
            1: {
              id: "182222",
              src: "/images/services/passporting-of-ventilation-systems.jpg",
              alt: "Сучасна вентиляційна система на зовнішній стіні будівлі.",
            },
            2: {
              id: "2077777",
              src: "/images/services/passporting-of-ventilation-systems.jpg",
              alt: "Сучасна вентиляційна система на зовнішній стіні будівлі.",
            },
            3: {
              id: "3887878",
              src: "/images/services/passporting-of-ventilation-systems.jpg",
              alt: "Сучасна вентиляційна система на зовнішній стіні будівлі.",
            },
          },
          imgCard: {
            1: {
              id: "1",
              src: "/images/services/passporting-of-ventilation-systems.jpg",
              alt: "Сучасна вентиляційна система на зовнішній стіні будівлі.",
            },
            2: {
              id: "2",
              src: "/images/services/passporting-of-ventilation-systems.jpg",
              alt: "Сучасна вентиляційна система на зовнішній стіні будівлі.",
            },
            3: {
              id: "3",
              src: "/images/services/passporting-of-ventilation-systems.jpg",
              alt: "Сучасна вентиляційна система на зовнішній стіні будівлі.",
            },
          },
          slug: "passporting-of-ventilation-systems",
          heroBG: "/images/services/passporting-of-ventilation-systems.jpg",
          secondBtn: "дізнатись більше",
          p1: "Відповідно до чинних норм, всі інженерні системи після завершення робіт повинні бути паспортизовані. Процедура паспортизації призначена для перевірки відповідності встановленого обладнання проектним даним.",
          p2: "Якщо встановлені у Вас системи вентиляції або повітряного опалення не паспортизовані, фахівці з паспортизації в найкоротші терміни оформлять необхідні документи з фактичними вимірами.",
          p3: "Додатково може проводитися вимірювання дійсної продуктивності вентиляційної системи, кратності повітрообміну в приміщеннях вентиляції та її окремих частин, визначення стану та ефективності повітряних фільтрів.",
          p4: "Фахівцями ТОВ «Енерговентиляція» проводяться роботи з використанням сучасної вимірювальної апаратури: мікроманометрів, анемометрів, шумомірів, тахометрів. Усі прилади мають державну перевірку.<br />Методика робіт, що проводяться, заснована на строгому дотриманні чинних в Україні нормативних документів.",
          process: {
            text: "Фахівці компанії проводять роботи з:",
            list: {
              l1: "Перевірки продуктивності вентиляційної системи.",
              l2: "Визначення кратності повітрообміну.",
              l3: "Вимірювання ефективності повітряних фільтрів.",
              l4: "Використання сучасної вимірювальної апаратури.",
              l5: "Оформлення необхідних документів систем.",
            },
          },
        },
        8: {
          id: "8",
          hero: {
            title: "Сервісне обслуговування",
            description:
              "Сервісна служба ТОВ «Енерговентиляція» здійснює комплексний підхід до технічного обслуговування: від планового профілактичного огляду до оперативного реагування в екстрених ситуаціях.",
            button: "безкоштовна консультація",
          },
          images: {
            1: {
              id: "170002",
              src: "/images/services/servis_foto1.jpg",
              alt: "Охолоджувальне обладнання Hitachi на даху будівлі",
            },
            2: {
              id: "2055553",
              src: "/images/services/servis_foto2.webp",
              alt: "Охолоджувальні системи LG та Multi V.5 на даху будівлі.",
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
              alt: "Зовнішні блоки охолоджувальної системи на даху промислової будівлі",
            },
            2: {
              id: "2",
              src: "/images/services/servis_foto3.jpg",
              alt: "Великий блок вентиляційного обладнання",
            },
            3: {
              id: "3",
              src: "/images/services/servis_foto5.jpg",
              alt: "Інженер обслуговує вентиляційну систему в стелі",
            },
          },
          slug: "service-maintenance",
          heroBG: "/images/services/servis_foto4.jpg",
          secondBtn: "дізнатись більше",
          p1: "Обслуговування та ремонт виконують кваліфіковані інженери, які мають у своєму розпорядженні всі необхідні інструменти та засоби.",
          p2: "Спеціалісти сервісної служби здійснюють:",
          p3: "Кліматичне обладнання працюватиме довго і безвідмовно, якщо періодично проводити регламентні роботи з технічного обслуговування, які підтримують обладнання в хорошому технічному стані. При виконанні цих умов усі потенційні несправності виявляються та усуваються на початковому етапі їх виникнення, що дозволяє запобігти виходу з ладу обладнання.",
          p4: "Для кожного Клієнта розробляється перелік виконуваних робіт, графік проведення сервісного обслуговування. Для кожного Клієнта окремо ведеться журнал проведення робіт з сервісного обслуговування, в якому відображається вся накопичена інформація щодо систем кондиціювання та вентиляції, також у цьому журналі відображаються всі аварійні випадки та виконані роботи. Завдяки журналу проведення робіт із сервісного обслуговування Клієнт завжди може проконтролювати виконання обговорених зобов'язань.<br/>Укладання договору технічне обслуговування устаткування, встановленого сторонньої організацією проводиться після проведення його діагностики.",
          list: {
            l1: "Комплексне технічне обслуговування систем вентиляції, кондиціювання, холодопостачання та теплопостачання;",
            l2: "Обслуговування окремих систем та обладнання (чилери, центральні кондиціонери, холодильні установки, VRV та VRF-системи, припливні установки, фанкойли, спліт-системи, осушувачі, зволожувачі повітря тощо);",
            l3: "Електронне тестування та контроль параметрів систем кондиціювання та вентиляції з використанням сучасних приладів;",
            l4: "Діагностика та повне комплексне тестування кліматичної техніки та інженерних систем;",
            l5: "Проведення пусконалагоджувальних робіт на новозмонтованому та/або тимчасово законсервованому обладнанні;",
            l6: "Гарантійний та поточний ремонт обладнання будь-якої складності;",
            l7: "Аварійні виїзди, пов'язані з ремонтом систем кондиціювання, вентиляції, холодопостачання та автоматики;",
            l8: "Безкоштовні консультації висококваліфікованих сервіс-інженерів.",
          },
          process: {
            text: "Сервісна служба ТОВ «Енерговентиляція» сьогодні - це:",
            list: {
              l1: "гарантована надійність роботи обладнання",
              l2: "гарантія на всі види робіт, що виконуються",
              l3: "виїзд за заявкою на несправність максимум протягом 24 годин з моменту надходження заявки (0,5-2 години при аварії)",
              l4: "навчання персоналу особливостям роботи з кліматичним обладнанням",
              l5: "оперативна допомога в режимі гарячої лінії за допомогою існуючих засобів зв'язку",
            },
          },
        },
      },
    },
    about: {
      title: "Про процесс",
      phone: "Залишити заявку",
      btnForm: "зробити розрахунок",
      btnBack: "повернутись назад",
      description: "Опис",
    },
  },
  ContactsPage: {
    hero: {
      title: "Наші контакти",
      description: "Ми завжди готові допомогти — звертайтесь.",
      button: "надіслати повідомлення",
    },
    locationBtn: {
      description: "Прокласти маршрут",
    },
  },
  Questions: {
    list: {
      1: {
        title: "Які послуги надає компанія?",
        description:
          "Компанія надає повний комплекс послуг з проектування, монтажу та обслуговування систем кондиціювання, вентиляції, опалення та теплопостачання.",
      },
      2: {
        title: "З якими брендами ви працюєте?",
        description:
          "Ми співпрацюємо з такими відомими виробниками, як CARRIER, LENNOX, DAIKIN, MITSUBISHI, LG та інші.",
      },
      3: {
        title: "Чи є у вас власне виробництво?",
        description:
          "Так, ми маємо власну виробничу базу та цех для виготовлення повітроводів, трубопроводів та інших елементів систем вентиляції.",
      },
      4: {
        title: "Чи має компанія ліцензії?",
        description:
          "Компанія має ліцензію на виконання повного комплексу робіт, а також дозвіл на виконання робіт підвищеної небезпеки.",
      },
      5: {
        title: "Чому варто обрати вашу компанію?",
        description:
          "Ми надаємо професійні послуги з використанням обладнання відомих брендів, маємо власне виробництво та висококласних фахівців.",
      },
    },
  },
  QuestionCard: {
    slogan: {
      title: "Давайте побудуємо щось разом",
      description:
        "Співпрацюйте з нами для отримання професійних рішень у сфері кондиціонування, вентиляції та опалення. Ми гарантуємо високу якість послуг з використанням відомих брендів та власного виробництва.",
      textBtn: "зв'яжіться з нами",
    },
    faq: {
      title: "Поширені питання",
      description:
        "Ми зібрали відповіді на найпоширеніші запитання, щоб допомогти вам краще зрозуміти наші послуги та процес роботи.",
      textBtn: "поставити питання",
    },
  },
};

export default uk;

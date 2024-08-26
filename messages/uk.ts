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
          alt: "БлокБастер",
          title: "BlockБастер",
          address: "...",
          link: "...",
        },
        3: {
          id: "3",
          src: "/images/projects/odeskiyBulvar.jpg",
          alt: "Одеський бульвар",
          title: "Одеський бульвар",
          address: "...",
          link: "...",
        },
        4: {
          id: "4",
          src: "/images/projects/epicentr.jpg",
          alt: "Епіцентр",
          title: "Епіцентр",
          address: "...",
          link: "...",
        },
        5: {
          id: "5",
          src: "/images/projects/karavan.jpg",
          alt: "Караван",
          title: "Караван",
          address: "...",
          link: "...",
        },
        6: {
          id: "6",
          src: "/images/projects/altaCentr.jpg",
          alt: "Альта центр",
          title: "Альта центр",
          address: "...",
          link: "...",
        },
      },
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
    partners: {
      title: "Наші партнери",
      link: "Посилання",
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
        p1: "ТОВ Енерговентиляція — це професійна, енергійна та динамічно розвиваюча компанія, яка працює на українському ринку з 1992 року. З перших днів свого існування наша компанія зайняла одне з провідних місць у сфері створення сучасних кліматичних технологій і надання повного спектру послуг і інженерних рішень для монтажу систем кондиціонування, вентиляції, опалення та теплопостачання внутрішніх інженерних мереж.",
        p2: "Компанія укомплектована висококласними фахівцями, що дозволяє виконувати всі комплексні роботи від проектування до обслуговування та здачі об'єктів замовникам під ключ, використовуючи обладнання всесвітньо відомих та визнаних виробників, таких як CARRIER, LENNOX, VTS Clima, DAIKIN, OSTBERG, FUJITSU, PANASONIC, MITSUBISHI, McQuay, LG та багато інших.",
        p3: "Маючи власну виробничу базу та майстерню, з імпортним технологічним обладнанням для виробництва повітроводів (близько 10 000 м2 на місяць), трубопроводів та інших елементів вентиляційних та кондиціонерних систем, а також власний вантажний транспорт, ТОВ «Енерговентиляція» має можливість швидко та якісно вирішувати виробничі питання на об'єктах будь-якої складності.",
        p4: "ТОВ Енерговентиляція має ліцензію Міністерства будівництва, архітектури та житлово-комунального господарства України серії АВ № 195346 на право виконання повного комплексу робіт від проектування до введення в експлуатацію внутрішніх інженерних мереж (вентиляція та кондиціонування, опалення), включаючи такі супутні роботи, як постачання тепла та холоду, електромонтажні роботи, КВП.",
        p5: "ТОВ Енерговентиляція має дозвіл Державного комітету України з нагляду за охороною праці № 853.05.32-45.34.9 на початок робіт, пов'язаних із підвищеною небезпекою, а також ліцензію Державного департаменту пожежної безпеки МВС України серії АВ № 399277 на проектування, монтаж, обслуговування обладнання протипожежного захисту.",
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
};

export default uk;

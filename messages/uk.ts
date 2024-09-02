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
    },
    projects: {},
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
      button: "get a free quote",
    },
    services: {
      service: {
        1: {
          id: "1",
          hero: {
            title: "Проектування",
            description:
              "Проектування - початкова стадія створення атмосфери комфорту. Саме від якості проекту залежить максимальне наближення до кінцевого результату - комфортної атмосфери приміщення із заданими або регульованими параметрами повітря.",
            button: "отримати ціну",
          },
          images: {
            1: {
              id: "b839d73e-1c0e",
              src: "/images/services/designing-1.webp",
              alt: "Працівники в офісі займаються проектуванням систем вентиляції.",
            },
            2: {
              id: "3e3e4b5b-991d",
              src: "/images/services/designing-3.jpg",
              alt: "Тривимірна модель будівлі з деталізацією системи вентиляції, що проходить через усі поверхи.",
            },
            3: {
              id: "79a9e1b6-0b8e",
              src: "/images/services/designing-2.jpg",
              alt: "Інженер перевіряє роздруковані плани систем вентиляції",
            },
          },
          slug: "designing",
          heroBG: "/images/services/designing-1.webp",
          secondBtn: "дізнатись більше",
          p1: "Саме правильні проектні рішення дають можливість уникнути «хвороби будівлі» у вигляді підвищеної вологості, грибкових утворень та нездорового мікроклімату в приміщеннях, що є витратами застосування нових будівельних технологій, теплоізоляційних матеріалів та герметичних склопакетів.",
          p2: "Висококваліфіковані фахівці проектного відділу компанії ТОВ «Енерговентиляція» оснащені сучасною комп'ютерною технікою з необхідним програмним забезпеченням, що дозволяє виконувати проектування систем опалення, вентиляції, кондиціювання повітря, в тому числі «чистих приміщень».",
          p3: "Вся проектна документація виконується суворо з дотриманням нормативних документів, що діють в Україні.Наші проектувальники завжди пропонують кілька варіантів технічних рішень з урахуванням особливостей об'єкта, опрацьовують шляхи зниження загальної вартості проекту без втрат функціональних можливостей системи.",
          p4: "Основна перевага нашої компанії в галузі проектування - це не тільки володіння теорією, але і велика практика, тісна взаємодія всіх відділів компанії, завдяки чому ми запропонуємо вам найбільш вдале проектне рішення з точки зору економії ваших засобів та зручності обслуговування.За бажанням замовника наші фахівці можуть провести експертизу готових проектів, технічне обстеження та паспортизацію встановлених кліматичних систем.",
          process:{
            text:"Проектування є ключовим етапом, який забезпечує комфортну атмосферу в приміщенні завдяки правильному підходу до вибору параметрів повітря, уникненню «хвороби будівлі», та роботі кваліфікованих фахівців.",
            list:{
              l1:"Проектування - ключовий етап.",
              l2:"Забезпечує комфортну атмосферу.",
              l3:"Враховує параметри повітря.",
              l4:"Уникає «хвороби будівлі».",
              l5:"Виконується кваліфікованими фахівцями.",
            }
          },
        },
        2: {
          id: "2",
          hero: {
            title: "Виробництво та реалізація готової продукції",
            description:
              "Компанія ТОВ «Енерговентиляція» має власну виробничу базу з цехами для виготовлення повітроводів, з теплими складами готової продукції, сировини та матеріалів, інструменту та комплектуючих.",
            button: "отримати ціну",
          },
          images: {
            1: {
              id: "4b16-a59f",
              src: "/images/services/prgp3.jpg",
              alt: "Робітники у виробничому цеху працюють з металевими листами на станку",
            },
            2: {
              id: "4f90-b6c7",
              src: "/images/services/prgp5.jpg",
              alt: "Металеві листи, що проходять через верстат у виробничому цеху",
            },
            3: {
              id: "4cb1-91b4",
              src: "/images/services/prgp12.jpg",
              alt: "Станок для обробки металевих труб у виробничому цеху",
            },
            4: {
              id: "4",
              src: "/images/services/3baza_n.jpg",
              alt: "Виробничий цех з металевими листами на станку для різання",
            },
            5: {
              id: "5",
              src: "/images/services/4baza_n.jpg",
              alt: "Складська зона з великими рулонами металу, підвішеними на кран",
            },
            6: {
              id: "6",
              src: "/images/services/5baza_n.jpg",
              alt: "Робітники на виробничій лінії, що працюють з металевими деталями в цеху",
            },
          },
          slug: "production-and-sale-of-finished-products",
          heroBG: "/images/services/production-and-sale-of-finished-products.webp",
          secondBtn: "дізнатись більше",
          p1: "Повітроводи  є одним з найважливіших елементів систем вентиляції і кондиціювання. Спільно з іншими пристроями вони забезпечують транспортування повітря у системі вентиляції.",
          p2: "Класифікація повітроводів.<br />За конфігурацією існують повітроводи прямокутного, квадратного і круглого перерізів. Їх виготовляють з прямих і фасонних складових частин. Розміри та види повітроводів встановлені у ВСН 353-86 «Проектування та застосування повітроводів з уніфікованих деталей», ТУ 36-736-93 «Повітроводи вентиляційні металеві», СНиП 2.04.05-91 «Опалення, системи вентиляції, кондиціювання».",
          p3: "Металеві повітроводи.<br />Звичайні повітроводи круглого і прямокутного перерізу виготовляються з листової оцинкованої або нержавіючої сталі. Повітропроводи круглого перерізу можуть бути виконані зі стрічки шириною від 125 до 135 мм (спірально-навивні) або, так само, як і прямокутні, - з листа (прямошовні).",
          p4: "Виготовлення повітроводів.<br /> Виробництво повітроводів істотно автоматизоване. Верстати для виготовлення відводів, лінія для виготовлення прямокутних повітроводів, верстат для виготовлення спірально-навивних повітроводів, система плазмового розкрою металу, пуклювальний верстат, профілюючий верстат та багато іншого – забезпечує високу продуктивність праці та високу якість повітроводів та інших вентиляційних виробів.",
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
            button: "отримати ціну",
          },
          images: {
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
            4: {
              id: "4",
              src: "/images/services/montazh_foto4.webp",
              alt: "Офісний простір з встановленою системою вентиляції",
            },
            5: {
              id: "5",
              src: "/images/services/montazh_foto5.jpg",
              alt: "A warehouse area with large rolls of metal suspended from a crane",
            },
            6: {
              id: "6",
              src: "/images/services/5baza_n.jpg",
              alt: "Workers on a production line working with metal parts in a workshop",
            },
          },
          slug: "installation-of-ventilation-and-air-conditioning-systems",
          heroBG: "/images/services/montazh_foto2.jpg",
          secondBtn: "дізнатись більше",
          p1: "Одним із пріоритетних напрямків діяльності компанії ТОВ «Енерговентиляція» є монтаж систем вентиляції та кондиціонування повітря, що є одним із найвідповідальніших етапів робіт із створення штучного клімату. Результати роботи з монтажу систем вентиляції практично не піддаються маловитратному коригуванню.",
          p2: "...",
          p3: "...",
          p4: "...",
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
            button: "отримати ціну",
          },
          images: {
            1: {
              id: "1",
              src: "/images/services/f1_s.jpg",
              alt: "BlockBaster",
            },
            2: {
              id: "2",
              src: "/images/services/f5_2.jpg",
              alt: "BlockBaster",
            },
            3: {
              id: "3",
              src: "/images/services/f6_3.jpg",
              alt: "BlockBaster",
            },
            4: {
              id: "4",
              src: "/images/services/f6_3.jpg",
              alt: "BlockBaster",
            },
            5: {
              id: "5",
              src: "/images/services/f6_3.jpg",
              alt: "BlockBaster",
            },
            6: {
              id: "6",
              src: "/images/services/f6_3.jpg",
              alt: "BlockBaster",
            },
          },
          slug: "control-and-measuring-devices-and-automation",
          heroBG: "/images/services/f1_s.jpg",
          secondBtn: "дізнатись більше",
          p1: "...",
          p2: "...",
          p3: "...",
          p4: "...",
          process: {
            text: "",
            list: {
              l1: "",
              l2: "",
              l3: "",
              l4: "",
              l5: "",
            },
          },
        },
        5: {
          id: "5",
          hero: {
            title: "Поставка обладнання",
            description:
              "Фірма ТОВ «Енерговентиляція» тісно співпрацює з всесвітньо відомими та визнаними в галузі вентиляції та кондиціювання компаніями",
            button: "отримати ціну",
          },
          images: {
            1: {
              id: "1",
              src: "/images/services/postavka1.jpg",
              alt: "BlockBaster",
            },
            2: {
              id: "2",
              src: "/images/services/postavka2.jpg",
              alt: "BlockBaster",
            },
            3: {
              id: "3",
              src: "/images/services/postavka3.jpg",
              alt: "BlockBaster",
            },
            4: {
              id: "4",
              src: "/images/services/f6_3.jpg",
              alt: "BlockBaster",
            },
            5: {
              id: "5",
              src: "/images/services/f6_3.jpg",
              alt: "BlockBaster",
            },
            6: {
              id: "6",
              src: "/images/services/f6_3.jpg",
              alt: "BlockBaster",
            },
          },
          slug: "supply-of-equipment",
          heroBG: "/images/services/postavka3.jpg",
          secondBtn: "дізнатись більше",
          p1: "...",
          p2: "...",
          p3: "...",
          p4: "...",
          process: {
            text: "",
            list: {
              l1: "",
              l2: "",
              l3: "",
              l4: "",
              l5: "",
            },
          },
        },
        6: {
          id: "6",
          hero: {
            title: "Пуско-налагоджувальні работи",
            description:
              "Фахівцями ТОВ «Енерговентиляція» проводяться пускові випробування та регулювання систем вентиляції та кондиціювання.Пускові випробування змонтованих систем вентиляції та кондиціювання проводяться відповідно до вимог ДБН «Правила виробництва та приймання робіт» після механічного випробування вентиляційного та пов'язаного з ним енергетичного обладнання..",
            button: "отримати ціну",
          },
          images: {
            1: {
              id: "1",
              src: "/images/services/debugging-works1.jpg",
              alt: "BlockBaster",
            },
            2: {
              id: "2",
              src: "/images/services/debugging-works1.jpg",
              alt: "BlockBaster",
            },
            3: {
              id: "3",
              src: "/images/services/debugging-works1.jpg",
              alt: "BlockBaster",
            },
            4: {
              id: "4",
              src: "/images/services/f6_3.jpg",
              alt: "BlockBaster",
            },
            5: {
              id: "5",
              src: "/images/services/f6_3.jpg",
              alt: "BlockBaster",
            },
            6: {
              id: "6",
              src: "/images/services/f6_3.jpg",
              alt: "BlockBaster",
            },
          },

          slug: "start-up-and-debugging-works",
          heroBG: "/images/services/debugging-works1.jpg",
          secondBtn: "дізнатись більше",
          p1: "...",
          p2: "...",
          p3: "...",
          p4: "...",
          process: {
            text: "",
            list: {
              l1: "",
              l2: "",
              l3: "",
              l4: "",
              l5: "",
            },
          },
        },
        7: {
          id: "7",
          hero: {
            title: "Паспортизація вентсистем",
            description:
              "Якщо у Вас з'явилися сумніви в роботі систем повітряного опалення опалення або вентиляції, наші фахівці визначать причини неполадок і знайдуть оптимальні рішення щодо усунення недоліків.Якщо встановлені у Вас системи вентиляції або повітряного опалення не паспортизовані, фахівці з паспортизації в найкоротші терміни оформлять необхідні документи з фактичними вимірами.",
            button: "отримати ціну",
          },
          images: {
            1: {
              id: "1",
              src: "/images/services/passporting-of-ventilation-systems.jpg",
              alt: "BlockBaster",
            },
            2: {
              id: "2",
              src: "/images/services/passporting-of-ventilation-systems.jpg",
              alt: "BlockBaster",
            },
            3: {
              id: "3",
              src: "/images/services/passporting-of-ventilation-systems.jpg",
              alt: "BlockBaster",
            },
            4: {
              id: "4",
              src: "/images/services/f6_3.jpg",
              alt: "BlockBaster",
            },
            5: {
              id: "5",
              src: "/images/services/f6_3.jpg",
              alt: "BlockBaster",
            },
            6: {
              id: "6",
              src: "/images/services/f6_3.jpg",
              alt: "BlockBaster",
            },
          },
          slug: "passporting-of-ventilation-systems",
          heroBG: "/images/services/passporting-of-ventilation-systems.jpg",
          secondBtn: "дізнатись більше",
          p1: "...",
          p2: "...",
          p3: "...",
          p4: "...",
          process: {
            text: "",
            list: {
              l1: "",
              l2: "",
              l3: "",
              l4: "",
              l5: "",
            },
          },
        },
        8: {
          id: "8",
          hero: {
            title: "Сервісне обслуговування",
            description:
              "Сервісна служба ТОВ «Енерговентиляція» здійснює комплексний підхід до технічного обслуговування: від планового профілактичного огляду до оперативного реагування в екстрених ситуаціях.",
            button: "отримати ціну",
          },
          images: {
            1: {
              id: "1",
              src: "/images/services/servis_foto4.jpg",
              alt: "",
            },
            2: {
              id: "2",
              src: "/images/services/servis_foto3.jpg",
              alt: "",
            },
            3: {
              id: "3",
              src: "/images/services/servis_foto5.jpg",
              alt: "",
            },
            4: {
              id: "4",
              src: "/images/services/f6_3.jpg",
              alt: "BlockBaster",
            },
            5: {
              id: "5",
              src: "/images/services/f6_3.jpg",
              alt: "BlockBaster",
            },
            6: {
              id: "6",
              src: "/images/services/f6_3.jpg",
              alt: "BlockBaster",
            },
          },
          slug: "service-maintenance",
          heroBG: "/images/services/servis_foto4.jpg",
          secondBtn: "дізнатись більше",
          p1: "...",
          p2: "...",
          p3: "...",
          p4: "...",
          process: {
            text: "",
            list: {
              l1: "",
              l2: "",
              l3: "",
              l4: "",
              l5: "",
            },
          },
        },
      },
    },
    about: {
      title: "Про процесс",
      phone: "Залишити заявку",
      btnForm: "зробити розрахунок",
    },
  },
  ContactsPage: {
    hero: {
      title: "Наші контакти",
      description: "Ми завжди готові допомогти — звертайтесь.",
      button: "надіслати повідомлення",
    },
    questions: {
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
    locationBtn: {
      description: "Прокласти маршрут",
    },
  },
};

export default uk;

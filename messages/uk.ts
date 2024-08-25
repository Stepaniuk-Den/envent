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
  ServicesPage:{
    hero: {
    },
    services:{
      service:{
        1:{
          id:'b7491d7e-8c6d-453e-a7e5-82e83abf77f1',
          title:"Проектування",
          description:"Проектування - початкова стадія створення атмосфери комфорту.Саме від якості проекту залежить максимальне наближення до кінцевого результату - комфортної атмосфери приміщення із заданими або регульованими параметрами повітря.",
          firstImg:"/images/services/prgp3.jpg",
          secondImg:"/images/services/prgp5.jpg",
          thirdImg:"/images/services/prgp12.jpg",
          alt: "",
          firstBtn:"отримати ціну",
          secondBtn:"дізнатись більше",
          address: "...",
          link: "...",
        },
        2:{
          id:'3a8f26c4-d9f4-4e9b-8b21-f4c9dcef9ba6',
          title:"Виробництво та реалізація готової продукції",
          description:"Компанія ТОВ «Енерговентиляція» має власну виробничу базу з цехами для виготовлення повітроводів, з теплими складами готової продукції, сировини та матеріалів, інструменту та комплектуючих.",
          firstImg:"/images/services/prgp3.jpg",
          secondImg:"/images/services/prgp5.jpg",
          thirdImg:"/images/services/prgp12.jpg",
          alt: "",
          firstBtn:"отримати ціну",
          secondBtn:"дізнатись більше",
          address: "...",
          link: "...",
        },
        3:{
          id:'a2d3b4c5-7f1e-4703-9bd7-1e76f5e4c82a',
          title:"Монтаж систем вентиляції та кондиціювання повітря",
          description:"Одним із пріоритетних напрямків діяльності компанії ТОВ «Енерговентиляція» є монтаж систем вентиляції та кондиціонування повітря, що є одним із найвідповідальніших етапів робіт із створення штучного клімату. Результати роботи з монтажу систем вентиляції практично не піддаються маловитратному коригуванню.",
          firstImg:"/images/services/montazh_foto1.jpg",
          secondImg:"/images/services/montazh_foto2.jpg",
          thirdImg:"/images/services/montazh_foto3.jpg",
          alt: "",
          firstBtn:"отримати ціну",
          secondBtn:"дізнатись більше",
          address: "...",
          link: "...",
        },
        4:{
          id:'f6f56e8d-34e4-4c3d-b6a4-08d2d72cdb62',
          title:"КВПіА",
          description:"Основний напрямок діяльності ділянки - це не тільки виготовлення щитів і пультів управління, але і виконання всього комплексу робіт, пов'язаного з розробкою та впровадженням систем автоматизації, починаючи з обстеження об'єктів і закінчуючи пуско- налагодження систем.",
          firstImg:"/images/services/f1_s.jpg",
          secondImg:"/images/services/f5_2.jpg",
          thirdImg:"/images/services/f6_3.jpg",
          alt: "",
          firstBtn:"отримати ціну",
          secondBtn:"дізнатись більше",
          address: "...",
          link: "...",
        },
        5:{
          id:'c4b3e1f6-9a4d-4f8e-8976-9d7c7a2e8b1c',
          title:"Поставка обладнання",
          description:"Фірма ТОВ «Енерговентиляція» тісно співпрацює з всесвітньо відомими та визнаними в галузі вентиляції та кондиціювання компаніями",
          firstImg:"/images/services/postavka1.jpg",
          secondImg:"/images/services/postavka2.jpg",
          thirdImg:"/images/services/postavka3.jpg",
          alt: "",
          firstBtn:"отримати ціну",
          secondBtn:"дізнатись більше",
          address: "...",
          link: "...",
        },
        6:{
          id:'d1b3f4a6-5e7d-4e98-9f3c-27c3f9e4a2b7',
          title:"Пуско-налагоджувальні работи",
          description:"Фахівцями ТОВ «Енерговентиляція» проводяться пускові випробування та регулювання систем вентиляції та кондиціювання.Пускові випробування змонтованих систем вентиляції та кондиціювання проводяться відповідно до вимог ДБН «Правила виробництва та приймання робіт» після механічного випробування вентиляційного та пов'язаного з ним енергетичного обладнання..",
          firstImg:"",
          secondImg:"",
          thirdImg:"",
          alt: "",
          firstBtn:"отримати ціну",
          secondBtn:"дізнатись більше",
          address: "...",
          link: "...",
        },
        7:{
          id:'8c5f1a4d-b9e2-43f1-8a5f-46e8c7a2d3f9',
          title:"Паспортизація вентсистем",
          description:"Якщо у Вас з'явилися сумніви в роботі систем повітряного опалення опалення або вентиляції, наші фахівці визначать причини неполадок і знайдуть оптимальні рішення щодо усунення недоліків.Якщо встановлені у Вас системи вентиляції або повітряного опалення не паспортизовані, фахівці з паспортизації в найкоротші терміни оформлять необхідні документи з фактичними вимірами.",
          firstImg:"",
          secondImg:"",
          thirdImg:"",
          alt: "",
          firstBtn:"отримати ціну",
          secondBtn:"дізнатись більше",
          address: "...",
          link: "...",
        },
        8:{
          id:'4f6b1d2c-3a7e-45b1-8c7d-9e3f5c4a6b2d',
          title:"Сервісне обслуговування",
          description:"Сервісна служба ТОВ «Енерговентиляція» здійснює комплексний підхід до технічного обслуговування: від планового профілактичного огляду до оперативного реагування в екстрених ситуаціях. Обслуговування та ремонт виконують кваліфіковані інженери, які мають у своєму розпорядженні всі необхідні інструменти та засоби.",
          firstImg:"/images/services/servis_foto4.jpg",
          secondImg:"/images/services/servis_foto3.jpg",
          thirdImg:"/images/services/servis_foto5.jpg",
          alt: "",
          firstBtn:"отримати ціну",
          secondBtn:"дізнатись більше",
          address: "...",
          link: "...",
        },
      }
    },
  }
};

export default uk;

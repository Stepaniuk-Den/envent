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
          descriptions: "Darnytskyi Boulevard, 12, <br/>Kyiv, 02000",
        },
        hours: {
          title: "Office Hours",
          descriptions: "Mon-Fri: 9:00 AM – 6:00 PM <br/>Sat-Sun: Closed",
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
              id: "1",
              src: "/images/services/3baza_n.jpg",
              alt: "A production shop with metal sheets on a cutting machine.",
            },
            2: {
              id: "2",
              src: "/images/services/4baza_n.jpg",
              alt: "A warehouse area with large rolls of metal suspended from a crane",
            },
            3: {
              id: "3",
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
          p2: "Classification of air ducts.<br /> According to the configuration, there are air ducts of rectangular, square and round sections. They are made of straight and shaped component parts. The dimensions and types of air ducts are established in BSN 353-86 'Design and application of air ducts from unified parts', TU 36-736-93 'Metal ventilation ducts', SNiP 2.04.05-91 'Heating, ventilation, air conditioning systems'. without flange and welded.",
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
              id: "1",
              src: "/images/services/montazh_foto4.webp",
              alt: "Office space with installed ventilation system",
            },
            2: {
              id: "2",
              src: "/images/services/montazh_foto5.jpg",
              alt: "A warehouse area with large rolls of metal suspended from a crane",
            },
            3: {
              id: "3",
              src: "/images/services/5baza_n.jpg",
              alt: "Workers on a production line working with metal parts in a workshop",
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
              id: "1",
              src: "/images/services/kvpia.jpg",
              alt: "The open control panel is ready for use",
            },
            2: {
              id: "2",
              src: "/images/services/kvpia1.webp",
              alt: "Wall installation of six electrical control panels",
            },
            3: {
              id: "3",
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
              id: "1",
              src: "/images/services/postavka4.jpg",
              alt: "Technical room with VTS ventilation equipment,",
            },
            2: {
              id: "2",
              src: "/images/services/postavka5.jpg",
              alt: "Lenox cooling unit located on the roof of the building",
            },
            3: {
              id: "3",
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
            l1: "REMAK <br /> SYSTEMAIR <br /> OSTBERG <br /> SALDA<br /> DAIKIN <br /> MITSUBISHI",
            l2: "MITSUSHITO <br /> LENNOX <br /> FUJITSU <br />ROSENBERG <br /> BAHCIVAN <br /> FRICO",
            l3: "VENTS <br /> VTS <br /> ACM <br /> ІНТЕРКОНДИЦІОНЕР <br /> ПРОМВЕНТИЛЯТОР <br /> MAIKO",
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
              id: "1",
              src: "/images/services/debugging-works1.jpg",
              alt: "The air duct is suspended under the ceiling of the industrial premises.",
            },
            2: {
              id: "2",
              src: "/images/services/debugging-works1.jpg",
              alt: "The air duct is suspended under the ceiling of the industrial premises.",
            },
            3: {
              id: "3",
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
              id: "1",
              src: "/images/services/passporting-of-ventilation-systems.jpg",
              alt: "Modern ventilation system on the outer wall of the building.",
            },
            2: {
              id: "2",
              src: "/images/services/passporting-of-ventilation-systems.jpg",
              alt: "Modern ventilation system on the outer wall of the building.",
            },
            3: {
              id: "3",
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
            id: "1",
            src: "/images/services/servis_foto1.jpg",
            alt: "Hitachi cooling equipment on the roof of a building",
            },
            2: {
            id: "2",
            src: "/images/services/servis_foto2.webp",
            alt: "LG and Multi V.5 cooling systems on the roof of the building.",
            },
            3: {
              id: "3",
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

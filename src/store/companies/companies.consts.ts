import { Company } from "types";

export const companies: Company.Instance[] = [
  {
    id: 1,
    isActive: false,
    title: "Т-ЛОГИКА",
    type: "ООО",
    description: "Нет информации",
    site: "https://t-logika.ru",
    scope: "Junior Java/Python Developer",
    stack: ["flask", "spring", "jinja2"],
    address: "г. Москва, ул. 2-Я Рощинская, д4",
    projects: [],
    feature: {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [37.616926, 55.709632],
      },
    },
  },
  {
    id: 2,
    isActive: false,
    title: "Видеосаппорт",
    type: "ООО",
    icon: "/img/perfema.svg",
    description:
      "Амбициозная команда специалистов с большим опытом реализации нестандартных проектов, сложных высоконагруженных систем и инновационных аппаратно-программных комплексов.",
    scope: "Junior Frontend Developer",
    stack: ["vue.js", "vueX", "react.js", "redux"],
    images: ["/img/eaist2.webp", "/img/eaist3.webp", "/img/eaist4.webp", "/img/eaist1.webp"],
    address: "г. Москва, ул. нагорная, д20",
    site: "https://perfema.com/",
    projects: [
      {
        id: "eaist",
        title: "Платформа интерактивного обучения",
        fullTitle:
          "Наша команда разработала специализированное программное обеспечение «Платформа интерактивного обучения», позволяющее вести процесс тренинга пользователей Единой автоматизированной информационной системы торгов города Москвы (ЕАИСТ), для ГБУ «Сервисный центр 44».",
        site: "https://perfema.com/projects/interactive_learning/",
      },
    ],
    feature: {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [37.603424, 55.67896],
      },
    },
  },
  {
    id: 3,
    isActive: false,
    title: "Техновик",
    type: "ООО",
    // icon: "/img/technovik.png",
    description:
      "Полный спектр услуг для организаций, эксплуатирующих складское оборудование либо планирующих его приобретение.",
    scope: "FullStack Developer(.Net/.Net Core, React/VueJS/React Native)",
    stack: [""],
    images: [
      "/img/a100_4.jpeg",
      "/img/a100_1.jpeg",
      "/img/a100_2.jpeg",
      "/img/a100_3.jpeg",
      "/img/a100_6.jpeg",
      "/img/a100_7.jpeg",
    ],
    site: "https://www.technovik.ru/",
    address: "г. Москва, ул. 2-Я Рощинская, д. 4",
    projects: [
      {
        id: "a100",
        title: "a100",
        fullTitle: "Автоматизированная система управления эксплуатацией стеллажного оборудования",
        site: "https://a-100.pro",
      },
    ],
    feature: {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [37.696822, 55.776568],
      },
    },
  },
  {
    id: 4,
    isActive: true,
    title: "Мегаполис ИТ",
    type: "ООО",
    icon: "/img/megapolis.svg",
    site: "https://www.megapolis-it.ru/",
    description:
      "Мониторинг событий. Координация транспорта. Управление дорожным движением и информирование его участников.",
    scope: "Senior Frontend Developer",
    images: [
      "/img/dtm1.jpeg",
      "/img/dtm2.jpeg",
      "/img/dtm3.png",
      "/img/aisms.jpeg",
      "/img/warehouse1.jpeg",
      "/img/asuns.jpeg",
    ],
    projects: [
      {
        id: "dtm",
        title: "ДТМ",
        fullTitle: "Система анализа транспортных потоков",
        site: "https://www.megapolis-it.ru/project/dtm",
      },
      {
        id: "warehouse",
        title: "Список оборудования",
        fullTitle: "Учет объектов дорожно-транспортной инфраструктуры",
        site: "https://www.megapolis-it.ru/project/equipment-list",
      },
      {
        id: "asuns",
        title: "АСУНС",
        fullTitle: "Система управления нештатными ситуациями",
        site: "https://www.megapolis-it.ru/project/asuns",
      },
      {
        id: "aisms",
        title: "АИСМС",
        fullTitle: "Автоматизированная информационная система «Маршрутная сеть»",
        site: "https://www.megapolis-it.ru/project/aisms",
      },
    ],
    stack: [""],
    address: "г. Москва, 1-й Волоколамский проезд, д. 10",
    feature: {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [37.49037, 55.804435],
      },
    },
  },
];

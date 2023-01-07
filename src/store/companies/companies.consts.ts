import { Company } from "types";

export const companies: Company.Instance[] = [
  {
    id: 1,
    isActive: false,
    title: "Т-ЛОГИКА",
    type: "ООО",
    description: "",
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
    address: "г. Москва, ул. нагорная, д20",
    site: "https://perfema.com/",
    projects: [
      {
        id: "eaist",
        title: "Платформа интерактивного обучения",
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
    site: "https://www.technovik.ru/",
    address: "г. Москва, ул. 2-Я Рощинская, д. 4",
    projects: [],
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
    projects: [
      {
        id: "dtm",
        title: "Система анализа транспортных потоков (ДТМ)",
        site: "https://www.megapolis-it.ru/project/dtm",
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

import { Company } from "types";

export const companies: Company.Instance[] = [
  {
    id: 1,
    isActive: false,
    title: "ООО Т-ЛОГИКА",
    description: "",
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
    title: "ООО ВИДЕОСАППОРТ",
    description: "",
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
    title: "ООО Техновик",
    description: "",
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
    title: "ООО Мегаполис",
    site: "https://www.megapolis-it.ru/",
    description: "",
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

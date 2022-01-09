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
    scope: "Junior Java/Python Developer",
    stack: [""],
    address: "г. Москва, ул. 2-Я Рощинская, д. 4",
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
    description: "",
    scope: "Junior Java/Python Developer",
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

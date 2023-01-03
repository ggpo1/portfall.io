import { Home, Demos, Companies, Contacts } from "features";
import { Icons } from "assets";

export const tabs = [
  {
    id: "/",
    icon: <Icons.HomeIcon />,
    title: "Главная"
  },
  {
    id: "/demos",
    icon: <Icons.ProjectorIcon />,
    title: "Проекты"
  },
  {
    id: "/skills",
    icon: <Icons.SkillsIcon />,
    title: "Навыки"
  },
  {
    id: "/companies",
    icon: <Icons.CompaniesIcon />,
    title: "Компании"
  },
  {
    id: "/contacts",
    icon: <Icons.ContactsIcon />,
    title: "Контакты"
  }
]


export const contents = [
  <Home />,
  <Demos />,
  <div>Навыки</div>,
  <Companies />,
  <Contacts />,
];
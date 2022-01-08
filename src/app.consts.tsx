import { Home, Companies } from "features";
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
    title: "Демки"
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
  <div>Демки</div>,
  <div>Навыки</div>,
  <Companies />,
  <div>Контакты</div>
];
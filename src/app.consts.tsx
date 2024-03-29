import * as Features from "features";
import { Icons } from "assets";

export const tabs = [
  {
    id: "/",
    icon: <Icons.PersonIcon style={{ fill: "none" }} />,
    title: "Главная"
  },
  {
    id: "/demos",
    icon: <Icons.ProjectsIcon />,
    title: "Проекты"
  },
  {
    id: "/skills",
    icon: <Icons.ToolsIcon />,
    title: "Инструментарий"
  },
  {
    id: "/companies",
    icon: <Icons.ListIcon />,
    title: "Компании"
  },
  {
    id: "/contacts",
    icon: <Icons.ContactsIcon />,
    title: "Контакты"
  }
]

export const contents = [
  <Features.Home />,
  <Features.Demos />,
  <Features.Tools />,
  <Features.Companies />,
  <Features.Contacts />,
];
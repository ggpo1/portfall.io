import { memo } from "react";
import { Menu } from "components";
import { Main, Companies } from "features";
import { Icons } from "assets";
import * as Markdown from "./app.styles";



const tabs = [
  {
    id: "/",
    icon: <Icons.HomeIcon />,
    title: "Главная"
  },
  {
    id: "/demo",
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


const contents = [
  <Main />,
  <div>Демки</div>,
  <div>Навыки</div>,
  <Companies />,
  <div>Контакты</div>
];

export const App = memo(() => {
  return (
    <Markdown.Wrapper>
      <Menu
        tabs={tabs}
        contents={contents}
        direction="column"
      />
    </Markdown.Wrapper>
  );
});

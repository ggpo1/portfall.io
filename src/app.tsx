import { memo } from "react";
import { Menu } from "components";
import { Main, Companies } from "features";
import { tabs } from "./assets";
import * as Markdown from "./app.styles";

const contents = [
  <Main />,
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
      />
    </Markdown.Wrapper>
  );
});

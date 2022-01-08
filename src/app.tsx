import { memo } from "react";
import { Menu } from "components";
import { tabs, contents } from "./app.consts";
import * as Markdown from "./app.styles";

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

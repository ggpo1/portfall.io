import { memo, useState } from "react";
import { Menu } from "menu";
import * as Markdown from "./app.styles";

const tabs = [{ title: "1" }, { title: "1" }];
const contents = [
  <div>123</div>
];

export const App = memo(() => {
  const [active, setActive] = useState(0);

  return (
    <Markdown.Wrapper>
      <Menu active={active} tabs={tabs} contents={contents} onChange={setActive} />
    </Markdown.Wrapper>
  );
});

import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Menu } from "components";
import { Main, Companies } from "features";
import { Store, MenuStore } from "store";
import { tabs } from "./assets";
import * as Markdown from "./app.styles";

const contents = [
  <Main />,
  <div>Навыки</div>,
  <Companies />
];

export const App = memo(() => {
  const dispatch = useDispatch();
  const active = useSelector((store: Store.GState) => store.menu.active);

  const handleChange = (active: number) => {
    dispatch(MenuStore.menuSlice.actions.setActive(active));
  }

  return (
    <Markdown.Wrapper>
      <Menu
        active={active}
        tabs={tabs}
        contents={contents}
        onChange={handleChange}
      />
    </Markdown.Wrapper>
  );
});

import { memo } from "react";
import styled, { keyframes } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { fadeInLeft, fadeInRight } from "react-animations";
import { Menu } from "components";
import { Main } from "features";
import { Store, MenuStore } from "store";
import { tabs } from "./assets";
import * as Markdown from "./app.styles";

const LeftBounce = styled.div`
    animation: 1s ${keyframes`${fadeInLeft}`};
`;

const RightBounce = styled.div`
    animation: 1s ${keyframes`${fadeInRight}`};
`;

const contents = [
  <LeftBounce>
    <Main />
  </LeftBounce>
];

export const App = memo(() => {
  const dispatch = useDispatch();
  const active = useSelector((store: Store.GState) => store.menu.active);

  const handleChange = (active: number) => {
    dispatch(MenuStore.menuSlice.actions.setActive(active));
  }

  return (
    <Markdown.Wrapper>
      <Menu active={active} tabs={tabs} contents={contents} onChange={handleChange} />
    </Markdown.Wrapper>
  );
});

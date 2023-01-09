import React from "react";
import { World } from "modules";
import { Menu } from "components";
import { shared } from "shared";
import { tabs, contents } from "./app.consts";
import * as Markdown from "./app.styles";

export const App = React.memo(() => {
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);
  const controller = React.useRef<World | null>(null);
  const popupNodeRef = React.useRef<HTMLDivElement | null>(null);

  React.useLayoutEffect(() => {
    if (!canvasRef.current || controller.current) return;

    controller.current = new World(canvasRef.current);
  }, []);

  React.useEffect(() => {
    if (!popupNodeRef.current) return;

    shared.consts.popupNode.current = popupNodeRef.current;
  }, []);

  return (
    <Markdown.Wrapper>
      <Menu
        tabs={tabs}
        contents={contents}
        direction="row"
      />
      <Markdown.PopupNode ref={popupNodeRef} id="popup-node" />
      {/* <Markdown.Canvas ref={canvasRef} /> */}
      {/* <Markdown.DebugContainer /> */}
    </Markdown.Wrapper>
  );
});

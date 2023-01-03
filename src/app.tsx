import React from "react";
import { World } from "modules";
import { Menu } from "components";
import { tabs, contents } from "./app.consts";
import * as Markdown from "./app.styles";

export const App = React.memo(() => {
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);
  const controller = React.useRef<World | null>(null);

  React.useLayoutEffect(() => {
    if (!canvasRef.current || controller.current) return;

    controller.current = new World(canvasRef.current);
  }, [])

  return (
    <Markdown.Wrapper>
      <Menu
        tabs={tabs}
        contents={contents}
        direction="row"
      />
      {/* <Markdown.Canvas ref={canvasRef} /> */}
      {/* <Markdown.DebugContainer /> */}
    </Markdown.Wrapper>
  );
});

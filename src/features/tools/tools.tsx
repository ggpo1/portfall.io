import React from "react";
import * as Markdown from "./tools.styles";

const tools = [
  "React",
  "SCSS/SASS",
  "БЭМ",
  "mapbox-gl",
  "canvas-api",
  "redux-toolkit",
  "effector",
  "three.js",
  "styled-components",
  "ООП",
  "Cypress",
  "Jest",
  "storybook",
  "PWA",
  "ESbuild",
  "html/css",
  "Typescript",
  "JavaScript",
  "npm/yarn",
  "docker",
  "Nginx",
  "SOLID",
  "DRY",
  "KISS",
  "Design Patterns",
]

export const Tools = React.memo(() => {
  return (
    <Markdown.Wrapper>
      {tools.map((tool) => <Markdown.Tool>{tool}</Markdown.Tool>)}
    </Markdown.Wrapper>
  );
});

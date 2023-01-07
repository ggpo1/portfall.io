import React from "react";
import { Expander } from "components";
import * as Markdown from "./tools.styles";

const tools = [
  {
    title: "Общие",
    tools: [
      "ООП",
      "БЭМ",
      "SOLID",
      "DRY",
      "KISS",
      "Design Patterns",
    ],
  },
  {
    title: "Языки",
    tools: [
      "JavaScript",
      "Typescript",
      "C#",
      "Python",
      "html/css",
    ]
  },
  {
    title: "Фреймворки/библиотеки(Frontend)",
    tools: [
      "React",
      "styled-components",
      "Cypress",
      "Jest",
      "storybook",
    ],
  },
  {
    title: "Стейт менеджеры(Frontend)",
    tools: [
      "redux",
      "mobx",
      "effector",
      "redux-toolkit",
    ]
  },
  {
    title: "Сборщики(Frontend)",
    tools: [
      "ESbuild",
      "webpack"
    ],
  },
  {
    title: "Графика(Frontend)",
    tools: [
      "mapbox-gl",
      "canvas-api",
      "three.js",
    ]
  },
  {
    title: "Остальные",
    tools: [
      "SCSS/SASS",
      "PWA",
      "npm/yarn",
      "docker",
      "Nginx",
    ]
  }
]

const getTool = (tool: string) => <Markdown.Tool>{tool}</Markdown.Tool>

export const Tools = React.memo(() => {
  return (
    <Markdown.Wrapper>
      {tools.map((tool) => (
        <Expander title={tool.title} titlePaddingLeft={32}>
          <Markdown.ExpanderContainer>
            {tool.tools.map(getTool)}
          </Markdown.ExpanderContainer>
        </Expander>
      ))}
    </Markdown.Wrapper>
  );
});

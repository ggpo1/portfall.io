import { memo } from "react";
import * as Markdown from "./demos.styles";

export const Demos = memo(() => {
  return (
    <Markdown.Container>
      <Markdown.Cell>1</Markdown.Cell>
      <Markdown.Cell>2</Markdown.Cell>
      <Markdown.Cell>3</Markdown.Cell>
      <Markdown.Cell>4</Markdown.Cell>
      <Markdown.Cell>5</Markdown.Cell>
      <Markdown.Cell>6</Markdown.Cell>
      <Markdown.Cell>7</Markdown.Cell>
      <Markdown.Cell>8</Markdown.Cell>
      <Markdown.Cell>9</Markdown.Cell>
    </Markdown.Container>
  );
});

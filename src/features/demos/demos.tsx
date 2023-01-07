import React from "react";
import { Expander } from "components";
import demos from "./demos.json";
import * as Markdown from "./demos.styles";

export const Demos = React.memo(() => {
  return (
    <Markdown.Container>
      <Expander title="В разработке" titlePaddingLeft={32}>
        <Markdown.ExpanderContainer>
          {demos.map((demo) => (
            <Markdown.Link href={demo.link} target="_blank" rel="noopener">
              <Markdown.Cell>
                <Markdown.Header>
                  <Markdown.Icon src={demo.icon} style={{ width: demo.iconSize, height: demo.iconSize }} />
                  <Markdown.Title>
                    {demo.title}
                  </Markdown.Title>
                </Markdown.Header>
                <Markdown.PlayLink>
                  {demo.description}
                </Markdown.PlayLink>
              </Markdown.Cell>
            </Markdown.Link>
          ))}
          <Markdown.CellPlaceholder />
          <Markdown.CellPlaceholder />
        </Markdown.ExpanderContainer>
      </Expander>
    </Markdown.Container>
  );
});

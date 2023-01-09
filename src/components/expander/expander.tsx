import React from "react";
import { ReactComponent as ChevronIcon } from "./icon.svg";
import * as Markdown from "./expander.styles";

type Props = React.PropsWithChildren<{
  title: string;
  titlePaddingLeft?: number;
  fontSize?: number;
}>;

export const Expander = React.memo<Props>((props) => {
  const [isExpanded, setIsExpanded] = React.useState(true);

  const handleClick = React.useCallback(() => {
    setIsExpanded((prev) => !prev);
  }, []);

  return (
    <Markdown.Container onClick={handleClick}>
      <Markdown.Title isExpanded={isExpanded} fontSize={props.fontSize} titlePaddingLeft={props.titlePaddingLeft}>
        {props.title}
        <ChevronIcon />
      </Markdown.Title>
      {isExpanded && (
        props.children
      )}
    </Markdown.Container>
  )
});

import React from "react";
import * as Markdown from "./profile-photo.styles";

type Props = {
  src: string[];
  size?: number;
}

export const ProfilePhoto = React.memo((props: Props) => {
  const { src, size = 64 } = props;
  const leftButtonRef = React.useRef<HTMLDivElement | null>(null);
  const rightButtonRef = React.useRef<HTMLDivElement | null>(null);
  const [active, setActive] = React.useState(0);

  const showHideElements = React.useCallback((visibility: "visible" | "hidden") => {
    const left = leftButtonRef.current;
    const right = rightButtonRef.current;
    const opacity = visibility === "visible" ? "1" : "0";

    if (left) {
      left.style.opacity = opacity;
    }

    if (right) {
      right.style.opacity = opacity;
    }
  }, []);

  const handleMouseEnter = React.useCallback(() => {
    showHideElements("visible");
  }, [showHideElements])

  const handleMouseLeave = React.useCallback(() => {
    showHideElements("hidden");
  }, [showHideElements])

  const handleLeftClick = () => {
    const newActive = active - 1;
    if (!src[newActive]) return;
    setActive(newActive);
  }

  const handleRightClick = () => {
    const newActive = active + 1;
    if (!src[newActive]) return;
    setActive(newActive);
  }

  return (
    <Markdown.Controls onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Markdown.Image src={src[active]} size={`${size}px`} />
      <Markdown.RightControl ref={leftButtonRef}>
        <Markdown.ControlButton isRight onClick={handleRightClick}>&#8594;</Markdown.ControlButton>
      </Markdown.RightControl>
      <Markdown.LeftControl ref={rightButtonRef}>
        <Markdown.ControlButton onClick={handleLeftClick}>&#8592;</Markdown.ControlButton>
      </Markdown.LeftControl>
    </Markdown.Controls>
  );
});

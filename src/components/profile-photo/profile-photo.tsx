import { memo, useState } from "react";
import { Bounce } from "components";
import * as Markdown from "./profile-photo.styles";

type Props = {
  src: string[];
  size?: number;
}

export const ProfilePhoto = memo((props: Props) => {
  const { src, size = 64 } = props;
  const [isShowControls, setIsShowControls] = useState(false);
  const [active, setActive] = useState(0);

  const handleMouseEnter = () => {
    setIsShowControls(true);
  }

  const handleMouseLeave = () => {
    setIsShowControls(false)
  }

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
      {isShowControls && (
        <>
          <Markdown.RightControl>
            <Markdown.ControlButton isRight onClick={handleRightClick}>{">"}</Markdown.ControlButton>
          </Markdown.RightControl>
          <Markdown.LeftControl>
            <Markdown.ControlButton onClick={handleLeftClick}>{"<"}</Markdown.ControlButton>
          </Markdown.LeftControl>
        </>
      )}
    </Markdown.Controls>
  );
});

import React, { memo } from "react";
import { Icons } from "assets";

type Props = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const PlayButton = memo<Props>(({ onClick }) => {
  return (
    <button onClick={onClick}>
      <Icons.PlayIcon />
    </button>
  );
});

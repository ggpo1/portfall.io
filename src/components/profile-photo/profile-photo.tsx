import { memo } from "react";
import * as Markdown from "./profile-photo.styles";

type Props = {
  src: string;
  size?: number;
}

export const ProfilePhoto = memo((props: Props) => {
  const { src, size = 64 } = props;

  return (
    <Markdown.Image src={src} size={`${size}px`} />
  );
});

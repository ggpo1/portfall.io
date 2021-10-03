import { memo } from "react";
import { ProfilePhoto, Bounce } from "components";
import * as Markdown from "./main.styles";

export const Main = memo(() => {
  return (
    <Markdown.Wrapper>
      <Bounce.Left>
        <ProfilePhoto src="img/1.jpg" size={256} />
      </Bounce.Left>
      <Bounce.Right>
        <Markdown.FullName>
          Архангельский Владимир Александрович
        </Markdown.FullName>
      </Bounce.Right>
    </Markdown.Wrapper>
  );
});

import { memo } from "react";
import { ProfilePhoto, Bounce } from "components";
import { hooks } from "shared";
import * as Markdown from "./main.styles";

export const Main = memo(() => {
  const currentCompany = hooks.selectors.useCurrentCompany();

  return (
    <Markdown.Wrapper>
      <Bounce.Left>
        <ProfilePhoto src={["img/1.jpg", "img/2.jpg", "img/3.jpg"]} size={256} />
      </Bounce.Left>
      <Bounce.Right>
        <Markdown.FullName>
          Архангельский Владимир Александрович
        </Markdown.FullName>
      </Bounce.Right>
      <Bounce.Left>
        <Markdown.FullName>
          Frontend Developer в {currentCompany.title}
        </Markdown.FullName>
      </Bounce.Left>
    </Markdown.Wrapper>
  );
});

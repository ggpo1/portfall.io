import { memo } from "react";
import { useUiStore } from "store";
import { ProfilePhoto } from "components";
import * as Markdown from "./home.styles";

export const Home = memo(() => {
  const store = useUiStore();
  const currentCompany = store.companies.hooks.useCurrent();

  return (
    <Markdown.Wrapper>
      {/* <Bounce.Left> */}
      <ProfilePhoto src={["img/1.jpeg", "img/2.jpeg", "img/3.webp"]} size={256} />
      {/* </Bounce.Left> */}
      {/* <Bounce.Right> */}
      <Markdown.FullName>
        Архангельский Владимир Александрович
      </Markdown.FullName>
      {/* </Bounce.Right> */}
      {/* <Bounce.Left> */}
      <Markdown.FullName>
        Frontend Developer в "{currentCompany?.title}"
      </Markdown.FullName>
      {/* </Bounce.Left> */}
    </Markdown.Wrapper>
  );
});

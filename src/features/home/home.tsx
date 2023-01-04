import React from "react";
import { useUiStore } from "store";
import { ProfilePhoto } from "components";
import * as Markdown from "./home.styles";

export const Home = React.memo(() => {
  const [size, setSize] = React.useState(0);
  const store = useUiStore();
  const currentCompany = store.companies.hooks.useCurrent();

  React.useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;

      if (windowWidth <= 1450) {
        setSize(windowWidth / 1.3);
      } else {
        setSize(windowWidth / 4);
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <Markdown.Wrapper>
      <ProfilePhoto src={["img/photo_2.png", "img/photo_1.jpg", "img/photo_3.jpg"]} size={size} />
      <Markdown.FullName>
        Архангельский Владимир Александрович
      </Markdown.FullName>
      <Markdown.CurrentJobTitle>
        Senior Frontend Developer в <Markdown.CompanyLink href={currentCompany?.site} target="_blank" rel="noopener">"{currentCompany?.title}"</Markdown.CompanyLink>
      </Markdown.CurrentJobTitle>
    </Markdown.Wrapper>
  );
});

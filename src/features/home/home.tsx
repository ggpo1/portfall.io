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
      const { innerWidth, innerHeight } = window;

      let calculatingSize = innerWidth;

      if (innerWidth > innerHeight) {
        calculatingSize = innerHeight;
      }

      if (calculatingSize <= 1450) {
        setSize(calculatingSize / 1.3);
      } else if (calculatingSize >= 1450 && calculatingSize <= 1920) {
        setSize(calculatingSize / 1);
      } else {
        setSize(calculatingSize / 4);
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
      <Markdown.AboutText>
        Привет, меня зовут Вова. Мне 23 года, живу и работаю в Москве.
        Занимаюсь программированием с 15 лет, за это время успел перепробовать много
        языков, технологий и направлений в IT. На текущий момент имею 5 лет опыта коммерческой
        разработки в таких сферах, как: документооборот, обучающие системы, складское
        оборудование(различные WMS для управления и диагностики состояния складов) и разработка
        различных интеллектуальных транспортых систем.

      </Markdown.AboutText>
      <Markdown.AboutText>
        Перепробовал различные языки, такие как: JavaScript, C#, Python, Java, PHP.
        В последнее время существенно углубился в Frontend разработку с использованием
        Typescript, React, ESBuild/Webpack, Effector/Redux, ThreeJS, ESLint, Prettier и всяких пакетов для тестирования (Cypress, Jest).
        За время работы на последнем месте успел круто прокачать знания в CanvasAPI, WebGL и в картографии в целом.
        Так же получил опыт полного цикла создания приложения, начиная от идеи, заканчивая внедрением и сопровождением.
        Дома развернул и настроил свой сервер с Nginx, настроил CI/CD в gitlab, чтобы разворачивать свои проекты, в том числе и этот.
      </Markdown.AboutText>
      <Markdown.AboutText>
        В свободное от работы время пишу свои проекты, в которых выступаю в роли Fullstack разработчика и DevOps. 
        В своих проектах я предпочитаю использовать для Frontend части - React, TypeScript, ESBuild, ESLint, Effector. 
        Для Backend чаще всего использую .Net Core с шаблоном webapi и PostgreSQL.
      </Markdown.AboutText>
    </Markdown.Wrapper>
  );
});

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import * as Markdown from "./menu.styles";

export type Tab = {
  id: string;
  icon: React.ReactNode;
  title: string;
}

type Props = {
  tabs: Tab[];
  contents: React.ReactNode[];
} & Partial<Markdown.DirectionProps>;

export const Menu = React.memo<Props>((props) => {
  const { tabs, contents, direction = "row" } = props;
  const [, setCount] = React.useState(0);
  const active = document.location.pathname;
  const handleUpdate = React.useCallback(() => setCount((prev) => prev + 1), []);

  React.useEffect(() => {
    if (active.includes("demos")) {
      document.title = "Проекты";
      return;
    }

    if (active.includes("skills")) {
      document.title = "Навыки";
      return;
    }

    if (active.includes("companies")) {
      document.title = "Компании";
      return;
    }

    if (active.includes("contacts")) {
      document.title = "Контакты";
      return;
    }

    document.title = "Главная"
  }, [active]);

  return (
    <Router>
      <Markdown.Wrapper direction={direction}>
        <Markdown.Tabs direction={direction}>
          {tabs.map(({ id, icon, title }, index) => {
            return (
              <Link key={`link_${id}`} to={id} onClick={handleUpdate}>
                <Markdown.Tab tabIndex={index + 1} isActive={active === id} title={title}>
                  {icon}
                </Markdown.Tab>
              </Link>
            );
          })}
        </Markdown.Tabs>
        <Markdown.Content>
          <Switch>
            {contents.map((content, index) => {
              const id = tabs[index].id;
              return (
                <Route key={`route_${id}`} exact={index === 0} path={id}>
                  {content as any}
                </Route>
              );
            })}
            <Route key="route_404" path="*">
              <div>
                404
              </div>
            </Route>
          </Switch>
        </Markdown.Content>
      </Markdown.Wrapper>
    </Router>
  );
});

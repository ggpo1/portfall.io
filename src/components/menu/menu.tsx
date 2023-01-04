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
  const title = tabs.find((tab) => tab.id === active)?.title ?? "";
  document.title = title;
  const handleUpdate = React.useCallback(() => setCount((prev) => prev + 1), []);

  return (
    <Router>
      <Markdown.Wrapper direction={direction}>
        <Markdown.Title>{title}</Markdown.Title>
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
        <Markdown.Tabs direction={direction}>
          {tabs.map(({ id, icon, title }, index) => {
            const isActive = active === id;

            return (
              <Link title={title} style={{ textDecoration: "none" }} key={`link_${id}`} to={id} onClick={handleUpdate}>
                <Markdown.Tab tabIndex={index + 1} isActive={isActive} title={title}>
                  {icon} <Markdown.TabTitle isActive={isActive}>{title}</Markdown.TabTitle>
                </Markdown.Tab>
              </Link>
            );
          })}
        </Markdown.Tabs>
      </Markdown.Wrapper>
    </Router>
  );
});

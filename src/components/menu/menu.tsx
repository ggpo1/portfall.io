import { memo, useMemo, useCallback, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import * as Markdown from "./menu.styles";

type Tab = {
  id: string;
  title: string;
}

type Props = {
  tabs: Tab[];
  contents: React.ReactNode[];
}

export const Menu = memo((props: Props) => {
  const { tabs, contents } = props;
  const [count, setCount] = useState(0);
  const active = useMemo(() => document.location.pathname, [count]);
  const handleUpdate = useCallback(() => setCount((prev) => prev + 1), []);

  return (
    <Router>
      <Markdown.Wrapper>
        <Markdown.Tabs>
          {tabs.map(({ id, title }, index) => {
            return (
              <Link key={`link_${id}`} to={id} onClick={handleUpdate}>
                <Markdown.Tab tabIndex={index + 1} isActive={active === id}>
                  {title}
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
                <Route key={`route_${id}`} exact path={id}>
                  {content}
                </Route>
              );
            })}
          </Switch>
        </Markdown.Content>
      </Markdown.Wrapper>
    </Router>
  );
});

import { memo } from "react";
import * as Markdown from "./menu.styles";

type Tab = {
  title: string;
}

type Props = {
  tabs: Tab[];
  contents: React.ReactNode[];
  active?: number;
  onChange?: (active: number) => void;
}

export const Menu = memo((props: Props) => {
  const { tabs, contents, onChange, active = 0 } = props;

  const handleClick = (active: number) => () => {
    onChange?.(active);
  }

  return (
    <Markdown.Wrapper>
      <Markdown.Tabs>
        {tabs.map(({ title }, index) => {
          return (
            <Markdown.Tab tabIndex={index + 1} isActive={index === active} onClick={handleClick(index)}>
              {title}
            </Markdown.Tab>
          );
        })}
      </Markdown.Tabs>
      <Markdown.Content>
        {contents[active]}
      </Markdown.Content>
    </Markdown.Wrapper>
  );
});

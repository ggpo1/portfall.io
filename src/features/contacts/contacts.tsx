import { memo } from "react";
import { Icons } from "assets";
import * as Markdown from "./contacts.styles";

export const Contacts = memo(() => {
  return (
    <Markdown.Container>
      <Markdown.Links>
        <Markdown.Link href="tel:+&9253744643">
          +7(925)374-46-43
          <Markdown.LinkIcon>
            <Icons.LinkIcon />
          </Markdown.LinkIcon>
        </Markdown.Link>
        <Markdown.Link href="mailto:johnlevis199@gmail.com">
          johnlevis199@gmail.com
          <Markdown.LinkIcon>
            <Icons.LinkIcon />
          </Markdown.LinkIcon>
        </Markdown.Link>
        <Markdown.Link href="https://t.me/varkhn" target="_blank" rel="noopener">
          Telegram
          <Markdown.LinkIcon>
            <Icons.LinkIcon />
          </Markdown.LinkIcon>
        </Markdown.Link>
        <Markdown.Link href="https://hh.ru/resume/ff0921ffff0409a3260039ed1f495956673368" target="_blank" rel="noopener">
          hh.ru
        </Markdown.Link>
        <Markdown.Link href="https://github.com/ggpo1" target="_blank" rel="noopener">
          Github
          <Markdown.LinkIcon>
            <Icons.LinkIcon />
          </Markdown.LinkIcon>
        </Markdown.Link>
        <Markdown.Link href="https://stackoverflow.com/users/11835100/vladimir-arkhangelskii" target="_blank" rel="noopener">
          StackOverflow
          <Markdown.LinkIcon>
            <Icons.LinkIcon />
          </Markdown.LinkIcon>
        </Markdown.Link>
      </Markdown.Links>
    </Markdown.Container>
  );
});

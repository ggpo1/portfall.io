import { memo } from "react";
import * as Markdown from "./contacts.styles";

export const Contacts = memo(() => {
  return (
    <Markdown.Container>
      Контакты
    </Markdown.Container>
  );
});

import { memo } from "react";
import { ReactComponent as MedicalIcon } from "./medical.svg";
import * as Markdown from "./demos.styles";

export const Demos = memo(() => {
  return (
    <Markdown.Container>
      <Markdown.Link href="https://medical-card.arkhangelskii-it.ru" target="_blank" rel="noopener">
        <Markdown.Cell>
          <Markdown.Header>
            <MedicalIcon />
            <Markdown.Title>
              Дневник пациента
            </Markdown.Title>
          </Markdown.Header>
          <Markdown.PlayLink>
            Med-Tech проект для врачей, которым откроется возможность вести учет посещения и осмотров своих пациентов.
          </Markdown.PlayLink>
        </Markdown.Cell>
      </Markdown.Link>
    </Markdown.Container>
  );
});

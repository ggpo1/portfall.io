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
      <Markdown.Link href="https://chemistry-notes.arkhangelskii-it.ru" target="_blank" rel="noopener">
        <Markdown.Cell>
          <Markdown.Header>
            <MedicalIcon />
            <Markdown.Title>
              Дневник химика
            </Markdown.Title>
          </Markdown.Header>
          <Markdown.PlayLink>
            Science-Tech проект для ученых, которым откроется возможность вести учет своих химических опытов и записывать их результаты.
          </Markdown.PlayLink>
        </Markdown.Cell>
      </Markdown.Link>
    </Markdown.Container>
  );
});

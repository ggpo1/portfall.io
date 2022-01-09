import { memo, useLayoutEffect, useRef } from "react";
import { useUiStore } from "store";
import { Resizable } from "components";
import { MapController } from "modules";
import * as Markdown from "./companies.styles";

export const Companies = memo(() => {
  const store = useUiStore();
  const companies = store.companies.hooks.useList();
  const currentCompany = store.companies.hooks.useCurrent();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mapController = useRef<MapController | null>(null);

  console.log(currentCompany, companies);

  useLayoutEffect(() => {
    if (mapController.current || !containerRef.current) return;

    mapController.current = new MapController(containerRef.current);

    return () => {
      mapController.current?.destroy();
    }
  }, []);

  return (
    <Markdown.Wrapper>
      <Markdown.Map ref={containerRef} />
      <Markdown.ListContainer>
        <Resizable>
          <Markdown.List>
            {companies.map((company) => (<Markdown.ListItem>{company.title}</Markdown.ListItem>))}
          </Markdown.List>
        </Resizable>
      </Markdown.ListContainer>
    </Markdown.Wrapper>
  );
});
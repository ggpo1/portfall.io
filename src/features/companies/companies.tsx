import { memo, useLayoutEffect, useRef } from "react";
import { useUiStore } from "store";
import { Company } from "types";
// import { Resizable } from "components";
import { MapController } from "modules";
import * as Markdown from "./companies.styles";

export const Companies = memo(() => {
  const store = useUiStore();
  const companies = store.companies.hooks.useList();
  const currentCompany = store.companies.hooks.useCurrent();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mapController = useRef<MapController | null>(null);

  console.log(currentCompany, companies);

  const handleClick = (company: Company.Instance) => () => {
    store.companies.events.setSelectedCompany(company);
  }

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
        {companies.map((company) => (
          <Markdown.ListItem onClick={handleClick(company)}>
            {company.icon ? <Markdown.CompanyLogo src={company.icon} /> : <Markdown.CompanyLogoPlaceholder />}
            <Markdown.ListItemCenter>
              <Markdown.ListItemTitle>
                {company.title}
              </Markdown.ListItemTitle>
              <Markdown.ListItemDescription>
                {company.description}
              </Markdown.ListItemDescription>
            </Markdown.ListItemCenter>
          </Markdown.ListItem>
        ))}
      </Markdown.ListContainer>
    </Markdown.Wrapper>
  );
});
import React from "react";
import { useUiStore } from "store";
import { Company } from "types";
// import { Resizable } from "components";
import { MapController } from "modules";
import * as Markdown from "./companies.styles";

export const Companies = React.memo(() => {
  const store = useUiStore();
  const companies = store.companies.hooks.useList();
  const currentCompany = store.companies.hooks.useCurrent();
  const wrapperRef = React.useRef<HTMLDivElement | null>(null);
  const listRef = React.useRef<HTMLDivElement | null>(null);
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const mapController = React.useRef<MapController | null>(null);

  console.log(currentCompany, companies);

  const handleClick = (company: Company.Instance) => () => {
    store.companies.events.setSelectedCompany(company);
  }

  React.useEffect(() => {
    const calculate = () => {
      if (!listRef.current) return;

      const wrapperRect = wrapperRef.current?.getBoundingClientRect();
      const listRect = listRef.current.getBoundingClientRect();

      listRef.current.style.top = `${(wrapperRect?.bottom ?? 0) - (listRect?.height ?? 0) + 1}px`;
    }

    calculate();

    window.addEventListener("resize", calculate);
    window.addEventListener("wheel", calculate);

    return () => {
      window.removeEventListener("resize", calculate);
      window.removeEventListener("wheel", calculate);
    }
  }, []);

  React.useLayoutEffect(() => {
    if (mapController.current || !containerRef.current) return;

    mapController.current = new MapController(containerRef.current);

    return () => {
      mapController.current?.destroy();
    }
  }, []);

  return (
    <Markdown.Wrapper ref={wrapperRef}>
      <Markdown.Map ref={containerRef} />
      <Markdown.ListContainer ref={listRef}>
        <Markdown.Resize>
          <Markdown.ResizeButton />
        </Markdown.Resize>
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
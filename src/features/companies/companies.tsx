import React from "react";
import { useUiStore } from "store";
import { Company } from "types";
import { Icons } from "assets";
import { MapController } from "modules";
import { Expander } from "components";
import { ImageCollection } from "./image-collection";
import * as Markdown from "./companies.styles";

let calculatingInterval: NodeJS.Timeout;

export const Companies = React.memo(() => {
  const store = useUiStore();
  const companies = store.companies.hooks.useList();
  const currentCompany = store.companies.hooks.useCurrent();
  const selectedCompany = store.companies.hooks.useSelectedCompany();
  const wrapperRef = React.useRef<HTMLDivElement | null>(null);
  const resizeRef = React.useRef<HTMLDivElement | null>(null);
  const listRef = React.useRef<HTMLDivElement | null>(null);
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const mapController = React.useRef<MapController | null>(null);

  const handleLinkClick = React.useCallback((event: React.MouseEvent) => {
    event.stopPropagation();
  }, []);

  const calculateListPosition = React.useCallback(() => {
    if (!listRef.current) return;

    const wrapperRect = wrapperRef.current?.getBoundingClientRect();
    const listRect = listRef.current.getBoundingClientRect();

    listRef.current.style.top = `${(wrapperRect?.bottom ?? 0) - (listRect?.height ?? 0) + 1}px`;
  }, []);

  const handleCompanyClick = React.useCallback(() => {
    if (!selectedCompany || !selectedCompany.site) return;

    const link = document.createElement("a");

    link.href = selectedCompany.site;
    link.rel = "noopener";
    link.target = "_blank";
    link.click();
    link.remove();
  }, [selectedCompany]);

  calculateListPosition();

  const handleClick = (company: Company.Instance | null) => () => {
    store.companies.events.setSelectedCompany(company);

    if (!company) return mapController.current?.unFocus();

    mapController.current?.focusOn(company.id)
  }

  React.useEffect(() => {
    store.companies.events.setSelectedCompany(null);
  }, [store.companies.events]);


  React.useEffect(() => {
    const resize = resizeRef.current;


    const handlePointerMove = (event: PointerEvent) => {
      if (!resize || !listRef.current) return;

      (event.target as Element | undefined)?.setPointerCapture?.(event.pointerId);

      const listRect = listRef.current.getBoundingClientRect();
      const resizeRect = resize.getBoundingClientRect();

      // 10 -- padding
      const delta = (listRect.y + 11 + (resizeRect.height / 2)) - event.clientY;

      listRef.current.style.height = `${listRect.height + delta}px`;
      calculateListPosition();
    }

    const handleResizePointerUp = () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handleResizePointerUp);
    }

    const handleResizePointerDown = () => {
      window.addEventListener("pointermove", handlePointerMove);
      window.addEventListener("pointerup", handleResizePointerUp);
    }

    clearInterval(calculatingInterval);

    calculatingInterval = setInterval(calculateListPosition, 10);

    window.addEventListener("resize", calculateListPosition);
    window.addEventListener("wheel", calculateListPosition);
    resize?.addEventListener("pointerdown", handleResizePointerDown);

    return () => {
      window.removeEventListener("resize", calculateListPosition);
      window.removeEventListener("wheel", calculateListPosition);
      resize?.removeEventListener("pointerdown", handleResizePointerDown);
      window.removeEventListener("pointerup", handleResizePointerUp);
      window.removeEventListener("pointermove", handlePointerMove);
    }
  }, [calculateListPosition]);

  React.useLayoutEffect(() => {
    if (mapController.current || !containerRef.current) return;

    mapController.current = new MapController(containerRef.current);
    mapController.current.setCollection(new Company.Collection(companies));

    return () => {
      mapController.current?.destroy();
    }
  }, [companies]);

  return (
    <Markdown.Wrapper ref={wrapperRef}>
      <Markdown.Map ref={containerRef} />
      <Markdown.ListContainer ref={listRef}>
        <Markdown.Resize ref={resizeRef}>
          <Markdown.ResizeButton />
        </Markdown.Resize>
        <Markdown.Content>
          {!selectedCompany ? (
            companies.map((company) => (
              <Markdown.ListItem onClick={handleClick(company)}>
                {company.icon ? <Markdown.CompanyLogo src={company.icon} /> : <Markdown.CompanyLogoPlaceholder />}
                <Markdown.ListItemCenter>
                  <Markdown.ListItemTitle>
                    {company.title} {company.id === currentCompany?.id && (
                      <Markdown.CurrentTitle>*текущая</Markdown.CurrentTitle>
                    )}
                  </Markdown.ListItemTitle>
                  <Markdown.ListItemDescription>
                    {company.description}
                  </Markdown.ListItemDescription>
                </Markdown.ListItemCenter>
              </Markdown.ListItem>
            ))
          ) : (
            <>
              <Markdown.SelectedHeader>
                <Markdown.Back onClick={handleClick(null)}>
                  <Icons.BackIcon />
                </Markdown.Back>
                <Markdown.SectionHeading>
                  <Markdown.SelectedHeaderText onClick={handleCompanyClick}>
                    {selectedCompany.icon ? <Markdown.CompanyLogo src={selectedCompany.icon} /> : <Markdown.CompanyLogoPlaceholder />}
                    {selectedCompany.title}
                    <Markdown.LinkIcon>
                      <Icons.LinkIcon />
                    </Markdown.LinkIcon>
                  </Markdown.SelectedHeaderText>
                  {selectedCompany.id === currentCompany?.id && (
                    <Markdown.Current>
                      <Markdown.CurrentTitle>*текущая</Markdown.CurrentTitle>
                    </Markdown.Current>
                  )}
                </Markdown.SectionHeading>
              </Markdown.SelectedHeader>
              <Markdown.SelectedContent>
                <Markdown.SelectedDescription>
                  {selectedCompany.description}
                </Markdown.SelectedDescription>
                {selectedCompany.images && (
                  <Expander title="Скриншоты" fontSize={13} titlePaddingLeft={20}>
                    <Markdown.ImageExpanderContainer>
                      <ImageCollection images={selectedCompany.images} />
                    </Markdown.ImageExpanderContainer>
                  </Expander>
                )}
                {selectedCompany.projects.length ? (
                  <Expander title="Проекты над которыми я работал" fontSize={13} titlePaddingLeft={20}>
                    <Markdown.Projects>
                      {selectedCompany.projects.map((project) => (
                        <>
                          <Markdown.ProjectTitle href={project.site} target="_blank" rel="noopener" onClick={handleLinkClick}>
                            {project.title}
                            <Markdown.ProjectLinkIcon>
                              <Icons.LinkIcon />
                            </Markdown.ProjectLinkIcon>
                          </Markdown.ProjectTitle>
                          <Markdown.ProjectDescription>{project.fullTitle}</Markdown.ProjectDescription>
                        </>
                      ))}
                    </Markdown.Projects>
                  </Expander>
                ) : null}
              </Markdown.SelectedContent>
            </>
          )}
        </Markdown.Content>
      </Markdown.ListContainer>
    </Markdown.Wrapper>
  );
});
import { memo, useLayoutEffect, useRef } from "react";
import { Resizable } from "components";
import { MapController } from "modules";
import * as Markdown from "./companies.styles";

export const Companies = memo(() => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mapController = useRef<MapController | null>(null);

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
          <Markdown.List />
        </Resizable>
      </Markdown.ListContainer>
    </Markdown.Wrapper>
  );
});
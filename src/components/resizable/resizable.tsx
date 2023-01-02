import React, { useLayoutEffect, useRef } from "react";
import * as Markdown from "./resizable.styles";

type Props = {}

export const Resizable: React.FC<Props> = (props) => {
  const { children } = props;
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleMousemove = (e: MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const bottomButtonStart = rect.height - 15;
    const bottomButtonEnd = rect.height;
    const rightButtonStart = rect.width - 15;
    const rightButtonEnd = rect.width;

    const isLeftButton = x >= 0 && x <= 15;
    const isRightButton = x >= rightButtonStart && x <= rightButtonEnd;
    const isTopButton = y >= 0 && y <= 15;
    const isBottomButton = y >= bottomButtonStart && y <= bottomButtonEnd;

    if (!isLeftButton && !isRightButton && !isTopButton && !isBottomButton) {
      return containerRef.current.removeAttribute("style");
    }

    if (isLeftButton || isRightButton) {
      containerRef.current.style.cursor = "col-resize";
    }

    if (isTopButton || isBottomButton) {
      containerRef.current.style.cursor = "row-resize";
    }
  }

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener("mousemove", handleMousemove);

    return () => {
      container?.removeEventListener("mousemove", handleMousemove);
    }
  }, []);

  return (
    <Markdown.Container ref={containerRef} className="resizable">
      {children}
    </Markdown.Container>
  );
};

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  height: fit-content;

  &:hover {
    cursor: pointer;
  }
`;

export const Title = styled.div<{ isExpanded: boolean; titlePaddingLeft?: number; fontSize?: number }>`
  display: flex;
  align-items: center;
  font-weight: bold;
  user-select: none;
  font-size: ${({ fontSize }) => (typeof fontSize === "number" ? `${fontSize}px` : "17px")};
  gap: 2px;
  padding-left: ${({ titlePaddingLeft }) => `${titlePaddingLeft ?? 0}px`};

  svg {
    transition: transform 0.3s;
    fill: ${({ theme }) => theme.backgroundColorActive};
    transform: rotate(${({ isExpanded }) => (isExpanded ? "90deg" : "0")});
  }
`;

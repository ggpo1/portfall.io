import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  height: fit-content;

  &:hover {
    cursor: pointer;
  }
`;

export const Title = styled.div<{ isExpanded: boolean; titlePaddingLeft?: number }>`
  display: flex;
  align-items: center;
  font-weight: bold;
  user-select: none;
  font-size: 17px;
  gap: 2px;
  padding-left: ${({ titlePaddingLeft }) => `${titlePaddingLeft ?? 0}px`};

  svg {
    transition: transform 0.3s;
    fill: ${({ theme }) => theme.backgroundColorActive};
    transform: rotate(${({ isExpanded }) => (isExpanded ? "90deg" : "0")});
  }
`;

export const Content = styled.div``;

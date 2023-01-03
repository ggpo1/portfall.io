import styled from "styled-components";

export type DirectionProps = { direction: "row" | "column" };

export const Wrapper = styled.div<DirectionProps>`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: ${({ direction }) => (direction === "row" ? "column" : "row")};
  gap: 10px;

  @media screen and (max-width: 1127px) {
    flex-direction: row;
  }
`;

export const Tabs = styled.div<DirectionProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  gap: 16px;
  flex-grow: 0;

  @media screen and (max-width: 1127px) {
    flex-direction: column;
  }
`;

export const TabTitle = styled.span<{ isActive: boolean }>`
  color: ${({ theme, isActive }) => isActive && theme.backgroundColorActive} !important;

  @media screen and (max-width: 1127px) {
    display: none;
  }
`;

export const Tab = styled.button<{ isActive: boolean }>`
  display: flex;
  gap: 8px;
  align-items: center;
  height: ${({ theme }) => theme.buttonHeight};
  border: none;
  background-color: ${({ theme }) => theme.baseColor};
  border-bottom: ${({ theme, isActive }) => `${isActive ? `1px solid ${theme.backgroundColorActive}` : "none"}`};
  color: ${({ theme, isActive }) => isActive && theme.backgroundColorActive} !important;
  opacity: ${({ isActive }) => !isActive && 0.5};

  svg {
    width: 24px;
    height: 24px;

    fill: ${({ theme, isActive }) => isActive ? theme.backgroundColorActive : "#747474"};
    stroke: ${({ theme, isActive }) => isActive ? theme.backgroundColorActive : "#747474"};
  }

  &:focus-visible {
    border-radius: 4px;
    outline: 3px solid ${({ theme }) => theme.backgroundColorActive};
  }

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }

  &:active {
    opacity: 1;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  border-radius: ${({ theme }) => theme.blockBorderRadius};
  outline: 1px solid ${({ theme }) => theme.backgroundColorActive};
  padding: 1px;
  /* box-shadow: ${({ theme }) => theme.blockShadow}; */
`;

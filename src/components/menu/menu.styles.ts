import styled from "styled-components";

export type DirectionProps = { direction: "row" | "column" };

export const Wrapper = styled.div<DirectionProps>`
  display: flex;
  height: 100%;
  flex-direction: ${({ direction }) => (direction === "row" ? "column" : "row")};
  gap: 10px;
`;

export const Tabs = styled.div<DirectionProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  gap: 10px;
  flex-grow: 0;
  margin-bottom: 10px;
`;

export const Tab = styled.button<{ isActive: boolean }>`
  width: 45px;
  height: ${({ theme }) => theme.buttonHeight};
  border: none;
  background-color: ${({ theme }) => theme.baseColor};
  border-bottom: ${({ theme, isActive }) => `1px solid ${isActive ? theme.backgroundColorActive : "#e5e5e5"}`};
  color: ${({ theme, isActive }) => isActive && theme.backgroundColorActive};
  opacity: ${({ isActive }) => !isActive && "0.5"};

  svg {
    width: 24px;
    height: 24px;

    fill: ${({ theme, isActive }) => isActive && theme.backgroundColorActive};
  }

  &:hover {
    cursor: pointer;
    opacity: 1;
  }

  &:active {
    color: #e5e5e5;
    border-bottom: 1px solid #e5e5e5;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  border-radius: ${({ theme }) => theme.blockBorderRadius};
  border: 1px solid #e5e5e5;
  padding: 20px;
  box-shadow: ${({ theme }) => theme.blockShadow};
`;

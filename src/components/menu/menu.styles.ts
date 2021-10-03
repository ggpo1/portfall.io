import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
`;

export const Tabs = styled.div`
  display: flex;
  gap: 10px;
  flex-grow: 0;
  margin-bottom: 10px;
`;

export const Tab = styled.button<{ isActive: boolean }>`
  width: 100px;
  height: ${({ theme }) => theme.buttonHeight};
  border: none;
  background-color: ${({ theme }) => theme.baseColor};
  border-bottom: ${({ theme, isActive }) => isActive && `1px solid ${theme.backgroundColorActive}`};
  color: ${({ theme, isActive }) => isActive && theme.backgroundColorActive};
  opacity: ${({ isActive }) => !isActive && "0.5"};

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
  border-radius: 4px;
  border: 1px solid #e5e5e5;
  padding: 20px;
  box-shadow: 0px 0px 8px 0px rgba(34, 60, 80, 0.2);
`;

import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Tabs = styled.div`
  display: flex;
  gap: 10px;
`;

export const Tab = styled.button<{ isActive: boolean }>`
  width: 100px;
  height: 32px;
  border: none;
  background-color: ${({ theme }) => theme.baseColor};
  border-bottom: ${({ isActive }) => isActive && "1px solid #e5e5e5"};
  opacity: ${({ isActive }) => !isActive && "0.6"};

  &:hover {
    cursor: pointer;
  }
`;

export const Content = styled.div``;

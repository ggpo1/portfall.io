import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 16px;
  padding: 16px 0;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const Tool = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 180px;
  flex: 1;
  height: 50px;
  padding: 8px;
  border-radius: 0.3rem;
  overflow: hidden;
  color: ${({ theme }) => theme.textColorDefault};
  background: linear-gradient(137.85deg, #f1f3f6 13.92%, #fff 84.77%);
  backdrop-filter: blur(4px);
  box-shadow: 5px 5px 20px rgba(150, 150, 150, 0.35);

  &:hover {
    cursor: pointer;
    transform: scale(1.002);
    z-index: 999999;
  }
`;

export const ExpanderContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 16px;
  padding: 8px 16px;
`;

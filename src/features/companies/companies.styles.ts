import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const Map = styled.div`
  width: 100%;
  height: 100%;
  background-color: #eff0f0;
`;

export const ListContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 300px;
  bottom: 0px;
  left: 0;
  transform: translateX(5.6%);
  z-index: 99;
  background-color: ${({ theme }) => theme.baseColor};
  border-radius: 10px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  background-color: ${({ theme }) => theme.baseColor};
  box-shadow: ${({ theme }) => theme.blockShadow};
  overflow-y: auto;
  overflow-x: hidden;
  padding: 10px;
  gap: 8px;
`;

export const ListItem = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 48px;
  padding: 5px;
  border: 1px solid ${({ theme }) => theme.backgroundColorActive};
  border-radius: 4px;

  &:hover {
    cursor: pointer;
  }
`;

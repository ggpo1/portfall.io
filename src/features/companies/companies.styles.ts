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
  justify-content: center;
  align-items: center;
  width: 90%;
  min-height: 30%;
  bottom: 0px;
  left: 0;
  transform: translateX(5.6%);
  z-index: 99;
  background-color: ${({ theme }) => theme.baseColor};
  border-radius: 10px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  box-shadow: 0 1px 1px rgb(0 0 0 / 5%);
  border: 1px solid transparent;
`;

export const List = styled.div`
  width: 420px;
  height: 230px;
  border-radius: ${({ theme }) => theme.blockBorderRadius};
  background-color: ${({ theme }) => theme.baseColor};
  box-shadow: ${({ theme }) => theme.blockShadow};
  overflow: auto;
  padding: 10px;
`;

export const ListItem = styled.div`
  width: 100%;
  height: 100px;
  padding: 5px;
  border: 1px solid black;
  border-radius: 4px;

  &:hover {
    cursor: pointer;
  }

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

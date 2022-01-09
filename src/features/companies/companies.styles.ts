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
`;

export const ListContainer = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  z-index: 99;
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

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

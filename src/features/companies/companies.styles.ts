import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
`;

export const Map = styled.div`
  width: 100%;
  height: 100%;
`;

export const List = styled.div`
  position: absolute;
  width: 250px;
  height: 300px;
  top: 16px;
  left: 16px;
  z-index: 99;
  border-radius: ${({ theme }) => theme.blockBorderRadius};
  background-color: ${({ theme }) => theme.baseColor};
  box-shadow: ${({ theme }) => theme.blockShadow};
`;

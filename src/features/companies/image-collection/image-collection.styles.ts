import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: nowrap;
  overflow-x: scroll;
  overflow-y: hidden;
  gap: 4px;
`;

export const Image = styled.img`
  height: 100px;
`;

export const LargeImage = styled.img`
  width: 80%;
  height: auto;
  cursor: pointer;
`;

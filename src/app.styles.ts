import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  width: 50vw;
  height: 90vh;

  @media screen and (min-width: 1920px) {
    /* background-color: red; */
  }
`;

export const Canvas = styled.canvas`
  width: 70%;
  height: 100%;
`;

export const DebugContainer = styled.div`
  width: 30%;
  height: 100%;
  border-left: 1px solid #e5e5e5;
`;

import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  width: 50%;
  height: 90%;
  overflow: hidden;

  @media screen and (max-width: 1450px) {
    width: 100%;
    padding: 10px 10px;
    height: 100%;
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

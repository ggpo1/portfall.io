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

export const PopupNode = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 100;
  background: rgba(0, 0, 0, 0.8);

  .popup-blocking-overlay {
    z-index: 22;
  }

  &:empty {
    display: none;
  }
`;

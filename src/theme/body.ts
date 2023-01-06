import styled from "styled-components";

/** Поддержка мобильных браузеров */
const resize = () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
};

resize();
window.addEventListener("resize", resize);

export const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  background-color: ${({ theme }) => theme.baseColor};
  box-sizing: border-box;
  overflow: hidden;

  * {
    box-sizing: border-box;
    color: ${({ theme }) => theme.textColorDefault};
  }
`;

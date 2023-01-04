import styled, { css } from "styled-components";

export const Controls = styled.div`
  position: relative;
`;

export const Image = styled.div<{ src: string; size: string }>`
  position: relative;
  backdrop-filter: blur(4px);
  border-radius: 50%;
  box-shadow: 5px 5px 20px rgb(150 150 150 / 35%);
  background-color: #e5e5e5; // @note add to theme
  background-image: url(${({ src }) => src});

  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;

  box-shadow: 0px 0px 8px 0px rgba(229, 229, 229, 0.2) inset;

  @media screen and (min-width: 1441px) {
    width: 550px;
    height: 550px;
  }

  @media screen and (min-width: 1441px) {
    width: 550px;
    height: 550px;
  }

  @media screen and (max-width: 1440px) {
    width: 400px;
    height: 400px;
  }

  @media screen and (max-width: 671px) {
    width: 300px;
    height: 300px;
  }

  @media screen and (max-width: 565px) {
    width: 250px;
    height: 250px;
  }

  @media screen and (max-width: 317px) {
    width: 200px;
    height: 200px;
  }
`;

const control = css`
  display: grid;
  place-items: center;
  position: absolute;
  top: 0;
  width: 30px;
  height: 100%;
  opacity: 0;
  transition: opacity 0.2s;

  &:hover {
    cursor: pointer;
  }
`;

export const LeftControl = styled.div`
  ${control}
  left: 3px;
`;

export const RightControl = styled.div`
  ${control}
  right: 3px;
`;

const borderRadius = "25%";

const rightBorder = css`
  border-top-right-radius: ${borderRadius};
  border-bottom-right-radius: ${borderRadius};
`;

const leftBorder = css`
  border-top-left-radius: ${borderRadius};
  border-bottom-left-radius: ${borderRadius};
`;

export const ControlButton = styled.button<{ isRight?: boolean }>`
  border: none;
  background-color: #000000;
  opacity: 0.7;
  width: 100%;
  height: 20%;
  color: ${({ theme }) => theme.baseColor};
  border-radius: ${({ theme }) => theme.blockBorderRadius};
  transition: opacity 0.15s;

  ${({ isRight }) => (isRight ? rightBorder : leftBorder)}

  &:hover {
    cursor: pointer;
    opacity: 0.85;
    color: ${({ theme }) => theme.baseColor};
  }
`;

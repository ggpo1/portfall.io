import styled, { css } from "styled-components";

export const Controls = styled.div`
  position: relative;
`;

export const Image = styled.div<{ src: string; size: string }>`
  position: relative;
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border-radius: 50%;
  background-color: #e5e5e5; // @note add to theme
  background-image: url(${({ src }) => src});

  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;

  box-shadow: 0px 0px 8px 0px rgba(229, 229, 229, 0.2) inset;
`;

const control = css`
  display: grid;
  place-items: center;
  position: absolute;
  top: 0;
  width: 30px;
  height: 100%;

  &:hover {
    cursor: pointer;
  }
`;

export const LeftControl = styled.div`
  ${control}
`;

export const RightControl = styled.div`
  ${control}
  right: 0;
`;

const rightBorder = css`
  border-top-right-radius: 36%;
  border-bottom-right-radius: 36%;
`;

const leftBorder = css`
  border-top-left-radius: 36%;
  border-bottom-left-radius: 36%;
`;

export const ControlButton = styled.button<{ isRight?: boolean }>`
  border: none;
  background-color: #000000;
  opacity: 0.7;
  width: 100%;
  height: 30%;
  color: ${({ theme }) => theme.baseColor};
  border-radius: ${({ theme }) => theme.blockBorderRadius};

  ${({ isRight }) => (isRight ? rightBorder : leftBorder)}
`;

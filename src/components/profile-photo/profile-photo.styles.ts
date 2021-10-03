import styled from "styled-components";

export const Image = styled.div<{ src: string; size: string }>`
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

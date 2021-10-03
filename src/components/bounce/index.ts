import styled, { keyframes } from "styled-components";
import { fadeInLeft, fadeInRight } from "react-animations";

export const Left = styled.div`
  animation: 1s ${keyframes`${fadeInLeft}`};
`;

export const Right = styled.div`
  animation: 1s ${keyframes`${fadeInRight}`};
`;

import styled from "styled-components";

export const Body = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.baseColor};
  box-sizing: border-box;

  * {
    box-sizing: border-box;
    color: ${({ theme }) => theme.textColorDefault}
  }
`;

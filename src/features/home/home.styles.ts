import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 16px;
  overflow-x: hidden;
  overflow-y: auto;
`;

export const FullName = styled.div`
  width: 100%;
  margin-top: 24px;
  text-align: center;
  font-weight: bold;
`;

export const CurrentJobTitle = styled.div`
  width: 70%;
  margin-top: 4px;
  font-size: 14px;
  text-align: center;
  text-decoration: underline;
  font-style: italic;
`;

export const CompanyLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.backgroundColorActive};

  &:visited {
    color: ${({ theme }) => theme.backgroundColorActive};
  }
`;

export const AboutText = styled.p`
  width: 80%;
  margin-top: 16px;
  text-indent: 20px;

  @media screen and (max-width: 505px) {
    width: 90%;
  }
`;

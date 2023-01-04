import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 16px;
`;

export const FullName = styled.div`
  margin-top: 24px;
  text-align: center;
`;

export const CurrentJobTitle = styled.div`
  margin-top: 8px;
  text-align: center;
`;

export const CompanyLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.backgroundColorActive};

  &:visited {
    color: ${({ theme }) => theme.backgroundColorActive};
  }
`;

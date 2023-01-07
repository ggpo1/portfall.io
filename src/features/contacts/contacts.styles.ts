import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: max-content;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Links = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Link = styled.a`
  display: flex;
  gap: 4px;
  text-decoration: none;

  &:hover {
    cursor: pointer;

    svg {
      stroke: ${({ theme }) => theme.backgroundColorActive};
    }
  }
`;

export const LinkIcon = styled.div`
  width: 16px;
  height: 16px;

  svg {
    width: 16px;
    height: 16px;
    margin-top: -50%;
    stroke: #e4e4e4;
  }
`;

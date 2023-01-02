import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: repeat(3, [col-start] minmax(0, 1fr));
  grid-template-rows: max-content;
  grid-auto-flow: dense;
  gap: 1rem;
  padding: 0.5rem;
`;

export const Cell = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  border-radius: 0.25rem;
  padding: 0.5rem 1rem;
  overflow: hidden;
  height: 150px;
  color: ${({ theme }) => theme.textColorDefault};
  background: linear-gradient(137.85deg, #f1f3f6 13.92%, #fff 84.77%);
  backdrop-filter: blur(4px);
  box-shadow: 5px 5px 20px rgba(150, 150, 150, 0.35);

  &:hover {
    cursor: pointer;
    transform: scale(1.001);
    z-index: 999999;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  svg {
    fill: ${({ theme }) => theme.backgroundColorActive};
  }
`;

export const Title = styled.h4`
  margin: 0;
  padding: 0;
  color: ${({ theme }) => theme.textColorDefault};
`;

export const Link = styled.a`
  text-decoration: none;
`;

export const PlayLink = styled.span`
  font-size: 12px;
  line-height: 14px;
  color: #f71e35;
`;

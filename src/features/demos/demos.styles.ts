import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  gap: 16px;
  flex-wrap: wrap;
  padding: 16px;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const Cell = styled.div`
  position: relative;
  display: flex;
  width: 300px;
  height: 150px;
  flex-direction: column;
  gap: 8px;
  border-radius: 0.25rem;
  padding: 0.5rem 1rem;
  overflow: hidden;
  color: ${({ theme }) => theme.textColorDefault};
  background: linear-gradient(137.85deg, #f1f3f6 13.92%, #fff 84.77%);
  backdrop-filter: blur(4px);
  box-shadow: 5px 5px 20px rgba(150, 150, 150, 0.35);

  &:hover {
    cursor: pointer;
    transform: scale(1.002);
    z-index: 999999;
  }


  @media screen and (max-width: 671px) {
    width: 100%;
  }
`;

export const CellPlaceholder = styled.div`
  display: flex;
  width: 300px;
  height: 150px;
  flex-shrink: 0;
  background-color: transparent;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  svg {
    fill: ${({ theme }) => theme.backgroundColorActive};
    color: ${({ theme }) => theme.backgroundColorActive};
    stroke: ${({ theme }) => theme.backgroundColorActive};
  }
`;

export const Title = styled.h4`
  margin: 0;
  padding: 0;
  color: ${({ theme }) => theme.textColorDefault};
`;

export const Link = styled.a`
  text-decoration: none;
  margin: 0;
  padding: 0;
  height: 150px;
`;

export const PlayLink = styled.span`
  font-size: 12px;
  line-height: 14px;
  color: #f71e35;
`;

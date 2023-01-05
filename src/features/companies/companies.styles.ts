import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const Map = styled.div`
  width: 100%;
  height: 100%;
  background-color: #eff0f0;
  border-radius: ${({ theme }) => theme.blockBorderRadius};

  * {
    border-radius: ${({ theme }) => theme.blockBorderRadius};
  }
`;

export const ListContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 40%;
  height: 300px;
  bottom: 8.9%;
  transform: translateX(5.6%);
  left: 0;
  z-index: 99;
  background-color: ${({ theme }) => theme.baseColor};
  border-radius: 10px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  background-color: ${({ theme }) => theme.baseColor};
  box-shadow: ${({ theme }) => theme.blockShadow};
  overflow-y: auto;
  overflow-x: hidden;
  padding: 10px;
  gap: 8px;
  border: 1px solid ${({ theme }) => theme.backgroundColorActive};
  border-bottom: none;

  @media screen and (max-width: 1450px) {
    width: 90%;
    bottom: 51.55px;
    transform: translateX(5.6%);
  }
`;

export const CompanyLogo = styled.img`
  width: 24px;
  height: 24px;
`;

export const CompanyLogoPlaceholder = styled.div`
  display: flex;
  width: 24px;
  height: 24px;
  border-radius: 4px;
  background-color: #e5e5e5;
`;

export const ListItem = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 48px;
  padding: 0 8px;
  border-radius: 4px;
  gap: 8px;

  &:hover {
    cursor: pointer;
    outline: 1px solid ${({ theme }) => theme.textColorDefault};
  }
`;

export const ListItemCenter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const ListItemTitle = styled.div`
  font-size: 13px;
  font-weight: bold;
`;

export const ListItemDescription = styled.div`
  display: block;
  font-size: 11px;
  color: rgba(3, 40, 76, 0.66);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

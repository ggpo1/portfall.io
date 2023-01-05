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
  width: 45vw;
  height: 300px;
  transform: translateX(27.5vw);
  left: 0;
  z-index: 99;
  background-color: ${({ theme }) => theme.baseColor};
  border-radius: 10px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  background-color: ${({ theme }) => theme.baseColor};
  box-shadow: 0px -7px 17px 1px rgba(34, 60, 80, 0.2);
  overflow-y: auto;
  overflow-x: hidden;
  padding: 10px;
  gap: 8px;
  border: 1px solid ${({ theme }) => theme.backgroundColorActive};
  border-bottom: none;

  @media screen and (max-width: 1450px) {
    width: calc(100vw - 20px);
    transform: translateX(10px);
    border-bottom-left-radius: ${({ theme }) => theme.blockBorderRadius};
    border-bottom-right-radius: ${({ theme }) => theme.blockBorderRadius};
  }
`;

export const CompanyLogo = styled.img`
  width: 24px;
  height: 24px;
`;

export const Resize = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 2%;
  margin-bottom: 2px;
`;

export const ResizeButton = styled.button`
  display: flex;
  width: 20%;
  height: 100%;
  flex-shrink: 0;
  background-color: ${({ theme }) => theme.textColorDefault};
  border-radius: 6px;
  opacity: 0.7;
  margin: 0;
  padding: 0;
  outline: none;
  border: none;

  &:hover {
    cursor: nw-resize;
    opacity: 1;
  }
`;

export const CompanyLogoPlaceholder = styled.div`
  display: flex;
  flex-shrink: 0;
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
  border-radius: 6px;
  gap: 8px;
  border: 1px solid transparent;

  &:hover {
    cursor: pointer;
    border-color: ${({ theme }) => theme.textColorDefault};
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

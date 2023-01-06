import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
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
  max-height: 65%;
  min-height: 15%;
  transform: translateX(27.5vw);
  left: 0;
  z-index: 99;
  background-color: ${({ theme }) => theme.baseColor};
  border-radius: 10px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  background-color: ${({ theme }) => theme.baseColor};
  box-shadow: 0px -7px 17px 1px rgba(34, 60, 80, 0.2);
  padding: 10px;
  padding-right: 0px;
  border: 1px solid ${({ theme }) => theme.backgroundColorActive};
  border-bottom: none;

  @media screen and (max-width: 1450px) {
    width: calc(100vw - 20px);
    transform: translateX(10px);
    border-bottom-left-radius: ${({ theme }) => theme.blockBorderRadius};
    border-bottom-right-radius: ${({ theme }) => theme.blockBorderRadius};
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 6px;
  padding-right: 10px;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  gap: 8px;
`;

export const CompanyLogo = styled.img`
  width: 24px;
  height: 24px;
`;

export const Resize = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  width: 100%;
  height: 6px;
  margin-bottom: 2px;

  &:hover {
    cursor: row-resize;
  }
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
    cursor: row-resize;
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

export const CurrentTitle = styled.span`
  font-size: 11px;
  color: ${({ theme }) => theme.backgroundColorActive} !important;
`;

export const ListItem = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  width: 100%;
  height: 48px;
  padding: 0 8px;
  border-radius: 6px;
  gap: 8px;
  border: 1px solid transparent;

  &:hover {
    cursor: pointer;
    border-color: rgba(116, 116, 116, 0.1);
    background-color: rgba(116, 116, 116, 0.1);
  }
`;

export const ListItemCenter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  overflow: hidden;
`;

export const ListItemTitle = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
  font-size: 13px;
  font-weight: bold;
`;

export const ListItemDescription = styled.div`
  display: block;
  width: 100%;
  font-size: 11px;
  color: rgba(3, 40, 76, 0.66) !important;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const SelectedContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const Back = styled.button`
  width: 24px;
  height: 24px;
  border: none;
  outline: none;
  background-color: transparent;
  padding: 0;
  margin: 0;

  svg {
    fill: ${({ theme }) => theme.backgroundColorActive};
  }

  &:hover {
    cursor: pointer;
  }
`;

export const SelectedHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-shrink: 0;
  height: 50px;
  gap: 8px;
  display: flex;
  font-weight: bold;
`;

export const SelectedContent = styled.div`
  display: flex;
  width: 100%;
  height: 300px;
  flex-shrink: 0;
`;

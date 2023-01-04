import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  height: 100%;
  padding: 16px;
  gap: 16px;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const Tool = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 180px;
  flex: 1;
  height: 200px;
  padding: 8px;
  border-radius: 4px;
  background-color: #edeff0;
`;

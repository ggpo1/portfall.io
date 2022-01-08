import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  /* grid-template-rows: 115px; */
  width: 100%;
  height: 100%;
`;

export const Cell = styled.div`
  position: relative;
  border-radius: 0.25rem;
  padding: 0.5rem 1rem;
  overflow: hidden;
  height: 150px;
  color: #000;
  background: linear-gradient(137.85deg, #f1f3f6 13.92%, #fff 84.77%);
  backdrop-filter: blur(4px);
  cursor: pointer;
  box-shadow: 5px 5px 20px rgba(150, 150, 150, 0.35);

  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 4rem;
    box-shadow: inset 0px -2rem 12px -1rem rgba(250, 250, 250, 0.9);
    pointer-events: none;
    grid-row: 100px;
    transition: all ease-in 0.25s;
  }
  &:after {
    content: "inactive";
    position: absolute;
    top: 2px;
    right: 2px;
    font-size: 0.6rem;
    color: #f71e35;
  }
`;

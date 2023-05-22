import { styled } from "styled-components";

export const FloorsContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
`;

export const Floor = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  border-bottom: 1px solid black;
`;

export const FloorNumber = styled.p`
  width: 150px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`;

export const FloorButton = styled.button``;

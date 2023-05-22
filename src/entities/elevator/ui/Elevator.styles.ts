import { styled } from "styled-components";

interface ElevatorContainerProps {
  currentfloor: number;
}

export const ElevatorContainer = styled.div<ElevatorContainerProps>`
  display: flex;
  height: 100px;
  justify-content: center;
  align-items: flex-end;
  position: relative;
  bottom: ${({ currentfloor }) => `${currentfloor}00px;`}
  transition: all 1s;
`;

export const ElevatorImage = styled.img`
  width: 70px;
  height: 70px;
`;

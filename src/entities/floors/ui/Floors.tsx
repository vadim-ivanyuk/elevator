import { useCallback, useContext, useMemo } from "react";
import { AppContext } from "@/shared/utils";
import {
  Floor,
  FloorsContainer,
  FloorNumber,
  FloorButton,
} from "./Floors.styles";

function Floors() {
  const { setCalledFloor } = useContext(AppContext);
  const floorsList = useMemo(() => [...Array(8).keys()].map((i) => i + 1), []);

  const callElevator = useCallback(
    (floor: number) => () => {
      setCalledFloor(floor);
    },
    [setCalledFloor]
  );

  return (
    <FloorsContainer>
      {floorsList.reverse().map((item) => (
        <Floor key={item}>
          <FloorNumber>{item}</FloorNumber>
          <FloorButton onClick={callElevator(item)}>Call elevator</FloorButton>
        </Floor>
      ))}
    </FloorsContainer>
  );
}

export default Floors;

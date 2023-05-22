import Elevator from "@/entities/elevator/ui";
import { useCallback, useContext, useEffect, useState } from "react";
import { ElevatorsListContainer } from "./ElevatorsList.styles";
import { AppContext } from "@/shared/utils";

function ElevatorsList() {
  const { calledFloor } = useContext(AppContext);
  const [elevators, setElevators] = useState([
    { currentFloor: 1, id: 1 },
    { currentFloor: 1, id: 2 },
  ]);

  const updateElevators = useCallback((calledFloor: number) => {
    setElevators((prevElevators) => {
      let callElevatorId =
        Math.abs(prevElevators[0].currentFloor - calledFloor) <=
        Math.abs(prevElevators[1].currentFloor - calledFloor)
          ? prevElevators[0].id
          : prevElevators[1].id;

      if (prevElevators[callElevatorId - 1].currentFloor === calledFloor) {
        callElevatorId =
          callElevatorId === prevElevators[0].id
            ? prevElevators[1].id
            : prevElevators[0].id;
      }

      const updatedElevators = prevElevators.map((item) => {
        if (item.id === callElevatorId) {
          return { ...item, currentFloor: calledFloor };
        } else {
          return item;
        }
      });

      return updatedElevators;
    });
  }, []);

  useEffect(() => {
    if (calledFloor) {
      updateElevators(calledFloor);
    }
  }, [calledFloor, updateElevators]);

  return (
    <ElevatorsListContainer>
      {elevators.map((item) => (
        <Elevator
          key={item.id}
          currentFloor={item.currentFloor}
        />
      ))}
    </ElevatorsListContainer>
  );
}

export default ElevatorsList;

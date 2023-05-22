import { ElevatorContainer, ElevatorImage } from "./Elevator.styles";
import elevatorImage from "./elevator.png";

interface Props {
  currentFloor: number;
}

function Elevator({ currentFloor }: Props) {
  return (
    <ElevatorContainer currentfloor={currentFloor}>
      <ElevatorImage src={elevatorImage} alt="Elevator" />
    </ElevatorContainer>
  );
}

export default Elevator;

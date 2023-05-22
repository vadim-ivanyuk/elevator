import ElevatorsList from "@/features/elevators-list/ui";
import Floors from "@/entities/floors/ui";
import { BuildingContainer } from "./Building.styles";

function Building() {
  return (
    <div>
      <BuildingContainer>
        <Floors />
        <ElevatorsList />
      </BuildingContainer>
    </div>
  );
}

export default Building;

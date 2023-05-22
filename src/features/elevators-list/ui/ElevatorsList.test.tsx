import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";

import ElevatorsList from "./ElevatorsList";

describe("ElevatorsList", () => {
  it("ElevatorsList render", () => {
    render(<ElevatorsList />);

    screen.debug();
  });
});

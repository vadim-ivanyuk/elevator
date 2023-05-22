import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";

import ElevatorsList from "./ElevatorsList";

describe("ElevatorsList", () => {
  it("ElevatorsList render", () => {
    render(<ElevatorsList />);

    screen.debug();
  });

  it("It shoud be 2 elevators", () => {
    render(<ElevatorsList />);

    const element = screen.queryAllByTestId("elevator");

    expect(element.length).toBe(2);
  });
});

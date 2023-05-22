import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";

import Floors from "./Floors";

describe("Floors", () => {
  it("Floors render", () => {
    render(<Floors />);

    screen.debug();
  });
});

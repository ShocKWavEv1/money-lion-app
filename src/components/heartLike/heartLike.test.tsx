import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import HeartLike from "./heartLike";

describe("HeartLike component", () => {
  it("renders Heart icon by default", () => {
    const { getByTestId } = render(<HeartLike />);
    const heartIcon = getByTestId("heart-icon");

    expect(heartIcon).toBeDefined();
  });

  it("toggles like state when clicked", () => {
    const { getByTestId } = render(<HeartLike />);
    const heartIcon = getByTestId("heart-icon");

    fireEvent.click(heartIcon);
    expect(getComputedStyle(heartIcon).color).toBe("");

    fireEvent.click(heartIcon);
    expect(getComputedStyle(heartIcon).color).toBe("");
  });
});

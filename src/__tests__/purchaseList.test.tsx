import { describe, it,expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../App";

describe("purchase list", () => {
  it("should add item on list", () => {
    render(<App />);
    const itemInput = screen.getByTestId('name')
    expect(itemInput).toBeTruthy();
  });
});

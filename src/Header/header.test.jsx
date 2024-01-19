import { render, screen } from "@testing-library/react";
import { describe, expect } from "vitest";
import Header from "./header";

describe("Header component", () => {
  it("Renders Header navbar", () => {
    const header = render(<Header></Header>);

    expect(header).toMatchSnapshot();
  });

  it("Renders  item number", () => {
    render(<Header ItemNumber={30}></Header>);

    expect(screen.getByText("30")).toBeInTheDocument();
  });
});

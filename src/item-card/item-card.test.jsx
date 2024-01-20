import { render, screen } from "@testing-library/react";
import { describe, expect } from "vitest";
import Card from "./item-card";

const data = {
  itemName: "GTA V",
  itemPrice: "60$",
};

describe("item card component", () => {
  it("Render header and price", () => {
    const card = render(<Card></Card>);

    expect(card).toMatchSnapshot();
  });

  it("accepts data and renders it correctly", () => {
    render(<Card {...data}></Card>);

    expect(screen.getByLabelText("item-name").textContent).toMatch("GTA V");
    expect(screen.getByLabelText("item-price").textContent).toMatch("60$");
  });
});

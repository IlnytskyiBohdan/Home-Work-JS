import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "../Header";

describe("Header Component", () => {
  test("renders TODO header", () => {
    render(<Header />);
    expect(screen.getByText("TODO")).toBeInTheDocument();
  });
});
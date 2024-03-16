import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NavBar from "../components/NavBar";

describe("NavBar", () => {
  it("renders correctly", () => {
    const { asFragment } = render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>,
    );

    const logo = screen.getAllByAltText(
      /surreal estate logo with small castle/i,
    );
    const firstLink = screen.getByText(/View Properties/i);
    const secondLink = screen.getByText(/Add a Property/i);

    expect(asFragment()).toMatchSnapshot();
    expect(logo).toBeTruthy();
    expect(firstLink).toBeTruthy();
    expect(secondLink).toBeTruthy();
  });
});
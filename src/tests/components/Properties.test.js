import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Properties from "../../components/Properties";

describe("Properties", () => {
  it("renders correctly", () => {
    const { asFragment } = render(
      <MemoryRouter>
        <Properties />
      </MemoryRouter>,
    );

    const headingElement = screen.getByText(/Properties Page/i);

    expect(asFragment()).toMatchSnapshot();
    expect(headingElement).toBeTruthy();
  });
});
import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import AddProperty from "../../components/AddProperty";

describe("AddProperty", () => {
  it("renders correctly", () => {
    const { asFragment } = render(
      <MemoryRouter>
        <AddProperty />
      </MemoryRouter>,
    );

    expect(asFragment()).toMatchSnapshot();
    const propertyTitle = screen.getByText(/Property Title/i);

    expect(propertyTitle).toBeInTheDocument();
  });
});

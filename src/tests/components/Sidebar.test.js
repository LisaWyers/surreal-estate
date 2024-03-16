import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import SideBar from "../../components/SideBar";

describe("SideBar", () => {
  it("renders correctly", () => {
    const { asFragment } = render(
      <MemoryRouter>
        <SideBar />
      </MemoryRouter>,
    );

    expect(asFragment()).toMatchSnapshot();
    expect(screen.getByText(/Filter By City/i)).toBeInTheDocument();
    expect(screen.getByText(/Manchester/i)).toBeInTheDocument();
    expect(screen.getByText(/Leeds/i)).toBeInTheDocument();
    expect(screen.getByText(/Oxford/i)).toBeInTheDocument();
    expect(screen.getByText(/Birmingham/i)).toBeInTheDocument();
    expect(screen.getByText(/Clear Filter/i)).toBeInTheDocument();
    expect(screen.getByText(/Price Ascending/i)).toBeInTheDocument();
    expect(screen.getByText(/Price Descending/i)).toBeInTheDocument();
    expect(screen.getByText(/Clear Sort/i)).toBeInTheDocument();
  });
});
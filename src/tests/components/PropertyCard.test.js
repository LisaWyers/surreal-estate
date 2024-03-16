import React from "react";
import { render, screen } from "@testing-library/react";
// import { toBeInTheDocument } from "@testing-library/jest-dom/matchers";
import PropertyCard from "../../components/PropertyCard";

describe("PropertyCard", () => {
  const validProps = {
    title: "Test Title",
    type: "Test Type",
    bedrooms: 3,
    bathrooms: 1,
    price: 12345,
    city: "Test City",
    email: "test@email.com",
  };

  it("renders correctly", () => {
    const { asFragment } = render(
      <PropertyCard
        title={validProps.title}
        type={validProps.type}
        bedrooms={validProps.bedrooms}
        bathrooms={validProps.bathrooms}
        price={validProps.price}
        city={validProps.city}
        email={validProps.email}
      />,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correct value for title prop", () => {
    render(<PropertyCard title={validProps.title} />);

    expect(screen.getByText(/Test Title/i)).toBeTruthy();
    expect(screen.getByText(/Test Title/i)).toBeInTheDocument();
  });

  it("renders correct value for type prop", () => {
    render(<PropertyCard type={validProps.type} />);

    expect(screen.getByText(/Test Type/i)).toBeTruthy();
    expect(screen.getByText(/Test Type/i)).toBeInTheDocument();
  });

  it("renders correct value for bedrooms prop", () => {
    render(<PropertyCard bedrooms={validProps.bedrooms} />);

    expect(screen.getByTestId("property-bedrooms")).toBeTruthy();
    expect(screen.getByTestId("property-bathrooms")).toBeInTheDocument();
  });

  it("renders correct value for bathrooms prop", () => {
    render(<PropertyCard bathrooms={validProps.bathrooms} />);

    expect(screen.getByTestId("property-bathrooms")).toBeTruthy();
  });

  it("renders correct value for price prop", () => {
    render(<PropertyCard price={validProps.price} />);

    expect(screen.getByText(/12345/i)).toBeTruthy();
    expect(screen.getByText(/12345/i)).toBeInTheDocument();
  });

  it("renders correct value for city prop", () => {
    render(<PropertyCard city={validProps.city} />);

    expect(screen.getByText(/Test City/i)).toBeTruthy();
    expect(screen.getByText(/Test City/i)).toBeInTheDocument();
  });

  it("renders correct value for email prop", () => {
    render(<PropertyCard email={validProps.email} />);

    expect(screen.getByText(/Email/i)).toBeTruthy();
    expect(screen.getByText(/Email/i)).toBeInTheDocument();
  });
});
import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Alert from "../../components/Alert";

describe("Alert", () => {
  it("renders an error message", () => {
    const { getByText, asFragment } = render(<Alert message="Error!" />);

    expect(getByText(/Error/).textContent).toBe("Error!");
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders a success message", () => {
    const { getByText, asFragment } = render(
      <Alert message="Success!!!" success />,
    );

    expect(getByText(/Success!!!/).textContent).toBe("Success!!!");
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders nothing if message is not truthy", () => {
    const { asFragment } = render(<Alert message="" />);
    const alert = asFragment();

    expect(alert).toMatchSnapshot();
  });
});
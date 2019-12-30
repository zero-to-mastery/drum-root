import React from "react";
import { render } from "@testing-library/react";
import Error from "./index";

beforeAll(() => {
  jest.spyOn(console, "warn").mockImplementation(() => {});
});

afterAll(() => {
  console.warn.mockRestore();
});

describe("Error component", () => {
  test("should render properly with specific props", () => {
    const { getByText } = render(<Error {...{ error: { statusCode: 404 } }} />);
    expect(getByText(/not found/i, { selector: "h2" })).toBeInTheDocument();
    expect(
      getByText(/requested file was not found/i, { selector: "h3" })
    ).toBeInTheDocument();
  });
});

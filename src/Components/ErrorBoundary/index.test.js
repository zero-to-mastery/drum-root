import React from "react";
import { render } from "@testing-library/react";
import ErrorBoundary from "./index";
import { logError as mockLogError } from "../../utils/common-functions";

jest.mock("../../utils/common-functions");

beforeAll(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});

afterAll(() => {
  console.error.mockRestore();
  console.warn.mockRestore();
});

afterEach(() => {
  jest.clearAllMocks();
});

const Bomb = ({ shouldThrow }) => {
  if (shouldThrow) {
    throw { statusCode: 404 };
  } else {
    return null;
  }
};

describe("ErrorBoundary component", () => {
  test("should render correctly when there is an error", () => {
    mockLogError.mockResolvedValueOnce();
    const { rerender, getByText, queryByText } = render(
      <ErrorBoundary>
        <Bomb />
      </ErrorBoundary>
    );

    expect(mockLogError).not.toHaveBeenCalled();
    expect(console.error).not.toHaveBeenCalled();
    expect(
      queryByText(/not found/i, { selector: "h2" })
    ).not.toBeInTheDocument();
    expect(
      queryByText(/Requested file was not found/i, { selector: "h3" })
    ).not.toBeInTheDocument();

    rerender(
      <ErrorBoundary>
        <Bomb shouldThrow={true} />
      </ErrorBoundary>
    );
    const error = { statusCode: expect.any(Number) };
    const info = { componentStack: expect.stringContaining("Bomb") };
    expect(mockLogError).toHaveBeenCalledWith(error, info);
    expect(mockLogError).toHaveBeenCalledTimes(1);
    expect(console.error).toHaveBeenCalledTimes(2);

    expect(getByText(/not found/i, { selector: "h2" })).toBeInTheDocument();
    expect(
      getByText(/Requested file was not found/i, { selector: "h3" })
    ).toBeInTheDocument();
  });
});

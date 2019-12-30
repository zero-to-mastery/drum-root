import React from "react";
import { render } from "@testing-library/react";
import Input from "./index";

describe("Input component", () => {
  test("should render properly", () => {
    const { container } = render(<Input type="submit" />);

    expect(container.firstChild).toHaveAttribute("type", "submit");
  });
});

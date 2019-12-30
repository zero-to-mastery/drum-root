import React from "react";
import { render } from "@testing-library/react";
import LoopTile from "./index";

test("renders DrumLoopTile with title and link correctly", () => {
  const props = { title: "Test Title", href: "Test href" };
  const { getByText } = render(<LoopTile {...props} />);
  const title = getByText(/test title/i);
  expect(title).toHaveTextContent(props.title);
  expect(title).toHaveAttribute("href", props.href);
});

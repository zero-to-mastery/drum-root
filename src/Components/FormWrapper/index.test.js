import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import FormWrapper from "./index";

const mockSubmitFn = jest.fn();

const Button = () => <button type="submit">Submit</button>;

describe("FormWrapper component", () => {
  test("should render properly", async () => {
    const errorMessage = "Submit Error";
    const { getByText, rerender } = render(
      <FormWrapper onSubmit={mockSubmitFn.mockResolvedValueOnce()}>
        <Button />
      </FormWrapper>
    );
    await wait(() => fireEvent.click(getByText(/submit/i)));
    expect(getByText(/success/i)).toBeInTheDocument();
    rerender(
      <FormWrapper
        onSubmit={mockSubmitFn.mockRejectedValueOnce(new Error(errorMessage))}
      >
        <Button />
      </FormWrapper>
    );
    await wait(() => fireEvent.click(getByText(/submit/i)));

    expect(getByText(errorMessage)).toBeInTheDocument();
  });
});

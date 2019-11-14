import React from "react";
import { mount } from "enzyme";
import ErrorBoundary from "./index";

describe("ErrorBoundary component", () => {
  test("should render correctly when there is an error", () => {
    const wrapper = mount(
      <ErrorBoundary>
        <p>Content</p>
      </ErrorBoundary>
    );
    wrapper.setState({ error: { statusCode: 404 } });
    expect(wrapper.exists()).toBe(true);
  });
});

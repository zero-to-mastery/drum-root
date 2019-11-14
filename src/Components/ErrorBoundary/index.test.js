import React from "react";
import { shallow } from "enzyme";
import ErrorBoundary from "./index";

describe("ErrorBoundary component", () => {
  test("should render correctly when there is an error", () => {
    const wrapper = shallow(<ErrorBoundary />);
    wrapper.setState({ error: { statusCode: 404 } });
    expect(wrapper.exists()).toBe(true);
  });
});

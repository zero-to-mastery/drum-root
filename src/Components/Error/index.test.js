import React from "react";
import { mount } from "enzyme";
import Error from "./index";

describe("Error component", () => {
  test("should render properly", () => {
    const wrapper = mount(<Error {...{ error: { statusCode: 404 } }} />);
    expect(wrapper.exists()).toBe(true);
  });
});

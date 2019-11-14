import React from "react";
import { shallow } from "enzyme";
import Error from "./index";

describe("Error component", () => {
  test("should render properly", () => {
    const wrapper = shallow(<Error {...{ error: { statusCode: 404 } }} />);
    expect(wrapper.exists()).toBe(true);
  });
});

import React from "react";
import { shallow } from "enzyme";
import Input from "./index";

describe("Input component", () => {
  test("should render properly", () => {
    const wrapper = shallow(<Input />);
    expect(wrapper.exists()).toBe(true);
  });
});

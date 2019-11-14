import React from "react";
import { mount } from "enzyme";
import Input from "./index";

describe("Input component", () => {
  test("should render properly", () => {
    const wrapper = mount(<Input />);
    expect(wrapper.exists()).toBe(true);
  });
});

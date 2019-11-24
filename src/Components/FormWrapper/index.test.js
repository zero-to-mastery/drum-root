import React from "react";
import { mount } from "enzyme";
import FormWrapper from "./index";

describe("FormWrapper component", () => {
  test("should render properly", () => {
    const wrapper = mount(<FormWrapper onSubmit={() => {}} />);
    expect(wrapper.exists()).toBe(true);
  });
});

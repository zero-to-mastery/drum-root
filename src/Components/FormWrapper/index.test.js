import React from "react";
import { shallow } from "enzyme";
import FormWrapper from "./index";

describe("FormWrapper component", () => {
  test("should render properly", () => {
    const wrapper = shallow(<FormWrapper onSubmit={() => {}} />);
    expect(wrapper.exists()).toBe(true);
  });
});

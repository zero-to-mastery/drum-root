import React from "react";
import { shallow } from "enzyme";
import FormWrapper from "../../Components/FormWrapper";

describe("FormWrapper component", () => {
  let wrapper;
  const onSubmit = jest.fn(() => Promise.resolve());

  beforeEach(() => {
    wrapper = shallow(<FormWrapper onSubmit={onSubmit} />);
  });
  test("should render properly", () => {
    expect(wrapper).toMatchSnapshot();
  });
  test("onSubmit prop should be called when submitting form", () => {
    wrapper
      .find("form")
      .at(0)
      .prop("onSubmit")();
    expect(onSubmit).toHaveBeenCalled();
  });
});

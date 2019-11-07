import React from "react";
import { shallow } from "enzyme";
import Error from "../../Components/Error";

describe("Error component", () => {
  test("should render properly", () => {
    const wrapper = shallow(<Error {...{ error: { statusCode: 404 } }} />);
    expect(wrapper).toMatchSnapshot();
  });
});

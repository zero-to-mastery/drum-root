import React from "react";
import ReactDOM from "react-dom";
import LoopTile from "./index";

import Enzyme, { shallow, render, mount } from "enzyme";
import toJson from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

/*it("renders correctly enzyme", () => {
    const wrapper = shallow(<LoopTile />)
  
    expect(toJson(wrapper)).toMatchSnapshot();
  });*/
// incorrect function assignment in the onClick method
// will still pass the tests.

test("renders correctly enzyme", () => {
  const wrapper = mount(<LoopTile />);

  expect(wrapper.exists()).toBe(true);
});

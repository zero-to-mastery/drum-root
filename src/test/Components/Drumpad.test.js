import React from "react";
import { shallow } from "enzyme";
import Drumpad from "../../Components/DrumPad";
import { mockLayout1 } from "../../mockData/mockLayout";

describe("Drumpad component", () => {
  describe("component rendering", () => {
    test("renders properly", () => {
      const wrapper = shallow(<Drumpad layout={mockLayout1} />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});

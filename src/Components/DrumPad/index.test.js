import React from "react";
import { mount } from "enzyme";
import Drumpad from "./index";
import { mockLayout1 } from "../../mockData/mockLayout";

describe("Drumpad component", () => {
  describe("component rendering", () => {
    test("renders properly with required props", () => {
      const wrapper = mount(
        <Drumpad layout={mockLayout1} count={1} swapBeat={jest.fn()} />
      );
      expect(wrapper.exists()).toBe(true);
    });
  });
});

import React from "react";
import { storiesOf } from "@storybook/react";
import "bootstrap/dist/css/bootstrap.css";
import { withKnobs, number, array } from "@storybook/addon-knobs";
import DrumPad from "./index";

const knobValues = {
  tableNumber: "tableNumber",
  layoutProps: "layout",
  countDefault: 1,
  layoutArray: [
    {
      name: "hiHat",
      icon: "🇹🇼",
      beats: [true, true, true, true]
    },
    {
      name: "bass",
      icon: "🛢️",
      beats: [true, false, false, false]
    },
    {
      name: "snare",
      icon: "🥁",
      beats: [false, false, true, false]
    }
  ]
};

const stories = storiesOf("DrumPad", module);

stories.add("Drum pad style", () => {
  const { tableNumber, countDefault, layoutProps, layoutArray } = knobValues;
  let count = number(tableNumber, countDefault);
  let layout = array(layoutProps, layoutArray);

  return <DrumPad {...{ count, layout }} />;
});

stories.addDecorator(withKnobs);

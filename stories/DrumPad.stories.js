import React from "react";
import { storiesOf } from "@storybook/react";
import "bootstrap/dist/css/bootstrap.css";
import { withKnobs, number, array } from "@storybook/addon-knobs";
import DrumPad from "../src/Components/DrumPad/index";

const stories = storiesOf("DrumPad", module);

stories.add("Drum pad style", () => {
  const divStyle = {
    width: "30px",
    height: "30px"
  };
  // lines 15 to 25 exist only for testing no need to implement in the main code
  const tableNumber = "tableNumber";
  const layoutProps = "layout";
  const countDefault = 1;
  const layoutArray = [
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
    { name: "snare", icon: "🥁", beats: [false, false, true, false] }
  ];
  let count = number(tableNumber, countDefault);
  let layout = array(layoutProps, layoutArray);

  return <DrumPad {...{ count, layout }} />;
});

stories.addDecorator(withKnobs);

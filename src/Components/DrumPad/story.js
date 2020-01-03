import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, object, select } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import DrumPad from "./index";

const returnKnobs = () => ({
  count: select("Count", [1, 2, 3, 4], 1),
  layout: object("Layout", [
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
  ])
});

storiesOf("Form/Button", module)
  .addDecorator(withKnobs)
  .add("Drum pad style", () => {
    const knobs = returnKnobs();
    return <DrumPad {...knobs} swapBeat={action("swapBeat")} />;
  });

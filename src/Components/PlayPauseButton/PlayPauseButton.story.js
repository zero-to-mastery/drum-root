import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, boolean, color, number } from "@storybook/addon-knobs";
import PlayPauseButton from "./index";

const returnKnobs = () => ({
  isPlay: boolean("isPlay", false),
  color: color("color", "#000"),
  size: number("size", 48)
});

storiesOf("PlayPauseButton", module)
  .addDecorator(withKnobs)
  .add("with default", () => {
    return <PlayPauseButton />;
  })
  .add("with different props", () => {
    const knobs = returnKnobs();
    return <PlayPauseButton {...knobs} />;
  });

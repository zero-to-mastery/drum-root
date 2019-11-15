import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, color, text } from "@storybook/addon-knobs";
import CustomButton from "./index";

const returnKnobs = () => ({
  color: color("Color"),
  className: text("Class"),
  title: text("Button text"),
  bgColor: color("Background Color")
});

storiesOf("CustomButton", module)
  .addDecorator(withKnobs)
  .add("Default", () => {
    const knobs = returnKnobs();
    return <CustomButton {...knobs} />;
  });

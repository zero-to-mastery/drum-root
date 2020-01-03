import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, color, text } from "@storybook/addon-knobs";
import CustomButton from "./index";

const returnKnobs = () => ({
  color: color("Color", "#BADA55"),
  className: text("Class", "Assigned class"),
  title: text("Button text", "Default button text"),
  bgColor: color("Fill Color", "transparent")
});

storiesOf("CustomButton", module)
  .addDecorator(withKnobs)
  .add("Default", () => {
    const knobs = returnKnobs();
    return <CustomButton {...knobs} />;
  });

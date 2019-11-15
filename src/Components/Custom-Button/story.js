import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, color, text } from "@storybook/addon-knobs";
// import { action } from "@storybook/addon-actions";
import CustomButton from "./index";

// export const defaultButton = {
//   color: "#C13F3F",
//   className: "",
//   title: "Custom Button",
//   bgColor: "transparent"
// };

const returnKnobs = () => ({
  color: color("Color"),
  className: text("Class"),
  title: text("Button text"),
  bgColor: color("Background Color")
  // const defaultValue = '#ff00ff';
  // const value = color(defaultValue);
});

storiesOf("CustomButton", module)
  .addDecorator(withKnobs)
  .add("Default", () => {
    const knobs = returnKnobs();
    return <CustomButton {...knobs} />;
  });

import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import CustomButton from "./index";

export const defaultButton = {
  color: "#C13F3F",
  className: "",
  title: "Custom Button",
  bgColor: "transparent"
};

export const primaryButton = {
  color: "#540000",
  className: "",
  title: "Custom Button",
  bgColor: "#E86F6F"
};

storiesOf("CustomButton", module)
  .add("Default", () => (
    <CustomButton
      color={defaultButton.color}
      className={defaultButton.className}
      title={defaultButton.title}
      bgColor={defaultButton.bgColor}
    />
  ))
  .add("Primary", () => (
    <CustomButton
      color={primaryButton.color}
      className={primaryButton.className}
      title={primaryButton.title}
      bgColor={primaryButton.bgColor}
    />
  ));

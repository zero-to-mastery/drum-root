import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, object, select } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import SoundUploader from "./index";

storiesOf("SoundUploader", module).add("Default", () => {
  return <SoundUploader />;
});

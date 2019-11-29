import React from "react";
import { storiesOf } from "@storybook/react";
import Loader from "./index";

storiesOf("Loader", module).add("with default", () => {
  return <Loader />;
});

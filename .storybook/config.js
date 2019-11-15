import { configure } from "@storybook/react";

const loadStories = () => {
  const req = require.context("../src/Components", true, /.story.js$/);
  req.keys().forEach(filename => req(filename));
};


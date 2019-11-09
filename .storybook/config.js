import { configure } from "@storybook/react";

// automatically import all files ending in *.stories.js
const req = require.context("../src/Components", true, /\.stories\.js$/);

configure(req, module);

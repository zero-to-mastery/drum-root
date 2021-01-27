import { configure } from '@storybook/react';

// automatically import all files ending in *.stories.js
const loadStories = () => {
  const req = require.context('../src/Components', true, /.story.js$/);
  req.keys().forEach(filename => req(filename));
};

configure(loadStories, module);

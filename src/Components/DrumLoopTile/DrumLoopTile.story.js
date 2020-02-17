import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import LoopTile from './index';

const returnKnobs = () => ({
  href: text('href', '#'),
  title: text('title', 'title')
});

storiesOf('DrumLoopTile', module)
  .addDecorator(withKnobs)
  .add('with default', () => {
    return <LoopTile />;
  })
  .add('with different props', () => {
    const knobs = returnKnobs();
    return <LoopTile {...knobs} />;
  });

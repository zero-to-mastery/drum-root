import React from 'react';
import { storiesOf } from '@storybook/react';
import SoundUploader from './index';

storiesOf('SoundUploader', module).add('Default', () => {
  return <SoundUploader />;
});

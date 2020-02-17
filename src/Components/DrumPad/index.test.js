import React from 'react';
import { render } from '@testing-library/react';
import Drumpad from './index';
import mockLayout1 from '../../mockData/mockLayout';

describe('Drumpad component', () => {
  describe('component rendering', () => {
    test('renders properly with required props', () => {
      const { getAllByLabelText } = render(
        <Drumpad layout={mockLayout1} count={1} swapBeat={jest.fn()} />
      );
      for (let i = 0; i < mockLayout1.length; i++) {
        expect(getAllByLabelText(mockLayout1[i].name).length).toBe(
          mockLayout1[i].beats.filter(b => b === true).length
        );
      }
    });
  });
});

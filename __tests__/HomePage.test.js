import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';

import HomePage from '../src/components/HomePage';

describe('Home Page', () => {
  it('Go to AboutPage', () => {
    const page = render(<HomePage />);

    const aboutButton = page.getByTestId('aboutButton');

    fireEvent.press(aboutButton);
  });
});

import React from 'react';
import {render} from '@testing-library/react-native';

const HomePage = require('../src/components/HomePage');

describe('Home Page', () => {
  it('Go to AboutPage', () => {
    const page = render(<HomePage />);

    const aboutButton = page.getByTestId('aboutButton');
  });
});

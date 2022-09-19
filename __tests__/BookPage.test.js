import React from 'react';
import {render} from '@testing-library/react-native';

import BookPage from '../src/components/BookPage';

describe('Book Page', () => {
  it('Go to LikePage', () => {
    const page = render(<BookPage />);

    const likeButton = page.getByTestId('likeButton');
  });
});

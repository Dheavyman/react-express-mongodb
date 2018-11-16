import React from 'react';
import TestRenderer from 'react-test-renderer';

import { GroceryItemList } from './GroceryItemList';

describe('GroceryItemList component', () => {
  let props;
  beforeEach(() => {
    props = {
      items: [{
        name: 'Pizza',
        purchased: false
      }, {
        name: 'Malt',
        purchased: false
      }],
      actions: {
        addGroceryItem: jest.fn(),
        updateGroceryItem: jest.fn(),
        deleteGroceryItem: jest.fn()
      }
    };
  });

  it('should render component', () => {
    const renderer = TestRenderer.create(<GroceryItemList {...props} />);

    expect(renderer.toJSON()).toMatchSnapshot();
  });
});

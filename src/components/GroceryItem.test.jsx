import React from 'react';
import TestRenderer from 'react-test-renderer';

import GroceryItem from './GroceryItem';

describe('GroceryItem component', () => {
  let props;
  beforeEach(() => {
    props = {
      item: {
        name: 'Honey',
        purchased: false
      },
      actions: {
        updateGroceryItem: jest.fn(),
        deleteGroceryItem: jest.fn()
      }
    };
  });
  it('should render the component', () => {
    const renderer = TestRenderer.create(<GroceryItem {...props} />);

    expect(renderer.toJSON()).toMatchSnapshot();
  });
  it('should call togglePurchased handler on click', () => {
    const renderer = TestRenderer.create(<GroceryItem {...props} />);

    renderer.root.findAllByType('form')[0].props.onSubmit(
      { preventDefault: jest.fn()});

    expect(props.actions.updateGroceryItem).toHaveBeenCalled();
  });
  it('should call deleteItem handler on click', () => {
    const renderer = TestRenderer.create(<GroceryItem {...props} />);

    renderer.root.findAllByType('form')[1].props.onSubmit(
      { preventDefault: jest.fn()});

    expect(props.actions.deleteGroceryItem).toHaveBeenCalled();
  });
})

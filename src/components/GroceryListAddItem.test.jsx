import React from 'react';
import TestRenderer from 'react-test-renderer';

import GroceryListAddItem from './GroceryListAddItem';

describe('GroceryListAddItem component', () => {
  let props;
  beforeEach(() => {
    props = {
      input: 'Sugar',
      handleChangeInputName: jest.fn(),
      addItem: jest.fn()
    };
  });

  it('should render the component', () => {
    const renderer = TestRenderer.create(<GroceryListAddItem {...props} />);

    expect(renderer.toJSON()).toMatchSnapshot();
  });
  it('should call addItem handler to add a new grocery item', () => {
    const renderer = TestRenderer.create(<GroceryListAddItem {...props} />);

    renderer.root.findAllByType('form')[0].props.onSubmit(
      { preventDefault: jest.fn()});

    expect(props.addItem).toHaveBeenCalled();
  });
});

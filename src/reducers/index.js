import * as actionTypes from '../actions/actionTypes';

const initialState = {
  items: [{
    name: 'Ice cream',
  }, {
    name: 'Waffles',
  }, {
    name: 'Candy',
    purchased: true,
  }, {
    name: 'Snarks',
  }]
};

const setGroceryItemBought = (state, item, isBought) => {
  const updatedItems = state.items.map(_item => {
    if(_item.name === item.name) {
      _item.purchased = isBought || false;
      return _item;
    }
    return _item;
  });
  return updatedItems;
};

/**
 * Grocery reducer
 *
 * @param {object} [state=initialState] - State
 * @param {object} action - Action
 *
 * @returns {object} State
 */
const groceryReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_GROCERY_ITEM_SUCCESS:
      return {
        ...state,
        items: [
          ...state.items,
          action.payload
        ]
      };
    case actionTypes.BUY_GROCERY_ITEM_SUCCESS:
      return {
        ...state,
        items: setGroceryItemBought(state, action.payload, true)
      }
    case actionTypes.RETURN_GROCERY_ITEM_SUCCESS:
      return {
        ...state,
        items: setGroceryItemBought(state, action.payload, false)
      }
    case actionTypes.DELETE_GROCERY_ITEM_SUCCESS: {
      const itemIndex = state.items
        .findIndex(item => item.name === action.payload.name);
      return {
        ...state,
        items: [
          ...state.items.slice(0, itemIndex),
          ...state.items.slice(itemIndex + 1)
        ]
      };
    }
    default:
      return state;
  }
};

export default groceryReducer;

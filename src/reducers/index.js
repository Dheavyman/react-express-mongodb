import * as actionTypes from '../actions/actionTypes';

const initialState = {
  items: [],
  error: null
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
    case actionTypes.FETCH_GROCERY_ITEMS_SUCCESS:
      return {
        ...state,
        items: action.payload,
        error: null
      };
    case actionTypes.FETCH_GROCERY_ITEMS_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    case actionTypes.ADD_GROCERY_ITEM_SUCCESS:
      return {
        ...state,
        items: [
          ...state.items,
          action.payload
        ],
        error: null
      };
    case actionTypes.ADD_GROCERY_ITEM_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    case actionTypes.UPDATE_GROCERY_ITEM_SUCCESS: {
      const updatedItems = state.items.map(item => {
        if (item._id === action.payload._id) {
          return {
            ...item,
            ...action.payload
          };
        }
        return item;
      });
      return {
        ...state,
        items: updatedItems,
        error: null
      }
    }
    case actionTypes.UPDATE_GROCERY_ITEM_FAILURE:
      return {
        ...state,
        error: action.payload
      }
    case actionTypes.DELETE_GROCERY_ITEM_SUCCESS: {
      const itemIndex = state.items
        .findIndex(item => item._id === action.payload._id);
      return {
        ...state,
        items: [
          ...state.items.slice(0, itemIndex),
          ...state.items.slice(itemIndex + 1)
        ],
        error: null
      };
    }
    case actionTypes.DELETE_GROCERY_ITEM_FAILURE:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state;
  }
};

export default groceryReducer;

import * as actionTypes from './actionTypes';

/**
 * Add grocery item success action creator
 *
 * @param {object} item - Grocery tem
 *
 * @returns {object} Add grocery item success action
 */
const addGroceryItemSuccess = item => ({
  type: actionTypes.ADD_GROCERY_ITEM_SUCCESS,
  payload: item
});

/**
 * Delete grocery item success action creator
 *
 * @param {object} item - Grocery item
 *
 * @returns {object} Delete grocery item success action
 */
const deleteGroceryItemSuccess = item => ({
  type: actionTypes.DELETE_GROCERY_ITEM_SUCCESS,
  payload: item
});

/**
 * Add grocery item async action creator
 *
 * @param {object} item - Grocery item
 *
 * @returns {any} Dispatch action creators
 */
export const addGroceryItem = item => (dispatch) => {
  dispatch(addGroceryItemSuccess(item));
};

/**
 * Delete grocery item async action creator
 *
 * @param {object} item - Grocery item
 *
 * @returns {any} Dispatch action creators
 */
export const deleteGroceryItem = item => (dispatch) => {
  dispatch(deleteGroceryItemSuccess(item));
};

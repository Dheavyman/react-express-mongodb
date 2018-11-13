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
 * Buy grocery item success action creator
 *
 * @param {object} item - Grocery item
 *
 * @returns {object} Buy grocery item success action
 */
const buyGroceryItemSuccess = item => ({
  type: actionTypes.BUY_GROCERY_ITEM_SUCCESS,
  payload: item
});

/**
 * Return grocery item success action creator
 *
 * @param {object} item - Grocery item
 *
 * @returns {object} Return grocery item success action
 */
const returnGroceryItemSuccess = item => ({
  type: actionTypes.RETURN_GROCERY_ITEM_SUCCESS,
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
 * Buy grocery item async action creator
 *
 * @param {object} item - Grocery item
 *
 * @returns {any} Dispatch action creators
 */
export const buyGroceryItem = item => (dispatch) => {
  dispatch(buyGroceryItemSuccess(item));
}

/**
 * Return grocery item async action creator
 *
 * @param {object} item - Grocery item
 *
 * @returns {any} Dispatch action creators
 */
export const returnGroceryItem = item => (dispatch) => {
  dispatch(returnGroceryItemSuccess(item));
}

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

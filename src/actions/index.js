import * as actionTypes from './actionTypes';

const BASE_URL = 'http://127.0.0.1:5500/api';

/**
 * Fetch grocery items success action creator
 *
 * @param {array} items - Grocery items
 *
 * @returns {object} Fetch grocery item success action
 */
const fetchGroceryItemsSuccess = items => ({
  type: actionTypes.FETCH_GROCERY_ITEMS_SUCCESS,
  payload: items
});

/**
 * Fetch grocery items failure action creator
 *
 * @param {string} error - Error message
 *
 * @returns {object} Fetch grocery item failure action
 */
const fetchGroceryItemsFailure = error => ({
  type: actionTypes.FETCH_GROCERY_ITEMS_FAILURE,
  payload: error
});

/**
 * Add grocery item success action creator
 *
 * @param {object} item - Grocery item
 *
 * @returns {object} Add grocery item success action
 */
const addGroceryItemSuccess = item => ({
  type: actionTypes.ADD_GROCERY_ITEM_SUCCESS,
  payload: item
});

/**
 * Add grocery item failure action creator
 *
 * @param {object} error - Error message
 *
 * @returns {object} Add grocery item failure action
 */
const addGroceryItemFailure = error => ({
  type: actionTypes.ADD_GROCERY_ITEM_FAILURE,
  payload: error
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
 * Delete grocery item failure action creator
 *
 * @param {object} error - Error message
 *
 * @returns {object} Delete grocery item failure action
 */
const deleteGroceryItemFailure = error => ({
  type: actionTypes.DELETE_GROCERY_ITEM_FAILURE,
  payload: error
});

/**
 * Update grocery item success action creator
 *
 * @param {object} item - Grocery item
 *
 * @returns {object} Buy grocery item success action
 */
const updateGroceryItemSuccess = item => ({
  type: actionTypes.UPDATE_GROCERY_ITEM_SUCCESS,
  payload: item
});

/**
 * Update grocery item failure action creator
 *
 * @param {object} error - Error message
 *
 * @returns {object} Buy grocery item failure action
 */
const updateGroceryItemFailure = error => ({
  type: actionTypes.UPDATE_GROCERY_ITEM_FAILURE,
  payload: error
});

/**
 * Fetch grocery items async action creator
 *
 * @param {object} items - Grocery items
 *
 * @returns {any} Dispatch action creators
 */
export const fetchGroceryItems = () => async (dispatch) => {
  try {
    const response = await fetch(`${BASE_URL}/items`);

    if (response.ok) {
      const jsonData = await response.json();

      dispatch(fetchGroceryItemsSuccess(jsonData.data));
    } else {
      throw new Error(response.statusText);
    }
  } catch(error) {
      dispatch(fetchGroceryItemsFailure(error.message));
  }
};

/**
 * Add grocery item async action creator
 *
 * @param {object} item - Grocery item
 *
 * @returns {any} Dispatch action creators
 */
export const addGroceryItem = item => async (dispatch) => {
  try {
    const response = await fetch(`${BASE_URL}/items`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item)
    });
    const jsonData = await response.json();

    if (response.ok) {
      dispatch(addGroceryItemSuccess(jsonData.data));
    } else {
      throw new Error(jsonData.message);
    }
  } catch(error) {
      dispatch(addGroceryItemFailure(error.message));
  }
};

/**
 * Update grocery item async action creator
 *
 * @param {object} item - Grocery item
 *
 * @returns {any} Dispatch action creators
 */
export const updateGroceryItem = item => async (dispatch) => {
  try {
    const response = await fetch(`${BASE_URL}/items/${item._id}`, {
      method: 'PUT',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item)
    });

    if (response.ok) {
      const jsonData = await response.json();

      dispatch(updateGroceryItemSuccess(jsonData.data));
    } else {
      throw new Error(response.statusText);
    }
  } catch(error) {
      dispatch(updateGroceryItemFailure(item));
  }
};

/**
 * Delete grocery item async action creator
 *
 * @param {object} item - Grocery item
 *
 * @returns {any} Dispatch action creators
 */
export const deleteGroceryItem = item => async (dispatch) => {
  try {
    const response = await fetch(`${BASE_URL}/items/${item._id}`, {
      method: 'DELETE',
      mode: 'cors',
    });

    if (response.ok) {
      dispatch(deleteGroceryItemSuccess(item));
    } else {
      throw new Error(response.statusText);
    }
  } catch(error) {
      dispatch(deleteGroceryItemFailure(error.message));
  }
};

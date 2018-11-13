import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  input: PropTypes.string.isRequired,
  handleChangeInputName: PropTypes.func.isRequired,
  addItem: PropTypes.func.isRequired
};

/**
 * Add grocery item component
 *
 * @param {string} input - grocery input
 * @param {function} handleChangeInputName - Change input name handler
 * @param {function} addItem - Add item handler
 *
 * @returns {object} React element
 */
const GroceryListAddItem = ({ input, handleChangeInputName, addItem }) => (
  <div className="col-sm pl-4">
    <form className="form-inline" onSubmit={addItem}>
      <div className="form-group mt-3 mt-sm-0">
        <label htmlFor="inputGroceryItem" className="sr-only">Grocery item</label>
        <input
          id="inputGroceryItem"
          type="text"
          className="form-control"
          placeholder="Grocery item"
          value={input}
          onChange={handleChangeInputName}
        />
      </div>
      <button type="submit" className="btn btn-outline-primary">
        Add Item
      </button>
    </form>
  </div>
);

GroceryListAddItem.propTypes = propTypes;

export default GroceryListAddItem;

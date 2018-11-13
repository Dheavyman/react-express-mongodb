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
  <div className="grocery-addItem">
    <form action="" onSubmit={addItem}>
      <input
        type="text"
        value={input}
        onChange={handleChangeInputName}
      />
      <button type="submit">Add Item</button>
    </form>
  </div>
);

GroceryListAddItem.propTypes = propTypes;

export default GroceryListAddItem;

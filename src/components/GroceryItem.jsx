import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    purchased: PropTypes.bool
  }).isRequired,
  actions: PropTypes.shape({
    deleteGroceryItem: PropTypes.func.isRequired
  }).isRequired
};

/**
 * Grocery item component
 *
 * @class GroceryItem
 * @extends {Component}
 */
class GroceryItem extends Component {
  /**
   * Creates an instance of GroceryItem.
   *
   * @param {object} props - Properties passed to component
   * @memberof GroceryItem
   */
  constructor(props) {
    super(props);
    this.deleteItem = this.deleteItem.bind(this);
  }

  deleteItem(event) {
    event.preventDefault();
    const { item, actions } = this.props;

    actions.deleteGroceryItem(item)
  }
  /**
   * Render method
   *
   * @returns {object} React element
   * @memberof GroceryItem
   */
  render() {
    const { item } = this.props;

    return (
      <div>
        <div>
          <h4 className={item.purchased ? 'strike-through' : ''}>
            {item.name}
          </h4>
        </div>
        <form className="three-columns" onSubmit={this.deleteItem}>
          <button type="submit">&times;</button>
        </form>
      </div>
    );
  }
}

GroceryItem.propTypes = propTypes;

export default GroceryItem;

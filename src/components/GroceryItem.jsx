import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

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
    this.togglePurchased = this.togglePurchased.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  togglePurchased(event) {
    event.preventDefault();
    const { item, actions } = this.props;

    const itemUpdate = {
      ...item,
      purchased: !item.purchased
    }
    actions.updateGroceryItem(itemUpdate)
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
      <div className="col-sm-12 mb-4">
        <div className="row">
          <div className="col-5 col-lg-6">
            <h4
              className={classNames('grocery-item', {
                'strike-through': item.purchased
              })}
            >
              {item.name}
            </h4>
          </div>
          <div className="col-3 col-lg-2">
            <form className="three-columns" onSubmit={this.togglePurchased}>
              <button
                type="submit"
                className={classNames('btn', {
                  'btn-primary': !item.purchased,
                  'btn-outline-dark': item.purchased,
                  'btn-return': item.purchased
                })}
              >
                {item.purchased ? 'Return' : 'Buy'}
              </button>
            </form>
          </div>
          <div className="col-4 col-lg-4">
            <form onSubmit={this.deleteItem}>
              <button
                type="submit"
                className="btn btn-outline-danger"
              >
                &times;
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

GroceryItem.propTypes = propTypes;

export default GroceryItem;

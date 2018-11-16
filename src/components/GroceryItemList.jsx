import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import GroceryItem from './GroceryItem';
import GroceryListAddItem from './GroceryListAddItem';
import * as groceryActions from '../actions';

const propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    purchased: PropTypes.bool,
  })).isRequired,
  actions: PropTypes.shape({
    addGroceryItem: PropTypes.func.isRequired
  }).isRequired
};


/**
 * Grocery item list component
 *
 * @class GroceryItemList
 * @extends {Component}
 */
export class GroceryItemList extends Component {
  /**
   * Creates an instance of GroceryItemList.
   *
   * @param {object} props - Properties passed to component
   * @memberof GroceryItemList
   */
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    this.handleChangeInputName = this.handleChangeInputName.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  /**
   * Change input name handler
   *
   * @param {object} event - Event object
   *
   * @returns {any} Set new state
   * @memberof GroceryItemList
   */
  handleChangeInputName(event) {
    this.setState({
      input: event.target.value
    });
  }

  /**
   * Add item handler
   *
   * @param {object} event - Event object
   *
   * @returns {any} Call add grocery item action and set new state
   * @memberof GroceryItemList
   */
  addItem(event) {
    event.preventDefault();
    const { input } = this.state;
    const { actions } = this.props;

    if (input.trim() !== '') {
      actions.addGroceryItem({
        name: input.trim()
      });
    };
    this.setState({
      input: ''
    });
  }

  /**
   * Render function
   *
   * @returns {object} React element
   * @memberof GroceryItemList
   */
  render() {
    const { input } = this.state;
    const { items, actions } = this.props;

    return (
      <div>
        <div className="card header my-4 pl-3">
          <h2>Grocery Listify</h2>
        </div>
        <div className="row pl-3">
          {items.map((item, index) => (
            <GroceryItem
              key={`item ${index.toString()}`}
              item={item}
              actions={actions}
            />
          ))}
        </div>
        <div className="row">
          <GroceryListAddItem
            input={input}
            handleChangeInputName={this.handleChangeInputName}
            addItem={this.addItem}
          />
        </div>
      </div>
    );
  }
}

GroceryItemList.propTypes = propTypes;

/**
 * Map state to props
 *
 * @param {object} state - State
 *
 * @returns {object} Stated mapped to props
 */
const mapStateToProps = state => ({
  items: state.items
});

/**
 * Map dispatch to props
 *
 * @param {function} dispatch - Dispatch
 *
 * @returns {object} Dispatch mapped to props with actions
 */
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(groceryActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(GroceryItemList);

import React from 'react';

import GroceryItemList from './GroceryItemList';
import '../style.scss';

/**
 * App component
 *
 * @returns {object} React element
 */
const App = () => (
  <div className="container">
    <GroceryItemList />
  </div>
);

export default App;

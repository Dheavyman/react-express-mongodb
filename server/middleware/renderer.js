import path from 'path';
import fs from 'fs';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import App from '../../src/components/App';
import reducer from '../../src/reducers';
import GroceryItem from '../models/groceryItem';

const renderer = (req, res) => {
  const filePath = path.resolve(__dirname, '..', '..', 'build', 'index.html');

  fs.readFile(filePath, 'utf8', (error, htmlData) => {
    if (error) {
      console.log('Error reading file', error);
      res.status(404).end();
    }

    GroceryItem.find({}, (error, items) => {
      if (error) {
        console.log('An error occurred: ', error);
      }
      const preLoadedState = {
        items,
        error: null
      }
      const store = createStore(
        reducer,
        preLoadedState,
        applyMiddleware(thunk)
      );
      const reactApp = renderToString(
        <Provider store={store}>
          <App />
        </Provider>
      );
      const renderedApp = htmlData.replace(
        '<div id="root"></div>',
        `<div id="root">${reactApp}</div>
        <script>
        window.__PRELOADED_STATE__ = ${JSON.stringify(preLoadedState).replace(
          /</g,
          '\\u003c'
        )}
        </script>`
      );

      return res.send(renderedApp);
    });
  });
};

export default renderer;

import path from 'path';
import fs from 'fs';
import React from 'react';
import { renderToString } from 'react-dom/server';

import App from '../../src/components/App';

const renderer = (req, res) => {
  const filePath = path.resolve(__dirname, '..', '..', 'build', 'index.html');

  fs.readFile(filePath, 'utf8', (error, htmlData) => {
    if (error) {
      console.log('Error reading file', error);
      res.status(404).end();
    }

    const reactApp = renderToString(<App />);
    const renderedApp = htmlData.replace(
      '<div id="root"></div>',
      `<div id="root">${reactApp}</div>`
    )

    return res.send(renderedApp);
  });
};

export default renderer;

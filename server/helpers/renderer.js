import React from 'react';
import { renderToString } from 'react-dom/server';
import { matchPath } from 'react-router';
import path from 'path';
import fs from 'fs';

import App from '../../src/App';
import configureStore from '../../src/redux/configureStore';

const initialState = {};

exports = module.exports;

exports.render = (routes) => {
  return (req, res, next) => {
    var match = routes.find((route) =>
      matchPath(req.path, {
        path: route,
        exact: true,
      })
    );

    const is404 = req._possible404;

    if (match || is404) {
      const filePath = path.resolve(
        __dirname,
        '..',
        '..',
        'build',
        'index.html'
      );

      fs.readFile(filePath, 'utf8', (err, htmlData) => {
        if (err) {
          console.error('err', err);
          return res.status(404).end();
        }

        const location = req.url;

        if (is404) {
          res.writeHead(404, { 'Content-Type': 'text/html' });
          console.log(`SSR of unrouted path ${req.path} (404 ahead)`);
        } else {
          res.writeHead(200, { 'Content-Type': 'text/html' });
          console.log(`SSR of ${req.path}`);
        }

        const store = configureStore(initialState);

        const jsx = <App store={store} location={location} />;
        const reactDom = renderToString(jsx);

        return res.end(
          htmlData
            .replace(
              '<div id="root"></div>',
              `<div id="root">${reactDom}</div>`
            )
            .replace('__REDUX__', JSON.stringify(store.getState()))
        );
      });
    } else {
      req._possible404 = true;
      return next();
    }
  };
};

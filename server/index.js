import Loadable from 'react-loadable';
const express = require('express');
const path = require('path');

const PORT = 3000;

const reactRenderer = require('./helpers/renderer');
const routes = ['/', '/users'];

const app = express();

app.get('/*', reactRenderer.render(routes));

app.use(express.static(path.resolve(__dirname, '../build')));
app.use(express.static(path.resolve(__dirname, '../public')));

app.use(reactRenderer.render(routes));

Loadable.preloadAll().then(() => {
  app.listen(PORT, (error) => {
    if (error) {
      return console.log('something bad happened', error);
    }

    console.log(`Listening on ${PORT}...`);
  });
});

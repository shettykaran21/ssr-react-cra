import express from 'express';
import path from 'path';
import Loadable from 'react-loadable';

const PORT = 3000;

const renderer = require('./helpers/renderer');
const routes = ['/', '/users'];

const app = express();

app.get('*', renderer.render(routes));

app.use(express.static(path.resolve(__dirname, '../build')));
app.use(express.static(path.resolve(__dirname, '../public')));

app.use(renderer.render(routes));

Loadable.preloadAll().then(() => {
  app.listen(PORT, (error) => {
    if (error) {
      return console.log('Something went wrong', error);
    }

    console.log(`Listening on ${PORT}...`);
  });
});

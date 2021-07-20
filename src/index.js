import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import configureStore from './redux/configureStore';

const initialState = global.window && global.window.__INITIAL_STATE__;
const store = configureStore(initialState);

ReactDOM.hydrate(<App store={store} />, document.getElementById('root'));

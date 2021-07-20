import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { StaticRouter } from 'react-router';

import AppRoutes from './AppRoutes';

const App = (props) => {
  return (
    <Provider store={props.store}>
      {props.location ? (
        <StaticRouter location={props.location} context={{}}>
          <AppRoutes />
        </StaticRouter>
      ) : (
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      )}
    </Provider>
  );
};

export default App;

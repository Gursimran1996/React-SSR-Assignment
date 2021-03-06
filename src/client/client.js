// Startup point for the client side application
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware} from 'redux';
import thunk  from 'redux-thunk';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import reducers from '../shared/Reducers/index';
import Routes from '../shared/Routes/routes';

const store = createStore(reducers, {} , applyMiddleware(thunk));

ReactDOM.hydrate(
  <Provider store={store}>
  <BrowserRouter>
    <div>{renderRoutes(Routes)}</div>
  </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
);

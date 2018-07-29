import '@styles/app.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';

//main frame
import MainFrame from '@components/MainFrame';

//redux loggers
const loggerMiddleware = createLogger();

//init redux devtool
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware, loggerMiddleware))
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <MainFrame />
    </Router>
  </Provider>,
  document.getElementById('app')
);

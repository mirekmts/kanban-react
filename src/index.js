import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import * as serviceWorker from './serviceWorker';
import App from './App';
import 'semantic-ui-css/semantic.min.css';
import './index.css';

const middlewares = [thunk];

if (process.env.NODE_ENV !== 'production') {
  const { whyDidYouUpdate } = require('why-did-you-update');
  const { logger } = require('redux-logger');

  middlewares.push(logger);
  whyDidYouUpdate(React);
}

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(...middlewares),
  ),
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'),
);

serviceWorker.unregister();

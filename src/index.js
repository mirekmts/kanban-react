import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import  { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const middlewares = [thunk];

if (process.env.NODE_ENV !== 'production') {
  const { whyDidYouUpdate } = require('why-did-you-update');
  const { logger } = require(`redux-logger`);

  middlewares.push(logger);
  whyDidYouUpdate(React);
}

const store = createStore(
    rootReducer,
    composeWithDevTools(
      applyMiddleware(...middlewares),
    )
)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));

serviceWorker.unregister();

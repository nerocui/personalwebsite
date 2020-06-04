import React from 'react';
import ReactDOM from 'react-dom';

import { applyMiddleware, createStore } from 'redux';
import ReduxPromise from 'redux-promise';
import ReduxThunk from 'redux-thunk';
import rootReducer from './reducers';
import { Provider } from 'react-redux';

import './index.css';
import * as serviceWorker from './serviceWorker';
import HomePage from './ui/pages/homePage';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise, ReduxThunk)(createStore);
const store = createStoreWithMiddleware(rootReducer,{});

ReactDOM.render(
  <Provider store={store}>
    <HomePage />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

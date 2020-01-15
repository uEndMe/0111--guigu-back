import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './app';
import store from './redux/store';
import './index.less';

ReactDOM.render(
  /* 传递 store */
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root'),
);
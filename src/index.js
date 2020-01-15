import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConfigProvider } from 'antd';
import zh_CN from 'antd/es/locale/zh_CN'
import zh_TW from 'antd/es/locale/zh_TW'
import en_US from 'antd/es/locale/en_US'

import App from './app';
import store from './redux/store';
import './index.less';


const language =
  (navigator.language
    || navigator.languages[0]
    || 'zh_CN').replace('-', '_');
console.log(language);
const dictionary = { zh_CN, zh_TW, en_US };
ReactDOM.render(
  //antd 国际化
  <ConfigProvider locale={dictionary[language]}>
    {/* 传递 store */}
    <Provider store={store}>
      <App />
    </Provider>
  </ConfigProvider>,
  document.querySelector('#root'),
);
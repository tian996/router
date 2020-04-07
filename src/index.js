import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './commoment/router';
import * as serviceWorker from './serviceWorker';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import 'antd/dist/antd.css';

import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');

ReactDOM.render(
    <ConfigProvider locale={zhCN}>
      <App />
    </ConfigProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

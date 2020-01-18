import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import zh_CN from 'antd/es/locale/zh_CN'
import zh_TW from 'antd/es/locale/zh_TW'
import en_US from 'antd/es/locale/en_US'
import { IntlProvider } from 'react-intl';
import { connect } from 'react-redux';

import Login from './containers/login';
import BasicLayout from '$comp/basic-layout';
import intlPack from '$locales';
import routes from '$conf/routes';

@connect(
  //1.传状态数据, 传 lang
  state => ({ lang: state.lang }),
  //2.更新状态的方法
  null,
)
class App extends Component {
  render() {
    //语言库
    const antdPack = { zh_CN, zh_TW, en_US };
    //获取语言，并修饰
    const { lang } = this.props;
    const ac = lang.replace('-', '_');
    return (
      /* antd 国际化  locales: 语言包 */
      <ConfigProvider locale={antdPack[ac]}>
        {/* 全局国际化  locales: 语言(必须填标准代码)， messages: 语言包 */}
        <IntlProvider locale={lang} messages={intlPack[ac]}>
          {/* 主路由 */}
          <Router>
            <Switch>
              <Route path='/login' exact component={Login} />
              <BasicLayout>
                {routes.map(i => <Route {...i} key={i.path} />)}
              </BasicLayout>
            </Switch>
          </Router>
        </IntlProvider>
      </ConfigProvider>
    );
  }
}

export default App;
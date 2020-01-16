import React, { Component } from 'react';
import { Layout, Breadcrumb } from 'antd';
import { FormattedMessage } from 'react-intl';

import LeftNav from './left-nav';
import HeaderMain from './header-main';
import logo from '$assets/images/logo.png';
import './index.less';
import withCheckLogin from '$cont/with-check-login';

const { Content, Footer, Sider } = Layout;

@withCheckLogin
class BasicLayout extends Component {
  //antd 定义的折叠状态
  state = {
    collapsed: false,
  };

  //接收新折叠参数
  onCollapse = collapsed => {
    this.setState({ collapsed });
  };

  render() {
    const { children } = this.props;
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="layoutLogo" >
            <img src={logo} alt="尚硅谷" />
            <h1 className={this.state.collapsed ? 'fold' : null}>
              {/* 硅谷后台 */}
              <FormattedMessage id="guigu" />
            </h1>
          </div>
          <LeftNav />
        </Sider>
        <Layout>
          <HeaderMain style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              {children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default BasicLayout;
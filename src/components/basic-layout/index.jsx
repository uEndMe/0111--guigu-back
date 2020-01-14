import React, { Component } from 'react';
import { Layout, Breadcrumb } from 'antd';

import LeftNav from './left-nav';
import logo from '$assets/images/logo.png';
import './index.less';

const { Header, Content, Footer, Sider } = Layout;

export default class BasicLayout extends Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    const { children } = this.props;
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="layoutLogo" >
            <img src={logo} alt="尚硅谷" />
            <h1 style={
              this.state.collapsed
                ? { width: 0, opacity: 0 }
                : { width: 80, opacity: 1 }
            }>硅谷后台</h1>
          </div>
          <LeftNav />
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
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

import React, { Component } from 'react';
import { Button, Icon } from 'antd';
import screenfull from 'screenfull';

import './index.less';

export default class HeaderMain extends Component {
  state = {
    maxScreen: false
  }

  //绑定
  componentDidMount() {
    screenfull.on('change', this.toggleScreen);
  }

  toggleScreen = () => {
    this.setState({
      maxScreen: !this.state.maxScreen
    })
  }
  clickScreen = () => {
    screenfull.toggle();
  }
  //解绑
  componentWillUnmount() {
    screenfull.off('change', this.toggleScreen);
  }

  render() {
    const { state: { maxScreen }, props: { username } } = this;
    return (
      <div className="header-main">
        <div className="header-main-top">
          <Button size="small" onClick={this.clickScreen}>
            <Icon type={maxScreen ? 'fullscreen-exit' : 'fullscreen'} />
          </Button>
          <Button size="small" className='header-main-lang' >
            English
          </Button>
          <span>hello, {username}</span>
          <Button size="small" type="link">退出</Button>
        </div>
        <div className="header-main-bottom">
          <span className="header-main-left">商品管理</span>
          <span className="header-main-right">2020/01/14 15:58:37</span>
        </div>
      </div>
    )
  }
}
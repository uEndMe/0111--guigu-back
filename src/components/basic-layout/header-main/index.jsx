import React, { Component } from 'react';
import { Button, Icon, Modal } from 'antd';
import screenfull from 'screenfull';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { removeItem } from '$utils/storage';
import { removeUser } from '$redux/actions';

import './index.less';

/* connect(       //连接 store
  [mapStateToProps],    //更新对象？？
  [mapDispatchToProps],     //函数方法？？
  [mergeProps], 
  [options]) */
@connect(
  (state) => ({ username: state.user.user && state.user.user.username }),
  {
    removeUser
  }
)
//传三大属性
@withRouter
class HeaderMain extends Component {
  state = {
    //用于标记图标
    maxScreen: false
  }

  //绑定
  componentDidMount() {
    screenfull.on('change', this.toggleScreen);
  }
  //修改图标
  toggleScreen = () => {
    this.setState({
      maxScreen: !this.state.maxScreen
    })
  }
  //切换视图
  clickScreen = () => {
    screenfull.toggle();
  }
  //解绑
  componentWillUnmount() {
    screenfull.off('change', this.toggleScreen);
  }
  //登出
  logout = () => {
    Modal.confirm({
      title: '确认退出吗？',
      // content:'',
      onOk: () => {
        //清空用户数据
        removeItem('user');
        this.props.removeUser();
        //跳转
        this.props.history.replace('/login');
      },
      // onCancel:()=>{},
    })
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
          <span>hello, {username}~~</span>
          <Button size="small" type="link" onClick={this.logout}>退出</Button>
        </div>
        <div className="header-main-bottom">
          <span className="header-main-left">商品管理</span>
          <span className="header-main-right">2020/01/14 15:58:37</span>
        </div>
      </div>
    )
  }
}

export default HeaderMain;
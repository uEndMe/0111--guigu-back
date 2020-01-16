import React, { Component } from 'react';
import { Button, Icon, Modal } from 'antd';
import screenfull from 'screenfull';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { FormattedMessage, injectIntl } from 'react-intl';
import dayjs from 'dayjs';

import { removeItem } from '$utils/storage';
import { removeUser, forLang } from '$redux/actions';

import './index.less';

/* connect(       //连接 store
  [mapStateToProps],    //更新对象？？
  [mapDispatchToProps],     //函数方法？？
  [mergeProps], 
  [options]) */
@injectIntl
@connect(
  //1. 传状态数据
  (state) => ({
    // 传 username
    username: state.user.user && state.user.user.username,
    // 传 lang
    lang: state.lang,
  }),
  //2. 传更新状态数据的方法
  { removeUser, forLang }
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
    const { intl } = this.props;
    Modal.confirm({
      title: intl.formatMessage({ id: 'message_logout' }),
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
  //切换语言
  forLang = ({ target: { textContent } }) => {
    const lang =
      textContent === '简体中文'
        ? 'zh-TW'
        : textContent === '繁體中文'
          ? 'en-US'
          : 'zh-CN';
    this.props.forLang(lang);
  }
  render() {
    const { state: { maxScreen }, props: { username, location: { pathname } } } = this;
    const pathSet = pathname.split('/');
    setTimeout(() => {
      this.setState({});
      console.log(111);
    }, 1000);
    return (
      <div className="header-main">
        <div className="header-main-top">
          <Button size="small" onClick={this.clickScreen}>
            <Icon type={maxScreen ? 'fullscreen-exit' : 'fullscreen'} />
          </Button>
          <Button size="small" className='header-main-lang' onClick={this.forLang}>
            <FormattedMessage id="_thisLanguage" />
          </Button>
          <span>hello, {username}~~</span>
          <Button size="small" type="link" onClick={this.logout}>
            {/* 退出 */}
            <FormattedMessage id="exit" />
          </Button>
        </div>
        <div className="header-main-bottom">
          <span className="header-main-left">
            {/* 商品管理 */}
            <FormattedMessage id={pathSet[2] || pathSet[1]} />
          </span>
          <span className="header-main-right">
            {/*  2020/01/14 15:58:37 */}
            {dayjs().format('YYYY/MM/DD HH:mm:ss')}
          </span>
        </div>
      </div>
    )
  }
}

export default HeaderMain;
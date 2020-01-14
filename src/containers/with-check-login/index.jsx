import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

//检查登录，自动跳转
export default function withCheckLogin(Wrapped) {
  @connect(state => ({ user: state.user }), null)
  class CheckLogin extends Component {
    //组件命名
    static displayName = `checkLogin(${
      Wrapped.displayName || Wrapped.name || 'Component'
      })`;
    render() {
      const {
        user: { token },
        location: { pathname }
      } = this.props;
      if (token) {
        if (pathname === '/login') {
          return <Redirect to="/" />
        }
      } else {
        if (pathname === '/') {
          return <Redirect to="/login" />
        }
      }
      return <Wrapped {...this.props} />
    }
  }
  return CheckLogin;
}
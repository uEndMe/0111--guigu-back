import React, { Component } from 'react';

import logo from './logo.png';
import './index.less';

import { Form, Input, Button, Icon } from 'antd';

// @From.create()
class Login extends Component {
  validator = (rule, value, callback) => {
    const name = rule.field === 'username' ? '用户名' : '密码';
    if (!value) {
      callback(`请输入${name}`);
    } else if (value.length < 4) {
      callback(`${name}必须大于4位`)
    } else if (value.length > 15) {
      callback(`${name}必须大于15位`)
    } else if (!/^\w+/.test(value)) {
      callback(`${name}只能包含英文，数字，下划线`)
    }
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return <section className="login">
      <header className="loginHead">
        <img src={logo} alt="尚硅谷" />
        <h1>React 项目：后台管理系统</h1>
      </header>
      <article className="loginBox">
        <h3>用户登录</h3>
        <Form className="loginForm">
          <Form.Item>
            {getFieldDecorator(
              'username',
              { rules: [{ validator: this.validator }] }
            )(
              <Input
                type="text"
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="用户名"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator(
              'password',
              { rules: [{ validator: this.validator }] }
            )(
              <Input
                type="password"
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="密码"
              />
            )}
          </Form.Item>
          <Form.Item>
            <Button type="primary">登录</Button>
          </Form.Item>
        </Form>
      </article>
    </section>
  }
}

//高阶组件，给 Login 传递 from 属性
export default Form.create()(Login);
// export default Login;
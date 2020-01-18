import React, { Component } from 'react';
import { Form, Input, Button, Icon, message } from 'antd';
import { connect } from 'react-redux';


import logo from '$assets/images/logo.png';
import './index.less';
import { saveUserAsync } from '../../redux/actions';
import withCheckLogin from '$cont/with-check-login';

@withCheckLogin
@connect(null, { saveUserAsync })
@Form.create()
class Login extends Component {
  //登录请求
  login = e => {
    e.preventDefault();
    //验证字段 (发送请求，及响应)
    this.props.form.validateFields((err, values) => {
      if (err) {
        console.log(err);
        return;
      }

      const { username, password } = values;
      //异步：保存用户数据
      this.props.saveUserAsync(username, password)
        .then(() => {
          this.props.history.replace('/home');
        })
        .catch(msg => {
          message.error(msg);
          this.props.form.resetFields(['password']);
        })
    });
  }

  //表单校验
  validator = (rule, value, callback) => {
    const name = rule.field === 'username' ? '用户名' : '密码';
    if (!value) {
      callback(`请输入${name}`);
    } else if (value.length < 4 || value.length > 15) {
      callback(`${name}必须大于4位，小于15位`)
    } else if (!/^\w+/.test(value)) {
      callback(`${name}只能包含英文，数字，下划线`)
    } else {
      callback();
    }
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { Item } = Form;
    return <section className="login">
      <header className="loginHead">
        <img src={logo} alt="尚硅谷" />
        <h1>React 项目：后台管理系统</h1>
      </header>
      <article className="loginBox">
        <h3>用户登录</h3>
        <Form className="loginForm" onSubmit={this.login}>
          <Item>
            {getFieldDecorator(
              'username',
              { rules: [{ validator: this.validator }] }
            )(
              <Input type="text"
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="用户名"
              />
            )}
          </Item>
          <Item>
            {getFieldDecorator(
              'password',
              { rules: [{ validator: this.validator }] }
            )(
              <Input type="password"
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="密码"
              />
            )}
          </Item>
          <Item>
            <Button type="primary" htmlType='submit'>登录</Button>
          </Item>
        </Form>
      </article>
    </section>
  }
}

//高阶组件，给 Login 传递 from 属性
// export default Form.create()(Login);
export default Login;
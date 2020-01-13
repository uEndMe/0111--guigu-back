//工厂函数：创建 action 对象；

import { reqLogin } from '../api';
import { setItem } from '../../utils/storage';
import { SAVE_USER } from '../action-types';
import { message } from 'antd';

const saveUser = user => ({ type: SAVE_USER, data: user });

//异步保存用户数据
export const saveUserAsync = (username, password) => {
  //发送？？？
  return dispatch => {
    //异步请求结果
    return reqLogin(username, password)
      .then((response) => {
        //localStorage
        setItem('user', response);
        //redux
        dispatch(saveUser(response));
        //ui
        this.props.history.replace('/');
      })
      .catch(msg => {
        message.error(msg);
        this.props.form.resetFields(['password']);
      })
  }
}
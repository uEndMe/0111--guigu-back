//工厂函数：创建 action 对象；

import { reqLogin, reqGetCategoryList } from '../api';
import { setItem } from '../utils/storage';
import { SAVE_USER, REMOVE_USER, FOR_LANG, GET_CATEGORY_LIST } from './action-types';


export const forLang = lang => ({ type: FOR_LANG, data: lang });

const saveUser = user => ({ type: SAVE_USER, data: user });

export const removeUser = () => ({ type: REMOVE_USER })
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
      })
  }
};


const getCategoryList = (categories) => ({ type: GET_CATEGORY_LIST, data: categories })
//请求商品类别
export const getCategoryListAsync = () => {
  return (dispatch) => {
    //发送请求
    reqGetCategoryList()
      .then((response) => {
        //dispatch更新
        dispatch(getCategoryList(response));
      })
  }
}
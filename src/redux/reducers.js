import { combineReducers } from 'redux';
import { SAVE_USER, REMOVE_USER, FOR_LANG, GET_CATEGORY_LIST, ADD_CLASS, SET_CLASS, DEL_CLASS } from './action-types';
import { getItem } from '../utils/storage';

//用户
const initUser = getItem('user') || {};
function user(prevState = initUser, action) {
  switch (action.type) {
    case SAVE_USER:
      return action.data;
    case REMOVE_USER:
      return {};
    default:
      return prevState;
  }
}

//语言
const initLang = navigator.language || navigator.languages[0] || 'zh-CN';
function lang(prevState = initLang, action) {
  switch (action.type) {
    case FOR_LANG:
      return action.data;
    default:
      return prevState;
  }
}


//商品类别
const initCategories = [];
function categories(prevState = initCategories, action) {
  switch (action.type) {
    case GET_CATEGORY_LIST:
      return action.data;
    case ADD_CLASS:
      return [...prevState, action.data];
    case DEL_CLASS:
      return prevState.filter((category) => category !== action.data._id);
    case SET_CLASS:
      return prevState.map(category => {
        return category._id === action.data
          ? action.data
          : category;
      })
    default:
      return prevState;
  }
}


export default combineReducers({
  user,
  lang,
  categories,
});
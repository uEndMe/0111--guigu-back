import { combineReducers } from 'redux';
import { SAVE_USER, REMOVE_USER, FOR_LANG } from './action-types';
import { getItem } from '../utils/storage';


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

const initLang = navigator.language || navigator.languages[0] || 'zh-CN';
function lang(prevState = initLang, action) {
  switch (action.type) {
    case FOR_LANG:
      return action.data;
    default:
      return prevState;
  }
}
export default combineReducers({
  user,
  lang,
});
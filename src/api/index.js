import axiosInstance from './request';

//基础登录
export const reqLogin = (username, password) => {
  return axiosInstance({
    url: '/login',
    method: 'POST',
    data: { username, password }
  });
}

//获取分类

export const reqGetCategoryList = () => {
  return axiosInstance({
    url: '/category/get',
    method: 'GET',
  })
}
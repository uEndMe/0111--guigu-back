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

//添加分类
export const reqAddClass = (categoryName) => {
  return axiosInstance({
    url: '/category/add',
    method: 'POST',
    data: { categoryName },
  })
}

//修改分类
export const reqSetClass = (categoryId, categoryName) => {
  return axiosInstance({
    url: '/category/update',
    method: 'POST',
    data: { categoryId, categoryName },
  })
}

//删除分类
export const reqDelClass = (categoryId) => {
  return axiosInstance({
    url: '/category/delete',
    method: 'POST',
    data: { categoryId },
  })
}

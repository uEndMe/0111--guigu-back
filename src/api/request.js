import axios from 'axios';

//自定义 axios 请求
const axiosInstance = axios.create({
  baseURL: '/api',
  timeout: 20000,
  header: {
    //静态公共请求头，
  }
})


//请求拦截器
axiosInstance.interceptors.request.use(
  (config) => {
    let token = '';
    if (token) {
      config.headers.authorization = `Bearer ${token}`;
    }
    /* //如果是 www 请求，需要转换
    if (config.method === 'post') {
      Object.keys(config.data)
        .reduce((p, c) => {
          p += `&${c}=${config.data[c]}`;
          return p;
        }, '')
        .slice(1);
      config.headers['content-type'] = 'application/x-www-form-urlencoded';
    } */
  }
)


//响应拦截器
axiosInstance.interceptors.response.use(
  (response) => {
    if (response.data.status === 0) {
      return response.data.data;
    } else {
      return Promise.reject(response.data.msg);
    }
  },
  (err) => {
    const errCode = {
      401: '权限不足',
      403: '禁止访问',
      404: '资源丢失',
      500: '服务器故障',
    }
    let errMsg = '';
    if (err.response) {
      errMsg = errCode[err.response.status] || '未定义错误: ' + err.response.status;
    } else {
      if (err.message.indexOf('Network Error') !== -1) {
        errMsg = '网络故障';
      } else if (err.message.indexOf('timeout') !== -1) {
        errMsg = '连接超时';
      }
    }
    return Promise.reject(errMsg || '未知错误');
  }
)

export default axiosInstance;
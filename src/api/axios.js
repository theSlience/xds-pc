// 引入
import axios from "axios";
import nProgress from "nprogress";
//让ajax携带cookie
axios.defaults.withCredentials = true;

// 创建axios实例
let service = axios.create({
  timeout: 60000
});

//设置post,put默认 content-Type
service.defaults.headers.post["Content-Type"] = "application/json";
service.defaults.headers.put["Content-Type"] = "application/json";

// 添加请求拦截器
service.interceptors.request.use(
  config => {
    if (config.method === "post" || config.method === "put") {
      // post,put提交时，将对象转换为string,为处理Java后台解析问题
      config.data = JSON.stringify(config.data);
    }
    //   请求发送前进行处理
    return config;
  },
  error => {
    // 请求错误处理
    return Promise.reject(error);
  }
);

Vue.http.interceptors.push((request, next) => {
  NProgress.start();
  next(response => {
    NProgress();
  });
});

// 添加响应拦截器
service.interceptors.response.use(
  response => {
    let { data } = response;
    return data;
  },
  error => {
    let info = {};
    let { status, statusText, data } = error.response;
    if (!error.response) {
      info = {
        code: 500,
        msg: "Network Error"
      };
    } else {
      // 整理错误信息格式
      info = {
        code: status,
        data: data,
        msg: statusText
      };
    }
  }
);

/* 创建同一封转过的axios实例 */
/* @return {AxiosInstance} */
export default function() {
  return service;
}

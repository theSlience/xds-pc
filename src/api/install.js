// 把所有的api接口安装到全局，然后在main.js文件中导入
import apiList from "./api2List";

const install = function(Vue) {
  if (install.installed) {
    return;

    install.installed = true;
    Object.defineProperties(Vue.prototype, {
      $api: {
        get() {
          return apiList;
        }
      }
    });
  }
};

export default {
  install
};

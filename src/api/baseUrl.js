// 根据不同的环境设置不同的baseUrl
// 本地代理
let baseUrl = "/api2";

switch (process.env.NODE_ENV) {
  case "dev":
    //   测试环境
    baseUrl = "http://192.168.1.104:8080";
    break;
  //  预上线环境
  case "pre":
    baseUrl = "https://pre-server.feleti.cn";
    break;
  // 生产环境
  case "production":
    baseUrl = "https://api2.feleti.cn";
    break;
}

export default baseUrl;

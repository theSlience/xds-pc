<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-08-05 10:49:02
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-08-05 15:54:17
-->
<template>
  <div class="banner">
    <div class="txt">
      <h3>上海新东升</h3>
      <h3>专业的学生职业学习规划平台</h3>
      <p><span>已帮助 370 家企业找到 476 位优秀毕业生</span></p>
      <button><span>点击申请</span></button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
}
</script>
<style lang="less" scoped>
.banner {
  width: 100%;
  height: 556px;
  display: block;
  padding-top: 184px;
  background-size: contain !important;
  background: url('../assets/banner/header-bg.png') no-repeat;
  .txt {
    h3 {
      font-size: 40px;
      color: #ffffff;
      margin-bottom: 12px;
    }
    p {
      margin-top: 8px;
      span {
        font-size: 15px;
        color: #ffffff;
      }
    }
    button {
      width: 182px;
      height: 54px;
      border: none;
      display: flex;
      margin: 0 auto;
      cursor: pointer;
      margin-top: 28px;
      align-items: center;
      justify-content: center;
      background-color: #0870ff;
      span {
        font-size: 18px;
        color: #ffffff;
      }
    }
  }
}
</style>
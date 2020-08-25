<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-08-06 14:59:04
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-08-06 17:46:49
-->
<template>
  <div class="blackBg">
    <div class="box">
      <div>
        <h4>新东升</h4>
        <p v-for="(item,index) in firstItem"
           :key="index">{{item.name}}</p>
      </div>
      <div>
        <h4>精品教材</h4>
        <p v-for="(item,index) in secondItem"
           :key="index">{{item.name}}</p>
      </div>
      <div>
        <h4>精品教材</h4>
        <p v-for="(item,index) in thirdItem"
           :key="index">{{item.name}}</p>
      </div>
      <div>
        <h4>联系方式</h4>
        <p>
          <i></i>上海市徐汇区宜山路700号B2幢22楼
        </p>
        <p>
          <i></i>4006-188-166
        </p>
        <p>
          <i></i>sales-info@xindongsheng.com
        </p>
        <p>
          <img src="../assets/footer/wx.png"
               alt="">
          <span> 扫一扫添加老师微信</span>
        </p>
      </div>
    </div>
    <div class="copy"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      firstItem: [
        { name: '首页' },
        { name: '课程介绍' },
        { name: '最新开班' },
        { name: '企业内训' },
        { name: '学校动态' },
        { name: '精品教材' },
      ],
      secondItem: [
        { name: '精品教材1' },
        { name: '精品教材2' },
        { name: '精品教材3' },
      ],
      thirdItem: [
        { name: '精品教材1' },
        { name: '精品教材2' },
        { name: '精品教材3' },
      ],
    }
  },
}
</script>
<style lang="less" scoped>
.blackBg {
  width: 100%;
  height: 556px;
  padding: 76px 400px 0 400px;
  background-color: #262d39;
  .box {
    display: flex;
    justify-content: space-between;
    div {
      text-align: left;
      h4 {
        display: flex;
        font-size: 16px;
        color: #ffffff;
        margin-bottom: 50px;
      }
      p {
        display: flex;
        color: #81858b;
        margin-bottom: 20px;
        i {
          width: 18px;
          height: 18px;
          display: block;
          align-self: end;
          margin-right: 4px;
          border: 1px solid #707070;
          background-color: #ffffff;
        }
        img {
          width: 142px;
          height: 100%;
          display: block;
          max-width: 100%;
          border: 1px dashed #707070;
        }
      }
      p:last-child {
        display: block;
        span {
          display: block;
          font-size: 12px;
          color: #ffffff;
          margin: 12px 0 0 17px;
        }
      }
    }
  }
}
</style>
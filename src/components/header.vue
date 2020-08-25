<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-08-05 09:44:49
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-08-06 11:29:53
-->
<template>
  <div class="header">
    <div class="logo"><img src="../assets/header/logo.png"
           alt=""></div>
    <div class="navItem">
      <router-link v-for="(item,index) in navItem"
                   :key="index"
                   :to="{path:item.path,query:{item:index}}"
                   :class="{borderBot:borderBotKey==index}"
                   tag="div"
                   @click="select(index)">
        <span>{{item.name}}</span>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      borderBotKey: 0,
      navItem: [
        { name: '首页' },
        { name: '培训课程' },
        { name: '企业内训' },
        { name: '学校动态' },
        { name: '精品教材' },
        { name: '关于学校' },
        { name: '专题' },
      ],
    }
  },
  mounted() {
    if (this.$route.query.item) {
      this.borderBotKey = this.$route.query.item
    } else {
      this.borderBotKey = 0
    }
  },
  methods: {
    // 导航下边框样式
    select(index) {
      this.borderBotKey = index
      console.log(index)
    },
  },
}
</script>
<style lang="less" scoped>
.header {
  width: 100%;
  z-index: 999;
  height: 75px;
  //   opacity: 0.4;
  display: flex;
  position: fixed;
  padding-left: 360px;
  background: rgba(0, 86, 197, 0.2);
  .logo {
    // width: 250px;
    align-self: center;
    margin-right: 60px;
    img {
      width: 250px;
      height: 100%;
      max-width: 100%;
    }
  }
  .navItem {
    display: flex;
    align-self: center;
    div {
      cursor: pointer;
      margin-right: 34px;
      padding-bottom: 3px;
      span {
        font-size: 16px;
        color: #ffffff;
      }
    }
    .borderBot {
      border-bottom: 3px solid #ffffff;
    }
  }
}
</style>
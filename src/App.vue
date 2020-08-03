<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-06-22 19:40:25
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-06-28 09:14:59
--> 
<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body,
dl,
dt,
dd,
ul,
ol,
li,
pre,
form,
fieldset,
input,
p,
blockquote,
th,
td {
  font-weight: 400;
  margin: 0;
  padding: 0;
}
h1,
h2,
h3,
h4,
h4,
h5 {
  margin: 0;
  padding: 0;
}

fieldset,
img {
  display: block;
  border: 0 none;
}
fieldset {
  margin: 0;
  padding: 0;
}
fieldset p {
  margin: 0;
  padding: 0 0 0 8px;
}
legend {
  display: none;
}
address,
caption,
em,
strong,
th,
i {
  font-style: normal;
  font-weight: 400;
}
table caption {
  margin-left: -1px;
}
ol,
ul {
  list-style-image: none;
  list-style-position: outside;
  list-style-type: none;
}
caption,
th {
  text-align: left;
}
q:before,
q:after,
blockquote:before,
blockquote:after {
  content: '';
}
/* 轮播图点 */
.swiper-pagination-bullet {
  width: 38px;
  height: 3px;
  border-radius: 0;
}
</style>

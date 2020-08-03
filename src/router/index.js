/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-06-30 17:15:01
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-07-31 11:33:52
 */
import Vue from "vue";
import Router from "vue-router";
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
}
// layout
// import Layout from '@layout'
Vue.use(Router);
const router = new Router({
  routes: [{
      path: '/',
      redirect: {
        name: 'Home'
      }
    }
  ]
});

export default router;

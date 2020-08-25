/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-07-31 13:31:34
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-08-05 11:26:42
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
    },
    {
      path: '/home',
      name: 'Home',
      component: () => import('@/page/home/index')
    },
    {
      path: '/header',
      name: 'Header',
      component: () => import('@/components/header')
    }

  ]
});

export default router;

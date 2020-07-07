/*
 * @Author: your name
 * @Date: 2019-11-24 00:07:15
 * @LastEditTime: 2019-11-24 21:40:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \zhuanyi_2\zy\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

import jkh from '../components/wtq/jkh'
import jswz from '../components/wtq/jswz'
import change from '../components/wtq/change'
import recommand from '../components/wtq/recommand'
import wz from '../components/wtq/wz'
import weather from '../components/wtq/weather'
import nowz from '../components/wtq/nowz'
import index from "../components/cfy/index"
import parent from "../views/cfy/parent"
import test from "../components/cfy/test"
import goGuaHao from "../components/cfy/goGuaHao/goGuaHao"
import login from "../components/mhp/login" //用户快速登录页面
import pwdLogin from "../components/mhp/pwdLogin" //密码登录页面
import chooseClass from "../components/cfy/chooseClass/chooseClass"
import chooseDoctor from "../components/cfy/chooseDoctor/chooseDoctor"
import h_main from "../components/zwb/h_main"
import h_detail from "../components/zwb/h_detail"
import d_detail from "../components/cfy/chooseDoctor/doctorDetail"
import order from "../components/cfy/order/order"
import map from "../components/cfy/map/map"
import me from "../components/mhp/me"
import myorder from "../views/cfy/myorder.vue"
import reg from "../components/mhp/reg"
Vue.use(VueRouter)

const routes = [
  //{path: '/',name: 'home',component: Home},
  {path: '/jswz',name: 'jswz',component: jswz},
  {path: '/wz',name: 'wz',component: wz},
  {path: '/nowz',name: 'nowz',component: nowz},
  {path: '/jkh',name: 'jkh',component: jkh},
  {path: '/recommand',name: 'recommand',component: recommand},
  {path: '/weather',name: 'weather',component: weather},
  {path: '/change',name: 'change',component: change},
  {path: '/',component: parent},
  {path: "/parent",component: parent},
  {path: '/login',component: login},
  {path: '/goGuahao',component: goGuaHao},
  {path: '/pwdLogin',component: pwdLogin},
  {path: "/chooseClass",component: chooseClass},
  {path: "/chooseDoctor",component: chooseDoctor},
  {path: "/me",component: me},
  {path: "/h_main",component: h_main},
  {path: "/h_detail",component: h_detail},
  {path: "/d_detail",component: d_detail},
  {path: "/order",component: order},
  {path: "/map",component: map},
  {path: "/test",component: test},
  {path: "/myorder",component: myorder},
  {path: "/reg",component: reg},
]

const router = new VueRouter({
  routes
})

export default router

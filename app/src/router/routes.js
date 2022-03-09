// 引入路由组件
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'

export default [
  {
    path: "/addcartsuccess",
    name:"addcartsuccess",
    component: AddCartSuccess,
    meta: { show: true }
  },
  {
    path: "/detail/:skuId",
    component: Detail,
    meta: { show: true }
  },
  {
    path: "/home",
    component: Home,
    meta: { show: true }
  },
  {
    path: "/login",
    component: Login,
    meta: { show: false }
  },
  {
    path: "/register",
    component: Register,
    meta: { show: false }
  },
  {
    path: "/search/:keyword?",
    component: Search,
    meta: { show: true },
    name: "search"
  },
  // 重定向，在项目跑起来的时候，访问/，立马让它定向到首页
  {
    path: '*',
    redirect: "/home"
  }
]
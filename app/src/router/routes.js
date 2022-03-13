// 引入路由组件
// import Home from '@/pages/Home'   () => import('@/pages/Home'),路由懒加载  高效   需要的时候才加载
import Login from '@/pages/Login'
import Register from '@/pages/Register'
// import Search from '@/pages/Search' 
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'
import Trade from '@/pages/Trade'
import Pay from '@/pages/Pay'
import PaySuccess from '@/pages/PaySuccess'
import Center from '@/pages/Center'
// 引入二级路由组件
import MyOrder from '@/pages/Center/myOrder'
import GroupOrder from '@/pages/Center/groupOrder'
export default [
  {
    path: "/center",
    component: Center,
    meta: { show: true },
    children:[
      {
      path:'myorder',
      component:MyOrder
      },
      {
        path:'grouporder',
        component:GroupOrder
      },
      {
        path:'/center',
        redirect:'/center/myorder'
      }
    ]
  },
  {
    path: "/paysuccess",
    component: PaySuccess,
    meta: { show: true },
    beforeEnter: (to, from, next) => {
      if(from.path =="/pay"){
        next()
      }else{
        next(false)
      }
    }
  },
  {
    path: "/pay",
    component: Pay,
    meta: { show: true },
    beforeEnter: (to, from, next) => {
      if(from.path =="/trade"){
        next()
      }else{
        next(false)
      }
    }
  },
  {
    path: "/trade",
    component: Trade,
    meta: { show: true },
    beforeEnter: (to, from, next) => {
      if(from.path =="/shopcart"){
        next()
      }else{
        next(false)
      }
    }
  },
  {
    path: "/shopcart",
    component: ShopCart,
    meta: { show: true }
  },
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
    component: () => import('@/pages/Home'),
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
    component:  () => import('@/pages/Search'),
    meta: { show: true },
    name: "search"
  },
  // 重定向，在项目跑起来的时候，访问/，立马让它定向到首页
  {
    path: '*',
    redirect: "/home"
  }
]
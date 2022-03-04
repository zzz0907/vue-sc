// 这个模块：API进行统一处理
import requests from './request'
import mockRequests from './mockAjax'
// 三级联动接口
// /api/product/getBaseCategoryList  get 无参数

// export const reqCategoryList = ()=>{
//     // 发请求:axios发请求返回结果Promise对象
//     return request({url:'/api/product/getBaseCategoryList',method:'get'})
// }
export const reqCategoryList = ()=> requests({url:'/product/getBaseCategoryList',method:'get'})

// 获取banner
export const reqGetBannerList= ()=> mockRequests.get('/banner')

// 获取floor数据
export const reqFloorList= ()=> mockRequests.get('/floor')
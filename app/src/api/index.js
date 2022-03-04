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

//获取搜索模块数据 地址:/api/list  请求方式:post  参数:需要带参数
//当前这个函数需不需要接受外部传递参数
//当前这个接口（获取搜索模块的数据），给服务器传递一个默认参数【至少是一个空对象】
export const reqGetSearchInfo = (params)=>requests({url:"/list",method:"post",data:params})
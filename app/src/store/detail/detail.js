import {reqAddOrUpdateShopCart, reqGoodsInfo} from '@/api'
// state：仓库存储数据
const state = {
    goodInfo:{}
}
// mutations:修改state的唯一手段
const mutations = {
    GETGOODINFO(state , goodInfo){
        state.goodInfo = goodInfo
    }
}
// action：处理action，可以书写自己的业务逻辑，也可以处理异步
const actions = {
    async getGoodInfo({commit},skuId){
        let result= await reqGoodsInfo(skuId)
        if(result.code == 200){
            commit('GETGOODINFO',result.data)
        }
    },
    //加入购物车的||修改某一个产品的个数
    async addOrUpdateShopCart({ commit }, { skuId, skuNum }) {
    //发请求:前端带一些参数给服务器【需要存储这些数据】，存储成功了，没有给返回数据
    //不需要在三连环（仓库存储数据了）
    //注意:async函数执行返回的结果一定是一个promise【要么成功，要么失败】
    let result = await reqAddOrUpdateShopCart(skuId, skuNum);
    if (result.code == 201) {
      //返回的是成功的标记
      return "ok";
    } else {
      //返回的是失败的标记
      return Promise.reject(new Error("faile"));
    }
  },
}
// getters：理解为计算属性，用于简化仓库数据，让组件获取仓库的数据更加方便
const getters = {
    categoryView(state){
        return state.goodInfo.categoryView ||{}
    },
    skuInfo(state){
        return state.goodInfo.skuInfo ||{}
    },
    spuSaleAttrList(state){
        return state.goodInfo.spuSaleAttrList ||[]
    },
}
export default{
    getters,
    actions,
    mutations,
    state
}
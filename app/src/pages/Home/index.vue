<template>
  <div>
      <!-- 三级联动全局组件 -->
      <TypeNav/>
      <ListContainer/>
      <Recommend/>
      <Rank/>
      <Like/>
      <Floor/>
      <Floor/>
      <Brand/>
  </div>
</template>

<script>
// 引入其余组件
  import ListContainer from './ListContainer'
  import Recommend from './Recommend'
  import Rank from './Rank'
  import Like from "@/pages/Home/Like"
  import Floor from './Floor'
  import Brand from './Brand'
  export default {
    components:{
        ListContainer,
        Recommend,
        Rank,
        Like,
        Floor,
        Brand
    }
}
</script>

<style lang="less" scoped>
</style>

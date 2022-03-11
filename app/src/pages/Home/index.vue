<template>
  <div>
      <!-- 三级联动全局组件 -->
      <TypeNav/>
      <ListContainer/>
      <Recommend/>
      <Rank/>
      <Like/>
      <Floor v-for="(floor) in floorList" :key="floor.id" :list="floor"/>
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
  import { mapState } from "vuex"
  export default {
    components:{
        ListContainer,
        Recommend,
        Rank,
        Like,
        Floor,
        Brand
    },
    mounted() {
      // 派发action，获取floor组件的数据
      this.$store.dispatch("getFloorList");
      
    },
    computed: {
    ...mapState({
      floorList: (state) => state.home.floorList,
    }),
  },
}
</script>

<style lang="less" scoped>
</style>

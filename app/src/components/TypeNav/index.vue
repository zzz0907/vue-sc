<template>
  <!-- 商品分类导航 -->
  <div class="type-nav">
    <div class="container" @mouseleave="leaveshow" @mouseenter="entershow">
      <h2 class="all">全部商品分类</h2>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">商城超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
      <transition name="sort">
        <div class="sort" v-show="show">
          <!-- 利用事件委派+编程式导航实现路由的跳转与传递参数 -->
          <div class="all-sort-list2" @click="goSearch">
            <div class="item" v-for="(c1,index) in categoryList" :key="c1.categoryId" :class="{cur:currentIndex == index}">
              <h3 @mouseenter="changeIndex(index)" @mouseleave="currentIndex=-1">
                <a :data-categoryName='c1.categoryName' :data-category1Id="c1.categoryId">{{c1.categoryName}}</a>
              </h3>
              <div class="item-list clearfix" >
                <div class="subitem"  v-for="c2 in c1.categoryChild" :key="c2.categoryId">
                  <dl class="fore">
                    <dt>
                      <a :data-categoryName='c2.categoryName' :data-category2Id="c2.categoryId">{{c2.categoryName}}</a>
                    </dt>
                    <dd>
                      <em v-for="c3 in c2.categoryChild" :key="c3.categoryId">
                        <a :data-categoryName='c3.categoryName' :data-category3Id="c3.categoryId">{{c3.categoryName}}</a>
                      </em>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
//按需引入：只是引入节流函数，其他的函数没有引入（模块），这样做的好处是，当你打包项目的时候体积会小一些
import throttle from "lodash/throttle";
export default {
  name: "TypeNav",
  data() {
    return {
      
      // 存储用户鼠标移上哪一个一级分类
      currentIndex:-1,
      show:true
    }
  },
  methods: {
    //用于修改组件实例身上的currentIndex的属性值
    //当用户鼠标移入到h3身上的时候就会立即出发一次
    changeIndex: throttle(function(index) {
      //修改当前currentIndex索引值
      //函数节流:在20MS时间之内只能执行一次
      this.currentIndex = index;
    }, 20),
    goSearch(event){
      // 最好的解决方案：编程式导航+事件委派
      // 存在一些问题：事件委派，是把全部的子节点【h3、dt、dl、em】的事件委派给父亲节点
      // 点击a标签的时候，才会进行路由跳转【怎么能确定点击的一定是a标签】
      // 如何区分是一级、二级、三级的a标签

      // 在a标签中加入:data-categoryName='c1.categoryName'自定义属性
      let element = event.target;
      // 获取到当前出发这个事件的节点【h3、a、dt、dl】，需要带有data-categoryName这样的节点一定是a标签
      // 节点有一个属性dataset属性，可以获取节点的自定义属性和属性值
      let {categoryname,category1id,category2id,category3id} = element.dataset;
      if(categoryname){
        // 整理路由跳转的参数
        let location = {name:'search'}
        let query = {categoryName:categoryname}
        if(category1id){
          query.category1Id = category1id
        }else if(category2id){
          query.category2Id = category2id
        }else{
          query.category3Id = category3id
        }
        
        if(this.$route.params){
          location.params = this.$route.params
          location.query = query
          this.$router.push(location)
        }
      }
    },
    entershow(){
      if(this.$route.path !='/home'){
      this.show=true
    }
    },
    leaveshow(){
      if(this.$route.path !='/home'){
      this.show=false
    }
    }
  },
  // 组件挂载完毕，可以向服务器发请求
  mounted() {

    if(this.$route.path !='/home'){
      this.show=false
    }
   
  },
  computed: {
    ...mapState({
      // 右侧需要的是一个函数，当使用这个计算属性的时候，右侧函数会立即执行一次
      // 注入一个参数state，其实即为大仓库中的数据
      categoryList: (state) => state.home.categoryList,
    }),
  },
};
</script>

<style lang="less" scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        height: 450px;
        overflow: hidden;
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            _height: 200px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          &:hover {
            .item-list {
              display: block;
            }
          }
        }
        .cur{
          background: pink;
        }
      }
    }
    .sort-enter{
      height: 0;
    }
    .sort-enter-to{
      height: 461px;
    }
    .sort-enter-active{
      transition: all .5s linear;
    }
  }
}
</style>

<template>
  <div class="footer">
    <div class="footer-container">
      <div class="footerList">
        <div class="footerItem">
          <h4>购物指南</h4>
          <ul class="footerItemCon">
            <li>购物流程</li>
            <li>会员介绍</li>
            <li>生活旅行/团购</li>
            <li>常见问题</li>
            <li>购物指南</li>
          </ul>
        </div>
        <div class="footerItem">
          <h4>配送方式</h4>
          <ul class="footerItemCon">
            <li>上门自提</li>
            <li>孙悟空快送</li>
            <li>配送服务查询</li>
            <li>配送费收取标准</li>
            <li>海外配送</li>
          </ul>
        </div>
        <div class="footerItem">
          <h4>支付方式</h4>
          <ul class="footerItemCon">
            <li>货到付款</li>
            <li>在线支付</li>
            <li>分期付款</li>
            <li>邮局汇款</li>
            <li>公司转账</li>
          </ul>
        </div>
        <div class="footerItem">
          <h4>售后服务</h4>
          <ul class="footerItemCon">
            <li>售后政策</li>
            <li>价格保护</li>
            <li>退款说明</li>
            <li>返修/退换货</li>
            <li>取消订单</li>
          </ul>
        </div>
        <div class="footerItem">
          <h4>特色服务</h4>
          <ul class="footerItemCon">
            <li>一元秒杀</li>
            <li>DIY装机</li>
            <li>延保服务</li>
            <li>商城购物卡</li>
            <li>团购优惠</li>
          </ul>
        </div>
        <div class="footerItem">
          <h4>帮助中心</h4>
          <img src="./images/download.png" />
        </div>
      </div>
      <div class="copyright">
        <ul class="helpLink">
          <li>
            关于我们
            <span class="space"></span>
          </li>
          <li>
            联系我们
            <span class="space"></span>
          </li>
          <li>
            关于我们
            <span class="space"></span>
          </li>
          <li>
            商家入驻
            <span class="space"></span>
          </li>
          <li>
            营销中心
            <span class="space"></span>
          </li>
          <li>
            友情链接
            <span class="space"></span>
          </li>
          <li>
            关于我们
            <span class="space"></span>
          </li>
          <li>
            营销中心
            <span class="space"></span>
          </li>
          <li>
            友情链接
            <span class="space"></span>
          </li>
          <li>关于我们</li>
        </ul>
        <p>地址：ZZZ市ZZZ区ZZZ楼ZZZ层</p>
        <p>ZZZ19006430号</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
}
</script>

<style lang="less" scoped>
.clearfix::before,
.clearfix::after{
    content: '';
    display: table;
    clear: both;
}

body{
    font: 14px/1.5 Helvetica Neue,Helvetica,Arial,Microsoft Yahei,Hiragino Sans GB,Heiti SC,WenQuanYi Micro Hei,sans-serif;
    color: #333;
    min-width: 1226px;
}
/* 设置一个类 用来表示中间容器的宽度 */
.w{
    width: 1226px;
    margin: 0 auto;
}
.footer {
  background-color: #eaeaea;

  .footer-container {
    width: 1200px;
    margin: 0 auto;
    padding: 0 15px;

    .footerList {
      padding: 20px;
      border-bottom: 1px solid #e4e1e1;
      border-top: 1px solid #e4e1e1;
      overflow: hidden;
      padding-left: 40px;

      .footerItem {
        width: 16.6666667%;
        float: left;

        h4 {
          font-size: 14px;
        }

        .footerItemCon {
          li {
            line-height: 18px;
          }
        }

        &:last-child img {
          width: 121px;
        }
      }
    }

    .copyright {
      padding: 20px;

      .helpLink {
        text-align: center;

        li {
          display: inline;

          .space {
            border-left: 1px solid #666;
            width: 1px;
            height: 13px;
            background: #666;
            margin: 8px 10px;
          }
        }
      }

      p {
        margin: 10px 0;
        text-align: center;
      }
    }
  }
}
/* 设施搜索框 */
.search-wrapper{
    width: 296px;
    height: 50px;
    float: right;
    margin-top: 25px;
    border: 1px solid rgb(224, 224, 224);
}
.search-wrapper .search-inp{
    float: left;
    width: 224px;
    height: 50px;
    padding: 0 10px;

}
.search-wrapper .search-btn{
    float: left;
    height: 50px;
    width: 52px;
    border: none;
    padding-top: 0;
    font-size: 16px;
    border-left: 1px solid rgb(224, 224, 224);
    border-left: none;
}
.search-wrapper .search-inp:focus +button{
    border-color: #ff6700;
}
.search-wrapper .search-btn:hover{
    background-color: #ff6700;
    color: white;
    border: none;
}
</style>

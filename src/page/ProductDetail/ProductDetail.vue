<template>
  <div class="productdetail">
    <div class="detailTop">
      <div class="banner">
        <ul class="activeContainer">
          <li class="swiper">
            <swiper :options="swiperOption">
              <swiper-slide :key="index" v-for="(banner, index) in banners">
                <img :src="banner" alt="">
              </swiper-slide>
              <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
          </li>
        </ul>
      </div>
      <div class="producttitle">
        <div class="title">{{ information.title }}</div>
        <div class="price">
          <span class="realprice">￥{{ information.price }}</span>
          <span class="profitprice">/<span>赚{{ information.profitprice }}</span></span>
        </div>
        <div class="qita">
          <span class="freight">运费：{{ information.freight }}</span>
          <span class="volume">月销{{ information.salesvolume }}笔</span>
        </div>
      </div>
    </div>
    <div class="parameter">
      <div class="title">产品参数</div>
      <div class="content">
        <div>生产日期:{{ parameter.data }}</div>
      </div>
    </div>
  </div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';
export default {
  data() {
    return {
      banners: [],
      information: Object,
      parameter: Object,
      swiperOption: {
        autoplay: 2500,
        loop: true,
        pagination: '.swiper-pagination',
        autoplayDisableOnInteraction: false
      }
    };
  },
  async created() {
    var res = await this.$http.get('http://rapapi.org/mockjsdata/18311/productdetail', {sid: '11'});
    console.log(res.body.resData);
    this.banners = res.body.resData.swiperArr;
    this.information = res.body.resData.information;
    this.parameter = res.body.resData.parameter;
  },
  components: {
    swiper,
    swiperSlide
  }
};
</script>
<style scoped lang="stylus">
@import '../../../static/css/border-1px.styl';
.detailTop
  background-color: #ffffff
  .banner
    width: 100%
    height: 285px
    .activeContainer
      padding: 0
      margin: 0
      width: 100%
      height: 100%
      .swiper
        list-style: none
        // .swiper-pagination
        //   padding-right: 12px
        //   box-sizing: border-box
        //   text-align: right
        // .swiper-pagination-bullet
        //   background-color: #fff
        // .swiper-pagination-bullet-active
        //   background-color: #fff
        //   transform: scale(1.3)
        img
          width: 100%
          height: 100%
  .producttitle
    padding: 10px 12px
    .title
      line-height: 24px
    .price
      margin-top: 12px
      .profitprice
        span
          color: #D8161E
    .qita
      margin-top: 12px
      color: #ABABAB
      .freight
        margin-right: 40px
      
.parameter
  margin-top: 10px
  background-color: #ffffff
  .title
    height: 45px
    line-height:45px
    padding-left: 10px
    border-1px-bottom('#ebebeb')   
  .content
    padding: 12px 10px
    font-size: 14px
</style>

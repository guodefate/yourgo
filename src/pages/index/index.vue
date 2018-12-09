<template>
  <div class="index">
    <!-- 顶部的搜索栏 -->
    <div class="nav">
      <i class="iconfont icon-sousuo"></i>
      <input type="text" placeholder="搜索">
    </div>
    <!-- 轮播图 -->
      <swiper indicator-dots autoplay circular class="swiper">
          <block v-for="(item, index) in swiperList" :key="index">
              <swiper-item>
                  <image mode="aspectFill" :src="item.image_src"></image>
              </swiper-item>
          </block>
      </swiper>
  </div>
</template>
<script>
// 导入自己抽取的hxios

import hxios from '../../utils/index.js';
   export default {
     data:function(){
       return{
        //轮播图数组
        swiperList:[]
       }
     },
    //获取数据
    created(){
      hxios.get('api/public/v1/home/swiperdata').then(res=>{
        console.log(res);
        this.swiperList=res.data.message;
      })
    }
   }
</script>
<style lang='scss'>
$uRed:#ff2d4a;
    .index{
      padding-top:100rpx;
    }
   .nav{
     padding: 20rpx 16rpx;
     background-color: $uRed;
     position: fixed;
     top:0;
     left: 0;
     width: 100%;
     box-sizing: border-box;
     i.icon-sousuo{
       position: absolute;
       top:50%;
       left:50%;
       transform: translate(-220%,-50%);
       color:#bbb;
     }
     input{
        height: 60rpx;
        background-color: white;
        text-align: center;
        color:#bbb;
        font-size: 24rpx;
        border-radius: 5rpx;
     }
   }
   .swiper{
     image{
        width: 100%;
     }
    
   }
</style>

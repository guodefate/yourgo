<template>
  <div class="index nav-content ">
    <!-- 顶部的搜索栏 -->
    <search></search>
    <!-- 轮播图 -->
    <swiper indicator-dots autoplay circular class="swiper">
      <block v-for="(item, index) in swiperList" :key="index">
        <swiper-item>
          <image mode="aspectFill" :src="item.image_src"></image>
        </swiper-item>
      </block>
    </swiper>
    <!-- 分类样式 -->
    <div class="category-box">
      <div class="item" v-for="(item, index) in categoryList" :key="index">
        <image :src="item.image_src"></image>
        <text>{{item.name}}</text>
      </div>
    </div>
    <!-- 楼层样式 -->
    <div class="floor-box" v-for="(item, index) in floorList">
      <div class="title">
        <h2>{{item.floor_title.name}}</h2>
        <image :src="item.floor_title.image_src"></image>
      </div>
      <div class="content">
        <div class="item" v-for="(it, i) in item.product_list">
          <image :src="it.image_src"></image>
        </div>
      </div>
    </div>
    <!-- 底部样式 -->
    <div class="bottom">
      <i class="iconfont icon-xiao">我是有底线的~</i>
    </div>
    <!-- 返回顶部 -->
    <div class="backtop" v-show="isShow" @click="goTop">
      <i class="iconfont icon-jiantoushang"></i>
      顶部
    </div>
  </div>
</template>
<script>
// 导入自己抽取的hxios
import hxios from "../../utils/index.js";
import search from "../../components/search";
export default {
  data: function() {
    return {
      //轮播图数组
      swiperList: [],
      // 分类数据
      categoryList: [],
      // 楼层数据
      floorList: [],
      // 是否显示返回顶部
      isShow: false
    };
  },
  methods: {
    //返回顶部
    goTop() {
      wx.pageScrollTo({
        scrollTop: 0,
        duration: 300
      });
    }
  },
  // 注册组件
  components: {
    search
  },
  //获取数据
  created() {
    // hxios.get('api/public/v1/home/swiperdata').then(res=>{
    //   console.log(res);
    //   this.swiperList=res.data.message;
    // })
    // 轮播图
    let hx1 = hxios.get("api/public/v1/home/swiperdata");
    // 分类样式
    let hx2 = hxios.get("api/public/v1/home/catitems");
    // 楼层样式
    let hx3 = hxios.get("api/public/v1/home/floordata");
    Promise.all([hx1, hx2, hx3]).then(res => {
      console.log(res);
      this.swiperList = res[0].data.message;
      this.categoryList = res[1].data.message;
      this.floorList = res[2].data.message;
    });
  },
  // 小程序生命周期钩子
  onPageScroll(e) {
    // console.log(e);
    if (e.scrollTop > 200) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
    // Do something when page scroll
  }
};
</script>
<style lang='scss'>
//定义变量
$uRed: #ff2d4a;

//  轮播图
.swiper {
  padding-top: 0;
  margin-top: 0;
  image {
    width: 100%;
  }
}
//分类样式
.category-box {
  display: flex;
  padding: 24rpx;
  .item {
    flex: 1;
    text-align: center;
    image {
      width: 90rpx;
      height: 90rpx;
      display: block;
      margin: 0 auto;
    }
    text {
      font-size: 24rpx;
      display: block;
      margin-top: 15rpx;
    }
  }
}
// 楼层样式
.floor-box {
  .title {
    position: relative;
    h2 {
      position: absolute;
      left: 16rpx;
      font-size: 35rpx;
      font-weight: 700;
      color: #ff7b94;
      display: block;
      top: 50%;
      transform: translateY(-50%);
    }
    image {
      display: block;
      height: 90rpx;
      width: 100%;
    }
  }
  .content {
    padding: 20rpx 16rpx;
    overflow: hidden;
    .item {
      padding-left: 10rpx;
      box-sizing: border-box;
      width: 33.33%;
      float: left;
      image {
        width: 100%;
      }
    }
    .item:not(:first-child) {
      image {
        height: 235rpx;
      }
    }
  }
}
// 底部样式
.bottom {
  height: 155rpx;
  text-align: center;
  color: #999999;
  background-color: #f4f4f4;
  display: block;
}
.backtop {
  position: fixed;
  bottom: 10rpx;
  right: 10rpx;
  width: 90rpx;
  height: 90rpx;
  border-radius: 50%;
  background-color: #fafafa;
  font-size: 24rpx;
  text-align: center;
}
</style>

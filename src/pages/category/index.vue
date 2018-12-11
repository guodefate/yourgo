<template>
  <div class="category nav-content">
    <!-- 顶部的搜索栏 -->
    <search></search>
    <div class="category-box">
      <div class="left">
        <scroll-view scroll-y>
          <div class="item" :class="isSelect==index?'active':''" v-for="(item, index) in categoryList" :key="item.cat_id" @click="isSelect=index">
            {{item.cat_name}}
          </div>
        </scroll-view>
      </div>
      <div class="right">
        <scroll-view scroll-y>
          <image src='../../../static/icon/titleImage.png'></image>
          <div class="section" v-for="(item, index) in categoryList[isSelect].children" :key="index">
            <div class="section-title">
              {{item.cat_name}}
            </div>
            <div class="div">
              <div class="section-content" v-for="(it, i) in item.children" :key="it.cat_id">
                <image :src="'https://autumnfish.cn/wx/'+it.cat_icon"></image>
                <text>{{it.cat_name}}</text>

              </div>
            </div>
          </div>

        </scroll-view>
      </div>
    </div>
  </div>
</template>
<script>
//导入组件
import search from "../../components/search";
//导入hxios
import hxios from "../../utils/index.js";
export default {
  data: function() {
    return {
      //分类列表
      categoryList: [],
      //是否选中
      isSelect: 1
    };
  },
  //注册组件
  components: {
    search
  },
  created() {
    hxios.get("api/public/v1/categories").then(res => {
      console.log(res);
      this.categoryList = res.data.message;
    });
  }
};
</script>
<style lang='scss'>
$uRed: #ff2d4a;
page {
  height: 100%;
  .category {
    height: 100%;
  }
  .category-box {
    height: 100%;
    .left {
      height: 100%;
      scroll-view {
        height: 100%;
      }
    }
    .right {
      height: 100%;
      scroll-view {
        height: 100%;
      }
    }
  }
}
.category-box {
  display: flex;
  .left {
    width: 200rpx;

    scroll-view {
      .item {
        height: 100rpx;
        line-height: 100rpx;
        text-align: center;
        font-size: 26rpx;
        border-bottom: 1px solid #f1f1f1;
        &.active {
          color: $uRed;
          position: relative;
        }
        &.active:before {
          content: "";
          width: 10rpx;
          height: 60rpx;
          position: absolute;
          top: 20rpx;
          background-color: $uRed;
          left: 0;
        }
      }
    }
  }
  .right {
    flex: 1;
    scroll-view {
      padding: 16rpx;
      // 怪异盒模型
      box-sizing: border-box;
      image {
        width: 100%;
        height: 180rpx;
      }
      .section {
        .section-title {
          padding: 40rpx 0;
          text-align: center;
          font-size: 24rpx;
        }
        .div {
          display: flex;
          flex-wrap: wrap;
          .section-content {
            flex-wrap: wrap;
            width: 33.33%;
            image {
              width: 120rpx;
              height: 80rpx;
              display: block;
              margin: 0 auto;
            }
            text {
              text-align: center;
              font-size: 22rpx;
              display: block;
              padding: 20rpx;
            }
          }
        }
      }
    }
  }
}
</style>

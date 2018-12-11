<template>
  <div class="search">
    <div class="search-input">
      <i class="iconfont icon-sousuo"></i>
      <input type="text" placeholder="请输入你想要的商品" @confirm="search" v-model.trim="key">
      <button>取消</button>
    </div>
    <div class="search-history">
      <div class="history-title">
        <text> 历史搜索</text>
        <i class="iconfont icon-shanchu"> </i>
      </div>
      <div class="history-content">
        <div class="item" v-for="(item, index) in historyList" :key="index">
          {{item}}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      //搜索内容
      key: "",
      // 搜索历史
      historyList: []
    };
  },
  methods: {
    search() {
      // console.log(this.key);
      this.historyList.push(this.key);
    }
  },
  onShow() {
    console.log("页面显示");
    wx.getStorage({
      key: "history",
      success: res => {
        // console.log(res.data);
        // 保存数据
        this.historyList = res.data;
      },
      fail: () => {
        console.log("失败啦");
      },
      complete: () => {}
    });
  },
  onUnload() {
    // console.log('卸载了');
    wx.setStorage({
      key: "history",
      //   插件提示的是 value 但是是错的 官方文档是 data
      //   value: this.historyList
      data: this.historyList
    });
  }
};
</script>
<style lang='scss'>
.search {
  .search-input {
    height: 120rpx;
    background-color: #eeeeee;
    padding: 0 20rpx;
    box-sizing: border-box;
    position: relative;
    display: flex;
    align-items: center;
    .iconfont {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 40rpx;
      color: #ccc;
    }
    input {
      padding-left: 70rpx;
      background-color: white;
      font-size: 26rpx;
      flex: 1;
      margin-right: 16rpx;
      height: 60rpx;
    }
    button {
      width: 160rpx;
      height: 60rpx;
      border: 1px solid gray;
      text-align: center;
      line-height: 60rpx;
    }
  }
  .search-history {
    padding: 28rpx 20rpx 0;
    .history-title {
      display: flex;
      justify-content: space-between;
      font-size: 26rpx;
      .iconfont {
        color: #ccc;
      }
    }
    .history-content {
      display: flex;
      flex-wrap: wrap;
      padding-top: 30rpx;
      .item {
        padding: 16rpx 20rpx;
        background-color: #dddddd;
        margin-right: 30rpx;
        font-size: 26rpx;
        margin-bottom: 20rpx;
      }
    }
  }
}
</style>

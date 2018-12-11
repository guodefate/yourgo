<template>
    <div class="nav">
        <i class="iconfont icon-sousuo"></i>
        <input type="text" placeholder="搜索">
    </div>
</template>
<script>
</script>
<style lang="scss">
$uRed: #ff2d4a;
.nav {
  padding: 20rpx 16rpx;
  background-color: $uRed;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  //怪异盒模型
  box-sizing: border-box;
  z-index: 9999;
  i.icon-sousuo {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-220%, -50%);
    color: #bbb;
  }
  input {
    height: 60rpx;
    background-color: white;
    text-align: center;
    color: #bbb;
    font-size: 24rpx;
    border-radius: 5rpx;
  }
}
</style>


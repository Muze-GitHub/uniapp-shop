<template name="skeleton">
  <view class="sk-container">
    <view class="viewport viewport">
      <view is="pages/index/components/CustomNavbar">
        <view class="navbar CustomNavbar--navbar" style="padding-top: 20px">
          <view class="logo CustomNavbar--logo">
            <image class="CustomNavbar--logo-image"></image>
            <text class="logo-text CustomNavbar--logo-text">新鲜 · 亲民 · 快捷</text>
          </view>
          <view class="search CustomNavbar--search">
            <text class="icon-search CustomNavbar--icon-search">搜索商品</text>
            <text class="icon-scan CustomNavbar--icon-scan sk-pseudo sk-pseudo-circle"></text>
          </view>
        </view>
      </view>
      <scroll-view scroll-y="true" class="scroll-view scroll-view" refresher-enabled="true">
        <view is="components/XtxSwiper">
          <view class="carousel XtxSwiper--carousel">
            <swiper circular="true" current="0" interval="3000" autoplay="false">
              <swiper-item
                style="
                  position: absolute;
                  width: 100%;
                  height: 100%;
                  transform: translate(0%, 0px) translateZ(0px);
                "
              >
                <navigator class="navigator XtxSwiper--navigator" hover-class="none">
                  <image class="image XtxSwiper--image sk-image" mode="aspectFill"></image>
                </navigator>
              </swiper-item>
            </swiper>
            <view class="indicator XtxSwiper--indicator">
              <text class="dot XtxSwiper--dot active XtxSwiper--active"></text>
              <text class="dot XtxSwiper--dot"></text>
              <text class="dot XtxSwiper--dot"></text>
              <text class="dot XtxSwiper--dot"></text>
              <text class="dot XtxSwiper--dot"></text>
            </view>
          </view>
        </view>
        <view is="pages/index/components/CateGoryPanel">
          <view class="category CateGoryPanel--category">
            <navigator class="category-item CateGoryPanel--category-item" hover-class="none">
              <image class="icon CateGoryPanel--icon sk-image"></image>
              <text class="text CateGoryPanel--text sk-transparent sk-text-14-2857-5 sk-text"
                >居家</text
              >
            </navigator>
            <navigator class="category-item CateGoryPanel--category-item" hover-class="none">
              <image class="icon CateGoryPanel--icon sk-image"></image>
              <text class="text CateGoryPanel--text sk-transparent sk-text-14-2857-698 sk-text"
                >锦鲤</text
              >
            </navigator>
            <navigator class="category-item CateGoryPanel--category-item" hover-class="none">
              <image class="icon CateGoryPanel--icon sk-image"></image>
              <text class="text CateGoryPanel--text sk-transparent sk-text-14-2857-515 sk-text"
                >服饰</text
              >
            </navigator>
            <navigator class="category-item CateGoryPanel--category-item" hover-class="none">
              <image class="icon CateGoryPanel--icon sk-image"></image>
              <text class="text CateGoryPanel--text sk-transparent sk-text-14-2857-600 sk-text"
                >母婴</text
              >
            </navigator>
            <navigator class="category-item CateGoryPanel--category-item" hover-class="none">
              <image class="icon CateGoryPanel--icon sk-image"></image>
              <text class="text CateGoryPanel--text sk-transparent sk-text-14-2857-779 sk-text"
                >个护</text
              >
            </navigator>
            <navigator class="category-item CateGoryPanel--category-item" hover-class="none">
              <image class="icon CateGoryPanel--icon sk-image"></image>
              <text class="text CateGoryPanel--text sk-transparent sk-text-14-2857-445 sk-text"
                >严选</text
              >
            </navigator>
            <navigator class="category-item CateGoryPanel--category-item" hover-class="none">
              <image class="icon CateGoryPanel--icon sk-image"></image>
              <text class="text CateGoryPanel--text sk-transparent sk-text-14-2857-64 sk-text"
                >数码</text
              >
            </navigator>
            <navigator class="category-item CateGoryPanel--category-item" hover-class="none">
              <image class="icon CateGoryPanel--icon sk-image"></image>
              <text class="text CateGoryPanel--text sk-transparent sk-text-14-2857-328 sk-text"
                >运动</text
              >
            </navigator>
            <navigator class="category-item CateGoryPanel--category-item" hover-class="none">
              <image class="icon CateGoryPanel--icon sk-image"></image>
              <text class="text CateGoryPanel--text sk-transparent sk-text-14-2857-79 sk-text"
                >杂项</text
              >
            </navigator>
            <navigator class="category-item CateGoryPanel--category-item" hover-class="none">
              <image class="icon CateGoryPanel--icon sk-image"></image>
              <text class="text CateGoryPanel--text sk-transparent sk-text-14-2857-324 sk-text"
                >品牌</text
              >
            </navigator>
          </view>
        </view>
        <view is="pages/index/components/HotPanel">
          <view class="panel HotPanel--panel hot HotPanel--hot">
            <view class="item HotPanel--item">
              <view class="title HotPanel--title">
                <text
                  class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-375 sk-text"
                  >特惠推荐</text
                >
                <text
                  class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-23 sk-text"
                  >精选全攻略</text
                >
              </view>
              <navigator class="cards HotPanel--cards" hover-class="none">
                <view>
                  <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
                </view>
                <view>
                  <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
                </view>
              </navigator>
            </view>
            <view class="item HotPanel--item">
              <view class="title HotPanel--title">
                <text
                  class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-843 sk-text"
                  >爆款推荐</text
                >
                <text
                  class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-307 sk-text"
                  >最受欢迎</text
                >
              </view>
              <navigator class="cards HotPanel--cards" hover-class="none">
                <view>
                  <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
                </view>
                <view>
                  <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
                </view>
              </navigator>
            </view>
            <view class="item HotPanel--item">
              <view class="title HotPanel--title">
                <text
                  class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-992 sk-text"
                  >一站买全</text
                >
                <text
                  class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-187 sk-text"
                  >精心优选</text
                >
              </view>
              <navigator class="cards HotPanel--cards" hover-class="none">
                <view>
                  <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
                </view>
                <view>
                  <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
                </view>
              </navigator>
            </view>
            <view class="item HotPanel--item">
              <view class="title HotPanel--title">
                <text
                  class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-640 sk-text"
                  >新鲜好物</text
                >
                <text
                  class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-870 sk-text"
                  >生活加分项</text
                >
              </view>
              <navigator class="cards HotPanel--cards" hover-class="none">
                <view>
                  <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
                </view>
                <view>
                  <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
                </view>
              </navigator>
            </view>
          </view>
        </view>
      </scroll-view>
    </view>
  </view>
</template>

<style>
/*
此文件为开发者工具生成，生成时间: 2024/4/10上午10:10:33

在 /Users/meizu/Downloads/PIC/canvas/threejs/uniapp/heima-shop/dist/dev/mp-weixin/pages/index/index.wxss 中引入样式
```
@import "./index.skeleton.wxss";
```

更多详细信息可以参考文档：https://developers.weixin.qq.com/miniprogram/dev/devtools/skeleton.html
*/
.sk-transparent {
  color: transparent !important;
}
.sk-text-3-5714-651 {
  background-image: linear-gradient(
    transparent 3.5714%,
    #eeeeee 0%,
    #eeeeee 96.4286%,
    transparent 0%
  ) !important;
  background-size: 100% 28rpx;
  position: relative !important;
}
.sk-text {
  background-origin: content-box !important;
  background-clip: content-box !important;
  background-color: transparent !important;
  color: transparent !important;
  background-repeat: repeat-y !important;
}
.sk-text-14-2857-609 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 39.2rpx;
  position: relative !important;
}
.sk-text-14-2857-5 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-698 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-515 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-600 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-779 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-445 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-64 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-328 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-79 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-324 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-375 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 44.8rpx;
  position: relative !important;
}
.sk-text-14-2857-23 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-text-14-2857-843 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 44.8rpx;
  position: relative !important;
}
.sk-text-14-2857-307 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-text-14-2857-992 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 44.8rpx;
  position: relative !important;
}
.sk-text-14-2857-187 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-text-14-2857-640 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 44.8rpx;
  position: relative !important;
}
.sk-text-14-2857-870 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-image {
  background: #efefef !important;
}
.sk-pseudo::before,
.sk-pseudo::after {
  background: #efefef !important;
  background-image: none !important;
  color: transparent !important;
  border-color: transparent !important;
}
.sk-pseudo-rect::before,
.sk-pseudo-rect::after {
  border-radius: 0 !important;
}
.sk-pseudo-circle::before,
.sk-pseudo-circle::after {
  border-radius: 50% !important;
}
.sk-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: transparent;
}
</style>

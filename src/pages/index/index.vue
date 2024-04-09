<script setup lang="ts">
import CateGoryPanel from './components/CateGoryPanel.vue'
import CustomNavBar from './components/CustomNavbar.vue'
import Skeleton from './components/Skeleton.vue'
import HotPanel from './components/HotPanel.vue'
import { onLoad } from '@dcloudio/uni-app'
import { getHomeBannerAPI, getHomeCategoryAPI, getHotItemAPI } from '@/services/home'
import type { BannerItem, CateGoryItem, HotItem } from '@/types/home'

import { ref } from 'vue'
const bannerData = ref<BannerItem[]>([])
const categoryData = ref<CateGoryItem[]>([])
const hotData = ref<HotItem[]>([])
const guessRef = ref()
const isLoading = ref(false)
const isMounted = ref(false)

onLoad(async () => {
  await Promise.all([getHomeBannerAPI(), getHomeCategoryAPI(), getHotItemAPI()]).then((values) => {
    bannerData.value = values[0].result
    categoryData.value = values[1].result
    hotData.value = values[2].result
  })
  isMounted.value = true
})

const onScrollBottom = () => {
  guessRef.value.loadMore()
  console.log('滚动到底部了')
}

const onRefresh = async () => {
  isLoading.value = true
  await guessRef.value.refreshData()
  isLoading.value = false
  console.log('下拉刷新数据')
}
</script>
<template>
  <view class="viewport">
    <CustomNavBar />
    <view v-if="!isMounted">
      <Skeleton />
    </view>
    <scroll-view
      v-else
      scroll-y
      class="scroll-view"
      :refresher-enabled="true"
      :refresher-triggered="isLoading"
      @scrolltolower="onScrollBottom"
      @refresherrefresh="onRefresh"
    >
      <XtxSwiper :data="bannerData" />
      <CateGoryPanel :data="categoryData" />
      <HotPanel :data="hotData" />
      <XtxGuess ref="guessRef" />
    </scroll-view>
  </view>
</template>

<style lang="scss">
page {
  background-color: #f7f7f7;
  height: 100%;
  overflow: hidden;
}

.viewport {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.scroll-view {
  flex: 1;
  overflow: hidden;
}
</style>

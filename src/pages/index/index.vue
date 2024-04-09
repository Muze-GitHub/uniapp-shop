<script setup lang="ts">
import CateGoryPanel from './components/CateGoryPanel.vue'
import { onLoad } from '@dcloudio/uni-app'
import CustomNavBar from './components/CustomNavbar.vue'
import { getHomeBannerAPI, getHomeCategoryAPI } from '@/services/home'
import type { BannerItem, CateGoryItem } from '@/types/home'

import { ref } from 'vue'
const bannerData = ref<BannerItem[]>([])
const categoryData = ref<CateGoryItem[]>([])

onLoad(async () => {
  const result = await getHomeBannerAPI()
  bannerData.value = result.result
  const categoryRes = await getHomeCategoryAPI()
  categoryData.value = categoryRes.result
})
</script>
<template>
  <CustomNavBar />
  <XtxSwiper :data="bannerData" />
  <CateGoryPanel :data="categoryData" />
</template>

<style lang="scss">
//
</style>

import type { BannerItem, CateGoryItem } from '@/types/home'
import { http } from '@/utils/http'

export const getHomeBannerAPI = (distributionSite = 1) => {
  return http<BannerItem[]>({
    url: '/home/banner',
    data: {
      distributionSite,
    },
  })
}

export const getHomeCategoryAPI = () => {
  return http<CateGoryItem[]>({
    url: '/home/category/mutli',
  })
}

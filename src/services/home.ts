import type { PageParams, PageResult } from '@/types/global'
import type { HotItem, BannerItem, CateGoryItem, GuessItem } from '@/types/home'
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

export const getHotItemAPI = () => {
  return http<HotItem[]>({
    url: '/home/hot/mutli',
  })
}

export const getHomeGuessLikeAPI = (data?: PageParams) => {
  return http<PageResult<GuessItem>>({
    url: '/home/goods/guessLike',
    data,
  })
}

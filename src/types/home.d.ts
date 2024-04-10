import type { GoodsItem } from './global'

/** 首页-广告区域数据类型 */
export type BannerItem = {
  /** 跳转链接 */
  hrefUrl: string
  /** id */
  id: string
  /** 图片链接 */
  imgUrl: string
  /** 跳转类型 */
  type: number
}

export type CateGoryItem = {
  id: string
  name: string
  icon: string
}

export type HotItem = {
  id: string
  alt: string
  pictures: string[]
  target: string
  title: string
  type: string
}

/** 猜你喜欢-商品类型 */
export type GuessItem = GoodsItem

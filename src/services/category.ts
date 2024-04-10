import type { CategoryTopItem } from '@/types/category'
import { http } from '@/utils/http'

export const getCategoryTopAPI = () => {
  return http<CategoryTopItem[]>({
    url: '/category/top',
  })
}

import type { ProfileDetail, ProfileParams } from '@/types/member'
import { http } from '@/utils/http'

export const getProfileAPI = () => {
  return http<ProfileDetail>({
    url: '/member/profile',
  })
}

export const updateProfileAPI = (data: ProfileParams) => {
  return http({
    url: '/member/profile',
    method: 'PUT',
    data,
  })
}

// export const uploadImage = (name: string, filePath: string) => {
//   return http({
//     url:'/member/profile/avatar',

//   })
// }

import { type AddressItem, type AddressParams } from '@/types/address'
import { http } from '@/utils/http'

export const getAddressAPI = () => {
  return http<AddressParams>({
    url: '/member/address',
  })
}

export const addAddressAPI = (data: AddressParams) => {
  return http({
    url: '/member/address',
    method: 'POST',
    data,
  })
}

export const getMemberAddressAPI = () => {
  return http<AddressItem[]>({
    url: '/member/address',
  })
}

export const deleteMemberAddressByIdAPI = (id: string) => {
  return http({
    method: 'DELETE',
    url: `/member/address/${id}`,
  })
}

export const getAddressByIdAPI = (id: string) => {
  return http<AddressItem>({
    url: `/member/address/${id}`,
  })
}

export const updateAddressAPI = (id: string, data: AddressParams) => {
  return http<AddressItem>({
    url: `/member/address/${id}`,
    method: 'PUT',
    data,
  })
}

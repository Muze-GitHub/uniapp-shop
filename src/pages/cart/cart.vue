<template>
  <div class="app">
    <button @click="openSkuPopup">打开SKU组件</button>

    <vk-data-goods-sku-popup
      ref="skuPopup"
      v-model="skuKey"
      :border-radius="20"
      :localdata="goodsInfo"
      :mode="skuMode"
      @open="onOpenSkuPopup"
      @close="onCloseSkuPopup"
      @add-cart="addCart"
      @buy-now="buyNow"
    ></vk-data-goods-sku-popup>
  </div>
</template>

<script>
import { ref } from 'vue'

let skuPopup
let goodsInfo = ref({})
let skuKey = ref(false)
let skuMode = ref(1)

export default {
  setup() {
    const openSkuPopup = () => {
      // 模拟获取商品信息
      goodsInfo.value = {
        _id: '002',
        name: '迪奥香水',
        goods_thumb:
          'https://res.lancome.com.cn/resources/2020/9/11/15998112890781924_920X920.jpg?version=20200917220352530',
        sku_list: [
          {
            _id: '004',
            goods_id: '002',
            goods_name: '迪奥香水',
            image:
              'https://res.lancome.com.cn/resources/2020/9/11/15998112890781924_920X920.jpg?version=20200917220352530',
            price: 19800,
            sku_name_arr: ['50ml/瓶'],
            stock: 100,
          },
          {
            _id: '005',
            goods_id: '002',
            goods_name: '迪奥香水',
            image:
              'https://res.lancome.com.cn/resources/2020/9/11/15998112890781924_920X920.jpg?version=20200917220352530',
            price: 9800,
            sku_name_arr: ['70ml/瓶'],
            stock: 100,
          },
        ],
        spec_list: [
          {
            list: [
              {
                name: '20ml/瓶',
              },
              {
                name: '50ml/瓶',
              },
              {
                name: '70ml/瓶',
              },
            ],
            name: '规格',
          },
        ],
      }
      skuKey.value = true
    }

    const onOpenSkuPopup = () => {
      console.log('监听 - 打开sku组件')
    }

    const onCloseSkuPopup = () => {
      console.log('监听 - 关闭sku组件')
    }

    const addCartFn = (obj) => {
      const { selectShop } = obj
      // 模拟添加到购物车逻辑
      let res = {}
      let name = selectShop.goods_name
      if (selectShop.sku_name !== '默认') {
        name += '-' + selectShop.sku_name_arr
      }
      res.msg = `${name} 已添加到购物车`
      if (typeof obj.success === 'function') obj.success(res)
    }

    const addCart = (selectShop) => {
      console.log('监听 - 加入购物车')
      addCartFn({
        selectShop: selectShop,
        success: function (res) {
          // 实际业务时,请替换自己的加入购物车逻辑
          toast(res.msg)
          setTimeout(function () {
            skuKey.value = false
          }, 300)
        },
      })
    }

    const buyNow = (selectShop) => {
      console.log('监听 - 立即购买')
      addCartFn({
        selectShop: selectShop,
        success: function (res) {
          // 实际业务时,请替换自己的立即购买逻辑
          toast('立即购买')
        },
      })
    }

    const toast = (msg) => {
      // 自定义 toast 函数
      console.log(msg)
    }

    return {
      skuPopup,
      goodsInfo,
      skuKey,
      skuMode,
      openSkuPopup,
      onOpenSkuPopup,
      onCloseSkuPopup,
      addCart,
      buyNow,
      toast,
    }
  },
}
</script>

<style scoped>
.app {
  padding: 30px;
  font-size: 28px;
}
</style>

<script setup>
  import { ref, computed } from 'vue';
  import { useCommonStore } from '@/pinia/common'
  const CDN_DOMAIN = ref(import.meta.env.VITE_CDN_DOMAIN)
  console.log('CDN_DOMAIN', CDN_DOMAIN.value)
  const commonStore = useCommonStore()

  const storeCount = computed(() => commonStore.count)

  let count = 0
  const doCount = () => {
    count += 1
    commonStore.SetCount(count)
  }
</script>

<template>
  <van-image class="absolute left-0 top-0 w-screen h-1000 z-1" :src="CDN_DOMAIN + '/images/test.jpg'"></van-image>
  <div class="msg relative z-2 text-50 mt-200">
    {{ storeCount }}
  </div>
  <van-button class="relative z-2" @click="doCount">加1</van-button>
</template>

<style lang="scss" scoped>
  
</style>
<script setup>
import { ref } from 'vue'
import { showToast } from 'vant'

defineProps({
  msg: String,
})

const count = ref(0)
const addCount = () => {
  count.value+=1
  showToast(count.value)
}
</script>

<template>
  <h1 class="w-full mt-100 text-center text-25">{{ msg }}</h1>
  <h2 class="w-full mt-30 text-center text-16 font-600">{{ count }}</h2>
  <van-button type="primary"  @click="addCount">+</van-button>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>

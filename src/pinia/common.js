import { defineStore } from "pinia";

export const useCommonStore = defineStore('common', {
  state: () => ({
    count: 0
  }),
  actions: {
    SetCount(count) {
      this.count = count
    }
  },
  persist: {
    key: import.meta.env.VITE_APP_TITLE + 'Common'
  },
})
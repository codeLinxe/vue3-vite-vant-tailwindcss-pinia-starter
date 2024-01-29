import { defineStore } from "pinia";

export const useUserStore = defineStore('user', {
  state: () => ({
    token: '',
    userInfo: {}
  }),
  actions: {
    SetToken(token) {
      this.token = token
    },
    SetUserInfo(data) {
      this.userInfo = data
    }
  },
  persist: {
    key: import.meta.env.VITE_APP_TITLE + 'User'
  },
})
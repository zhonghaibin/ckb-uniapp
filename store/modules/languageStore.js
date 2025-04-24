


import { defineStore } from 'pinia';
import { ref, watch } from "vue";

import i18n from "@/language/index.js"; // 需要用到 i18n

export const useLanguageStore = defineStore('language', {
  state: () => ({
    language: uni.getStorageSync('locale') || 'zh_CN',
  }),
  actions: {
    changeLanguage(val) {
      uni.setStorageSync('locale', val)
      this.language = val
      i18n.global.locale.value = val; // 这里修改 i18n 语言
    },
  },
  persist: true, // 启用持久化存储
});

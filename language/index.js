

import { createI18n } from 'vue-i18n'

import zh from './zh.json'
import en from './en.json'
const messages = {
  en,
  "zh_CN": zh,
  // 'zh-Hans': {
  //   ...zh,
  // },
}
const i18n = createI18n({
  legacy: false, // ⚠️ 重要：启用 Composition API 方式
  locale: '',
  globalInjection: true, // ✅ 允许 `t()` 在组件里使用
  silentTranslationWarn: true,
  messages,
})


export const translate = (key) => {
  if (!key) {
    return ''
  }
  return i18n.global.t(key)
}

export default i18n

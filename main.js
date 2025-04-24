import App from './App'
// import 'uno.css';

// 引入全局uview-plus


import uviewPlus, {
	setConfig
} from '@/uni_modules/uview-plus'




import pinia from '@/store/store.js'




import { Buffer } from 'buffer';  // 引入 Buffer
window.Buffer = Buffer;  // 将 Buffer 挂载到 window 上


import i18n from '@/language/index.js'

// import i18n from "";


import { useLanguageStore } from '@/store/modules/languageStore.js'


// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'


Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	...App
})

app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)

	// 确保在全局环境中使用 Buffer
	app.config.globalProperties.$pub = {
		go: (path) => {
			uni.navigateTo({
				url: path
			})
		}
	}
	app.use(pinia);

	// 确保 store 先初始化

	const languageStore = useLanguageStore(pinia);

	i18n.global.locale.value = languageStore.language;

	app.use(uviewPlus)
	app.use(i18n)
	return {
		app
	}
}
// #endif
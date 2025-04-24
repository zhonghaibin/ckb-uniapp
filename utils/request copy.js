/*  */
import axios from "axios";
import {
	UniAdapter
} from "uniapp-axios-adapter";


import {
	getToken,
	removeToken
} from "@/utils/auth";
import env from '@/utils/env.js'

const service = axios.create({
	baseURL: env.baseURL,
	timeout: 5000,
	adapter: UniAdapter, // 指定适配器
})
/*  */
service.interceptors.request.use(
	config => {
		// 拦截请求
		// const token = getToken()


		// config.headers['Authorization'] = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ3ZWJtYW4iLCJhdWQiOiJ1c2VyIiwiaWF0IjoxNzQxNzY1MzYxLCJleHAiOjE3NDE3Njg5NjEsInN1YiI6MX0.M8QPtfJctwGyPA4lltJq9-LIu-HDmY7Nv8KrQ3P1k0w'
		// config.headers['Accept-Language'] = 'zh_CN'


		// if (token) {
		// 	config.headers['Authorization'] = `Bearer ${token}`;
		// } else {
		// 	console.error('Token is missing or invalid');
		// }


		/*  */
		// config.headers['Content-Type'] = "application/json"
		// uni.hideLoading()
		return config
	},
	err => {
		// uni.hideLoading()
		uni.showToast({
			title: '请先登录',
			icon: "none"
		})
		return Promise.reject(err)
	}
)
/*  */
service.interceptors.response.use(
	response => {
		// console.log('原始响应', response);
		const data = response.data
		// uni.hideLoading()
		if (data.code != 200) {
			console.log(data.message, "network ");
			// uni.showToast({
			// 	title: data.message,
			// 	icon:"none"
			// })
			/*  */
			if (data.code == 502) { }
			if (data.code == 403) { }
			if (data.code == 401) {
				// console.log('401');
			}
		}
		/* 成功响应 */
		// console.log(data, "success 200");
		return data
	},
	err => {
		// uni.hideLoading()
		uni.showToast({
			title: '网络异常',
			icon: "none"
		})
		return Promise.reject(err)
	}
)





export default service
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
		const token = getToken()
		// console.log(token, "token");

		// config.headers['Access-Control-Allow-Origin'] = '*'
		// config.headers['Content-Type'] = 'application/json'
		// config.headers['Access-Control-Allow-Credentials'] = true
		// config.headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, OPTIONS'
		// config.headers['Access-Control-Allow-Headers'] = 'Content-Type, Authorization, X-Requested-With, Accept-Language'

		// config.headers['Authorization'] = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ3ZWJtYW4iLCJhdWQiOiJ1c2VyIiwiaWF0IjoxNzQxNzY1MzYxLCJleHAiOjE3NDE3Njg5NjEsInN1YiI6MX0.M8QPtfJctwGyPA4lltJq9-LIu-HDmY7Nv8KrQ3P1k0w'
		// config.headers['Accept-Language'] = 'zh_CN'

		if (token) {
			config.headers['Authorization'] = `${token}`;
		} else {
			// console.error('Token is missing or invalid');
		}
		config.headers['Accept-Language'] = uni.getStorageSync('locale')
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

service.interceptors.response.use(
		response => {
			const data = response.data;

			if (data.code !== 200) {
				console.log(data.message, "network error");

				if (data.code === 401) {
					// Handle 401 Unauthorized
					uni.showToast({
						title: '登录已过期,请重新连接钱包',
						icon: "none"
					});
					removeToken();
					uni.reLaunch({
						url: '/'
					});
				} else if (data.code === 403) {
					// Handle 403 Forbidden
				} else if (data.code === 502) {
					// Handle 502 Bad Gateway
				}
			}

			return data;
		},
		err => {
			uni.showToast({
				title: '网络异常',
				icon: "none"
			});
			return Promise.reject(err);
		}
	);



export default service
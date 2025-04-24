
import store from '@/store'
//请求二次封装
module.exports = (vm) => {
	// 初始化请求配置
	uni.$u.http.setConfig((config) => {
		// #ifndef H5
		config.baseURL = 'http://192.168.3.10:8787/v1';
		// #endif
		return config
	})
	// 请求拦截
	uni.$u.http.interceptors.request.use((config) => {
		//如果token存在，把token传递给后端
		let token = store?.state?.user?.token;
		if (token) {
			config.header['Authorization'] = token;
		}
		return config
	}, config => {
		return Promise.reject(config)
	})

	// 响应拦截
	uni.$u.http.interceptors.response.use((response) => {
		const data = response.data
		return data === undefined ? {} : data;
	}, (response) => {
		// 对响应错误做点什么 （statusCode !== 200）
		return Promise.reject(response)
	})
}
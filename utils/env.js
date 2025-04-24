
"use strict";
// 变量可自行添加修改
let token = uni.getStorageSync('token');

export default { //存放变量的容器
	//线上
	// baseURL: 'http://47.84.41.231:3000',
	// baseURL: 'http://47.84.41.231:3000',
	// baseURL: 'http://192.168.3.35:3000',
	//本地	
	// http://192.168.3.10:8787/v1/auth/login


	// ws 地址
	/* https://admin-cxc.xsztest.top/v1/user/info */
	wsUrl: 'wss://admin-cxc.xsztest.top/ws/',
	// wsUrl: 'wss://api.ckbio.top/ws/',
	
	// baseURL: 'http://192.168.3.10:8787/v1',
	baseURL: 'https://admin-cxc.xsztest.top/v1',
	// baseURL: 'https://api.ckbio.top/v1',

	// 静态
	// staticURL: 'http://192.168.3.10:8787',
	staticURL: 'https://admin-cxc.xsztest.top',
	// staticURL: 'https://api.ckbio.top',
	
	
	
	
	
	
	
	
	
	
	
	
	
	

	// 网络
	// NETWORK_URL: 'https://api.devnet.solana.com',
	// NETWORK_URL: 'https://api.mainnet-beta.solana.com/',
	NETWORK_URL: 'https://mainnet.helius-rpc.com/?api-key=2fadc3bb-fda2-4c57-af9d-8a164f73f022',

	// USDT 合约地址
	USDT_TOKEN_MINT: 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v',

	// 接收地址
	// RECEIVE_ADDRESS: '9kv674FLHaJKUhPFoNu2ohp39btxNPZLKLdMan7PU2zg',


	RECEIVE_ADDRESS: '3e71CqSwTdfXxxh5HnYjqju31a2WRQZXt68TkkUTLHpG', // 1
	// RECEIVE_ADDRESS: 'cz5ED65zSDVNXRaD35s4FMZtc4LUX6onn5q5MDkZ8uM', // 2



}

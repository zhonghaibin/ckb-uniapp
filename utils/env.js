
"use strict";
// 变量可自行添加修改
let token = uni.getStorageSync('token');

export default { //存放变量的容器
	// ws 地址
	wsUrl: 'wss://localhost:8787/ws/',

	baseURL: 'http://localhost:8787/v1',

	// 静态
	staticURL: 'http://localhost:8787',

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

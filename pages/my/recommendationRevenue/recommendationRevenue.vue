<template>
	<view>
		<view class="recommendation-revenue-title">

			<button @click="linkWallet">链接钱包</button>

			<button @click="getWallet">获取钱包12</button>
			<view>
				<text>钱包地址</text>
				<text>{{ wallet }}</text>
			</view>

			<button @click="switchWallet">切换钱包</button>


			<button @click="getWalletBalance">获取当前余额</button>


			<button @click="usdtTokenTransfer">usdt转账</button>






		</view>
	</view>

</template>


<script>
// import {
// 	Keypair
// } from "@solana/web3.js";
import bs58 from "bs58"
// import nacl from "tweetnacl";

export default {
	methods: {
		// 获取当前余额
		getWalletBalance() {
			window.tp.getCurrentBalance().then(res => {
				console.log(res, 'res getWalletBalance');
			})
		},
		// 链接钱包
		async linkWallet() {

			console.log(window.solana, "window.solana");
			if (window.tp) {
				window.tp.connectWallet({ walletTypes: ['eth', 'bsc', 'dot', 'sol'] }).then(res => {
					console.log(res, 'res');
				})
			} else {
				const resp = await window.solana.connect();

				const walletAddress = resp.publicKey.toBase58()
				uni.setStorageSync('walletAddress', walletAddress)
				this.publicKey = resp.publicKey.toString();
				uni.setStorageSync('publicKey', this.publicKey)
				// 2. 使用时间戳作为 nonce
				const nonce = Date.now().toString();
				this.nonce = nonce
				// 3. 对 nonce 进行签名
				const encodedMessage = new TextEncoder().encode(nonce);
				const {
					signature
				} = await window.solana.signMessage(encodedMessage, "utf8");
				// 4. 转换为 Base58 便于传输
				const signatureBase58 = bs58.encode(signature);
			}

		},
		// 切换钱包
		switchWallet() {
			window.tp.getWallet({ walletTypes: ['eth', 'bsc', 'dot', 'sol'], switch: true }).then(res => {
				console.log(res, 'res');
			})
		},
		// 获取钱包
		getWallet() {
			console.log(window.tp, 'window.tp');
			window.tp.getCurrentWallet().then(res => {
				console.log(res, 'res');
				this.wallet = res
			})
		},
		// usdt转账
		usdtTokenTransfer() {
			// 
			console.log('usdtTokenTransfer');
			window.tp.usdtTokenTransfer({
				from: 'CaGTvRyDdohCZp2teEVws9Mu1NqVUeAwSrrsZ8ZGWoiC',
				to: '3e71CqSwTdfXxxh5HnYjqju31a2WRQZXt68TkkUTLHpG',
				amount: '1',
			}).then(res => console.log(res, 'res usdtTokenTransfer'))

		}
	},
	data() {
		return {
			wallet: null
		}
	},
	onShow() {

		if (window.tp) {
			console.log("TokenPocket 可用");
		} else {
			console.log("请使用 TokenPocket App 或安装 TokenPocket 插件");
		}

		// console.log(window, 'window');
		// console.log(window.tp, 'window.tp');
		// console.log(window.tp.isTokenPocket, 'window.tp.isTokenPocket');
		// console.log(window.tp.usdtTokenTransfer, 'window.tp.usdtTokenTransfer');
	}
}
</script>
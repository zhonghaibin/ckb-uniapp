<template>
	<view>
		<u-gap height="100rpx"></u-gap>
		<view class="recommendation-revenue-title">钱包地址</view>
		<!-- 钱包地址 -->
	</view>
</template>

<script>
	import {
		setToken
	} from '@/utils/auth.js'
	import bs58 from "bs58"
	import nacl from "tweetnacl";
	// 
	import {
		Connection,
		PublicKey,
		Keypairk
	} from "@solana/web3.js";
	export default {
		methods: {
			async getList() {
				console.log('connectAndRequestAccount');
				// console.log(window, "window");
				// console.log(window.solana, 'solana');
				const resp = await window.solana.connect();
				const walletAddress = resp.publicKey.toBase58()
				uni.setStorageSync('walletAddress', walletAddress)
				this.publicKey = resp.publicKey.toString();

				uni.setStorageSync('publicKey', this.publicKey)
				// localStorage.setItem("publicKey", this.publicKey);
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
				let data = {
					address: this.publicKey,
					nonce,
					signature: signatureBase58
				}
				// await this.loginApi(data);
			},

		},
		data() {
			return {
				list: []
			};
		}
	}
</script>

<style lang="scss"></style>
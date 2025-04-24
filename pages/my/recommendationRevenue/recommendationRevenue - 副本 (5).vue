<template>
	<view>
		<u-gap height="100rpx"></u-gap>
		<view class="recommendation-revenue-title">钱包地址</view>
		<!-- 钱包地址 -->
	</view>
</template>

<script>
	// import WalletConnect from "@walletconnect/client";
	// import QRCodeModal from "@walletconnect/qrcode-modal";
	
	export default {
		methods: {

		},
		data() {
			return {
				list: []
			};
		},
		async onShow() {
			const connector = new WalletConnect({
				bridge: "https://bridge.walletconnect.org", // WalletConnect 默认桥接
			});
			if (!connector.connected) {
				await connector.createSession();
				QRCodeModal.open(connector.uri); // 显示二维码
			}
			connector.on("connect", (error, payload) => {
				if (error) {
					throw error;
				}
				QRCodeModal.close();
				const {
					accounts
				} = payload.params[0];
				console.log("WalletConnect 连接的钱包地址:", accounts[0]);
			});
		}
	}
</script>

<style lang="scss"></style>
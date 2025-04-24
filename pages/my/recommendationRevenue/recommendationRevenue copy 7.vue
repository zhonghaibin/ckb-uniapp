<template>
	<view>
		<u-gap height="100rpx"></u-gap>
		<view class="recommendation-revenue-title">推荐收益12312

		</view>

		<view>
			<button @click="loginParamHandle">
				登录获取钱包地址
			</button>

			<button @click="transferParamHandle">
				转账
			</button>
		</view>


	</view>
</template>

<script>
import WalletConnect from "@walletconnect/client";
import QRCodeModal from "@walletconnect/qrcode-modal";

const connector = new WalletConnect({
	bridge: "https://bridge.walletconnect.org", // WalletConnect 桥接服务器
	qrcodeModal: QRCodeModal, // 用于显示二维码
});

export default {
	methods: {



	},
	data() {
		return {
			walletObj: {
				address: '', // 用户钱包地址
				blockchain: '', // 区块链类型
				blockchainId: '', // 区块链ID
				name: "", // 钱包名称
				node: "", // 	当前连接的节点信息（通常是 RPC 地址）
				ns: "", // 命名空间，可能与特定区块链生态相关
				walletType: "", // 钱包类型
			}
		};
	},
	onShow() {


		// 检查是否已连接
		if (!connector.connected) {
			connector.createSession().then(() => {
				// 显示二维码，用户扫码连接
				QRCodeModal.open(connector.uri, () => {
					console.log("二维码已关闭");
				});
			});
		}

		// 监听连接事件
		connector.on("connect", (error, payload) => {
			if (error) {
				throw error;
			}
			const { accounts, chainId } = payload.params[0];
			console.log("连接成功", accounts, chainId);
		});

		// 监听断开事件
		connector.on("disconnect", (error) => {
			if (error) {
				throw error;
			}
			console.log("连接已断开");
		});

		const tx = {
			from: "你的钱包地址",
			to: "目标地址",
			data: "0x", // 交易数据
			value: "0x0", // 发送的金额
		};

		connector.sendTransaction(tx)
			.then((result) => {
				console.log("交易哈希", result);
			})
			.catch((error) => {
				console.error(error);
			});
	},
	onBackPress({ from }) {
		connector.killSession();
	}
}
</script>

<style lang="scss"></style>

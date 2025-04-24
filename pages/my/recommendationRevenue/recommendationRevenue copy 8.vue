<template>
	<view>
		<u-gap height="100rpx"></u-gap>
		<view class="recommendation-revenue-title">推荐收益12312</view>

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
		loginParamHandle() {
			// const loginParam = {
			// 	callbackUrl: "https://agent.xsztest.top/data.php",
			// 	action: "login",
			// 	actionId: Date.now().toString(), // 使用当前时间戳作为唯一的操作ID
			// 	blockchains: [{
			// 		chainId: "1",
			// 		network: "ethereum"
			// 	}],
			// 	dappIcon: "https://您的应用图标链接",
			// 	dappName: "您的应用名称",
			// 	protocol: "TokenPocket",
			// 	version: "2.0"
			// };
			// // 对参数进行编码
			// const encodedLoginParam = encodeURIComponent(JSON.stringify(loginParam));
			// // 设置链接的href属性
			// window.location.href = `tpoutside://pull.activity?param=${encodedLoginParam}`

			const loginParam = {
				callbackUrl: "https://agent.xsztest.top/data.php",
				action: "login",
				actionId: Date.now().toString(), // 使用当前时间戳作为唯一的操作ID
				blockchains: [{
					chainId: "101", // Solana 的 chainId 通常是 101
					network: "solana" // 指定 Solana 网络
				}],
				dappIcon: "https://您的应用图标链接",
				dappName: "您的应用名称",
				protocol: "TokenPocket",
				version: "2.0"
			};
			// 对参数进行编码
			const encodedLoginParam = encodeURIComponent(JSON.stringify(loginParam));
			// 设置链接的href属性
			window.location.href = `tpoutside://pull.activity?param=${encodedLoginParam}`
		},

		transferParamHandle() {
			const encodedTransferParam = encodeURIComponent(JSON.stringify(transferParam));


			console.log(window.location, "window.location");
			// 构建转账的参数
			const transferParam = {
				amount: 0.1, // 转账金额
				from: "AAs84XTbczrV6ijLxcMEd2rvasteoK6bpUBiezKS8dsH", // 发送方地址
				to: "CaGTvRyDdohCZp2teEVws9Mu1NqVUeAwSrrsZ8ZGWoiC", // 接收方地址
				symbol: "SOL", // 代币符号
				decimal: 9, // SOL 的小数位数为 9
				action: "transfer",
				actionId: `web-${Date.now()}`, // 使用当前时间戳作为唯一的操作ID
				blockchains: [{
					chainId: "101", // Solana 主网的 chainId
					network: "solana"
				}],
				dappIcon: "https://您的DApp图标链接",
				dappName: "您的DApp名称",
				protocol: "TokenPocket",
				callbackUrl: "https://您的回调URL",
				version: "2.0"
			};




			// document.getElementById('tp-transfer').href = `tpoutside://pull.activity?param=${encodedTransferParam}`;

			// uni.navigateTo({
			// 	url: `tpoutside://pull.activity?param=${encodedTransferParam}`
			// })

			window.location.href = `tpoutside://pull.activity?param=${encodedTransferParam}`


			// plus.runtime.openURL(`tpoutside://pull.activity?param=${encodedTransferParam}`);
		}



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

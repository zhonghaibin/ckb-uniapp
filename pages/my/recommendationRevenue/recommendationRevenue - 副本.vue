<template>
	<view>
		<u-gap height="100rpx"></u-gap>
		31231
		<view class="recommendation-revenue-title">推荐收益12312</view>

		<view>
			<button @click="loginParamHandle">
				登录获取钱包地址
			</button>

			<button @click="transferParamHandle">
				转账
			</button>




			<button @click="initWalletConnect">初始化</button>
			<button @click="connectWallet">连接</button>
			<button @click="sendTransaction">发送交易</button>
			<button @click="disconnectWallet">断开连接</button>
		</view>


	</view>
</template>

<script>
import SignClient from "@walletconnect/sign-client";

let signClient = null;
let session = null;

async function initWalletConnect() {
	signClient = await SignClient.init({
		projectId: "你的 WalletConnect 项目 ID",  // 在 WalletConnect Cloud 获取
		relayUrl: "wss://relay.walletconnect.com",
		metadata: {
			name: "你的 DApp 名称",
			description: "DApp 描述",
			url: "https://你的DApp.com",
			icons: ["https://你的DApp.com/logo.png"],
		},
	});

	console.log("WalletConnect 客户端已初始化:", signClient);
}
async function connectWallet() {
	if (!signClient) await initWalletConnect();

	const { uri, approval } = await signClient.connect({
		requiredNamespaces: {
			eip155: {
				methods: ["eth_sendTransaction", "personal_sign"],
				chains: ["eip155:1"],  // 以太坊主网
				events: ["chainChanged", "accountsChanged"],
			},
		},
	});

	if (uri) {
		console.log("钱包连接 URI:", uri);

		// **这里使用 TokenPocket 的 DeepLink**
		const tpLink = `tpdapp://wc?uri=${encodeURIComponent(uri)}`;
		window.location.href = tpLink;
	}

	// 等待用户批准连接
	session = await approval();
	console.log("连接成功!", session);
}
function getWalletInfo() {
	if (!session) return null;
	const accounts = session.namespaces.eip155.accounts;
	return accounts[0]; // 返回钱包地址
}
async function sendTransaction() {
	if (!session) {
		console.error("未连接钱包");
		return;
	}

	const tx = {
		from: "你的钱包地址",
		to: "目标地址",
		value: "0x38D7EA4C68000", // 0.01 ETH
		data: "0x",
	};

	const result = await signClient.request({
		topic: session.topic,
		chainId: "eip155:1",
		request: {
			method: "eth_sendTransaction",
			params: [tx],
		},
	});

	console.log("交易哈希:", result);
}
async function disconnectWallet() {
	if (session) {
		await signClient.disconnect({
			topic: session.topic,
			reason: { code: 6000, message: "用户主动断开连接" },
		});
		session = null;
	}
	console.log("钱包已断开连接");
}


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


	},
	onBackPress({ from }) {
	}
}
</script>

<style lang="scss"></style>

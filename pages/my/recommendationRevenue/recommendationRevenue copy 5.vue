<template>
	<view>
		<u-gap height="100rpx"></u-gap>
		<view class="recommendation-revenue-title">推荐收益</view>

		<!-- 钱包地址 -->
		<view class="recommendation-revenue-wallet-address mx-md	">
			<view class="recommendation-revenue-wallet-address-title">钱包地址</view>
			<view class="recommendation-revenue-wallet-address-address">{{ walletObj.address }}</view>
		</view>


		<button @click="getWalletAddress">
			登录获取钱包地址
		</button>

		<button @click="recharge">
			充值
		</button>

		<button @click="transfer">
			solona转账2
		</button>

		<button @click="sendMessage">
			发送消息
		</button>


	</view>
</template>

<script>
// web 3js
import { Connection, PublicKey, Transaction, SystemProgram } from "@solana/web3.js";
import * as web3 from "@solana/web3.js";
// console.log(web3.PublicKey, "web3");


// import { getAssociatedTokenAddress, createTransferInstruction } from "@solana/spl-token";

import {
	getAssociatedTokenAddress,
	createTransferInstruction,
	createAssociatedTokenAccountInstruction,
	getAccount
} from "@solana/spl-token";

import * as splToken from "@solana/web3.js";
console.log(splToken, "splToken");

// tp
var tp = require('tp-js-sdk')

export default {
	methods: {

		async sendMessage() {
			// 1. 连接钱包
			await window.solana.connect();
			const publicKey = window.solana.publicKey.toBase58();
			console.log("已连接钱包:", publicKey);

			// 2. 连接 Solana 网络
			const network = "https://api.mainnet-beta.solana.com"; // 主网
			const connection = new Connection(network);

			// 3. 创建交易
			const transaction = new Transaction();
			// （这里通常需要添加转账指令）

			// 4. 让用户在 TokenPocket 钱包里签名交易
			const signedTransaction = await window.solana.signTransaction(transaction);

			// 5. 发送交易
			// const signature = await connection.sendRawTransaction(signedTransaction.serialize());
			const signature = await window.solana.signAndSendTransaction(transaction);

			console.log("交易已发送，交易哈希:", signature);

			// 6. 签名消息
			const encodedMessage = new TextEncoder().encode('Hello, TokenPocket!');
			const signedMessage = await window.solana.signMessage(encodedMessage, "utf8");
			console.log("签名的消息:", signedMessage);
		},
		// 转账
		async transfer() {
			// 主网 测试网
			// const network = "https://api.mainnet-beta.solana.com";
			// const network = "https://api.testnet.solana.com";


			async function transferUSDT() {
				try {
					// 1️⃣ 连接 TokenPocket 钱包
					await window.solana.connect();
					// AAs84XTbczrV6ijLxcMEd2rvasteoK6bpUBiezKS8dsH
					const sender = new PublicKey(window.solana.publicKey.toBase58());
					console.log("已连接钱包:", sender.toBase58());

					// 发送方地址

					// 接受方地址

					// 2️⃣ 连接 Solana 网络
					const connection = new Connection("https://api.mainnet-beta.solana.com");

					// 3️⃣ USDT 合约地址
					const usdtMintAddress = new PublicKey("Es9vMFrzaCERhVAXyiWMJ2kpFrqpRjHLxvKPv5w2rKyD");

					// 4️⃣ 目标接收地址（修改为你的目标地址）
					const receiver = new PublicKey("CaGTvRyDdohCZp2teEVws9Mu1NqVUeAwSrrsZ8ZGWoiC");
					// 5️⃣ 获取 USDT 代币账户
					const senderTokenAccount = await getAssociatedTokenAddress(usdtMintAddress, sender);
					const receiverTokenAccount = await getAssociatedTokenAddress(usdtMintAddress, receiver);

					console.log("发送方 USDT 账户:", senderTokenAccount.toBase58());
					console.log("接收方 USDT 账户:", receiverTokenAccount.toBase58());

					// 6️⃣ 检查接收方 USDT 账户是否存在
					let transaction = new Transaction();
					console.log(transaction, "transaction");

					try {
						await getAccount(connection, receiverTokenAccount);
					} catch (error) {
						console.log("接收方 USDT 账户不存在，正在创建...");
						transaction.add(
							// sender,               // 付款人（谁出钱创建账户）
							// receiverTokenAccount, // 要创建的 USDT 账户
							// receiver,             // 账户归属者
							// usdtMintAddress       // USDT 合约地址
							createAssociatedTokenAccountInstruction(sender, receiverTokenAccount, receiver, usdtMintAddress)
						);
					}

					// 7️⃣ 添加 USDT 转账指令
					const amount = 1 * 1_000_000; // 1 USDT
					transaction.add(
						createTransferInstruction(senderTokenAccount, receiverTokenAccount, sender, amount)
					);

					// 8️⃣ 让 TokenPocket 钱包签名并发送交易
					const signature = await window.solana.signAndSendTransaction(transaction);
					console.log("交易已发送，交易哈希:", signature);

				} catch (error) {
					console.error("USDT 转账失败:", error);
				}
			}

			transferUSDT();

		},

		// 充值
		recharge() {
			console.log('recharge');

			const usdtContract = "0xdAC17F958D2ee523a2206206994597C13D831ec7"; // USDT ERC20 合约地址
			const toAddress = "0x目标地址"; // 充值目标地址
			const amount = "1000000"; // 1 USDT（USDT最小单位是 6 位小数，需要乘以 10^6）

			const txParams = {
				from: this.walletObj.address,
				to: usdtContract,
				value: "0",  // ERC20 代币转账，value 始终是 0
				data: "0xa9059cbb" + toAddress.replace("0x", "").padStart(64, "0") + BigInt(amount).toString(16).padStart(64, "0"),
				blockchain: "ethereum"
			};

			tp.signTransaction(txParams).then(res => {
				console.log("交易结果:", res);
			}).catch(err => {
				console.error("交易失败:", err);
			});

		},

		getWalletAddress() {
			console.log('getWalletAddress');

			tp.getCurrentWallet().then(res => {
				console.log(res, 'res getCurrentWallet');
				this.walletObj = res.data
			})

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
	}
}
</script>

<style lang="scss"></style>

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


	</view>
</template>

<script>
// web 3js
import { Connection, PublicKey, Transaction, SystemProgram } from "@solana/web3.js";
import { getAssociatedTokenAddress, createTransferInstruction } from "@solana/spl-token";
// tp
var tp = require('tp-js-sdk')

export default {
	methods: {
		// 转账
		transfer() {
			const network = "https://api.mainnet-beta.solana.com"; // Solana 主网
			const connection = new Connection(network);

			async function transferUSDT() {
				const sender = new PublicKey("CaGTvRyDdohCZp2teEVws9Mu1NqVUeAwSrrsZ8ZGWoiC"); // 发送者钱包地址
				const receiver = new PublicKey("3e71CqSwTdfXxxh5HnYjqju31a2WRQZXt68TkkUTLHpG"); // 接收者钱包地址
				const usdtMintAddress = new PublicKey("Es9vMFrzaCERhVAXyiWMJ2kpFrqpRjHLxvKPv5w2rKyD"); // USDT 合约地址
				const amount = 1000000; // 1 USDT（最小单位）

				const senderTokenAccount = await getAssociatedTokenAddress(usdtMintAddress, sender);
				const receiverTokenAccount = await getAssociatedTokenAddress(usdtMintAddress, receiver);

				const transaction = new Transaction().add(
					createTransferInstruction(senderTokenAccount, receiverTokenAccount, sender, amount)
				);

				// 使用 window.solana 签名交易
				try {
					await window.solana.connect(); // 连接钱包
					try {
						const signedTransaction = await window.solana.signTransaction(transaction); // 签名交易
						console.log("交易哈希:", signedTransaction);
					} catch (error) {
						console.log('error signedTransaction', error);
					}

					const signature = await connection.sendRawTransaction(signedTransaction.serialize()); // 发送交易
					console.log("交易哈希:", signature);
				} catch (error) {
					console.error("交易签名失败:", error);
				}
			}

			// 调用转账函数
			transferUSDT().catch(err => {
				console.error("转账失败:", err);
			});

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

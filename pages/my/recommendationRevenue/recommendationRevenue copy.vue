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
			solona转账2131
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
			const connection = new Connection("https://api.mainnet-beta.solana.com"); // 连接主网
			async function transferUSDT() {
				console.log('transferUSDT');
				console.log('1');

				const sender = new PublicKey("CaGTvRyDdohCZp2teEVws9Mu1NqVUeAwSrrsZ8ZGWoiC"); // 你的钱包
				const receiver = new PublicKey("3e71CqSwTdfXxxh5HnYjqju31a2WRQZXt68TkkUTLHpG"); // 目标钱包
				const usdtMintAddress = new PublicKey("Es9vMFrzaCERhVAXyiWMJ2kpFrqpRjHLxvKPv5w2rKyD"); // USDT 合约地址
				const amount = 1000000; // 1 USDT (最小单位是 10^6)

				// 获取发送方和接收方的 USDT 账户
				const senderTokenAccount = await getAssociatedTokenAddress(usdtMintAddress, sender);
				const receiverTokenAccount = await getAssociatedTokenAddress(usdtMintAddress, receiver);
				console.log('2');


				// 构造 USDT 转账交易
				const transaction = new Transaction().add(
					createTransferInstruction(senderTokenAccount, receiverTokenAccount, sender, amount)
				);
				console.log('3');
				// 使用 TokenPocket 进行交易签名
				console.log(transaction.serializeMessage, 'transaction.serializeMessage');
				console.log('3.5');
				let signedTx = null
				try {
					signedTx = await tp.sign({
						message: transaction.serializeMessage().toString("base64"),
					});
				} catch (error) {
					console.log('error signedTx', signedTx, error);

				}
				console.log('4');
				console.log("签名交易:", signedTx);

				// 发送交易到 Solana 网络
				const signature = await connection.sendRawTransaction(Buffer.from(signedTx, "base64"));
				console.log("交易哈希:", signature);

				return signature;
			}
			// 调用转账方法
			transferUSDT().catch(err => {
				console.error(err, 'err transferUSDT');
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

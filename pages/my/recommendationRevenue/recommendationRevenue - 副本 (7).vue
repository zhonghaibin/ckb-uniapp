<template>
	<view>
		<u-gap height="100rpx"></u-gap>
		<view class="recommendation-revenue-title">钱包地址</view>
		<!-- 钱包地址 -->
		
		
		<button @click="sendSol">send</button>
		<button @click="getBalance">getBalance</button>

	</view>
</template>

<script>
	import {
		Connection,
		Keypair,
		PublicKey,
		LAMPORTS_PER_SOL,
		Transaction,
		SystemProgram,
		sendAndConfirmTransaction
	} from "@solana/web3.js";



	// 连接到 Solana 主网
	const connection = new Connection("https://api.mainnet-beta.solana.com", "confirmed");

	// 1. 发送方（你的钱包）
	const senderPrivateKey = Uint8Array.from([
		5, 102, 110, 110, 4, 109, 113, 103, 117, 120, 117, 71, 56, 55, 102, 87, 89, 69, 71, 117, 104, 109, 66, 72,
		101, 116, 81, 85, 65, 55, 109, 50, 110, 76, 104, 69, 78, 109, 109, 110, 98, 80, 106, 52, 122, 113, 115, 56,
		86, 115, 70, 87, 53, 114, 100, 83, 83, 69, 88, 99, 71, 57, 97, 55, 122, 51, 78, 49, 84, 122, 114, 120, 110,
		72, 85, 112, 116, 75, 77, 106, 72, 65, 109, 84, 107, 57, 50
	]); // 你的私钥

	const senderWallet = Keypair.fromSecretKey(senderPrivateKey);
	const senderPublicKey = senderWallet.publicKey;
	console.log("发送方地址:", senderPublicKey.toString());

	// 2. 接收方钱包地址
	const receiverPublicKey = new PublicKey("9kv674FLHaJKUhPFoNu2ohp39btxNPZLKLdMan7PU2zg");

		console.log("发送方地址:", senderPublicKey.toString());
		console.log("接受方地址:", receiverPublicKey.toString());

	export default {
		methods: {
			async sendSol(amountSol) {
				try {
					console.log(`开始转账 ${amountSol} SOL 给 ${receiverPublicKey.toString()}...`);

					// 转换 SOL 到 lamports（1 SOL = 10^9 lamports）
					const amountLamports = amountSol * LAMPORTS_PER_SOL;

					// 创建交易
					const transaction = new Transaction().add(
						SystemProgram.transfer({
							fromPubkey: senderPublicKey,
							toPubkey: receiverPublicKey,
							lamports: amountLamports,
						})
					);

					// 发送交易
					const signature = await sendAndConfirmTransaction(connection, transaction, [senderWallet]);
					console.log("交易成功！交易哈希:", signature);
				} catch (error) {
					console.error("转账失败:", error);
				}
			},
			async getBalance(){
				const balance = await connection.getBalance(senderPublicKey);
				console.log("当前余额:", balance / LAMPORTS_PER_SOL, "SOL");
			},


		},
		data() {
			return {
				list: [],
				transactionId: null,
			};
		},
		async onShow() {


		}
	}
</script>

<style lang="scss"></style>
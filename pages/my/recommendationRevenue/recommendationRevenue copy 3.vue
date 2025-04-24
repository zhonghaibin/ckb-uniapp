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
import * as web3 from "@solana/web3.js";
// console.log(web3.PublicKey, "web3");


import { getAssociatedTokenAddress, createTransferInstruction } from "@solana/spl-token";

import * as splToken from "@solana/web3.js";
console.log(splToken, "splToken");

// tp
var tp = require('tp-js-sdk')

export default {
	methods: {
		// 转账
		async transfer() {

			const from = "CaGTvRyDdohCZp2teEVws9Mu1NqVUeAwSrrsZ8ZGWoiC"
			const to = "3e71CqSwTdfXxxh5HnYjqju31a2WRQZXt68TkkUTLHpG"

			const fromAddress = new web3.PublicKey(from)
			const toAddress = new web3.PublicKey(to)
			const usdcMintAddress = new web3.PublicKey('Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB')
			// console.log(splToken)
			/* 
			console.log("1sendAndConfirmTransaction")
			await web3.sendAndConfirmTransaction(connection, transaction, [payer]);
			
			console.log("2sendAndConfirmTransaction")
			
			 // Alternatively, manually construct the transaction
			
			 manualTransaction.add(
				 web3.SystemProgram.transfer({
					 fromPubkey: payer.publicKey,
					 toPubkey: toAccount.publicKey,
					 lamports: 1000,
				 }),
			 );
				 
			 let transactionBuffer = manualTransaction.serializeMessage();
			 let signature = nacl.sign.detached(transactionBuffer, payer.secretKey);
			  
			 manualTransaction.addSignature(payer.publicKey, signature);
			  
			 let isVerifiedSignature = manualTransaction.verifySignatures();
			 console.log(`The signatures were verified: ${isVerifiedSignature}`);
			  
			 // The signatures were verified: true
			  
			 let rawTransaction = manualTransaction.serialize();
			
			 await web3.sendAndConfirmRawTransaction(connection, rawTransaction); */


			// window.solana && window.solana.connect().then(res => {
			// 	console.log(window.solana.publicKey.toBase58())
			// });

			// api.devnet.solana.com
			let connection = new web3.Connection(web3.clusterApiUrl("devnet"), "confirmed");

			// const tokenAccounts = await connection.getTokenAccountsByOwner(
			// 	new web3.PublicKey('8YLKoCu7NwqHNS8GzuvA2ibsvLrsg22YMfMDafxh1B15'), {
			// 		programId: splToken.TOKEN_PROGRAM_ID,
			// 	}
			// );
			// let airdropSignature = await connection.requestAirdrop(
			// 	new web3.PublicKey(from),
			// 	web3.LAMPORTS_PER_SOL,
			// );

			let transaction = new web3.Transaction();

			transaction.add(
				splToken.Token.createTransferInstruction(
					splToken.TOKEN_PROGRAM_ID,
					usdcMintAddress,
					toAddress,
					fromAddress,
					[],
					amount
				)
			);

			// 发送交易

			let recentBlockhash = await connection.getLatestBlockhash();
			transaction.recentBlockhash = recentBlockhash.blockhash
			transaction.feePayer = fromAddress
			// const signature = await web3.sendAndConfirmTransaction(connection, transaction);
			const signedTransaction = await window.solana.signTransaction(transaction, connection);
			console.log(signedTransaction)
			// const signature = await connection.sendRawTransaction(signedTransaction.serialize());
			// console.log(2)
			// // var msg = "签名啦!， To avoid digital dognappers, sign below to authenticate with CryptoCorgis"
			// var encodedMessage = new TextEncoder().encode(signature);
			// var signedMsg = await window.solana.signMessage(encodedMessage);

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

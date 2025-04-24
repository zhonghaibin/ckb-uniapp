<template>
	<view>
		<u-gap height="100rpx"></u-gap>
		<view class="recommendation-revenue-title">钱包地址</view>
		<!-- 钱包地址 -->
		
		 <button @click="connectWallet">连接 Phantom 钱包</button>
		    <button @click="swapTokens">兑换 SOL 为 USDC</button>
		    <div v-if="transactionId">交易 ID: {{ transactionId }}</div>

	</view>
</template>

<script>
	// import WalletConnect from "@walletconnect/client";
	// import QRCodeModal from "@walletconnect/qrcode-modal";
	
	import { Connection, PublicKey, Transaction } from '@solana/web3.js';
	import { Token, TOKEN_PROGRAM_ID } from '@solana/spl-token';
	import { Market } from '@project-serum/serum';
	
	
	
	export default {
		methods: {
			async connectWallet() {
			      if (window.solana && window.solana.isPhantom) {
			        try {
			          const response = await window.solana.connect();
			          console.log('钱包连接成功！', response.publicKey.toString());
			        } catch (error) {
			          console.error('连接钱包失败', error);
			        }
			      } else {
			        alert('请安装 Phantom 钱包');
			      }
			    },
			    async swapTokens() {
			      try {
			        // 创建连接和市场
			        // const connection = new Connection('https://api.mainnet-beta.solana.com', 'confirmed');
					const connection = new Connection('https://api.devnet.solana.com', 'confirmed');
					console.log('1');

			        // const walletPublicKey = new PublicKey('用户的Solana钱包公钥');
					const walletPublicKey = new PublicKey(window.solana.publicKey.toString());
					console.log('2');
			        const marketAddress = new PublicKey('9wFFvPWTn1J8nD3gZzUmWzT4wvvF5WXp5wVLFD8Cux9w');
					console.log('3');
					// 3. 选择交易市场
					// const RAYDIUM_SOL_USDC_MARKET = new PublicKey('9wFFvPWTn1J8nD3gZzUmWzT4wvvF5WXp5wVLFD8Cux9w'); // Raydium
					// const SERUM_SOL_USDC_MARKET = new PublicKey('9xQeWvGNBgi5vR9H26x2s5gJfwYgAVyNLhXWyk2eznKz');  // Serum
			        const market = await Market.load(connection, marketAddress, {}, TOKEN_PROGRAM_ID);
					console.log('4');
			
			        // 获取用户 SOL 余额
			        const solBalance = await connection.getBalance(walletPublicKey);
					console.log(solBalance,"solBalance SOL 余额");
			        // 创建交易
			        const transaction = new Transaction();
			
			        // 创建兑换指令
			        const transactionInstruction = await market.makeSwapInstruction({
			          payer: walletPublicKey,
			          amount: solBalance,
			          side: 'sell',
			          otherSide: 'buy',
			        });
			
			        // 添加指令到交易
			        transaction.add(transactionInstruction);
			
			        // 获取最新块哈希
			        const { blockhash } = await connection.getLatestBlockhash();
			        transaction.recentBlockhash = blockhash;
			        transaction.feePayer = walletPublicKey;
			
			        // 签名并发送交易
			        const signedTransaction = await window.solana.signTransaction(transaction);
			        const txId = await connection.sendRawTransaction(signedTransaction.serialize(), {
			          skipPreflight: false,
			          preflightCommitment: 'confirmed',
			        });
			
			        // 显示交易 ID
			        this.transactionId = txId;
			        console.log('交易已提交，交易 ID:', txId);
			      } catch (error) {
			        console.error('兑换失败:', error);
			      }
			    },
		},
		data() {
			return {
				list: [],
				  transactionId: null,
			};
		},
		async onShow() {
			
			// 检查 Phantom 钱包是否安装
			if (window.solana && window.solana.isPhantom) {
			  console.log("Phantom 钱包已安装");
			} else {
			  alert("请安装 Phantom 钱包");
			}
			
			// // 连接到 Phantom 钱包
			// async function connectWallet() {
			//   try {
			//     const response = await window.solana.connect();
			//     console.log("钱包连接成功！", response.publicKey.toString());
			//   } catch (error) {
			//     console.error("连接钱包失败", error);
			//   }
			// }

		}
	}
</script>

<style lang="scss"></style>
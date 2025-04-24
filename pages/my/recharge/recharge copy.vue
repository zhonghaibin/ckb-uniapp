<style lang="scss" scoped>
.recharge-header {
	display: flex;
	// align-items: center;
	// justify-content: space-between;
	margin-left: 28rpx;

	.recharge-header-back {
		display: flex;
		align-items: center;
		justify-content: center;

		.recharge-header-back-icon {
			margin-right: 26rpx;



			image {
				width: 22rpx;



				height: 38rpx;
			}
		}

		.recharge-header-title {

			// width: 168rpx;
			// height: 36rpx;
			text {
				font-family: Source Han Sans CN;
				font-weight: 500;
				font-size: 36rpx;
				color: #FFFFFF;
				line-height: 64rpx;
			}
		}
	}
}

.recharge-search {
	margin: 0 30rpx;
}

.recharge-tag {
	display: flex;
	justify-content: space-between;
	margin: 0 30rpx;

	.recharge-tag-left {
		text {
			font-family: Source Han Sans CN;
			font-weight: 300;
			font-size: 24rpx;
			color: #FFFFFF;
			line-height: 64rpx;
		}
	}

	.recharge-tag-right {
		text {
			font-family: Source Han Sans CN;
			font-weight: 300;
			font-size: 24rpx;
			color: #FFFFFF;
			line-height: 64rpx;
		}
	}
}

.recharge-btn-wrapper {
	margin: 0 30rpx;
	height: 88rpx;
	background: linear-gradient(0deg, #47D7A5, #B5F4B3);
	border-radius: 44rpx;

	.recharge-btn {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}


	.recharge-btn-text {
		font-family: Source Han Sans CN;
		font-weight: bold;
		font-size: 36rpx;
		color: #0D081A;
		line-height: 64rpx;
	}
}

.recharge-list-wrapper {
	margin: 0 30rpx;
	// height: 472rpx;
	background: #110F20;
	border-radius: 30rpx;

	padding-bottom: 20rpx;

	.recharge-list-title {
		font-family: Source Han Sans CN;
		font-weight: 500;
		font-size: 36rpx;
		color: #FFFFFF;
		line-height: 64rpx;
		padding-top: 30rpx;
		padding-left: 30rpx;
	}

	.recharge-list-item-nav {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 30rpx;

		text {
			font-family: Source Han Sans CN;
			font-weight: 300;
			font-size: 24rpx;
			color: #999999;
			line-height: 64rpx;
		}

		.recharge-list-item-nav-left {
			text-align: left;
			width: 134rpx;
		}

		.recharge-list-item-nav-middle {
			text-align: left;
			width: 128rpx;
		}

		.recharge-list-item-nav-right {
			text-align: right;
			width: 238rpx;
		}
	}



	.recharge-list-item-content {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 30rpx;

		text {
			font-family: Source Han Sans CN;
			font-weight: 300;
			font-size: 30rpx;
			color: #FFFFFF;
			line-height: 64rpx;
		}

		.recharge-list-item-content-left {
			// width: 200rpx;
			text-align: left;
		}

		.recharge-list-item-content-middle {
			// width: 200rpx;
			text-align: left;
			font-family: Source Han Sans CN;
			font-weight: 300;
			font-size: 30rpx;
			color: #FFFFFF;
			line-height: 64rpx;
		}

		.recharge-list-item-content-right {
			// width: 200rpx;
			text-align: right;
		}
	}

}

// .u-popup__content
// ::v-deep .u-u-popup__content {
// 	background-color: #110F20 !important;
// }

.u-popup__content {
	background-color: #110F20 !important;
}

::v-deep .u-modal__title {
	color: white !important;
	font-size: 36rpx !important;
}



.recharge-url {
	display: flex;
	align-items: center;
	width: 360rpx;
	margin: 0 auto;
	justify-content: center;

	.url {
		font-family: Source Han Sans CN;
		font-weight: 300;
		font-size: 24rpx;
		color: #FFFFFF;
		line-height: 24rpx;

		margin-right: 42rpx;
	}

	.copy {
		font-family: Source Han Sans CN;
		font-weight: 300;
		font-size: 24rpx;
		color: #45E5AF;
		line-height: 24rpx;
	}
}
</style>


<style lang="scss"></style>

<template>
	<view class="">
		<z-paging ref="paging" v-model="list" bg-color="#0D081A" @query="getList">
			<view class="" slot="top">
				<NavBarCommon />
			</view>
			<view class="">
				<!-- 头部 -->
				<view class="recharge-header">
					<view class="recharge-header-back">
						<view class="recharge-header-back-icon" @click="goBack">
							<image src="/static/image/common/back.png" />
						</view>
						<view class="recharge-header-title">
							<text>USDT充值</text>
						</view>
					</view>
				</view>
				<u-gap height="14"></u-gap>
				<!-- search -->
				<view class="recharge-search ">
					<u-search placeholder="请输入充值金额" v-model="searchValue" searchIcon="" shape="circle" :show-action="false"
						bg-color="#110F20"></u-search>
				</view>
				<u-gap height="10"></u-gap>
				<!-- tag -->
				<view class="recharge-tag">
					<view class="recharge-tag-left">
						<text>余额:{{ Number(assets.amount).toFixed(0) }} USDT</text>
					</view>
					<view class="recharge-tag-right" v-if="false">
						<text>手续费:00</text>
					</view>
				</view>
				<u-gap height="26"></u-gap>
				<!-- btn -->
				<view class="recharge-btn-wrapper" @click="getBtn">
					<view class="recharge-btn">
						<text class="recharge-btn-text">确认</text>
					</view>
				</view>
				<u-gap height="21"></u-gap>
				<!-- list -->
				<view class="recharge-list-wrapper">
					<view class="recharge-list-title">
						<text>充值记录</text>
					</view>
					<view class="recharge-list-item-nav">
						<view class="recharge-list-item-nav-left">
							<text>金额</text>
						</view>
						<view class="recharge-list-item-nav-middle" v-if="true">
							<text>地址</text>
						</view>
						<view class="recharge-list-item-nav-right">
							<text>充值时间</text>
						</view>
					</view>
					<view class="recharge-list-item-content" v-for="(item, index) in rechargeListData.data" :key="index">
						<view class="recharge-list-item-content-left ">
							<text class=" flex">
								<text class="mr-xs">{{ Number(item.amount).toFixed(2) }}</text>
								<text class="" style="font-size: 20rpx;">USDT</text></text>
						</view>
						<view class="recharge-list-item-content-middle" v-if="true">
							<text>{{ item.signature || '暂无' }}</text>
						</view>
						<view class="recharge-list-item-content-right">
							<text>{{ item.created_at }}</text>
						</view>
					</view>
					<u-empty v-if="rechargeListData.data.length == 0"></u-empty>


				</view>
				<!--  -->




				<u-modal width="690rpx" :bgColor="'#110F20'" title="充值地址" :show="show7" :showConfirmButton="false"
					:showCancelButton="false" closeOnClickOverlay @confirm="() => show7 = false" :modelClose="true"
					@close="() => show7 = false">
					<view class="flex flex-column">
						<u-gap height="27"></u-gap>
						<view class="qrcode-wrapper">
							<view class="recharge-qrcode " style="margin: 0 auto;width: 260rpx;">
								<canvas id="qrcode" canvas-id="qrcode"
									style="width: 260rpx;height: 260rpx;border-radius: 24rpx;"></canvas>
							</view>
						</view>
						<u-gap height="25"></u-gap>
						<view class="recharge-url" style="margin: 0 auto;width: 384rpx;">
							<view class="url">钱包地址:Ox...v7dk</view>
							<view class="copy" @click="copy">复制</view>
						</view>
					</view>
				</u-modal>
			</view>
		</z-paging>
	</view>
</template>

<script>
import UQRCode from 'uqrcodejs'; // npm install uqrcodejs
import { rechargeList, recharge } from '@/api/index.js'
import { mapState, mapActions } from 'vuex'

import { Connection, Transaction, SystemProgram, LAMPORTS_PER_SOL, PublicKey } from '@solana/web3.js'
import { createTransferInstruction, getAssociatedTokenAddress, TOKEN_PROGRAM_ID, ASSOCIATED_TOKEN_PROGRAM_ID } from '@solana/spl-token'
// 转账相关

const NETWORK_URL = "https://mainnet.helius-rpc.com/?api-key=2fadc3bb-fda2-4c57-af9d-8a164f73f022" // 使用 Helius 的 RPC 节点

// USDT 代币地址 (Solana Mainnet)
const USDT_TOKEN_MINT = new PublicKey('Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB')

export default {
	computed: {
		...mapState('m_userInfo', ['avatar', 'identity', 'level', 'direct_count', 'direct_bonus', 'assets', 'share_link', 'share_code']),
	},
	methods: {
		...mapActions('m_userInfo', ['getUserInfo']),
		// 充值
		recharge() {
			let data = {
				amount: this.searchValue,
				identity: this.identity
			}
			recharge(data).then(res => {
				console.log(res, 'resss 充值成功')
				this.getUserInfo()
				this.searchValue = ''
				this.rechargeListApi()
				uni.showToast({
					title: '充值成功',
					icon: 'none'
				})
			})
		},


		// 转账
		async handleTransfer() {
			if (!this.walletAddress) {
				alert('请先连接钱包')
				return
			}
			try {
				// 转账参数
				const toAddress = '3e71CqSwTdfXxxh5HnYjqju31a2WRQZXt68TkkUTLHpG' // 接收地址
				const amount = 1 // 转账金额 (USDT)
				const decimals = 6 // USDT 的小数位数

				switch (this.currentWallet) {
					case 'phantom':
						if (!window.solana) {
							alert('Phantom 钱包未连接')
							return
						}
						// 创建连接
						const connection = new Connection(NETWORK_URL, {
							commitment: 'confirmed',
							confirmTransactionInitialTimeout: 5000 // 5 秒超时
						})

						try {
							// 获取发送方的 ATA (Associated Token Account)
							const senderATA = await getAssociatedTokenAddress(
								USDT_TOKEN_MINT,
								new PublicKey(this.walletAddress)
							)

							// 获取接收方的 ATA
							const recipientATA = await getAssociatedTokenAddress(
								USDT_TOKEN_MINT,
								new PublicKey(toAddress)
							)

							// 创建转账指令
							const transferInstruction = createTransferInstruction(
								senderATA,
								recipientATA,
								new PublicKey(this.walletAddress),
								amount * Math.pow(10, decimals) // 转换为最小单位
							)

							// 创建交易
							const transaction = new Transaction()
							transaction.add(transferInstruction)

							// 获取最新的区块哈希
							const { blockhash } = await connection.getLatestBlockhash('confirmed')
							transaction.recentBlockhash = blockhash
							transaction.feePayer = new PublicKey(this.walletAddress)

							// 发送交易给钱包签名并广播
							const { signature } = await window.solana.signAndSendTransaction(transaction)

							// 等待确认
							const confirmation = await connection.confirmTransaction(signature, 'confirmed')

							if (confirmation.value.err) {
								throw new Error('交易确认失败')
							}

							console.log('转账交易:', signature)
							alert('转账成功')
						} catch (err) {
							if (err.message.includes('failed to fetch')) {
								throw new Error('网络连接失败，请检查网络设置或稍后重试')
							}
							throw err
						}
						break
					case 'solflare':
						// Solflare 转账实现
						console.log('Solflare 转账功能开发中')
						alert('Solflare 转账功能开发中')
						break
					case 'sollet':
						// Sollet 转账实现
						console.log('Sollet 转账功能开发中')
						alert('Sollet 转账功能开发中')
						break
				}
			} catch (err) {
				console.error('转账失败:', err)
				alert('转账失败: ' + (err.message || '未知错误'))
			}
		},





		rechargeListApi() {
			rechargeList().then(res => {
				if (res.data) {
					this.rechargeListData = res.data
				}
			})
		},


		copy() {
			uni.setClipboardData({
				data: 'http:/dh2j.com',
				success: function () {
					console.log('success');
					uni.showToast({
						title: '复制成功',
						icon: 'none'
					})
				}
			});
		},
		goBack() {
			uni.navigateBack()
		},
		getBtn() {
			// console.log(this.searchValue)
			if (this.searchValue == '') return

			// solana充值

			// 充值接口
			this.recharge()
			return
		},
		getList() {
			this.$nextTick(() => {
				// this.$refs.paging.complete(this.list)
			})
		},
		createQRCode() {
			// 获取uQRCode实例
			var qr = new UQRCode();
			// 设置二维码内容
			qr.data = "https://uqrcode.cn/doc";
			// 设置二维码大小，必须与canvas设置的宽高一致
			qr.size = 130;
			// 调用制作二维码方法
			qr.make();
			// 获取canvas上下文
			var canvasContext = uni.createCanvasContext('qrcode', this); // 如果是组件，this必须传入
			// 设置uQRCode实例的canvas上下文
			qr.canvasContext = canvasContext;
			// 调用绘制方法将二维码图案绘制到canvas上
			qr.drawCanvas();
		}

	},
	onLoad() {
	},
	onShow() {
		this.rechargeListApi()

	},
	data() {
		return {
			walletAddress: uni.getStorageSync('walletAddress'),
			currentWallet: 'phantom',
			list: [],
			searchValue: '',
			show7: false,
			rechargeListData: {
				"current_page": 1,
				"data": [
					// {
					// 	"amount": "",
					// 	"created_at": ""
					// },
				],
				"first_page_url": "",
				"from": 0,
				"last_page": 0,
				"last_page_url": "",
				"links": [
					// {
					// 	"url": "",
					// 	"label": "",
					// 	"active": false
					// },
					// {
					// 	"url": "",
					// 	"label": "",
					// 	"active": true
					// },
					// {
					// 	"url": "",
					// 	"label": "",
					// 	"active": false
					// }
				],
				"next_page_url": "",
				"path": "",
				"per_page": 0,
				"prev_page_url": "",
				"to": 0,
				"total": 0
			},
		};
	},
};
</script>
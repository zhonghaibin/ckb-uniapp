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





<script setup>
import { ref, reactive, computed, onMounted } from 'vue';

import { rechargeList, rechargeApi } from '@/api/index.js';


import { Connection, Transaction, PublicKey, sendAndConfirmTransaction } from '@solana/web3.js';
import { createTransferInstruction, getAssociatedTokenAddress } from '@solana/spl-token';

import env from '@/utils/env.js';


// Solana 配置
const NETWORK_URL = env.NETWORK_URL;
const USDT_TOKEN_MINT = new PublicKey(env.USDT_TOKEN_MINT);



import { useUserInfoStore } from '@/store/modules/userInfoStore.js';
const userStore = useUserInfoStore();



const assets = computed(() => userStore.assets);
const identity = computed(() => userStore.identity);





// 组件状态
const searchValue = ref('');
const signature = ref('');


const show7 = ref(false);
const list = ref([]);
const rechargeListData = reactive({
	current_page: 1,
	data: [],
	total: 0
});



const walletAddress = ref(uni.getStorageSync('walletAddress'))

const getBtn = async () => {
	if (!searchValue.value) return;

	// 判断是否存在钱包地址
	if (!walletAddress.value) {
		uni.showToast({ title: '请先登录', icon: 'none' });
		return;
	}

	// RPC充值
	await rpcRecharge();
}



// RPC充值
const rpcRecharge = async () => {
	// 转账参数
	const toAddress = env.RECEIVE_ADDRESS // 接收地址
	const amount = searchValue.value // 转账金额 (USDT)
	const decimals = 6 // USDT 的小数位数


	// 创建连接
	const connection = new Connection(NETWORK_URL, {
		commitment: 'confirmed',
		confirmTransactionInitialTimeout: 5000 // 5 秒超时
	})
	try {
		// 获取发送方的 ATA (Associated Token Account)
		const senderATA = await getAssociatedTokenAddress(
			USDT_TOKEN_MINT,
			new PublicKey(walletAddress.value)
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
			new PublicKey(walletAddress.value),
			amount * Math.pow(10, decimals) // 转换为最小单位
		)

		// 创建交易
		const transaction = new Transaction()
		transaction.add(transferInstruction)


		// 获取最新的区块哈希
		const { blockhash } = await connection.getLatestBlockhash('confirmed')
		transaction.recentBlockhash = blockhash
		transaction.feePayer = new PublicKey(walletAddress.value)

		// 发送交易给钱包签名并广播
		const { signature } = await window.solana.signAndSendTransaction(transaction)
		// 等待确认
		// try {
		// 	const confirmation = await connection.confirmTransaction(signature, 'confirmed')
		// 	if (confirmation.value.err) {
		// 		throw new Error('交易确认失败')
		// 	}
		// } catch (error) {
		// 	console.error('交易确认失败', error);
		// }

		// try {
		// 	const signature = await sendAndConfirmTransaction(connection, transaction, [walletAddress.value], {
		// 		commitment: "finalized",
		// 		preflightCommitment: "processed",
		// 	});

		// 	console.log("交易成功:", signature);

		// 	// 查询交易状态
		// 	const txInfo = await connection.getTransaction(signature, {
		// 		commitment: "finalized",
		// 		maxSupportedTransactionVersion: 0,
		// 	});
		// 	if (!txInfo) {
		// 		throw new Error("交易未确认，可能失败");
		// 	}
		// 	console.log("交易详情:", txInfo);
		// } catch (error) {
		// 	console.error("交易确认失败:", error);
		// }

		console.log('转账交易:', signature)
		if (signature) {
			signature.value = signature;
			handleRecharge()
		}

	} catch (error) {
		console.error('RPC充值失败', error);
	}
}




const getList = () => {
	console.log('getList');
}

// 充值功能
const handleRecharge = async () => {
	try {
		console.log(signature.value, 'signature.value');
		let data = {
			user_wallet: walletAddress.value,
			signature: signature.value,
			amount: searchValue.value
		}
		let res = await rechargeApi(data);
		console.log(res, 'res rechargeApi 充值接口');
		await userStore.getUserInfo();
		searchValue.value = '';
		await fetchRechargeList();
		uni.showToast({ title: '充值成功', icon: 'none' });
	} catch (error) {
		console.error('充值失败', error);
	}
};

// 获取充值列表
const fetchRechargeList = async () => {
	try {
		const res = await rechargeList();

		// console.log(res, 'fetchRechargeList');
		if (res.data) rechargeListData.data = res.data.data;
	} catch (error) {
		console.error('获取充值记录失败', error);
	}
};

// 复制功能
const copy = () => {
	uni.setClipboardData({
		data: 'http://dh2j.com',
		success: () => uni.showToast({ title: 'success', icon: 'none' })
	});
};

// 返回上一页
const goBack = () => uni.navigateBack();

// 组件挂载时调用
onMounted(fetchRechargeList);
</script>

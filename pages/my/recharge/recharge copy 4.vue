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

		.text-warning {
			color: #FF951C;
		}

		.text-success {
			color: #45E5AF;
		}

		.text-error {
			color: #FF0000;
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
		<z-paging ref="paging" v-model="rechargeListData.data" bg-color="#0D081A" @query="fetchRechargeList">
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
						<view class="recharge-list-item-nav-right">
							<text>状态</text>
						</view>
					</view>
					<view class="recharge-list-item-content" v-for="(item, index) in rechargeListData.data" :key="index">
						<view class="recharge-list-item-content-left ">
							<text class=" flex">
								<text class="mr-xs">{{ Number(item.amount).toFixed(2) }}</text>
								<!-- <text class="" style="font-size: 20rpx;">USDT</text> -->
							</text>
						</view>
						<view class="recharge-list-item-content-middle" v-if="true">
							<text>{{ truncatedAccount(item.signature) || '暂无' }}</text>
						</view>
						<view class="recharge-list-item-content-right">
							<text>{{ formatDateTime(item.created_at) }}</text>
						</view>
						<view class="recharge-list-item-content-right ">
							<!-- status  0待处理  1已完成 2失败 -->
							<text class="text-warning" v-if="item.status == 0">待处理</text>
							<text class="text-success" v-if="item.status == 1">已完成</text>
							<text class="text-error" v-if="item.status == 2">失败</text>
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

import { onLaunch, onLoad, onShow } from '@dcloudio/uni-app'


import { Connection, Transaction, SystemProgram, LAMPORTS_PER_SOL, PublicKey } from '@solana/web3.js'
import { createTransferInstruction, getAssociatedTokenAddress, TOKEN_PROGRAM_ID, ASSOCIATED_TOKEN_PROGRAM_ID } from '@solana/spl-token'

import env from '@/utils/env.js';


onLoad((options) => {
	if (options.amount) {
		searchValue.value = options.amount
	}
})

// Solana 配置
const NETWORK_URL = "https://mainnet.helius-rpc.com/?api-key=2fadc3bb-fda2-4c57-af9d-8a164f73f022" // 使用 Helius 的 RPC 节点

// USDT 代币地址 (Solana Mainnet)
const USDT_TOKEN_MINT = new PublicKey('Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB')




import { useBaseInfoStore } from '@/store/modules/baseInfoStore.js';

import { useUserInfoStore } from '@/store/modules/userInfoStore.js';
const userStore = useUserInfoStore();
const assets = computed(() => userStore.assets);
const identity = computed(() => userStore.identity);
const baseInfoStore = useBaseInfoStore();

const base_info = computed(() => baseInfoStore.base_info);





// 组件状态
const searchValue = ref('');
const signatureData = ref('');


const show7 = ref(false);
const list = ref([]);
const rechargeListData = reactive({
	current_page: 1,
	data: [],
	total: 0
});



// 转换 时间 格式是这样的2025/03/14 15/33/47
function formatDateTime(dateString) {
	const date = new Date(dateString);
	const month = String(date.getMonth() + 1).padStart(2, '0'); // 月份从 0 开始，需要 +1
	const day = String(date.getDate()).padStart(2, '0');
	const time = date.toTimeString().split(' ')[0]; // 只取时分秒部分
	return `${month}/${day} ${time}`;
}



// 截取钱包地址
const truncatedAccount = (value) => {
	if (value) {
		return value.slice(0, 6) + '...' + value.slice(-4);
	}
	return '';
};


const walletAddress = ref(uni.getStorageSync('walletAddress'))

const getBtn = async () => {
	if (!searchValue.value) return;

	// 判断是否存在钱包地址
	if (!walletAddress.value) {
		uni.showToast({ title: '请先登录', icon: 'none' });
		return;
	}

	// 连接钱包
	await connectPhantom();

	// 签名消息
	// await handleSignMessage();

	// return

	// RPC充值
	await rpcRecharge();
}
// 连接 connectPhantom 钱包
const connectPhantom = async () => {
	const resp = await window.solana.connect()
	walletAddress.value = resp.publicKey.toString()


}
// 签名消息
const handleSignMessage = async () => {
	if (!walletAddress.value) {
		alert('请先连接钱包')
		return
	}
	try {
		const message = new TextEncoder().encode('Hello Solana!')
		let signedMessage
		signedMessage = await window.solana.signMessage(message)
		console.log('签名结果:', signedMessage)
		// alert('签名成功')
	} catch (err) {
		console.error('签名失败:', err)
		// alert('签名失败')
	}
}



// RPC充值
const rpcRecharge = async () => {
	// 转账参数
	const toAddress = base_info.value.wallet_address // 接收地址
	const amount = Number(searchValue.value) // 转账金额 (USDT)
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
		const blockhash = ''
		try {
			let rrr = await connection.getLatestBlockhash('confirmed')
			blockhash = rrr.blockhash
		} catch (e) {
			console.log(e, "e");
			uni.showToast({
				title: "服务不可用，请稍后再试",
				icon: 'none'
			})

		}
		// const { blockhash } = await connection.getLatestBlockhash('confirmed')


		transaction.recentBlockhash = blockhash
		transaction.feePayer = new PublicKey(walletAddress.value)

		// 发送交易给钱包签名并广播
		const { signature } = await window.solana.signAndSendTransaction(transaction)

		// 等待确认
		const confirmation = await connection.confirmTransaction(signature, 'confirmed')

		if (confirmation.value.err) {
			throw new Error('交易确认失败')
		}
		console.log('转账交易:', signature)
		if (signature) {
			signatureData.value = signature
		}
		handleRecharge()
		// alert('转账成功')
	} catch (err) {
		if (err.message.includes('failed to fetch')) {
			throw new Error('网络连接失败，请检查网络设置或稍后重试')
		}
		throw err
	}
};




const getList = () => {
	console.log('getList');
}

// 充值功能
const handleRecharge = async () => {
	try {
		let data = {
			user_wallet: uni.getStorageSync('walletAddress'),
			signature: signatureData.value,
			amount: searchValue.value
		}
		let res = await rechargeApi(data);
		console.log(res, 'res rechargeApi 充值接口');
		await userStore.getUserInfo();
		searchValue.value = '';
		await fetchRechargeList();
		uni.showToast({ title: 'success', icon: 'none' });
	} catch (error) {
		console.error('充值失败', error);
	}
};

const paging = ref(null)
// 获取充值列表
const fetchRechargeList = async () => {
	try {
		const res = await rechargeList();

		userStore.getUserInfo();
		if (res.data) {
			rechargeListData.data = res.data.data;
			paging.value.complete(rechargeListData.data);


		}
	} catch (error) {
		console.error('获取充值记录失败', error);
	}
};

// 复制功能
const copy = () => {
	uni.setClipboardData({
		data: 'http://dh2j.com',
		success: () => uni.showToast({ title: '复制成功', icon: 'none' })
	});
};

// 返回上一页
const goBack = () => uni.navigateBack();

// 组件挂载时调用
onMounted(fetchRechargeList);
</script>

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
      display: flex;
      justify-content: center;
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
			// width: 238rpx;
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
			// width: 134rpx;
			text-align: left;
		}

		.recharge-list-item-content-middle {
			// width: 180rpx;
			// width: 128rpx;
			text-align: left;
			font-family: Source Han Sans CN;
			font-weight: 300;
			font-size: 30rpx;
			color: #FFFFFF;
			line-height: 64rpx;
		}

		.recharge-list-item-content-right {
			// width: 238rpx;
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
		<z-paging ref="paging" v-model="rechargeListData" bg-color="#0D081A" @query="fetchRechargeList">
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
							<text>USDT {{ $t('recharge') }}</text>
						</view>
					</view>
				</view>
				<u-gap height="14"></u-gap>
				<!-- search -->
				<view class="recharge-search ">
					<u-search :placeholder="$t('prechargeamount')" type="number" v-model="searchValue" searchIcon=""
						shape="circle" :show-action="false" @change="change" bg-color="#110F20"></u-search>
				</view>
				<u-gap height="10"></u-gap>
				<!-- tag -->
				<view class="recharge-tag">
					<view class="recharge-tag-left">
						<text>{{ $t('balance') }}:{{ Number(assets.amount) }} USDT</text>
					</view>
					<view class="recharge-tag-right" v-if="false">
						<text>{{ $t('fee') }}{{ Number(fee) }} USDT</text>
					</view>
				</view>
				<u-gap height="26"></u-gap>
				<!-- btn -->
				<view class="recharge-btn-wrapper" @click="debounce">
					<view class="recharge-btn">
						<text class="recharge-btn-text">{{ $t('confirm') }}</text>
					</view>
				</view>
				<u-gap height="21"></u-gap>
				<!-- list -->
				<view class="recharge-list-wrapper">
					<view class="recharge-list-title">
						<text>{{ $t('rechargerecord') }}</text>
					</view>
					<view class="recharge-list-item-nav">
						<view class="recharge-list-item-nav-left">
							<text>{{ $t('money') }}</text>
						</view>
						<view class="recharge-list-item-nav-middle" v-if="true">
							<text>{{ $t('address') }}</text>
						</view>
						<view class="recharge-list-item-nav-right">
							<text>{{ $t('rechargetime') }}</text>
						</view>
						<view class="recharge-list-item-nav-right">
							<text>{{ $t('rechargestatus') }}</text>
						</view>
					</view>
					<view class="recharge-list-item-content" v-for="(item, index) in rechargeListData" :key="index">
						<view class="recharge-list-item-content-left " style="width: 110rpx;">
							<text class="mr-xs flex-1">{{ Number(item.amount).toFixed(2) }}</text>
						</view>
						<view class="recharge-list-item-content-middle" v-if="true">
							<text v-if="item.signature">{{ truncatedAccount(item.signature) }}</text>
							<view v-else style="width:180rpx;">无</view>
						</view>
						<view class="recharge-list-item-content-right">
							<text>{{ formatDateTime(item.created_at) }}</text>
						</view>
						<view class="recharge-list-item-content-right1 ">
							<!-- status  0待处理  1已完成 2失败 -->
							<text class="text-warning" v-if="item.status == 0">{{ $t("deal") }}</text>
							<text class="text-success" v-if="item.status == 1">{{ $t("completed") }}</text>
							<text class="text-error" v-if="item.status == 2">{{ $t("error") }}</text>
						</view>

					</view>
					<!-- <u-empty v-if="rechargeListData.data.length == 0"></u-empty> -->
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

// Solana 配置 // 使用 Helius 的 RPC 节点
// const NETWORK_URL = "https://mainnet.helius-rpc.com/?api-key=2fadc3bb-fda2-4c57-af9d-8a164f73f022" 
const NETWORK_URL = "https://mainnet.helius-rpc.com/?api-key=7559c3b0-8818-45bd-ba64-8be4d154c225" 

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
const rechargeListData = ref([]);



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
		return value.slice(0, 4) + '...' + value.slice(-4);
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


	// 限额
	const amount = Number(searchValue.value) // 转账金额 (USDT)
	// console.log(amount, "amount");
	// console.log(base_info);

	// console.log(Number(base_info.value.recharge_min_number), "213");

	if (amount < Number(base_info.value.recharge_min_number)) {
		uni.showToast({
			title: `不能低于${base_info.value.recharge_min_number}`,
			icon: "none"
		})
		searchValue.value = ''
		return
	}
	// RPC充值
	await rpcRecharge();
}

const debounce = ()=>{
	uni.$u.throttle(getBtn, 500)
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
		// confirmTransactionInitialTimeout: 5000 // 5 秒超时
		confirmTransactionInitialTimeout: 30000  // 5 秒超时
	})

	try {
		// 获取发送方的 ATA (Associated Token Account)
		const senderATA = await getAssociatedTokenAddress(
			USDT_TOKEN_MINT,
			new PublicKey(walletAddress.value)
		)
		console.log('getAssociatedTokenAddresssenderATA');

		// 获取接收方的 ATA
		const recipientATA = await getAssociatedTokenAddress(
			USDT_TOKEN_MINT,
			new PublicKey(toAddress)
		)
		console.log('getAssociatedTokenAddressrecipientATA');

		// 创建转账指令
		const transferInstruction = createTransferInstruction(
			senderATA,
			recipientATA,
			new PublicKey(walletAddress.value),
			amount * Math.pow(10, decimals) // 转换为最小单位
		)
		console.log('transferInstruction');

		// 创建交易
		const transaction = new Transaction()
		transaction.add(transferInstruction)

		// 获取最新的区块哈希
		// const blockhash = ''
		// try {
		// 	let rrr = await connection.getLatestBlockhash('confirmed')
		// 	blockhash = rrr.blockhash
		// } catch (e) {
		// 	console.log(e, "e");
		// 	uni.showToast({
		// 		title: "服务不可用，请稍后再试",
		// 		icon: 'none'
		// 	})
		// }

		const { blockhash } = await connection.getLatestBlockhash('confirmed')
		console.log('getLatestBlockhash');


		transaction.recentBlockhash = blockhash
		transaction.feePayer = new PublicKey(walletAddress.value)

		// 发送交易给钱包签名并广播
		const { signature } = await window.solana.signAndSendTransaction(transaction)
		console.log('signAndSendTransaction',signature);

		// 等待确认
		const confirmation = await connection.confirmTransaction(signature, 'confirmed')
		console.log('confirmTransaction',confirmation);

		if (confirmation.value.err) {
			console.log('交易确认失败');
			uni.showToast({
				title:'交易不合法',
				icon:"error"
			})
			throw new Error('交易确认失败')
		}
		console.log('转账交易:', signature)
		if (signature) {
			signatureData.value = signature
		}
		handleRecharge()
		// alert('转账成功')
	} catch (err) {
		uni.showToast({
			title:'网络连接失败',
			icon:"error"
		})
		if (err.message.includes('failed to fetch')) {
			throw new Error('网络连接失败，请检查网络设置或稍后重试')
		}
		throw err
	}
};


const recharge_fee_rate = ref(base_info.value.recharge_fee_rate)
const recharge_min_number = ref(base_info.value.recharge_min_number)
const rechargeFee = computed(() => {
	const rate = recharge_fee_rate.value || 0;  // 从 base_info 获取 fee_rate，默认为 0
	const minNumber = recharge_min_number.value || 0; // 从 base_info 获取 min_number，默认为 0
	return rate * minNumber;  // 计算手续费
});

console.log(rechargeFee, "rechargeFee");


const fee = ref(0);


const change = (value) => {
	if (value === '') {
		fee.value = 0;
		return;
	}

	console.log(baseInfoStore.base_info.recharge_fee_rate,'baseInfoStore.base_info.recharge_fee_rate')
	// 计算手续费
	// let feeValue = (parseFloat(baseInfoStore.base_info.recharge_fee_rate) / 100) * searchValue.value;

	let feeValue = (parseFloat(baseInfoStore.base_info.recharge_fee_rate) / 100) * parseFloat(searchValue.value);


	console.log(feeValue,"feeValue")
	fee.value = feeValue;
	let withdraw_min_number = baseInfoStore.base_info.withdraw_min_number;
	// if (value < withdraw_min_number) {
	// 	uni.showToast({
	// 		title: '提现金额不能小于' + withdraw_min_number + 'USDT',
	// 		icon: 'none',
	// 	});
	// 	return;
	// }
	searchValue.value = value;
};


// 充值功能
const handleRecharge = async () => {
	try {
		let data = {
			user_wallet: uni.getStorageSync('walletAddress'),
			signature: signatureData.value,
			amount: searchValue.value,
			// fee: rechargeFee.value * (parseFloat(recharge_fee_rate.value) / 100)
			fee: fee.value
		}
		let res = await rechargeApi(data);
		console.log(res, 'res rechargeApi 充值接口');
		await userStore.getUserInfo();
		searchValue.value = '';
		await fetchRechargeList();
		uni.showToast({ title: 'recharge success', icon: 'none' });
	} catch (error) {
		console.error('充值失败', error);
	}
};

const paging = ref(null)
// 获取充值列表
const fetchRechargeList = async (pageNo, pageSize) => {
	try {
		const res = await rechargeList({
			page: pageNo,
		});
		userStore.getUserInfo();
		if (res.data) {
			paging.value.complete(res.data.data);
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



</script>

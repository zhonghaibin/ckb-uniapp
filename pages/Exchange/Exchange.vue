<style lang="scss" scoped>
.recharge-header {
	display: flex;
	// align-items: center;
	// justify-content: space-between;
	margin: 0 30rpx;
	justify-content: space-between;



	.recharge-header-back-icon {
		margin-right: 26rpx;

		image {
			width: 22rpx;
			height: 38rpx;
		}
	}

	.recharge-header-title {
		text {
			font-family: Source Han Sans CN;
			font-weight: bold;
			font-size: 36rpx;
			color: #FFFFFF;
			line-height: 64rpx;

		}
	}

	.recharge-header-subtitle {
		// vertical-align: bottom;
		display: flex;
		align-items: end;

		/* 使元素垂直居中 */
		text {
			font-family: Source Han Sans CN;
			font-weight: 300;
			font-size: 24rpx;
			color: #45E5AF;
			// line-height: 64rpx;
		}
	}

}

.mev-follow-robot-search-wrap {
	margin: 0 30rpx;

	height: 108rpx;
	background: #110F20;
	border-radius: 30rpx;
	border: 2rpx solid #6C7680;
	display: flex;
	align-items: center;
	justify-content: 0;

	.mev-follow-robot-search-wrap-icon {
		margin: 30rpx 20rpx 30rpx 30rpx;
		width: 48rpx;
		height: 48rpx;

		image {
			width: 100%;
			height: 100%;
		}
	}

	.mev-follow-robot-search-wrap-input {
		display: flex;
		align-items: center;

		input {
			color: white;
		}
	}

	.mev-follow-robot-search-wrap-select {
		display: flex;
		align-items: center;

		.mev-follow-robot-search-wrap-select-label {
			font-family: Source Han Sans CN;
			font-weight: bold;
			font-size: 24rpx;
			color: #45E5AF;
			line-height: 64rpx;
		}

		.mev-follow-robot-search-wrap-select-icon {
			width: 20rpx;
			height: 12rpx;
			margin-left: 16rpx;
			margin-right: 36rpx;
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


// 
.accountbalance {
	margin-top: 40rpx;
	font-family: Source Han Sans CN;
	font-weight: 300;
	font-size: 30rpx;
	color: #FFFFFF;
	line-height: 30rpx;
}


.accountbalanceaount {
	margin-top: 34rpx;
	font-family: Source Han Sans CN;
	font-weight: bold;
	font-size: 60rpx;
	color: #45E5AF;
	line-height: 60rpx;
}

.cumulativegain {
	margin-top: 40rpx;
	font-family: Source Han Sans CN;
	font-weight: 300;
	font-size: 30rpx;
	color: #FFFFFF;
	line-height: 30rpx;
}

.cumulativegainAcount {
	margin-top: 34rpx;
	font-family: Source Han Sans CN;
	font-weight: bold;
	font-size: 60rpx;
	color: #45E5AF;
	line-height: 60rpx;
}
</style>

<template>
	<view class="">
		<z-paging ref="paging" v-model="list" bg-color="#0D081A" @query="getList" :hide-empty-view="true">
			<view class="" slot="top">
				<NavBarCommon />
			</view>

			<!-- 余额收益 -->
			<view class="exchange-wrap">
				<view class="flex justify-between">
					<view class="flex flex-column " style="margin-left: 30rpx;">
						<view class="flex flex-column ">
							<text class="accountbalance">{{ $t('accountbalance') }}</text>
							<text class="accountbalanceaount">
								{{ assets.amount }}
							</text>
						</view>
						<view class="flex flex-column"  v-if="false">
							<text class="cumulativegain">{{ $t('cumulativegain') }}</text>
							<text class="cumulativegainAcount">264</text>
						</view>
					</view>
					<view class="bg">
						<image src="/static/image/Exchange/bg.png" style="width: 414rpx;height: 342rpx;" />
					</view>
				</view>
			</view>
			<u-gap height="24"></u-gap>
			<!-- one兑换 -->
			<view style="" class="flex flex-column">
				<view class="one" style="order: 1">
					<view class="recharge-header flex flex-column">
						<view class="recharge-header-title flex items-center">
							<image class="mr-sm" src="/static/image/mev/t.png" style="width: 48rpx;height: 48rpx;" />
							<text class="">USDT</text>
							<text>{{ $t('exchange') }}</text>
						</view>
						<view class="flex  items-center justify-between">
							<view class="recharge-header-title" v-if="convertStatus">
								<text v-if="transactionType == 'ONE'">USDT TO ONE {{ $t('exchange') }}</text>
								<text v-if="transactionType == 'CKB'">USDT TO CKB {{ $t('exchange') }}</text>
							</view>
							<view class="recharge-header-title" v-if="!convertStatus">
								<text v-if="transactionType == 'ONE'">ONE TO USDT {{ $t('exchange') }}</text>
								<text v-if="transactionType == 'CKB'">CKB TO USDT {{ $t('exchange') }}</text>
							</view>
							<view class="recharge-header-subtitle">
								<text>{{ $t('exchangeinstructions') }}</text>
							</view>
						</view>
					</view>
					<u-gap height="15"></u-gap>
					<view class="recharge-search ">
						<view class="mev-follow-robot-search-wrap">
							<view class="mev-follow-robot-search-wrap-input flex-1" style="margin-left: 30rpx;">
								<input class="flex-1" type="number" :placeholder="$t('pleaseenterexchangequantity')"
									v-model="model.amount" @input="searchValueInput" />
							</view>
							<view class="mev-follow-robot-search-wrap-select flex" @click="changeTransactionType">
								<text class="label mev-follow-robot-search-wrap-select-label">{{transactionType}}</text>
								<image v-if="transactionType == 'ONE'" class="mev-follow-robot-search-wrap-select-icon"
									style="width: 48rpx;height: 48rpx;margin: 0 20rpx;" src="/static/image/Exchange/group.png"
									mode="scaleToFill" />
								<image v-if="transactionType == 'CKB'" class="mev-follow-robot-search-wrap-select-icon"
									style="width: 58rpx;height: 58rpx;margin: 0 20rpx;" src="/static/image/home/CKB.jpg"
									mode="scaleToFill" />
								<image class="mev-follow-robot-search-wrap-select-icon" src="/static/image/mev/select.png"
									mode="scaleToFill" />
							</view>
						</view>
					</view>
					<u-gap height="22"></u-gap>
				</view>
				<!-- 转换按钮 -->
				<view class="flex justify-center items-center" style="order: 2">
					<image src="/static/image/common/change1.png" style="width: 88rpx;height: 88rpx;" @click="convert" />
				</view>
				<view class="two" style="order: 3">
					<u-gap height="15"></u-gap>
					<view class="recharge-header">
						<view class="recharge-header-title">
							<text>{{ $t('needtoconsume') }}</text>
						</view>
					</view>
					<u-gap height="15"></u-gap>
					<view class="recharge-search ">
						<view class="mev-follow-robot-search-wrap">
							<view class="mev-follow-robot-search-wrap-input flex-1" style="margin-left: 30rpx;">
								<input class="flex-1" type="number" disabled :placeholder="$t('consumption')" v-model="searchValue1" />
							</view>
							<view class="mev-follow-robot-search-wrap-select flex">
								<text class="label mev-follow-robot-search-wrap-select-label">{{ $t('available') }}:{{
									Number(assets.amount) }}
									USDT</text>
								<!-- <image class="mev-follow-robot-search-wrap-select-icon" src="/static/image/mev/select.png"
									mode="scaleToFill" /> -->
								<image class="mev-follow-robot-search-wrap-select-icon" src="/static/image/mev/select2.png"
									mode="scaleToFill" />
							</view>
						</view>
					</view>
					<u-gap height="18"></u-gap>
				</view>
			</view>
			<!-- 提示 -->
			<view class="recharge-tag">
				<view class="recharge-tag-left" style="margin-left: 20rpx;">
					<text v-if="transactionType == 'ONE'">1ONE ≈ {{ model.rate }} USDT</text>
					<text v-if="transactionType == 'CKB'">1CKB ≈ {{ searchValue1 }} USDT</text>
				</view>
				<view class="recharge-tag-right">
				</view>
			</view>
			<u-gap height="46"></u-gap>

			<!-- 确认 -->
			<view class="recharge-btn-wrapper">
				<view class="recharge-btn" @click="getBtn">
					<text class="recharge-btn-text">{{ $t('confirm') }}</text>
				</view>
			</view>

			<u-gap height="80"></u-gap>





		</z-paging>


	</view>
</template>

<script setup>
import { reactive, ref, computed, nextTick } from 'vue'
import { useUserInfoStore } from '@/store/modules/userInfoStore.js';
import { useBaseInfoStore } from '@/store/modules/baseInfoStore.js';
import { assetsGetRate, assetsExchange } from '@/api/index.js'


import { onShow } from '@dcloudio/uni-app'


const userStore = useUserInfoStore();
const baseStore = useBaseInfoStore()
const assets = computed(() => userStore.assets);
// 

const baseInfoStore = useBaseInfoStore();
const base_info = computed(() => baseStore.base_info);


onShow(() => {
	getList()
})



let searchValue1 = ref('')




const model = reactive({
	from_coin: 'USDT',
	to_coin: 'ONE',
	amount: 1,
	rate: '0',
	lock_until: '0',
	signature: '',
	fee: '0'
})
const transactionType = ref('ONE') // 质押类型PLEDGE MEV 
//  切换币种 usdt to one ckb
const changeTransactionType = () => {
	let itemList = ['ONE', 'CKB']
	uni.showActionSheet({
		itemList: itemList,
		success: (res) => {
			transactionType.value = itemList[res.tapIndex]
			model.to_coin = itemList[res.tapIndex]
			// 选择完毕调汇率
			assetsGetRateApi()
		}
	})
}


const oneRatio = ref(0)

// 获取比率接口
const assetsGetRateApi = async () => {
	let re = await assetsGetRate(model.from_coin, model.to_coin)
	// console.log(re, 're assetsGetRateApi');
	model.rate = re.data.rate
	model.lock_until = re.data.lock_until
	model.signature = re.data.signature

	// model.fee = base_info.value.recharge_fee_rate * base_info.value.recharge_min_number
	model.fee = (parseFloat(baseInfoStore.base_info.recharge_fee_rate) / 100) * parseFloat(base_info.value.recharge_min_number);
	// 
	console.log(model.amount,'model.amount')
	console.log(model.rate,'model.rate')
	searchValue1.value = Number(model.amount) * Number(model.rate)
	if (searchValue1.value > assets.value.amount) {
		uni.showToast({
			title: "超出余额",
			icon: 'none'
		})
	}
}

// 计算 比例
const searchValueInput = async (e) => {
	// console.log(searchValue.value, '1');
	await assetsGetRateApi()
}


// 提交
const getBtn = async () => {
	let res = await assetsExchange(model)
	console.log(res, "res");
	if (res.code == 200) {
		await userStore.getUserInfo();
		uni.showToast({
			title: "exchange success",
			icon: "none"
		})
	}
	// 清除数据
	// model.from_coin = 'USDT'
	// model.to_coin = 'ONE'
	model.amount = ''
	model.rate = ''
	model.lock_until = ''
	model.signature = ''
	model.fee = ''
	searchValue1.value = ''
}

const list = ref([])
const paging = ref(null)


const getList = async () => {
	console.log(model, "model");
	await nextTick()
	paging.value.complete([]);
	await assetsGetRateApi()
	await userStore.getUserInfo();
}

let convertStatus = ref(true)
//  转换
const convert = () => {
	console.log('convert');
	// from_coin: 'USDT',
	// to_coin: 'ONE',
	let a = model.from_coin
	let b = model.to_coin
	convertStatus.value = !convertStatus.value
	model.from_coin = b
	model.to_coin = a
	uni.showToast({
		title: "conversion  success",
		icon: "none"
	})

	console.log(model, "model");

}
</script>

<style lang="scss" scoped></style>
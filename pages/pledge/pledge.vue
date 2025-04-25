<style lang="scss" scoped>
.recharge-header {
	display: flex;
	// align-items: center;
	// justify-content: space-between;
	margin: 0 30rpx;
	justify-content: space-between;



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

	// width: 690rpx;

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

.recharge-search {
	margin: 0 30rpx;
}

.recharge-tag {
	display: flex;
	justify-content: space-between;
	// margin: 0 30rpx;
	// margin: 0 20rpx;
	margin: 0 20rpx;

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
		font-weight: bold;
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
			// width: 128rpx;
			width: 134rpx;
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
		}

		.recharge-list-item-content-right {
			// width: 200rpx;
			text-align: right;
		}
	}

	.recharge-list-item-described {
		font-family: Source Han Sans CN;
		font-weight: 300;
		font-size: 24rpx;
		color: #45E5AF;
		line-height: 32rpx;
	}

}
</style>

<template>
	<view class="">
		<z-paging ref="paging" v-model="pledgeList" bg-color="#0D081A" @query="transactiontransactionListApi"
			:hide-empty-view="true">
			<view class="" slot="top">
				<NavBarCommon />
			</view>


			<view class="">

				<!-- 头部 -->
				<view class="recharge-header">
					<view class="recharge-header-title">
						<text>{{ $t('pledgequantity') }}</text>
					</view>
					<view class="recharge-header-subtitle" @click="goIncomerecord">
						<text>{{ $t('revenuerecords') }}</text>
					</view>
				</view>
				<u-gap height="14"></u-gap>
				<!-- search -->
				<view class="recharge-search ">
					<view class="mev-follow-robot-search-wrap">
						<view class="mev-follow-robot-search-wrap-input flex-1" style="margin-left: 30rpx;">
							<input class="flex-1" type="number" :placeholder="$t('pleaseenterpledgedquantity')" v-model="searchValue"
								@confirm="confirm" />
						</view>
						<view class="mev-follow-robot-search-wrap-select flex" @click="showTime">
							<text class="label mev-follow-robot-search-wrap-select-label">MAX</text>
							<image class="mev-follow-robot-search-wrap-select-icon" src="/static/image/mev/select.png"
								mode="scaleToFill" />
						</view>
					</view>
				</view>
				<u-gap height="10"></u-gap>
				<!-- tag -->
				<view class="recharge-tag">
					<view class="recharge-tag-left">
						<text v-show="transactionType == 'one'">{{ $t('pledgeable') }}:{{ pledge.one.amount }} ONE</text>
						<text v-show="transactionType == 'ckb'">{{ $t('pledgeable') }}:{{ pledge.ckb.amount }} CKB</text>
					</view>
					<view class="">
						<text style="font-family: Source Han Sans CN;
    font-weight: 300;
    font-size: 0.75rem;
    color: #FFFFFF;
    line-height: 2rem;">{{ $t('Pledgedays') }}:{{ followTime }}</text>

					</view>
					<view class="recharge-tag-right">
						<text v-show="transactionType == 'one'">{{ $t('totalamountpledged') }}:{{
							Number(pledge.one.pledge_amount).toFixed(2) }} ONE</text>
						<text v-show="transactionType == 'ckb'">{{ $t('totalamountpledged') }}:{{
							Number(pledge.ckb.pledge_amount).toFixed(2) }} CKB</text>
					</view>
				</view>
				<u-gap height="26"></u-gap>
				<view class="recharge-btn-wrapper" @click="getBtn">
					<view class="recharge-btn">
						<text class="recharge-btn-text">{{ $t('pledge') }}</text>
					</view>
				</view>
				<u-gap height="21"></u-gap>
				<!-- list -->
				<view class="recharge-list-wrapper">
					<view class="recharge-list-title">
						<text>{{ $t('pledgerecord') }}</text>
					</view>
					<view class="recharge-list-item-nav">
						<view class="recharge-list-item-nav-left">
							<text>{{ $t('money') }}</text>
						</view>
						<view class="recharge-list-item-nav-middle">
							<text>{{ $t('pledgedays') }}</text>
						</view>
						<view class="recharge-list-item-nav-right">
							<text>{{ $t('createtime') }}</text>
						</view>
					</view>
					<view class="recharge-list-item-content" v-for="(item, index) in pledgeList" :key="index">
						<view class="recharge-list-item-content-left ">
							<text class=" flex">
								<text class="mr-xs">{{ Number(item.amount).toFixed(2) }}</text>
								<text class="" style="font-size: 20rpx;">{{ item.coin }}</text></text>
						</view>
						<view class="recharge-list-item-content-middle">
							<text>{{ item.day }}{{ $t('days') }}</text>
						</view>
						<view class="recharge-list-item-content-right">
							<text>{{ item.created_at }}</text>
						</view>
					</view>
					<!-- <u-gap height="20"></u-gap> -->
					<view class="flex justify-center items-center" v-if="pledgeList.length == 0">
						<image src="/static/image/pledge/bg.png" style="width: 400rpx;height: 326rpx;" mode="" />
					</view>
					<!-- <u-gap height="43"></u-gap> -->
					<u-gap height="20"></u-gap>
					<!-- 选择币种 -->
					<view class="" v-if="false">
						选择币种
					</view>
					<view class="flex justify-center items-center recharge-list-item-described">
						<text class="mr-sm">{{ $t('selectcurrency') }}:</text>
						<text @click="changeTransactionType('one')" class="mr-sm"
							style="border-bottom: 2rpx solid #45E5AF;">ONE</text>
						<text @click="changeTransactionType('ckb')" style="border-bottom: 2rpx solid #45E5AF;">CKB</text>
					</view>
					<u-gap height="16"></u-gap>
				</view>
				<u-gap height="24"></u-gap>
				<!--  -->


				<!-- 弹框 -->
				<u-popup :show="popupShow" :round="10" mode="bottom" @close="close" @open="open">
					<view class="popupWrap">
						<view class="title"></view>
						<view class="content">
							<view class="">

							</view>
							<view class="">2</view>
						</view>
					</view>
					<u-gap height="50"> </u-gap>
				</u-popup>
				<!--  -->
			</view>
			<view slot="bottom"></view>
		</z-paging>
	</view>
</template>

<script setup>
import { ref, computed } from 'vue'
import { transactiontransactionList, transactionPledge } from '@/api/index.js'


import { onShow } from '@dcloudio/uni-app'


import { useI18n } from 'vue-i18n'


const { locale, t } = useI18n()

// 获取时间
import { useBaseInfoStore } from '@/store/modules/baseInfoStore';
const baseInfoStore = useBaseInfoStore()
const base_info = computed(() => baseInfoStore.pledge);


import { useUserInfoStore } from '@/store/modules/userInfoStore.js';
import { Log } from 'ethers'
const userStore = useUserInfoStore();
const pledge = computed(() => userStore.pledge);




const goIncomerecord = () => {
	uni.navigateTo({
		url: '/pages/pledge/IncomeRecord/IncomeRecord'
	})
}

// 响应式数据
const searchValue = ref('')
const pledgeList = ref([])
const transactionType = ref('one') // 质押类型PLEDGE MEV 


// 1套利 2质押
const list = ref([])
// 函数
const changeTransactionType = (type) => {
	transactionType.value = type
	transactiontransactionListApi()
	uni.showToast({
		title: `${t('currency')}:${transactionType.value}`,
		icon: 'none',
		mask: true
	})
}




const popupShow = ref(false)


// 
const open = () => {
	// console.log('open');
	popupShow.value = true
}
// 
const close = () => {
	popupShow.value = false
	// console.log('open');
}


// 跟单时间
const followTime = ref('15');
// 选择时间
const showTime = () => {

	// open()
	// return
	console.log('2');
	// 
	let itemstaticRateList = []



	if (transactionType.value == 'one') {
		itemstaticRateList = base_info.value.one.staticRate
	} else if (transactionType.value == 'ckb') {
		itemstaticRateList = base_info.value.ckb.staticRate
	}
	console.log(itemstaticRateList,"itemstaticRateList")
	const itemList = itemstaticRateList.map(item => item.day + '天'  + '/' + item.rate  + '%')
	uni.showActionSheet({
		itemList: itemList,
		success: (res) => {
			// console.log(itemList[res.tapIndex]);
			console.log(itemList[res.tapIndex],'itemList[res.tapIndex]11')
			
			let result = itemList[res.tapIndex].replace(/(\d+).*$/, '\$1');
			followTime.value  = result
			// followTime.value = itemList[res.tapIndex].replace("天", "");
		}
	})
}



const getBtn = async () => {
	// console.log(searchValue.value)
	if (!searchValue.value) {
		uni.showToast({ title: "数量为空", icon: "none" })
		return
	}
	if (!followTime.value) {
		uni.showToast({ title: "日期为空", icon: "none" })
		return
	}
	if (!transactionType.value) return
	let coin = 'ONE'
	// 转换
	if(transactionType.value == 'one'){
		coin = 'ONE'
	} 
	// transactionType.value = 'ONE'
	if (transactionType.value == 'ckb'){
		coin = 'CKB'
	}
	//  transactionType.value = 'CKB'



	let data = {
		coin: coin,
		amount: searchValue.value,
		day: followTime.value
	}
	console.log(data, '213');
	// return
	let res = await transactionPledge(data)
	console.log(res, "res  transactionPledge");
	if (res.code == 200) {
		transactiontransactionListApi()
		userStore.getUserInfo();
	}
	searchValue.value = ''
	transactionType.value = 'one'

}

const confirm = (value) => {
	console.log(value)
	searchValue.value = value
}


const paging = ref(null)

const transactiontransactionListApi = (pageNo, pageSize) => {
	transactiontransactionList({
		page: pageNo,
		transactionType: '2'
	}).then(async res => {
		// console.log(res, 'resss')
		if (res.code == 200) {
			await userStore.getUserInfo();
			// pledgeList.value = res.data.data
			// paging.value.complete([]);
			paging.value.complete(res.data.data);
			// paging.value.complete(pledgeList.value);
		}
	})
}

onShow(() => {
	// onShow() 在这里可以处理
	transactiontransactionListApi()
})
</script>

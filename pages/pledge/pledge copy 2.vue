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
						<text>质押数量</text>
					</view>
					<view class="recharge-header-subtitle">
						<text>收益记录</text>
					</view>
				</view>
				<u-gap height="14"></u-gap>
				<!-- search -->
				<view class="recharge-search ">
					<view class="mev-follow-robot-search-wrap">
						<view class="mev-follow-robot-search-wrap-input flex-1" style="margin-left: 30rpx;">
							<input class="flex-1" type="number" placeholder="请输入质押数量" v-model="searchValue" @confirm="confirm" />
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
						<text v-if="transactionType == 'one'">可质押:{{ pledge.one.amount }} ONE</text>
						<text v-if="transactionType == 'ckb'">可质押:{{ pledge.ckb.amount }} CKB</text>
					</view>
					<view class="recharge-tag-right">
						<text v-if="transactionType == 'one'">质押总量:{{ pledge.one.pledge_amount }} ONE</text>
						<text v-if="transactionType == 'ckb'">质押总量:{{ pledge.ckb.pledge_amount }} CKB</text>
					</view>
				</view>
				<u-gap height="26"></u-gap>
				<view class="recharge-btn-wrapper" @click="getBtn">
					<view class="recharge-btn">
						<text class="recharge-btn-text">质押</text>
					</view>
				</view>
				<u-gap height="21"></u-gap>
				<!-- list -->
				<view class="recharge-list-wrapper">
					<view class="recharge-list-title">
						<text>质押记录</text>
					</view>
					<view class="recharge-list-item-nav">
						<view class="recharge-list-item-nav-left">
							<text>金额</text>
						</view>
						<view class="recharge-list-item-nav-middle">
							<text>质押天数</text>
						</view>
						<view class="recharge-list-item-nav-right">
							<text>创建时间</text>
						</view>
					</view>
					<view class="recharge-list-item-content" v-for="(item, index) in pledgeList" :key="index">
						<view class="recharge-list-item-content-left ">
							<text class=" flex">
								<text class="mr-xs">{{ Number(item.amount).toFixed(2) }}</text>
								<text class="" style="font-size: 20rpx;">{{ item.coin }}</text></text>
						</view>
						<view class="recharge-list-item-content-middle">
							<text>{{ item.day }}天</text>
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
						<text class="mr-sm">选择币种:</text>
						<text @click="changeTransactionType('one')" class="mr-sm"
							style="border-bottom: 2rpx solid #45E5AF;">ONE</text>
						<text @click="changeTransactionType('ckb')" style="border-bottom: 2rpx solid #45E5AF;">CKB</text>
					</view>
					<u-gap height="16"></u-gap>
				</view>
				<u-gap height="24"></u-gap>
				<!--  -->

				<!--  -->
			</view>
			<view slot="bottom"></view>
		</z-paging>
	</view>
</template>



<script setup>
import { ref, onMounted, computed } from 'vue'
import { transactiontransactionList, transactionPledge, assetsGetRate } from '@/api/index.js'


import { onShow } from '@dcloudio/uni-app'


// 获取时间
import { useBaseInfoStore } from '@/store/modules/baseInfoStore';
const baseInfoStore = useBaseInfoStore()
const base_info = computed(() => baseInfoStore.pledge);


import { useUserInfoStore } from '@/store/modules/userInfoStore.js';
const userStore = useUserInfoStore();
const pledge = computed(() => userStore.pledge);

console.log(pledge.value, 'pledgepledge');

// console.log(base_info.value, "base_info");

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
		title: `质押币种为${transactionType.value}`,
		icon: 'none',
		mask: true
	})
}

const getPledgeList = () => {
	// 质押记录的获取逻辑
}


// 跟单时间
const followTime = ref('');
// 选择时间
const showTime = () => {
	console.log('2');
	// 
	let itemstaticRateList = []



	if (transactionType.value == 'one') {
		itemstaticRateList = base_info.value.one.staticRate
	} else if (transactionType.value == 'ckb') {
		itemstaticRateList = base_info.value.ckb.staticRate
	}
	const itemList = itemstaticRateList.map(item => item.day + '天')
	uni.showActionSheet({
		itemList: itemList,
		success: (res) => {
			console.log(itemList[res.tapIndex]);
			followTime.value = itemList[res.tapIndex].replace("天", "");
		}
	})
}


// assetsGetRate
const rate = ref("")
const lock_until = ref("")
const signature = ref("")
const assetsGetRateApi = async () => {
	let re = await assetsGetRate()
	console.log(re, 're');

	rate.value = re.xx
	lock_until.value = re.xx
	signature.value = re.xx
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

	// 转换
	if (transactionType.value == 'one') transactionType.value = 'ONE'
	if (transactionType.value == 'ckb') transactionType.value = 'CKB'

	let data = {
		coin: transactionType.value,
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
// 生命周期钩子
onMounted(() => {
	// onLoad() 在这里可以处理
})

onShow(() => {
	// onShow() 在这里可以处理
	// transactiontransactionListApi()
	assetsGetRateApi()
})
</script>

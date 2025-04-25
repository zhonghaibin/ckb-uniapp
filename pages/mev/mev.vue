<script setup>
import { ref, computed, nextTick } from 'vue';

import { useUserInfoStore } from '@/store/modules/userInfoStore.js';


import { onShow } from '@dcloudio/uni-app'

import { useBaseInfoStore } from '@/store/modules/baseInfoStore';


import { useI18n } from 'vue-i18n'


const { locale, t } = useI18n()


const userStore = useUserInfoStore();
const assets = computed(() => userStore.assets);


// 获取时间
const baseInfoStore = useBaseInfoStore()
const base_info = computed(() => baseInfoStore.base_info);
onShow(() => {
	rechargeAmount.value = ''
	transactiontransactionListApi()
})


// 充值金额
const rechargeAmount = ref('');

const recharge_fee_rate = ref(base_info.value.recharge_fee_rate)
const recharge_min_number = ref(base_info.value.recharge_min_number)
/*  */
const rechargeFee = computed(() => {
	const rate = recharge_fee_rate.value || 0;  // 从 base_info 获取 fee_rate，默认为 0
	const minNumber = recharge_min_number.value || 0; // 从 base_info 获取 min_number，默认为 0
	return rate * minNumber;  // 计算手续费
});

// 手续费
const fee = ref(0);
const change = (value) => {
	if (value === '') {
		fee.value = 0;
		return;
	}
	// 计算手续费
	let feeValue = (parseFloat(baseInfoStore.base_info.recharge_fee_rate) / 100) * rechargeAmount.value;
	// console.log(feeValue, 'feeValue');
	fee.value = feeValue;
};





const rechargeAmountConfirm = () => {
	if (!rechargeAmount.value) {
		uni.showToast({ title: '请输入金额', icon: 'none' })
		return;
	}
	uni.navigateTo({
		url: `/pages/my/recharge/recharge?amount=${rechargeAmount.value}`
	})
};

const followAmountConfirm = () => {
	console.log('跟单金额确认:', followAmount.value);
};

// 充值比例
const rechargeRate = ref({ max: "10", min: "8" })
// 跟单金额
const followAmount = ref('');

// 跟单时间
const followTime = ref('15');
// 选择时间
const showTime = () => {
	const itemstaticRateList = baseInfoStore.mev.usdt.staticRate
	const itemList = itemstaticRateList.map(item => item.day + t("days"))
	uni.showActionSheet({
		itemList: itemList,
		success: (res) => {
			console.log(itemList[res.tapIndex],'itemList[res.tapIndex]');
			followTime.value = itemList[res.tapIndex].split(t('days'))[0]
			rechargeRate.value = itemstaticRateList[res.tapIndex].rate
		}
	})
};



import { mevFollow } from '@/api'
// 时间 确认
const getBtn = async () => {
	console.log('时间 确认');
	// 判断是否为空
	if (!followTime.value || !rechargeRate.value || !followAmount.value) {
		uni.showToast({
			title: '请输入完整信息',
			icon: 'none'
		})
		return
	}
	// const followTimeData = followTime.value.split('天')[0]
	// const followTimeData = followTime.value.split('天')[0]
	const res = await mevFollow({
		// day: followTimeData,
		day: followTime.value,
		amount: followAmount.value
	})
	if (res.code == 200) {
		uni.showToast({
			title: 'success',
			icon: 'none',
		})
		transactiontransactionListApi()
	}
	// 清空数据
	followAmount.value = ''
	// followTime.value = '1'
	// rechargeRate.value = { max: "", min: "" }
}


// 获取质押记录
import { transactiontransactionList } from '@/api'
const sList = ref([])
const paging = ref(null)
const transactiontransactionListApi = async (pageNo, pageSize) => {
	// 1 套利 2质押
	const res = await transactiontransactionList({
		page: pageNo,
		transactionType: 1
	})
	paging.value.complete([]);
	if (res.code == 200) {
		await userStore.getUserInfo();
		await nextTick()
		paging.value.complete(res.data.data);
	}
}

// import { mevFollow } from '@/api'
const goincome = (e) => {
	console.log(e, "e");
	let id = e.id
	uni.navigateTo({
		url: `/pages/mev/incomeMev/incomeMev?id=${id}`,
	})
}


</script>

<template>
	<view>
		<z-paging ref="paging" v-model="sList" bg-color="#0D081A" @query="transactiontransactionListApi"
			:hide-empty-view="false">
			<template #top>
				<NavBarCommon />
			</template>

			<!-- 质押数量 -->
			<view class="mev-pledge-num-wrap">
				<view class="mev-pledge-num-wrap-title">
					<text>{{ $t('pledgequantity') }}</text>
				</view>
				<u-gap height="13"></u-gap>
				<view class="mev-pledge-num-wrap-rounded-wrap">
					<view class="mev-pledge-num-wrap-rounded">
						<view class="mev-pledge-num-wrap-rounded-logo">
							<image src="/static/image/mev/logo.png" />
						</view>
						<view class="mev-pledge-num-wrap-rounded-name">
							<text>{{ $t('sOLintelligentchain') }}</text>
						</view>
					</view>
				</view>
			</view>

			<u-gap height="24"></u-gap>

			<!-- 充值金额 -->
			<view class="mev-pledge-amount-wrap">
				<view class="mev-pledge-amount-wrap-title">
					<text>{{ $t('rechargeamount') }}</text>
				</view>
				<u-gap height="13"></u-gap>
				<view class="mev-pledge-amount-search-wrap">
					<view class="mev-pledge-amount-search-wrap-icon">
						<image src="/static/image/mev/t.png" />
					</view>
					<view class="mev-pledge-amount-search-wrap-input flex-1">
						<input class="flex-1" type="number" :placeholder="$t('prechargeamount')" v-model="rechargeAmount"
							@input="change" @confirm="rechargeAmountConfirm" />
					</view>
					<view class="mev-pledge-amount-search-wrap-select flex">
						<text style="margin-right: 10px;" class="label mev-pledge-amount-search-wrap-select-label">USDT</text>
						<!-- <text  class="label mev-pledge-amount-search-wrap-select-label">USDT</text>
						<image class="mev-pledge-amount-search-wrap-select-icon" src="/static/image/mev/select.png"
							mode="scaleToFill" /> -->
					</view>
				</view>
				<u-gap height="10"></u-gap>
				<view class="recharge-tag">
					<view class="recharge-tag-right">
						<!-- <text>{{ $t('fee') }}{{ fee }}</text> -->
						<text>{{ $t('accountbalance') }}: {{ Number(assets.amount) }}</text>
					</view>
					<view class="recharge-tag-left">
						<!-- <text>{{ $t('accountbalance') }}: {{ Number(assets.amount) }}</text> -->
					</view>
				</view>
				<u-gap height="26"></u-gap>
				<view class="recharge-btn-wrapper" @click="rechargeAmountConfirm">
					<view class="recharge-btn">
						<text class="recharge-btn-text">{{ $t("recharge") }}</text>
					</view>
				</view>
			</view>

			<u-gap height="25"></u-gap>

			<!-- 跟单机器人 -->
			<view class="mev-follow-robot-wrap-title">
				<text>{{ $t('copyrobot') }}</text>
			</view>
			<u-gap height="13"></u-gap>
			<view class="mev-follow-robot-wrap">
				<u-gap height="15"></u-gap>
				<view class="mev-follow-robot-wrap-content">
					<view class="mev-follow-robot-wrap-content-title">
						<view class="mev-follow-robot-wrap-content-title-logo">
							<image src="/static/image/mev/logo.png" mode="scaleToFill" />
						</view>
						<view class="mev-follow-robot-wrap-content-title-text">
							<view style="width: 340rpx;" class="mev-follow-robot-wrap-content-title-text-name-1">{{
								$t('sOLintelligentchain') }}</view>
							<view style="width: 110px;" class="mev-follow-robot-wrap-content-title-text-name-2">{{
								Number(rechargeRate.min).toFixed(2) }}%-{{ Number(rechargeRate.max).toFixed(2) }}%{{ $t('month') }}
							</view>
						</view>
						<view class="mev-follow-robot-wrap-content-title-time">
							<text>{{ followTime }} {{ $t('days') }}</text>
						</view>
					</view>
					<u-gap height="21"></u-gap>
					<view class="mev-follow-robot-search-wrap">
						<view class="mev-follow-robot-search-wrap-icon">
							<image src="/static/image/mev/t.png" />
						</view>
						<view class="mev-follow-robot-search-wrap-input flex-1">
							<input class="flex-1" type="number" :placeholder="$t('pleaseenterthetrackingamount')"
								v-model="followAmount" @confirm="followAmountConfirm" />
						</view>
						<view class="mev-follow-robot-search-wrap-select flex">
							<text class="label mev-follow-robot-search-wrap-select-label " style="margin-right: 10px;">USDT</text>
							<text class="label mev-follow-robot-search-wrap-select-label " v-if="false">USDT</text>
							<image class="mev-follow-robot-search-wrap-select-icon" v-if="false" src="/static/image/mev/select.png"
								mode="scaleToFill" />
						</view>
					</view>
					<u-gap height="15"></u-gap>
					<view class="mev-follow-robot-search-wrap">
						<view class="mev-follow-robot-search-wrap-icon">
							<image src="/static/image/mev/clock.png" />
						</view>
						<view class="mev-follow-robot-search-wrap-input flex-1">
							<input class="flex-1" disabled :placeholder="$t('trackingtime')" v-model="followTime" />
						</view>
						<view class="mev-follow-robot-search-wrap-select flex" @click="showTime">
							<image class="mev-follow-robot-search-wrap-select-icon" src="/static/image/mev/select.png"
								mode="scaleToFill" />
						</view>
					</view>
					<u-gap height="20"></u-gap>
					<view class="recharge-btn-wrapper" @click="getBtn">
						<view class="recharge-btn">
							<text class="recharge-btn-text">{{ $t('confirm') }}</text>
						</view>
					</view>
					<u-gap height="19"></u-gap>

				</view>
			</view>


			<!-- 跟单记录 -->
			<u-gap height="22"></u-gap>
			<view class="mev-follow-record-wrap">
				<view class="mev-follow-record-wrap-title flex items-center justify-between">
					<text>{{ $t('documentaryrecord') }}</text>
					<view class="mev-follow-record-wrap-title-right flex items-center justify-center">
						<image src="/static/image/my/right.png" style="width: 20rpx; height: 38rpx;" />
					</view>
				</view>

				<view class="mev-follow-record-wrap-content">
					<view class="mev-follow-record-wrap-content-wrap ">
						<view class="mev-follow-record-wrap-content-wrap-rounded-wrap " style="margin-top: 30rpx;"
							v-for="item, index in sList" :key="index" @click="goincome(item)">
							<view class="mev-follow-record-wrap-content-wrap-rounded">
								<view class="mev-follow-record-wrap-content-wrap-rounded-logo">
									<!-- <image src="/static/image/mev/avatar.png" /> -->
									<image src="/static/image/mev/t.png" />
								</view>
								<view class="mev-follow-record-wrap-content-wrap-rounded-name flex flex-column justify-between">
									<text class="mev-follow-record-wrap-content-wrap-rounded-name-1">
										{{ $t('transactioncustody') }} VIP{{item.user.level }}
									</text>
									<text class="mev-follow-record-wrap-content-wrap-rounded-name-2">{{ $t('money') }}:{{ item.amount
									}}</text>
									<text class="mev-follow-record-wrap-content-wrap-rounded-name-3">{{ item.created_at }}</text>
								</view>
								<view class="flex flex-column justify-between  mev-follow-record-wrap-content-wrap-rounded-status"
									style="flex-grow: 1;height: 180rpx;align-items: end;">
									<view class="mev-follow-record-wrap-content-wrap-rounded-time">
										<!-- 1 进行中 2已结束 -->
										<text v-if="item.status == 1">{{ $t('inprogress') }}</text>
										<text v-if="item.status == 2">{{ $t('ended') }}</text>
									</view>
									<view class="mev-follow-record-wrap-content-wrap-rounded-time-remaining text-right">
										<text>{{ $t('remaining') }}:{{item.day -  item.run_day  }}{{ $t('days') }}</text>
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>


				
				<u-gap height="50"></u-gap>

			</view>

		</z-paging>
	</view>
</template>






<style lang="scss" scoped>
.mev-pledge-num-wrap {
	margin: 0 30rpx;

	.mev-pledge-num-wrap-title {
		font-family: Source Han Sans CN;
		font-size: 36rpx;
		color: #FFFFFF;
		font-weight: bold;
		line-height: 64rpx;
	}

	.mev-pledge-num-wrap-rounded-wrap {
		width: 690rpx;

		height: 180rpx;
		background: #110F20;
		border-radius: 30rpx;
		display: flex;
		align-items: center;

		.mev-pledge-num-wrap-rounded {
			display: flex;
			align-items: center;
			justify-content: space-between;

			.mev-pledge-num-wrap-rounded-logo {
				width: 120rpx;
				height: 120rpx;
				margin: 30rpx 20rpx 30rpx 30rpx;

				image {
					width: 100%;
					height: 100%;
				}
			}

			.mev-pledge-num-wrap-rounded-name {
				font-family: Source Han Sans CN;
				font-weight: 300;
				font-size: 36rpx;
				color: #FFFFFF;
				line-height: 64rpx;
			}
		}





	}



}

.mev-pledge-amount-wrap {
	margin: 0 30rpx;

	.mev-pledge-amount-wrap-title {
		font-family: Source Han Sans CN;
		font-size: 36rpx;
		color: #FFFFFF;
		font-weight: bold;
		line-height: 64rpx;
	}

	.mev-pledge-amount-search-wrap {

		//width: 690rpx;
		height: 108rpx;
		background: #110F20;
		border-radius: 30rpx;
		border: 2rpx solid #6C7680;
		display: flex;
		align-items: center;
		justify-content: 0;

		.mev-pledge-amount-search-wrap-icon {
			margin: 30rpx 20rpx 30rpx 30rpx;
			width: 48rpx;
			height: 48rpx;

			image {
				width: 100%;
				height: 100%;
			}
		}

		.mev-pledge-amount-search-wrap-input {
			display: flex;
			align-items: center;

			input {
				color: white;
			}
		}

		.mev-pledge-amount-search-wrap-select {
			display: flex;
			align-items: center;

			.mev-pledge-amount-search-wrap-select-label {
				font-family: Source Han Sans CN;
				font-weight: bold;
				font-size: 24rpx;
				color: #45E5AF;
				line-height: 64rpx;
			}

			.mev-pledge-amount-search-wrap-select-icon {
				width: 20rpx;
				height: 12rpx;
				margin-left: 16rpx;
				margin-right: 36rpx;
			}
		}

	}

	.recharge-tag {
		display: flex;
		justify-content: space-between;

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
}

.mev-follow-robot-wrap-title {
	margin: 0 30rpx;
	font-family: Source Han Sans CN;
	font-size: 36rpx;
	color: #FFFFFF;
	font-weight: bold;
	line-height: 64rpx;
}

.mev-follow-robot-wrap {
	background: #110F20;
	border-radius: 30rpx;
	margin: 0 30rpx;

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

	.mev-follow-robot-wrap-content {
		margin: 0 20rpx;

		.mev-follow-robot-wrap-content-title {
			display: flex;
			align-items: center;
			justify-content: space-around;

			.mev-follow-robot-wrap-content-title-logo {
				width: 98rpx;
				height: 98rpx;
				margin-right: 20rpx;

				image {
					width: 100%;
					height: 100%;
				}
			}

			.mev-follow-robot-wrap-content-title-text {
				display: flex;
				flex-direction: column;
				justify-content: space-between;

				.mev-follow-robot-wrap-content-title-text-name-1 {
					font-family: Source Han Sans CN;
					font-weight: 300;
					font-size: 36rpx;
					color: #FFFFFF;
					line-height: 64rpx;
				}

				.mev-follow-robot-wrap-content-title-text-name-2 {
					font-family: Source Han Sans CN;
					font-weight: 300;
					font-size: 24rpx;
					color: #FFFFFF;
					line-height: 64rpx;
				}

			}

			.mev-follow-robot-wrap-content-title-time {
				// margin-left: 160rpx;
				width: 180rpx;
				height: 60rpx;
				background-color: #45E5AF;
				border-radius: 30rpx 30rpx 0rpx 30rpx;
				display: flex;
				align-items: center;
				justify-content: center;

				text {
					font-family: Source Han Sans CN;
					font-weight: 300;
					font-size: 28rpx;
					color: #FFFFFF;
					line-height: 64rpx;
				}
			}
		}

		.recharge-tag {
			display: flex;
			justify-content: space-between;

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
			background: linear-gradient(0deg, #47D7A5, #B5F4B3);
			border-radius: 44rpx;
			width: 600rpx;
			margin: 0 auto;

			.recharge-btn {
				height: 88rpx;
				display: flex;
				align-items: center;
				justify-content: center;
			}


			.recharge-btn-text {
				font-family: Source Han Sans CN;
				font-weight: bold;
				font-size: 36rpx;
				color: #0D081A;
				line-height: 64rpx;
			}
		}
	}
}


/* 跟单记录 */
.mev-follow-record-wrap {
	margin: 0 30rpx;

	.mev-follow-record-wrap-title {
		font-family: Source Han Sans CN;
		font-size: 36rpx;
		color: #FFFFFF;
		font-weight: bold;
		line-height: 64rpx;
	}

	.mev-follow-record-wrap-content {
		.mev-follow-record-wrap-content-wrap {
			.mev-follow-record-wrap-content-wrap-rounded {
				align-items: stretch;
				/* 让子元素的高度拉伸以适应容器 */
				background: #110F20;
				border-radius: 30rpx;
				display: flex;
				align-items: center;
				display: flex;
				align-items: center;
				justify-content: space-between;
			}

			.mev-follow-record-wrap-content-wrap-rounded-logo {
				width: 120rpx;
				height: 120rpx;
				margin-right: 20rpx;
				margin-left: 30rpx;

				image {
					width: 100%;
					height: 100%;
				}
			}

			.mev-follow-record-wrap-content-wrap-rounded-name {
				height: 180rpx;
				width: 216rpx;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				text-align: left;

				.mev-follow-record-wrap-content-wrap-rounded-name-1 {
					width: 216rpx;
					// width: 226rpx;
					padding-top: 20rpx;
					font-family: Source Han Sans CN;
					font-weight: 300;
					font-size: 30rpx;
					color: #FFFFFF;
					// line-height: 64rpx;
				}

				.mev-follow-record-wrap-content-wrap-rounded-name-2 {
					width: 216rpx;
					padding-top: 10rpx;
					font-family: Source Han Sans CN;
					font-weight: 300;
					font-size: 24rpx;
					color: #FFFFFF;
					// line-height: 64rpx;
				}

				.mev-follow-record-wrap-content-wrap-rounded-name-3 {
					// width: 216rpx;
					// width: 226rpx;
					width: 236rpx;
					padding-top: 10rpx;
					margin-bottom: 30rpx;
					font-family: Source Han Sans CN;
					font-weight: 300;
					font-size: 24rpx;
					color: #FFFFFF;
					// line-height: 64rpx;
				}
			}

			.mev-follow-record-wrap-content-wrap-rounded-status {
				.mev-follow-record-wrap-content-wrap-rounded-status-text {}

				.mev-follow-record-wrap-content-wrap-rounded-time-remaining {
					margin-right: 30rpx;
					font-family: Source Han Sans CN;
					margin-bottom: 30rpx;
					font-weight: 300;
					font-size: 24rpx;
					color: #FFFFFF;
				}
			}

			.mev-follow-record-wrap-content-wrap-rounded-time {

				// margin-left: 160rpx;
				width: 180rpx;
				height: 60rpx;
				background-color: #45E5AF;
				border-radius: 30rpx 30rpx 0rpx 30rpx;
				display: flex;
				align-items: center;
				justify-content: center;

				text {
					font-family: Source Han Sans CN;
					font-weight: 300;
					font-size: 28rpx;
					color: #FFFFFF;
					line-height: 64rpx;
				}
			}
		}
	}
}
</style>
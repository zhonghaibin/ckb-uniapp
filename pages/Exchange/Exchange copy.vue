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
</style>

<template>
	<view class="">
		<z-paging ref="paging" v-model="list" bg-color="#0D081A" @query="getList">
			<view class="" slot="top">
				<NavBarCommon />
			</view>

			<!-- 余额收益 -->
			<view class="exchange-wrap">
				<view class="flex justify-between">
					<view class="flex flex-column " style="margin-left: 30rpx;">
						<view class="flex flex-column">
							<text style="margin-top: 40rpx;;font-family: Source Han Sans CN;
font-weight: 300;
font-size: 30rpx;
color: #FFFFFF;
line-height: 30rpx;">账户余额</text>
							<text style="margin-top: 34rpx;;font-family: Source Han Sans CN;
font-weight: bold;
font-size: 60rpx;
color: #45E5AF;
line-height: 60rpx;">
								<!-- 15,25432 -->
								{{ assets.amount }}
							</text>
						</view>
						<view class="flex flex-column">
							<text style="margin-top: 40rpx;;font-family: Source Han Sans CN;
font-weight: 300;
font-size: 30rpx;
color: #FFFFFF;
line-height: 30rpx;">累计收益</text>
							<text style="margin-top: 34rpx;;font-family: Source Han Sans CN;
font-weight: bold;
font-size: 60rpx;
color: #45E5AF;
line-height: 60rpx;">264</text>
						</view>
					</view>
					<view class="bg">
						<image src="/static/image/Exchange/bg.png" style="width: 414rpx;height: 342rpx;" />
					</view>
				</view>
			</view>
			<u-gap height="24"></u-gap>
			<!-- one兑换 -->

			<view style="">
				<view class="one">
					<view class="recharge-header">
						<view class="recharge-header-title">
							<text>ONE兑换</text>
						</view>
						<view class="recharge-header-subtitle">
							<text>兑换说明</text>
						</view>
					</view>
					<u-gap height="15"></u-gap>
					<view class="recharge-search ">
						<view class="mev-follow-robot-search-wrap">
							<view class="mev-follow-robot-search-wrap-input flex-1" style="margin-left: 30rpx;">
								<input class="flex-1" type="number" placeholder="请输入兑换数量" v-model="searchValue" @confirm="confirm" />
							</view>
							<view class="mev-follow-robot-search-wrap-select flex">
								<text class="label mev-follow-robot-search-wrap-select-label">MAX</text>
								<image class="mev-follow-robot-search-wrap-select-icon"
									style="width: 48rpx;height: 48rpx;margin: 0 20rpx;" src="/static/image/Exchange/group.png"
									mode="scaleToFill" />
								<image class="mev-follow-robot-search-wrap-select-icon" src="/static/image/mev/select.png"
									mode="scaleToFill" />
							</view>
						</view>
					</view>
					<u-gap height="22"></u-gap>
				</view>
				<!-- 转换按钮 -->
				<view class="flex justify-center items-center">
					<image src="/static/image/common/change1.png" style="width: 88rpx;height: 88rpx;" />
				</view>
				<view class="two">
					<u-gap height="15"></u-gap>
					<view class="recharge-header">
						<view class="recharge-header-title">
							<text>需消耗</text>
						</view>
					</view>
					<u-gap height="15"></u-gap>
					<view class="recharge-search ">
						<view class="mev-follow-robot-search-wrap">
							<view class="mev-follow-robot-search-wrap-input flex-1" style="margin-left: 30rpx;">
								<input class="flex-1" type="number" placeholder="请输入消耗" v-model="searchValue1" @confirm="confirm" />
							</view>
							<view class="mev-follow-robot-search-wrap-select flex">
								<text class="label mev-follow-robot-search-wrap-select-label">可用:56.235 USDT</text>
								<image class="mev-follow-robot-search-wrap-select-icon" src="/static/image/mev/select.png"
									mode="scaleToFill" />
							</view>
						</view>
					</view>
					<u-gap height="18"></u-gap>
				</view>
			</view>


			<!-- 转换按钮 -->
			<!-- 需消耗 -->
			<view class="recharge-tag">
				<view class="recharge-tag-left" style="margin-left: 20rpx;">
					<text>1CKB ≈ 31.2544 USDT</text>
				</view>
				<view class="recharge-tag-right">
				</view>
			</view>
			<u-gap height="46"></u-gap>

			<!-- 确认 -->
			<view class="recharge-btn-wrapper">
				<view class="recharge-btn" @click="getBtn">
					<text class="recharge-btn-text">确认</text>
				</view>
			</view>
		</z-paging>


	</view>
</template>

<script setup>
import { reactive, ref, computed } from 'vue'


import { useUserInfoStore } from '@/store/modules/userInfoStore.js';
import { useBaseInfoStore } from '@/store/modules/baseInfoStore.js';


const userStore = useUserInfoStore();
const baseStore = useBaseInfoStore()



const avatar = computed(() => userStore.avatar);
const identity = computed(() => userStore.identity);
const level = computed(() => userStore.level);
const direct_count = computed(() => userStore.direct_count);
const direct_bonus = computed(() => userStore.direct_bonus);
const assets = computed(() => userStore.assets);
const share_link = computed(() => userStore.share_link);
const share_code = computed(() => userStore.share_code);

const base_info = computed(() => baseStore.base_info);



let list = ref([])
let searchValue = ref('')
let searchValue1 = ref('')

const model = reactive({
	from_coin: 'ONE',
	to_coin: 'USDT',
	amount: '100',
	rate: '1',
	lock_until: '0',
	signature: '',
	fee: '0'
})

const getBtn = () => {

	console.log(model, 'model');

	console.log(searchValue.value, '13');
	console.log(searchValue1.value, '1322');
	console.log('getbtn');
}

const confirm = (value) => {
	console.log(value, 'vlaue');
}
const getList = () => {

}
</script>

<style lang="scss" scoped></style>
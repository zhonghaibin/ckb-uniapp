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
		<z-paging ref="paging" v-model="pledgeList" bg-color="#0D081A" @query="getList">
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
						<view class="mev-follow-robot-search-wrap-select flex">
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
						<text>可质押:103 ONE</text>
					</view>
					<view class="recharge-tag-right">
						<text>质押总量:163 ONE</text>
					</view>
				</view>
				<u-gap height="26"></u-gap>
				<!-- btn -->
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
								<text class="" style="font-size: 20rpx;">USDT</text></text>
						</view>
						<view class="recharge-list-item-content-middle">
							<text>{{ item.day }}天</text>
						</view>
						<view class="recharge-list-item-content-right">
							<text>{{ item.created_at }}</text>
						</view>
					</view>
					<u-gap height="20"></u-gap>
					<view class="flex justify-center items-center">
						<image src="/static/image/pledge/bg.png" style="width: 400rpx;height: 326rpx;" mode="" />
					</view>
					<u-gap height="43"></u-gap>
					<view class="flex justify-center items-center recharge-list-item-described">
						<text class="mr-sm">简介:</text>
						<text @click="changeTransactionType('MEV')" class="mr-sm"
							style="border-bottom: 2rpx solid #45E5AF;">ONE</text>
						<text @click="changeTransactionType('PLEDGE')" style="border-bottom: 2rpx solid #45E5AF;">CKB</text>
					</view>
					<u-gap height="16"></u-gap>
				</view>
				<u-gap height="24"></u-gap>

				<!--  -->
			</view>
		</z-paging>
	</view>
</template>

<script>
import { transactiontransactionList } from '@/api/index.js'
export default {
	methods: {
		changeTransactionType(type) {
			this.transactionType = type
			this.getList()
		},
		// 质押记录
		getPledgeList() {

		},


		goBack() {
			uni.navigateBack()
		},
		getBtn() {
			console.log(this.searchValue)
			this.searchValue = ''
		},
		confirm(value) {
			console.log(value)
			this.searchValue = value
		},
		getList() {
			transactiontransactionList(1, this.transactionType).then(res => {
				console.log(res, 'resss')
				this.pledgeList = res.data.data
				this.$refs.paging.complete(this.pledgeList)
			})
		}
	},
	onLoad() {
	},
	onShow() {
		// this.getPledgeList()
	},
	data() {
		return {
			list: [],
			searchValue: '',
			pledgeList: [],
			transactionType: 'MEV' // 质押类型PLEDGE MEV
		};
	},
};
</script>
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
		}

		.recharge-list-item-content-right {
			// width: 200rpx;
			text-align: right;
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
			<view class="">
				<!-- 头部 -->
				<view class="recharge-header">
					<view class="recharge-header-back">
						<view class="recharge-header-back-icon" @click="goBack">
							<image src="/static/image/common/back.png" />
						</view>
						<view class="recharge-header-title">
							<text>USDT提现</text>
						</view>
					</view>
				</view>
				<u-gap height="14"></u-gap>
				<!-- search -->
				<view class="recharge-search ">
					<u-search placeholder="请输入提现金额" v-model="searchValue" searchIcon="" :isNumber="true" @change="change" shape="circle"
						:show-action="false" bg-color="#110F20" @search="search"></u-search>
				</view>
				<u-gap height="10"></u-gap>
				<!-- tag -->
				<view class="recharge-tag">
					<view class="recharge-tag-left flex justify-between flex-1">
						<!-- 去掉小数点后所有数字 -->
						<text>余额:{{ Number(assets.amount).toFixed(0) }} USDT</text>
						<text>手续费:{{ Number(fee).toFixed(0) }} USDT</text>
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
						<text>提现记录</text>
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
					<view class="recharge-list-item-content" v-for="(item, index) in withdrawalList" :key="index">
						<view class="recharge-list-item-content-left ">
							<text class=" flex">
								<!-- <text class="mr-xs">{{ index + 100 }}</text> -->
								<text class="mr-xs">{{ Number(item.amount).toFixed(2) }}</text>
								<text class="" style="font-size: 20rpx;">USDT</text></text>
						</view>
						<view class="recharge-list-item-content-middle" v-if="true">
							<text>Ox...v7dk</text>
						</view>
						<view class="recharge-list-item-content-right">
							<text>{{ item.created_at }}</text>
						</view>
					</view>
				</view>

				<!--  -->
			</view>
		</z-paging>
	</view>
</template>

<script>
import { withdrawList, withdraw } from '@/api/index.js'
import { mapState, mapActions } from 'vuex'
export default {
	computed: {
		...mapState('m_baseInfo', ['base_info']),
		...mapState('m_userInfo', ['assets'])
	},
	methods: {
		...mapActions('m_userInfo', ['getUserInfo']),
		getBtn() {
			if (this.searchValue == '') {
				uni.showToast({
					title: '请输入提现金额',
					icon: 'none'
				})
				return
			}
			this.withdraw()
		},
		// 提现
		withdraw() {
			// return
			let data = {
				amount: this.searchValue,
				fee: this.fee
			}
			withdraw(data).then(res => {
				console.log(res, 'resss 提现成功')
				if (res.code == 200) {
					this.searchValue = ''
					this.getUserInfo()
					this.getWithdrawalList()
					uni.showToast({
						title: '提现成功',
						icon: 'none'
					})
				} else {
					uni.showToast({
						title: res.message,
						icon: 'none'
					})
				}
			})
		},

		change(value) {

			// 只能输入数字
			// if (!/^\d*\.?\d*$/.test(value)) {
			// 	uni.showToast({
			// 		title: '请输入正确的金额',
			// 		icon: 'none'
			// 	})
			// 	return
			// }

			// if (typeof value == 'string') {
			// 	value = Number(value)
			// }

			if (value == '') {
				this.fee = 0
				return
			}

			// console.log(value)
			let fee = this.base_info.withdraw_fee_rate * this.searchValue
			this.fee = fee
			let withdraw_min_number = this.base_info.withdraw_min_number
			if (value < withdraw_min_number) {
				uni.showToast({
					title: '提现金额不能小于' + withdraw_min_number + 'USDT',
					icon: 'none'
				})
				return
			}
			this.searchValue = value
		},



		// 提现记录
		getWithdrawalList() {
			withdrawList().then(res => {
				console.log(res, 'resss')
				console.log(res.data, 'resss')
				if (res.data) {
					this.withdrawalList = res.data.data
				}
				// this.$refs.paging.complete(this.list)
			})
		},

		goBack() {
			uni.navigateBack()
		},
		search(value) {
			console.log(value)
			this.searchValue = value
		},
		getList() {
			this.$nextTick(() => {
				// this.$refs.paging.complete(this.list)
			})
		}
	},
	onLoad() {
	},
	onShow() {
		this.getWithdrawalList()
		console.log(this.assets, "this.assets");

	},
	data() {
		return {
			list: [],
			withdrawalList: [],
			searchValue: '',
			fee: 0
		};
	},
};
</script>
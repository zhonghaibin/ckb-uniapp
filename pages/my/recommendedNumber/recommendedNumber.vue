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

	.recharge-list-title {
		font-family: Source Han Sans CN;
		font-weight: 500;
		font-size: 36rpx;
		color: #FFFFFF;
		line-height: 64rpx;
		padding-top: 30rpx;
		padding-left: 30rpx;
	}

	.recharge-list-tabs-wrap {
		//width: 690rpx;
		height: 100rpx;
		background: rgba(17, 15, 32, 0.5);

		border-radius: 20rpx;
		border: 2rpx solid #6C7680;

		display: flex;


		.recharge-list-tabs-item {
			//width: 326rpx;
			height: 80rpx;
			border-radius: 20rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			margin: 10rpx 0rpx 10rpx 10rpx;
      flex: 1;
			font-family: Source Han Sans CN;
			font-weight: bold;
			font-size: 30rpx;
			color: #6C7680;
			line-height: 64rpx;

			text {
				width: 122rpx;
				height: 30rpx;
				font-family: Source Han Sans CN;
				font-weight: bold;
				font-size: 30rpx;
				color: #070A15;
				line-height: 64rpx;
			}
		}

		.recharge-list-tabs-item-active {
			background: linear-gradient(0deg, #47D7A5, #B5F4B3);
			color: #070A15;
		}

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
			width: 128rpx;
		}

		.recharge-list-item-nav-middle {
			text-align: left;
			width: 86rpx;
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

		.recharge-list-item-content-middle {
			text-align: left;
			width: 86rpx;
		}

		.recharge-list-item-content-left {
			text-align: left;
			width: 128rpx;
		}

		.recharge-list-item-content-right {
			text-align: right;
			// width: 238rpx;
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
							<text>{{ $t('referrals') }}</text>
						</view>
					</view>
				</view>
				<u-gap height="10"></u-gap>
				<!-- list -->
				<view class="recharge-list-wrapper">
					<view class="recharge-list-tabs-wrap">
						<view class="recharge-list-tabs-item" :class="current == 0 ? 'recharge-list-tabs-item-active' : ''"
							@click="changeTab(0)">
							{{ $t('directpushquantity') }}
						</view>
						<view class="recharge-list-tabs-item" :class="current == 0 ? '' : 'recharge-list-tabs-item-active'"
							@click="changeTab(1)">
							{{ $t('teamsize') }}
						</view>
					</view>
					<u-gap height="15"></u-gap>
					<view class="recharge-list-item-nav" v-if="current == 0">
						<view class="recharge-list-item-nav-left">
							<text>{{ $t('address') }}</text>
						</view>
						<view class="recharge-list-item-nav-middle">
							<text>{{ $t('level') }}</text>
						</view>
						<view class="recharge-list-item-nav-right">
							<text>{{ $t('rechargetime') }}</text>
						</view>
					</view>
					<view class="recharge-list-item-nav" v-if="current == 1">
						<view class="recharge-list-item-nav-left " style="width: 96rpx;">
							<text>{{ $t('teamsize') }}</text>
						</view>
						<view class="recharge-list-item-nav-middle" style="width: 98rpx;">
							<text>{{ $t('effectivequantity') }}</text>
						</view>
						<view class="recharge-list-item-nav-right">
							<text>{{ $t('teamcontribution') }}</text>
						</view>
					</view>
					<block v-if="current == 0">
						<view class="recharge-list-item-content" v-for="(item, index) in list" :key="index">
							<view class=" recharge-list-item-content-left">
								<text>{{ truncatedAccount(item.identity) }}</text>
							</view>
							<view class=" recharge-list-item-content-middle">
								<text v-if="item.level">VIP {{ item.level }}</text>
							</view>
							<view class="recharge-list-item-content-right">
								<text>{{ item.created_at }}</text>
							</view>
						</view>
					</block>
					<block v-if="current == 1">
						<view class="recharge-list-item-content" v-for="(item, index) in list" :key="index">
							<view class=" recharge-list-item-content-left" style="width: 96rpx;">
								<text>{{ item.total_team_count }}</text>
							</view>
							<view class=" recharge-list-item-content-middle" style="width: 98rpx;">
								<text>{{ item.real_team_count }}</text>
							</view>
							<view class="recharge-list-item-content-right">
								<text>{{ item.team_amount }}</text>
							</view>
						</view>
					</block>

					<u-gap height="20"></u-gap>


					<!--  -->
				</view>

			</view>
		</z-paging>
	</view>
</template>

<script>
import { referralList, teamList } from '@/api/index.js'

export default {
	methods: {

		// 截取钱包地址
		truncatedAccount(value) {
			if (value) {
				return value.slice(0, 6) + '...' + value.slice(-4);
			}
			return '';
		},
		referralListApi() {
			referralList().then(res => {
				console.log(res, 'da');
				this.$refs.paging.complete(res.data.data)
			})
		},
		teamListApi() {
			teamList().then(res => {

				this.$refs.paging.complete(res.data)
			})
		},
		changeTab(index = 0) {
			this.current = index
			if (index == 0) {
				this.referralListApi()
			} else if (index == 1) {
				this.teamListApi()
			}
		},
		goBack() {
			uni.navigateBack()
		},
		getBtn() {
		},
		getList() {
			this.changeTab()
		}
	},
	onLoad() {
	},
	onShow() {
		// this.changeTab()
	},
	data() {
		return {
			current: 0,
			list: [],
			searchValue: '',
			referralListData: {
				"current_page": 1,
				"data": [
					// {
					// 	"identity": "",
					// 	"level": 0,
					// 	"created_at": ""
					// },
				],
				"first_page_url": "",
				"from": 0,
				"last_page": 0,
				"last_page_url": "",
				"links": [
					{
						"url": '',
						"label": "",
						"active": false
					},
				],
				"next_page_url": "",
				"path": "",
				"per_page": 0,
				"prev_page_url": "",
				"to": 0,
				"total": 0
			},
			teamListData: [
				// {
				// 	"total_team_count": 0,
				// 	"real_team_count": 0,
				// 	"team_amount": 0
				// }
			],
		};
	},
};
</script>
<style lang="scss" scoped>
.my-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-left: 32rpx;
	margin-right: 30rpx;

	.my-header-left {
		display: flex;
		align-items: center;
		justify-content: space-between;

		image {
			width: 48rpx;
			height: 40rpx;
		}
	}

	.my-header-right {
		display: flex;
		align-items: center;
		justify-content: space-between;

		image {
			width: 38rpx;
			height: 38rpx;
			margin-right: 20rpx;
		}

		text {
			font-family: Source Han Sans CN;
			font-weight: 400;
			font-size: 30rpx;
			color: #FFFFFF;
			line-height: 64rpx;
		}
	}

}


.my-content {
	width: 690rpx;
	height: 180rpx;
	margin: 0 30rpx;
	border-radius: 30rpx;
	background-color: #191728;
	display: flex;
	align-items: center;

	.my-content-vipIcon {
		margin-right: 110rpx;
		margin-left: 80rpx;
		position: relative;
		width: 98rpx;
		height: 90rpx;

		background-image: url('/static/image/my/vip.png');
		/* 	 */
		background-repeat: no-repeat;
		/* 不重复背景 */
		background-position: center center;
		/* 背景居中 */
		background-size: cover;
		background-size: 98rpx 90rpx;

		text {
			position: absolute;
			bottom: 0;
			right: 0;
			font-family: Source Han Sans CN;
			font-weight: 500;
			font-size: 30rpx;
			color: #FEFEFE;
		}
	}

	.my-content-avatar {
		margin-top: 18rpx;
		margin-right: 22rpx;
		margin-left: 26rpx;

		image {
			width: 128rpx;
			height: 128rpx;
		}
	}

	.my-content-wrap {
		display: flex;
		// align-items: center;
		justify-content: space-between;
		flex-direction: column;

		.my-content-wallet {
			font-family: Source Han Sans CN;
			font-weight: 400;
			font-size: 36rpx;
			color: #FFFFFF;
			line-height: 64rpx;
		}

		.my-content-balance {
			font-family: Source Han Sans CN;
			font-weight: 300;
			font-size: 24rpx;
			color: #FFFFFF;
			line-height: 64rpx;
		}
	}
}

.my-entry {
	margin: 0 30rpx;
	width: 690rpx;
	height: 180rpx;
	background: #191728;
	box-shadow: 0rpx 2rpx 0rpx 0rpx rgba(13, 8, 26, 0.35);
	border-radius: 30rpx;

	display: flex;
	align-items: center;
	justify-content: space-evenly;

	.my-entry-item {
		display: flex;
		flex-direction: column;
		text-align: center;

		image {
			width: 88rpx;
			height: 88rpx;
		}

		text {
			font-family: Source Han Sans CN;
			font-weight: 400;
			font-size: 30rpx;
			color: #FFFFFF;
		}
	}
}

.my-about {
	margin: 0 30rpx;
	width: 690rpx;
	height: 390rpx;
	background: #191728;
	border-radius: 30rpx;

	.my-about-item {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 30rpx 34rpx 32rpx 30rpx;

		.my-about-item-left {
			display: flex;
			align-items: center;
			justify-content: space-between;

			image {
				width: 68rpx;
				height: 68rpx;
				margin-right: 18rpx;
			}

			text {
				font-family: Source Han Sans CN;
				font-weight: 500;
				font-size: 30rpx;
				color: #FFFFFF;
			}
		}

		.my-about-item-right {
			display: flex;
			align-items: center;
			justify-content: space-between;

			.my-about-item-right-text {
				font-family: Source Han Sans CN;
				font-weight: 500;
				font-size: 30rpx;
				color: #45E5AF;
				margin-right: 20rpx;

			}

			.my-about-item-right-image {
				width: 16rpx;
				height: 24rpx;
			}
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
				<view class="my-header">
					<view class="my-header-left">
						<image src="/static/image/my/list.png" />
					</view>
					<view class="my-header-right">
						<image src="/static/image/my/earth.png" />
						<text>EN</text>
					</view>
				</view>
				<u-gap height="42rpx"></u-gap>
				<!-- 内容 -->
				<view class="my-content">
					<view class="my-content-avatar">
						<image src="/static/image/my/avatar.png" />
					</view>
					<view class="my-content-wrap">
						<view class="my-content-wallet">
							<text>{{ identity }}</text>
						</view>
						<!-- 余额 -->
						<view class="my-content-balance">
							<text>余额:{{ Number(assets.amount).toFixed(3) }} USDT</text>
						</view>
					</view>
					<view class="my-content-vipIcon">
						<text>{{ level }}</text>
					</view>
				</view>
				<u-gap height="30rpx"></u-gap>
				<!-- 入口 -->
				<view class="my-entry">
					<view class="my-entry-item" @click="$pub.go('/pages/my/recharge/recharge')">
						<image src="/static/image/my/invited.png" />
						<text>充值</text>
					</view>
					<view class="my-entry-item" @click="$pub.go('/pages/my/withdrawal/withdrawal')">
						<image src="/static/image/my/withdrawal.png" />
						<text>提现</text>
					</view>
					<view class="my-entry-item" @click="$pub.go('/pages/my/invited/invited')">
						<image src="/static/image/my/invited.png" />
						<text>邀请</text>
					</view>
				</view>
				<u-gap height="32rpx"></u-gap>
				<!-- 关于 -->
				<view class="my-about">
					<!-- 推荐人数 -->
					<view class="my-about-item" @click="$pub.go('/pages/my/recommendedNumber/recommendedNumber')">
						<view class="my-about-item-left">
							<image class="my-about-item-left-image" src="/static/image/my/people.png" />
							<text class="my-about-item-left-text">推荐人数</text>
						</view>
						<view class="my-about-item-right">
							<text class="my-about-item-right-text">{{ direct_count }}</text>
							<image class="my-about-item-right-image" src="/static/image/my/right.png" />
						</view>
					</view>
					<u-line color="##A9A9A9" margin="0 30rpx"></u-line>
					<!-- 推荐收益 -->
					<!-- /pages/my/recommendationRevenue/recommendationRevenue -->
					<view class="my-about-item" @click="goRecommendationRevenue">
						<view class="my-about-item-left">
							<image class="my-about-item-left-image" src="/static/image/my/mony.png" />
							<text class="my-about-item-left-text">推荐收益</text>
						</view>
						<view class="my-about-item-right">
							<text class="my-about-item-right-text">{{ direct_bonus }}</text>
							<image class="my-about-item-right-image" src="/static/image/my/right.png" />
						</view>
					</view>
					<!-- 官方地址 -->
					<view class="my-about-item" @click="goUrl">
						<view class="my-about-item-left">
							<image class="my-about-item-left-image" src="/static/image/my/url.png" />
							<text class="my-about-item-left-text">官方地址</text>
						</view>
						<view class="my-about-item-right">
							<text class="my-about-item-right-text"></text>
							<image class="my-about-item-right-image" src="/static/image/my/right.png" />
						</view>
					</view>
				</view>
			</view>
		</z-paging>
	</view>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
	computed: {
		...mapState('m_userInfo', ['avatar', 'identity', 'level', 'direct_count', 'direct_bonus', 'assets', 'share_link', 'share_code']),
		// web_url
		...mapState('m_baseInfo', ['base_info'])
	},
	methods: {
		getList() {
			this.$nextTick(() => {
				// this.$refs.paging.complete(this.list)
			})
		},
		goUrl() {
			console.log(this.base_info, "this.base_info");

			let url = this.base_info.web_url
			uni.navigateTo({
				url: '/pages/webView/webView?url=' + url
			})
		},
		goRecommendationRevenue() {
			return
			this.$pub.go('/pages/my/recommendationRevenue/recommendationRevenue')
		}
	},
	onLoad() {
	},
	onShow() {

	},
	data() {
		return {
			list: [],
		};
	},
};
</script>
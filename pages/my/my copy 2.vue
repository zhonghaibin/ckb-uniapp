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
		// margin-left: 80rpx;
		// margin-left: 60rpx;
		margin-left: 40rpx;
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
			margin-top: 20rpx;
			font-family: Source Han Sans CN;
			font-weight: 400;
			font-size: 36rpx;
			color: #FFFFFF;
			line-height: 36rpx;
		}

		.my-content-balance {
			margin-top: 20rpx;
			font-family: Source Han Sans CN;
			font-weight: 300;
			font-size: 24rpx;
			color: #FFFFFF;
			line-height: 24rpx;
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
		align-items: center;

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

		<!--  -->

		<z-paging ref="paging" bg-color="#0D081A">
			<view class="" slot="top">
				<NavBarCommon />
			</view>
			<view class="">
				<!-- 头部 -->
				<view class="my-header relative">
					<view v-if="showLanguage" class="langTxt"
						style="background: #191728;position: absolute;top: 40px;right: 0px;padding: 5px 23px;border-radius: 17px;color: rgb(255, 255, 255);border: 1px solid ;z-index: 1;">
						<view @click="changeLanguage('en')">English</view>
						<u-line class="" style="margin: 5px 0;"></u-line>
						<view @click="changeLanguage('zh_CN')">Chinese</view>
					</view>
					<view class="my-header-left" @click="scan">
						<image src="/static/image/my/list.png" />
					</view>
					<view class="my-header-right" @click="showLanguage = !showLanguage">
						<image src="/static/image/my/earth.png" />
						<text>CH</text>
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
							<text> {{ truncatedAccount() }}</text>
						</view>
						<!-- 余额 -->
						<view class="my-content-balance">
							<text>{{ $t('balance') }}:{{ Number(assets.amount) }} USDT</text>
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
						<text>{{ $t('recharge') }}</text>
					</view>
					<view class="my-entry-item" @click="$pub.go('/pages/my/withdrawal/withdrawal')">
						<image src="/static/image/my/withdrawal.png" />
						<text>{{ $t('withdrawal') }}</text>
					</view>
					<view class="my-entry-item" @click="$pub.go('/pages/my/invited/invited')">
						<image src="/static/image/my/invited.png" />
						<text>{{ $t('invite') }}</text>
					</view>
				</view>
				<u-gap height="32rpx"></u-gap>
				<!-- 关于 -->
				<view class="my-about">
					<!-- 推荐人数 -->
					<view class="my-about-item" @click="$pub.go('/pages/my/recommendedNumber/recommendedNumber')">
						<view class="my-about-item-left">
							<image class="my-about-item-left-image" src="/static/image/my/people.png" />
							<text class="my-about-item-left-text">{{ $t('referrals') }}</text>
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
							<text class="my-about-item-left-text">{{ $t('recommendedincome') }}</text>
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
							<text class="my-about-item-left-text">{{ $t('officialaddress') }}</text>
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



<script setup>
import { computed, ref } from 'vue';
import { useUserInfoStore } from '@/store/modules/userInfoStore.js';
import { useBaseInfoStore } from '@/store/modules/baseInfoStore.js';

import jsQR from "jsqr";

const userStore = useUserInfoStore();

const baseStore = useBaseInfoStore()

// 扫码
const scan = () => {
	// 允许从相机和相册扫码
	console.log('scan');


	// H5通过拉起相机拍照来识别二维码
	function scanCodeH5() {
		uni.chooseImage({
			count: 1,
			success: imgRes => {
				const imagePath = imgRes.tempFilePaths[0];
				uni.getImageInfo({
					src: imagePath,
					success: imageInfo => {
						const canvas = document.createElement('canvas');
						const ctx = canvas.getContext('2d');
						canvas.width = imageInfo.width;
						canvas.height = imageInfo.height;

						const img = new Image();
						img.src = imagePath;

						img.onload = () => {
							ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

							// 进行图片灰度化处理
							const imageData = ctx.getImageData(0, 0, canvas.width, canvas
								.height);
							const data = imageData.data;
							for (let i = 0; i < data.length; i += 4) {
								const r = data[i];
								const g = data[i + 1];
								const b = data[i + 2];

								// 灰度化公式
								const gray = 0.2126 * r + 0.7152 * g + 0.0722 * b;
								data[i] = data[i + 1] = data[i + 2] = gray;
							}
							ctx.putImageData(imageData, 0, 0);

							// 获取图片的像素数据并用jsQR解析
							const processedData = ctx.getImageData(0, 0, canvas.width, canvas
								.height);
							const qrCodeData = jsQR(processedData.data, canvas.width, canvas
								.height);

							if (qrCodeData) {
								console.log("QR Code Data: ", qrCodeData.data);
							} else {
								console.log("未识别出二维码");
							}
						};
					},
					fail: err => {
						console.error("获取图片信息失败", err);
					}
				});
			}
		});
	}

	scanCodeH5()



}

// 计算属性
const identity = computed(() => userStore.identity);
const level = computed(() => userStore.level);
const direct_count = computed(() => userStore.direct_count);
const direct_bonus = computed(() => userStore.direct_bonus);
const assets = computed(() => userStore.assets);

const base_info = computed(() => baseStore.base_info);



import { useLanguageStore } from '@/store/modules/languageStore.js'

import { useI18n } from 'vue-i18n'

// 
const { locale, t } = useI18n()
const languageStore = useLanguageStore();


const showLanguage = ref(false)
// 修改语言
const changeLanguage = (val) => {
	if (val == 'zh_CN') {
		locale.value = val
		languageStore.changeLanguage(val)

		// 底部栏
		uni.setTabBarItem({
			index: 0,
			text: '行情',
		})
		uni.setTabBarItem({
			index: 1,
			text: 'MEV',
		})
		uni.setTabBarItem({
			index: 2,
			text: '兑换',
		})
		uni.setTabBarItem({
			index: 3,
			text: '质押',
		})
		uni.setTabBarItem({
			index: 4,
			text: '我的',
		})
	} else if (val == 'en') {
		locale.value = val
		languageStore.changeLanguage(val)
		uni.setTabBarItem({
			index: 0,
			text: 'Market',
		})
		uni.setTabBarItem({
			index: 1,
			text: 'MEV',
		})
		uni.setTabBarItem({
			index: 2,
			text: 'Exchange',
		})
		uni.setTabBarItem({
			index: 3,
			text: 'Pledge',
		})
		uni.setTabBarItem({
			index: 4,
			text: 'My',
		})
	}

	showLanguage.value = !showLanguage.value

}


// 截取钱包地址
const truncatedAccount = () => {
	// if (!identity.value) return

	if (identity.value) {
		// return walletAddress.value.slice(0, 6) + '...' + walletAddress.value.slice(-4);
		return identity.value.slice(0, 6) + '...' + identity.value.slice(-4);
		// return identity.value.slice(0, 6) + '...'
	}
	return t('connectedwallet');
};

const goUrl = () => {
	let url = base_info.value.web_url;

	try {
		window.location.replace(decodeURIComponent(url))
	} catch (error) {
		window.location = decodeURIComponent(url)
	}
	// uni.navigateTo({
	// 	url: 'https://www.ycombinator.com/'
	// });
	// uni.navigateTo({
	// 	url: '/pages/webView/webView?url=' + url
	// });
};
const goRecommendationRevenue = () => {
	return;
	// uni.navigateTo({ url: '/pages/my/recommendationRevenue/recommendationRevenue' });
};

</script>

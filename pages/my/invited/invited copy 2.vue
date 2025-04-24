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
				// height: 36rpx;
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
				// line-height: 36rpx;
			}
		}
	}
}


.recharge-qrcode {
	display: flex;
	justify-content: center;
	background: #FFFFFF;
	padding: 80rpx;
	width: 400rpx;
	margin: 0 auto;
	border-radius: 40rpx;
}

.recharge-url {
	display: flex;
	align-items: center;
	justify-content: center;


	.url {
		font-family: Source Han Sans CN;
		font-weight: 300;
		font-size: 48rpx;
		color: #FFFFFF;
		line-height: 48rpx;
	}

	.copy {
		font-family: Source Han Sans CN;
		font-weight: 300;
		font-size: 24rpx;
		color: #45E5AF;
		line-height: 64rpx;
	}
}
</style>

<template>
	<view class="">
		<!-- 0D081A -->
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
							<text>{{ $t('invitefriends') }}</text>
						</view>
					</view>
				</view>
				<u-gap height="80"></u-gap>
				<!-- qrcode -->
				<view>
					<view>
						<view class="recharge-qrcode ">
							<canvas id="qrcode" canvas-id="qrcode" style="width: 200px;height: 200px;"></canvas>
						</view>
					</view>
				</view>
				<u-gap></u-gap>
				<u-gap></u-gap>
				<u-gap></u-gap>
				<!--  -->
				<view class="recharge-url flex flex-column text-center">
					<view class="url">{{ $t('invitelink') }}</view>
					<u-gap></u-gap>
					<view class="" style="color:#fff;  overflow-wrap: break-word;width: 650rpx;">
						{{ share_link }}
					</view>
					<u-gap></u-gap>
					<u-gap></u-gap>
					<u-gap></u-gap>

					<view @click="copy" style="width: 600rpx;;margin: 0 0.9375rem;
    height: 2.75rem;
    background: linear-gradient(0deg, #47D7A5, #B5F4B3);
    border-radius: 1.375rem;">
						<view style="display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;">
							<view style="    font-family: Source Han Sans CN;
    font-weight: bold;
    font-size: 1.125rem;
    color: #0D081A;
    line-height: 2rem;"> {{ $t('copy') }}</view>
						</view>

					</view>

					
					<u-gap></u-gap>
					<u-gap></u-gap>
				</view>

			</view>

			<template #bottom>

			</template>
		</z-paging>
	</view>
</template>

<script setup>
import UQRCode from 'uqrcodejs'; // npm install uqrcodejs

import { ref, nextTick, computed } from 'vue'
import { onShow } from '@dcloudio/uni-app'


import { useUserInfoStore } from '@/store/modules/userInfoStore.js';
import { useBaseInfoStore } from '@/store/modules/baseInfoStore.js';


const userStore = useUserInfoStore();

const baseStore = useBaseInfoStore()

const share_link = computed(() => userStore.share_link);



// const urlLink = ref(share_link.value.split('=')[0])
// console.log(urlLink, 'urlLink');



onShow(() => {
	createQRCode()
})


const list = ref([])

import { useI18n } from 'vue-i18n'


const { locale, t } = useI18n()

function copy() {
	uni.setClipboardData({
		data: share_link.value,
		success: function () {
			console.log('success');
			uni.showToast({
				title: t('copySuccess'),
				icon: 'none'
			})
		}
	});
}


function goBack() {
	uni.navigateBack()
}

const getList = () => {
	console.log('getList');

}

const createQRCode = async () => {
	await nextTick()
	var qr = new UQRCode();
	// 设置二维码内容
	qr.data = share_link.value;
	// 设置二维码大小，必须与canvas设置的宽高一致
	// qr.size = 130;
	qr.size = 200;
	// 调用制作二维码方法
	qr.make();
	// 获取canvas上下文
	var canvasContext = uni.createCanvasContext('qrcode', this); // 如果是组件，this必须传入
	// 设置uQRCode实例的canvas上下文
	qr.canvasContext = canvasContext;
	// 调用绘制方法将二维码图案绘制到canvas上
	qr.drawCanvas();
}




</script>
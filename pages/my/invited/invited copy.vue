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


.recharge-qrcode {}

.recharge-url {
	display: flex;
	align-items: center;


	.url {
		font-family: Source Han Sans CN;
		font-weight: 300;
		font-size: 24rpx;
		color: #FFFFFF;
		line-height: 64rpx;

		margin-right: 42rpx;
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
		<!-- bg-color="#0D081A" -->
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
							<text>邀请好友</text>
						</view>
					</view>
				</view>
				<u-gap height="96"></u-gap>
				<!-- qrcode -->
				<view>
					<view class="recharge-qrcode " style="margin: 0 auto;width: 260rpx;">
						<canvas id="qrcode" canvas-id="qrcode" style="width: 260rpx;height: 260rpx;border-radius: 24rpx;"></canvas>
					</view>
				</view>

				<u-gap height="27"></u-gap>
				<!--  -->
				<view class="recharge-url" style="margin: 0 auto;width: 384rpx;">
					<view class="url">邀请链接http:/dh2j.com</view>
					<view class="copy" @click="copy">复制</view>
				</view>

			</view>
		</z-paging>
	</view>
</template>

<script>
import UQRCode from 'uqrcodejs'; // npm install uqrcodejs
console.log(UQRCode,'UQRCode');
export default {
	methods: {
		copy() {
			uni.setClipboardData({
				data: 'http:/dh2j.com',
				success: function () {
					console.log('success');
					uni.showToast({
						title: 'success',
						icon: 'none'
					})
				}
			});
		},
		goBack() {
			uni.navigateBack()
		},
		getBtn() {
			console.log(this.searchValue)
			this.searchValue = ''
		},
		search(value) {
			console.log(value)
			this.searchValue = value
		},
		getList() {
			this.$nextTick(() => {
				// this.$refs.paging.complete(this.list)
			})
		},
		createQRCode() {
			console.log('createQRCode');
			// 获取uQRCode实例
			this.$nextTick(()=>{
				var qr = new UQRCode();
				// 设置二维码内容
				qr.data = "12312c";
				// 设置二维码大小，必须与canvas设置的宽高一致
				qr.size = 130;
				// 调用制作二维码方法
				qr.make();
				// 获取canvas上下文
				var canvasContext = uni.createCanvasContext('qrcode', this); // 如果是组件，this必须传入
				// 设置uQRCode实例的canvas上下文
				qr.canvasContext = canvasContext;
				// 调用绘制方法将二维码图案绘制到canvas上
				qr.drawCanvas();
			})
	
			// console.log(qr.drawCanvas();,"qr.drawCanvas();");
		}
	},
	onLoad() {

	},
	onShow() {
		this.createQRCode()
	},
	data() {
		return {
			list: [],
			searchValue: ''
		};
	},
};
</script>
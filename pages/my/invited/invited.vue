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


.bg {
	width: 600rpx;
	// height: 1090rpx;
	// height: 960rpx;
	height: 900rpx;
	background: #FFFFFF;
	border-radius: 30rpx;
	display: flex;
	flex-direction: column;
	text-align: center;
	// align-items: center;
	// justify-content: center;


	.address {
		margin-top: 92rpx;
		// width: 171rpx;
		height: 30rpx;
		font-family: Source Han Sans CN;
		font-weight: 500;
		font-size: 36rpx;
		color: #333333;
		line-height: 36rpx;
	}

	.slogan {
		margin-top: 30rpx;
		height: 23rpx;
		font-family: Source Han Sans CN;
		font-weight: 300;
		font-size: 24rpx;
		color: #333333;
		line-height: 24rpx;
	}

	.recharge-qrcode {
		display: flex;
		justify-content: center;
		margin-top: 40rpx;
	}

	.logo {
		margin-top: 40rpx;
	}

	.url {
		margin-top: 40rpx;
	}


}

.bg-top {
	position: absolute;
	// justify-content: center;
	// top: 58%;
	// left: 50%;
	// transform: translate(-50%, -50%);
}

.h-full {
	// height: 100vh;
	// height: 800px;
}
</style>

<template>
	<view class="page" id="page">
		<!-- 0D081A -->
		<z-paging ref="paging" v-model="list" @query="getList" :paging-style="pagingStyle">
			<view class="" slot="top">
				<!-- <NavBarCommon /> -->
				<view :style="{ height: 20 + 'px' }"></view>
				<uni-view class="recharge-header">
					<uni-view class="recharge-header-back" @click="goBack">
						<uni-view class="recharge-header-back-icon">
							<uni-image>
								<div
									style="background-image: url(&quot;/static/image/common/back.png&quot;); background-position: 0% 0%; background-size: 100% 100%;">
								</div>
								<span></span>
								<img src="/static/image/common/back.png" draggable="false">
							</uni-image>
						</uni-view>
						<uni-view class="recharge-header-title">
							<uni-text>
								<span>{{ $t('invitefriends') }}</span>
							</uni-text>
						</uni-view>
					</uni-view>
				</uni-view>

			</view>

			<view style="height: 600rpx;"></view>
			<view class="flex justify-center items-center ">



				<view class="bg bg-top ">
					<!-- avatar -->
					<view class="avatar">
						<image src="/static/image/my/avatar.png" mode="widthFix"
							style="width: 140rpx; height: 140rpx;position: absolute;top: 0;left: 50%;transform: translate(-50%, -50%);" />
					</view>
					<!-- address -->
					<view class="address">
						<text>{{ truncatedAccount(identity)}}</text>
					</view>
					<!-- slogan -->
					<view class="slogan">
						<text>赶快一起来加入我们吧！</text>
					</view>
					<!-- qrcode -->
					<view class="recharge-qrcode ">
						<canvas id="qrcode" canvas-id="qrcode" style="width: 200px;height: 200px;"></canvas>
					</view>
					<!-- logo -->
					<view class="logo">
						<image src="/static/image/my/logo.png" style="width: 150rpx;height: 68rpx;"></image>
					</view>
					<!-- url -->
					<view class="url flex" style="color:#000;  overflow-wrap: break-word;font-size: 12px;justify-content: center;"
						@click="copy">
						<text>{{ share_link }}</text>
						<image src="/static/image/my/copy.png" style="width: 32rpx;height: 32rpx;margin-left: 20rpx;"></image>
					</view>
				</view>




				<view class="flex  " style="justify-content: center;position: absolute;margin-top: 1200rpx;" @click="copy">
					<view style="width: 600rpx;;margin: 0 0.9375rem;
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
				</view>


				<view style="height: 100rpx;width: 10px;"></view>
			</view>


			<template #bottom>
			</template>
		</z-paging>
	</view>
</template>

<script setup>




import UQRCode from 'uqrcodejs'; // npm install uqrcodejs

// import { getCurrentInstance, ref } from 'vue';

import { ref, nextTick, computed, getCurrentInstance } from 'vue'


var statusBarHeightA = uni.getSystemInfoSync().statusBarHeight + "px";



// const instance = getCurrentInstance();


// import html2canvas from 'html2canvas';

// let dom = document.querySelector('#page'); // 获取dom元素
// const query = uni.createSelectorQuery().in(instance.proxy);
// query
//   .select("#page")
//   .boundingClientRect((data) => {
//     console.log("得到布局位置信息" + JSON.stringify(data));
//     console.log("节点离页面顶部的距离为" + data.top);
//   })
//   .exec();
import { onShow } from '@dcloudio/uni-app'


import { useUserInfoStore } from '@/store/modules/userInfoStore.js';
import { useBaseInfoStore } from '@/store/modules/baseInfoStore.js';


const pagingStyle = ref({
	backgroundImage: 'url(/static/image/my/bg.png)',
	backgroundSize: '100% 100%',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'center',
})

const userStore = useUserInfoStore();

const baseStore = useBaseInfoStore()

const share_link = computed(() => userStore.share_link);



const identity = computed(() => userStore.identity);


// const urlLink = ref(share_link.value.split('=')[0])
// console.log(urlLink, 'urlLink');



const truncatedAccount = (value) => {
	if (!value) return
	if (value) {
		// return walletAddress.value.slice(0, 6) + '...' + walletAddress.value.slice(-4);
		return value.slice(0, 6) + '...' + value.slice(-4);
		// return identity.value.slice(0, 6) + '...'
	}
	return t('connectedwallet');
};


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


function saveImage() {



	html2canvas(dom, {
		width: dom.clientWidth, //dom 原始宽度
		height: dom.clientHeight,
		scrollY: 0, // html2canvas默认绘制视图内的页面，需要把scrollY，scrollX设置为0
		scrollX: 0,
		useCORS: true //支持跨域，但好像没什么用
	}).then(canvas => {
		// 将生产的canvas转为base64图片
		let base64 = canvas.toDataURL('image/png');
		// 将base64转换为图片保存
		if (window.navigator.msSaveOrOpenBlob) {
			let bstr = atob(base64.split(',')[1]);
			let n = bstr.length;
			let u8arr = new Uint8Array(n);
			while (n--) {
				u8arr[n] = bstr.charCodeAt(n);
			}
			let blob = new Blob([u8arr]);
			window.navigator.msSaveOrOpenBlob(blob, 'pigeons-download' + '.' + 'png');
		} else {
			// 这里就按照chrome等新版浏览器来处理
			const a = document.createElement('a');
			a.href = base64;
			a.setAttribute('download', 'pigeons-download');
			a.click();
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
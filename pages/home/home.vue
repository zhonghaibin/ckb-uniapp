<style lang="scss" scoped>
.home-top {
	margin-left: 26rpx;
	margin-right: 32rpx;
	display: flex;
	align-items: center;

	// justify-content: space-between;
	.home-logoWrap {
		margin-right: 24rpx;

		.home-logo {
			width: 130rpx;
			height: 130rpx;

		}
	}

	.home-name {
		width: 154rpx;
		height: 40rpx;
		font-family: Source Han Sans CN;
		font-weight: bold;
		font-size: 36rpx;
		color: #FFFFFF;
		// line-height: 64rpx;
		line-height: 36rpx;
		margin-right: 130rpx;
	}

	.home-change {
		width: 256rpx;
		height: 80rpx;
		background: rgba(108, 118, 128, 0);
		border-radius: 40rpx;
		border: 2rpx solid #FFFFFF;
		color: #FFFFFF;
		font-size: 28rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;

		.home-change-text {
			// width: 110rpx;
			height: 26rpx;
			font-family: Source Han Sans CN;
			font-weight: 400;
			font-size: 24rpx;
		}
	}
}

.home-banner {
	margin: 0rpx 30rpx;
	width: 690rpx;
	// height: 300rpx;

	image {
		width: 100%;
		height: 100%;
	}
}

.home-notice {
	display: flex;
	align-items: center;
	margin: 0 30rpx;
	width: 690rpx;
	height: 80rpx;
	background: #110F20;
	border-radius: 12rpx;

	.home-notice-Wrap {
		margin-left: 20rpx;

		.home-notice-title {
			width: 48rpx;
			height: 40rpx;
			margin-right: 12rpx;
		}

		.home-notice-content {
			font-family: Source Han Sans CN;
			font-weight: bold;
			font-size: 30rpx;
			color: #FFFFFF;
			line-height: 64rpx;
		}
	}

}

.home-main {
	margin: 0 30rpx;


	.home-main-title {
		// width: 106rpx;
		// height: 34rpx;
		font-family: Source Han Sans CN;
		font-weight: 600;
		font-size: 36rpx;
		color: #FFFFFF;
		line-height: 64rpx;
	}

	.home-main-content {

		.home-main-content-nav {
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin: 30rpx 0;

			.home-main-content-nav-item {
				font-family: Source Han Sans CN;
				font-weight: 300;
				font-size: 24rpx;
				color: #999999;
				// line-height: 64rpx;
				line-height: 24rpx;
				flex: 1;
			}

			.home-main-content-nav-item:nth-child(1) {
				// width: 168rpx;
			}

			.home-main-content-nav-item:nth-child(2) {
				text-align: left;
				// width: 154rpx;
			}
		}

		.home-main-content-item {
			display: flex;
			align-items: center;
			// justify-content: space-between;

			.home-content-left {
				flex: 1;
				display: flex;
				align-items: center;

				.home-content-left-wrap {
					.home-content-left-title {
						font-family: Source Han Sans CN;
						font-weight: 500;
						font-size: 30rpx;
						color: #FFFFFF;
						line-height: 30rpx;
					}

					.home-content-left-subTitle {
						margin-top: 20rpx;
						font-family: Source Han Sans CN;
						font-weight: 300;
						font-size: 20rpx;
						color: #999999;
						line-height: 30rpx;
					}
				}
			}

			.home-content-middle {
				flex: 1;
				text-align: left;
				// width: 154rpx;
				font-family: Source Han Sans CN;
				font-weight: 500;
				font-size: 30rpx;
				color: #FFFFFF;
				line-height: 64rpx;
			}

			.home-content-right {
				color: #fff;
				flex: 1;
				// height: 40rpx;
				// width: 106rpx;
				// height: 42rpx;

				.chart {
					// width: 100%;
					// height: 100%;
					width: 106rpx;
					height: 42rpx;
					// width: 87px;
					// height: 25px;
					// background-color: $u-error-dark;
					// width: 53px;
					// height: 25px;
				}

				// image {
				// 	width: 106rpx;
				// 	height: 42rpx;
				// }

			}
		}
	}
}
</style>

<template>
	<view class="">

		<z-paging ref="paging" bg-color="#0D081A" v-model="list" @query="getList" :hide-empty-view="true">

			<template #top>
				<view class="">
					<NavBarCommon> </NavBarCommon>
				</view>
			</template>

			<!-- content -->

			<view class="home-top flex ">
				<view class="home-logoWrap">
					<image class="home-logo" src="/static/image/home/logo.png" mode=""></image>
				</view>
				<view class="home-name" style="">
					Hi~,ONE
				</view>
				<view class="home-change flex  items-center">
					<!-- style="margin-left: 20rpx;" -->
					<view class="home-change-text text-center" style="margin-left: 20rpx;" @click="connectWallet">
						{{ truncatedAccount(walletAddress) }}
					</view>
					<!-- <view style="margin-left: 20rpx;margin-right: 20rpx;">|</view> -->
					<view>|</view>
					<view class="home-change-text" v-if="languageStore.language == 'en'" @click="changeLanguage">EN
					</view>
					<view class="home-change-text" v-if="languageStore.language == 'zh_CN'" @click="changeLanguage">CH
					</view>
					<view style="margin-right: 20rpx;" @click="changeLanguage">
						<image src="/static/image/home/right.png" style="width: 18rpx;height: 10rpx;" mode="scaleToFill" />
					</view>

				</view>
			</view>
			<u-gap height="13"></u-gap>
			<!-- search -->
			<view class="home-search " style="margin-left: 30rpx;margin-right: 30rpx;">
				<u-search bg-color="#110F20" placeholder="" height="80rpx" borderColor="#999999" v-model="keyword"
					@search="search" :showAction="false"></u-search>
			</view>
			<u-gap height="10"></u-gap>
			<!-- banner -->
			<view class="home-banner">
				<u-swiper :list="bannerList" height="165"></u-swiper>
			</view>
			<u-gap height="10"></u-gap>
			<!-- 公告 -->
			<view class="home-notice">
				<view class="flex  items-center home-notice-Wrap">
					<view class="home-notice-title">
						<image src="/static/image/home/bell.png" style="width: 48rpx;height: 40rpx;" />
					</view>
					<view class="home-notice-content">
						<text> {{ $t('systemannouncement') }}</text>
						<text style="margin-left: 20rpx;">{{ notice.content }}</text>
					</view>
				</view>
			</view>
			<u-gap height="21"></u-gap>
			<view class="home-main">
				<view class="home-main-title">
					<text>{{ $t('mainstreamcoins') }}</text>
				</view>
				<view class="home-main-content">
					<view class="home-main-content-nav">
						<view class="home-main-content-nav-item">
							<text>{{ $t('name') }}</text>
						</view>
						<view class="home-main-content-nav-item">
							<text>{{ $t('latestprice') }}</text>
						</view>
						<view class="home-main-content-nav-item">
							<text>{{ $t('todaysincrease') }}</text>
						</view>
					</view>
				</view>
			</view>

			<!-- 主流币 -->
			<view class="home-main">
				<view class="home-main-title" v-if="false">
					<text>主流币</text>
				</view>
				<view class="home-main-content">
					<view class="home-main-content-nav" v-if="false">
						<view class="home-main-content-nav-item">
							<text>名称</text>
						</view>
						<view class="home-main-content-nav-item">
							<text>最新价</text>
						</view>
						<view class="home-main-content-nav-item">
							<text>今日涨幅</text>
						</view>
					</view>

					<!-- BTC -->
					<view>
						<view class="home-main-content-item">
							<view class="home-content-left">
								<view class="flex  items-center  justify-between" style="width: 97px;">
									<image class="" src="/static/image/home/btc.png" style="width: 68rpx;height: 68rpx;" />
									<view class="flex flex-column home-content-left-wrap" style="width: 90rpx;">
										<text class="home-content-left-title">BTC</text>
										<text class="home-content-left-subTitle">BTC</text>
									</view>
								</view>
							</view>
							<view class="home-content-middle">
								${{ btcUsdtData.latest }}
							</view>
							<view class="home-content-right">
								{{ btcUsdtData.ratio }}%
							</view>
						</view>
						<u-line class="" color="#181324" style="margin: 30rpx 0rpx;"></u-line>
					</view>
					<!-- ETH -->
					<view>
						<view class="home-main-content-item">
							<view class="home-content-left">
								<view class="flex  items-center  justify-between" style="width: 97px;">
									<image class="" src="/static/image/home/eth.png" style="width: 68rpx;height: 68rpx;" />
									<view class="flex flex-column home-content-left-wrap" style="width: 90rpx;">
										<text class="home-content-left-title">ETH</text>
										<text class="home-content-left-subTitle">ETH</text>
									</view>
								</view>
							</view>
							<view class="home-content-middle">
								${{ ethUsdtData.latest }}
							</view>
							<view class="home-content-right">
								{{ ethUsdtData.ratio }}%
							</view>
						</view>
						<u-line class="" color="#181324" style="margin: 30rpx 0rpx;"></u-line>
					</view>
					<!-- ONE -->
					<view>
						<view class="home-main-content-item">
							<view class="home-content-left">
								<view class="flex  items-center  justify-between" style="width: 97px;">
									<image class="" src="/static/image/Exchange/group.png" style="width: 68rpx;height: 68rpx;" />
									<view class="flex flex-column home-content-left-wrap" style="width: 90rpx;">
										<text class="home-content-left-title">ONE</text>
										<text class="home-content-left-subTitle">ONE</text>
									</view>
								</view>
							</view>
							<view class="home-content-middle">
								${{ oneUsdtData.latest }}
							</view>
							<view class="home-content-right">
								{{ oneUsdtData.ratio }}%
							</view>
						</view>
						<u-line class="" color="#181324" style="margin: 30rpx 0rpx;"></u-line>
					</view>
					<!-- CKB -->
					<view>
						<view class="home-main-content-item">
							<view class="home-content-left">
								<view class="flex  items-center  justify-between" style="width: 97px;">
									<image class="" src="/static/image/home/CKB.jpg" style="width: 78rpx;height: 78rpx;" />
									<view class="flex flex-column home-content-left-wrap" style="width: 90rpx;">
										<text class="home-content-left-title">CKB</text>
										<text class="home-content-left-subTitle">CKB</text>
									</view>
								</view>
							</view>
							<view class="home-content-middle">
								${{ ckBusdtData?.latest || 0 }}
							</view>
							<view class="home-content-right">
								{{ ckBusdtData?.ratio || 0 }}%
							</view>
						</view>
						<u-line class="" color="#181324" style="margin: 30rpx 0rpx;"></u-line>
					</view>
					<!-- BNB -->
					<view>
						<view class="home-main-content-item">
							<view class="home-content-left">
								<view class="flex  items-center  justify-between" style="width: 97px;">
									<image class="" src="/static/image/home/bnb.png" style="width: 68rpx;height: 68rpx;" />
									<view class="flex flex-column home-content-left-wrap" style="width: 90rpx;">
										<text class="home-content-left-title">BNB</text>
										<text class="home-content-left-subTitle">BNB</text>
									</view>
								</view>
							</view>
							<view class="home-content-middle">
								${{ bnbUsdtData.latest }}
							</view>
							<view class="home-content-right">
								{{ bnbUsdtData.ratio }}%
							</view>
						</view>
						<u-line class="" color="#181324" style="margin: 30rpx 0rpx;"></u-line>
					</view>


					<!-- list -->
					<view v-if="false">
						<block v-for="(item, index) in list" :key="index">
							<view class="home-main-content-item">
								<view class="home-content-left">
									<view class="flex  items-center  justify-between" style="width: 97px;">
										<image class="" :src="item.image" style="width: 68rpx;height: 68rpx;" />
										<view class="flex flex-column home-content-left-wrap" style="width: 90rpx;">
											<text class="home-content-left-title">{{ item.name }}</text>
											<text class="home-content-left-subTitle">{{ item.described }}</text>
										</view>
									</view>
								</view>
								<view class="home-content-middle">{{ item.newPrice }}</view>
								<view class="home-content-right">
									<image :src="Math.random() > 0.5 ? '/static/image/home/rise.png' : '/static/image/home/fall.png'" />
								</view>
							</view>
							<u-line class="" color="#181324" style="margin: 30rpx 0rpx;"></u-line>
						</block>
					</view>

				</view>
			</view>

			<!-- <button @click="marketDataShow">marketData </button> -->
			<!-- <button @click="discordSocket">discordSocket </button> -->
		</z-paging>


	</view>
</template>



<script setup>

import * as echarts from "echarts";

import { ref, reactive, computed, watch, nextTick } from 'vue';
import { login, getNotice, getBanner } from '@/api/index.js';

import { onShow, onHide } from '@dcloudio/uni-app'


import { useLanguageStore } from '@/store/modules/languageStore.js'

import { useI18n } from 'vue-i18n'

// 
const { locale, t } = useI18n()
const languageStore = useLanguageStore();







import WebSocketService from '@/utils/websocket.js'
// 

import bs58 from "bs58"
import env from '@/utils/env.js';
import { useUserInfoStore } from '@/store/modules/userInfoStore';
const userStore = useUserInfoStore();

const walletAddress = ref(uni.getStorageSync('walletAddress'));
const currentWallet = ref('');
const keyword = ref('');
const list = ref([]);

// 修改语言
const changeLanguage = () => {
	let val = 'zh_CN'
	uni.showActionSheet({
		itemList: ['Chinese', 'English'],
		cancelText: "Cancel",
		success: function (res) {
			if (res.tapIndex == 0) {
				val = 'zh_CN'
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
			} else if (res.tapIndex == 1) {
				val = 'en'
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
		},
		fail: function (res) {
			console.log(res.errMsg);
		}
	});
}

const discordSocket = () => {
	console.log('closeConnection');
	WebSocketService.closeConnection()
}

// 连接WebSocket并更新数据
function connectWebSocket() {
	const url = env.wsUrl;
	WebSocketService.connectWebSocket(url);
	// WebSocketService.ws.onMessage((res) => {

	// 	initChartETH()
	// 	initChartBTC()
	// 	initChartBNB()
	// 	initChartONE()
	// 	initChartCKB()
	// })
}


onHide(() => {
	console.log('onHide page');
	WebSocketService.closeConnection()
})





// 公告
const notice = reactive({
	id: 0,
	title: '',
	content: '',
	status: 0,
	created_at: '',
	updated_at: ''
});
// 轮播图
const bannerList = ref([]);

// 截取钱包地址

const truncatedAccount = () => {
	if (walletAddress.value) {
		// return walletAddress.value.slice(0, 6) + '...' + walletAddress.value.slice(-4);
		return walletAddress.value.slice(0, 6) + '...'
	}
	return t('connectedwallet');
};

// 截取公告
const handleNotice = (notice) => {
	return notice.replace(/<[^>]*>?/g, '');
};
// 获取公告
const getNoticeData = async () => {
	const re = await getNotice();
	const re2 = await getBanner();
	// console.log(re, "re getNoticegetNotice");
	// notice.content = handleNotice(re.data.title);
	notice.content = re.data.title;
	console.log(notice.content, "notice.content");
	bannerList.value = re2.data.map((i) => env.staticURL + i.image);
};



// 检查钱包
const checkWallet = (walletName) => {
	switch (walletName) {
		case 'phantom':
			return window?.solana?.isPhantom;
		case 'solflare':
			return window?.solflare;
		case 'sollet':
			return window?.sollet;
		default:
			return false;
	}
};
// 连接钱包
const connectWallet = async () => {
	console.log('链接钱包');
	if (!window.solana || !checkWallet('phantom')) {
		alert('请使用 Solana 钱包连接');
		return;
	}
	try {
		const resp = await window.solana.connect();
		walletAddress.value = resp.publicKey.toString();
		currentWallet.value = 'phantom';
		console.log('连接成功:', resp.publicKey.toString());
		await handleSignMessage();
	} catch (err) {
		console.error('连接失败:', err);
		alert('连接失败');
	}
};

const signatureData = ref('')
const nonce = ref(Date.now().toString())

const handleSignMessage = async () => {
	if (!walletAddress.value) {
		alert('请先连接钱包');
		return;
	}
	try {
		nonce.value = Date.now().toString()
		const encodedMessage = new TextEncoder().encode(nonce.value);
		const {
			signature
		} = await window.solana.signMessage(encodedMessage, "utf8");

		// 4. 转换为 Base58 便于传输
		const signatureBase58 = bs58.encode(signature);
		signatureData.value = signatureBase58
		console.log(signatureData.value, "v");

		if (signatureData.value) {
			await loginApi();
		} else {
			console.log('签名不存在');

		}
	} catch (err) {
		console.error('签名失败:', err);
	}
};
// 登录
const loginApi = async () => {
	const re = await login(
		{
			publicKey: walletAddress.value,
			code: uni.getStorageSync('lastCode'),
			signature: signatureData.value,
			nonce: nonce.value
		});
	if (re.code === 200) {
		userStore.getUserInfo();
		// 保存钱包地址
		uni.setStorageSync('walletAddress', walletAddress.value);
		uni.setStorageSync('token', re.data.token);
		uni.showToast({
			title: 'login success',
			icon: 'success'
		});
	}
};



// 搜索
const search = (value) => {
	console.log(value);
	keyword.value = '';
	// getList();
};



const bnbUsdtData = computed(() => {
	return WebSocketService.marketData.value['bnbusdt']
});
const ethUsdtData = computed(() => {
	return WebSocketService.marketData.value['ethusdt']
});
const btcUsdtData = computed(() => {
	return WebSocketService.marketData.value['btcusdt']
});
const oneUsdtData = computed(() => {
	return WebSocketService.marketData.value['oneusdt']
});
const ckBusdtData = computed(() => {
	return WebSocketService.marketData.value['ckbusdt']
});




const chartETH = ref(null);
const chartBTC = ref(null);
const chartBNB = ref(null);
const chartONE = ref(null);
const chartCKB = ref(null);


// // eth
// watch(ethUsdtData, (newData) => {
// 	if (chartETH.value) {
// 		chartETH.value.setOption({
// 			series: [{ data: newData }]
// 		});
// 	} else {
// 		initChartETH();
// 	}
// });
// // btc
// watch(btcUsdtData, (newData) => {
// 	if (chartBTC.value) {
// 		chartBTC.value.setOption({
// 			series: [{ data: newData }]
// 		});
// 	} else {
// 		initChartBTC();
// 	}
// });
// // bnb
// watch(bnbUsdtData, (newData) => {
// 	if (chartBNB.value) {
// 		chartBNB.value.setOption({
// 			series: [{ data: newData }]
// 		});
// 	} else {
// 		initChartBNB();
// 	}
// });
// // ONE 图表
// watch(oneUsdtData, (newData) => {
// 	if (chartONE.value) {
// 		// console.log("📈 更新 ONE 图表");
// 		chartONE.value.setOption({
// 			series: [{ data: newData }]
// 		});
// 	} else {
// 		initChartONE();
// 	}
// });

// // CKB 图表
// watch(ckBusdtData, (newData) => {
// 	if (chartCKB.value) {
// 		chartCKB.value.setOption({
// 			series: [{ data: newData }]
// 		});
// 	} else {
// 		initChartCKB();
// 	}
// });




// eth
function initChartETH() {
	const chartDom = document.getElementById("klineChartETH");
	if (!chartDom) return;
	if (!chartETH.value) {
		chartETH.value = echarts.init(chartDom);
	}
	chartETH.value.setOption(getChartOption(oneUsdtData.value, "#6ACFBB"));
}
// btc
function initChartBTC() {
	const chartDom = document.getElementById("klineChartBTC");
	if (!chartDom) return;
	if (!chartBTC.value) {
		chartBTC.value = echarts.init(chartDom);
	}
	chartBTC.value.setOption(getChartOption(ckBusdtData.value, "#ff0000"));
}
// bnb
function initChartBNB() {
	const chartDom = document.getElementById("klineChartBNB");
	if (!chartDom) return;
	if (!chartBNB.value) {
		chartBNB.value = echarts.init(chartDom);
	}
	chartBNB.value.setOption(getChartOption(oneUsdtData.value, "#ff0000"));
}
// one
function initChartONE() {
	const chartDom = document.getElementById("klineChartONE");
	if (!chartDom) return;
	if (!chartONE.value) {
		chartONE.value = echarts.init(chartDom);
	}
	chartONE.value.setOption(getChartOption(oneUsdtData.value, "#ff0000"));
}
// ckb
function initChartCKB() {
	const chartDom = document.getElementById("klineChartCKB");
	if (!chartDom) return;
	if (!chartCKB.value) {
		chartCKB.value = echarts.init(chartDom);
	}
	chartCKB.value.setOption(getChartOption(oneUsdtData.value, "#6ACFBB"));
}




// 提取通用配置方法
function getChartOption(data, color) {
	return {
		xAxis: { show: false, type: "category" },
		yAxis: {
			show: false,
			type: "value",
		},
		grid: { left: "0%", right: "0%", top: "0%", bottom: "0%" },
		dataZoom: [
			{ type: "inside", start: 0, end: 100 }, // ✅ 让所有数据可见
			{ show: false, type: "slider", bottom: 10 }
		],
		series: [
			{
				type: "candlestick",
				data: data,
				itemStyle: {
					color: color,
					color0: color,
					borderColor: color,
					borderColor0: color
				}
			}
		]
	};
}



const paging = ref(null)
// sokcet
const getList = async () => {
	console.log('getList');
	connectWebSocket()
	await nextTick()
	paging.value.complete([]);
	return
};




onShow(() => {
	
	walletAddress.value =  uni.getStorageSync('walletAddress')
	getList();
	getNoticeData();
});
</script>
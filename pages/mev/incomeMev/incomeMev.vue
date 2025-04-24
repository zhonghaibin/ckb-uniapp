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
				flex: 1;
				text-align: center;
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
			// padding: 0 30rpx;
			padding: 0 20rpx;

			text {
				font-family: Source Han Sans CN;
				font-weight: 300;
				font-size: 30rpx;
				color: #FFFFFF;
				line-height: 64rpx;
			}

			.recharge-list-item-content-left {
				text-align: center;
				flex: 1;
				height: 100rpx;
				line-height: 100rpx;
				font-size: 12px;
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


	.tab {
	margin: 0 30rpx;
}

	
</style>



<template>
	<view class="">
		<z-paging ref="paging" v-model="withdrawalList" bg-color="#0D081A" @query="getWithdrawalList">
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
							<text>{{ $t('incomerecord') }}</text>
						</view>
					</view>
				</view>
				<u-gap height="14"></u-gap>


								<!-- search -->
								<view class="search" style="margin-left: 30rpx;margin-right: 30rpx;">
					<u-search bg-color="#110F20" placeholder="hash" height="80rpx" borderColor="#999999" v-model="transaction_hash"
						@search="search" :showAction="false"></u-search>
				</view>
				<!-- tab -->
				<u-gap height="10"></u-gap>
				<view class="tab">
					<u-tabs :list="list1" @change="change" lineWidth="30" lineColor="#fff" :activeStyle="{
						color: '#fff',
						fontWeight: 'bold',
						transform: 'scale(1.05)',
						maginTop: '20px'
					}" :inactiveStyle="{
						color: '#fff',
						transform: 'scale(1)'
					}" itemStyle="padding-left: 15px; padding-right: 15px; height: 34px;"></u-tabs>

				</view>
				<u-gap height="20"></u-gap>

				<!-- list -->
				<view class="recharge-list-wrapper">
					<view class="recharge-list-item-nav">
						<view class="recharge-list-item-nav-left1" style="text-align: left;    font-family: Source Han Sans CN;
    font-weight: 300;
    font-size: 0.75rem;
    color: #999999;
    line-height: 2rem;">
							{{ $t('currency') }}
						</view>
						<view class="recharge-list-item-nav-left">
							<text>{{ $t('hash') }}</text>
						</view>
						<view class="recharge-list-item-nav-left">
							<text>{{ $t('money') }}</text>
						</view>
						<view class="recharge-list-item-nav-left">
							<text>{{ $t('rateL') }}</text>
						</view>
						<view class="recharge-list-item-nav-left">
							<text>{{ $t('createtime') }}</text>
						</view>
					</view>
					<!-- v-if="withdrawalList.length > 0" -->
					<view>
						<view class="recharge-list-item-content" v-for="(item, index) in withdrawalList" :key="index">
							<view class="recharge-list-item-content-left1" style="color:#fff">
								usdt
							</view>
							<view class="recharge-list-item-content-left" @click="openShow(item)">
								<text>{{ shortenHex(item.transaction_hash) || 'Ox...v7dk' }} </text>
							</view>
							<view class="recharge-list-item-content-left" @click="goDetail(item)">
								<text class="">{{ Number(item.amount).toFixed(4) || 0.0309 }}</text>
							</view>
							<view class="recharge-list-item-content-left" @click="goDetail(item)">
								<text class="">{{ Number(item.rate).toFixed(3) || '0.012% ' }}</text>
							</view>
							<view class="recharge-list-item-content-left2 text-center flex flex-column"
								style="color: #fff;font-size: 12px;" @click="goDetail(item)">
								<view>{{timeFomate(item.datetime).dateString}}</view>
								<view>{{timeFomate(item.datetime).timeString}}</view>
							</view>
						</view>
					</view>


					<!-- 复制 -->
					<u-modal title="哈希" :show="show8"  @close="close"    :closeOnClickOverlay='true' :showCancelButton='false' :showConfirmButton='false'>
						<view class="flex flex-column">
							<view class="text-center">
								{{halfCon.half1}}
								{{halfCon.half2}}
							</view>
							<u-gap></u-gap>
							<u-button slot="confirmButton" text="复制" type="info" shape="circle"
							 color="linear-gradient(to right, rgb(66, 83, 216), rgb(213, 51, 186))"
								@click="copyFn"></u-button>
						</view>
					
					</u-modal>
					
				</view>


			</view>
		</z-paging>
	</view>
</template>

<script setup>
	import {
		ref,
		computed
	} from 'vue';
	import {
		useBaseInfoStore
	} from '@/store/modules/baseInfoStore';
	import {
		useUserInfoStore
	} from '@/store/modules/userInfoStore';
	import {
		transactiontransactionLogDetails,
		withdrawApi
	} from '@/api/index.js';

	import {
		onLoad,
		onShow
	} from '@dcloudio/uni-app'
	
	const show8 = ref(false)
	const content = ref('')
	
	
	import { useI18n } from 'vue-i18n'
	
	
	const { locale, t } = useI18n()
	
	// 定义计算属性
	const halfCon = computed(() => {
		let half1 =   content.value.slice(0, content.value.length / 2);
		let half2  =  content.value.slice(content.value.length / 2);
		half2 =  half2.slice(2);
		// console.log(content.value,"content.value");
		// console.log("第一半: " + half1);
		// console.log("第二半: " + half2);
	  return {
		  half1,
		  half2
	  }
	})
	const close = ()=>{
		show8.value =!show8.value
	}
	
	const copyFn = ()=>{
		show8.value = false
		uni.setClipboardData({
			data: content.value,
			success: function () {
				console.log('success');
				uni.showToast({
					title: t('copySuccess'),
					icon: 'none'
				})
			}
		});
	}


	const openShow = (item) => {
		content.value = item.transaction_hash
		show8.value =!show8.value
	}



	function timeFomate(timestamp) {
		// console.log(timestamp,'timestamp');
		// 将时间戳转换为 Date 对象
		let date = new Date(timestamp * 1000); // 乘以1000是因为JavaScript的Date对象使用毫秒为单位
		// 获取日期部分 (YYYY-MM-DD)
		let dateString = date.toISOString().split('T')[0];
		// 获取时间部分 (HH:mm:ss)
		let timeString = date.toISOString().split('T')[1].split('.')[0];
		return {
			dateString,
			timeString
		}
	}


	function shortenHex(hex) {
		// 保留前1个字符和后3个字符，中间用省略号代替
		return hex.slice(0, 3) + '...' + hex.slice(-3);
	}



	
	onLoad((options) => {
		if (options.id) {
			transaction_id.value = options.id
			// console.log(transaction_id.value, "transaction_id.value ");
		}
	})
	onShow(() => {
		transaction_hash.value = ''
	})


	const goDetail = (obj) => {
		uni.navigateTo({
			url: `/pages/mev/incomeMevDetail/incomeMevDetail?data=${JSON.stringify(obj)}`,
		})
	}

	const transaction_hash = ref('')

	const getWithdrawalList = (pageNo, pageSize) => {
		transactiontransactionLogDetails({transaction_id:transaction_id.value,tab:tab.value,transaction_hash:transaction_hash.value}).then((res) => {
			// console.log(res.data.data, "res.data.data");
			if (res.data) {
				paging.value.complete(res.data.data);
			}
		});
	};



	const baseInfoStore = useBaseInfoStore();
	const userInfoStore = useUserInfoStore();

	const searchValue = ref('');
	const fee = ref(0);
	const withdrawalList = ref([]);





	const list1 = ref([
	{
		name: '运行中',
	}, {
		name: '已完成',
	},
])




const search = (e) => {
	console.log('e',e);
	transaction_hash.value = e
	getWithdrawalList()
}

const transaction_id = ref('')
const tab = ref('1')


const change = async (e) => {
	// console.log('e', e);
	/* 1 进行中 2已完成 */
	if (e.index == 1) {
		tab.value = '2'

		await getWithdrawalList()
	} else if (e.index == 0) {
		tab.value = '1'
		await getWithdrawalList()
	}
}






	const paging = ref(null)
	const goBack = () => {
		uni.navigateBack();
	};
</script>
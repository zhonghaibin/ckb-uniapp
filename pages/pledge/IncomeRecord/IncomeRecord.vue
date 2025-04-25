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





.tab {
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
		// padding: 0 30rpx;

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
		// padding: 0 20rpx;

		// text {
		// 	font-family: Source Han Sans CN;
		// 	font-weight: 300;
		// 	font-size: 30rpx;
		// 	color: #FFFFFF;
		// 	line-height: 64rpx;
		// }

		.recharge-list-item-content-left {
			text-align: center;
			flex: 1;
			height: 100rpx;
			line-height: 100rpx;
			font-size: 12px;

			text {
				font-family: Source Han Sans CN;
				font-weight: 300;
				font-size: 30rpx;
				color: #FFFFFF;
				line-height: 64rpx;
			}
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
		<!-- 0D081A -->
		<z-paging ref="paging" v-model="list" bg-color="#0D081A" @query="transactionListApi">
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
							<text>{{ $t('revenuerecords') }}</text>
						</view>
					</view>
				</view>
				<u-gap height="13"></u-gap>
				<!-- search -->
				<view class="search" style="margin-left: 30rpx;margin-right: 30rpx;">
					<u-search bg-color="#110F20" placeholder="" height="80rpx" borderColor="#999999" v-model="transaction_id"
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
				<view class="recharge-list-wrapper">
					<view class="recharge-list-item-nav">
						<view class="recharge-list-item-nav-left">
							<text> {{ $t('currency') }}</text>
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
						<view class="recharge-list-item-content" v-for="(item, index) in list" :key="index">
							<view class="recharge-list-item-content-left" style="color:#fff">
								{{ item.coin }}
							</view>
							<view class="recharge-list-item-content-left">
								<text class="">{{ item.bonus }}</text>
							</view>
							<view class="recharge-list-item-content-left">
								<text class="">{{ Number(item.rate).toFixed(3) || '0.012% ' }}</text>
							</view>

							<view class="  flex flex-column" style="color: #fff;text-align: center;
			flex: 1;
			line-height: 30rpx;
			font-size: 12px;">
								<text>{{ timeFomate(item.datetime).dateString }}</text>
								<text>{{ timeFomate(item.datetime).timeString }}</text>
							</view>
						</view>
					</view>





				</view>

				<!-- 
				  			"id": 20,
                "coin": "ONE",
                "bonus": 1.290323,
                "rate": 0.08,
                "datetime": 1742786247,
                "created_at": "2025-03-24 11:17:27"
				-->

			</view>
			<template #bottom>

			</template>
		</z-paging>
	</view>
</template>

<script setup>

import { ref, nextTick, computed } from 'vue'
import { onShow } from '@dcloudio/uni-app'


import { useUserInfoStore } from '@/store/modules/userInfoStore.js';
import { useBaseInfoStore } from '@/store/modules/baseInfoStore.js';


const userStore = useUserInfoStore();

const baseStore = useBaseInfoStore()

import { transactionLogList } from '@/api/index.js'




const list1 = ref([
	{
		name: '运行中',
	}, {
		name: '已完成',
	},
])




const search = () => {
	console.log('e');

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

onShow(() => {

})
const list = ref([])

import { useI18n } from 'vue-i18n'


const { locale, t } = useI18n()


const paging = ref(null)

const transaction_id = ref('')
const tab = ref('1')


const change = async (e) => {
	// console.log('e', e);
	/* 1 进行中 2已完成 */
	if (e.index == 1) {
		tab.value = '2'

		await transactionListApi()
	} else if (e.index == 0) {
		tab.value = '1'
		await transactionListApi()
	}
}

const transactionListApi = (pageNo = 1, pageSize) => {
	transactionLogList({
		page: pageNo,
		transactionType: '2',
		tab: tab.value,
		transaction_id: transaction_id.value
	}).then(async res => {
		console.log('1312');

		console.log(res, 'resss')
		if (res.code == 200) {
			await userStore.getUserInfo();
			// pledgeList.value = res.data.data
			// paging.value.complete([]);
			paging.value.complete(res.data.data);
			// paging.value.complete(pledgeList.value);
		}
	})
}



function goBack() {
	uni.navigateBack()
}

const getList = () => {
	console.log('getList');

}





</script>
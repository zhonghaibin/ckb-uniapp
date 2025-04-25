<template>
	<view>
		<!-- bg-color="#0D081A" -->
		<z-paging ref="paging" bg-color="#0D081A">

			<view class="" slot="top">
				<NavBarCommon />
				<view class="recharge-header">
					<view class="recharge-header-back">
						<view class="recharge-header-back-icon" @click="goBack">
							<image src="/static/image/common/back.png" />
						</view>
						<view class="recharge-header-title">
							<text>{{ $t('incomerecorddetail') }}</text>
						</view>
					</view>
				</view>
				<u-gap></u-gap>
			</view>
			<view class=" ">
				<!--  bgColor="#0D081A" -->
				<u-cell-group :border="false" bgColor="#0D081A">
					<!-- 					<u-cell value="内容12312" label='label1' title="title2">
						<text class="" slot="title">
							title
						</text>
						
						<text class="" slot="value">
							value
						</text>
						<text class="" slot="label">
							label
						</text>
				    </u-cell> -->

					<u-cell size="large" :title="$t('transactionhash')" :label="model.transaction_hash"></u-cell>

					<u-cell size="large" :title="$t('createtime')" :label="model.created_at"></u-cell>
					<u-cell size="large" :title="$t('fromcontracts')" :label="model.from_contract_hash"></u-cell>


					<u-cell size="large" :title="`${model.chain}链`"></u-cell>
					<u-cell size="large" :title="$t('tokensymbol')" :label="model.symbol"></u-cell>

					<u-cell size="large" :title="$t('tokencontract')" :label="model.contract"></u-cell>
					<u-cell size="large" :title="$t('rate')" :label="model.rate"></u-cell>
				</u-cell-group>

			</view>



		</z-paging>



	</view>
</template>

<script>
export default {
	methods: {
		goBack() {
			uni.navigateBack();
		}
	},
	data() {
		return {
			model: {}
		};
	},
	onLoad(options) {
		if (options.data) {
			this.model = JSON.parse(options.data)
		}
	}
}
</script>

<style scoped lang="scss">
::v-deep .u-cell-group {
	background-color: #0D081A;
	color: #fff;
}


::v-deep .u-cell__title-text {
	color: #fff;
}

::v-deep .u-cell__value {
	color: #fff;
}


::v-deep .u-cell__label {
	font-size: 12px;
	// width: 360px;             /* 设置固定宽度 */
	// width: 340px;
	width: 300px;
	/* 设置固定宽度 */
	white-space: nowrap;
	/* 不换行 */
	overflow: hidden;
	/* 超出部分隐藏 */
	text-overflow: ellipsis;
	/* 显示省略号 */
}




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
</style>

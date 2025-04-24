<template>
	<view>
		<!--  -->


		<z-paging ref="paging" bgColor="#130F1A" @query="getList" :hide-empty-view="true">


			<!--  -->
			<view class="w-ful h-full flex justify-center items-center">
				<view class="bg-greeey text-white flex flex-col items-center rounded-lg " style="width: 650rpx;">
					<u-gap></u-gap>
					<view class="text-4xl">
						CKB
					</view>
					<u-gap></u-gap>
					<view class="text-lg">
						请选择登录方式
					</view>
					<u-gap></u-gap>
					<view @click="connectWallet" class=" rounded-lg flex p-2 items-center mx-2 bg-[#282A36]"
						style="width: 500rpx;">
						<view class="" style="margin-right: 10rpx;">
							<u-icon name="red-packet" color="#F6F6F4" size="20"></u-icon>
						</view>
						<view class="">
							钱包登录
						</view>
					</view>
					<u-gap></u-gap>
				</view>
			</view>



		</z-paging>


		<!--  -->
	</view>
</template>

<script setup>


import { ref, reactive, computed, watch, nextTick } from 'vue';
import { login, getNotice, getBanner } from '@/api/index.js';

import { useUserInfoStore } from '@/store/modules/userInfoStore';
const userStore = useUserInfoStore();


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

	walletAddress.value = uni.getStorageSync('walletAddress')
	currentWallet.value = 'phantom';
	await handleSignMessage();
};

/*  */
const signatureData = ref('')
const walletAddress = ref('')
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
		uni.navigateTo({
			url: '/pages/home/home',
		})
	}
};



const loginHandle = () => {
	console.log('loginHandle');
}

const getList = () => {
	console.log('getList');
}

</script>

<style lang="scss" scoped>
.bg-greeey {
	background-color: #24262B;
}

.text-white {
	color: #fff;
}

.flex-col {
	flex-direction: column;
}

.w-full {
	width: 100vw;
}

.h-full {
	height: 100vh;
}

.center {
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>

<template>
	<view>
		<web-view :src='src'></web-view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			src: 'https://www.baidu.com/'
			// src: 'https://www.ycombinator.com/'
		};
	},
	onLoad(options) {
		console.log(options, "options");
		this.src = options.url
	}
}
</script>

<style lang="scss" scoped>
.box {
	width: 200rpx;
}
</style>

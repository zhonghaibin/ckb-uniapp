<template>
	<view>
		<!-- #ifdef APP -->
		<view :style="{ height: statusBarHeight, backgroundColor: bgColor }" class="uni-status-bar"> </view>
		<!-- #endif -->
		<view style="height: 20px;background-color: #0D081A;"></view>

	</view>
</template>

<script>
var statusBarHeight = uni.getSystemInfoSync().statusBarHeight + "px";
export default {
	name: "NavBarCommon",
	data() {
		return {
			statusBarHeight: statusBarHeight,
			bgColor: "#0D081A"
		};
	}
}
</script>

<style></style>
<template>
	<view>
		<a  @click="login">Open TokenPocket to authorize1</a><br/>
	</view>

</template>


<script>
	function openTokenPocketForSolana(callbackUrl,actionId) {
	    const param = {
	        callbackUrl: callbackUrl, // 你的回调地址
	        action: "login",
	        actionId: Date.now().toString(), // 生成唯一 actionId
	        blockchains: [
				{
						"chainId": "1",
						"network": "ethereum"
				}
	        ],
	        dappIcon: "https://your-dapp-icon-url.com/icon.png", // DApp 图标
	        dappName: "MySolanaDApp",
	        protocol: "TokenPocket",
	        version: "2.0"
	    };
		console.log(param,"param");
	    // 对参数进行编码
	    const encodedParam = encodeURIComponent(JSON.stringify(param));
	
	    // 生成 TokenPocket 拉起链接
		
	    const link = `tpoutside://pull.activity?param=${encodedParam}`;
	
	    // 跳转到 TokenPocket
	    window.location.href = link;
	}
	
	
	
	export default {
		methods: {
			login() {
				console.log('login');
				const callbackUrl = 'http://127.0.0.1:8888/testLogin'; // 你的回调 URL
				const actionId = '1648522106711'; // 你的唯一操作 ID
				openTokenPocketForSolana(callbackUrl, actionId);
			}
		},
		data() {
			return {

			}
		}
	}
</script>
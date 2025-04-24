<template>
	<view>
		
		
		3333444
<!--  -->
		<a  @click="login">Open TokenPocket to authorize</a><br/>

<!-- 		<a
			href="tpoutside://pull.activity?param=%7B%22callbackUrl%22%3A%22http%3A%2F%2F115.205.0.178%3A9011%2FtaaBizApi%2FtaaInitData%22%2C%22action%22%3A%22login%22%2C%22actionId%22%3A%221648522106711%22%2C%22blockchains%22%3A%5B%7B%22chainId%22%3A%221%22%2C%22network%22%3A%22ethereum%22%7D%5D%2C%22dappIcon%22%3A%22https%3A%2F%2Feosknights.io%2Fimg%2Ficon.png%22%2C%22dappName%22%3A%22zs%22%2C%22protocol%22%3A%22TokenPocket%22%2C%22version%22%3A%222.0%22%7D">
			Open TokenPocket to authorize
		</a> -->
		23432

	</view>

</template>


<script>
	function openTokenPocketForSolana(callbackUrl,actionId) {
	    const param = {
	        callbackUrl: callbackUrl, // 你的回调地址
	        action: "login",
	        actionId: Date.now().toString(), // 生成唯一 actionId
	        blockchains: [
	            // {
	            //     chainId: "101",
	            //     network: "solana"
	            // }
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
				// let param = ''
				// let url = `tpoutside://pull.activity?param={}`
				const callbackUrl = 'http://115.205.0.178:9011/taaBizApi/taaInitData'; // 你的回调 URL
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
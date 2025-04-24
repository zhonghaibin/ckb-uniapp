<template>
	<view>
		<a
			href="tpoutside://pull.activity?param=%7B%22callbackUrl%22%3A%22http%3A%2F%2F115.205.0.178%3A9011%2FtaaBizApi%2FtaaInitData%22%2C%22action%22%3A%22login%22%2C%22actionId%22%3A%221648522106711%22%2C%22blockchains%22%3A%5B%7B%22chainId%22%3A%221%22%2C%22network%22%3A%22ethereum%22%7D%5D%2C%22dappIcon%22%3A%22https%3A%2F%2Feosknights.io%2Fimg%2Ficon.png%22%2C%22dappName%22%3A%22zs%22%2C%22protocol%22%3A%22TokenPocket%22%2C%22version%22%3A%222.0%22%7D">
			Open TokenPocket to authorize 123223423 1231
		</a>



<button @click="sendSolanaTransaction()">发送 SOL 交易</button>
	</view>

</template>


<script >
	async function pushSolanaTransaction(signedTx) {
		console.log('12312');
	    const param = {
	        txData: signedTx, // Solana 交易签名（Base58 编码）
	        action: "pushTransaction",
	        actionId: Date.now().toString(),
	        blockchains: [
	            {
	                chainId: "101",
	                network: "solana"
	            }
	        ],
	        callbackUrl: "https://your-callback-url.com",
	        dappIcon: "https://your-dapp-icon-url.com/icon.png",
	        dappName: "MySolanaDApp",
	        protocol: "TokenPocket",
	        version: "2.0"
	    };
	
	    const encodedParam = encodeURIComponent(JSON.stringify(param));
	    window.location.href = `tpoutside://pull.activity?param=${encodedParam}`;
	}
	

	
	export default {
		methods: {
			
			// 示例：创建并推送 Solana 交易
			async  sendSolanaTransaction() {
			    const connection = new solanaWeb3.Connection(solanaWeb3.clusterApiUrl("mainnet-beta"));
			    const from = solanaWeb3.Keypair.fromSecretKey(new Uint8Array([/* 你的私钥 */]));
			    const to = new solanaWeb3.PublicKey("9kv674FLHaJKUhPFoNu2ohp39btxNPZLKLdMan7PU2zg");
			
			    const transaction = new solanaWeb3.Transaction().add(
			        solanaWeb3.SystemProgram.transfer({
			            fromPubkey: from.publicKey,
			            toPubkey: to,
			            lamports: solanaWeb3.LAMPORTS_PER_SOL * 0.001 // 0.001 SOL
			        })
			    );
			
			    transaction.recentBlockhash = (await connection.getRecentBlockhash()).blockhash;
			    transaction.sign(from);
			
			    const signedTx = transaction.serialize().toString("base64");
			
			    pushSolanaTransaction(signedTx);
			}
		},
		data() {
			return {

			}
		}
	}
</script>
<template>
	<view>
		<view class="recommendation-revenue-title">






		</view>
	</view>

</template>


<script>
import {
	Keypair
} from "@solana/web3.js";
import bs58 from "bs58"
import nacl from "tweetnacl";

export default {
	methods: {
		
	},
	data() {
		return {
			wallet: null
		}
	},
	async onShow() {
		const fromAddress = new web3.PublicKey(from)
const toAddress = new web3.PublicKey(to)
const usdcMintAddress = new web3.PublicKey('Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB')
// console.log(splToken)
/* 
console.log("1sendAndConfirmTransaction")
await web3.sendAndConfirmTransaction(connection, transaction, [payer]);

console.log("2sendAndConfirmTransaction")

 // Alternatively, manually construct the transaction

 manualTransaction.add(
   web3.SystemProgram.transfer({
     fromPubkey: payer.publicKey,
     toPubkey: toAccount.publicKey,
     lamports: 1000,
   }),
 );
   
 let transactionBuffer = manualTransaction.serializeMessage();
 let signature = nacl.sign.detached(transactionBuffer, payer.secretKey);
  
 manualTransaction.addSignature(payer.publicKey, signature);
  
 let isVerifiedSignature = manualTransaction.verifySignatures();
 console.log(`The signatures were verified: ${isVerifiedSignature}`);
  
 // The signatures were verified: true
  
 let rawTransaction = manualTransaction.serialize();

 await web3.sendAndConfirmRawTransaction(connection, rawTransaction); */


// window.solana && window.solana.connect().then(res => {
// 	console.log(window.solana.publicKey.toBase58())
// });

// api.devnet.solana.com
let connection = new web3.Connection(web3.clusterApiUrl("devnet"), "confirmed");

// const tokenAccounts = await connection.getTokenAccountsByOwner(
// 	new web3.PublicKey('8YLKoCu7NwqHNS8GzuvA2ibsvLrsg22YMfMDafxh1B15'), {
// 		programId: splToken.TOKEN_PROGRAM_ID,
// 	}
// );
// let airdropSignature = await connection.requestAirdrop(
// 	new web3.PublicKey(from),
// 	web3.LAMPORTS_PER_SOL,
// );

let transaction = new web3.Transaction();

transaction.add(
	splToken.Token.createTransferInstruction(
		splToken.TOKEN_PROGRAM_ID,
		usdcMintAddress,
		toAddress,
		fromAddress,
		[],
		amount
	)
);

// 发送交易

let recentBlockhash = await connection.getLatestBlockhash();
transaction.recentBlockhash = recentBlockhash.blockhash
transaction.feePayer = fromAddress
// const signature = await web3.sendAndConfirmTransaction(connection, transaction);
const signedTransaction = await window.solana.signTransaction(transaction, connection);
console.log(signedTransaction)
// const signature = await connection.sendRawTransaction(signedTransaction.serialize());
// console.log(2)
// // var msg = "签名啦!， To avoid digital dognappers, sign below to authenticate with CryptoCorgis"
// var encodedMessage = new TextEncoder().encode(signature);
// var signedMsg = await window.solana.signMessage(encodedMessage);
	}
}
</script>
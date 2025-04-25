<script setup>
import { useBaseInfoStore } from '@/store/modules/baseInfoStore';
// import { Buffer } from 'buffer'
// console.log(Buffer,'Buffer');
// window.Buffer = window.Buffer
// window.buffer = window.Buffer
import { onLaunch, onShow } from '@dcloudio/uni-app'
import { watch } from 'vue'
onLaunch(() => {
  console.log('onLaunch ')
  // uni.clearStorageSync();
})
onShow(async () => {
  useBaseInfoStore().getBaseInfo()
  console.log('onShow1',window.solana)
  
  // if(window.solana.isConnected == false && window.solana.publicKey == null){
	//   console.log('未连接 请登录')
	//   uni.navigateTo({
	//   	url:'/pages/login/login'
	//   })
  // }
  
  
  // 切换账号逻辑
  // if(window.solana.isConnected == false && window.solana.publicKey == null ){
	//   console.log('未连接 请登录')
	//   uni.navigateTo({
	//     url: '/pages/login/login',
	//   })
  // }
  console.log(window.solana, 'window.solana');
  console.log(window.solana.isConnected, 'isConnected');
  console.log(window.solana.publicKey, 'publicKey');
  // return

  // // let walletAddress = ' '
  // const resp = await window.solana.connect();

  // uni.setStorageSync('walletAddress', '')
  // /* 已经登录 */
  // if (resp.publicKey.toString() == uni.getStorageSync('walletAddress')) {
  //   console.log('已经登录了');
  //   return;
  // }

  // /* 切换了地址 */
  // uni.setStorageSync('walletAddress', resp.publicKey.toString())
  // console.log('切换了地址');
  // /*  */
  // setTimeout(() => {
  //   /* login */
  //   uni.navigateTo({
  //     url: '/pages/login/login',
  //   })
  // }, 1000);


})



watch(() => window.location.href, async (newVal) => {
  const hash = window.location.hash;  // 获取 URL 中的哈希部分
  const match = hash.match(/[\?&]code=([^&?]+)/);  // 正则表达式匹配 'code' 参数
  if (match) {
    const code = decodeURIComponent(match[1]);  // 解析 URL 编码的字符串
    // 如果 code 中包含 '=', 提取 '=' 前面的部分
    const lastCode = code.split('=')[0] || '';  // 获取 '=' 前的部分，若没有则默认为 ''
    console.log(lastCode, 'lastCode');
    if (lastCode) {
      // 存储到本地缓存
      uni.setStorageSync('lastCode', lastCode);
    }
  } else {
    console.log("code 参数未找到");  // 如果 URL 中没有 'code' 参数
  }
}, { immediate: true });


</script>

<style lang="scss">
/*每个页面公共css */
@import "@/uni_modules/uview-plus/index.scss";
//
@import "uni_modules/ucs-css";
</style>

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
  uni.clearStorageSync();
})
onShow(() => {
  useBaseInfoStore().getBaseInfo()
  watch(() => window.location.href, async (newVal) => {
    const path = window.location.pathname;
    // 使用正则匹配 code
    const match = path.match(/code=([^?]+)/);
    if (match) {
      const code = decodeURIComponent(match[1]) // 解析 URL 编码的字符串
      if (code.split('=')[0]) {
        let lastCode = code.split('=')[0]
        console.log(lastCode, 'lastCode');
        if (lastCode) {
          uni.setStorageSync('lastCode', lastCode)
        } else {
          uni.setStorageSync('lastCode', '')
        }
      }
    } else {
      console.log("code 参数未找到");
    }
  }, { immediate: true })

  console.log('onShow')
})
</script>

<style lang="scss">
/*每个页面公共css */
@import "@/uni_modules/uview-plus/index.scss";
//
@import "uni_modules/ucs-css";
</style>

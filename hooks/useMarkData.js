import { useUserStore } from '@/stores/useUserStore'
import { getInfo } from '@api/user.ts'

import router from '@router'



const useLogin = async (token) => {
  // 保存token
  useUserStore().isLogin(token)
  // 获取用户信息
  let res = await getInfo(token)
  // console.log(res, "res userinfo");
  useUserStore().setUserInfo(res.data)

  router.app.config.globalProperties.$LoginDialogHide()
}

export default useLogin
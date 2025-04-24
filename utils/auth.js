const TokenKey = 'token';
const UserInfo = 'userInfo';

// 认证令牌
export function getToken() {
  return uni.getStorageSync(TokenKey)
}
export function setToken(token) {
  return uni.setStorageSync(TokenKey, token)
}

export function removeToken() {
  return uni.removeStorageSync(TokenKey)
}

export function getUserInfo() {
  return uni.getStorageSync(UserInfo)
}

export function setUserInfo(data) {
  return uni.setStorageSync(UserInfo, data)
}
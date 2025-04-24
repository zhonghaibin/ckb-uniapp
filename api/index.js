import request from '@/utils/request.js';

// 获取基础信息
export const baseInfo = () => {
  return request({
    url: `/index/baseInfo`,
    method: 'get',
  })
}

// 获取用户信息
export const userInfo = () => {
  // console.log('1231');
  return request({
    url: `/user/info`,
    method: 'get',
  })
}

// 登录
export const login = (data) => {
  console.log(data, "data");
  return request({
    url: `/auth/login`,
    method: 'post',
    data
  })
}

// MEV 套利
export const mevFollow = (data) => {
  return request({
    url: `/transaction/mev`,
    method: 'post',
    data
  })
}




// 充值回调测试
export const notifyRechargeApi = (data) => {
  return request({
    url: `/notify/recharge`,
    method: 'post',
    data
  })
}

// 充值
export const rechargeApi = (data) => {
  return request({
    // url: `/notify/recharge`,
    url: `/assets/recharge`,
    method: 'post',
    data
  })
}

// 提现
export const withdrawApi = (data) => {
  return request({
    url: `/assets/withdraw`,
    method: 'post',
    data
  })
}



// 获取推荐列表
export const referralList = () => {
  return request({
    url: `/user/referralList`,
    method: 'get',
  })
}


// 获取团队列表
export const teamList = () => {
  return request({
    url: `/user/teamList`,
    method: 'get',
  })
}


// 充值列表
export const rechargeList = () => {
  return request({
    url: `/assets/rechargeList`,
    method: 'get',
  })
}

// 提现列表
export const withdrawList = () => {
  return request({
    url: `/assets/withdrawList`,
    method: 'get',
  })
}

// 获取公告
export const getNotice = () => {
  return request({
    url: `/index/notice`,
    method: 'get',
  })
}

// 获取banner
export const getBanner = () => {
  return request({
    url: `/index/banner`,
    method: 'get',
  })
}

// 获取公告列表
export const noticeList = (page) => {
  return request({
    url: `/index/noticeList`,
    method: 'get',
    params: {
      page
    }
  })
}

// 获取资产变更记录
export const assetsList = (page) => {
  return request({
    url: `/assets/assetsList`,
    method: 'get',
    params: {
      page
    }
  })
}

// 获取质押记录
export const transactiontransactionList = ({ page, transactionType, transaction_id }) => {
  return request({
    url: `/transaction/transactionList`,
    method: 'get',
    params: {
      page,
      transactionType,
      transaction_id
    }
  })
}

// 获取质押收益
export const transactionLogList = ({ page, tab, transactionType, transaction_id }) => {
  return request({
    url: `/transaction/transactionLogList`,
    method: 'get',
    params: {
      page,
      tab,
      transactionType,
      transaction_id
    }
  })
}


// 质押
export const transactionPledge = (data) => {
  return request({
    url: `/transaction/pledge`,
    method: 'post',
    data
  })
}

// 兑换
export const assetsExchange = (data) => {
  return request({
    url: `/assets/exchange`,
    method: 'post',
    data
  })
}


//  获取 货币兑换比例
export const assetsGetRate = (from_coin, to_coin) => {
  return request({
    url: `/assets/getRate?from_coin=${from_coin}&to_coin=${to_coin}`,
    method: 'get',
  })
}



//  获取明细
export const transactiontransactionLogDetails = ({ page, tab, transactionType, transaction_id, transaction_hash }) => {
  return request({
    url: `/transaction/transactionLogDetails?transaction_id=${transaction_id}&tab=${tab}&transaction_hash=${transaction_hash}`,
    method: 'get',
  })
}

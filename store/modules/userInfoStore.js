// src/stores/userInfo.js
import { defineStore } from 'pinia';
import { userInfo } from '@/api/index.js';

export const useUserInfoStore = defineStore('userInfo', {
  state: () => ({
	  account:"",
    avatar: '',
    identity: '',
    level: 0,
    direct_count: 0,
    direct_bonus: 0,
    assets: {
      user_id: 0,
      coin: '',
      amount: 0,
      bonus: 0,
    },
    share_link: '',
    share_code: '',
    // 
    "assets_list": [
      {
        "coin": "USDT",
        "amount": 0,
        "bonus": 0
      },
      {
        "coin": "ONE",
        "amount": 0,
        "bonus": 0
      },
      {
        "coin": "CKB",
        "amount": 0,
        "bonus": 0
      }
    ],
    // 质押数量
    "pledge": {
      "ckb": {
        "amount": 0,
        "pledge_amount": 0
      },
      "one": {
        "amount": 0,
        "pledge_amount": 0
      }
    }
  }),
  actions: {
    // 获取用户信息的异步方法
    async getUserInfo() {
      try {
        const res = await userInfo();
        if (res.code === 200) {
          this.setUserInfo(res.data);
        }
      } catch (error) {
        console.error('Error fetching user info:', error);
      }
    },
    // 设置用户信息
    setUserInfo(data) {
      console.log(data, "data");

      this.avatar = data.avatar;
      this.account = data.account;
      this.identity = data.identity;
      this.level = data.level;
      this.direct_count = data.direct_count;
      this.direct_bonus = data.direct_bonus;
      this.assets = data.assets;
      this.share_link = data.share_link;
      this.share_code = data.share_code;
      this.pledge = data.pledge;
      this.assets_list = data.assets_list;
    },
  },
  persist: true, // 启用持久化存储
});

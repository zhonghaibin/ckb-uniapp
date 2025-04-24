// src/stores/baseInfo.js
import { defineStore } from 'pinia';
import { baseInfo } from '@/api/index.js';

export const useBaseInfoStore = defineStore('baseInfo', {
  state: () => ({
    base_info: {
      maintenance_mode: false,
      maintenance_message: '',
      web_url: '',
      share_url: '',
      wallet_address: '',
      ckb_min_number: '',
      sol_min_number: '',
      exchange_min_number: '',
      withdraw_min_number: '',
      withdraw_fee_rate: '0',
    },
    mev: {
    },
    pledge: {
    },
  }),

  actions: {
    // 获取基础信息的异步方法
    async getBaseInfo() {
      // console.log('getBaseInfo12312', 'getBaseInfo')
      const res = await baseInfo();
      // console.log(res, "res");
      if (res.code == 200) {
        // console.log('getBaseInfo', res.data)
        this.setBaseInfo(res.data);
      }

    },

    // 设置基础信息
    setBaseInfo(data) {
      this.base_info = data.base_info;
      this.mev = data.mev;
      this.pledge = data.pledge;
    },
  },

  persist: true, // 启用持久化存储
});

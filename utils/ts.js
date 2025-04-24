import tp from 'tp-js-sdk';

async function connectWallet() {
  try {
    const res = await tp.getCurrentWallet();
    if (res && res.data) {
      console.log("钱包地址:", res.data.address);
      return res.data.address;
    } else {
      console.log("未检测到钱包连接");
      return null;
    }
  } catch (error) {
    console.error("连接钱包失败", error);
    return null;
  }
}


export default {
  connectWallet,
};


import { ref, reactive } from "vue";

export default {
  ws: null,
  heartbeatInterval: null,
  reconnectDelay: 5000, // 重连延迟时间
  maxReconnectAttempts: 10, // 最大重连次数
  reconnectAttempts: 0, // 当前重连次数
  // marketData: reactive({ value: [] }), // ✅ 使用 reactive 兼容 Vue 3
  marketData: ref({
    ckbusdt: {
      latest: '0.005683',
      ratio: '0.0418042'
    },
    oneusdt: {
      latest: '0.013243',
      ratio: '0.0337210'
    },
    btcusdt: {
      latest: '88091.14',
      ratio: '0.0077049'
    },
    ethusdt: {
      latest: '1877.54',
      ratio: '0.0136344'
    },
    bnbusdt: {
      latest: '631.97',
      ratio: '-0.0045526'
    },
  }),


  // 连接 WebSocket
  connectWebSocket(url, channels = [
    "market.ckbusdt.ticker",
    "market.oneusdt.ticker",
    "market.ethusdt.ticker",
    "market.bnbusdt.ticker",
    "market.btcusdt.ticker",
  ]) {
    if (this.ws) {
      // this.ws.close();
      console.log('wsss');
      // this
      return
    }
    this.ws = uni.connectSocket({
      url: url,
      complete: () => { },
    });

    // WebSocket 连接成功
    this.ws.onOpen(() => {
      // return
      console.log("✅ WebSocket connected");
      this.reconnectAttempts = 0; // 重置重连次数
      // 订阅多个频道
      channels.forEach((channel) => {
        this.sendMessage({ sub: channel });
      });
      this.startHeartbeat();
    });

    // 监听消息
    this.ws.onMessage((event) => {
      if (event.data) {
        try {
          const data = JSON.parse(event.data);
          // console.log(data, 'data JSON');
          if (data.pong) {
            // console.log("💓 Heartbeat pong received");
          } else {
            let rowData = typeof data.data === "string" ? JSON.parse(data.data) : data.data;
            if (rowData == undefined) {
            } else if (rowData != undefined) {
              if (data.status != "subscribed") {
                this.updateMarketData(rowData);
              }
            }
          }
        } catch (error) {
          console.error("❌ Message parsing error:", error);
        }
      }
    });

    // 监听关闭
    this.ws.onClose(() => {
      console.warn("🚨 WebSocket disconnected, retrying...");
      this.stopHeartbeat();

      return
      if (this.reconnectAttempts < this.maxReconnectAttempts) {
        this.reconnectAttempts++;
        setTimeout(() => {
          this.connectWebSocket(url, channels);
        }, this.reconnectDelay);
      } else {
        console.error("❌ 最大重连次数已达到，停止重连！");
      }
    });

    // 监听错误
    this.ws.onError((error) => {
      console.error("❌ WebSocket Error:", error);
      if (this.ws) {
        this.ws.close();
      } else {
        console.log('ws no exizst');
      }

    });
  },

  // ✅ 发送 WebSocket 消息（先检查连接状态）
  sendMessage(message) {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      this.ws.send({
        data: JSON.stringify(message),
      });
      // console.log("📩 发送消息:", message);
    } else {
      console.warn("⚠️ WebSocket 未连接，发送失败");
    }
  },

  // ✅ 开启心跳机制
  startHeartbeat() {
    this.stopHeartbeat(); // 清除旧的定时器
    this.heartbeatInterval = setInterval(() => {
      if (this.ws && this.ws.readyState === WebSocket.OPEN) {
        // console.log("💓 Sending ping...");
        this.sendMessage({ ping: Date.now() });
      }
    }, 30000); // 每 30 秒发送一次心跳
  },

  // 停止心跳机制
  stopHeartbeat() {
    if (this.heartbeatInterval) {
      clearInterval(this.heartbeatInterval);
      this.heartbeatInterval = null;
    }
  },

  // ✅ 更新 marketData（响应式数组）
  updateMarketData(data) {

    if (data && data.tick) {
      // console.log(data, "data")
      // console.log(this.marketData.value, "this.marketData.value")
      const key = data.ch.split('.')[1];
      // 
      // console.log(result, "result")
      const keys = Object.keys(this.marketData.value)
      if (keys.includes(key)) {
        // console.log(`Key "${key}" exists in marketData.`);
        // 获取该项的值
        // const data = this.marketData.value[key];
        this.marketData.value[key]['latest'] = data.tick.close
        this.marketData.value[key]['ratio'] = Number((data.tick.close - data.tick.open) / data.tick.open).toFixed(7)
        // console.log(this.marketData.value[key],'this.marketData.value[key]')

        // 				return lastData
        // console.log(data, 'kkkk');
      } else {
        console.log(`Key "${key}" does not exist in marketData.`);
      }
      // this.marketData.value.push(data); // ✅ 这里需要用 `.value`
      // // if (this.marketData.value.length > 30) {
      // if (this.marketData.value.length > 50) {
      //   this.marketData.value.shift();
      // }


    }
  },

  // 获取市场数据
  getMarketData() {
    return this.marketData.value;
  },

  // 清除 WebSocket 连接
  closeConnection() {
    if (this.ws) {
      this.ws.close();
      this.ws = null;
    }
  },
};

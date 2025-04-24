import { ref } from "vue";

export default {
  ws: null,
  heartbeatInterval: null,
  reconnectDelay: 5000, // 重连延迟时间
  marketData: ref([]), // ✅ 变成响应式的

  // 连接WebSocket
  connectWebSocket(url, channels = ['market.ckbusdt.ticker', 'market.oneusdt.ticker']) {
    if (this.ws) {
      this.ws.close();
    }

    this.ws = uni.connectSocket({
      url: url,
      complete: () => { }
    });

    // WebSocket 连接成功
    this.ws.onOpen(() => {
      console.log('✅ WebSocket connected');
      channels.forEach((channel) => {
        this.ws.send({
          data: JSON.stringify({ sub: channel }),
          success: () => console.log(`✅ Subscribed to ${channel}`),
          fail: (err) => console.error(`❌ Subscription error for ${channel}:`, err)
        });
      });
      this.startHeartbeat();
    });

    // 监听消息
    this.ws.onMessage((event) => {
      if (event.data) {
        try {
          const data = JSON.parse(event.data);
          if (data.pong) {
            console.log('💓 Heartbeat pong received');
          } else {
            let rowData = typeof data.data === 'string' ? JSON.parse(data.data) : data.data;
            this.updateMarketData(rowData);
          }
        } catch (error) {
          console.error('❌ Message parsing error:', error);
        }
      }
    });

    // 监听关闭
    this.ws.onClose(() => {
      console.warn('🚨 WebSocket disconnected, retrying...');
      // this.stopHeartbeat();
      setTimeout(() => {
        this.connectWebSocket(url, channels);
      }, this.reconnectDelay);
    });

    // 监听错误
    this.ws.onError((error) => {
      console.error('❌ WebSocket Error:', error);
      this.ws.close();
    });
  },


  // 开启心跳机制
  startHeartbeat() {
    this.stopHeartbeat(); // 清除旧的定时器
    this.heartbeatInterval = setInterval(() => {
      if (this.ws.readyState === WebSocket.OPEN) {
        console.log('💓 Sending ping...');
        this.ws.send({
          data: JSON.stringify({ ping: Date.now() }),
        });
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
      this.marketData.value.push(data); // ✅ 这里需要用 .value 访问 ref
      if (this.marketData.value.length > 50) {
        this.marketData.value.shift();
      }
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

export default {
  ws: null,
  heartbeatInterval: null,
  reconnectDelay: 5000, // 重连延迟时间
  marketData: [],
  channels: ['market.ckbusdt.ticker', 'market.oneusdt.ticker'], // 默认订阅频道

  // 连接WebSocket
  connectWebSocket(url, channels = this.channels) {
    if (this.ws) {
      this.ws.close(); // 关闭旧连接，防止重复连接
    }

    this.ws = uni.connectSocket({
      url: url,
      complete: () => { }
    });

    // WebSocket连接成功
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

    // 接收到消息时处理
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

    // WebSocket关闭时处理
    this.ws.onClose(() => {
      console.warn('🚨 WebSocket disconnected, retrying...');
      this.stopHeartbeat();
      setTimeout(() => {
        this.connectWebSocket(url, channels);
      }, this.reconnectDelay);
    });

    // WebSocket出错时处理
    this.ws.onError((error) => {
      console.error('❌ WebSocket Error:', error);
      this.ws.close();
    });
  },

  // 更新市场数据
  updateMarketData(data) {
    if (data && data.tick) {
      this.marketData.push(data);
      if (this.marketData.length > 50) {
        this.marketData.shift(); // 限制数组长度
      }
    }
  },

  // 开启心跳机制
  startHeartbeat() {
    this.stopHeartbeat();
    this.heartbeatInterval = setInterval(() => {
      this.ws.send({
        data: JSON.stringify({ ping: Date.now() }),
        fail: (err) => console.error('❌ Ping failed:', err)
      });
    }, 30000);
  },

  // 停止心跳机制
  stopHeartbeat() {
    if (this.heartbeatInterval) {
      clearInterval(this.heartbeatInterval);
      this.heartbeatInterval = null;
    }
  },

  // 获取市场数据
  getMarketData() {
    return this.marketData;
  },

  // 清除 WebSocket 连接
  closeConnection() {
    if (this.ws) {
      this.ws.close();
      this.ws = null;
    }
  },
};

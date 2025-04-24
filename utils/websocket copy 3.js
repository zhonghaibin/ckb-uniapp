


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

    // console.log(this.ws, "this.ws");

    // WebSocket连接成功
    this.ws.onOpen(() => {
      console.log('✅ WebSocket connected');
      // 订阅频道
      channels.forEach((channel) => {
        this.ws.send({
          data: JSON.stringify({ sub: channel }),
        });
      });
      this.startHeartbeat();
    });

    // 接收到消息时处理
    this.ws.onMessage((event) => {

      if (event.data) {
        const data = JSON.parse(event.data);
        // console.log(data, " rrrrrr");
        if (data.pong) {
          console.log('💓 Heartbeat pong received');
        } else {
          // let rowData = JSON.parse(data.data) // 这里会有一个报错 
          let rowData = typeof data.data === 'string' ? JSON.parse(data.data) : data.data;


          this.updateMarketData(rowData);
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
    // console.log(data, "data");
    if (data && data.tick) {
      this.marketData.push(data); // 添加新的数据
      // 限制数组长度为 50
      const maxDataLength = 50;  // 设置最大保存的条数
      if (this.marketData.length > maxDataLength) {
        this.marketData.shift(); // 删除最旧的数据
      }
    }
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

  // 获取市场数据
  getMarketData() {
    return this.marketData;
  },


  // 清除 WebSocket 连接
  closeConnection() {
    if (this.ws) {
      this.ws.close();
    }
  },
};

// utils/websocket.js

let socketTask = null;
let reconnectTimer = null;
let isManualClose = false; // 是否手动关闭连接


// 监听返回

export function watchMessage() {
  return socketTask
  // 监听服务器消息
  // socketTask.onMessage((res) => {
  //   console.log('收到服务器消息:', res.data);
  //   // 在这里处理接收到的数据（如 JSON.parse(res.data)）
  // });
}

// 初始化 WebSocket
export function initWebSocket(url) {
  if (socketTask && socketTask.readyState === 1) {
    console.log('WebSocket 已连接，无需重复创建');
    return;
  }

  // 创建 WebSocket 连接
  socketTask = uni.connectSocket({
    url: url,
    complete: () => { }
  });

  // 监听连接打开
  socketTask.onOpen(() => {
    console.log('WebSocket 连接成功');
    clearTimeout(reconnectTimer); // 清除重连定时器
  });

  // 监听服务器消息
  socketTask.onMessage((res) => {
    // console.log('收到服务器消息:', res.data);
    // 在这里处理接收到的数据（如 JSON.parse(res.data)）
  });

  // 监听连接关闭
  socketTask.onClose((res) => {
    console.log('WebSocket 连接关闭', res);
    if (!isManualClose) {
      // 非手动关闭时尝试重连
      reconnect(url);
    }
  });

  // 监听错误
  socketTask.onError((err) => {
    console.error('WebSocket 错误:', err);
    reconnect(url);
  });
}

// 自动重连机制
function reconnect(url) {
  if (reconnectTimer || isManualClose) return;

  reconnectTimer = setTimeout(() => {
    console.log('尝试重新连接...');
    initWebSocket(url);
  }, 3000); // 3秒后重连
}

// 发送消息
export function sendWebSocketMessage(data) {
  if (socketTask && socketTask.readyState === 1) {
    socketTask.send({
      data: JSON.stringify(data)
    });
  } else {
    console.error('WebSocket 未连接，消息发送失败');
  }
}

// ping: Date.now()

// 主动关闭连接
export function closeWebSocket() {
  isManualClose = true;
  if (socketTask) {
    socketTask.close();
    socketTask = null;
  }
}



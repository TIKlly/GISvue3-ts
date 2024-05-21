// device.ts

// 检测用户代理字符串是否包含常见的移动设备关键字
export function device(): boolean {
  const userAgent = navigator.userAgent;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    userAgent,
  );
}

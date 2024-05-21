// 检测ip地址

// 获取用户登录地址（可能不准确）
export async function getUserLoginAddress() {
  try {
    const response = await fetch("https://ipapi.co/json/");
    const data = await response.json();
    const { city, region, country_name } = data;
    const loginAddress = `${city}, ${region}, ${country_name}`;
    console.log("User Login Address:", loginAddress);
    return loginAddress;
  } catch (error) {
    console.error("Error fetching user login address:", error);
    return null;
  }
}

// 调用函数来获取用户登录地址
// 获取用户IP（仅能获取客户端公网IP）
export async function getUserIP() {
  try {
    const response = await fetch("https://api.ipify.org/?format=json");
    const data = await response.json();
    const ip = data.ip;
    console.log("User IP:", ip);
    return ip;
  } catch (error) {
    console.error("Error fetching user IP:", error);
    return null;
  }
}

// 获取用户设备型号
export function getUserDeviceModel() {
  const userAgent = navigator.userAgent;
  if (/Android/i.test(userAgent)) {
    return "Android";
  } else if (/iPhone|iPad|iPod/i.test(userAgent)) {
    return "iOS";
  } else if (/Windows/i.test(userAgent)) {
    return "Windows";
  } else if (/Macintosh|MacIntel|MacPPC|MacIntel/i.test(userAgent)) {
    return "Mac";
  } else if (/Linux/i.test(userAgent)) {
    return "Linux";
  } else {
    return "Unknown";
  }
}

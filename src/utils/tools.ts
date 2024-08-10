// 判断是否是h5浏览器模式
export const isH5 = () => {
  const ua = navigator.userAgent || navigator.vendor;
  // 检测常见的移动设备标识
  const isMobile = /Mobi|Android|iPad|iPhone/i.test(ua);
  // 检测浏览器是否支持 touch
  const supportsTouch = 'ontouchstart' in window;
  // 检测是否为 iPad，尤其是在 iPadOS 上
  const isIpad = (/iPad/.test(ua) && !/Macintosh/.test(ua)) || (/Macintosh/.test(ua) && supportsTouch);

  // 检测是否是移动设备且支持 H5 特性
  return (isMobile || isIpad) && supportsTouch;
};

export const isH5 = () => {
  const ua = navigator.userAgent || navigator.vendor;

  // 检测常见的移动设备标识
  const isMobile = /Mobi|Android/i.test(ua);

  // 检测浏览器是否支持 H5
  const supportsTouch = 'ontouchstart' in window;
  const supportsLocalStorage = 'localStorage' in window;
  const supportsSessionStorage = 'sessionStorage' in window;

  // 检测是否是移动设备且支持 H5 特性
  return isMobile && (supportsTouch || supportsLocalStorage || supportsSessionStorage);
};

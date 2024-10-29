import { ref, onUnmounted } from "vue";

export function useCountDown(durationInSeconds = 60) {
  const remainingTime = ref(durationInSeconds);
  let timerId: number | undefined;

  // 每秒递减的函数
  const tick = () => {
    if (remainingTime.value > 0) {
      remainingTime.value--;
    } else {
      stop();
    }
  };

  // 开始倒计时的函数
  const start = () => {
    stop(); // 确保在开始新的倒计时前停止之前的
    timerId = window.setInterval(tick, 1000);
  };

  // 停止倒计时的函数
  const stop = () => {
    if (timerId !== undefined) {
      window.clearInterval(timerId);
      timerId = undefined;
    }
  };

  // 重置倒计时的函数
  const reset = () => {
    stop();
    remainingTime.value = durationInSeconds;
  };

  // 组件卸载时清除定时器
  onUnmounted(() => {
    stop();
  });

  return {
    remainingTime,
    start,
    stop,
    reset,
  };
}

import { useBattery } from '@vueuse/core';
import { watch, Ref } from 'vue';

export function useBatteryStatus() {
  const battery = useBattery();
  
  // 监听电池状态变化
  watch(
    () => [battery.charging.value, battery.level.value],
    ([charging, level], [prevCharging, prevLevel]) => {
      if (charging !== prevCharging) {
        console.log(`充电状态变化: ${charging ? '开始充电' : '停止充电'}`);
      }
      if (level !== prevLevel) {
        console.log(`电量变化: ${(level as number) * 100}%`);
      }
    },
  );

  // 返回电池状态信息
  return {
    charging: battery.charging,
    chargingTime: battery.chargingTime,
    dischargingTime: battery.dischargingTime,
    level: battery.level,
  };
}
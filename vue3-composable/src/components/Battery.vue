<script setup lang="ts">
import { useBatteryStatus } from '../composables/useBatteryStatus';

const batteryStatus = useBatteryStatus();
</script>

<template>
  <div class="battery-container">
    <div class="battery-header">
      <h2>设备电池状态</h2>
    </div>
    <div class="battery-content">
      <p>是否正在充电: <strong>{{ batteryStatus.charging ? '是' : '否' }}</strong></p>
      <p>充电时间: <strong>{{ batteryStatus.chargingTime }} 秒</strong></p>
      <p>放电时间: <strong>{{ batteryStatus.dischargingTime }} 秒</strong></p>
      <p>电量等级: <strong>{{ batteryStatus.level * 100 }}%</strong></p>
      <div class="battery-level-bar">
        <div :style="{ width: batteryStatus.level * 100 + '%' }" class="battery-level-fill"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.battery-container {
  font-family: 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  background-color: #ffffff;
  border: 1px solid #eaeaea;
  border-radius: 12px;
  padding: 24px;
  max-width: 400px;
  margin: 30px auto;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.battery-container:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

.battery-header h2 {
  color: #333333;
  font-size: 1.8em;
  font-weight: 500;
  margin-bottom: 0.8em;
}

.battery-content p {
  margin: 0.8em 0;
  color: #555555;
}

.battery-content strong {
  color: #333333;
  margin-left: 8px;
}

.battery-level-bar {
  background-color: #e0e0e0;
  border-radius: 10px;
  height: 15px;
  margin: 25px 0;
  overflow: hidden;
}

.battery-level-fill {
  height: 100%;
  background-color: #4caf50;
  transition: width 0.5s ease-in-out;
  border-radius: 10px;
}

.battery-level-fill.charging {
  background-color: #ff9800; /* Orange color for charging state */
}
</style>
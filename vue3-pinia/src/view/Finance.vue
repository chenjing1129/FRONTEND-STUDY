<template>
  <div class="finance-app">
    <h2 class="app-title">记账应用</h2>
    <div class="input-group">
      <input type="text" v-model="description" placeholder="描述" class="input-field" />
      <input type="number" v-model="amount" placeholder="金额" class="input-field" />
      <select v-model="type" class="input-field">
        <option value="" disabled>请选择类型</option>
        <option value="income">收入</option>
        <option value="expense">支出</option>
      </select>
      <button @click="myAddFinance" class="add-button">添加记录</button>
    </div>
    <div class="transaction-list">
      <h3 class="section-title">交易记录</h3>
      <ul>
        <li v-for="(finance, index) in myFiances" :key="finance.id" class="transaction-item">
          <span>{{ finance.description }} - {{ finance.amount }} ({{ finance.type }})</span>
          <button @click="myRemoveFinance(index)" class="remove-button">删除</button>
        </li>
      </ul>
    </div>
    <div class="stats">
      <h3 class="section-title">统计信息</h3>
      <p class="stat-item">总收入: {{ totalIncome }}</p>
      <p class="stat-item">总支出: {{ totalExpenses }}</p>
      <p class="stat-item">当前余额: {{ currentBalance }}</p>
    </div>
  </div>
</template>
  
  <script setup lang="ts">
  import { ref, computed } from 'vue';
  import { useFinanceStore } from '../stores/useFinance';
  
  const financeStore = useFinanceStore();
  
  const description = ref("");
  const amount = ref(0);
  const type = ref<'income' | 'expense'>();
  
  const myAddFinance = () => {
    if (!type.value) {
      alert('请选择交易类型');
      return;
    }
    financeStore.addFinance(description.value, amount.value, type.value);
    description.value = '';
    amount.value = 0;
    type.value = 'income';
  };
  
  const myRemoveFinance = (index: number) => {
    financeStore.removeFinance(index);
};
  
  const myFiances = financeStore.finances;
  
  // 使用 computed 属性来获取总收入、总支出和当前余额
  const totalIncome = computed(() => financeStore.totalIncome);
  const totalExpenses = computed(() => financeStore.totalExpenses);
  const currentBalance = computed(() => financeStore.calculateBalance());
  </script>
  
  <style scoped>
.finance-app {
  max-width: 600px;
  margin: 4rem auto;
  padding: 2.5rem;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.app-title, .section-title {
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 1.5rem;
}

.input-group {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
}

.input-field {
  padding: 0.75rem 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.375rem;
  font-size: 1rem;
  flex: 1;
  min-width: 150px;
}

.add-button {
  padding: 0.75rem 2rem;
  background: linear-gradient(150deg, #4facfe, #00f2fe);
  color: white;
  border: none;
  border-radius: 0.375rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s ease-in-out, transform 0.3s ease-in-out;
  flex: 2;
  margin-top: 0.5rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  outline: none;
}

.add-button:hover {
  background: linear-gradient(150deg, #0984e3, #30dd8a);
  transform: translateY(-2px);
}

.add-button:active {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  transform: translateY(1px);
}

.transaction-list, .stats {
  margin-bottom: 2rem;
  text-align: center;
}

.transaction-list::before, .transaction-list::after {
  content: '';
  position: absolute;
  left: 50%;
  width: 95%;
  height: 1px;
  background: #e2e8f0;
  transform: translateX(-50%);
}

.transaction-list::before {
  top: -1rem;
}

.transaction-list::after {
  bottom: -0.5rem;
}

.transaction-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: #f7fafc;
  border-radius: 0.375rem;
  margin-bottom: 0.5rem;
}

.remove-button {
  padding: 0.5rem 1rem;
  background: linear-gradient(150deg, #f59e0b, #fbd786);
  color: white;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: background 0.3s ease-in-out, transform 0.3s ease-in-out;
}

.remove-button:hover {
  background: linear-gradient(150deg, #f53f5c, #fe6e6e);
  transform: translateY(-2px);
}

.remove-button:active {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  transform: translateY(1px);
}

.stat-item {
  margin: 0.5rem 0;
  font-size: 16px;
  color: #374151;
}
</style>
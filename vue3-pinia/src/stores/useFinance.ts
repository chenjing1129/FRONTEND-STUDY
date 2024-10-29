import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

interface Finance {
  id: number;
  description: string;
  amount: number;
  type: 'income' | 'expense';
}

export const useFinanceStore = defineStore(
  'finance',
  () => {
    const finances = ref<Finance[]>([]);

    // Getters for total income and expenses
    const totalIncome = computed(() =>
      finances.value.reduce((sum, finance) => (finance.type === 'income' ? sum + finance.amount : sum), 0)
    );

    const totalExpenses = computed(() =>
      finances.value.reduce((sum, finance) => (finance.type === 'expense' ? sum + finance.amount : sum), 0)
    );

    // Action to add a new finance record
    const addFinance = (financeDesc: string, financeAmount: number, type: 'income' | 'expense') => {
      const newFinance: Finance = {
        id: finances.value.length > 0 ? Math.max(...finances.value.map(f => f.id)) + 1 : 1,
        description: financeDesc,
        amount: financeAmount,
        type,
      };
      finances.value.push(newFinance);
    };

    // Action to remove a finance record by id
    const removeFinance = (index: number) => {
        finances.value.splice(index, 1);
   };
    // Action to calculate the current balance
    const calculateBalance = () => {
      return totalIncome.value - totalExpenses.value;
    };

    return {
      finances,
      totalIncome,
      totalExpenses,
      addFinance,
      removeFinance,
      calculateBalance,
    };
  },

  {
    persist: {
      key: 'my-finance-store', // Make sure this key matches the store name
      storage: localStorage,
    },
  }
);
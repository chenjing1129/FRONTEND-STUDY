import { ref } from "vue";

export function useCounter(initValue = 0) {
    //响应式变量 number,初值为入参 initValue
    const count = ref<number>(initValue)

    //增加计数的函数
    const increment = () => {
        count.value++;
    }

    //减少计数的函数
    const decrement = () => {
        count.value--;
    }

    const reset = () => {
        count.value = initValue;
    }
    return {
        count,increment,decrement,reset
    }
}
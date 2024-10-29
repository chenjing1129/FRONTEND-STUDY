import { useDark, useToggle } from '@vueuse/core';

export function useDarkMode() {
  const isDark = useDark();
  const toggleDark = useToggle(isDark);

  // 我们需要修改 toggleDark 的类型定义，以确保它接受一个 MouseEvent 参数
  const toggleDarkWithEvent = (event: MouseEvent) => {
    toggleDark();
  };

  return {
    isDark,
    toggleDark: toggleDarkWithEvent, // 返回修改后的 toggleDark 函数
  };
}
import { ref, Ref } from 'vue';

interface SendMessage {
  sending: boolean;
  message: Ref<string>; // 将 message 改为 Ref<string>
  send: (phoneNumber: string, content: string) => void;
  reset: () => void;
}

export function useSendMessage(): SendMessage {
  const sending = ref(false);
  const message = ref('');

  // 模拟发送短信的函数
  const send = (phoneNumber: string, content: string): void => {
    if (!phoneNumber || !content) {
      message.value = '手机号不能为空';
      return;
    }

    sending.value = true;
    message.value = '发送中...';

    // 模拟异步短信发送过程
    setTimeout(() => {
      sending.value = false;
      message.value = `消息已发送至 ${phoneNumber}`;
    }, 2000); // 假设短信发送需要2秒钟
  };

  // 重置短信服务状态
  const reset = (): void => {
    sending.value = false;
    message.value = '';
  };

  return { 
    sending: sending.value, // 返回 boolean
    message, // 返回 Ref<string>
    send, 
    reset 
  };
}
<template>
    <div class="sms-container">
      <h1>发送短信</h1>
      <div class="input-group">
        <input v-model="phoneNumber" placeholder="输入手机号" class="input-field" />
        <input v-model="content" placeholder="输入短信内容" class="input-field" />
      </div>
      <div class="button-group">
        <button @click="sendSms" :disabled="sendMessage.sending" class="btn">发送</button>
        <button @click="sendMessage.reset" :disabled="!sendMessage.message" class="btn reset-btn">重置</button>
      </div>
      <p v-if="sendMessage.message" class="message">{{ sendMessage.message }}</p>
      <p v-if="sendMessage.sending" class="loading">发送中，请稍后</p>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { useSendMessage } from '../composables/useSendMessage';
  
  const sendMessage = useSendMessage();
  const phoneNumber = ref('');
  const content = ref('');
  
  const sendSms = () => {
    sendMessage.send(phoneNumber.value, content.value);
  };
  </script>
  
  <style>
  body {
    font-family: 'Arial', sans-serif;
    background-color: #e9ecef;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  
  .sms-container {
    max-width: 400px;
    width: 100%;
    padding: 2rem;
    background-color: #ffffff;
    border-radius: 12px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    text-align: center;
  }
  
  h1 {
    color: #333;
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }
  
  .input-group {
    margin-bottom: 1rem;
    display: flex;
    justify-content: center;
    gap: 1rem;
  }
  
  .input-field {
    width: 100%;
    max-width: 300px;
    padding: 0.75rem 1rem;
    background-color: #f8f9fa;
    border: 1px solid #ced4da;
    border-radius: 6px;
    font-size: 1rem;
    transition: border-color 0.3s, box-shadow 0.3s;
  }
  
  .input-field:hover {
    border-color: #adb5bd;
  }
  
  .input-field:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
  }
  
  .button-group {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: 1rem;
  }
  
  .btn {
    padding: 0.75rem 1.5rem;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 6px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.2s;
  }
  
  .btn:hover {
    background-color: #0056b3;
  }
  
  .btn:active {
    transform: translateY(2px);
  }
  
  .btn[disabled] {
    background-color: #6c757d;
    cursor: not-allowed;
  }
  
  .reset-btn {
    background-color: #007bff;
  }
  
  .reset-btn:hover {
    background-color: #007bff;
  }
  
  .message {
    color: #28a745;
    font-size: 1rem;
    margin-top: 1rem;
  }
  
  .loading {
    color: #dc3545;
    font-size: 1rem;
    margin-top: 1rem;
  }
  </style>
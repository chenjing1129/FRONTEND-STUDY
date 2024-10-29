<template>
    <div class="form-container">
      <h1>表单验证</h1>
      <div class="form-group" :class="{ 'has-error': errors.name }">
        <label for="name">姓名:</label>
        <input id="name" v-model="values.name" @input="setValue('name', values.name)" placeholder="输入你的姓名" />
        <p v-if="errors.name" class="error">{{ errors.name }}</p>
      </div>
      
      <div class="form-group" :class="{ 'has-error': errors.email }">
        <label for="email">电子邮件:</label>
        <input id="email" v-model="values.email" @input="setValue('email', values.email)" placeholder="输入你的电子邮件" />
        <p v-if="errors.email" class="error">{{ errors.email }}</p>
      </div>
      
      <button @click="handleSubmit">提交</button>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, nextTick } from 'vue';
  import useFormValidation from '../composables/useFormValidation';
    
  const { values, errors, setValue, validate, addRule, reset } = useFormValidation();
    
  addRule('name', {
    validate: (value) => value.length > 0,
    message: '姓名不能为空',
  });
    
  addRule('email', {
    validate: (value) => /\S+@\S+\.\S+/.test(value),
    message: '无效的电子邮件地址',
  });
  
  const handleSubmit = () => {
    if (validate()) {
      alert('表单提交成功!');
    } else {
      // 使用 nextTick 确保 DOM 更新后再聚焦
      nextTick(() => {
        // 查找第一个出现错误的字段的输入框
        const firstErrorField = Object.keys(errors).find(field => errors[field]);
        if (firstErrorField) {
          const inputElement = document.getElementById(firstErrorField);
          if (inputElement) {
            inputElement.focus();
          }
        }
      });
    }
  };
  </script>
  
  <style>
  .form-container {
    max-width: 400px;
    margin: 2rem auto;
    padding: 2rem;
    background-color: #f7f7f7;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .form-group {
    margin-bottom: 1rem;
    position: relative;
  }
  
  .form-group label {
    display: block;
    margin-bottom: 0.5rem;
    color: #333;
    font-weight: 500;
  }
  
  .form-group input {
    width: 100%;
    padding: 0.75rem 1rem;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
    transition: border-color 0.3s, box-shadow 0.3s;
  }
  
  .form-group input:hover {
    border-color: #888;
  }
  
  .form-group.has-error input {
    border-color: #e74c3c; /* Red border for error state */
  }
  
  .form-group input:focus {
    outline: none;
    border-color: #3498db;
    box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);
  }
  
  .error {
    color: #e74c3c;
    font-size: 0.875rem;
    line-height: 1.5;
    margin-top: 0.5rem;
  }
  
  button {
    display: block;
    width: 100%;
    padding: 1rem 2rem;
    background-color: #3498db;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.2s;
  }
  
  button:hover {
    background-color: #2980b9;
  }
  
  button:active {
    transform: translateY(2px);
  }
  </style>
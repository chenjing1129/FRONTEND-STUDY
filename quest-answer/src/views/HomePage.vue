<template>
    <div class="home-container">
      <h1>欢迎回来!</h1>
      <p>这是您的主页，您可以在这里浏览问题和提问。</p>
      <router-link to="/questions" class="primary-button">查看问题列表</router-link>
      <router-link to="/ask" class="secondary-button">提问</router-link>
    </div>
  </template>
  
  <script lang="ts">
  export default {
    name: 'HomePage',
  };
  </script>
  
  <style>
  .home-container {
    max-width: 800px; /* Max width for the content */
    margin: 50px auto; /* Center the container */
    padding: 20px; /* Padding around the container */
    text-align: center; /* Center text */
    background-color: #ffffff; /* White background */
    border-radius: 12px; /* Rounded corners */
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); /* Soft shadow */
  }
  
  h1 {
    font-size: 32px; /* Larger font size for the heading */
    color: #35495e; /* Darker color for the heading */
  }
  
  p {
    font-size: 18px; /* Medium font size for the paragraph */
    color: #555; /* Grey color for the paragraph text */
    margin-bottom: 20px; /* Space below the paragraph */
  }
  
  .primary-button, .secondary-button {
    display: inline-block; /* Block-level element for buttons */
    padding: 10px 20px; /* Padding for buttons */
    margin: 10px; /* Margin around buttons */
    border-radius: 6px; /* Rounded corners */
    color: white; /* White text */
    text-decoration: none; /* Remove underline from links */
    transition: background-color 0.3s, transform 0.2s; /* Smooth transition for hover effects */
  }
  
  .primary-button {
    background-color: #007bff; /* Primary color */
  }
  
  .secondary-button {
    background-color: #28a745; /* Secondary color */
  }
  
  .primary-button:hover {
    background-color: #0056b3; /* Darker shade on hover */
    transform: translateY(-2px); /* Slight lift effect on hover */
  }
  
  .secondary-button:hover {
    background-color: #218838; /* Darker shade on hover */
    transform: translateY(-2px); /* Slight lift effect on hover */
  }
  </style>
<template>  
    <div class="wholeContainer">  
      <p>孙悟空血量: {{ currentHp }} / {{ maxHp }}({{ (hpPercentage) }}%)</p>  
      <div class="progressBar">  
        <div class="progressFill":style="progressFillStyle"></div>  
      </div>  
    </div>  
  </template>  
    
  <script>
import { reduceEachLeadingCommentRange } from 'typescript';

  export default {  
    data() {  
      return {  
        currentHp: 20,  
        maxHp: 100  
      };  
    },  
    computed: {  
      hpPercentage() {  
        return (this.currentHp / this.maxHp) * 100;  
      },  
      progressFillStyle() {  
        let backgroundColor;  
        if (this.hpPercentage < 30) {  
            backgroundColor='#ff4500'; 
        } else if (this.hpPercentage < 70) {  
            backgroundColor = '#ff9800';
        } else {  
            backgroundColor = '#4CAF50';   
        }  
        return {  
          width: `${this.hpPercentage}%`,  
          backgroundColor,  
          height: '100%',  
          borderRadius: '5px',  
          transition: 'width 0.5s ease'  
        };  
      }  
    }  
  };  
  </script>  
    
  <style scoped>  

  .wholeContainer {  
  margin: 20px;  
  padding: 10px;  
  border: 1px solid #ccc;  
  border-radius: 8px;  
}  
  .progressBar {  
    width: 1200px; 
  height: 20px;  
  background-color: #eee;  
  border-radius: 5px;  
  overflow: hidden;  
  }  
  .progressFill {  
    height: 100%;  
    border-radius: inherit;
    float: left;
  }  
  </style>
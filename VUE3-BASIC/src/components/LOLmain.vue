<template>
  <el-container>
    <!-- 导航栏 -->
    <el-header class="navbar">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="0">
          <img src="https://game.gtimg.cn/images/lol/v3/logo-public.png" alt="英雄联盟" class="logo" />
        </el-menu-item>
        <el-menu-item index="1">首页</el-menu-item>
        <el-menu-item index="2">游戏资料</el-menu-item>
        <el-menu-item index="3">赛事中心</el-menu-item>
        <el-menu-item index="4">活动中心</el-menu-item>
      </el-menu>
    </el-header>
    
    <!-- 轮播图 -->
    <el-main class="carousel-container">
      <el-carousel :interval="4000" arrow="always" class="carousel">
        <el-carousel-item v-for="(image, index) in carouselImages" :key="index">
          <img :src="image" class="carousel-image" alt="">
        </el-carousel-item>
      </el-carousel>
    </el-main>

    <!-- 功能模块 -->
    <el-main class="features">
      <el-row :gutter="20" class="feature-row">
        <el-col :span="8" v-for="feature in features" :key="feature.title">
          <el-card :body-style="{ padding: '0px' }" class="feature-card">
            <img :src="feature.image" class="feature-image" alt="">
            <div class="feature-info">
              <h3>{{ feature.title }}</h3>
              <p>{{ feature.description }}</p>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </el-main>

    <!-- 最新活动 -->
    <el-main class="activities">
      <el-card class="activity-card">
        <div slot="header" class="clearfix">
          <span>最新活动</span>
        </div>
        <el-timeline>
          <el-timeline-item v-for="(activity, index) in activities" :key="index" :timestamp="activity.date">
            <el-card class="activity-item">
              <h4>{{ activity.title }}</h4>
              <p>{{ activity.description }}</p>
            </el-card>
          </el-timeline-item>
        </el-timeline>
      </el-card>
    </el-main>

    <!-- 页脚 -->
    <el-footer class="footer">
      <el-row type="flex" justify="space-around" align="middle" class="footer-content">
        <el-col :span="6">腾讯公司版权所有</el-col>
        <el-col :span="6">服务热线：0755-86013388-61240</el-col>
        <el-col :span="6">ICP证：粤B2-20090059号</el-col>
      </el-row>
    </el-footer>
  </el-container>
</template>

<script setup>
import { ref } from 'vue';

const activeIndex = ref('1');
const carouselImages = ref([
  'https://ossweb-img.qq.com/upload/adw/image/977/20240829/cb6d9925ff5af289eb8e9180978d71d6.jpeg',     
  'https://ossweb-img.qq.com/upload/adw/image/977/20240913/0cb39c3f829a68726f4c33975c401f28.jpeg',     
  'https://ossweb-img.qq.com/upload/adw/image/977/20240923/9ec27ebcb85a627aab0f50fe70678c9e.jpeg'     
]);

const features = ref([
  { title: '召唤师峡谷', description: '经典模式', image: 'https://game.gtimg.cn/images/lol/lolstrategy/bg-dhjjc.jpg'      },
  { title: '极地大乱斗', description: '快速游戏', image: 'https://img.tgl.qq.com/cover/20240802/d5ef8541dbe779f1b011e2edf7687bb5_1722593220.jpg'      },
  { title: '云顶之弈', description: '策略游戏', image: 'https://img.crawler.qq.com/cfwebcap/0/f865ac5ab7ca89be418b1c683b60202b/0/?width=3840&height=2160'      }
]);

const activities = ref([
  { title: '双城之战活动', description: '参与活动赢取奖励', date: '2024-01-01' },
  { title: '新赛季开启', description: '新赛季，新挑战', date: '2024-01-02' },
  { title: '节日庆典', description: '节日特别活动', date: '2024-01-03' }
]);

const handleSelect = (key, keyPath) => {
  console.log(key, keyPath);
};
</script>

<style scoped>
.logo {
  height: 40px; /* 根据实际图片大小调整 */
  margin-right: 20px; /* 与菜单项之间的间距 */
}
/* 轮播图样式 */
.carousel-container {
  /* 使用最小高度，而不是固定高度 */
  min-height: 300px; /* 你可以根据图片的实际尺寸调整这个值 */
  height: 60vh; /* 使用视窗高度的百分比，确保图片能够适应不同屏幕 */
  overflow: hidden;
  position: relative; /* 为遮罩层定位 */
  margin-bottom: 0;
  box-shadow: 0 8px 30px rgba(0,0,0,0.4);
  background-color: #f0f0f0;
}

.carousel::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
}

.carousel .el-carousel__item {
  border-radius: 15px;
  box-shadow: 0 8px 30px rgba(0,0,0,0.3);
  overflow: hidden;
  display: flex; /* 使用 Flexbox 布局 */
  align-items: center; /* 垂直居中图片 */
  justify-content: center; /* 水平居中图片 */
}
.carousel-image {
  width: auto; /* 自动宽度 */
  height: 100%; /* 充满整个容器高度 */
  max-width: 100%; /* 不超过容器宽度 */
  object-fit: cover;
  object-position: center;
  transition: transform 0.5s ease; /* 平滑过渡效果 */
  flex-shrink: 0; /* 防止图片在缩小时被压缩 */
}

.carousel-image:hover {
  transform: scale(1.05); /* 鼠标悬停时放大 */
}

/* 导航栏样式 */
.navbar {
  background-color: #373d41;
  color: #fff;
  text-align: center;
  line-height: 60px;
  font-weight: bold; /* 字体加粗 */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease;
}

.navbar:hover {
  background-color: #2c2c2c;
}

/* 功能模块样式 */
.features .feature-row {
  margin-top: 0;
}

.features {
  margin-top: 0; /* 减少功能模块上方的外边距 */
  padding-top: 0; /* 移除功能模块上方的内边距 */
}

.feature-card {
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.2);
  overflow: hidden;
  transition: transform 0.3s ease; /* 鼠标悬停时的动画效果 */
}

.feature-card:hover {
  transform: translateY(-10px); /* 鼠标悬停时上移 */
}

.feature-image {
  width: 100%;
  height: 200px; /* 根据实际需求调整 */
  object-fit: cover;
}

.feature-info {
  padding: 14px;
  background-color: #f5f5f5; /* 背景颜色 */
}

/* 最新活动样式 */
.activities .activity-card {
  margin-top: 20px;
}

.activity-item {
  margin-bottom: 20px;
}

/* 页脚样式 */
.footer {
  background-color: #2c2c2c;
  color: #fff;
  text-align: center;
  line-height: 60px;
}

.footer-content {
  justify-content: center;
}

</style>
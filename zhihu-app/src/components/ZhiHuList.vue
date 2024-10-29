<template>
  <div class="container">
    <div v-for="(item, index) in list" :key="index" class="card">
      <div class="left">
        <img :src="item.banner" alt="" />
      </div>
      <div class="right">
        <h3>{{ item.title }}</h3>
        <p>
          <span
            v-for="tag in item.tags"
            :key="tag.sectionId"
            class="tag"
          >
            {{ tag.sectionTitle }}
          </span>
        </p>
        <p>
          <span class="updated">
              <!-- {{ item.updated }} -->
            {{ TimeUtil.format(item.updated, "YYYY-MM-DD") }}
          </span>
          <span>
            {{ item.viewCount }}次浏览
          </span>
        </p>
      </div>
      <span v-if="item.isFollowing === 'TRUE'" class="follow followed">已关注</span>
      <span v-else class="follow unfollow">关注</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import axios from "axios";
import TimeUtil from "../utils/timeUtil";

interface Tag {
  sectionId: string;
  specialId: string;
  sectionTitle: string;
}
 
interface Topic {
  id: string;
  title: string;
  viewCount: number;
  followersCount: number;
  isFollowing: string;
  introduction: string;
  banner: string;
  updated: number;
  tags: Tag[];
}

const list = ref<Topic[]>([]);

axios({
  url: "http://localhost:8080/api/v1/zhihu/specials",
})
  .then((res) => {
    list.value = res.data.data as Topic[];
    console.log(list.value);
  })
  .catch((err) => {
    console.log(err);
  });
</script>

<style scoped>
.container {
  width: 70%;
  margin: 0 auto;
}
.card {
  display: flex;
  height: 180px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  box-shadow: 10px 5px 5px #ddd;
  border-radius: 8px;
  position: relative;
}
.left {
  flex: 1;
}
.right {
  flex: 4;
  padding: 10px;
}
.left img {
  width: 100%;
  height: 100%;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
}
p span {
  font-size: 13px;
  color: #333;
}
.updated {
  margin-right: 20px;
}
.follow {
  position: absolute;
  right: 20px;
  top: 20px;
  padding: 5px 10px;
  font-size: 14px;
}
.followed {
  background-color: #f6f6f6;
  color: #716c6c;
}
.unfollow {
  background-color: #eff4fe;
  color: #3670ee;
}
.tag {
  padding: 3px 8px;
  background-color: #7da;
  color: #fff;
  margin-right: 10px;
  border-radius: 4px;
}
</style>

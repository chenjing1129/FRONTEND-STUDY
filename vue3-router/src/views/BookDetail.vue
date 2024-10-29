<template>
  <div v-if="book" class="book-detail">
    <h1 class="book-title">{{ book.title }}</h1>
    <p class="book-description">{{ book.description }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const books = ref([
  { id: 1, title: '斗罗大陆', description: '唐门外门弟子，因偷学内门绝学而被唐门所不容，跳崖明志时意外穿越到了斗罗大陆的圣魂村。在这里，他逐步修炼武魂，从人修炼成神，最终铲除了邪恶的武魂殿，报了杀母之仇，成为了斗罗大陆上的最强者。' },
  { id: 2, title: '斗破苍穹', description: '事的主角萧炎，原本是家族中的天才少年，但在创造了家族空前绝后的修炼纪录后突然变成了“废人”，经历了种种打击。在他即将绝望的时候，一缕灵魂从他手上的戒指里浮现，一扇全新的大门在面前开启。从此，萧炎重新成为家族年轻一辈中的佼佼者，受到众人的仰慕。他为了一雪退婚带来的耻辱，踏上了修炼之旅，以他的执着与信念闯荡大陆，一路历经坎坷，向着巅峰强者之途迈进。' },
  { id: 3, title: '武动乾坤', description: '在这个世界中，人们通过修炼武学和符术来增强自己的力量。林动凭借石符的帮助，武学修为突飞猛进，他逐渐揭开了石符的秘密，同时也卷入了家族、宗派以及更广阔世界的纷争与冒险之中。小说中，林动不仅要面对来自各方的挑战和考验，还要保护家人和朋友，最终成长为一代武祖。' },
])

const book = computed(() => {
  const bookId = Number(route.params.id);
  return books.value.find(b => b.id === bookId);
});
</script>

<style scoped>
.book-detail {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.book-title {
  color: #333;
  font-size: 28px;
  margin-bottom: 10px;
  text-align: center;
}

.book-description {
  color: #666;
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 20px;
  border-left: 4px solid #3498db;
  padding-left: 15px;
  background-color: #f9f9f9;
  border-radius: 4px;
}

.book-detail:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}
</style>
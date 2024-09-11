<template>
    <div class="skills-container">
        <h2>黑猴技能</h2>
        <ul>
            <li v-for="skill in skills" :key="skill.id">
                {{ skill.name }} -
                <span v-if="skill.status == true" style="color: green;">已解锁</span>
                <span v-else style="color: red;">未解锁</span>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue';

interface Skill{
    id: number;
    name: string;
    status: boolean;
}

const skills = ref<Skill[]>([
    { id: 1, name: '定身法', status: true},
    { id: 2, name: '安身法', status: false},
    { id: 3, name: '禁字法',status: true},
    { id: 4, name: '聚气散形', status: true},
    { id: 5, name: '铜头铁臂', status: false},
    { id: 6, name: '身外之法', status: false}
]);
</script>

<style scoped>

</style>
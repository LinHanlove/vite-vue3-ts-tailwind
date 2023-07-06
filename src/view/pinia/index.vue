<template>
  <div>pinia测试区</div>

  <section class="w-full h-full">
    <el-button type="primary" @click="setPinia">
      <i-fluent-emoji:love-letter />

      setPinia</el-button
    >
    <el-button type="primary" @click="getPinia">
      <i-flat-color-icons:like />

      getPinia</el-button
    >
  </section>
</template>
<script setup lang="ts">
import { ref } from "vue";
import useStore from "@/store/user";
const visibleVideo = ref(false);

const user = useStore();

const setPinia = () => {
  user.SETTOKEN("我是一条token");
};

console.log(import.meta.env);

const getPinia = () => {
  const getToken = user.GETTOKEN;
  console.log(getToken);
};
</script>

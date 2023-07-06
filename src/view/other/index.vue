<template>
  <div>其他功能页面</div>

  <section class="w-full h-full">
    <div>
      <el-button
        class="mt-[20px]"
        type="primary"
        @mouseover="visibleVideo = true"
        @mouseout="visibleVideo = false"
        >预览视频</el-button
      >
    </div>
    <div v-if="visibleVideo" class="w-[250px] h-[250px] bg-[#ccc] m-[0_auto]">
      <Video></Video>
    </div>
    <el-button type="primary" @click="setPinia">
      <i-carbon-accessibility />
      setPinia</el-button
    >
    <el-button type="primary" @click="getPinia">
      <i-flat-color-icons:like />

      getPinia</el-button
    >
    <i-fluent-emoji:love-letter />
  </section>
</template>
<script setup lang="ts">
import { ref } from "vue";
import Video from "@/components/video/index.vue";
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

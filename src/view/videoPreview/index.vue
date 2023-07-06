<template>
  <div>视频预览区</div>

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
  </section>
</template>
<script setup lang="ts">
import { ref } from "vue";
import Video from "@/components/video/index.vue";
const visibleVideo = ref(false);
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header
        class="h-[50px] bg-gradient-to-r from-[teal] to-indigo-500 text-center flex justify-center items-center"
      >
        <div>Header</div>
      </el-header>
      <el-container>
        <el-aside
          width="200px "
          class="h-[calc(100vh-50px)] bg-gradient-to-b from-[teal] to-indigo-50"
        >
          <el-button type="primary" @click="router.push({ path: '/ts-view' })"
            >去ts专区</el-button
          >
          <el-button type="primary" @click="router.push({ path: '/other' })"
            >去其他专区</el-button
          >
        </el-aside>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();
</script>

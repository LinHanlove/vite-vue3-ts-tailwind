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
          <div class="w-full text-center py-[20px] px-[8px]">
            <el-button
              round
              :type="isCollapse ? 'primary' : 'danger'"
              @click="isCollapse = !isCollapse"
              >{{ isCollapse ? "展开" : "隐藏" }}</el-button
            >
          </div>
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo h-full"
            :collapse="isCollapse"
            @open="handleOpen"
            @close="handleClose"
          >
            <el-sub-menu index="1">
              <template #title>
                <i-noto-v1:love-hotel />
                <span>其他专区</span>
              </template>
              <el-menu-item-group>
                <template #title><span>pinia</span></template>
                <el-menu-item
                  index="1-1"
                  @click="router.push({ path: '/pinia' })"
                  >pinia测试区</el-menu-item
                >
              </el-menu-item-group>
              <el-menu-item-group title="视频预览区">
                <el-menu-item
                  index="1-2"
                  @click="router.push({ path: '/video-preview' })"
                  >视频预览</el-menu-item
                >
              </el-menu-item-group>
            </el-sub-menu>
            <el-menu-item index="2" @click="router.push({ path: '/ts-view' })">
              <i-fluent-emoji:love-letter />
              <template #title>ts专区</template>
            </el-menu-item>
            <el-menu-item
              index="3"
              disabled
              @click="router.push({ path: '/other' })"
            >
              <el-icon><document /></el-icon>
              <template #title>功能待开发专区</template>
            </el-menu-item>
          </el-menu>
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
import { ref } from "vue";

const isCollapse = ref(false);

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>
<style lang="scss" scoped>
:deep .el-menu {
  background-color: teal;
}
</style>

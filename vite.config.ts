import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

import Icons from "unplugin-icons/vite";
/* 自动安装组件 */
import IconsResolver from "unplugin-icons/resolver";
import Components from "unplugin-vue-components/vite";

// https://vitejs.dev/config/
export default defineConfig({
  /* 路径别名 */
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"), // 路径别名
    },
    extensions: [".js", ".json", ".ts"], // 使用路径别名时想要省略的后缀名，可以自己 增减
  },

  /* 修改element-plus主题 */
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/assets/css/elementplus.scss" as *;`,
      },
    },
  },

  plugins: [
    vue(),
    Components({
      resolvers: [
        IconsResolver({
          // icon的前缀 组件使用{prefix}-{collection}-{icon} eg:i-ep-search
          // enabledCollections:['ep']  这是可选的，默认启用 Iconify 支持的所有集合，ep指的是element_ui的图标库
          // alias: { park: 'icon-park' } 集合的别名
          prefix: "i",
        }),
      ],
    }),
    Icons({
      scale: 1, // 缩放比 相对1em
      autoInstall: true, // 自动安装
      compiler: "vue3", // 编译方式
    }),
  ],
});

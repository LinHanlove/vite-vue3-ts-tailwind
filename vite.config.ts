import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

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

  plugins: [vue()],
});

import { defineStore } from "pinia";

export const useStore = defineStore("user", {
  // 定义全局状态
  state() {
    return {
      token: null, //这里定义token，为后面储存准备
    };
  },

  /* --------它们接收state作为第一个参数---------- */
  /**
   * 取值器
   * 注意vue3取消了对getters的缓存
   * 它们只是您调用的函数。然而，你可以在getter本身中缓存一些结果，这是不常见的，但更高效
   */
  getters: {
    GETTOKEN(state) {
      return state.token;
    },
  },
  /**
   * 存值器
   */
  actions: {
    SETTOKEN(val: any) {
      /* 将传入的value赋值给state状态 */
      this.token = val;
    },
  },
  // 将会同步当前store中的所有数据到本地存储，依赖 pinia-plugin-persistedstate 插件
  persist: true,
});

export default useStore;

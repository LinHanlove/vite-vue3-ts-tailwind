import { createPinia } from "pinia";
import persistedstate from "pinia-plugin-persistedstate";
// 创建pinia实例
const pinia = createPinia();
pinia.use(persistedstate);
// 这里默认导出
export default pinia;

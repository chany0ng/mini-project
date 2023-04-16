import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store"; //Vuex 저장소 추가
import mixins from "./mixins"; //믹스인 추가

createApp(App).use(store).use(router).mixin(mixins).mount("#app");

import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import First from "../components/FirstPage.vue";
const routes = [
  {
    path: "/",
    name: "move to HomePage",
    component: Home,
  },
  {
    path: "/first",
    name: "move to FirstPage",
    component: First,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

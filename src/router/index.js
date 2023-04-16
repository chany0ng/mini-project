import { createRouter, createWebHistory } from "vue-router";
import ProductList from "../views/ProductList.vue";
import ProductDetail from "../views/ProductDetail.vue";
import ProductCreate from "../views/ProductCreate.vue";
const routes = [
  {
    path: "/",
    name: "move to HomePage",
    component: ProductList,
  },
  {
    path: "/detail",
    name: "move to detail",
    component: ProductDetail,
  },
  {
    path: "/create",
    name: "move to create",
    component: ProductCreate,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

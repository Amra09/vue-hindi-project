import { createWebHistory, createRouter } from "vue-router";
import Gallary from "@/pages/Gallary.vue"
const routes =  [
  {
    path: "/",
    name: "Gallary",
    component:Gallary
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
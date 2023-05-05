import { createRouter, createWebHistory } from "vue-router";
import FormInput from "@/views/FormInput.vue";

const routes = [
  {
    path: "/",
    name: "FormInput",
    component: FormInput,
  },
];
const router = createRouter({
  history: createWebHistory(process.env.Base_URL),
  routes,
});
export default router;

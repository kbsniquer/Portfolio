import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
let router = new VueRouter({
  routes: [
    { path: "/", name: "About", component: () => import("./components/About") },
  ],
});
export default router;

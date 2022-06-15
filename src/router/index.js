/* eslint-disable prettier/prettier */
import Vue from "vue";
import VueRouter from "vue-router";
import HelloWorld from "../views/HelloWorld.vue";
import RecipeDetail from "../views/RecipeDetail.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld,
  },
  {
    path: '/recipe/:id',
    name: 'recipe-detail',
    component: RecipeDetail,
    props: true,
  },
  // {
  //   path: "/home-view",
  //   name: "HomeView",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/HomeView.vue"),
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

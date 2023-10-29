import Vue from "vue";
import VueRouter from "vue-router";
// import HomeView from "../views/HomeView.vue";
// import ScrollingView from "../views/ScrollingView.vue";
import ArticleListView from '../views/ArticleListView.vue'
import Leetcode1512 from "../views/articles/Leetcode1512";
import OotdEpisode1 from "../views/articles/OotdEpisode1";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: ArticleListView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/article/1",
    name: "leetcode-1512",
    component: Leetcode1512,
  },
  {
    path: "/article/2",
    name: "ootd-episode-1",
    component: OotdEpisode1,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

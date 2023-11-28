import Vue from "vue";
import VueRouter from "vue-router";
// import HomeView from "../views/HomeView.vue";
// import ScrollingView from "../views/ScrollingView.vue";
import ArticleListView from '../views/ArticleListView.vue'
import Leetcode1512 from "../views/articles/Leetcode1512";
import OotdEpisode1 from "../views/articles/OotdEpisode1";
import OotdEpisode2 from "../views/articles/OotdEpisode2";
import AwsLambdaFiles from "../views/articles/AwsLambdaFiles";
import SeoulHackathon from "../views/articles/SeoulHackathon"
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: ArticleListView,
  },
  {
    path: "/article/leetcode-1512",
    name: "leetcode-1512",
    component: Leetcode1512,
  },
  {
    path: "/article/ootd-episode-1",
    name: "ootd-episode-1",
    component: OotdEpisode1,
  },
  {
    path: "/article/ootd-episode-2",
    name: "ootd-episode-2",
    component: OotdEpisode2,
  },
  {
    path: "/article/aws-lambda-files",
    name: "aws-lambda-files",
    component: AwsLambdaFiles,
  },
  {
    path: "/article/seoul-tech-impact-hackathon",
    name: "seoul-hackathon",
    component: SeoulHackathon,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

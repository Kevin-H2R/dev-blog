<template>
  <div class="d-flex align-center justify-space-between app-bar">
    <router-link to="/" style="height: 32px;">
      <img src="@/assets/logo.jpeg" class="logo" />
    </router-link>
    <div>Kebinou's dev blog</div>
    <div></div>
    <!-- <div class="categories d-flex flex-grow-1 justify-center">
      <router-link class="category" to="/">All</router-link>
      <router-link class="category" to="/leetcode">Leetcode</router-link>
      <router-link class="category" to="/random">Random</router-link>
    </div> -->
  </div>
</template>
<script>
import { articles } from '@/data/articles';
export default {
  name: "NavBar",
  computed: {
    articles: () => articles
  }
};
</script>
<style lang="scss" scoped>
@import "@/styles/theme.scss";
.app-bar {
  border-bottom: 1px solid $white-darken;
  background-color: $white !important;
  height: 32px;
}
.categories {
  gap: 10px;
}
.logo {
  height: 32px;
}
.category {
  cursor: pointer;
  text-decoration: none;
  color: $grey;
  &.router-link-exact-active {
    color: $black;
  }
  &:hover {
    color: $black;
  }
}
</style>

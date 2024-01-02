<template>
  <div class="d-flex align-center justify-space-between app-bar">
    <router-link to="/" style="height: 32px;">
      <img src="@/assets/logo.jpeg" class="logo" />
    </router-link>
    <div>Kebinou's dev blog</div>
    <v-btn to="/projects" plain>Projects</v-btn>
  </div>
</template>
<script>
import { articles } from '@/data/articles';
import router from '@/router';
export default {
  name: "NavBar",
  computed: {
    articles: () => articles
  },
  methods: {
    goHome: function () {
      if (router.currentRoute.fullPath === '/') return
      router.push('/')
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/styles/theme.scss";
.app-bar {
  // border-bottom: 1px solid $white-darken;
  background-color: $white !important;
  height: 32px;
  cursor: pointer;
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

<template>
  <div class="d-flex align-center justify-space-between app-bar">
    <div>
      <h1>Kebinou's dev blog</h1>
    </div>
    <div class="categories d-flex flex-grow-1 justify-center">
      <router-link class="category" to="/">All</router-link>
      <router-link class="category" to="/leetcode">Leetcode</router-link>
      <router-link class="category" to="/random">Random</router-link>
    </div>
    <v-spacer></v-spacer>
  </div>
</template>
<script>
export default {
  name: "NavBar",
};
</script>
<style lang="scss" scoped>
@import "@/styles/theme.scss";
.app-bar {
  border-bottom: 1px solid $background-darken;
  background-color: $background !important;
}
.categories {
  gap: 10px;
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

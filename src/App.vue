<template>
  <v-app>
    <nav-bar />
    <router-view />
  </v-app>
</template>
<script>
import NavBar from "./components/NavBar.vue";
export default {
  components: { NavBar },
  name: "App",
};
</script>

<style lang="scss" scoped>
@import "@/styles/theme.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $black;
  background-color: $white;
}
</style>

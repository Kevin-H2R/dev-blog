<template>
  <v-app>
    <nav-bar />
    <div class="content">
      <router-view />
    </div>
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
  text-align: center;
  color: $black;
  background-color: $background;
}
</style>

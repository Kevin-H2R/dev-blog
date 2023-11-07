<template>
  <v-app>
    <div class="main-container">
      <nav-bar />
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

.main-container {
  height: 95vh;
  display: flex;
  flex-direction: column;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $black;
  background-color: $white;
}
</style>

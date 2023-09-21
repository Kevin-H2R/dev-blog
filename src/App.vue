<template>
  <v-app>
    <nav-bar/>
    <v-main>
      <HelloWorld/>
    </v-main>
  </v-app>
</template>

<script>
import NavBar from './components/NavBar.vue';

export default {
  name: 'App',

  components: {
    NavBar,
  },

  data: () => ({
    //
  }),
};
</script>

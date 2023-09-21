<template>
    <v-app-bar
      app
      flat
      class="app-bar"
    >
      <div class="d-flex align-center">
        <h1>Kebinou's dev blog</h1>
      </div>
    </v-app-bar>
</template>
<script>
export default {
    name: 'NavBar'
}
</script>
<style lang="scss" scoped>
.app-bar {
    border-bottom: 1px solid #00000040;
}
</style>
<template>
  <v-card :class="getCardClass" hover>
    <v-card-title>{{ title }}</v-card-title>
    <v-card-subtitle>{{ subtitle }}</v-card-subtitle>
  </v-card>
</template>
<script>
export default {
  name: "ArticleCard",
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: false,
      default: "",
    },
    vertical: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  computed: {
    getCardClass: function () {
      return this.vertical
        ? "article-card article-card--vertical"
        : "article-card";
    },
  },
};
</script>
<style lang="scss" scoped>
.article-card {
  width: 100%;
  height: 200px;
  &--vertical {
    width: 48%;
    height: 300px;
  }
}
</style>

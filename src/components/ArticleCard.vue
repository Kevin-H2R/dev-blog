<template>
  <v-card
    :class="getCardClass"
    hover
    class="rounded-xl pa-4"
    :to="'article/' + id"
    :img="getThumbnail"
  >
    <!-- <v-img :src="getThumbnail"> -->
    <div class="pa-4">
      <div class="article-card__category">{{ category }}</div>
      <div class="article-card__title">{{ title }}</div>
      <div class="article-card__subtitle">{{ subtitle }}</div>
    </div>
    <div class="text-caption pa-4 article-card__date">
      {{ date }}
    </div>
    <!-- </v-img> -->
  </v-card>
</template>
<script>
export default {
  name: "ArticleCard",
  props: {
    id: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: false,
      default: "",
    },
    category: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: false,
      default: "",
    },
    thumbnail: {
      type: String,
      required: true,
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
    getThumbnail: function () {
      return require("@/assets/" + this.thumbnail);
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/styles/theme.scss";
.article-card {
  width: 100%;
  height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &:focus {
    &:before {
      opacity: 0;
    }
  }
  &--vertical {
    width: 48%;
    height: 300px;
  }
  &__title {
    font-size: 1.5em;
    font-weight: bold;
    color: $white;
  }
  &__subtitle {
    color: $white;
  }
  &__category {
    color: $grey;
    font-size: 0.8em;
    font-weight: bold;
  }
  &__date {
    color: $white;
  }
}
</style>

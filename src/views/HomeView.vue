<template>
  <div class="home d-flex justify-center">
    <v-col cols="12" sm="5" md="3">
      <v-row justify="center" class="home__row">
        <article-card
          v-for="(a, i) in firstColArticles()"
          :key="'first_col_article' + i"
          v-bind="a"
          :vertical="i % 3 !== 0"
        />
      </v-row>
    </v-col>
    <v-col cols="12" sm="5" md="3">
      <v-row justify="center" class="home__row">
        <article-card
          v-for="(a, i) in secondColArticles()"
          :key="'second_col_article' + i"
          v-bind="a"
          :vertical="i % 3 === 0 || i % 3 === 1"
        />
      </v-row>
    </v-col>
    <v-col cols="12" sm="5" md="3">
      <v-row justify="center" class="home__row">
        <article-card
          v-for="(a, i) in thirdColArticles()"
          :key="'third_col_article' + i"
          v-bind="a"
          :vertical="i % 3 !== 0"
        />
      </v-row>
    </v-col>
  </div>
</template>
3 7 8 12 16 17
<script>
import { articles } from "@/data/articles";
import ArticleCard from "@/components/ArticleCard.vue";
export default {
  name: "HomeView",
  components: { ArticleCard },
  methods: {
    firstColArticles: function () {
      return articles.filter((_, index) => {
        return index % 9 === 0 || index % 9 === 4 || index % 9 === 5;
      });
    },
    secondColArticles: function () {
      return articles.filter((_, index) => {
        return index % 9 === 1 || index % 9 === 2 || index % 9 === 6;
      });
    },
    thirdColArticles: function () {
      return articles.filter((_, index) => {
        return index % 9 === 3 || index % 9 === 7 || index % 9 === 8;
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.home {
  padding-top: 50px;
  gap: 30px;
  flex-wrap: wrap;
  &__row {
    gap: 10px;
  }
}
</style>

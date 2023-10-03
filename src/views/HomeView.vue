<template>
  <v-col>
    <v-row class="main">
      <v-col cols="12" sm="10" md="8">
        <div class="main__title">
          My engineer journal.
        </div>
        <div class="main__subtitle">
          I am Kevin, French software engineer. Currently in South Korea, always looking for new smart ideas and business.
        </div>
        <div class="main__caption">
          Coding problems, architecture solutions, anything I feel relevent sharing.
        </div>
      </v-col>
    </v-row>
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
  </v-col>

</template>
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
.main {
  margin: 100px 0;
  padding: 0 50px;
  &__title {
    font-size: 5vmax;
    font-weight: bold;
    margin: 25px 0;
  }
  &__subtitle {
    font-size: 2.5vmax;
    margin: 25px 0;
  }
  &__caption {
    font-size: 1.5vmax;
  }
}
</style>

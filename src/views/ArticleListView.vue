<template>
<v-container fluid class="d-flex flex-wrap">
  <v-col cols="12" sm="10" md="8" style="overflow-y: auto;">
    <v-row wrap>
      <v-col v-for="(article, index) in articles" :key="'article_' + index"
        cols="12" sm="8" md="6"
      >
        <v-card :to="'/article/' + article.id" class="article-card" hover>
          <v-img :src="getArticleImg(article.thumbnail)" class="article-card__image"/>
          <v-card-title>
            {{ article.title }}
          </v-card-title>
          <v-card-subtitle>
            {{ article.subtitle }}
          </v-card-subtitle>
          <v-card-actions class="d-flex justify-center">
            <v-btn color="orange" plain width="100%">
              Read
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-col>
  <v-col class="main" cols="12" sm="2" md="4">
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

</v-container>    
</template>
<script>
import { articles } from '@/data/articles';

export default {
    name: 'ArticleListView',
    computed: {
        articles: () => articles
    },
    methods: {
        getArticleImg: function(thumbnail) {
            return require('@/assets/' + thumbnail)
        }
    }
}
</script>
<style lang="scss" scoped>
@import "@/styles/theme.scss";
.main {
  text-align: right;
  &__title {
    font-size: 3em;
    font-weight: bold;
    margin: 25px 0;
  }
  &__subtitle {
    font-size: 2em;
    margin: 25px 0;
  }
  &__caption {
    font-size: 1.5em;
  }
}

.article-card {
  &__image {
    aspect-ratio: 2;
  }
}
</style>
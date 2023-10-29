<template>
<v-container>
  <v-row wrap>
    <v-col v-for="(article, index) in articles" :key="'article_' + index"
      cols="12" sm="6" md="4"
    >
      <v-card :to="'/article/' + article.id">
        <v-img :src="getArticleImg(article.thumbnail)"  />
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
</style>
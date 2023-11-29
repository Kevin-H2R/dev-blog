<template>
<v-container fluid class="article-view d-flex flex-wrap">
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
  <v-col cols="12" sm="10" md="8" class="articles-container">
    <v-row wrap justify="center">
      <v-col v-for="(article, index) in articles" :key="'article_' + index"
        cols="12" sm="8" md="6" 
      >
      <div class="article-thumbnail" @click="goToArticle(article.link)">
        <v-img  class="article-thumbnail__image" 
          :src="getArticleImg(article.thumbnail)"/>
        <div class="article-thumbnail__date">{{ article.date }}</div>
        <div class="article-thumbnail__title">{{ article.title }}</div>
        <div class="article-thumbnail__subtitle">{{ article.subtitle }}</div>
      </div>
        <!-- <v-card :to="'/article/' + article.link" class="article-card" hover>
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
        </v-card> -->
      </v-col>
    </v-row>
  </v-col>

</v-container>    
</template>
<script>
import { articles } from '@/data/articles';
import router from '@/router';

export default {
    name: 'ArticleListView',
    computed: {
        articles: () => articles
    },
    methods: {
        getArticleImg: function(thumbnail) {
            return require('@/assets/' + thumbnail)
        },
        goToArticle: function (link) {
          router.push('/article/' + link)
        }
    }
}
</script>
<style lang="scss" scoped>
@import "@/styles/theme.scss";

.article-thumbnail {
  cursor: pointer;
  margin: 25px 0;
  &:hover &__title {
    text-decoration: underline;
  }
  &:hover &__image {
    transform: translateY(-5px);    
  }
  &__title {
    font-size: 2em;
  }
  &__subtitle {

  }
  &__date {
    font-size: 0.8em;
    margin: 5px 0;
  }
  &__image {
    border-radius: 20px; 
    aspect-ratio: 1.5;
    transition: all ease-in-out 200ms;
  }
}
.article-view {
  height: 100%;
}
.articles-container {
  height: 100%;
  overflow-y: auto;
}
.main {
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
<template>
<div class="d-flex flex-column scroll-container">
  <div class="article" v-for="(article, index) in articles"
    :key="'article_' + index"
    :style="getArticleStyle()"
    :class="getArticleClass(index)"
    >
    {{ article.title  }}
  </div>
</div>
</template>
<script>
export default {
  name: 'ScrollingView',
  created: function () {
    addEventListener('wheel', (event) => {
      const diff = event.deltaY > 0 ? 1 : -1
      if (diff < 0 && this.index === 0) return
      if (diff > 0 && this.index === this.articles.length - 1) return
      this.index += diff
    })
  },
  methods: {
    getArticleStyle: function () {
      return `transform: translateY(${-this.index * 20}vh);`
    },
    getArticleClass: function (articleIndex) {
      return articleIndex === this.index ? 'article--active' : ''
    }
  },
  data: function () {
    return {
      index: 0,
      articles: [
        {title: 'Article 1'},
        {title: 'Article 2'},
        {title: 'Article 3'},
        {title: 'Article 4'},
        {title: 'Article 5'},
        {title: 'Article 6'},
        {title: 'Article 7'},
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
@import "@/styles/theme.scss";
.scroll-container {
  padding-top: 17vh;
  .article {
    display: flex;
    align-items: center;
    height: 33vh;
    transition: transform ease-in-out 200ms;
    &--active {
      font-size: 4em;
      background: red;
    }
  }
}
</style>
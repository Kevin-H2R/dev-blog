const { defineConfig } = require('@vue/cli-service')
const SitemapPlugin = require('sitemap-webpack-plugin').default

const paths = [
  {
      path: '/',
      lastmod: '2023-11-16',
      priority: 1.0,
      changefreq: 'daily'
  },
  {
      path: '/article/leetcode-1512',
      lastmod: '2023-11-16',
      priority: 0.9,
      changefreq: 'yearly'
  },
  {
      path: '/article/ootd-episode-1',
      lastmod: '2023-11-16',
      priority: 0.9,
      changefreq: 'yearly'
  },
  {
      path: '/article/ootd-episode-2',
      lastmod: '2023-11-16',
      priority: 0.9,
      changefreq: 'yearly'
  },
  {
      path: '/article/aws-lambda-files',
      lastmod: '2023-11-16',
      priority: 0.9,
      changefreq: 'yearly'
  },
]

module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  configureWebpack: {
    plugins: [
      new SitemapPlugin({base: 'https://dev.kebinou.com', paths})
    ]
  }
})

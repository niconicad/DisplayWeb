<template>
  <component :is="getArticleComponent(article.type)" :article="article" />
</template>

<script>
import ArticleDetailTypeA from './ArticleDetailTypeA.vue';
import ArticleDetailTypeB from './ArticleDetailTypeB.vue';

export default {
  name: 'ArticleDetail',
  components: {
    ArticleDetailTypeA,
    ArticleDetailTypeB
  },
  data() {
    return {
      article: {}
    }
  },
  created() {
    const articleId = this.$route.params.id;
    const articles = [
      {id: 1, title: '文章一', author: '作者A', content: '这是文章一的内容...', image: 'path/to/image1.jpg', type: 'A'},
      {id: 2, title: '文章二', author: '作者B', content: '这是文章二的内容...', image: 'path/to/image2.jpg', type: 'B'},
      {id: 3, title: '文章三', author: '作者C', content: '这是文章三的内容...', image: 'path/to/image3.jpg', type: 'A'}
      // 更多文章...
    ];
    this.article = articles.find(article => article.id == articleId);
  },
  methods: {
    getArticleComponent(type) {
      switch (type) {
        case 'A':
          return 'ArticleDetailTypeA';
        case 'B':
          return 'ArticleDetailTypeB';
        default:
          return 'ArticleDetailTypeA';
      }
    }
  }
}
</script>

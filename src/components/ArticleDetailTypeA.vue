<template>
  <div class="article-detail-type-a">
    <h1>{{ article.title }}</h1>
    <p>作者: {{ article.author }}</p>
    <img v-if="article.image" :src="article.image" alt="Article Image" class="article-image" />
    <div class="content">
      {{ article.content }}
    </div>
    <h1>{{article.title}}</h1>
  </div>
</template>

<script>
export default {
  name: 'ArticleDetailTypeA',
  props: {
    article: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.article-detail-type-a {
  padding: 20px;
}
.article-image {
  width: 100%;
  height: auto;
  margin-top: 20px;
}
.content {
  margin-top: 20px;
}
</style>

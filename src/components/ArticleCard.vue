<template>
  <div class="article-card" @click="goToDetail">
    <h2>{{ title }}</h2>
    <p class="author">作者: {{ author }}</p>
    <p class="summary">{{ summary }}</p>
  </div>
</template>

<script>
export default {
  name: 'ArticleCard',
  props: {
    id: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
    },
    summary: {
      type: String,
      required: true
    }
  },
  methods: {
    goToDetail() {
      // 假设你的详情页路径是 /article/:id
      this.$router.push({ path: `/article/${this.id}` });
    }
  }
}
</script>

<style scoped>
.article-card {
  border: 1px solid #ccc;
  padding: 20px;
  margin: 10px 0;
  cursor: pointer;
  transition: box-shadow 0.3s ease;

}
.article-card:hover {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}
.article-card h2 {
  text-align: left;
  font-size: 1.5rem;
  line-height: 3rem;
  font-weight: 700;
  text-decoration: none;
  color: black;
}
.author {
  color: #666;
  margin-top: 10px;
  font-size: 0.875rem;
}
.summary {
  text-align: left;
  margin-bottom: 1.875rem;
  font-size: 1rem;
  line-height: 1.875rem;
  color: rgb(46, 60, 75);
}
</style>

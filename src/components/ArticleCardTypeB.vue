<template>
  <div class="article-card-type-b" @click="goToDetail">
    <div class="header">
      <h2>{{ title }}</h2>
      <p class="author">作者: {{ author }}</p>
    </div>
    <div class="body">
      <p class="summary">{{ summary }}</p>
    </div>
    <img v-if="image" :src="image" alt="Article Image" class="article-image" />
  </div>
</template>

<script>
export default {
  name: 'ArticleCardTypeB',
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
    },
    image: {
      type: String,
      default: ''
    }
  },
  methods: {
    goToDetail() {
      this.$router.push({ path: `/article/${this.id}` });
    }
  }
}
</script>

<style scoped>
.article-card-type-b {
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  padding: 20px;
  margin: 10px 0;
  cursor: pointer;
  transition: box-shadow 0.3s ease;
  box-sizing: border-box;
  max-width: 300px;
}
.article-card-type-b:hover {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}
.header {
  margin-bottom: 10px;
}
.body {
  flex-grow: 1;
}
.article-image {
  width: 100%;
  height: auto;
  object-fit: cover;
}
.author {
  font-weight: bold;
  color: #555;
}
.summary {
  color: #777;
}
</style>

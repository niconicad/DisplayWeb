<template>
  <div class="article-card-type-a" @click="goToDetail">
    <img v-if="image" :src="image" alt="Article Image" class="article-image" />
    <div class="article-content">
      <h2>{{ title }}</h2>
      <p class="author">作者: {{ author }}</p>
      <p class="summary">{{ summary }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArticleCardTypeA',
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
.article-card-type-a {
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
.article-card-type-a:hover {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}
.article-image {
  width: 100%;
  height: auto;
  object-fit: cover;
}
.article-content {
  padding: 10px 0;
}
.author {
  font-weight: bold;
  color: #555;
}
.summary {
  color: #777;
}
</style>

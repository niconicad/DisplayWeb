<template>
  <div>
    <input v-model="searchQuery" @input="filterArticles" placeholder="搜索文章..." class="search-input" />
    <div class="article-list">
      <component
        v-for="article in paginatedArticles"
        :is="getArticleComponent(article.type)"
        :key="article.id"
        :id="article.id"
        :title="article.title"
        :author="article.author"
        :summary="article.summary"
        :image="article.image"
      />
    </div>
    <div class="pagination">
      <button @click="prevPage" :disabled="currentPage === 1">上一页</button>
      <span>第 {{ currentPage }} 页 / 共 {{ totalPages }} 页</span>
      <button @click="nextPage" :disabled="currentPage === totalPages">下一页</button>
    </div>
  </div>
</template>

<script>
import ArticleCardTypeA from './ArticleCardTypeA.vue';
import ArticleCardTypeB from './ArticleCardTypeB.vue';

export default {
  name: 'ArticleList',
  components: {
    ArticleCardTypeA,
    ArticleCardTypeB
  },
  data() {
    return {
      articles: [
        {
          id: 1,
          title: '文章一',
          author: '作者A',
          summary: '这是文章一的简介...',
          image: '@/assets/logo.png',
          type: 'A'
        },
        {
          id: 2,
          title: '文章二',
          author: '作者B',
          summary: '这是文章二的简介...',
          image: 'path/to/image2.jpg',
          type: 'B'
        },
        {
          id: 3,
          title: '文章三',
          author: '作者C',
          summary: '这是文章三的简介...',
          image: 'path/to/image3.jpg',
          type: 'A'
        }
        // 更多文章...
      ],
      searchQuery: '',
      filteredArticles: [],
      currentPage: 1,
      articlesPerPage: 2
    }
  },
  computed: {
    totalPages() {
      return Math.ceil(this.filteredArticles.length / this.articlesPerPage);
    },
    paginatedArticles() {
      const start = (this.currentPage - 1) * this.articlesPerPage;
      const end = start + this.articlesPerPage;
      return this.filteredArticles.slice(start, end);
    }
  },
  created() {
    this.filterArticles();
  },
  methods: {
    filterArticles() {
      this.filteredArticles = this.articles.filter(article =>
          article.title.includes(this.searchQuery) ||
          article.author.includes(this.searchQuery) ||
          article.summary.includes(this.searchQuery)
      );
      this.currentPage = 1; // 重置到第一页
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    getArticleComponent(type) {
      switch (type) {
        case 'A':
          return 'ArticleCardTypeA';
        case 'B':
          return 'ArticleCardTypeB';
        default:
          return 'ArticleCardTypeA';
      }
    }
  }
}
</script>

<style scoped>
.article-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.pagination button {
  margin: 0 10px;
}

.search-input {
  margin-bottom: 20px;
  padding: 10px;
  width: 100%;
  max-width: 300px;
  box-sizing: border-box;
}
</style>

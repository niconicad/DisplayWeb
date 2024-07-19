<template>
  <div class="category-page">
    <h2>{{ category }}</h2>
    <p>Details about the {{ category }} category.</p>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

export default {
  name: 'CategoryPage',
  setup() {
    const route = useRoute();
    const category = ref(route.params.category);

    onMounted(() => {
      category.value = route.params.category;
    });

    return { category };
  }
}
</script>

<style scoped>
/* Add any specific styles for dataset category */
.category-page {
  min-height: 100vh;
}
</style>

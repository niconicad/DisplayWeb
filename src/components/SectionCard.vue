<template>
  <div class="section-card">
    <h2>{{ title }}</h2>
    <p>{{ content }}</p>
  </div>
</template>

<script>
export default {
  name: 'SectionCard',
  props: {
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.section-card {
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
}
h2 {
  margin-top: 0;
  font-size: 24px;
  font-weight: bold;
  font-family: 'Open Sans', sans-serif;
  line-height: 1.2;
}
p {
  margin-top: 5px;
  font-size: 16px;
  line-height: 1.5;
  color: #666;
}
</style>

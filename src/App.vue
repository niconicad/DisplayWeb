<template>
  <div class="app">
    <AllHeader />
    <div class="content">
      <router-view/>
    </div>
    <AllFooter />
  </div>
</template>

<script>
import AllHeader from './components/Header.vue';
import AllFooter from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    AllHeader,
    AllFooter
  }
}
</script>

<style>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f4f4f4;
  min-height: 100vh;
}

.content {

  min-height: 80vh;
}
.app{

  flex-direction: column;
  min-height: 100vh;
  display: flex;
}
AllHeader {
  max-width: 100%;
}
</style>

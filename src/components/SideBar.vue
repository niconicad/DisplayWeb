<template>

  <div class="sidebar">
    <h2>Menu</h2>
    <hr class="sidebar-hr" />
    <ul>
      <li v-for="item in items" :key="item.name" :class="{ active: $route.path === item.path }">
        <router-link :to="item.path">
          {{ item.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SideBar',
  data() {
    return {
      items: [
        { name: 'Atmosphere', path: '/about' },
        { name: 'Climate Indices', path: '/climate-indices'},
        {name: 'Cryosphere', path: '/cryosphere'},
        {name: 'Land', path: '/land'},
        {name: 'Ocean', path: '/ocean'},
        {name: 'Paleoclimate', path: '/paleoclimate'},
        {name: 'Reanalysis', path: '/reanalysis'}
      ]
    };
  }
};
</script>

<style scoped>
.sidebar {
  background-color: #2c3e50;
  color: white;
  height: 70%;
}

ul {
  list-style: none;
  padding: 0;
  margin-top: 0;
  margin-bottom: 20px;
}

li {
  padding: 20px;
  transition: background-color 0.3s;
}

li:hover ,
li:hover a {
  background-color: #34495e;
}

.router-link-active,
.active {
  font-weight: bold;
  background-color: #1abc9c;
}


a {
  text-decoration: none;
  color: white;
  display: block;
  transition: background-color 0.3s;
}
a:hover {

}
.sidebar h2 {
  font-size: 18px;
  padding: 20px;
  margin: 0;
  text-align: left;
  background-color: rgba(26, 188, 156, 0.84);
}
.sidebar-hr {
  margin: 0;
  border: none;
  border-top: 1px solid #34495e;
}
</style>

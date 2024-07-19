<template>
  <header>
    <div class="top-bar">
      <div class="logo">

          <img src="@/assets/logo.png" alt="NCAR Logo" />

        <div class="logo-text">
          <h1>Climate Data Guide</h1>
          <span>CDG</span>
        </div>
      </div>
      <div class="header-right">
        <a href="#" class="contact-us">联系我们</a>
        <div class="search-bar">
          <input type="text" placeholder="搜索..." />
          <button>搜索</button>
        </div>
      </div>
    </div>
    <nav>
      <router-link to="/">主页</router-link>
      <router-link to="/about">关于</router-link>
      <router-link to="/climate-data">气候数据</router-link>
      <router-link to="/tools-methods">工具与方法</router-link>
      <router-link to="/network-experts">专家网络</router-link>
      <router-link to="/updates">更新</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AllHeader'
}
</script>

<style scoped>
header {
  background-color: white;
  color: #333;
  border-bottom: 1px solid #eaeaea;
}

.top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
}

.logo {
  display: flex;
  align-items: center;
}

.logo img {
  height: 50px;
  margin-right: 1rem;
  padding-right: 0.5rem;
}

.logo-text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 1rem;
  border-left: 2px solid #646b75;
}

.logo-text h1 {
  margin: 0;
  font-size: 1.5rem;
}

.logo-text span {
  font-size: 0.75rem;
  color: #555;
}



nav {
  display: flex;
  justify-content: left;
  background-color: white;

  box-shadow: 0  2px 4px rgba(0, 0, 0, 0.29);

}

nav a {
  color: #333;
  padding: 0.75rem 1.75rem;
  text-decoration: none;
  font-weight: bold;
  position: relative;
  transition: all 0.3s ease;
}

nav a::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: rgb(195, 226, 246);
  transform: scaleX(0);
  transform-origin: bottom right;
  transition: transform 0.3s ease;
}

nav a:hover {
  color: #ffffff;
  background-color: #555;
  scale: 1.1;
}

nav a:hover::after {
  transform: scaleX(0);
  transform-origin: bottom left;
}


.header-right {
  display: flex;
  align-items: center;
}

.contact-us {
  margin-right: 1rem;
  color: #333;
  text-decoration: none;
  font-weight: bold;
}

.search-bar {
  display: flex;
  align-items: center;
}

.search-bar input {
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.search-bar button {
  padding: 0.5rem 1rem;
  background-color: #13a2fa;
  border: none;
  color: white;
  margin-left: 0.5rem;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s, border-color 0.3s;
}

.search-bar button:hover {
  background-color: #0056b3;
}

</style>

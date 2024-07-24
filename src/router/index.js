import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/Home.vue';
import CategoryPage from '../components/Category.vue';
import ArticleDetail from "@/components/ArticleDetail.vue";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/:category',
    name: 'Category',
    component: CategoryPage
  },
  {
    path:'/hello',
    name: 'Hello',
    component: () => import('../components/HelloWorld.vue')
  },

  {
    path: '/about',
    name: 'About',
    component: () => import('../components/About.vue')
  },
  {
    path: '/articles',

    name: 'Articles',
    component: () => import('../components/Articles.vue')
  },
  {
      path: '/article/:id',
      name: 'ArticleDetail',
      component: ArticleDetail
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;

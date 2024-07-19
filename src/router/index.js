import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/Home.vue';
import CategoryPage from '../components/Category.vue';

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
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;

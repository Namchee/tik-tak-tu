import { defineAsyncComponent } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

// Define app routes
const routes = [
  {
    path: '/',
    component: defineAsyncComponent(() => import('./../components/Splash')), 
  },
  {
    path: '/game',
    component: defineAsyncComponent(() => import('./../components/Game')),
  }
];

// Create and export vue router instance in 'history' mode
export default createRouter({
  history: createWebHistory(),
  routes,
});

import { createRouter, createWebHistory } from 'vue-router';

// @ts-expect-error Since the HomePage.vue does not have `lang="ts"` for the script setup
import HomePage from '@/views/HomePage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/new',
      name: 'new-cafe',
      // @ts-expect-error script setup not ts
      component: () => import('@/views/NewCafePage.vue'),
    },
  ],
});

export default router;

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
    {
      path: '/cafe/:id',
      name: 'edit-cafe',
      // @ts-expect-error script setup not ts
      component: () => import('@/views/EditCafePage.vue'),
    },
    {
      path: '/sign-in',
      name: 'sign-in',
      // @ts-expect-error script setup not ts
      component: () => import('@/views/SignInPage.vue'),
    },
  ],
});

export default router;

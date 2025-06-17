<script setup lang="ts">
import AppNavbar from '@/components/AppNavbar.vue';
import AppLayout from '@/layouts/AppLayout.vue';

import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<template>
  <AppLayout>
    <!-- <template v-slot:topbar> -->
    <template #topbar>
      <AppNavbar />
    </template>
    <template v-slot:content>
      <Suspense>
        <RouterView :key="route.fullPath" />
        <template v-slot:fallback>
          <p>Content not found. Contact your developer for more info.</p>
        </template>
      </Suspense>
    </template>
  </AppLayout>
</template>

<style scoped></style>
